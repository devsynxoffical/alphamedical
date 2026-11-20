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
- Weeks 5-8: upgrade 6 specialty pages (dermatology, radiology, anesthesiology, orthopedics, pain management, internal medicine); 3 new specialty pages once confirmed; 4 more denial code pages (CO-4, CO-11, CO-18, CO-22).
- Weeks 9-12: CO-29, CO-50, CO-109, CO-197 pages; blogs (billing cost by specialty, in-house vs outsourced, credentialing timeline by payer, yearly CPT updates).
- Clean links: healthcare directories, EHR marketplaces, guest posts. These need owner accounts and outreach.

## Targets (from the plan) vs. measurement
Day 30 / 60 / 90: ranking keywords 60 / 150 / 300; top-20 keywords 3 / 15 / 40; organic visits 50 / 300 / 900; leads 1 / 4 / 10.
Leads cannot be measured until GA4 (`VITE_GA_MEASUREMENT_ID`) is set; form emails are the fallback count.
