// Build-time static rendering for SEO / AEO / GEO.
//
// Runs after `vite build` (client) and `vite build --ssr src/entry-server.tsx`.
// For every URL in src/seo/routes.ts it writes a fully rendered HTML file
// (content, <title>, meta, canonical, Open Graph, JSON-LD) so that search
// engines and AI crawlers that do not execute JavaScript (GPTBot, ClaudeBot,
// PerplexityBot, Google-Extended, Bingbot snapshots...) see the real page.
// It also generates sitemap.xml, llms.txt, llms-full.txt and server redirect
// rules from the same route registry.
import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js')

const { render, globalSchema, faqSchema, siteRoutes, redirects, blogPosts, BRAND, SITE_URL } = await import(
  pathToFileURL(ssrEntry).href
)

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const safeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c')
const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
const stripTags = (html) =>
  decode(
    html
      .replace(/<(script|style|svg|video|noscript)[\s\S]*?<\/\1>/g, ' ')
      .replace(/<[^>]+>/g, ' '),
  )
    .replace(/\s+/g, ' ')
    .trim()

// Pull FAQ pairs out of the rendered markup (elements marked data-faq-q / data-faq-a).
const extractFaqs = (html) => {
  const re = /<(\w+)\b[^>]*?\sdata-faq-(q|a)\b[^>]*>([\s\S]*?)<\/\1>/g
  const items = []
  let pending = null
  for (const m of html.matchAll(re)) {
    const text = stripTags(m[3])
    if (m[2] === 'q') pending = text.replace(/^(\d+[.)]\s*|Q:\s*)/i, '').trim()
    else if (pending) {
      items.push({ question: pending, answer: text })
      pending = null
    }
  }
  return items
}

const globalSchemaTag = `<script type="application/ld+json">${safeJson(globalSchema())}</script>`

const buildPage = (url) => {
  const r = render(url)
  const faqs = extractFaqs(r.html)
  let head = r.headTags
  if (faqs.length && !r.robots.startsWith('noindex')) {
    head += `\n    <script data-seo data-seo-faq="${url}" type="application/ld+json">${safeJson(faqSchema(url, faqs))}</script>`
  }
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${r.title.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</title>`)
    .replace('<!--seo-head-->', head)
    .replace('<!--global-schema-->', globalSchemaTag)
    .replace('<!--app-html-->', r.html)
  return { html, faqs, r }
}

const outFile = (url) => (url === '/' ? path.join(dist, 'index.html') : path.join(dist, `${url.slice(1)}.html`))

const pages = []
for (const route of siteRoutes) {
  const { html, faqs, r } = buildPage(route.path)
  if (!r.html.trim()) throw new Error(`Empty render for ${route.path}`)
  const file = outFile(route.path)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, html)
  const mainMatch = r.html.match(/<main>([\s\S]*)<\/main>/)
  pages.push({ route, title: r.title, description: r.description, faqs, text: stripTags(mainMatch ? mainMatch[1] : r.html) })
}

// 404 page (also used as SPA fallback for unknown URLs; it is noindex).
fs.writeFileSync(path.join(dist, '404.html'), buildPage('/__not-found__').html)

// ---------- sitemap.xml ----------
const gitDate = (() => {
  try {
    return execSync('git log -1 --format=%cs -- src', { cwd: root }).toString().trim()
  } catch {
    return ''
  }
})() || new Date().toISOString().slice(0, 10)

const postBySlug = Object.fromEntries(blogPosts.map((p) => [`/blog/${p.slug}`, p]))
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${siteRoutes
  .map((r) => {
    const post = postBySlug[r.path]
    const lastmod = post ? post.dateModified || post.datePublished : gitDate
    const loc = r.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${r.path}`
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority.toFixed(1)}</priority>\n  </url>`
  })
  .join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)

// ---------- llms.txt (https://llmstxt.org) ----------
const abs = (p) => (p === '/' ? `${SITE_URL}/` : `${SITE_URL}${p}`)
const section = (title, kinds) => {
  const list = pages.filter((p) => kinds.includes(p.route.kind))
  if (!list.length) return ''
  return `## ${title}\n\n${list.map((p) => `- [${p.route.label}](${abs(p.route.path)})${p.description ? `: ${p.description}` : ''}`).join('\n')}\n`
}
const loc = BRAND.locations
  .map((l) => `  - ${l.streetAddress}, ${l.addressLocality}, ${l.addressRegion} ${l.postalCode}, USA`)
  .join('\n')

const llms = `# ${BRAND.name}

> ${BRAND.description}

Key facts:
- Company: ${BRAND.name} (also written "AlphaMedi Assist")
- What it does: outsourced medical billing and revenue cycle management (RCM) for U.S. healthcare providers
- Services: medical billing, medical coding (ICD-10-CM, CPT, HCPCS), denial management, A/R follow-up, payment posting, provider credentialing and payer enrollment, virtual medical assistants, virtual medical receptionists, healthcare SEO
- Specialties: billing support for 90+ specialties, with dedicated pages for ${pages.filter((p) => p.route.kind === 'specialty').length} specialties
- Compliance: HIPAA-compliant workflows
- Service area: all 50 U.S. states (remote), offices in Virginia and Florida
- Phone: ${BRAND.telephoneDisplay}
- Email: ${BRAND.email}
- Offices:
${loc}
- Free consultation: ${SITE_URL}/free-consultation

${section('Core pages', ['home', 'hub', 'page'])}
${section('Services and locations', ['service', 'location'])}
${section('Medical billing by specialty', ['specialty'])}
${section('Articles', ['blog-index', 'blog-post'])}
## Optional

- [Full text of all pages](${SITE_URL}/llms-full.txt)
- [Free consultation](${SITE_URL}/free-consultation)
- [Privacy policy](${SITE_URL}/privacy-policy)
- [Terms and conditions](${SITE_URL}/terms-and-conditions)
`
fs.writeFileSync(path.join(dist, 'llms.txt'), llms.replace(/\n{3,}/g, '\n\n'))

const llmsFull = [
  `# ${BRAND.name}: full site content\n\n> ${BRAND.description}\n\nSource: ${SITE_URL}/  |  Generated: ${gitDate}\n`,
  ...pages
    .filter((p) => !['legal', 'conversion'].includes(p.route.kind))
    .map((p) => {
      const faq = p.faqs.length
        ? `\n\n### Frequently asked questions\n\n${p.faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join('\n\n')}`
        : ''
      return `\n---\n\n## ${p.title}\n\nURL: ${abs(p.route.path)}\n\n${p.text}${faq}\n`
    }),
].join('')
fs.writeFileSync(path.join(dist, 'llms-full.txt'), llmsFull)

// ---------- server redirect rules ----------
const entries = Object.entries(redirects)
const fill = (file, marker, lines) => {
  const p = path.join(dist, file)
  if (!fs.existsSync(p)) return
  fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replace(marker, lines.join('\n')))
}
fill('_redirects', '# @@REDIRECTS@@', entries.map(([from, to]) => `${from}  ${to}  301!`))
fill('.htaccess', '# @@REDIRECTS@@', entries.map(([from, to]) => `  RewriteRule ^${from.slice(1).replace(/[.]/g, '\\.')}/?$ ${to} [R=301,L]`))
fill(
  'web.config',
  '<!-- @@REDIRECTS@@ -->',
  entries.map(
    ([from, to], i) =>
      `        <rule name="Redirect ${i + 1}" stopProcessing="true">\n          <match url="^${from.slice(1).replace(/[.]/g, '\\.')}/?$" />\n          <action type="Redirect" url="${to}" redirectType="Permanent" />\n        </rule>`,
  ),
)

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })

const faqPages = pages.filter((p) => p.faqs.length)
console.log(
  `Prerendered ${pages.length} pages (+404). FAQ schema on ${faqPages.length} pages (${faqPages.reduce((n, p) => n + p.faqs.length, 0)} Q&As). sitemap.xml, llms.txt, llms-full.txt written.`,
)
