// Articles published 2026-11-20: buying-decision content (in-house vs. outsourced
// billing) and an evergreen code-update calendar. No invented figures: the only
// pricing range used (4% to 10% of collections) already appears elsewhere on the
// site, and the worked cost example is explicitly hypothetical.
import type { BlogPost } from './blogPosts'

const AMA_CPT = { label: 'AMA: CPT (Current Procedural Terminology)', url: 'https://www.ama-assn.org/practice-management/cpt' }
const CMS_ICD10 = { label: 'CMS: ICD-10 code sets', url: 'https://www.cms.gov/medicare/coding-billing/icd-10-codes' }
const CMS_NCCI = { label: 'CMS: National Correct Coding Initiative (NCCI) edits', url: 'https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci-edits' }
const X12_CARC = { label: 'X12: Claim Adjustment Reason Codes (CARC)', url: 'https://x12.org/codes/claim-adjustment-reason-codes' }

export const planPosts: BlogPost[] = [
  {
    slug: 'in-house-vs-outsourced-medical-billing',
    category: 'Pricing & outsourcing',
    datePublished: '2026-11-20',
    title: 'In-House vs. Outsourced Medical Billing: Costs, Risks and How to Decide',
    seoTitle: 'In-House vs. Outsourced Medical Billing: How to Decide',
    seoDescription:
      'Compare in-house and outsourced medical billing: the full cost of an in-house team, outsourced pricing models, risks, a hybrid option and a formula to calculate your own cost.',
    excerpt:
      'What in-house billing really costs, how outsourced pricing works, a side-by-side comparison and a simple formula to calculate your own cost to collect.',
    intro: [
      'Short answer: outsourcing usually makes sense when your in-house billing costs more per dollar collected than a billing company would charge, or when denials and aging A/R are growing faster than your team can work them. In-house billing makes sense when you already have an experienced, stable team, strong reporting and enough volume to keep them fully used.',
      'The mistake most practices make is comparing a billing company\'s fee with one biller\'s salary. That leaves out most of what in-house billing actually costs. This guide lists every cost category, explains outsourced pricing models, and gives you a formula to calculate your own number with your own data.',
    ],
    sections: [
      {
        heading: 'What in-house medical billing really costs',
        paragraphs: [
          'An in-house billing department is a small business unit inside your practice. To compare it fairly with outsourcing, add up every cost it creates over a full year, not only the line on the payroll report:',
        ],
        bullets: [
          'Salaries: every billing, coding, payment posting, A/R follow-up and front-desk role that spends time on billing work. Count partial roles too, such as a manager who spends part of the week on billing.',
          'Benefits: health insurance, retirement contributions, paid time off and any other benefits.',
          'Payroll taxes: the employer share of payroll taxes and unemployment insurance.',
          'Training and continuing education: coding credential renewals, annual code-update training, payer policy webinars and the time staff spend away from claims while training.',
          'Software and clearinghouse fees: practice management or billing software, clearinghouse transaction fees, eligibility tools, claim scrubbers, coding references and patient statement printing or postage.',
          'Turnover and coverage gaps: recruiting and onboarding a replacement, the learning curve of a new biller, and the claims that sit unworked during vacations, sick leave or vacancies.',
          'Management time: the hours an office manager, physician or owner spends supervising billing, answering billing questions and reviewing reports.',
          'Space and equipment: workstations, phones and office space, if they would otherwise be used for something else.',
        ],
      },
      {
        heading: 'The hidden cost: revenue that never gets collected',
        paragraphs: [
          'Direct costs are only half of the picture. The larger cost is often the revenue an overloaded team cannot reach: denials that are never appealed, underpayments that are never noticed, and claims that age past a payer\'s timely-filing limit. That money does not show up as an expense; it simply never arrives.',
          'When you compare options, look at both sides: what billing costs you, and how much of what you are owed you actually collect. Your net collection rate, denial rate and days in A/R tell you how well the current setup performs.',
        ],
      },
      {
        heading: 'How outsourced medical billing is priced',
        paragraphs: [
          'Billing companies use three main pricing models, and some combine them:',
        ],
        bullets: [
          'Percentage of collections: the company earns a share of what it actually collects, commonly 4% to 10% of net collections depending on specialty, volume, payer mix and scope. The company is paid more only when you are.',
          'Per-claim fee: a fixed price for each claim submitted. Predictable, but the fee is earned whether or not the claim is paid, so follow-up incentives are weaker.',
          'Flat monthly fee: a set retainer for a defined scope. More common for small, stable practices or for single services.',
        ],
      },
      {
        heading: 'In-house vs. outsourced billing at a glance',
        bullets: [
          'Cost structure: in-house is mostly fixed (salaries, software, overhead whether claims go out or not); outsourced is mostly variable (usually a percentage of collections).',
          'Staffing risk: in-house depends on a few people and stalls when one leaves or is out; an outsourced team spreads the work across several staff.',
          'Expertise: in-house staff learn your practice deeply but may see only a few payers and code sets; a billing company sees denial patterns across many practices and payers.',
          'Control and visibility: in-house gives direct, day-to-day control; outsourced control depends on the reporting and system access written into the contract.',
          'Technology: in-house means you buy and maintain software and clearinghouse connections; many billing companies work in your system or supply their own tools.',
          'Scaling: adding providers or locations in-house means hiring; an outsourced team usually scales without new hires on your side.',
          'Compliance: either way the practice remains responsible for its claims; an outsourced partner must sign a HIPAA Business Associate Agreement.',
        ],
      },
      {
        heading: 'How to calculate your own in-house cost per dollar collected',
        paragraphs: [
          'You can compare options with a single number: what it costs you to collect one dollar. Use your own figures for the last 12 months.',
          'Step 1, total annual billing cost (C): add salaries (S), benefits (B), payroll taxes (T), training and education (E), software and clearinghouse fees (F), and an estimate of management time (M), valued at the hourly cost of the person doing it. C = S + B + T + E + F + M.',
          'Step 2, annual net collections (N): the money actually received from payers and patients for the year, from your practice management reports.',
          'Step 3, cost to collect: divide C by N. The result is the share of every collected dollar you spend on billing. Multiply by 100 to express it as a percentage.',
          'Illustrative example only (hypothetical numbers, not benchmarks): if C were $90,000 and N were $1,200,000, your in-house cost to collect would be 90,000 / 1,200,000 = 0.075, or 7.5% of collections. Replace both numbers with your own.',
          'Step 4, compare like with like: a billing company quote of X% of net collections can be compared directly with your cost to collect. Then adjust for collection performance. If a partner would raise net collections (for example by working denials your team does not reach), its fee applies to a larger number, but you also keep more revenue.',
          'Be honest with the inputs. Leaving out management time, turnover or uncollected denials makes in-house billing look cheaper than it is.',
        ],
      },
      {
        heading: 'The hybrid model: outsource only denials or A/R',
        paragraphs: [
          'Outsourcing does not have to be all or nothing. Many practices keep charge entry and front-desk work in-house and hand off the parts that need the most specialized, persistent effort:',
        ],
        bullets: [
          'Denial management and appeals, where payer-specific knowledge matters most.',
          'Aging A/R follow-up, especially claims over 60 or 90 days old.',
          'Old A/R cleanup after a system change or staff departure.',
          'Coding review or credentialing, priced as separate services.',
        ],
      },
      {
        heading: 'Questions to ask a medical billing company',
        bullets: [
          'Will you sign a HIPAA Business Associate Agreement before you access any patient data?',
          'Is your percentage applied to net collections or gross charges, and what exactly is included in the fee?',
          'Which reports will we receive (denial rate, days in A/R, net collection rate, aging by payer), and how often?',
          'Do you work in our practice management system or yours? Who owns the data, and in what format do we get it back?',
          'What are the contract length, notice period and exit terms? Who works the claims still open when the contract ends?',
          'Are there setup fees, monthly minimums or separate charges for old A/R, patient statements or credentialing?',
          'Who is our point of contact, and how quickly do you respond to questions?',
        ],
      },
      {
        heading: 'When in-house billing makes sense',
        bullets: [
          'You have experienced billing staff with low turnover and documented processes.',
          'Your claim volume is large enough to keep a full team busy, with cross-training to cover absences.',
          'Your cost to collect, net collection rate and days in A/R are already strong, and you track them monthly.',
          'You want billing staff working side by side with clinicians on documentation every day.',
        ],
        paragraphs: [
          'If most of these are true, improving your current team, or adding a hybrid arrangement for denials, may be the better path. If few of them are true, outsourcing is worth pricing out.',
        ],
      },
    ],
    faqs: [
      { question: 'Is it cheaper to outsource medical billing or do it in-house?', answer: 'It depends on your numbers. Add up all in-house costs (salaries, benefits, payroll taxes, training, software, clearinghouse fees and management time), divide by annual net collections, and compare the result with outsourced quotes, which commonly fall between 4% and 10% of net collections.' },
      { question: 'What are the risks of outsourcing medical billing?', answer: 'The main risks are less day-to-day visibility, poor reporting, unclear data ownership and hard-to-exit contracts. A signed Business Associate Agreement, defined monthly reports, system access and clear exit terms reduce those risks.' },
      { question: 'What are the risks of in-house medical billing?', answer: 'Dependence on a few people, coverage gaps during absences or turnover, the cost of keeping up with coding and payer changes, and denials or aging claims that an overloaded team never reaches.' },
      { question: 'Can I outsource only part of my medical billing?', answer: 'Yes. A hybrid model is common: the practice keeps registration and charge entry in-house and outsources denial management, A/R follow-up, coding review or credentialing.' },
      { question: 'How do I calculate my cost to collect?', answer: 'Divide your total annual billing cost (salaries, benefits, payroll taxes, training, software, clearinghouse fees and management time) by your annual net collections. Multiply by 100 to express it as a percentage of collections.' },
      { question: 'Does the practice still own its data if billing is outsourced?', answer: 'It should. Confirm in the contract that the practice owns all patient and financial data and that the billing company will return it in a usable format when the contract ends.' },
    ],
    closing: [
      'The right choice is the one with the lowest true cost to collect and the highest net collections, not the lowest fee or the smallest payroll. Run the formula with your own numbers before you decide.',
      'Alpha Medi Assist offers a free billing assessment: we review your denials and aging A/R and give you a clear, fixed quote so you can compare it with your in-house cost.',
    ],
    related: [
      { label: 'How much does medical billing cost?', path: '/blog/how-much-does-medical-billing-cost' },
      { label: 'Outsourced medical billing services', path: '/medical-billing-services' },
      { label: 'Denial management services', path: '/denial-management-services' },
      { label: 'Revenue cycle management services', path: '/revenue-cycle-management-services' },
      { label: 'Medical billing for small practices', path: '/medical-billing-for-small-practices' },
      { label: 'Get a free billing assessment', path: '/free-consultation' },
    ],
    references: [
      { label: 'HHS: HIPAA Business Associate contracts', url: 'https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html' },
    ],
  },
  {
    slug: 'annual-cpt-code-updates-how-practices-should-prepare',
    category: 'Coding',
    datePublished: '2026-11-20',
    title: 'Annual Medical Code Updates: How Practices Should Prepare for CPT, ICD-10 and HCPCS Changes',
    seoTitle: 'Annual CPT, ICD-10 & HCPCS Updates: How to Prepare',
    seoDescription:
      'When CPT, ICD-10 and HCPCS codes change each year, how to update your charge master, EHR and scrubber, and how to avoid denials for deleted or invalid codes.',
    excerpt:
      'CPT changes January 1, ICD-10 on October 1, HCPCS every quarter. A calendar of code-set updates and a checklist to avoid denials after each one.',
    intro: [
      'Short answer: medical code sets change on a predictable calendar. CPT codes change every January 1, ICD-10-CM and ICD-10-PCS codes change every October 1 (with occasional April 1 updates), and HCPCS Level II codes and NCCI edits are updated every quarter. Practices that update their systems before each effective date avoid a wave of denials for deleted or invalid codes.',
      'This guide explains each update cycle, gives you a calendar to plan around, and lists the steps to take before and after every change.',
    ],
    sections: [
      {
        heading: 'Who updates each code set, and when',
        bullets: [
          'CPT (Category I): maintained by the American Medical Association. The new code set is released in the fall and takes effect January 1. Codes are added, revised and deleted every year.',
          'CPT Category III: temporary codes for emerging technology and services. The AMA releases them twice a year, with effective dates of January 1 and July 1.',
          'ICD-10-CM (diagnoses) and ICD-10-PCS (inpatient procedures): updated for the federal fiscal year, effective October 1. CMS and CDC may also publish an April 1 update.',
          'HCPCS Level II: national codes for supplies, drugs, DME and some services, maintained by CMS and updated quarterly (January, April, July and October).',
          'NCCI edits: the procedure-to-procedure and medically unlikely edit tables CMS uses to stop improper code pairs and units. Updated quarterly.',
          'Medicare Physician Fee Schedule: CMS publishes the final rule around November, and the new payment rates and policies take effect January 1.',
        ],
      },
      {
        heading: 'Why code updates cause revenue problems',
        paragraphs: [
          'Each update touches several systems at once: the EHR where providers pick codes, the practice management system that holds the charge master and fee schedule, the claim scrubber, the clearinghouse and every payer\'s claim system. If any one of them is behind, claims fail. A deleted code left on a superbill, a new code with no price in the fee schedule, or a scrubber that does not know the new NCCI edits can each affect every claim for that service until someone notices.',
          'The impact is easy to miss at first. Rejections at the clearinghouse may sit in a work queue, and payer denials arrive weeks later. By the time a pattern is visible on an aging report, a month of claims for a common service may need to be corrected and resubmitted, and timely-filing limits keep running in the meantime.',
          'Updates also change more than code numbers. Descriptors are revised, documentation requirements shift, codes are bundled or unbundled, and payers adjust their coverage policies, prior authorization lists and fee schedules around the new codes. A code can stay the same number and still be documented or paid differently.',
        ],
      },
      {
        heading: 'Code update calendar',
        paragraphs: [
          'Use this as a recurring yearly plan. Exact release dates shift slightly from year to year, so confirm each one on the official source.',
        ],
        bullets: [
          'January 1: new CPT code set takes effect; Category III codes released the previous July take effect; HCPCS Level II and NCCI quarterly updates; new Medicare Physician Fee Schedule rates.',
          'April 1: HCPCS Level II and NCCI quarterly updates; possible ICD-10-CM/PCS update.',
          'July 1: Category III codes released in January take effect; HCPCS Level II and NCCI quarterly updates.',
          'Fall (around September): AMA releases the next year\'s CPT code set. Start reviewing changes for your specialty.',
          'October 1: new ICD-10-CM and ICD-10-PCS codes take effect; HCPCS Level II and NCCI quarterly updates.',
          'Around November: Medicare Physician Fee Schedule final rule published for the next calendar year.',
        ],
      },
      {
        heading: 'The rule that prevents most errors: code by date of service',
        paragraphs: [
          'The code set that applies to a claim is the one in effect on the date of service, not the date the claim is created or submitted. A visit on December 30 is coded with that year\'s CPT codes even if the claim goes out in January. A visit on January 2 must use the new codes.',
          'This matters most for services that span the change: claims billed in January for December visits, late charges, corrected claims and resubmissions. If your system automatically swaps in new codes, or a staff member updates a deleted code to its replacement, a December claim can end up with a code that did not exist yet on the date of service. The same logic applies on October 1 for ICD-10.',
        ],
      },
      {
        heading: 'Checklist: how to prepare for each update',
        bullets: [
          'Review the changes for your specialty as soon as they are released: new, revised and deleted codes, and changed descriptors.',
          'Update the charge master and fee schedule: add new codes with prices, end-date deleted codes (do not erase them; old dates of service still need them).',
          'Update superbills, order forms and EHR pick lists, favorites and templates so providers cannot select deleted codes.',
          'Confirm your practice management system, clearinghouse and claim scrubber have loaded the new code set and the latest NCCI edits before the effective date.',
          'Load new payer fee schedules, including the Medicare Physician Fee Schedule, and check commercial contracts that are tied to it.',
          'Train providers and coders on changes that affect documentation, especially revised descriptors and new time or component requirements.',
          'Check payer policies: commercial payers and Medicaid plans can lag in loading new codes or change prior authorization lists for them.',
          'Clear old claims first: submit claims for dates of service before the change quickly, so they are not caught up with the new rules.',
          'Monitor the first weeks of remittances closely and fix any pattern before it repeats across hundreds of claims.',
        ],
      },
      {
        heading: 'Assign an owner to every update',
        paragraphs: [
          'Code updates go wrong most often when everyone assumes someone else handled them. Give each step a named owner and a due date before the effective date:',
        ],
        bullets: [
          'Coding lead or certified coder: reviews the changes for your specialty and lists every new, revised and deleted code the practice uses.',
          'Billing manager: updates the charge master, fee schedule and scrubber rules, and confirms the clearinghouse is ready.',
          'EHR administrator or vendor: updates pick lists, order sets, templates and favorites.',
          'Practice administrator: schedules provider training and confirms payer contract and fee schedule changes.',
          'A/R and denial team: watches remittances after the effective date and reports any new denial pattern the same week.',
        ],
      },
      {
        heading: 'Common denials after a code update',
        paragraphs: [
          'Most post-update denials come from a code that was valid last month and is not today, or a new code a payer has not loaded yet. Watch for these claim adjustment reason codes:',
        ],
        bullets: [
          'CO-16 (claim lacks information or has submission/billing errors): often paired with a remark code pointing to a missing or invalid procedure or diagnosis code.',
          'CO-4 (procedure code inconsistent with the modifier used): modifier rules can change when codes are revised or new codes are created.',
          'CO-11 (diagnosis inconsistent with the procedure): new or deleted ICD-10 codes can break payer coverage policies that link diagnoses to procedures.',
          'Invalid or deleted code rejections at the clearinghouse: the claim never reaches the payer and must be corrected and resubmitted.',
        ],
      },
      {
        heading: 'What to do when claims deny after an update',
        bullets: [
          'Read the remark codes on the remittance to identify the exact code the payer rejected.',
          'Check whether the code was valid on the date of service. If it was, appeal or ask the payer to reprocess; if not, correct the code.',
          'If a valid new code was rejected, confirm whether the payer has loaded it yet, and ask for its effective date for that payer.',
          'Fix the source (pick list, charge master or scrubber rule), not only the individual claim, so the error stops repeating.',
          'Send corrected claims within the payer\'s timely-filing limit, and track them until they are paid.',
        ],
      },
      {
        heading: 'What to monitor in the weeks after an update',
        paragraphs: [
          'For the first few weeks after January 1 and October 1, review clearinghouse rejections daily and payer remittances at least weekly. Compare the denial rate for the codes that changed with the period before the update, and check that new codes are being paid at the rates in your fee schedule. Underpayments are as common as denials when a payer loads a new code at the wrong rate.',
          'Keep a short log of each update: what changed, what the practice did, which payers were slow to adopt new codes and which denials appeared. That log makes the next update faster, because the same payers and the same system gaps tend to cause trouble every year.',
        ],
      },
    ],
    faqs: [
      { question: 'When do new CPT codes take effect?', answer: 'New CPT Category I codes take effect January 1 each year. The AMA releases the code set in the fall so practices can prepare. Category III codes are released twice a year and take effect January 1 or July 1.' },
      { question: 'When do ICD-10 codes change?', answer: 'ICD-10-CM and ICD-10-PCS codes are updated for the federal fiscal year, effective October 1. An additional update may take effect April 1.' },
      { question: 'How often are HCPCS codes updated?', answer: 'HCPCS Level II codes are updated quarterly by CMS, with changes effective January 1, April 1, July 1 and October 1. NCCI edits are also updated quarterly.' },
      { question: 'Which code should I use for a December visit billed in January?', answer: 'Use the code set in effect on the date of service. A December visit is coded with the codes valid in December, even if the claim is submitted after January 1.' },
      { question: 'What happens if I bill a deleted code?', answer: 'The claim is usually rejected by the clearinghouse or denied by the payer, often with CO-16 and a remark code for an invalid procedure or diagnosis code. Correct the code based on the date of service and resubmit.' },
    ],
    closing: [
      'Code updates are predictable, so the denials they cause are preventable. Put the calendar on your schedule, update systems before each effective date, and watch the first remittances closely.',
      'Alpha Medi Assist keeps charge masters, scrubber edits and coding current for our clients and works any denials that slip through after each update.',
    ],
    related: [
      { label: 'Medical coding services', path: '/medical-coding-services' },
      { label: 'Denial codes: meanings and fixes', path: '/denial-codes' },
      { label: 'CO-16: claim lacks information', path: '/denial-codes/co-16' },
      { label: 'CO-4: procedure code inconsistent with modifier', path: '/denial-codes/co-4' },
      { label: 'CO-11: diagnosis inconsistent with procedure', path: '/denial-codes/co-11' },
      { label: 'Denial management services', path: '/denial-management-services' },
    ],
    references: [AMA_CPT, CMS_ICD10, CMS_NCCI, X12_CARC],
  },
]
