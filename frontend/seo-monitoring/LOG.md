# SEO monitoring log: alphamediassist.com

Updated by the 12-hour monitor. Only numbers actually retrieved from Search
Console / OpenSEO are recorded here.

## Tracked pages: Google index status

| URL | 2026-11-18 AM | 2026-11-18 12:40 UTC |
|---|---|---|
| / | Indexed (last crawl 2026-11-17) | Indexed; **re-crawled 2026-11-18 11:25**, canonical accepted, found via sitemap |
| /medical-coding-services | Indexed (last crawl 2026-11-02) | Indexed (no new crawl) |
| /specialties/cardiology | Indexed (last crawl 2026-08-29) | Indexed (no new crawl) |
| /blog | Indexed (last crawl 2026-11-13) | not checked |
| /about-us | Not indexed: duplicate, Google chose /about (301 now live) | unchanged (awaiting recrawl) |
| /medical-billing-services | Unknown to Google (new) | **Discovered, not yet indexed** |
| /medical-credentialing-service | Unknown to Google | Unknown to Google |
| /revenue-cycle-management-services | – | **Discovered, not yet indexed** |
| /medical-billing-services-florida | – | **Discovered, not yet indexed** |
| /medical-billing-services-virginia | – | Unknown to Google |
| /blog/how-much-does-medical-billing-cost | – | Unknown to Google |

## Tracked keywords: average position

| Keyword (page) | 2026-11-18 (impr / avg pos, Aug 1 to Nov 18) |
|---|---|
| radiology billing services (/specialties/radiology) | 21 / 50.3 |
| pain management billing company (/specialties/pain-management) | 13 / 79.8 |
| billing services for radiologist provider (radiology) | 5 / 48.8 |
| radiology medical billing services (radiology) | 5 / 68.0 |
| rheumatology billing company (/specialties/rheumatology) | 5 / 68.4 |
| radiology revenue cycle management services (radiology) | 4 / 27.8 |
| radiology billing outsourcing company (radiology) | 1 / **3** |
| outsource radiology billing services (radiology) | 1 / **9** |
| radiology billing companies (radiology) | 1 / **10** |
| radiology billing outsourcing solutions (radiology) | 1 / 15 |
| billing company for radiologist (radiology) | 1 / 17 |

---

## 2026-11-18: baseline

**Data status**
- Search Console property `https://alphamediassist.com/` verified (owner: devsynxoffical) and bound to OpenSEO project `1828d711`.
- Performance for the last 3 months (2026-08-15 to 2026-11-15) and last 28 days: **0 clicks, 0 impressions, no queries** recorded for this property.
- Google's selected canonical host is the bare domain (`https://alphamediassist.com/`).

**Changes made**
- New prerendered site is live (deploy run #19). Missing pages return 404, `/about` 301s to `/about-us`, and pages are served as server-rendered HTML.
- Canonical host switched to `https://alphamediassist.com`, with `www` 301-redirecting to it (run #20 verified).
- IndexNow: 52 bare-domain URLs submitted (Bing, Yandex and other engines).

**Pending (user)**
- Search Console: submit `https://alphamediassist.com/sitemap.xml`, and request indexing for key new pages.

**Next**
- Re-check index status of new pages and the first impressions in 48–72 h.

## 2026-11-18: Google submissions (service account, one-off)
- Search Console API: `https://alphamediassist.com/sitemap.xml` submitted, HTTP 204 (accepted).
- Indexing API `URL_UPDATED`: 50 of 50 sitemap URLs accepted. Note: Google documents this API for JobPosting/BroadcastEvent pages only; acceptance does not guarantee crawling or indexing.
- Key used temporarily from the session and deleted afterwards; not stored in the repo.
- Next check: index status of new pages in 48–72 h (12-hour monitor).

## 2026-11-18 12:40 UTC: 12-hour monitor run #1
**Data status**
- Live site: deploy runs #21–#23 succeeded, live check passing.
- Search Console performance (28 days to 2026-11-15, query+page; 7 days by page): **0 rows**, so no clicks or impressions yet. GSC data lags about 3 days, so the new site's effect will only show from about 2026-11-21.
- OpenSEO credits: 2 (no paid rank tracking).

**Index movement since baseline**
- Home page re-crawled today (11:25 UTC), with the declared canonical `https://alphamediassist.com/` accepted and found via the sitemap.
- /medical-billing-services, /revenue-cycle-management-services and /medical-billing-services-florida moved from "unknown" to **"Discovered, currently not indexed"** (queued for crawl).
- /medical-billing-services-virginia, /medical-credentialing-service and the cost guide are still unknown.

**Changes made:** none. No query/position data yet to justify on-page changes; avoiding churn while Google processes the new site.

**Next:** watch for first impressions (about 2026-11-21+), and confirm the discovered pages move to indexed.

## 2026-11-18 ~21:00 UTC: first impressions (on-demand check)
**Search Console (all data, incl. fresh):** first impressions ever recorded.

| Date | Impressions | Clicks | Avg pos |
|---|---|---|---|
| 2026-11-16 | 60 | 2 | 64.4 |
| 2026-11-17 | 39 | 1 | 48.7 |
| 2026-11-18 (partial) | 12 | 0 | 51.2 |

- 44 query/page rows. Radiology dominates (striking distance: "radiology billing outsourcing company" #3, "outsource radiology billing services" #9, "radiology billing companies" #10). Rheumatology, pain management and dermatology also get impressions.
- **Newly indexed today:** /medical-billing-services (crawl 19:08), /medical-billing-services-florida (16:13), /medical-billing-services-virginia (20:05), /blog/how-much-does-medical-billing-cost (15:43). Breadcrumb rich results detected.
- Still "Discovered, not indexed": /revenue-cycle-management-services, /medical-credentialing-service. /about-us still the old duplicate (not recrawled).

**Changes (data-justified)**
1. /specialties/radiology: title, H1 and description retargeted to observed queries ("Radiology Billing Services & Outsourcing").
2. /specialties/rheumatology: added specialty billing guide (biologic infusion codes, JW/JZ, prior auth; 3 FAQs). The page has impressions but had generic content.
