// Articles published 2026-11-17. Each targets one question cluster (AEO) and
// links to the matching service page. Keep figures phrased as typical industry
// ranges unless they are Alpha Medi Assist's own reported numbers.
import type { BlogPost } from './blogPosts'

export const newPosts: BlogPost[] = [
  {
    slug: 'how-much-does-medical-billing-cost',
    category: 'Pricing & outsourcing',
    references: [
      { label: 'Software Advice: Outsourcing medical billing (pricing models)', url: 'https://www.softwareadvice.com/resources/outsource-medical-billing' },
      { label: 'HHS: HIPAA Business Associate contracts', url: 'https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html' },
    ],
    datePublished: '2026-11-17',
    dateModified: '2026-11-20',
    title: 'How Much Does Medical Billing Cost? Outsourced Pricing Explained',
    seoTitle: 'How Much Does Medical Billing Cost? (2026 Pricing Guide)',
    seoDescription:
      'Outsourced medical billing typically costs 4% to 10% of collections. Compare percentage, per-claim and flat-fee pricing, inclusions and in-house cost.',
    excerpt:
      'Percentage of collections, per-claim or flat fee? What outsourced medical billing really costs, what should be included, and how to compare quotes.',
    intro: [
      'Short answer: most outsourced medical billing companies charge a percentage of the money they collect for you, commonly between 4% and 10% of net collections. Where your practice lands in that range depends on specialty, claim volume, payer mix and how much of the revenue cycle the company handles.',
      'This guide explains the three common pricing models, what should be included in the fee, the hidden costs of in-house billing, and the questions to ask before you sign.',
    ],
    sections: [
      {
        heading: 'The three medical billing pricing models',
        paragraphs: [
          'Billing companies price their services in one of three ways, and some combine them:',
        ],
        bullets: [
          'Percentage of collections: the most common model. The company earns a share of what it actually collects, so its incentive is aligned with yours. Typical quotes fall between 4% and 10% of net collections.',
          'Per-claim fee: a fixed price per claim submitted, often a few dollars per claim. Predictable, but the company is paid whether or not the claim is ever collected.',
          'Flat monthly fee: a fixed retainer for a defined scope. Common for small, stable practices or for single services such as credentialing or virtual staff.',
        ],
      },
      {
        heading: 'What moves the price up or down',
        bullets: [
          'Specialty: surgical, anesthesia and behavioral health billing involve more complex rules than routine primary care.',
          'Claim volume and average reimbursement: high-volume, low-dollar practices often get lower percentages.',
          'Payer mix: heavy Medicaid managed care or workers compensation volume adds follow-up work.',
          'Scope: eligibility checks, prior authorizations, coding, patient statements and credentialing may be included or extra.',
          'Old A/R: cleaning up aging receivables is often priced separately from ongoing billing.',
        ],
      },
      {
        heading: 'Why medical billing cost varies by specialty',
        paragraphs: [
          'Billing companies price by specialty because the work behind each claim is very different. The more rules, follow-up and payer back-and-forth a claim needs, the more it costs to collect. Some examples:',
        ],
        bullets: [
          'Anesthesia: claims are built from base units, time units and modifiers that identify who provided the service and how it was supervised. Accurate start and stop times and the right modifiers are essential, and errors are easy to make.',
          'Surgery: global surgical periods decide which follow-up visits are separately payable, and modifiers for staged procedures, unrelated services, assistants and multiple procedures must be applied correctly or claims are denied or underpaid.',
          'Behavioral health: psychotherapy codes are time-based, so documentation must support the time billed. Many plans require prior authorization or limit the number of visits, and behavioral health benefits are often managed by a separate company from the medical plan.',
          'Radiology: many imaging codes are split into a professional component (modifier 26) and a technical component (modifier TC), and advanced imaging frequently needs prior authorization before the study.',
          'Primary care: coding rules are usually simpler, but practices see many patients and submit many lower-value claims, so the work is about volume, eligibility checks and fast follow-up rather than complex rules.',
        ],
      },
      {
        heading: 'Watch the denominator: net collections vs. gross charges',
        paragraphs: [
          'Always confirm what the percentage is applied to. A rate applied to net collections (the money actually received) is very different from the same rate applied to gross charges, which are usually much higher than what payers pay. Two quotes that both say "6%" can differ dramatically in real cost.',
        ],
      },
      {
        heading: 'What in-house billing really costs',
        paragraphs: [
          'Comparing a billing company\'s fee to a biller\'s salary understates the cost of doing it yourself. In-house billing also carries benefits and payroll taxes, practice-management and clearinghouse software, coding updates and training, management time, and the revenue lost when the biller is out, overloaded or leaves.',
          'The most expensive cost is usually invisible: denials that are never appealed and claims that age past timely-filing limits. A billing partner that works every denial often recovers more than its fee.',
        ],
      },
      {
        heading: 'Questions to ask before you sign',
        bullets: [
          'Is the percentage based on net collections or gross charges?',
          'Which services are included, and which are billed separately?',
          'Are there setup fees, minimums or charges for old A/R?',
          'Which KPIs will you report, and how often?',
          'Who owns the data, and what happens if we end the contract?',
          'Will you sign a HIPAA Business Associate Agreement?',
        ],
      },
    ],
    faqs: [
      { question: 'What percentage do medical billing companies charge?', answer: 'Most charge between 4% and 10% of net collections. Small, low-volume or complex-specialty practices tend toward the higher end; high-volume practices toward the lower end.' },
      { question: 'Is outsourced medical billing cheaper than in-house?', answer: 'For many small and mid-sized practices it is, once salaries, benefits, software, training, turnover and uncollected denials are counted. The answer depends on your volume and how well in-house billing currently performs.' },
      { question: 'Are there hidden fees in medical billing contracts?', answer: 'There can be: setup fees, monthly minimums, separate charges for patient statements, credentialing or old A/R, and percentages calculated on gross charges instead of collections. Ask for every fee in writing.' },
      { question: 'How much does Alpha Medi Assist charge?', answer: 'Alpha Medi Assist gives a fixed quote after a free billing assessment of your specialty, claim volume and payer mix.' },
      { question: 'Why do billing companies charge different rates for different specialties?', answer: 'Because the work per claim differs. Specialties with time-based codes, modifiers, global surgical periods or frequent prior authorizations (such as anesthesia, surgery, behavioral health and radiology) need more coding review and follow-up than routine, high-volume primary care.' },
      { question: 'Is in-house billing cheaper than outsourcing?', answer: 'Calculate it with your own numbers: divide your total annual billing cost (staff, benefits, payroll taxes, training, software and management time) by net collections, then compare the result with outsourced quotes. Our in-house vs. outsourced billing guide walks through the formula.' },
    ],
    closing: [
      'The cheapest quote is not always the lowest cost. A billing partner with a high net collection rate and low days in A/R usually pays for itself through revenue you are currently leaving on the table.',
      'Alpha Medi Assist offers a free billing assessment: we review your denials and aging A/R and give you a clear, fixed quote.',
    ],
    related: [
      { label: 'Outsourced medical billing services', path: '/medical-billing-services' },
      { label: 'Medical billing for small practices', path: '/medical-billing-for-small-practices' },
      { label: 'In-house vs. outsourced medical billing', path: '/blog/in-house-vs-outsourced-medical-billing' },
      { label: 'Anesthesiology billing', path: '/specialties/anesthesiology' },
      { label: 'Mental health counseling billing', path: '/specialties/mental-health-counseling' },
      { label: 'Radiology billing', path: '/specialties/radiology' },
      { label: 'Revenue cycle management services', path: '/revenue-cycle-management-services' },
      { label: 'Get a free billing assessment', path: '/free-consultation' },
    ],
  },
  {
    slug: 'how-long-does-medical-credentialing-take',
    category: 'Credentialing',
    references: [
      { label: 'CMS: PECOS Medicare enrollment', url: 'https://pecos.cms.hhs.gov/' },
      { label: 'CMS: NPPES (National Plan & Provider Enumeration System)', url: 'https://nppes.cms.hhs.gov/' },
      { label: 'CAQH ProView', url: 'https://proview.caqh.org/' },
      { label: '42 CFR 424.521: Request for payment by physicians and other suppliers', url: 'https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-B/part-424/subpart-P/section-424.521' },
    ],
    datePublished: '2026-11-17',
    dateModified: '2026-11-20',
    title: 'How Long Does Medical Credentialing Take? Timeline by Payer',
    seoTitle: 'How Long Does Medical Credentialing Take? Payer Timelines',
    seoDescription:
      'Provider credentialing usually takes 60 to 180 days. Typical Medicare, Medicaid and commercial payer timelines, the steps and how to avoid delays.',
    excerpt:
      'Credentialing with insurance companies typically takes 60 to 180 days. Here is what drives the timeline and how to start billing sooner.',
    intro: [
      'Short answer: credentialing a provider with insurance companies typically takes 60 to 180 days from a complete application to an effective date. Medicare and Medicaid are often on the shorter end; some commercial payers take longer, especially when their networks are closed or busy.',
      'Because a provider generally cannot bill a payer as in-network until enrollment is effective, credentialing delays translate directly into lost or delayed revenue. Here is how the process works and how to keep it moving.',
    ],
    sections: [
      {
        heading: 'Typical credentialing timelines by payer type',
        paragraphs: [
          'Timelines vary by payer, state and season, so treat these as planning ranges rather than guarantees:',
        ],
        bullets: [
          'Medicare (via PECOS): commonly about 30 to 90 days once a complete application is submitted.',
          'Medicaid and Medicaid managed care plans: commonly about 45 to 120 days, depending on the state and plan.',
          'Commercial payers: commonly about 60 to 180 days, including the payer\'s credentialing committee review and contracting.',
        ],
      },
      {
        heading: 'Credentialing timelines by payer type: how each process works',
        paragraphs: [
          'Each payer type runs its own process, and knowing who does what explains most of the difference in timelines.',
        ],
        bullets: [
          'Medicare: enrollment is done online through PECOS (or on paper forms). Individual practitioners use the CMS-855I, which now also covers reassigning benefits to a group (previously a separate CMS-855R form), and groups and clinics use the CMS-855B. The application is processed by the Medicare Administrative Contractor (MAC) for your state, which may send development requests for missing information; answering them quickly keeps the clock moving.',
          'Medicare effective dates: for physicians, non-physician practitioners and their groups, the effective date is generally the later of the date the MAC receives an application it later approves, or the date the provider first furnished services at the new location. Under 42 CFR 424.521, Medicare may allow billing for services furnished up to 30 days before the effective date when circumstances prevented enrolling in advance. Submitting early is far safer than relying on that window.',
          'Medicaid: run by each state, so forms, portals, revalidation rules and processing times vary by state. Many states require an NPI and, for some provider types, Medicare enrollment before Medicaid enrollment. Medicaid managed care plans then credential providers separately, so enrolling with the state program does not automatically make a provider in-network with each plan.',
          'Commercial payers: most pull credentialing data from the provider\'s CAQH ProView profile, which must be complete and re-attested every 120 days. The payer verifies the information, and its credentialing committee approves the provider. Contracting is a separate step: the provider or group must also sign a participation agreement and receive an effective date before billing as in-network.',
          'Medicare Advantage plans: these are private plans, so they credential providers through their own process, usually much like their commercial lines. Enrollment in traditional Medicare does not make a provider in-network with any Medicare Advantage plan; each plan must be applied to separately.',
        ],
      },
      {
        heading: 'The credentialing steps, in order',
        bullets: [
          'Confirm the provider\'s NPI (from NPPES), state license, DEA registration (if applicable), board certification and malpractice coverage.',
          'Create or update the CAQH ProView profile, upload documents and attest. CAQH requires re-attestation every 120 days.',
          'Enroll in Medicare through PECOS and in the state Medicaid program, if participating.',
          'Submit applications to each commercial payer and track them to committee approval.',
          'Review and sign participation agreements, then confirm effective dates and fee schedules before billing.',
        ],
      },
      {
        heading: 'What causes credentialing delays',
        bullets: [
          'Incomplete applications or missing documents (the most common cause)',
          'Expired licenses, malpractice certificates or CAQH attestations',
          'Unexplained gaps in work history',
          'Address or practice-location mismatches between NPPES, CAQH and the application',
          'Not following up: applications can sit in a queue without anyone noticing',
        ],
      },
      {
        heading: 'How to start billing sooner',
        paragraphs: [
          'Start credentialing 90 to 120 days before a new provider\'s start date, keep CAQH current, and follow up with each payer on a fixed schedule. Track every application in one log with submission date, reference number and next follow-up date.',
          'Also remember that credentialing is not a one-time task. Medicare requires periodic revalidation, CAQH requires regular re-attestation, and commercial payers re-credential providers every few years.',
        ],
      },
    ],
    faqs: [
      { question: 'How long does credentialing take with insurance companies?', answer: 'Typically 60 to 180 days from a complete application, depending on the payer. Medicare and Medicaid are often faster; some commercial payers take longer.' },
      { question: 'Can a provider see patients before credentialing is complete?', answer: 'A provider can see patients, but generally cannot bill a payer as an in-network provider until enrollment with that payer is effective. Check each payer\'s rules on effective dates and retroactive billing before scheduling patients.' },
      { question: 'What is CAQH and why does it matter?', answer: 'CAQH ProView is a database most commercial payers use to collect provider credentialing data. Keeping the profile complete and re-attesting every 120 days prevents delays.' },
      { question: 'What is the difference between credentialing and payer enrollment?', answer: 'Credentialing verifies a provider\'s qualifications (license, education, malpractice history). Payer enrollment, or contracting, is the step that makes the provider a participating, billable provider with that insurance company.' },
      { question: 'Does Medicare enrollment make a provider in-network with Medicare Advantage plans?', answer: 'No. Medicare Advantage plans are run by private insurers that credential and contract with providers separately. Each plan has its own application and contracting process.' },
      { question: 'Can Medicare be billed for services before the enrollment effective date?', answer: 'In limited cases. Under 42 CFR 424.521, physicians, non-physician practitioners and their groups may bill for services furnished up to 30 days before the effective date when circumstances prevented enrolling in advance. Starting enrollment before the provider sees Medicare patients avoids relying on this.' },
    ],
    closing: [
      'Credentialing is paperwork-heavy, deadline-driven and easy to stall. A dedicated credentialing team that tracks every application weekly is the fastest way to get new providers billing.',
      'Alpha Medi Assist handles CAQH, Medicare, Medicaid and commercial payer credentialing and enrollment for new and existing providers.',
    ],
    related: [
      { label: 'Medical credentialing services', path: '/medical-credentialing-service' },
      { label: 'Nurse practitioner billing and credentialing', path: '/specialties/nurse-practitioner' },
      { label: 'Outsourced medical billing services', path: '/medical-billing-services' },
    ],
  },
  {
    slug: 'medical-billing-vs-medical-coding',
    category: 'Coding',
    references: [
      { label: 'AAPC: Differences between medical coding and medical billing', url: 'https://aapc.com/resources/understanding-the-differences-between-medical-coding-and-medical-billing' },
      { label: 'CMS: ICD-10 code sets', url: 'https://www.cms.gov/medicare/coding-billing/icd-10-codes' },
      { label: 'AMA: CPT® overview', url: 'https://www.ama-assn.org/practice-management/cpt' },
    ],
    datePublished: '2026-11-17',
    title: 'Medical Billing vs. Medical Coding: What Is the Difference?',
    seoTitle: 'Medical Billing vs. Medical Coding: Key Differences',
    seoDescription:
      'Coding turns clinical documentation into ICD-10, CPT and HCPCS codes; billing turns those codes into paid claims. How they differ and work together.',
    excerpt:
      'Coding translates care into codes; billing turns those codes into payment. A plain-English comparison for practice owners.',
    intro: [
      'Short answer: medical coding translates a provider\'s documentation into standardized codes (ICD-10-CM for diagnoses, CPT and HCPCS for procedures and supplies). Medical billing uses those codes to create claims, submit them to payers, post payments and follow up until the practice is paid.',
      'Both are part of the revenue cycle, and errors in either one cost money. Here is how they differ and why they need to work closely together.',
    ],
    sections: [
      {
        heading: 'What medical coders do',
        bullets: [
          'Review clinical documentation for each encounter',
          'Assign ICD-10-CM diagnosis codes and CPT / HCPCS procedure codes',
          'Apply modifiers (for example, 25 or 59) where rules require them',
          'Check that documentation supports the level of service billed',
          'Flag documentation gaps back to providers',
        ],
      },
      {
        heading: 'What medical billers do',
        bullets: [
          'Verify insurance eligibility and benefits',
          'Create and scrub claims, then submit them electronically',
          'Fix clearinghouse rejections and payer denials',
          'Post payments from ERAs and EOBs',
          'Follow up on unpaid claims and manage patient balances',
        ],
      },
      {
        heading: 'Side-by-side comparison',
        paragraphs: [
          'Focus: coding is clinical and documentation-driven; billing is financial and payer-driven.',
          'Output: coding produces accurate codes; billing produces paid claims.',
          'Typical credentials: coders often hold the CPC (AAPC) or CCS (AHIMA); billers may hold the CPB (AAPC).',
          'Errors: coding errors lead to denials, underpayment or audit risk; billing errors lead to rejections, missed deadlines and unpaid A/R.',
        ],
      },
      {
        heading: 'Why practices outsource both together',
        paragraphs: [
          'When coding and billing sit with different vendors, denials bounce between them. A single team that owns both can trace a denial to its root cause (a missing modifier, a diagnosis that does not support medical necessity, an eligibility issue) and fix it at the source.',
        ],
      },
    ],
    faqs: [
      { question: 'Is medical billing the same as medical coding?', answer: 'No. Coding assigns diagnosis and procedure codes from documentation; billing uses those codes to submit claims and collect payment. They are separate skills within the same revenue cycle.' },
      { question: 'Which comes first, billing or coding?', answer: 'Coding comes first. A claim cannot be billed until the encounter has been coded.' },
      { question: 'What code sets do medical coders use?', answer: 'ICD-10-CM for diagnoses, CPT for most procedures and services, and HCPCS Level II for supplies, drugs and certain services.' },
      { question: 'Can one company handle both coding and billing?', answer: 'Yes. Alpha Medi Assist provides certified medical coding and full-service billing together, so denials are traced and fixed at their source.' },
    ],
    closing: [
      'Accurate coding is the foundation; disciplined billing is what turns it into revenue. Practices get the best results when both are handled by one accountable team.',
    ],
    related: [
      { label: 'Medical coding services', path: '/medical-coding-services' },
      { label: 'Outsourced medical billing services', path: '/medical-billing-services' },
      { label: 'Revenue cycle management services', path: '/revenue-cycle-management-services' },
    ],
  },
  {
    slug: 'common-claim-denial-codes-and-how-to-fix-them',
    category: 'Denial management',
    references: [
      { label: 'X12: Claim Adjustment Reason Codes (CARC)', url: 'https://x12.org/codes/claim-adjustment-reason-codes' },
      { label: 'X12: Remittance Advice Remark Codes (RARC)', url: 'https://x12.org/codes/remittance-advice-remark-codes' },
      { label: 'CMS: Medicare Claims Processing Manual, Ch. 1 (timely filing)', url: 'https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms-items/cms018912' },
      { label: 'CMS: National Correct Coding Initiative (NCCI) edits', url: 'https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci-edits' },
    ],
    datePublished: '2026-11-17',
    title: 'Common Claim Denial Codes (CARC) and How to Fix Each One',
    seoTitle: 'Common Denial Codes: CO-16, CO-50, CO-97, CO-197 & Fixes',
    seoDescription:
      'What the most common claim adjustment reason codes mean (CO-16, CO-18, CO-22, CO-29, CO-50, CO-97, CO-197 and more) and the practical fix for each denial.',
    excerpt:
      'A practical reference to the denial codes practices see most, what each one means and exactly how to resolve it.',
    intro: [
      'Every denied or adjusted claim comes back with a Claim Adjustment Reason Code (CARC) explaining why, often paired with a Remittance Advice Remark Code (RARC) that adds detail. Reading both correctly is the fastest way to decide whether to correct the claim, appeal it, bill another payer or bill the patient.',
      'Below are the codes practices see most often and the practical fix for each.',
    ],
    sections: [
      {
        heading: 'First, the group code: CO, PR, OA and PI',
        bullets: [
          'CO (Contractual Obligation): the provider is responsible; the amount cannot be billed to the patient.',
          'PR (Patient Responsibility): the amount may be billed to the patient (deductible, coinsurance, copay).',
          'OA (Other Adjustment): an adjustment that fits neither category.',
          'PI (Payer Initiated): an adjustment the payer applied that is not the patient\'s responsibility.',
        ],
      },
      {
        heading: 'CO-16: Claim lacks information or has billing errors',
        paragraphs: [
          'Meaning: the claim is missing information or has a submission error. CO-16 is generic; the attached RARC (for example, a missing ordering-provider NPI) tells you what to fix.',
          'Fix: correct the specific field identified by the remark code and resubmit as a corrected claim. An appeal is usually not needed.',
        ],
      },
      {
        heading: 'CO-18: Exact duplicate claim or service',
        paragraphs: [
          'Meaning: the payer already received a claim for the same patient, date, service and provider.',
          'Fix: check claim status before resubmitting. If you are changing the original, send a corrected claim with the right frequency code instead of a new claim.',
        ],
      },
      {
        heading: 'CO-22: May be covered by another payer (coordination of benefits)',
        paragraphs: [
          'Meaning: the payer believes another plan is primary.',
          'Fix: confirm coverage order with the patient and payers, bill the primary first, then submit to the secondary with the primary\'s remittance.',
        ],
      },
      {
        heading: 'CO-29: Time limit for filing has expired',
        paragraphs: [
          'Meaning: the claim arrived after the payer\'s timely-filing limit (for Medicare, generally 12 months from the date of service; commercial limits are often much shorter).',
          'Fix: appeal only if you have proof of timely original submission, such as a clearinghouse acceptance report. Otherwise fix the process: track filing limits by payer and work rejections daily.',
        ],
      },
      {
        heading: 'CO-50: Not deemed a medical necessity',
        paragraphs: [
          'Meaning: the payer does not consider the service medically necessary for the diagnosis billed.',
          'Fix: check that the diagnosis codes support the service and meet any coverage policy (for Medicare, the relevant LCD or NCD). If documentation supports necessity, appeal with clinical notes; if the code was wrong, send a corrected claim.',
        ],
      },
      {
        heading: 'CO-97: Payment included in another service (bundling)',
        paragraphs: [
          'Meaning: the service is considered part of another service already paid, often under NCCI edits.',
          'Fix: verify the bundling edit. If the services were truly separate and distinct, a correct modifier (such as 59 or an X modifier) with supporting documentation may apply; otherwise the adjustment stands.',
        ],
      },
      {
        heading: 'CO-197: Precertification or authorization absent',
        paragraphs: [
          'Meaning: the service required prior authorization that was not obtained or not referenced on the claim.',
          'Fix: if authorization existed, resubmit with the authorization number. If not, ask whether the payer allows retro-authorization; if it does not, treat it as a process gap and add authorization checks to scheduling.',
        ],
      },
      {
        heading: 'Other codes you will see often',
        bullets: [
          'CO-4: procedure code inconsistent with the modifier used, or a required modifier is missing.',
          'CO-11: diagnosis inconsistent with the procedure.',
          'CO-27: services provided after coverage terminated; verify eligibility at every visit.',
          'CO-45: charge exceeds the fee schedule or contracted amount; normally a contractual write-off, not a denial to appeal.',
          'CO-109: claim not covered by this payer; send it to the correct payer or contractor.',
          'CO-216: based on the findings of a review organization. The payer adjusted the claim after an external or utilization review; request the review findings and appeal with supporting records if you disagree.',
          'CO-253: sequestration, a reduction in federal payment. This is the mandatory across-the-board cut to Medicare payments. It is a contractual adjustment: post it as a write-off; it cannot be billed to the patient or appealed.',
          'PR-1, PR-2, PR-3: deductible, coinsurance and copay amounts that are billed to the patient.',
        ],
      },
    ],
    faqs: [
      { question: 'What is a CARC code?', answer: 'A Claim Adjustment Reason Code (CARC) is a standard code on a remittance that explains why a claim or line was paid differently than billed, such as a denial or reduction.' },
      { question: 'What is the difference between a CARC and a RARC?', answer: 'The CARC states the reason for the adjustment; the Remittance Advice Remark Code (RARC) adds detail, such as which piece of information is missing.' },
      { question: 'Should every denial be appealed?', answer: 'No. Many denials, such as CO-16, are fixed faster with a corrected claim. Appeal when the claim was correct and documentation supports it, and fix the process when the denial reflects a workflow gap.' },
      { question: 'What does CARC 253 mean on a Medicare remittance?', answer: 'CARC 253 means sequestration: a reduction in federal payment. Medicare applies it to most claim payments by law. It is not a denial and cannot be appealed or billed to the patient; post it as a contractual adjustment.' },
      { question: 'What does CO mean on a denial?', answer: 'CO stands for Contractual Obligation: the adjustment is the provider\'s responsibility under the payer contract and cannot be billed to the patient.' },
    ],
    closing: [
      'Track denials by code and by payer every month. The same few codes usually account for most denied dollars, and fixing their root cause pays off on every future claim.',
      'Alpha Medi Assist works every denial, corrects or appeals it, and reports denial trends by reason code each month.',
    ],
    related: [
      { label: 'CO-16 denial code: full guide', path: '/denial-codes/co-16' },
      { label: 'CO-97 denial code: full guide', path: '/denial-codes/co-97' },
      { label: 'CO-50 denial code: medical necessity', path: '/denial-codes/co-50' },
      { label: 'CO-197 denial code: authorization absent', path: '/denial-codes/co-197' },
      { label: 'CO-29 denial code: timely filing', path: '/denial-codes/co-29' },
      { label: 'CO-4 and CO-11: modifier and diagnosis denials', path: '/denial-codes/co-4' },
      { label: 'All denial codes: CO-45, PR-1, CO-18, CO-22 and more', path: '/denial-codes' },
      { label: 'Denial management services', path: '/denial-management-services' },
      { label: 'Revenue cycle management services', path: '/revenue-cycle-management-services' },
      { label: 'Top 10 reasons for claim denials', path: '/blog/top-10-reasons-for-medical-claim-denials-and-how-to-fix-them' },
      { label: 'Medical coding services', path: '/medical-coding-services' },
      { label: 'Outsourced medical billing services', path: '/medical-billing-services' },
    ],
  },
]
