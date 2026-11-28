# SEO, AEO & GEO: Alpha Medi Assist

**SEO** helps the site rank in Google and Bing. **AEO** (Answer Engine Optimization) helps it win featured snippets, "People also ask" boxes and voice answers. **GEO** (Generative Engine Optimization) gets it cited in ChatGPT, Claude, Perplexity, Gemini, Google AI Overviews and Copilot.

## 1. Audit: what was wrong (before this change)

| # | Problem | Impact |
|---|---------|--------|
| 1 | **The site was a client-side-only React SPA.** Every URL returned the same empty `<div id="root">` with the same title and description. | AI crawlers (GPTBot, ClaudeBot, PerplexityBot…) do not run JavaScript, so they saw **no content at all**. Google had to render JS to see anything, and every page shared one title in the raw HTML. This was the biggest single GEO blocker. |
| 2 | **sitemap.xml listed 25 URLs that don't exist** (`/services/medical-coding`, `/specialties`, `/about` …), while 8 real URLs were missing from it. | Wasted crawl budget, plus soft-404s submitted to Google. |
| 3 | **27 internal links pointed to `/specialties`**, which had no route (blank page), and 24 linked to `/about`, a duplicate of `/about-us`. | Broken links and duplicate content. |
| 4 | Unknown URLs returned **HTTP 200 with a blank page**. | Soft 404s. |
| 5 | No canonical tags, Open Graph or Twitter tags, and **no structured data** (schema.org). | No rich results, no entity understanding, ugly social shares. |
| 6 | FAQ answers were only inserted into the DOM **after a click**. | 192 Q&As were invisible to crawlers and answer engines. |
| 7 | Photos were up to **25 MB each** (187 MB image folder). | Very poor LCP / Core Web Vitals on mobile. |
| 8 | IIS `web.config` declared `<staticContent>` twice (IIS rejects that) and cached HTML for 365 days. | Config error, and updates would not reach returning visitors. |
| 9 | Blog posts had no date or author. | Weak E-E-A-T and freshness signals. |
| 10 | Brand written three ways in titles ("AlphaMedi Assist", "Alpha Medi Assist", none). Three pages had no meta description, and several titles were over 60 characters. | Entity confusion and truncated SERP titles. |

## 2. What was implemented

### Build-time prerendering (the core fix)
`npm run build` now runs three steps:
1. The normal client build (`vite build`).
2. A server build of `src/entry-server.tsx`.
3. `scripts/prerender.mjs`, which renders every route in `src/seo/routes.ts` to a complete static HTML file (`dist/about-us.html`, `dist/specialties/cardiology.html` …). Each file has the full page text, its own title, description, canonical, OG/Twitter tags and JSON-LD.

In the browser, React **hydrates** that HTML (`src/main.tsx`), so the site behaves exactly as before. Verified in Chromium: no hydration errors, client navigation updates the head tags, and the FAQ accordions still work.

### Generated automatically from `src/seo/routes.ts` on every build
- `sitemap.xml`: all 41 real URLs, with `lastmod` taken from git history and from blog post dates.
- `llms.txt`: an [llmstxt.org](https://llmstxt.org) summary for AI engines (key facts, NAP, every page with a description).
- `llms-full.txt`: plain-text content of every page, including all FAQs.
- 301 redirect rules for Apache (`.htaccess`), Netlify (`_redirects`) and IIS (`web.config`).
- `404.html`, served with a real 404 status and marked `noindex`.

### Structured data (JSON-LD)
- **Every page:** `Organization` + `ProfessionalService` with logo, phone, email, `sameAs` socials and `knowsAbout`. There is one `ProfessionalService` entity per office (Spotsylvania VA, St. Petersburg FL), plus `WebSite`.
- **Per page:** `WebPage` (or `AboutPage`, `ContactPage`, `CollectionPage`) and `BreadcrumbList`.
- **Service pages and 23 specialty pages:** `Service`, with the organization as `provider` and `areaServed: US`.
- **Blog posts:** `BlogPosting` with `datePublished` / `dateModified` and author.
- **32 pages:** `FAQPage` (192 Q&As). It is built automatically from any element marked `data-faq-q` / `data-faq-a`.

The business facts live in **one file: `src/seo/site.ts`**. Keep it identical to the Google Business Profiles.

### Other fixes
- `PageTitle` (same props as before) now manages title, description, canonical, robots, OG/Twitter and JSON-LD.
- Fixed 51 internal links. Added 301s for every old sitemap URL. Added a real `NotFound` page.
- FAQ answers are now always in the HTML. They are visually collapsed with `hidden`, which Google indexes.
- Images: 187 MB down to 32 MB. Photos were resized to a maximum of 1920px at quality 80, with the same filenames. Added `public/og-image.jpg` (1200×630) and `public/logo.png`.
- `robots.txt` explicitly allows the AI search and answer bots and blocks `/api/`.
- Rewrote titles and descriptions where they were missing or too long, and used one brand spelling everywhere.
- Blog posts show "By … · Updated <date>". Dates live in `src/data/blogPosts.ts`.
- `/book-appointment` builds its date list in the browser only, so the prerendered HTML never shows stale dates.

## 3. Deployment checklist (do once)

1. **Deploy the whole `dist/` folder**, including the dotfiles `.htaccess`, `_redirects` and `web.config`. Only the file for your host matters.
2. Test after deploying:
   - `curl -I https://www.alphamediassist.com/about` should return `301` to `/about-us`.
   - `curl -I https://www.alphamediassist.com/xyz` should return `404`.
   - `curl -s https://www.alphamediassist.com/specialties/cardiology | grep "<h1"` should show the heading **in the raw HTML**.
3. On Apache, uncomment the HTTPS + www block in `.htaccess` once you've confirmed both hostnames hit the server.
4. **Google Search Console:** submit `/sitemap.xml`, inspect 3–4 URLs, and request indexing for the home page and the service pages.
5. **Bing Webmaster Tools:** verify the site and submit the sitemap. Bing powers ChatGPT search and Copilot, so it matters for GEO.
6. Validate a few pages at https://validator.schema.org and https://search.google.com/test/rich-results.

## 4. Roadmap: next priorities

### P1: content gaps on money keywords (SEO)
- **Create a dedicated `/medical-billing-services` page.** "Medical billing services" is the #1 commercial keyword, and there is currently no page for it (the home page carries it alone). A `medical-billing` entry already exists in `src/data/services.ts` but has no route and too little content. Expand it to 1,500+ words: process, pricing model, KPIs, payers, EHRs supported and FAQs.
- **Make the 23 specialty pages unique.** They share one template, with near-identical FAQs and the same "Dr. Adam / 6 years" testimonial. For each specialty, add the real specifics: top CPT/HCPCS codes, common modifiers (e.g. -25, -59, -26/-TC for radiology and cardiology), typical denial reasons, payer and prior-authorization rules, and documentation tips. That expertise is what both Google and LLMs reward and cite.
- **Pricing page** (`/medical-billing-cost`): "How much does medical billing cost?" is a huge AEO query. Give real ranges (for example, % of collections vs. flat fee), what's included, and an ROI example.
- **"In-house vs outsourced medical billing"** comparison page, with a table.

### P1: trust and E-E-A-T
- Replace generic testimonials with **real, attributable** ones: name, practice, city and, ideally, a link or a Google review. Repeated anonymous quotes across 23 pages look fabricated to both users and quality raters.
- Add **named authors and reviewers** with credentials (CPC, CPB, CRCR) to blog posts. Set `author` in `blogPosts.ts`. Add a team section on About.
- Use **one consistent phone number per location**. The single 424 (Los Angeles) number is used for VA and FL offices; local numbers help local packs.
- Back the claims shown on the site ("98% net collection rate", "90+ specialties", "92% first-pass rate") with a short methodology note or a case study. LLMs prefer citing sourced numbers.

### P2: AEO formatting (apply to every service and specialty page)
- Put a **40–60 word direct answer** right under each H1 or H2 ("Cardiology medical billing is…"). Snippets and AI answers lift these verbatim.
- Phrase H2s as the actual questions people search for.
- Add **comparison tables and numbered process lists**. These are featured-snippet formats.
- Remove the "1.", "2." numbering from FAQ question text in the specialty pages. The schema strips it, but on-page it reads less naturally.

### P2: blog (currently only 2 posts)
Publish 2–4 articles a month, each answering one question cluster. Suggested starters:
1. How much does medical billing cost? (2026 pricing guide)
2. What is a good clean claim rate and first-pass resolution rate?
3. How long does provider credentialing take, payer by payer?
4. Medical billing vs. medical coding: what's the difference?
5. CO-197, CO-16, CO-50: what common denial codes mean and how to fix them
6. Modifier 25 vs 59: when to use each
7. Days in A/R benchmarks by specialty
8. How to choose a medical billing company (checklist)
9. Credentialing vs. payer enrollment
10. Prior authorization: a workflow that stops denials
11. Mental health billing: CPT 90791, 90834 and 90837 explained
12. Telehealth billing rules and POS 02 vs 10
13. Virtual medical receptionist: cost and ROI vs. an in-house front desk
14. ICD-10-CM updates for the coming fiscal year: what changes for practices

Then link each article to the matching service or specialty page, and link back from it.

### P2: GEO (AI citation) off-site work
- AI engines cite third-party sources heavily. Get listed and reviewed on Clutch, G2/Capterra (RCM category), the BBB profile (already accredited, so link it), Google Business Profile for **both** offices, Yelp, and healthcare directories (MGMA vendor lists, HFMA).
- Keep NAP identical everywhere. The source of truth is `src/seo/site.ts`.
- Earn mentions in "best medical billing companies" roundups. LLMs largely repeat these lists.
- Keep the AI bots allowed in `robots.txt`, and keep `llms.txt` generated (automatic on build).

### P3: performance
- The hero video (7 MB) autoplays on mobile. Add a poster image, serve a smaller mobile encode, or replace it with an image on small screens.
- The JS bundle is 1 MB (171 KB gzipped). Code-split the specialty pages with `React.lazy`.
- Six `optimized_*.png` images (~600 KB each) and two GIFs (2.5 MB each) should become WebP or MP4.
- Add `width`/`height` and `loading="lazy"` to below-the-fold images (reduces CLS).

## 5. How to add things later
- **New page:** add the `<Route>` in `App.tsx`, then add an entry to `siteRoutes` in `src/seo/routes.ts`. That one entry adds it to the sitemap, llms.txt, prerendering and breadcrumbs. Use `<PageTitle title description />` in the page.
- **New blog post:** add an object to `src/data/blogPosts.ts` with `datePublished` (and `author`). Everything else is automatic.
- **Changed URL:** add `old: new` to `redirects` in `routes.ts`. The 301 rules are generated for every host.
- **FAQs anywhere:** put `data-faq-q` on the question element and `data-faq-a` on the answer element, and FAQPage schema is generated.
