# Alpha Medi Assist — SEO Plan

**Site:** https://www.alphamediassist.com
**Business:** US medical billing / RCM, medical coding, credentialing, virtual medical assistants and receptionists, healthcare SEO
**Stack:** React 19 + Vite 7 single-page app (SPA), React Router 7, deployed to Apache (`.htaccess`) through Git → FTP
**Audit date:** 2026-11-26 (based on the code in this repo; the live site could not be reached from the audit sandbox)

---

## 1. How the site works today (what Google sees)

| Area | Current state | SEO impact |
|---|---|---|
| Rendering | Client-side only. `index.html` ships an empty `<div id="root">`, and all content, titles and descriptions are injected by JavaScript. | **Critical.** Google renders JS late and unreliably. Bing, AI crawlers (ChatGPT, Perplexity) and social previews see an empty page with one generic title. |
| Titles / descriptions | `PageTitle.tsx` sets `document.title` and the meta description in `useEffect`. | Only works after JS runs. `/medical-billing-specialities`, `/free-consultation`, `/book-appointment` and the specialty detail pages have **no description**. |
| Canonical / OG / Twitter | None anywhere. | Duplicate URLs and no rich link previews. |
| Structured data | None. | No Organization, LocalBusiness, Service, FAQ, Article or Breadcrumb rich results. |
| Analytics | No GA4, GTM or Search Console verification in the code. | Results can't be measured. |
| 404 handling | No catch-all route, and `.htaccess` rewrites every URL to `index.html` with HTTP 200. | Unknown URLs become **soft 404s**, and `/specialties` renders a blank page. |
| Sitemap | `public/sitemap.xml` has 38 URLs, mostly **wrong**. | It sends Google to URLs that don't exist (details in §2.2). |
| Images | `src/Images` is **187 MB**. Single JPGs weigh 25 MB, 24 MB, 16 MB and 15 MB, plus 2–3 MB GIFs and several MP4s. | **Critical** for Core Web Vitals (LCP), especially on mobile. |
| Third-party scripts | The chat widget loads twice: once in `index.html` and again in `ChatWidgetEmbed.tsx`. Google Fonts are render-blocking. | Hurts INP/LCP. |

---

## 2. Critical issues found (fix first)

### 2.1 The main money keyword has no page
`services.ts` defines a `medical-billing` service, but **`App.tsx` has no route for it**. "Medical billing services" is the home page H1 and the company's core offer, yet there's no dedicated landing page for it.
→ Add `/medical-billing-services` with in-depth content and link to it from the header, footer and home page.

### 2.2 Sitemap does not match the real URLs

| In sitemap (wrong) | Real route |
|---|---|
| `/services/medical-coding` | `/medical-coding-services` |
| `/services/virtual-assistant` | `/virtual-medical-assistant-services` |
| `/services/payment-posting` | `/medical-payment-posting-services` |
| `/services/virtual-receptionist` | `/virtual-medical-receptionist-services` |
| `/services/healthcare-seo` | `/healthcare-seo-services` |
| `/services/credentialing` | `/medical-credentialing-service` |
| `/services/medical-billing` | *(no page exists)* |
| `/specialties` | `/medical-billing-specialities` |
| `/about` | `/about-us` (both routes exist, so this is duplicate content) |
| *(missing)* | `/blog/top-10-reasons-for-medical-claim-denials-and-how-to-fix-them` |
| *(missing)* | `/blog/how-to-reduce-medical-claim-denials-complete-guide` |
| *(missing)* | `/privacy-policy`, `/terms-and-conditions` |

→ Generate the sitemap **automatically at build time** from the route list, so it can never drift again.

### 2.3 Broken internal links and duplicates
- Every specialty page's "Back to Specialties" link points to `/specialties`, which has no route (blank page). Point it to `/medical-billing-specialities`.
- `/about` and `/about-us` serve the same page. Keep `/about-us` and 301-redirect `/about`.
- `/specialties/:specialtyId` (the generic `SpecialtyDetail`) duplicates the 23 hand-built specialty pages. It should 301 or 404.
- Pick **www or non-www** plus HTTPS, and 301 everything else in `.htaccess`. The sitemap uses `www`.
- Spelling: the URL `/medical-billing-specialities` uses the British spelling, while US searchers type "specialties". Consider moving to `/medical-billing-specialties` with a 301.

### 2.4 Heading issues
- `SpecialtyDetail.tsx` uses the long `description` as the H1 instead of a keyword-focused title.
- The service and specialty templates each contain two `<h1>` tags (one is the not-found branch, which is fine, but check that only one renders).

### 2.5 Trust and E-E-A-T risk (healthcare is a YMYL niche)
- Every specialty page shows the same "Dr. Adam, 5/5, 6 years working with Alpha Medi Assist" badge, built from a stock photo (`doc lessa jenn.jpg`). Google's quality raters and prospects see this as templated or fake. Replace it with real, named, verifiable testimonials or remove it.
- The 23 specialty pages are about 50% identical template text (only around 218 of 468 lines differ between Cardiology and Dermatology). This puts them at risk of being treated as "thin/duplicate" content.

---

## 3. The plan, phase by phase

### Phase 0: Setup and baseline (week 1)
1. **Google Search Console:** verify the domain property (DNS TXT), submit the corrected sitemap and check Coverage and Page indexing.
2. **Bing Webmaster Tools:** import from GSC. Bing also feeds ChatGPT search.
3. **GA4:** install through GTM, add `generate_lead` conversions for these forms: Contact, Free Consultation, Book Appointment. Track `tel:` and `mailto:` clicks and chat opens.
4. **Baseline report:** current indexed pages, impressions/clicks, keyword positions, Core Web Vitals (PageSpeed Insights / CrUX) and backlink profile (Ahrefs or Semrush).
5. **Rank tracker:** track 40–60 target keywords (see §4).

### Phase 1: Technical foundation (weeks 1–3), done in this repo

**1. Pre-render every route to static HTML (most important)**
Every URL should be served as real HTML containing its content, title, meta, canonical and JSON-LD before any JS runs. Options for this stack, from most to least recommended:
- **`vite-react-ssg` or a custom prerender script** (Playwright/Puppeteer is already available) that outputs `dist/<route>/index.html` for every route at build time. This fits FTP hosting with no Node server needed.
- Migrating to React Router 7 "framework mode" with `prerender` gives the same result with more refactoring.

Apache already serves existing files first (`RewriteCond !-f`), so pre-rendered `index.html` files in subfolders will work as they are.

**2. Head management**
Replace `PageTitle.tsx` with a single `<Seo>` component. React 19 supports native `<title>`/`<meta>`/`<link>` hoisting. The component should output:
- `title`, `meta description`
- `link rel="canonical"` (absolute URL, www, no trailing-slash inconsistency)
- Open Graph (`og:title`, `og:description`, `og:url`, `og:image`, `og:type`) plus Twitter card. `src/Images/og.webp` exists, but make a 1200×630 JPG/PNG because some platforms don't accept WebP.
- `robots` meta (`noindex` for the thank-you and not-found states)

Remove `meta keywords` because search engines ignore it.

**3. Central route registry**
Keep one `routes.ts` with `{ path, title, description, ogImage, priority, changefreq, lastmod }`. Use it for routing, `<Seo>`, the sitemap generator and the prerender list.

**4. Real 404s**
Add a `<Route path="*">` NotFound page. With prerendering, emit `404.html` and set `ErrorDocument 404 /404.html` in `.htaccess`, so that unknown URLs return a true 404 status instead of 200.

**5. `.htaccess` hardening**
- Force HTTPS and www (301)
- 301 redirects: `/about`→`/about-us`, `/specialties`→`/medical-billing-specialities`, old `/services/*` sitemap URLs → the real pages
- gzip/brotli (`mod_deflate`), long `Cache-Control` for `/assets/*` (Vite hashes the filenames), short cache for HTML
- Security headers (HSTS, X-Content-Type-Options, Referrer-Policy) as a trust signal

**6. Sitemap and robots**
Auto-generate `sitemap.xml` during `npm run build` with real `lastmod` values, including blog posts. Keep `robots.txt` pointing to it. Delete `_redirects` and `web.config` if the host is Apache only.

**7. Structured data (JSON-LD)**

| Page | Schema |
|---|---|
| All pages | `Organization` (logo, `sameAs`: Facebook, Instagram, LinkedIn), `WebSite` |
| Home / Contact | `ProfessionalService` / `LocalBusiness` × 2 locations (Spotsylvania, VA 22551 and St. Petersburg, FL 33702), phone `+1-424-542-7170` |
| Service pages | `Service` (provider, areaServed: US), `BreadcrumbList`, `FAQPage` |
| Specialty pages | `Service` + `BreadcrumbList` + `FAQPage` (the pages already have FAQ accordions) |
| Blog posts | `BlogPosting` (author, datePublished, dateModified, image) + `BreadcrumbList` |

Validate everything with the Rich Results Test.

**8. Performance (Core Web Vitals)**
- Convert all images to **WebP/AVIF**, resized to their display size (hero images about 1600 px wide, cards about 600 px). The 25 MB JPGs should be under 150 KB each. Add a build step (`vite-plugin-image-optimizer` or a `sharp` script).
- Give each `<img>` `width`/`height` attributes and `loading="lazy"` (except the LCP hero, which gets `fetchpriority="high"`).
- Replace animated GIFs with small MP4/WebM or SVG/Lottie. Compress the background MP4s (under 2 MB) and add `preload="none"` and a poster image.
- Route-level code splitting with `React.lazy()`. Right now all 35 pages ship in one JS bundle.
- Self-host the two Google Fonts (or at least `preload` the woff2 files) and limit the weights in use.
- Load the chat widget once, after user interaction or `requestIdleCallback`.
- Targets: LCP < 2.5 s, INP < 200 ms, CLS < 0.1 on mobile.

**9. Remove the 187 MB of raw media from Git** (or keep the originals outside `src/`) so that FTP deployments are fast and reliable.

### Phase 2: On-page optimisation (weeks 2–5)

**URL / keyword mapping.** Each page targets one primary keyword cluster, so pages don't compete with each other:

| Page | Primary keyword | Secondary |
|---|---|---|
| `/` | medical billing services | medical billing company, healthcare RCM services |
| `/medical-billing-services` **(new)** | outsourced medical billing services | medical billing company USA, revenue cycle management services |
| `/medical-coding-services` | medical coding services | outsourced medical coding, ICD-10 / CPT coding services |
| `/medical-credentialing-service` | medical credentialing services | provider credentialing, insurance credentialing, CAQH |
| `/medical-payment-posting-services` | payment posting services | ERA/EOB posting, cash posting medical billing |
| `/virtual-medical-assistant-services` | virtual medical assistant | remote medical assistant, healthcare VA |
| `/virtual-medical-receptionist-services` | virtual medical receptionist | medical answering service, remote front desk |
| `/healthcare-seo-services` | healthcare SEO services | medical practice SEO, SEO for doctors |
| `/medical-billing-specialities` | medical billing by specialty | specialty billing services |
| `/specialties/{x}` (23) | {specialty} medical billing services | {specialty} billing company, {specialty} coding |
| `/about-us` | about Alpha Medi Assist (brand) | — |
| `/contact` | contact medical billing company | — |

**Title formula** (≤ 60 chars): `{Primary Keyword} | Alpha Medi Assist`
**Description formula** (≤ 155 chars): benefit + proof + CTA, e.g. "HIPAA-compliant cardiology billing that cuts denials and speeds payment. Free billing audit. Call +1 424-542-7170."

**Brand name consistency:** the code mixes "AlphaMedi Assist", "Alpha Medi Assist" and "Alpha Med Assist" (on LinkedIn). Pick one, use it everywhere (titles, schema, Google Business Profile, citations), and use the same NAP.

**On-page checklist for every page:**
- One H1 containing the primary keyword, and a logical H2/H3 outline
- Primary keyword in the first 100 words, title, H1, URL and image alt text
- Descriptive alt text (not "Dr. Adam")
- 3–5 contextual internal links (service ↔ specialty ↔ blog), using descriptive anchor text
- A clear CTA (Free Consultation / Free Billing Audit) above the fold and at the end
- Visible breadcrumbs (matching the `BreadcrumbList` schema)
- FAQ section with real questions from People Also Ask / GSC queries

**Fix the specialty pages' duplicate content.** Each one needs at least 40–60% unique copy:
- Specialty-specific CPT/ICD-10 codes and modifiers (e.g. cardiology 93000-series, modifier -26/-TC; anesthesiology time units and ASA base units; OB-GYN global packages 59400)
- Common denial reasons for that specialty and how they are prevented
- Payer and prior-authorization rules for that specialty
- A real mini case study with numbers (e.g. "AR > 90 days reduced from 32% to 11%")
- A unique FAQ set per specialty
- Specialties with no unique content to offer should be consolidated rather than published thin.

### Phase 3: Content and topical authority (month 2 onward, ongoing)
Right now there are only **2 blog posts**. Build topic clusters that link up to the money pages:

| Pillar (links to service page) | Cluster article ideas |
|---|---|
| Medical billing / RCM | In-house vs outsourced billing cost comparison; medical billing process step by step; key RCM KPIs (days in AR, clean claim rate, denial rate); how much medical billing companies charge (% of collections); how to choose a medical billing company |
| Denial management | (existing 2 posts) + CO-97, CO-16, CO-50 denial codes explained; how to write an appeal letter (template); timely filing limits by payer 2027 |
| Medical coding | 2027 CPT code changes; ICD-10 updates; E/M coding guidelines; modifier 25 vs 59; coding audit checklist |
| Credentialing | How long credentialing takes; CAQH setup guide; Medicare PECOS enrollment; credentialing checklist (PDF lead magnet) |
| Virtual staff | Cost of a virtual medical assistant vs in-house; HIPAA rules for remote staff; tasks to delegate to a virtual receptionist |
| Specialty guides | "{Specialty} billing guide 2027" for the top 8 specialties, each linking to its specialty page |

- **Cadence:** 4 articles per month to start, each 1,500–2,500 words, written or reviewed by a certified coder or biller (CPC/CPB). Show the author bio, credentials and "reviewed by" line (E-E-A-T).
- **Lead magnets:** free billing audit, denial-rate calculator, credentialing checklist PDF. These earn links and leads.
- **Blog upgrades:** author entity, published/updated dates, table of contents, related posts, social share image per post.
- Refresh old posts every year (codes change every January and October).

### Phase 4: Local SEO and entity building (month 1–3)
- **Google Business Profile** for each real address (VA and FL), with the category "Medical billing service". Add services, photos and weekly posts, and ask clients for reviews.
- **Citations** with consistent NAP: Bing Places, Apple Business Connect, Yelp, BBB, Clutch, GoodFirms, Manta, Healthcare-specific directories (MGMA vendor listings, HFMA, AAPC vendor pages).
- Location landing pages only where there is real presence (e.g. "Medical Billing Services in Virginia / Florida"). Avoid mass city doorway pages.
- Show HIPAA compliance, accreditations and certifications (images exist: `Accredited.png`, `HIPAA…png`) with real verification links.

### Phase 5: Off-page / link building (month 2 onward, ongoing)
- Partner and software listings: EHR/PM vendor partner directories (Kareo/Tebra, AdvancedMD, athenahealth, eClinicalWorks marketplaces).
- Guest articles on healthcare-management blogs; expert quotes through Featured, Qwoted and Help a B2B Writer.
- Original data: publish an annual "denial rate benchmark" from anonymised client data. This kind of research earns links naturally.
- Case studies and testimonials from clients, with permission to link from their site.
- Avoid paid link farms and PBNs (high risk in healthcare).
- Monthly backlink audit; disavow obvious spam only if there is a manual action.

### Phase 6: Measure and iterate (monthly)
**Monthly report KPIs:**
- Indexed pages vs submitted (GSC)
- Impressions, clicks, CTR and average position for the tracked keywords
- Organic leads (form submits + calls) and organic-to-lead conversion rate
- Core Web Vitals pass rate (mobile)
- Referring domains (new/lost)
- Top pages and the queries at positions 5–20 (quick-win optimisation targets)

**Monthly actions:** rewrite titles and descriptions for low-CTR pages, expand pages ranking 5–20, add internal links to rising pages, and publish or refresh content.

---

## 4. Starter keyword list (validate volumes in Semrush/Ahrefs)

**Commercial (money pages):** medical billing services, medical billing company, outsourced medical billing, revenue cycle management services, medical coding services, medical credentialing services, provider credentialing services, virtual medical assistant, virtual medical receptionist, medical answering service, healthcare SEO services, payment posting services, denial management services, AR follow-up services, medical billing audit.

**Specialty (23 pages):** cardiology billing services, orthopedic billing services, anesthesia billing services, mental health billing services, psychiatry billing services, dermatology billing services, OB-GYN billing services, pain management billing services, gastroenterology billing services, radiology billing services, urology billing services, pediatric billing services, emergency medicine billing, plastic surgery billing, oncology billing services, neurology billing services, rheumatology billing, internal medicine billing, nurse practitioner billing services…

**Informational (blog):** how to reduce claim denials, common claim denial reasons, denial codes list, medical billing process steps, how much do medical billing companies charge, in-house vs outsourced medical billing, how long does credentialing take, CAQH credentialing, E/M coding guidelines 2027, modifier 25 rules, timely filing limits by payer.

---

## 5. 90-day roadmap

| Week | Deliverable | Owner |
|---|---|---|
| 1 | GSC + Bing + GA4/GTM set up, baseline report, rank tracking | SEO |
| 1–2 | Route registry, `<Seo>` component, canonicals, OG, 404 page, `.htaccess` redirects and HTTPS/www | Dev |
| 2 | Auto sitemap, fix broken links (`/specialties`), add `/medical-billing-services` page | Dev + Content |
| 2–3 | **Pre-rendering** to static HTML; verify with "View source" and the GSC URL Inspection tool | Dev |
| 3 | Image/video optimisation, code splitting, font and chat-widget deferral, CWV re-test | Dev |
| 3–4 | JSON-LD (Organization, LocalBusiness, Service, FAQ, Breadcrumb, BlogPosting) | Dev |
| 3–5 | Rewrite titles/descriptions/H1s per the keyword map; remove the "Dr. Adam" badge and add real testimonials | Content |
| 4–8 | Unique content for the top 8 specialty pages (by search volume), then the rest | Content |
| 4 | Google Business Profiles + top 20 citations | SEO |
| 5–12 | 4 blog posts/month (pillar clusters), author bios, lead magnet #1 | Content |
| 6–12 | Link building: partner directories, guest posts, PR quotes | SEO |
| 4, 8, 12 | Monthly report + iteration | SEO |

---

## 6. Deployment notes
- `dist/` is in `.gitignore`, so the Git → FTP pipeline must run `npm run build` (the build output is what gets uploaded). Confirm that the pipeline uploads `dist/` (including the new pre-rendered folders, `404.html`, `sitemap.xml` and `.htaccess`) to the web root.
- After every deploy, check: `curl -I` on a few URLs (status codes, redirects), "View source" shows content, `/sitemap.xml` loads and a random bad URL returns 404.
- Keep `.env` secrets out of the repo. `.env.example` currently lists a personal test email address, so consider replacing it with a placeholder.

---

## 7. Proposed technical work in this repo (Phase 1 checklist)
- [ ] `src/seo/routes.ts`: central route + meta registry
- [ ] `src/components/Seo.tsx`: title/description/canonical/OG/Twitter/robots/JSON-LD (replaces `PageTitle.tsx`)
- [ ] `NotFound.tsx` + `path="*"` route
- [ ] Add a `/medical-billing-services` route using the existing `medical-billing` service data
- [ ] Fix the `/specialties` back-links; 301 `/about` → `/about-us`
- [ ] `scripts/generate-sitemap.ts` run in `build`
- [ ] `scripts/prerender.ts` (Playwright) run after `vite build`
- [ ] `.htaccess`: HTTPS/www, redirects, `ErrorDocument 404`, compression, caching, security headers
- [ ] Image optimisation pipeline + `width`/`height`/`loading` on all `<img>`
- [ ] `React.lazy` code splitting per route
- [ ] Remove the duplicate chat-widget load; self-host fonts
- [ ] JSON-LD builders for Organization, LocalBusiness, Service, FAQPage, BreadcrumbList, BlogPosting
