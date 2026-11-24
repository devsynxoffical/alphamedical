# SEO Plan (20 Nov 2026): implementation status

Source: "Alpha Medi Assist SEO Plan", prepared by DEVSYNX on 20 Nov 2026. Keyword map: `keyword-map-2026-11-20.csv` (Semrush US volumes and KD as supplied in the plan).
Rule kept from the recovery plan: nothing is published that needs facts we do not have (no invented case studies, credentials, client names or partnerships).

## Done (20 Nov 2026)

| Plan item | What was done | URLs | How to validate |
|---|---|---|---|
| www fix (wk 1-2) | Already live since Nov: www → bare domain 301 and matching canonical. Checked in every deploy | all | Deploy log "www → bare domain redirect: 301" |
| Denial code pages (wk 3-4, first 4) | New hub plus 4 code pages. Each has a one-sentence definition first (AEO), an at-a-glance box, the official CARC wording, causes, remark codes, fix steps, appeal and prevention guidance, FAQ (FAQPage schema), sources and a lead form | /denial-codes, /denial-codes/co-16, /co-97, /co-45, /pr-1 | GSC impressions for "co 16 denial code" (1,600/mo), "co 97 denial code" (1,600), "co 45 denial code" (1,000), "pr 1 denial code" (320) |
| Internal links to the new pages | Footer "Denial Codes Guide", specialty related links, the denial management page and the old denial-codes blog post all point to the new pages | site-wide | Prerender output |
| Rebuild /medical-billing-services (wk 3-4, partial) | Added: pricing models table, what affects price, monthly metrics with definitions, signs it is time to outsource, first-90-days timeline, 3 new FAQs. Main content is now about 1,700 words | /medical-billing-services | Position for "medical billing services" (4,400/mo, KD 10) and "outsourced medical billing" |
| FAQ schema on specialty pages | Already on 15 specialty pages via the specialty billing guides | /specialties/* | Rich results test |
| Specialty page upgrades (wk 5-8, 6 pages) | Dermatology, orthopedics, pain management, internal medicine, urology and radiology each gained a "Payer and coverage rules" card (Medicare global periods, LCDs, prior authorization, frequency rules, 26/TC ownership) and links to the 4 denial-code guides most relevant to that specialty. Orthopedics title and H1 retargeted to "Orthopedic Billing Services" (480/mo). These pages already had codes, modifiers, denial drivers, documentation and FAQ schema. Mini case studies are still blocked (need real client data) | /specialties/dermatology, /orthopedics, /pain-management, /internal-medicine, /urology, /radiology | Positions for each page's keyword-map target over 4–8 weeks |
| Denial code pages (wk 5-8, 4 more) | CO-4 (modifier), CO-11 (diagnosis vs procedure), CO-18/OA-18 (duplicate), CO-22 (coordination of benefits). Same template as the first 4; the hub now lists 8 guides | /denial-codes/co-4, /co-11, /co-18, /co-22 | GSC impressions per code page |
| Denial code pages (wk 9-12, 4 more) | CO-29 (timely filing), CO-50 (medical necessity, incl. ABN / PR-50), CO-109 (wrong payer or contractor), CO-197 (authorization absent, vs CO-198). The hub now lists 12 guides. Radiology links to CO-197, pain management to CO-50 and CO-197 | /denial-codes/co-29, /co-50, /co-109, /co-197 | GSC impressions per code page |
| Blogs (wk 9-12) | New: "In-house vs. outsourced medical billing" and "Annual CPT, ICD-10 & HCPCS updates". Two topics overlapped existing ranking posts, so those posts were expanded instead of creating competing URLs: the billing cost guide gained a "cost by specialty" section, and the credentialing guide gained a "timelines by payer type" section | /blog/in-house-vs-outsourced-medical-billing, /blog/annual-cpt-code-updates-how-practices-should-prepare, /blog/how-much-does-medical-billing-cost, /blog/how-long-does-medical-credentialing-take | GSC impressions; queries per post |

## Blocked: needs facts or decisions from the owner

| Plan item | What is needed |
|---|---|
| Case study on /medical-billing-services and specialty pages | Real before/after numbers from a client, ideally with written permission to name them (or an anonymised version they approve) |
| Proof for "98% net collection rate" and "90+ specialties" | The source for these figures. If they cannot be shown, we should soften the wording |
| EHR/software section (Kareo/Tebra, AdvancedMD, eClinicalWorks, athenahealth) | Confirmation of which systems the team actually works in today |
| Author and reviewer box with credentials (CPC, CPB) | Real names and credentials of the people who write or review the guides |
| Certifications and trust page (AAPC, HFMA, HIPAA) | Which certifications and memberships the company and staff actually hold; HIPAA policies, such as training and risk assessment, that can be described |
| Separate phone number and address | A dedicated number for this brand. Confirm whether the Spotsylvania, VA office is a real staffed office (needed before a Google Business Profile) |
| Disavow file | A backlink export from Semrush (Backlinks → Referring domains). Upload the resulting `disavow.txt` in Search Console's Disavow tool; I can prepare the file from the export |
| Stop paid link packages | Owner action |
| Behavioral health, physical therapy and chiropractic pages | Confirm these are services you sell. Behavioral health must be scoped against the existing psychiatry and mental-health pages to avoid cannibalization |
| Dental billing page | Only if dental billing is offered |

## Next (per plan timeline)
- Weeks 5-8 remaining: 3 new specialty pages (waiting for owner confirmation); 6 clean links (need owner accounts and outreach).
- Weeks 9-12: done (see above); review rankings against the targets at day 30.
- Clean links: healthcare directories, EHR marketplaces, guest posts. These need owner accounts and outreach.

## Targets (from the plan) vs. measurement
Day 30 / 60 / 90: ranking keywords 60 / 150 / 300; top-20 keywords 3 / 15 / 40; organic visits 50 / 300 / 900; leads 1 / 4 / 10.
Leads cannot be measured until GA4 (`VITE_GA_MEASUREMENT_ID`) is set; form emails are the fallback count.

---

# Detailed SEO Plan (23 Nov 2026): implementation status

Source: `CLAUDE_CODE_PLAN_alphamediassist_com.md` by DEVSYNX. Rules applied: no em dashes; titles of 60 characters or fewer; descriptions of 155 or fewer; one H1; 7-day rule (pages edited in the last 7 days get only title, meta and FAQ changes now); IndexNow/Bing only.

## Done on 23 Nov 2026

| Plan item | Before | After | Validation |
|---|---|---|---|
| Titles of 60 characters or fewer (sitewide) | 21 titles over 60 (up to 68) | 0 over 60 | Build audit script over dist/*.html |
| No em dashes | 25 in specialty data (repeated testimonial quote, general surgery intro) | 0 in src | grep |
| Week 1: orthopedic merge | /specialties/orthopedic-surgery and /specialties/orthopedics competed | 301 from orthopedic-surgery to orthopedics; the surgery billing guide is shown on orthopedics; removed from sitemap, hub and menu | .htaccess rule; deploy check follows redirect to 200 |
| Week 1: prerender check | already prerendered | unchanged: 73 pages, each with its own title, meta, canonical, one H1 and text | Build output; GSC URL Inspection |
| Week 1: bot-check check | not monitored | Deploy now requests 3 pages as Googlebot and Bingbot and warns if "One moment, please" is served (warning only, because runner IPs are not real crawler IPs) | Deploy log; confirm with Search Console URL Inspection, Live test |
| Week 2: /medical-billing-services (7-day rule: meta and FAQs only) | meta from 19 Nov | Plan meta; 3 new FAQs (small-practice ROI, switching time, who owns the A/R) | FAQ schema rebuilt from visible text |
| Specialty FAQs to 5 (7-day rule) | 3 specialty-specific FAQs each | 5 for radiology (teleradiology, TC vs 26), pain management (UDT 80305-80307 / G0480-G0483, opioid documentation), rheumatology (E/M on infusion day, JW/JZ), orthopedics (57/58/78/79, workers' comp and auto) | FAQ schema 397 to 402 Q&As |
| Titles matching the keyword map | e.g. "Anesthesia Billing Company & Coding Services" | "Anesthesia Billing Services & Coding" (keyword-map target, pos 11); pain management keeps "Pain Management Billing Company" (top query) | GSC positions |
| Already done before this plan | | Denial hub and 12 guides, /denial-management-services, cost guide (/blog/how-much-does-medical-billing-cost, kept at its URL instead of a new /medical-billing-cost to avoid two pages competing), reversal/recoupment and prior-auth posts, ProfessionalService + Service + BreadcrumbList + FAQPage schema, IndexNow | |

## Scheduled by the 7-day rule

| From | Page | Work |
|---|---|---|
| 25 Nov | Homepage | Add links to /medical-billing-services, the top 8 specialty pages and /denial-codes; proof notes next to each percentage (needs owner sources) |
| 27 Nov | 12 denial-code guides | Add an example scenario and links to 2 specialty pages to each guide |
| 27 Nov | Radiology, pain management, rheumatology, orthopedics | Turn the "denial codes ... see most often" box into a "Common denials in [specialty]" table; new body sections (teleradiology, drug testing, infusion E/M, global surgery and DME) |
| 27 Nov | /medical-billing-services | H1 "Medical Billing Services for Independent Practices and Groups"; "Onboarding in 30 days" section; software and results sections once the owner confirms |

## Owner decisions and TODOs (nothing invented in the meantime)
- **Homepage figures:** sources for 98%, 92%, 99%, "up to 10%" and "12% within six months". Without a source, the plan says to remove the figure.
- **Testimonials:** the same three testimonials ("Dr. Theo James", "Emilia Munro", "Dr. Branden Griffiths") appear on about 23 specialty pages. If they are not real, attributable clients, they should be replaced with real reviews or removed. This is a trust and FTC risk on a health/money site.
- **Pricing:** the real pricing model. **Software:** which EHR/PM systems the team uses. **Reviewer:** a coder or billing manager with CPC/CCS credentials.
- **Services offered:** chiropractic and dental billing (yes/no). Confirm behavioral health and physical therapy before those pages are built (weeks 7 to 8).
- **Disavow (week 1):** a Semrush or Search Console backlinks export so the disavow file can be built.
- **Directories and reviews:** Clutch, GoodFirms, Crunchbase, MGMA, HFMA, and Google reviews from current practices.

---

# Site Structure & Location Pages Plan (24 Nov 2026): implementation status

Source: `CLAUDE_CODE_STRUCTURE_medi.md` + `Alpha_Medi_Assist_Page_Map_24-Nov-2026.csv`. Governing rule: **no location page is published until the owner confirms the office, clients in that state, and the state facts are verified from official sources.**

## Done on 24 Nov 2026 (week 1)

| Item | Before | After | Validation |
|---|---|---|---|
| 301 /specialties/orthopedic-surgery | two competing pages | 301 to /specialties/orthopedics (done 23 Nov); not in sitemap | Deploy check follows redirect to 200 |
| 301 /virtual-medical-assistant/ | 301 since 19 Nov | unchanged; not in sitemap. It still shows in GSC from older impressions, which will fade | Deploy check |
| Sitemap clean-up and lastmod | 58 of 73 URLs got the build date on every deploy | lastmod comes from a per-page content fingerprint (`src/seo/lastmod.json`) and changes only when a page's title, description or main text changes | Two consecutive builds give an identical manifest |
| HTML sitemap | none | /sitemap lists every indexable page in 6 groups, built from the route registry; linked in the footer | Prerendered, 1 H1, title 27 chars, no mobile overflow |

## Blocked: owner confirmation and official-source verification needed

| Pages (from the page map) | Needs |
|---|---|
| /locations hub | Confirmation that the Spotsylvania, VA office is real and staffed (the plan targets "near me", which needs a real office). Decide whether the St. Petersburg "Ste 23684" address is a mailbox |
| 14 state pages (TX, CA, NY, PA, NJ, GA, NC, MD, OH, MI, IL, AZ, CO) | Which states have current clients. The state facts (Medicaid program, MAC jurisdiction, prompt-pay and surprise-billing rules) must be verified on cms.gov and state sites; cms.gov is not reachable from the build sandbox, so verification needs a reachable environment or a reviewer |
| 5 city pages (Houston, Dallas, Miami, Los Angeles, Chicago) | Same, plus real local knowledge; the plan forbids name-swap pages |
| Florida (Miami, Tampa sections) and Virginia upgrades | Owner confirmation; the 7-day rule also applies (FL/VA changed 19 to 22 Nov, so not before 26 to 29 Nov) |
| Header "Locations" dropdown, homepage links to /locations and top state pages | After the state pages exist |
| Separate phone number | Owner decision. +1 424-542-7170 is shared with zingoassist.us and alphaaheadllc.com |
| Behavioral health, physical therapy, chiropractic | Confirm the services are offered |
| Results per state, pricing model, credentialed reviewer | From the owner |

## Internal-link map (section 6): status
- Specialty pages link to /medical-billing-services and the denial-code hub (related links). The 6 upgraded specialties link to 4 code guides each.
- Denial-code pages link to /denial-management-services and the hub. Links to 2 specialty pages are scheduled for 27 Nov (7-day rule).
- Blog: the ADHD post should link to the psychiatry and mental-health pages (behavioral health once it exists). Scheduled for 30 Nov (ADHD post edited 23 Nov).
- Footer: both offices, the FL/VA pages and the HTML sitemap are linked. Homepage links scheduled for 25 Nov.

## 24 Nov 2026 (owner instruction: do the scheduled items now; the 7-day rule was waived)

| Item | Before | After |
|---|---|---|
| Denial-code guides (12) | no example; linked only to the hub and the service page | "Example" section on each (labelled illustrative, not a client case) plus links to 2 relevant specialty pages and the denial management service |
| Specialty pages: common denials | link box | "Common denials in [specialty] billing" table on the 6 upgraded pages, with the specialty reason for each code and a link to the guide |
| Specialty pages: 2 denial guides each | 6 pages | All specialty pages: related links now include CO-16 and CO-97 |
| Homepage links | /medical-billing-services only (hero) | "Explore our billing services" block: billing, denial management, credentialing, denial codes, 8 specialties, FL and VA |
| /medical-billing-services H1 | "Outsourced Medical Billing Services for Healthcare Practices" | "Medical Billing Services for Independent Practices and Groups" (plan) |
| ADHD and anxiety posts | linked only to services | Also link to psychiatry billing, mental health billing and medical coding |
| Descriptions of 155 characters or fewer | 33 over 155 (the earlier audit missed them because of the meta tag attribute order) | 0 over 155; all titles 60 or fewer; one H1 per page |

Still with the owner: the "onboarding in 30 days" section (the site currently says "within a few days"; needs the owner's real process), software/results sections, all state and city pages, the /locations hub, phone number, testimonials and homepage figures.
