// Search Console automation, run after each deploy (GitHub Actions).
// - Submits the sitemap so Google re-reads it whenever the site changes.
// - Inspects key URLs and prints their Google index status.
// Auth: service account JSON in env GOOGLE_SA_JSON (GitHub secret). The
// service account must be an Owner/Full user of the Search Console property
// and the "Google Search Console API" must be enabled in its Cloud project.
// No dependencies: signs the OAuth JWT with node:crypto.
import crypto from 'node:crypto'

const SITE = process.env.GSC_SITE || 'https://alphamediassist.com/'
const SITEMAP = `${SITE}sitemap.xml`
const INSPECT = (process.env.GSC_INSPECT_PATHS ||
  '/,/medical-billing-services,/revenue-cycle-management-services,/medical-billing-services-florida,/medical-billing-services-virginia,/medical-coding-services,/medical-credentialing-service,/specialties/cardiology,/blog,/blog/how-much-does-medical-billing-cost')
  .split(',').map((p) => SITE.replace(/\/$/, '') + p)

const raw = process.env.GOOGLE_SA_JSON
if (!raw) { console.log('GOOGLE_SA_JSON not set: skipping Search Console sync.'); process.exit(0) }
const sa = JSON.parse(raw)

const b64 = (o) => Buffer.from(typeof o === 'string' ? o : JSON.stringify(o)).toString('base64url')
const now = Math.floor(Date.now() / 1000)
const unsigned = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({
  iss: sa.client_email, scope: 'https://www.googleapis.com/auth/webmasters',
  aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600,
})}`
const jwt = `${unsigned}.${crypto.sign('RSA-SHA256', Buffer.from(unsigned), sa.private_key).toString('base64url')}`

const tokRes = await fetch('https://oauth2.googleapis.com/token', {
  method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: jwt }),
})
const tok = await tokRes.json()
if (!tok.access_token) { console.error('Token error:', JSON.stringify(tok)); process.exit(1) }
const auth = { authorization: `Bearer ${tok.access_token}` }
const enc = encodeURIComponent

// 1) Submit sitemap
const sub = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${enc(SITE)}/sitemaps/${enc(SITEMAP)}`, { method: 'PUT', headers: auth })
console.log(`Sitemap submit ${SITEMAP}: HTTP ${sub.status}${sub.ok ? '' : ' ' + (await sub.text()).slice(0, 300)}`)

// 2) Sitemap status
const sm = await (await fetch(`https://www.googleapis.com/webmasters/v3/sites/${enc(SITE)}/sitemaps`, { headers: auth })).json()
for (const s of sm.sitemap ?? []) {
  const c = (s.contents ?? []).map((x) => `${x.type}: submitted ${x.submitted}`).join(', ')
  console.log(`  ${s.path} | last submitted ${s.lastSubmitted ?? '-'} | last downloaded ${s.lastDownloaded ?? '-'} | errors ${s.errors ?? 0} | ${c}`)
}

// 3) URL inspection
console.log('\nIndex status:')
for (const url of INSPECT) {
  const r = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
    method: 'POST', headers: { ...auth, 'content-type': 'application/json' },
    body: JSON.stringify({ inspectionUrl: url, siteUrl: SITE, languageCode: 'en-US' }),
  })
  const j = await r.json()
  const s = j.inspectionResult?.indexStatusResult
  console.log(s ? `  ${s.coverageState.padEnd(40)} ${url}  (last crawl ${s.lastCrawlTime ?? 'never'})` : `  ERROR ${r.status} ${url} ${JSON.stringify(j).slice(0, 200)}`)
}
