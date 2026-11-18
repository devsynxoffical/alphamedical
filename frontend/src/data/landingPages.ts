// Content for keyword-targeted landing pages (core service, RCM, small-practice
// and state/location pages). Rendered by src/pages/LandingPage.tsx and
// registered for sitemap / prerender / schema in src/seo/routes.ts.
//
// Rule for editors: only state company facts that are true and already used
// elsewhere on the site (90+ specialties, 98% net collection rate, ~30 days in
// A/R, 72-hour claim turnaround, 92% first-pass rate, HIPAA-compliant, offices
// in VA and FL). Industry figures must be phrased as typical ranges.

export interface LandingSection {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  steps?: { title: string; text: string }[]
  table?: { head: string[]; rows: string[][] }
}

export interface LandingPageData {
  path: string
  kind: 'service' | 'location'
  /** Breadcrumb / llms.txt label */
  label: string
  serviceType: string
  /** Schema areaServed (state name) for location pages */
  areaServed?: string
  metaTitle: string
  metaDescription: string
  eyebrow: string
  h1: string
  /** 40-60 word direct answer shown under the H1 (AEO / featured snippets) */
  answer: string
  heroBullets: string[]
  stats?: { value: string; label: string }[]
  sections: LandingSection[]
  faqs: { question: string; answer: string }[]
  related: { label: string; path: string }[]
  /** Authoritative sources for factual claims (rendered as "Sources"). */
  references?: { label: string; url: string }[]
  ctaTitle: string
  ctaText: string
}

const coreStats = [
  { value: '98%', label: 'Net collection rate' },
  { value: '92%', label: 'First-pass claim acceptance' },
  { value: '72 hrs', label: 'Claim turnaround' },
  { value: '90+', label: 'Specialties served' },
]

export const landingPages: LandingPageData[] = [
  // ------------------------------------------------------------------ core
  {
    path: '/medical-billing-services',
    kind: 'service',
    label: 'Medical Billing Services',
    serviceType: 'Medical billing',
    metaTitle: 'Outsourced Medical Billing Services | Alpha Medi Assist',
    metaDescription:
      'Outsourced medical billing for U.S. practices: eligibility, coding, claims, denial management, A/R follow-up and patient billing. HIPAA-compliant. Free assessment.',
    eyebrow: 'Medical billing company',
    h1: 'Outsourced Medical Billing Services for Healthcare Practices',
    answer:
      'Alpha Medi Assist is a U.S. medical billing company that manages your full claim cycle: insurance verification, coding review, claim submission, payment posting, denial management and A/R follow-up. Practices in 90+ specialties use us to get paid faster, reduce denials and remove billing work from their front office.',
    heroBullets: [
      'Certified coders and billers who work inside your existing EHR / PM system',
      'Clean claims submitted within 72 hours of charge entry',
      'Every denial worked, corrected and appealed, with no write-offs by default',
      'Monthly KPI reporting: collections, denial rate, days in A/R',
    ],
    stats: coreStats,
    sections: [
      {
        heading: 'What our medical billing services include',
        paragraphs: [
          'Outsourced medical billing means a specialist team handles every step between the patient visit and the final payment. You keep seeing patients and documenting care; we turn that documentation into paid claims.',
        ],
        bullets: [
          'Insurance eligibility and benefits verification before the visit',
          'Charge entry and coding review (ICD-10-CM, CPT and HCPCS, with correct modifiers)',
          'Electronic claim submission and clearinghouse rejection management',
          'ERA/EOB payment posting and reconciliation',
          'Denial management: root-cause analysis, corrected claims and appeals',
          'Accounts receivable follow-up on every unpaid claim over 30 days',
          'Patient statements and patient-balance support',
          'Provider credentialing and payer enrollment when you add providers or locations',
        ],
      },
      {
        heading: 'How the billing process works',
        steps: [
          { title: 'Free billing assessment', text: 'We review a sample of your claims, denials and aging A/R to find where revenue is leaking.' },
          { title: 'Onboarding', text: 'We connect to your EHR / practice-management system, sign a HIPAA Business Associate Agreement and map your payer mix. Most practices are live within a few days.' },
          { title: 'Daily claim cycle', text: 'Charges are coded, scrubbed and submitted, rejections are fixed the same day, and payments are posted as ERAs arrive.' },
          { title: 'Denials and A/R', text: 'Every denial is categorized by reason code, corrected or appealed, and aging A/R is worked by payer until it is resolved.' },
          { title: 'Reporting', text: 'You receive a monthly report on collections, denial rate, first-pass rate and days in A/R, plus a call to review trends.' },
        ],
      },
      {
        heading: 'In-house billing vs. outsourced medical billing',
        table: {
          head: ['', 'In-house billing', 'Alpha Medi Assist'],
          rows: [
            ['Staffing', 'Salaries, benefits, training, turnover and coverage for vacations', 'A dedicated team, with no hiring or coverage gaps'],
            ['Expertise', 'Depends on one or two people', 'Certified coders plus specialty-specific billers'],
            ['Denial follow-up', 'Often deprioritized when the office is busy', 'Every denial worked against payer deadlines'],
            ['Cost model', 'Fixed payroll regardless of collections', 'Fee tied to what we collect for you'],
            ['Visibility', 'Ad hoc reports', 'Monthly KPI reporting and review call'],
          ],
        },
      },
      {
        heading: 'Billing for 90+ specialties',
        paragraphs: [
          'Coding rules, modifiers and payer policies differ by specialty. Our billers are assigned by specialty, so your claims are handled by people who know your CPT codes and your most common denial reasons, from E/M levels in internal medicine to time-based psychotherapy codes in behavioral health and global surgical packages in orthopedics.',
        ],
      },
      {
        heading: 'HIPAA-compliant and transparent',
        paragraphs: [
          'We sign a Business Associate Agreement with every client, use role-based access to your systems, and never move protected health information outside secure, audited workflows. You keep full ownership of your data and your payer contracts.',
        ],
      },
    ],
    faqs: [
      { question: 'What do medical billing services include?', answer: 'Full-service medical billing covers eligibility verification, charge entry, coding review, claim submission, payment posting, denial management, A/R follow-up and patient billing. Alpha Medi Assist provides all of these, plus credentialing and payer enrollment.' },
      { question: 'How much do outsourced medical billing services cost?', answer: 'Most billing companies charge a percentage of collections, commonly in the 4% to 10% range depending on specialty, claim volume and scope. Some use per-claim or flat monthly pricing. Alpha Medi Assist provides a fixed quote after a free billing assessment.' },
      { question: 'Will I lose control of my billing if I outsource?', answer: 'No. We work inside your existing EHR or practice-management system, you keep access to every claim and report, and you receive monthly KPI reporting and a review call.' },
      { question: 'How quickly can you start?', answer: 'Most practices are onboarded within a few days after the initial assessment, system access and a signed Business Associate Agreement.' },
      { question: 'Do you work with my EHR?', answer: 'Yes. Our team works in the EHR and billing software you already use, so you do not need to switch systems to outsource billing.' },
      { question: 'Is outsourced medical billing HIPAA-compliant?', answer: 'Yes. We sign a HIPAA Business Associate Agreement and follow role-based access and secure data-handling procedures for all protected health information.' },
    ],
    related: [
      { label: 'Revenue cycle management services', path: '/revenue-cycle-management-services' },
      { label: 'Medical coding services', path: '/medical-coding-services' },
      { label: 'Medical billing by specialty', path: '/medical-billing-specialities' },
      { label: 'How much does medical billing cost?', path: '/blog/how-much-does-medical-billing-cost' },
      { label: 'Medical billing for small practices', path: '/medical-billing-for-small-practices' },
    ],
    references: [
      { label: 'HHS: HIPAA Business Associate contract provisions', url: 'https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html' },
      { label: 'CMS: Medicare Claims Processing Manual (Pub. 100-04)', url: 'https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms-items/cms018912' },
    ],
    ctaTitle: 'Find out what your practice is leaving uncollected',
    ctaText: 'Get a free billing assessment: we review your denials and aging A/R and show you exactly where revenue is being lost.',
  },

  // ------------------------------------------------------------------ RCM
  {
    path: '/revenue-cycle-management-services',
    kind: 'service',
    label: 'Revenue Cycle Management Services',
    serviceType: 'Revenue cycle management',
    metaTitle: 'Revenue Cycle Management (RCM) Services | Alpha Medi Assist',
    metaDescription:
      'End-to-end revenue cycle management for physician practices: eligibility, prior auth, coding, claims, denials, A/R and monthly KPI reporting.',
    eyebrow: 'RCM services',
    h1: 'Revenue Cycle Management Services for Physician Practices',
    answer:
      'Revenue cycle management (RCM) is the full financial process of a patient encounter, from scheduling and insurance verification through coding, claims, payments, denials and patient collections. Alpha Medi Assist manages the entire cycle so practices collect more of what they earn, faster.',
    heroBullets: [
      'Front-end: eligibility checks and prior authorizations before the visit',
      'Mid-cycle: coding review and charge capture',
      'Back-end: claims, payment posting, denials and A/R',
      'Analytics: monthly KPI dashboard and root-cause denial reporting',
    ],
    stats: [
      { value: '98%', label: 'Net collection rate' },
      { value: '~30', label: 'Days in A/R' },
      { value: '92%', label: 'First-pass claim acceptance' },
      { value: '72 hrs', label: 'Claim turnaround' },
    ],
    sections: [
      {
        heading: 'The three stages of the revenue cycle',
        table: {
          head: ['Stage', 'What happens', 'What we handle'],
          rows: [
            ['Front end', 'Scheduling, registration, eligibility, prior authorization', 'Benefits verification, authorization tracking, demographic accuracy'],
            ['Mid cycle', 'Documentation, coding, charge capture', 'ICD-10-CM / CPT / HCPCS coding review, modifier checks, charge reconciliation'],
            ['Back end', 'Claims, payments, denials, patient balances', 'Claim scrubbing and submission, payment posting, appeals, A/R follow-up, statements'],
          ],
        },
      },
      {
        heading: 'Why denials start at the front desk',
        paragraphs: [
          'A large share of claim denials trace back to registration and eligibility errors (wrong member ID, inactive coverage, missing authorization) rather than to coding. That is why our RCM service starts before the visit: verifying coverage and authorizations up front prevents the denials that are hardest to recover later.',
        ],
      },
      {
        heading: 'Revenue cycle KPIs we track and report',
        bullets: [
          'Net collection rate: the share of collectible revenue actually collected',
          'Days in A/R: the average time from service to payment',
          'First-pass resolution rate: claims paid on first submission',
          'Denial rate by payer and by reason code (CARC/RARC)',
          'A/R over 90 days as a percentage of total A/R',
          'Charge lag: days from date of service to claim submission',
        ],
      },
      {
        heading: 'Who our RCM services are for',
        paragraphs: [
          'Independent physician practices, multi-provider groups, behavioral health practices, ambulatory surgery and specialty clinics, and nurse-practitioner-led practices across the United States. Whether you need complete revenue cycle outsourcing or support for one part of the cycle, such as denials or aging A/R, we scope the engagement to your gaps.',
        ],
      },
    ],
    faqs: [
      { question: 'What is revenue cycle management in healthcare?', answer: 'Revenue cycle management is the process of tracking a patient encounter from scheduling and insurance verification through coding, claim submission, payment posting, denial management and patient collections, until the account balance is zero.' },
      { question: 'What is the difference between medical billing and RCM?', answer: 'Medical billing is one part of RCM: preparing, submitting and following up on claims. RCM also covers the front end (eligibility and prior authorization), coding and charge capture, and analytics across the whole cycle.' },
      { question: 'What is a good net collection rate?', answer: 'A net collection rate of 95% or higher is widely considered a healthy benchmark for physician practices. Alpha Medi Assist reports a 98% net collection rate for its clients.' },
      { question: 'Can you take over only our denials or old A/R?', answer: 'Yes. We offer full RCM outsourcing or targeted projects such as denial management or cleanup of aging A/R over 90 days.' },
      { question: 'How do you report performance?', answer: 'Clients receive a monthly report covering collections, net collection rate, days in A/R, first-pass rate and denials by reason code, plus a review call.' },
    ],
    related: [
      { label: 'Outsourced medical billing services', path: '/medical-billing-services' },
      { label: 'Payment posting services', path: '/medical-payment-posting-services' },
      { label: 'Common denial codes and how to fix them', path: '/blog/common-claim-denial-codes-and-how-to-fix-them' },
      { label: 'Top 10 reasons for claim denials', path: '/blog/top-10-reasons-for-medical-claim-denials-and-how-to-fix-them' },
      { label: 'Medical credentialing services', path: '/medical-credentialing-service' },
    ],
    references: [
      { label: 'X12: Claim Adjustment Reason Codes (CARC)', url: 'https://x12.org/codes/claim-adjustment-reason-codes' },
      { label: 'CMS: National Correct Coding Initiative (NCCI) edits', url: 'https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci-edits' },
    ],
    ctaTitle: 'See where your revenue cycle is leaking',
    ctaText: 'Book a free RCM assessment and get a KPI snapshot of your practice: denials, A/R aging and collection rate.',
  },

  // ------------------------------------------------------------ small practices
  {
    path: '/medical-billing-for-small-practices',
    kind: 'service',
    label: 'Medical Billing for Small Practices',
    serviceType: 'Medical billing for small practices',
    metaTitle: 'Medical Billing for Small Practices | Alpha Medi Assist',
    metaDescription:
      'Affordable outsourced medical billing for solo physicians and small group practices. No billing staff to hire, faster payments, fewer denials. Free assessment.',
    eyebrow: 'Solo & small group practices',
    h1: 'Medical Billing Services for Small and Solo Practices',
    answer:
      'For a small practice, outsourcing medical billing usually costs less than employing a full-time biller, and it removes the risk of one person being the only one who knows how billing works. Alpha Medi Assist gives solo and small group practices a full billing team for a fee tied to collections.',
    heroBullets: [
      'No biller to hire, train or cover during vacations and turnover',
      'Fees tied to what we collect, not fixed payroll',
      'Works in your current EHR; no software change needed',
      'A dedicated account contact who knows your practice',
    ],
    stats: coreStats,
    sections: [
      {
        heading: 'The real cost of in-house billing in a small practice',
        paragraphs: [
          'A single in-house biller costs far more than a salary: benefits, payroll taxes, training, billing software, clearinghouse fees and the revenue lost whenever that person is out or leaves. In a small office, billing often falls to front-desk staff who also answer phones and check patients in, so denials and A/R follow-up are the first tasks to slip.',
        ],
      },
      {
        heading: 'What small practices get with Alpha Medi Assist',
        bullets: [
          'Eligibility verification so claims are not denied for coverage issues',
          'Coding review by certified coders, including E/M level checks',
          'Same-week claim submission and daily rejection fixes',
          'Denial and A/R follow-up on every unpaid claim',
          'Patient statements and answers to patient billing questions',
          'Simple monthly reporting you can read in five minutes',
        ],
      },
      {
        heading: 'Signs your practice should outsource billing',
        bullets: [
          'Days in A/R are creeping above 40 to 50 days',
          'Denied claims are piling up without appeals',
          'Your billing knowledge sits with one employee',
          'You are adding a provider and need credentialing and billing to scale',
          'Physicians are spending evenings on billing questions',
        ],
      },
    ],
    faqs: [
      { question: 'Is outsourcing medical billing worth it for a small practice?', answer: 'Usually yes. Outsourcing replaces the fixed cost of a biller (salary, benefits, software and training) with a fee based on collections, and adds specialist coding, denial and A/R expertise that a single employee rarely covers.' },
      { question: 'How much does medical billing cost for a small practice?', answer: 'Percentage-of-collections pricing is most common for small practices, typically in the 4% to 10% range depending on specialty, volume and scope. We give a fixed quote after reviewing your claim volume and payer mix.' },
      { question: 'Do you work with solo physicians and nurse practitioners?', answer: 'Yes. We support solo physicians, nurse-practitioner-led practices and small multi-provider groups across 90+ specialties.' },
      { question: 'Do I need to change my EHR?', answer: 'No. We work inside the EHR and practice-management system you already use.' },
    ],
    related: [
      { label: 'Outsourced medical billing services', path: '/medical-billing-services' },
      { label: 'How much does medical billing cost?', path: '/blog/how-much-does-medical-billing-cost' },
      { label: 'Nurse practitioner billing', path: '/specialties/nurse-practitioner' },
      { label: 'Virtual medical assistant services', path: '/virtual-medical-assistant-services' },
      { label: 'Medical credentialing services', path: '/medical-credentialing-service' },
    ],
    ctaTitle: 'Get a billing quote for your practice',
    ctaText: 'Tell us your specialty and monthly claim volume. We will review your current billing for free and send a clear, fixed quote.',
  },

  // ------------------------------------------------------------ Florida
  {
    path: '/medical-billing-services-florida',
    kind: 'location',
    label: 'Medical Billing Services in Florida',
    serviceType: 'Medical billing',
    areaServed: 'Florida',
    metaTitle: 'Florida Medical Billing Company | St. Petersburg & Tampa',
    metaDescription:
      'Florida medical billing company with an office in St. Petersburg. Billing, coding, credentialing and RCM for practices in Tampa Bay, Orlando, Miami and statewide.',
    eyebrow: 'Florida medical billing',
    h1: 'Medical Billing Services in Florida',
    answer:
      'Alpha Medi Assist is a medical billing company with an office in St. Petersburg, Florida. We handle billing, coding, credentialing and revenue cycle management for practices across Tampa Bay and statewide, with billers who work with Florida Medicare, Florida Medicaid managed care plans and major commercial payers every day.',
    heroBullets: [
      'Office in St. Petersburg, serving Tampa Bay and all of Florida',
      'Experience with Florida Medicare, Medicaid SMMC plans and commercial payers',
      'Credentialing and payer enrollment for new Florida providers',
      'HIPAA-compliant remote team that works in your EHR',
    ],
    stats: coreStats,
    sections: [
      {
        heading: 'Florida payer landscape: what your billing team must know',
        paragraphs: [
          'Florida billing has its own complexity. Medicare Part B claims for Florida are processed by First Coast Service Options (Jurisdiction N), Florida Medicaid is delivered largely through Statewide Medicaid Managed Care (SMMC) health plans, and the state has a large Medicare Advantage population, so a single practice often bills traditional Medicare, several Medicare Advantage plans and multiple Medicaid managed care plans.',
          'Florida\'s prompt-pay law (Section 627.6131, Florida Statutes) sets deadlines for insurers to pay, deny or contest clean claims. We track those timelines per payer so late or underpaid claims are followed up and escalated on time.',
        ],
      },
      {
        heading: 'Areas we serve in Florida',
        paragraphs: [
          'From our St. Petersburg office we support practices throughout Tampa Bay, including St. Petersburg, Tampa, Clearwater, Largo, Brandon, Sarasota and Bradenton, as well as Orlando, Jacksonville, Miami, Fort Lauderdale and practices statewide.',
        ],
      },
      {
        heading: 'Florida medical billing services',
        bullets: [
          'Full-service medical billing and A/R follow-up',
          'Medical coding review (ICD-10-CM, CPT, HCPCS)',
          'Medicare and Medicaid managed care billing',
          'Denial management and appeals',
          'Provider credentialing and Florida Medicaid / commercial payer enrollment',
          'Virtual medical assistants and receptionists for Florida practices',
        ],
      },
      {
        heading: 'Specialties we support in Florida',
        paragraphs: [
          'Florida clients include internal medicine, cardiology, orthopedics, pain management, dermatology, psychiatry and mental health, urology, OB/GYN, pediatrics and nurse-practitioner-led practices. See all specialties we bill for below.',
        ],
      },
    ],
    faqs: [
      { question: 'Do you have a medical billing office in Florida?', answer: 'Yes. Alpha Medi Assist has an office at 7901 4th St N, Ste 23684, St. Petersburg, FL 33702, and serves practices throughout Tampa Bay and the rest of Florida.' },
      { question: 'Who processes Medicare claims in Florida?', answer: 'Medicare Part A and Part B claims for Florida are processed by First Coast Service Options, the Medicare Administrative Contractor for Jurisdiction N.' },
      { question: 'Can you bill Florida Medicaid managed care plans?', answer: 'Yes. We bill Florida Medicaid, which is delivered largely through Statewide Medicaid Managed Care (SMMC) plans, and handle enrollment with those plans for new providers.' },
      { question: 'Do you only work with practices in Tampa Bay?', answer: 'No. Our team works remotely in your EHR, so we serve practices anywhere in Florida, including Orlando, Jacksonville, Miami and Fort Lauderdale.' },
      { question: 'Can you credential new providers in Florida?', answer: 'Yes. We handle CAQH profiles, Medicare enrollment through PECOS, Florida Medicaid enrollment and commercial payer credentialing for new providers and locations.' },
    ],
    related: [
      { label: 'Outsourced medical billing services', path: '/medical-billing-services' },
      { label: 'Medical credentialing services', path: '/medical-credentialing-service' },
      { label: 'Revenue cycle management services', path: '/revenue-cycle-management-services' },
      { label: 'Medical billing in Virginia', path: '/medical-billing-services-virginia' },
      { label: 'Contact our St. Petersburg office', path: '/contact' },
    ],
    references: [
      { label: 'Florida Statutes §627.6131: Payment of claims', url: 'https://www.flsenate.gov/Laws/Statutes/2024/627.6131' },
      { label: 'First Coast Service Options: Medicare Jurisdiction N', url: 'https://medicare.fcso.com/' },
      { label: 'Florida Agency for Health Care Administration (AHCA), which runs Florida Medicaid', url: 'https://ahca.myflorida.com/' },
    ],
    ctaTitle: 'Talk to a Florida medical billing specialist',
    ctaText: 'Get a free assessment of your claims, denials and A/R from our St. Petersburg team.',
  },

  // ------------------------------------------------------------ Virginia
  {
    path: '/medical-billing-services-virginia',
    kind: 'location',
    label: 'Medical Billing Services in Virginia',
    serviceType: 'Medical billing',
    areaServed: 'Virginia',
    metaTitle: 'Virginia Medical Billing Company | Fredericksburg Area',
    metaDescription:
      'Virginia medical billing company in Spotsylvania. Billing, coding, credentialing and RCM for practices in Fredericksburg, Richmond and Northern Virginia.',
    eyebrow: 'Virginia medical billing',
    h1: 'Medical Billing Services in Virginia',
    answer:
      'Alpha Medi Assist is a medical billing company based in Spotsylvania, Virginia. We provide billing, coding, credentialing and revenue cycle management for practices in Fredericksburg, Richmond, Northern Virginia and across the state, with billers experienced in Virginia Medicare, Medicaid (Cardinal Care) and commercial payers.',
    heroBullets: [
      'Office in Spotsylvania, serving Fredericksburg and all of Virginia',
      'Experience with Virginia Medicare, Cardinal Care Medicaid plans and commercial payers',
      'Credentialing and enrollment for new Virginia providers',
      'HIPAA-compliant team that works in your existing EHR',
    ],
    stats: coreStats,
    sections: [
      {
        heading: 'Virginia payer landscape',
        paragraphs: [
          'Medicare Part B claims for Virginia are processed by Palmetto GBA as the Medicare Administrative Contractor for Jurisdiction M. Virginia Medicaid operates as Cardinal Care, administered by the Department of Medical Assistance Services (DMAS), with most members enrolled in managed care plans. Commercial volume is concentrated among a handful of large regional and national carriers.',
          'Each of these payers has its own enrollment process, prior-authorization rules and timely-filing limits. Our Virginia team tracks them per payer so claims go out clean and follow-up happens before deadlines.',
        ],
      },
      {
        heading: 'Areas we serve in Virginia',
        paragraphs: [
          'From Spotsylvania we support practices in Fredericksburg, Stafford, Spotsylvania, Culpeper and Caroline County, as well as Richmond, Northern Virginia (Fairfax, Arlington, Alexandria, Loudoun), Charlottesville, Hampton Roads and practices statewide.',
        ],
      },
      {
        heading: 'Virginia medical billing services',
        bullets: [
          'Full-service medical billing and A/R follow-up',
          'Medical coding review (ICD-10-CM, CPT, HCPCS)',
          'Medicare and Cardinal Care Medicaid billing',
          'Denial management and appeals',
          'Provider credentialing and payer enrollment',
          'Virtual medical assistants and receptionists',
        ],
      },
    ],
    faqs: [
      { question: 'Where is your Virginia office?', answer: 'Alpha Medi Assist is located at 7313 Cloverhill Road, Spotsylvania, VA 22551, near Fredericksburg, and serves practices throughout Virginia.' },
      { question: 'Who processes Medicare claims in Virginia?', answer: 'Medicare Part B claims for Virginia are processed by Palmetto GBA, the Medicare Administrative Contractor for Jurisdiction M.' },
      { question: 'Do you bill Virginia Medicaid?', answer: 'Yes. We bill Virginia Medicaid (Cardinal Care) and its managed care plans and handle provider enrollment with DMAS and the plans.' },
      { question: 'Do you serve practices outside Fredericksburg?', answer: 'Yes. We work remotely inside your EHR and serve practices in Richmond, Northern Virginia, Charlottesville, Hampton Roads and across Virginia.' },
    ],
    related: [
      { label: 'Outsourced medical billing services', path: '/medical-billing-services' },
      { label: 'Medical credentialing services', path: '/medical-credentialing-service' },
      { label: 'Medical billing for small practices', path: '/medical-billing-for-small-practices' },
      { label: 'Medical billing in Florida', path: '/medical-billing-services-florida' },
      { label: 'Contact our Virginia office', path: '/contact' },
    ],
    references: [
      { label: 'Palmetto GBA: Medicare Jurisdiction M Part B', url: 'https://www.palmettogba.com/jmb' },
      { label: 'Virginia DMAS: Cardinal Care', url: 'https://www.dmas.virginia.gov/' },
    ],
    ctaTitle: 'Talk to a Virginia medical billing specialist',
    ctaText: 'Get a free assessment of your claims, denials and A/R from our Spotsylvania team.',
  },
]
