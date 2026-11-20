// One page per claim adjustment reason code (CARC), rendered by
// src/pages/DenialCodePage.tsx at /denial-codes/<slug> and listed on the
// /denial-codes hub. Official descriptions follow the X12 CARC/RARC lists;
// re-check them when X12 publishes its periodic code-list updates.
//
// Editorial rule: explain codes and fixes only. No statistics, client results
// or payer-specific promises.

export interface DenialCode {
  slug: string
  /** Display code, e.g. "CO-16" */
  code: string
  carc: string
  group: 'CO' | 'PR' | 'OA' | 'PI'
  /** Short name used in cards and the hub table */
  name: string
  /** X12 description (paraphrase kept close to the official wording) */
  official: string
  /** One-sentence definition shown first (quotable by search and AI answers) */
  definition: string
  seoTitle: string
  seoDescription: string
  glance: { label: string; value: string }[]
  intro: string[]
  causes: { title: string; text: string }[]
  /** Common remark codes seen with this CARC */
  remarks?: { code: string; meaning: string }[]
  fix: { title: string; text: string }[]
  appeal: string[]
  prevent: string[]
  faqs: { question: string; answer: string }[]
  relatedCodes: string[]
}

const X12_CARC = { label: 'X12: Claim Adjustment Reason Codes (CARC)', url: 'https://x12.org/codes/claim-adjustment-reason-codes' }
const X12_RARC = { label: 'X12: Remittance Advice Remark Codes (RARC)', url: 'https://x12.org/codes/remittance-advice-remark-codes' }
const CMS_NCCI = { label: 'CMS: National Correct Coding Initiative (NCCI) edits', url: 'https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci-edits' }
const CMS_MANUAL = { label: 'CMS: Medicare Claims Processing Manual (Pub. 100-04)', url: 'https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms-items/cms018912' }

export const denialCodeSources: Record<string, { label: string; url: string }[]> = {
  'co-16': [X12_CARC, X12_RARC, CMS_MANUAL],
  'co-97': [X12_CARC, X12_RARC, CMS_NCCI],
  'co-45': [X12_CARC, CMS_MANUAL],
  'pr-1': [X12_CARC, CMS_MANUAL],
}

export const denialCodes: DenialCode[] = [
  // ------------------------------------------------------------------ CO-16
  {
    slug: 'co-16',
    code: 'CO-16',
    carc: '16',
    group: 'CO',
    name: 'Claim lacks information or has billing errors',
    official: 'Claim/service lacks information or has submission/billing error(s). At least one Remark Code must be provided.',
    definition:
      'Denial code CO-16 means the payer could not process the claim because information is missing or invalid; the remark code (RARC) sent with it names the exact field to fix, and the usual remedy is a corrected claim, not an appeal.',
    seoTitle: 'CO-16 Denial Code: Meaning, Remark Codes & How to Fix It',
    seoDescription:
      'CO-16 means the claim lacks information or has a billing error. See what the paired remark code tells you, the most common causes, and step-by-step fixes.',
    glance: [
      { label: 'Group code', value: 'CO (Contractual Obligation)' },
      { label: 'Bill the patient?', value: 'No' },
      { label: 'Usual fix', value: 'Corrected claim' },
      { label: 'Appeal needed?', value: 'Rarely' },
    ],
    intro: [
      'CO-16 is one of the most frequent codes on any remittance because it is a catch-all: the payer is saying the claim cannot be adjudicated as submitted. On its own, CO-16 does not say what is wrong. X12 requires the payer to send at least one Remittance Advice Remark Code (RARC) with it, and that remark code is what you act on.',
      'The good news is that CO-16 denials are usually fixable in minutes once you read the remark code, and they rarely need a formal appeal. The bad news is that the same CO-16 tends to repeat until the upstream cause, usually in registration or charge entry, is fixed.',
    ],
    causes: [
      { title: 'Missing or invalid provider identifiers', text: 'Rendering, referring, ordering or supervising provider NPI missing, inactive, or not matching the payer enrollment record.' },
      { title: 'Patient or subscriber data errors', text: 'Member ID, date of birth, name spelling or relationship to subscriber that does not match the payer file.' },
      { title: 'Incomplete coding fields', text: 'Missing or invalid procedure code, diagnosis pointer, units, place of service or required modifier.' },
      { title: 'Missing secondary-claim information', text: 'Secondary claims sent without the primary payer\'s payment details (coordination of benefits data).' },
      { title: 'Missing required numbers', text: 'Prior authorization number, CLIA number for lab services, or other identifiers a service requires.' },
      { title: 'Format and submission errors', text: 'Fields populated in the wrong loop or segment of the 837, or values that fail the payer\'s front-end edits.' },
    ],
    remarks: [
      { code: 'MA130', meaning: 'Claim contains incomplete and/or invalid information and is unprocessable; submit a new claim with the complete/correct information (no appeal rights).' },
      { code: 'M51', meaning: 'Missing/incomplete/invalid procedure code(s).' },
      { code: 'N290', meaning: 'Missing/incomplete/invalid rendering provider primary identifier.' },
      { code: 'N382', meaning: 'Missing/incomplete/invalid patient identifier.' },
      { code: 'MA04', meaning: 'Secondary payment cannot be considered without the identity of or payment information from the primary payer.' },
      { code: 'MA120', meaning: 'Missing/incomplete/invalid CLIA certification number.' },
    ],
    fix: [
      { title: 'Read the remark code', text: 'Open the 835 or EOB and find the RARC on the same line. It names the missing or invalid element.' },
      { title: 'Check the source record', text: 'Compare the claim with the patient registration, payer card, provider enrollment and the encounter documentation.' },
      { title: 'Correct the field', text: 'Fix the identified field in the practice-management system so the correction also flows to future claims.' },
      { title: 'Resubmit correctly', text: 'When the payer treated the claim as unprocessable (e.g. MA130), send a new clean claim. When it was adjudicated, send a corrected or replacement claim with the right frequency code and original claim number.' },
      { title: 'Track until paid', text: 'Confirm acceptance on the clearinghouse report and follow up if the corrected claim is not paid within the payer\'s normal cycle.' },
    ],
    appeal: [
      'Appeal only if you believe the information was present and correct on the original claim. Attach the original claim image or clearinghouse acceptance report showing the data.',
      'For an unprocessable claim (MA130), there are no appeal rights; resubmit instead.',
      'Watch the timely-filing limit: a corrected claim still has to reach the payer within its filing window.',
    ],
    prevent: [
      'Verify eligibility and demographics at every visit, not only at the first one.',
      'Keep provider NPIs and payer enrollments current, especially when adding providers or locations.',
      'Use claim-scrubber edits that catch missing modifiers, units, diagnosis pointers and authorization numbers before submission.',
      'Track CO-16 by remark code each month; a repeated RARC points to one fixable workflow step.',
    ],
    faqs: [
      { question: 'What does denial code CO-16 mean?', answer: 'CO-16 means the claim lacks information or has a submission or billing error. The payer must send a remark code with it that identifies the specific missing or invalid information.' },
      { question: 'How do I fix a CO-16 denial?', answer: 'Read the remark code sent with CO-16, correct that field in your billing system, and resubmit: a new claim if the claim was unprocessable (for example remark MA130), or a corrected claim if it was adjudicated.' },
      { question: 'Can I bill the patient for a CO-16 denial?', answer: 'No. CO is the Contractual Obligation group code, so the amount is the provider\'s responsibility. Correct and resubmit the claim instead.' },
      { question: 'Should I appeal a CO-16 denial?', answer: 'Usually not. CO-16 is normally resolved with a corrected or new claim. Appeal only if the information was present and correct on the original claim and you can prove it.' },
      { question: 'What is the difference between CO-16 and a rejection?', answer: 'A rejection is stopped by clearinghouse or payer front-end edits before processing. CO-16 appears on the remittance after the payer received the claim and found information missing or invalid.' },
    ],
    relatedCodes: ['co-97', 'co-45', 'pr-1'],
  },

  // ------------------------------------------------------------------ CO-97
  {
    slug: 'co-97',
    code: 'CO-97',
    carc: '97',
    group: 'CO',
    name: 'Payment included in another service (bundled)',
    official: 'The benefit for this service is included in the payment/allowance for another service/procedure that has already been adjudicated.',
    definition:
      'Denial code CO-97 means the payer bundled the service into another procedure it already paid, usually because of an NCCI or payer bundling edit; it is fixed with a supported modifier only when the services were truly separate, otherwise the adjustment stands.',
    seoTitle: 'CO-97 Denial Code: Meaning, Bundling Rules & How to Fix It',
    seoDescription:
      'CO-97 means the service was bundled into another paid procedure. Learn why it happens (NCCI edits, global periods, E/M on procedure days) and when modifiers 25 or 59/X apply.',
    glance: [
      { label: 'Group code', value: 'CO (Contractual Obligation)' },
      { label: 'Bill the patient?', value: 'No' },
      { label: 'Usual fix', value: 'Modifier review, then corrected claim or write-off' },
      { label: 'Appeal needed?', value: 'Only when documentation supports a separate service' },
    ],
    intro: [
      'CO-97 tells you the payer considers the denied line part of another service it has already paid. Most often the cause is a National Correct Coding Initiative (NCCI) procedure-to-procedure edit, a service that falls inside a surgical global period, or an evaluation and management visit billed on the same day as a procedure without the right modifier.',
      'Some CO-97 denials are correct and should simply be adjusted off. Others happen because the claim did not show that the second service was separate and distinct. The skill is telling the two apart, and never adding a modifier that the documentation does not support.',
    ],
    causes: [
      { title: 'NCCI procedure-to-procedure edits', text: 'Two codes billed together where one is considered a component of the other, and no modifier indicator bypass was used or allowed.' },
      { title: 'Global surgical period', text: 'Follow-up visits or minor services billed during the global period of a surgery already paid.' },
      { title: 'E/M on the day of a procedure', text: 'An office visit billed with a minor procedure without modifier 25 and documentation of a significant, separately identifiable service.' },
      { title: 'Incidental services', text: 'Supplies or services the payer treats as included in the main procedure.' },
      { title: 'Payer-specific bundling policies', text: 'Commercial payers apply their own edits that can be stricter than NCCI.' },
    ],
    remarks: [
      { code: 'M15', meaning: 'Separately billed services/tests have been bundled as they are considered components of the same procedure. Separate payment is not allowed.' },
      { code: 'N19', meaning: 'Procedure code incidental to primary procedure.' },
      { code: 'N20', meaning: 'Service not payable with other service rendered on the same date.' },
    ],
    fix: [
      { title: 'Identify the bundling partner', text: 'Find which paid line the denied service was bundled into, and on which date.' },
      { title: 'Check the edit', text: 'Look up the code pair in the NCCI PTP tables (or the payer\'s policy) and note whether a modifier is allowed to bypass it.' },
      { title: 'Review documentation', text: 'Confirm whether the record shows a separate site, separate session, separate incision or a significant, separately identifiable E/M service.' },
      { title: 'Correct or adjust', text: 'If supported, send a corrected claim with the right modifier (25, 59 or XE/XS/XP/XU). If not, adjust the line off as a contractual write-off.' },
      { title: 'Feed back to coding', text: 'Share the pattern with coders and providers so the same pair is coded correctly next time.' },
    ],
    appeal: [
      'Appeal when the services were distinct and the claim already carried the correct modifier, or when the payer applied an edit that does not exist for that code pair.',
      'Attach the operative or visit notes that show the separate site, session or decision for the service, and cite the NCCI modifier indicator if relevant.',
      'Do not appeal bundles that the documentation does not support; adding modifiers without support creates compliance risk.',
    ],
    prevent: [
      'Run NCCI and payer edits in your claim scrubber before submission.',
      'Train providers on what makes an E/M visit "significant and separately identifiable" on procedure days.',
      'Track global periods so post-operative visits are not billed as separate services.',
      'Prefer the specific X modifiers (XE, XS, XP, XU) where the payer accepts them instead of the broad 59.',
    ],
    faqs: [
      { question: 'What does denial code CO-97 mean?', answer: 'CO-97 means the benefit for the service is included in the payment for another service or procedure that has already been adjudicated. In other words, the payer bundled it.' },
      { question: 'How do I fix a CO-97 denial?', answer: 'Find the procedure it was bundled into, check the NCCI or payer edit, and review the documentation. If the services were separate and a modifier is allowed, send a corrected claim with modifier 25, 59 or an X modifier; otherwise write off the line.' },
      { question: 'Can I bill the patient for CO-97?', answer: 'No. CO-97 uses the Contractual Obligation group code, so the bundled amount cannot be billed to the patient.' },
      { question: 'Does modifier 59 always fix CO-97?', answer: 'No. Modifier 59 or an X modifier only applies when the services were truly distinct (different site, session or encounter) and the edit allows a modifier. Using it without documentation support is a compliance risk.' },
      { question: 'What is the difference between CO-97 and CO-45?', answer: 'CO-97 means the whole service was bundled into another service and not paid separately. CO-45 means the service was paid, but the charge was reduced to the fee schedule or contracted amount.' },
    ],
    relatedCodes: ['co-16', 'co-45', 'pr-1'],
  },

  // ------------------------------------------------------------------ CO-45
  {
    slug: 'co-45',
    code: 'CO-45',
    carc: '45',
    group: 'CO',
    name: 'Charge exceeds fee schedule or contracted amount',
    official: 'Charge exceeds fee schedule/maximum allowable or contracted/legislated fee arrangement. Use this code with Group Codes PR or CO depending upon liability.',
    definition:
      'Code CO-45 means the payer reduced your billed charge to the allowed amount in its fee schedule or your contract; it is a contractual adjustment that is written off, not billed to the patient, and only disputed if the payer paid less than the contracted rate.',
    seoTitle: 'CO-45 Denial Code: Meaning, Write-Off Rules & When to Dispute',
    seoDescription:
      'CO-45 means the charge exceeds the fee schedule or contracted amount. Learn how to post it, when PR-45 applies instead, and how to spot underpayments worth disputing.',
    glance: [
      { label: 'Group code', value: 'CO (or PR when the patient is liable)' },
      { label: 'Bill the patient?', value: 'Not when CO; possibly when PR' },
      { label: 'Usual fix', value: 'Post as contractual write-off' },
      { label: 'Appeal needed?', value: 'Only for underpayment vs. contract' },
    ],
    intro: [
      'CO-45 is the most common adjustment on a typical remittance, and strictly speaking it is not a denial at all. Practices bill their own standard charge; the payer pays its allowed amount; the difference is reported with CARC 45. When the group code is CO, that difference is the provider\'s contractual obligation and must be written off.',
      'Where CO-45 matters is in the details: making sure it is posted as a contractual adjustment rather than left in A/R, making sure it is never billed to the patient when the group code is CO, and checking that the allowed amount actually matches your contract.',
    ],
    causes: [
      { title: 'Normal contractual reduction', text: 'Your charge master is higher than the payer\'s allowed amount, as it is with most payers.' },
      { title: 'Fee-schedule update', text: 'The payer\'s fee schedule changed (for example an annual update) and allowed amounts moved.' },
      { title: 'Multiple-procedure or payment reductions', text: 'Reductions applied to secondary procedures on the same day can appear alongside CARC 45.' },
      { title: 'Wrong fee schedule loaded', text: 'The payer applied an outdated or wrong contract rate, producing an underpayment.' },
      { title: 'Out-of-network claims', text: 'Without a contract, the excess may be reported as PR-45 (patient liability) depending on the plan and state rules.' },
    ],
    fix: [
      { title: 'Post as contractual adjustment', text: 'Post the CO-45 amount to a contractual write-off code so it does not sit in A/R or patient balances.' },
      { title: 'Compare to your contract', text: 'Load expected allowed amounts for top CPT codes by payer and compare them with what was paid.' },
      { title: 'Flag underpayments', text: 'When the allowed amount is below the contracted rate, document the difference by claim and code.' },
      { title: 'Dispute with the payer', text: 'Send underpaid claims for reprocessing or a payment dispute with the contract rate schedule as support.' },
      { title: 'Check PR-45 carefully', text: 'Bill a PR-45 amount to the patient only when the plan and applicable balance-billing rules allow it.' },
    ],
    appeal: [
      'Do not appeal a correct CO-45; it reflects the rate you agreed to.',
      'Dispute only when the payment is below the contracted or published fee schedule amount. Attach the contract page or fee schedule that shows the correct rate.',
      'Batch underpayment disputes by payer and code: one fee-schedule error usually affects many claims.',
    ],
    prevent: [
      'Load payer fee schedules into your billing system so variances are flagged automatically.',
      'Review your charge master yearly so charges sit above the highest allowed amount you receive.',
      'Report contractual adjustments separately from bad debt and denials so CO-45 does not hide real denials.',
    ],
    faqs: [
      { question: 'What does CO-45 mean on an EOB?', answer: 'CO-45 means the charge exceeds the fee schedule, maximum allowable or contracted amount. The difference between your charge and the allowed amount is a contractual adjustment.' },
      { question: 'Is CO-45 a denial?', answer: 'Not in the usual sense. The service was processed and the allowed amount applied; CO-45 explains the reduction from your billed charge to that allowed amount.' },
      { question: 'Can I bill the patient for a CO-45 adjustment?', answer: 'No, not when the group code is CO. CO means Contractual Obligation, so the amount must be written off. A PR-45 amount may be patient responsibility, depending on the plan and balance-billing rules.' },
      { question: 'When should I dispute a CO-45?', answer: 'Only when the payer paid less than your contracted or published rate. Compare the allowed amount with the contract and send the underpaid claims for reprocessing.' },
      { question: 'What is the difference between CO-45 and PR-45?', answer: 'With CO-45 the provider absorbs the reduction under its contract. With PR-45 the payer indicates the patient is liable for the amount above the allowance, which can occur for out-of-network services where balance billing is permitted.' },
    ],
    relatedCodes: ['pr-1', 'co-97', 'co-16'],
  },

  // ------------------------------------------------------------------ PR-1
  {
    slug: 'pr-1',
    code: 'PR-1',
    carc: '1',
    group: 'PR',
    name: 'Deductible amount',
    official: 'Deductible Amount.',
    definition:
      'Code PR-1 means the payer applied the allowed amount to the patient\'s deductible, so the patient owes that amount; it is not a denial, and the practice should bill the patient rather than appeal.',
    seoTitle: 'PR-1 Denial Code: Deductible Amount Explained (and How to Collect)',
    seoDescription:
      'PR-1 means the amount was applied to the patient\'s deductible. Learn what it means, how to post it, how to bill the patient and how to collect deductibles up front.',
    glance: [
      { label: 'Group code', value: 'PR (Patient Responsibility)' },
      { label: 'Bill the patient?', value: 'Yes' },
      { label: 'Usual fix', value: 'Post to patient balance and send a statement' },
      { label: 'Appeal needed?', value: 'No (unless the deductible was applied in error)' },
    ],
    intro: [
      'PR-1 is not a denial in the usual sense. The claim was processed and the allowed amount, or part of it, was applied to the patient\'s annual deductible. The PR group code tells you the amount is the patient\'s responsibility and can be billed to them.',
      'PR-1 matters for cash flow. Early in the plan year, many claims come back as PR-1, and with high-deductible plans the patient share can be most of the visit. Practices that estimate and collect deductibles at the time of service avoid a large, slow-moving patient A/R.',
    ],
    causes: [
      { title: 'Deductible not yet met', text: 'The patient has not met the annual deductible for the plan year, so the payer applies the allowed amount to it.' },
      { title: 'Start of the plan year', text: 'Deductibles reset at the start of each plan year, so PR-1 volume usually rises then.' },
      { title: 'High-deductible health plans', text: 'Plans with large deductibles shift more of each visit to the patient.' },
      { title: 'Separate deductibles', text: 'Some plans have separate in-network, out-of-network or service-specific deductibles.' },
    ],
    fix: [
      { title: 'Post to patient responsibility', text: 'Move the PR-1 amount from insurance A/R to the patient balance.' },
      { title: 'Check secondary coverage', text: 'If the patient has secondary insurance, bill it with the primary remittance before billing the patient.' },
      { title: 'Send a clear statement', text: 'Show the date of service, allowed amount and that the balance was applied to the deductible.' },
      { title: 'Offer payment options', text: 'Card on file, online payment and payment plans speed up collection of larger deductibles.' },
    ],
    appeal: [
      'Only question PR-1 if the deductible appears to be applied in error, for example a preventive service covered without cost sharing, or a deductible the patient has already met. Ask the payer to reprocess with the correct accumulator.',
    ],
    prevent: [
      'Check remaining deductible during eligibility verification before the visit.',
      'Give patients a cost estimate and collect a deposit toward the deductible at check-in when your policy allows.',
      'Explain deductibles in plain language at scheduling, especially in January.',
    ],
    faqs: [
      { question: 'What does PR-1 mean on an EOB?', answer: 'PR-1 means deductible amount: the payer applied the allowed amount to the patient\'s deductible, so the patient is responsible for paying it.' },
      { question: 'Is PR-1 a denial?', answer: 'No. The claim was processed and the payer determined the patient owes the amount because the deductible has not been met.' },
      { question: 'Can I bill the patient for PR-1?', answer: 'Yes. PR stands for Patient Responsibility. Bill any secondary insurance first, then send the patient a statement for the remaining amount.' },
      { question: 'What are PR-2 and PR-3?', answer: 'PR-2 is coinsurance and PR-3 is copayment. Like PR-1, both are patient responsibility amounts.' },
      { question: 'How can a practice reduce unpaid PR-1 balances?', answer: 'Verify remaining deductibles before the visit, give patients an estimate, and collect at the time of service with easy payment options.' },
    ],
    relatedCodes: ['co-45', 'co-16', 'co-97'],
  },
]

/** Codes summarised on the hub that do not have their own page yet. */
export const otherCodes: { code: string; meaning: string }[] = [
  { code: 'CO-4', meaning: 'Procedure code inconsistent with the modifier used, or a required modifier is missing.' },
  { code: 'CO-11', meaning: 'Diagnosis inconsistent with the procedure.' },
  { code: 'CO-18', meaning: 'Exact duplicate claim or service.' },
  { code: 'CO-22', meaning: 'Care may be covered by another payer per coordination of benefits.' },
  { code: 'CO-27', meaning: 'Expenses incurred after coverage terminated.' },
  { code: 'CO-29', meaning: 'Time limit for filing has expired.' },
  { code: 'CO-50', meaning: 'Non-covered: not deemed a medical necessity by the payer.' },
  { code: 'CO-109', meaning: 'Claim or service not covered by this payer or contractor.' },
  { code: 'CO-197', meaning: 'Precertification/authorization/notification absent.' },
  { code: 'CO-216', meaning: 'Based on the findings of a review organization.' },
  { code: 'CO-253', meaning: 'Sequestration: reduction in federal payment.' },
  { code: 'PR-2 / PR-3', meaning: 'Coinsurance amount / copayment amount (patient responsibility).' },
]

export const DENIAL_HUB_PATH = '/denial-codes'
