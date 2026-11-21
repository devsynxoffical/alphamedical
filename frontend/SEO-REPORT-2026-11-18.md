# SEO / AEO / GEO Report: 18 Nov 2026

Builds on the 17 Nov work (see `SEO-REPORT-2026-11-17.md`); nothing from that report was repeated.

## 1. Baseline and data availability (no figures invented)

| Source | Status today | Consequence |
|---|---|---|
| Google Search Console | `https://alphamediassist.com/` (non-www) has been **added but is unverified** in the devsynxoffical account. The canonical host is **www**. | **No 28-day or 90-day performance data exists.** No query, CTR, position 4–20 or declining-page analysis is possible yet. |
| Live site | The deploy reaches the server, but files land outside the web root. The post-deploy check (run #13) shows the **live site is still the old client-side app**: 404s return 200, `/about` does not redirect, and there is no prerendered HTML or verification tag. | Google and AI crawlers still see the old empty-shell site. **This is the #1 reason for weak rankings** and blocks GSC verification. |
| Keyword tools | OpenSEO has 2 credits. | No search volumes or difficulty scores. Keyword choices are based on SERP research and intent, not metrics. |
| Google index | `site:` search on 17 Nov returned no pages. | No baseline traffic to compare against. |

**Measured baseline (local production build, emulated mid-range phone, 4× CPU slowdown, ~1.6 Mbps):**

| Page | LCP before | LCP after | CLS |
|---|---|---|---|
| Home | 5.18 s | **2.69 s** | 0.005 |
| /medical-billing-services | 2.57 s | 2.42 s | 0.001 |
| /specialties/cardiology | 2.68 s | 2.60 s | 0.003 |
| Blog article | 2.53 s | 2.44 s | 0.000 |

These are lab numbers without server compression (production Apache gzips). Real-user Core Web Vitals will only be available in GSC after the site is live.

## 2. Root causes of weak rankings (prioritized)
1. **Deployment and indexing:** the improved, prerendered site has never been served. Nothing else matters until this is fixed.
2. **Keyword cannibalization** across five pages for "medical billing services", plus two orthopedic pages and two behavioral-health pages with overlapping intent.
3. **Thin, templated specialty pages:** only 33–70% of each page's text was unique, with no specialty-specific substance such as codes, modifiers or denial patterns.
4. **Render-blocking resources:** a chained CSS `@import` of a second font family, a blocking Google Fonts stylesheet, and five autoplay videos competing with first paint.
5. **Weak trust (E-E-A-T) signals:** no sources, no editorial information, and a stock headshot reused under ~20 doctor names.

## 3. Completed work

### Cannibalization resolved (each URL now owns one intent)

| URL | Primary target | Title (new) | H1 (new) |
|---|---|---|---|
| `/` | brand + "medical billing company" | Medical Billing Company for U.S. Practices \| Alpha Medi Assist | Medical Billing **Company** for Healthcare Practices |
| `/medical-billing-services` | medical billing services, outsourced medical billing | (unchanged) Outsourced Medical Billing Services | (unchanged) |
| `/services` | services overview (navigational) | All Services: Billing, Coding & Staffing \| Alpha Medi Assist | Revenue & Practice Support Services for Healthcare Practices |
| `/medical-billing-specialities` | specialty medical billing | (unchanged) | Specialty Medical Billing for 90+ Specialties |
| `/specialties/orthopedics` | orthopedic practice / clinic billing (E/M, injections, DME) | Orthopedic Practice Billing Services | Orthopedic Practice Billing Services |
| `/specialties/orthopedic-surgery` | orthopedic surgery billing & coding | Orthopedic Surgery Billing & Coding | Orthopedic Surgery Billing & Coding Services |
| `/specialties/psychiatry` | psychiatry billing (prescribers) | (unchanged) | (unchanged), new description |
| `/specialties/mental-health-counseling` | therapy / counseling billing (LCSW, LPC, LMFT) | Mental Health & Therapy Billing Services | Mental Health & Therapy Billing Services |

The paired pages now cross-link with a "see also" note explaining the difference. Similarity between orthopedics and orthopedic surgery dropped from 0.23 to 0.17 (5-gram Jaccard).

### New specialty content for 13 specialties (AEO + topical authority)
Cardiology, orthopedics, orthopedic surgery, pain management, psychiatry, mental health counseling, dermatology, urology, gastroenterology, radiology, anesthesiology, OB/GYN and internal medicine each gained a **"billing at a glance" guide**:
- common CPT/HCPCS codes we bill;
- modifiers that matter;
- top denial drivers;
- a documentation checklist;
- 3 specialty-specific FAQs (in FAQPage schema);
- an AMA CPT® notice and a note to verify current code sets.

Effect on unique text share: orthopedics 33→52%, cardiology 55→66%, psychiatry and mental health 64→71%, pain management 59→67%. FAQ schema grew from 232 to **271 Q&As**.

### Blog redesign and GEO signals
- **Article template:**
  - header with breadcrumb, category, author, updated date and reading time;
  - highlighted short answer;
  - table of contents with jump links (sticky sidebar on desktop, inline on mobile);
  - FAQs, a **Sources** section and an author/editorial box;
  - sidebar CTA, related services, "More billing guides" cards and a closing CTA.
- **Blog index:** topic chips, a featured guide with its short answer, and cards showing category, date and reading time.
- **Sources added to all 6 posts and 4 landing pages:** CMS (Pub. 100-04, NCCI, ICD-10, PECOS, NPPES), X12 CARC/RARC, CAQH, AAPC, AMA, HHS, Florida Statutes §627.6131, Florida AHCA, First Coast, Palmetto GBA and Virginia DMAS. Blog posts also carry them in BlogPosting `citation`, alongside the new `articleSection` field.
- **Open Graph:** added `og:image:alt`, `og:image:width` and `og:image:height`.

### Performance
- Merged the render-blocking `@import` (Poppins / Open Sans) into one Google Fonts request, and made that request non-blocking (preload plus media swap, with a noscript fallback).
- The home hero video and four icon videos now load only after the page `load` event; the poster frame paints first.

### Verification (local production build)
- **Metadata:** all 50 pages pass. Every title is unique and ≤62 characters, every description is unique and 110–165 characters, every H1 is unique with one per page, and canonicals match. Open Graph is complete on every page.
- **Links and schema:** no broken internal links, and all JSON-LD parses.
- **Browser:** 16 key pages × 2 viewports (iPhone 13, 1366px) all return 200, with no console or hydration errors and no horizontal overflow.
- **Design:** visually reviewed via full-page screenshots of the article, blog index and specialty guide (desktop and mobile).
- **Citation URLs:** this sandbox cannot reach the cited sites. The workflow now checks every source URL from GitHub on each deploy (step "Check external citation links").

## 4. AI crawler and GEO status
- `robots.txt` allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, Applebot-Extended and Bingbot.
- `llms.txt` and `llms-full.txt` are regenerated on every build and now include the specialty guides.
- **No AI citation or visibility claims can be made yet.** The live site does not serve the content, and no AI-visibility tracking is available (OpenSEO credits).

## 5. Indexing status
- **No pages can be confirmed indexed.**
- GSC is unverified, and the live site still serves the old app, so URL Inspection and sitemap submission cannot be done yet.

## 6. Next priorities
1. **Fix the deploy target (blocking).** In cPanel → FTP Accounts, set the `devsynx@alphamediassist.com` directory to the alphamediassist.com document root (usually `public_html`), or send both paths so the workflow's upload folder can be set.
2. **Search Console.** Add and verify **`https://www.alphamediassist.com/`** (URL-prefix, HTML-tag method; the tag ships with the site), or a Domain property via DNS TXT. Then submit `/sitemap.xml`, request indexing for the core pages, and run the IndexNow submission (the key file is already in place).
3. **First data review after 28 days.** Once GSC data exists, run the analysis this brief asked for: high-impression low-CTR queries, positions 4–20, declining pages and query-to-page cannibalization.
4. **Remaining 10 specialties.** Extend `src/data/specialtyInsights.ts`: allergy, emergency medicine, general surgery, hematology/oncology, neurology, nurse practitioner, pediatrics, plastic surgery, reproductive endocrinology, rheumatology.
5. **Trust.** Replace the stock headshot reused under ~20 names with real, consented testimonials, or remove the names. Add a named, credentialed author (CPC / CPB) to the blog.
6. **Backlinks and citations** (third-party sources AI engines rely on):
   - Complete profiles on Clutch, GoodFirms, DesignRush and BBB (already accredited; link the profile from the site).
   - Google Business Profiles for eligible offices, after verifying the St. Petersburg address is not a shared virtual office.
   - HFMA / MGMA vendor directories.
   - Guest articles on practice-management sites.
7. **Case studies** only with real client data and permission (specialty, denial rate, A/R days, collections before and after).
8. **Performance.** Route-level code splitting (the JS bundle is 1.1 MB raw), and converting the six ~600 KB PNG illustrations to WebP.
