# SEO Work Report: 17 Nov 2026

**Site:** www.alphamediassist.com · **Scope:** keyword research, new pages, content, on-page optimization, technical SEO, indexing setup.

## 1. Starting point (analysis)

| Check | Finding |
|---|---|
| Google index | `site:alphamediassist.com` returns **no indexed pages**. The site has had essentially zero organic visibility. |
| Search Console | The property is **not verified** in either connected Google account (syehassanali@ / devsynxoffical@), so there was no GSC data. Today's work adds the verification tag. |
| Keyword tool data | The OpenSEO account has 2 credits, so there are no volume or difficulty numbers. Keywords were chosen from live SERP analysis and are prioritized by intent and how weak the current ranking pages are. |
| Live site | **Not yet updated.** The GitHub → FTP deploy fails because `ftp.alphaahead.com` resolves to domain-parking IPs, not the hosting server (see section 8). |
| Pages | 41 indexable pages before today. There was no page for the #1 commercial term ("medical billing services"), no location pages, and only 2 blog posts. |

## 2. Competitor & SERP analysis

| SERP | Who ranks | Opportunity |
|---|---|---|
| medical billing company St. Petersburg / Tampa / Florida | Directories (Clutch, GoodFirms, DesignRush, BBB) plus templated state pages (OmniMD, MedCare MSO, 247MBS, Medwave) | **High.** Thin competition and few real local firms; we have a real St. Petersburg office. |
| medical billing company Fredericksburg / Virginia | Almost only BBB directory listings plus generated city pages (ASP-RCM) | **Very high.** There is practically no dedicated local content. |
| outsourced medical billing for small practices | Vendor blogs (Neolytix, OmniMD, MedCare MSO) | Medium. Needs a strong dedicated page. |
| how much does medical billing cost | Vendor blogs / calculators | Medium-high. Informational intent that converts. |
| how long does credentialing take | Medwave, CarePatron, Neolytix | Medium. Supports the credentialing service. |
| medical billing vs coding | Schools (DeVry, AAPC) plus vendors | Medium. Strong AI-answer / snippet potential. |
| CO-16 / CO-50 / CO-197 denial codes | Vendor blogs | Medium. Highly specific long-tail. |

**Content gaps vs. competitors:** (1) state / city landing pages, (2) a dedicated core "medical billing services" page, (3) a pricing / cost guide, (4) a small-practice page, (5) denial-code reference content, (6) case studies with real numbers (we have none; see section 9).

**Risk found:** "MZ Medical Billing" publicly lists **7901 4th St N, St. Petersburg**, the same building as our Florida office. It looks like a shared virtual-office address. Google Business Profile does not allow virtual offices, so confirm the address is eligible before creating a GBP there.

## 3. Target keywords & mapping

| Keyword cluster | Intent | Page |
|---|---|---|
| medical billing services · outsourced medical billing services · medical billing company | Commercial | **/medical-billing-services** (new) |
| revenue cycle management services · RCM services · healthcare RCM company | Commercial | **/revenue-cycle-management-services** (new) |
| medical billing services for small practices · billing for solo practice | Commercial | **/medical-billing-for-small-practices** (new) |
| medical billing company Florida · medical billing St. Petersburg FL · medical billing Tampa | Local commercial | **/medical-billing-services-florida** (new) |
| medical billing company Virginia · medical billing Fredericksburg VA · Spotsylvania | Local commercial | **/medical-billing-services-virginia** (new) |
| how much does medical billing cost · medical billing percentage of collections | Informational / commercial | **/blog/how-much-does-medical-billing-cost** (new) |
| how long does credentialing take · insurance credentialing timeline · CAQH | Informational | **/blog/how-long-does-medical-credentialing-take** (new) |
| medical billing vs medical coding | Informational | **/blog/medical-billing-vs-medical-coding** (new) |
| CO-16 denial code · CO-50 · CO-97 · CO-197 · CARC codes | Informational | **/blog/common-claim-denial-codes-and-how-to-fix-them** (new) |
| <specialty> medical billing services (23 specialties) | Commercial | existing /specialties/* (optimized) |
| medical coding / credentialing / payment posting / virtual assistant services | Commercial | existing service pages (optimized) |

## 4. Published content & new pages (9)

**Landing pages (5):** each has an answer-first summary (40–60 words, built for featured snippets and AI answers), a KPI band, process steps or a comparison table, 4–6 FAQs (FAQPage schema), a related-links block and CTAs. Breadcrumb, Service and FAQPage schema are generated automatically. Location pages carry `areaServed: State` and verified payer facts:
- **Florida page:** First Coast Service Options (Medicare JN), Florida Medicaid SMMC, Florida prompt-pay statute §627.6131.
- **Virginia page:** Palmetto GBA (Medicare JM), Cardinal Care / DMAS.

**Blog posts (4):** 900–1,400 words each, with an answer-first intro, scannable lists, FAQ schema, BlogPosting schema, author/date line and contextual links to service pages.

## 5. Existing pages optimized
- **Titles / meta descriptions:** About, Contact and Blog rewritten. All 50 pages now pass length checks (title ≤ 62 characters, description 110–165), with no duplicates.
- **H1s:** Specialties hub ("MEDICAL SPECIALTIES" → "Medical Billing Services by Specialty"), Services hub, Contact and Blog.
- **FAQs:** removed the "1.", "2." numbering from questions on 23 specialty pages. Radiology's questions had no question marks; fixed.
- **Internal linking:**
  - New "Related services and resources" block on 22 specialty pages and all 6 service pages.
  - Header Services menu: added Medical Billing Services and RCM.
  - Footer: new "Locations & Resources" column.
  - Home hero: contextual links to /medical-billing-services and /medical-coding-services.
  - Every blog post links to related services and other posts.
- **Images:** `loading="lazy"` and `decoding="async"` on 43 below-the-fold images. Specialty card alt text is more descriptive ("Cardiology medical billing").
- **Footer copyright year** is now automatic.

## 6. Technical SEO
- **Google Search Console verification meta tag** added sitewide (`google-site-verification`).
- **IndexNow:** key file `/c89d9636854147c59b95ff08cb40c0e8.txt` added. An OpenSEO project "Alpha Medi Assist" was created for submissions to Bing, Yandex and other engines. Bing feeds ChatGPT search and Copilot.
- **Performance:**
  - Hero video re-encoded from 7.3 MB to 0.94 MB, with a poster frame added (faster first paint).
  - A 2.7 MB GIF displayed at 60px replaced by a 254 KB animated WebP.
- **Schema across 50 pages:** Organization + 2 office entities, WebSite, WebPage, BreadcrumbList (49), Service (36), FAQPage (41 pages / 232 Q&As), BlogPosting (6). All JSON-LD parses.
- **Sitemap:** 50 URLs, auto-generated. `llms.txt` / `llms-full.txt` include the new pages and locations.
- **Redirect:** legacy `/services/medical-billing` now 301s to the new core page.
- **Crawl audit:** 0 broken internal links, 0 links to redirecting URLs, 1 H1 per page, self-referencing canonicals everywhere.
- **Mobile / desktop test in Chromium** (16 key pages × 2 viewports, iPhone 13 and 1366px): all return 200, with no console or hydration errors and no horizontal overflow.

## 7. Indexing status
- **Google:** currently **0 pages indexed.** Not checkable in GSC until the property is verified, and verification only works after the site deploys.
- **Next steps once deployed:**
  1. In Search Console, add the property `https://www.alphamediassist.com/` → HTML tag method → **Verify** (the tag is already on every page).
  2. Submit `https://www.alphamediassist.com/sitemap.xml`.
  3. Use URL Inspection → **Request indexing** for the home page, /medical-billing-services, /revenue-cycle-management-services, the two location pages and the four new posts.
  4. Bing Webmaster Tools: import the site from GSC and submit the sitemap. Then the IndexNow submission for all 50 URLs can run, since the key file will be live.

## 8. Blocker: deployment
Nothing from today (or the previous SEO work) is live until the FTP deploy works. `ftp.alphaahead.com` resolves to `76.223.54.146` / `13.248.169.48`, which appear to be domain-parking or forwarding servers, not the web host. Get the correct FTP host from the hosting control panel (cPanel → FTP Accounts → Configure FTP Client), update the `FTP_SERVER` GitHub secret, and every push to `main` will deploy automatically.

## 9. Further opportunities (prioritized)
1. **Google Business Profile** for each eligible office (confirm the St. Petersburg address is not a virtual office). Add NAP-consistent citations: BBB (already accredited, so link it), Clutch, GoodFirms, DesignRush. Those directories own the local SERPs today.
2. **Real case studies** (2–3): specialty, starting vs. ending denial rate / days in A/R / collections, with client permission. Not fabricated today on purpose: invented results would be a trust and compliance risk.
3. **Replace the stock doctor photos.** One stock headshot is labelled with about 20 different doctor names across pages. Use real, consented testimonials or remove the names.
4. **More city pages** once the state pages index: Tampa, Orlando, Miami, Richmond and Northern Virginia, each with genuinely local content.
5. **Specialty page depth:** add specialty-specific CPT codes, modifiers and common denials to the top 6 specialties (cardiology, orthopedics, pain management, psychiatry / mental health, urology, OB/GYN).
6. **Next blog topics:** prior authorization workflow; days in A/R benchmarks; mental health CPT 90791 / 90834 / 90837; telehealth POS 02 vs 10; credentialing vs payer enrollment; how to choose a medical billing company.
7. **Keyword data:** with about 1,500 OpenSEO credits, run volume / difficulty validation and rank tracking for the keywords in section 3.
8. **Performance:** route-level code splitting (JS is 1 MB / 171 KB gzipped); convert the six ~600 KB `optimized_*.png` images to WebP.
