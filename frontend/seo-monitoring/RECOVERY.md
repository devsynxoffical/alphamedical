# Alpha Medi Assist: SEO Recovery Plan & Change Log

Started 2026-11-19. Source data: Google Search Console (property `https://alphamediassist.com/`, via OpenSEO), live checks run from GitHub Actions. **GA4: no property exists for this site**, so traffic and lead data are not yet measurable (see P0-2).

## 1. Baseline (honest diagnosis)

### Search Console trend

| Period | Clicks | Impressions | Avg position |
|---|---|---|---|
| Aug 20 – Nov 18, **2025** (same 3 months last year) | **79** | **6,566** | ~27 |
| May 20 – Aug 19, 2026 (previous 3 months) | 2 | 1,153 | ~70 |
| Aug 20 – Nov 18, 2026 (last 3 months) | 3 | 118 | ~55 |
| Sep 24 – Oct 21, 2026 (previous 28 days) | 0 | 0 | – |
| Oct 22 – Nov 18, 2026 (last 28 days) | 3 | 118 (all from Nov 16–18) | ~55 |

- July 2025 peak: about 800–1,600 impressions a day.
- **2026-06-21 to 2026-11-15: no impressions at all** (site invisible for about 5 months).
- Impressions resumed on 2026-11-16.

### Root causes, ranked by impact

1. **Lead forms broken (verified live 2026-11-19).** Every form POSTs to `/api/form-submission`, which returned **404** on the host. The Node mail server (`server.js`) was never deployed. *No visitor could submit a lead*, whatever the traffic.
2. **No analytics.** No GA4/GTM on the site and no GA4 property in the connected accounts, so conversions cannot be measured.
3. **The content that earned the traffic was deleted in the rebuild.** The old WordPress site's blog drove most clicks:
   - `/blog/can-an-health-insurance-company-reverse-a-paid-claim/`: 34 clicks, about 3.9k impressions, position 6–16.
   - `/blog/what-is-void-claim-in-medical-billing/`: 15 clicks, 2.2k impressions, position 9.8.
   - Reversal vs recoupment: 2.9k impressions. ICD-10 ADHD: 3.3k. ICD-10 anxiety: 2.6k. Rendering vs referring provider: 1.3k at position 9.
   - All returned **404** after the rebuild, with no redirects.
4. **The old site was compromised.** Google indexed injected spam on the domain: casino posts under `/uncategorized/`, `/boyslove.html`, `/items/...`, `/shopdetail/...` and dozens of numeric URLs. This is a likely cause of the June 2026 drop (manual action or security issue). **Check Search Console → Security & Manual Actions** (not available via API).
5. **The previous SEO plan targeted the wrong things.**
   - New pages chased head terms ("medical billing services", RCM, state pages) where established vendors dominate and this domain has no authority. None of them has meaningful impressions yet.
   - The proven informational topics were ignored.
   - Today's impressions come mostly from old specialty pages (radiology, pain management, rheumatology).
6. **Commercial pages are not competitive yet.** Ranking competitors for "radiology billing services" (Ventra Health, MedCare MSO, Practolytics, CureMD) have scale claims, case studies and years of backlinks. Expect slow movement there.

### Pages created earlier that are not justified by data (kept, not expanded)

These are indexed and harmless, but have shown no demand yet. No further investment until they earn impressions:
- `/medical-billing-services-florida` and `/medical-billing-services-virginia`. The offices may be virtual addresses (the St. Petersburg address is shared with another billing firm).
- `/medical-billing-for-small-practices` and `/revenue-cycle-management-services`.
- Blog posts on billing cost, credentialing time, billing vs coding, and denial codes.

## 2. Priorities (by business impact)

| # | Priority | Why |
|---|---|---|
| P0-1 | Fix lead forms | Zero leads possible today |
| P0-2 | Lead tracking (GA4 events) | Cannot measure growth without it |
| P1-1 | Recover top lost articles at their original URLs | Proven demand: thousands of impressions, positions 6–16 |
| P1-2 | 301 all old ranking URLs; 410 injected spam | Reclaim link equity; remove hacked-site signals |
| P2 | Remaining lost topics (ICD-10 ADHD/anxiety, prior authorization, billing cycle steps, two insurances) | Next batch once P1 is indexed |
| P2 | Commercial pages: case studies, real testimonials, specialty depth | Needed to convert and to compete |

## 3. Change log

| Date | Change | Reason (evidence) | URLs | Validation | Before | After |
|---|---|---|---|---|---|---|
| 2026-11-19 | PHP lead endpoint `public/api/form-submission.php`; frontend posts same-origin in production | Live check: `/api/form-submission` returned 404 | /contact, /free-consultation, /book-appointment | Deploy check `?healthcheck=1` must return `ok:true`; one real test submission by owner | 404, 0 leads possible | _pending deploy_ |
| 2026-11-19 | GA4 loader + events `generate_lead`, `click_to_call`, `email_click`, SPA `page_view` (active when `VITE_GA_MEASUREMENT_ID` is set) | No analytics on site | all | Verified in browser with a test ID: `page_view`, `click_to_call`, `generate_lead(Contact Form)` fired | no tracking | waiting for GA4 ID |
| 2026-11-19 | Restored 4 articles at original URLs (new, sourced content) | GSC history (see root cause 3) | /blog/can-an-health-insurance-company-reverse-a-paid-claim, /blog/what-is-void-claim-in-medical-billing, /blog/difference-between-reversal-and-recoupment-in-medical-billing, /blog/rendering-vs-referring-provider | Deploy check (200 via trailing-slash 301); GSC inspect_urls; impressions per URL in later runs | 404 | _pending_ |
| 2026-11-19 | 301 map for old WordPress URLs (credentialing-services, get-free-consultation, healthcare-seo, specialities/*, VA articles, faq, category, tag pages that had impressions) | Old URLs with GSC history returned 404 | see `src/seo/routes.ts` + `.htaccess` | Deploy check follows redirects to 200 | 404 | _pending_ |
| 2026-11-19 | 410 Gone for injected spam URL patterns | Hacked-site URLs indexed by Google | numeric, *.html spam, /items, /shopdetail, casino posts, other /tag | Deploy check expects 410 | 404 | _pending_ |

## 4. How progress is measured
- **Leads:** GA4 `generate_lead` count, plus emails received at web@alphamediassist.com.
- **Visibility:** weekly GSC impressions and clicks, total and per recovered URL. Target: recovered articles back on page 1–2 within 4–8 weeks of indexing.
- **Indexing:** `inspect_urls` on recovered URLs in every 12-hour monitor run.
