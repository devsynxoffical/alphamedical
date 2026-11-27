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
  'co-4': [X12_CARC, X12_RARC, CMS_NCCI],
  'co-11': [X12_CARC, X12_RARC, CMS_MANUAL],
  'co-18': [X12_CARC, X12_RARC, CMS_MANUAL],
  'co-22': [X12_CARC, X12_RARC, CMS_MANUAL],
  'co-29': [X12_CARC, CMS_MANUAL],
  'co-50': [X12_CARC, X12_RARC, CMS_MANUAL],
  'co-109': [X12_CARC, X12_RARC, CMS_MANUAL],
  'co-197': [X12_CARC, X12_RARC, CMS_MANUAL],
  'pr-2': [X12_CARC, CMS_MANUAL],
  'pr-3': [X12_CARC, CMS_MANUAL],
  'co-24': [X12_CARC, CMS_MANUAL],
  'co-59': [X12_CARC, CMS_MANUAL],
  'co-96': [X12_CARC, X12_RARC, CMS_MANUAL],
  'co-151': [X12_CARC, X12_RARC, CMS_NCCI],
  'co-119': [X12_CARC, CMS_MANUAL],
  'co-27': [X12_CARC, CMS_MANUAL],
  'co-23': [X12_CARC, CMS_MANUAL],
  'co-252': [X12_CARC, X12_RARC],
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
      'CO-97 means the service was bundled into another paid procedure. Why it happens (NCCI, global periods, E/M on procedure days) and when 25 or 59/X apply.',
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
    seoTitle: 'CO-45 Denial Code: Meaning, Write-Offs & Disputes',
    seoDescription:
      'CO-45 means the charge exceeds the fee schedule or contracted amount. How to post it, when PR-45 applies, and how to spot underpayments to dispute.',
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
    seoTitle: 'PR-1 Denial Code: Deductible Amount Explained',
    seoDescription:
      'PR-1 means the amount was applied to the patient\u2019s deductible. What it means, how to post it, how to bill the patient and how to collect up front.',
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
    relatedCodes: ['pr-2', 'pr-3', 'co-45'],
  },

  // ------------------------------------------------------------------ CO-4
  {
    slug: 'co-4',
    code: 'CO-4',
    carc: '4',
    group: 'CO',
    name: 'Modifier inconsistent with the procedure, or missing',
    official: 'The procedure code is inconsistent with the modifier used, or a required modifier is missing.',
    definition:
      'Denial code CO-4 means the payer rejected the service line because a modifier does not fit the procedure code, or a modifier the payer requires is missing; it is fixed by correcting the modifier and sending a corrected claim.',
    seoTitle: 'CO-4 Denial Code: Modifier Missing or Invalid',
    seoDescription:
      'CO-4 means the modifier does not fit the procedure code, or a required modifier is missing. Common causes (26/TC, laterality, 25, 59/X) and fixes.',
    glance: [
      { label: 'Group code', value: 'CO (Contractual Obligation)' },
      { label: 'Bill the patient?', value: 'No' },
      { label: 'Usual fix', value: 'Correct the modifier, send a corrected claim' },
      { label: 'Appeal needed?', value: 'Rarely' },
    ],
    intro: [
      'Modifiers tell the payer something the CPT or HCPCS code alone cannot: which side of the body, which component of a test, whether a service was separate from another one, or who performed it. CO-4 is the payer saying the modifier on the line does not make sense with that code, or that the code needed a modifier and did not have one.',
      'Because CO-4 is a coding-level problem, it is usually quick to fix once you know which modifier the payer expected. The remark code and the payer\'s modifier policy are the two places to look.',
    ],
    causes: [
      { title: 'Professional / technical split', text: 'Modifier 26 or TC used on a code that has no professional/technical split, or missing when the provider only read the study.' },
      { title: 'Laterality', text: 'RT, LT or 50 (bilateral) missing on a code that requires a side, or used on a code that is already bilateral.' },
      { title: 'E/M with a procedure', text: 'Modifier 25 placed on the procedure instead of the E/M, or used on a code where the payer does not accept it.' },
      { title: 'Distinct services', text: 'Modifier 59 or XE/XS/XP/XU applied to a code pair whose edit does not allow a modifier.' },
      { title: 'Payer-specific modifiers', text: 'Required payer modifiers missing, such as anesthesia, telehealth or therapy modifiers.' },
      { title: 'Order of modifiers', text: 'Payment modifiers not listed first when several modifiers apply.' },
    ],
    remarks: [
      { code: 'N519', meaning: 'Invalid combination of HCPCS modifiers.' },
      { code: 'N822', meaning: 'Missing procedure modifier(s).' },
      { code: 'N657', meaning: 'This should be billed with the appropriate code for these services.' },
    ],
    fix: [
      { title: 'Read the remark code and line', text: 'Identify the exact line and whether the modifier is invalid, missing or in the wrong combination.' },
      { title: 'Check code and payer rules', text: 'Confirm which modifiers the code allows (for example in the Medicare fee schedule indicators) and the payer\'s modifier policy.' },
      { title: 'Check the documentation', text: 'Make sure the record supports the modifier you plan to add, such as the side treated or a separate E/M service.' },
      { title: 'Send a corrected claim', text: 'Fix the modifier on the line and send a corrected or replacement claim with the original claim reference.' },
      { title: 'Update the charge template', text: 'If the same code keeps failing, fix the charge entry template or scrubber rule so it is right next time.' },
    ],
    appeal: [
      'Appeal only when the modifier on the original claim was valid for that code and payer. Include the payer policy or fee-schedule indicator that supports it.',
      'Do not add a modifier just to bypass an edit; it has to be supported by the documentation.',
    ],
    prevent: [
      'Build modifier rules (laterality, 26/TC, 25, X modifiers) into the claim scrubber by payer.',
      'Keep charge templates current when CPT codes and payer policies change each January.',
      'Give coders feedback on recurring CO-4 lines by code and payer.',
    ],
    faqs: [
      { question: 'What does denial code CO-4 mean?', answer: 'CO-4 means the procedure code is inconsistent with the modifier used, or a required modifier is missing. The service line cannot be paid until the modifier is corrected.' },
      { question: 'How do I fix a CO-4 denial?', answer: 'Find which modifier is invalid or missing from the remark code and payer policy, confirm the documentation supports the correct modifier, and send a corrected claim.' },
      { question: 'Can I bill the patient for CO-4?', answer: 'No. CO-4 uses the Contractual Obligation group code, so the provider must correct the claim instead of billing the patient.' },
      { question: 'Which modifiers cause CO-4 most often?', answer: 'Common causes are 26 and TC on codes without a professional/technical split, missing laterality (RT, LT, 50), modifier 25 placed on the wrong line, and 59 or X modifiers on code pairs where a modifier is not allowed.' },
    ],
    relatedCodes: ['co-97', 'co-11', 'co-16'],
  },

  // ------------------------------------------------------------------ CO-11
  {
    slug: 'co-11',
    code: 'CO-11',
    carc: '11',
    group: 'CO',
    name: 'Diagnosis inconsistent with the procedure',
    official: 'The diagnosis is inconsistent with the procedure.',
    definition:
      'Denial code CO-11 means the payer decided the diagnosis code on the claim does not support the procedure billed; it is fixed by linking or coding the diagnosis the documentation supports, or appealing with records when the original coding was correct.',
    seoTitle: 'CO-11 Denial Code: Diagnosis Inconsistent with Procedure',
    seoDescription:
      'CO-11 means the diagnosis does not match the procedure billed. Common causes (pointers, specificity, coverage policies) and how to correct or appeal.',
    glance: [
      { label: 'Group code', value: 'CO (Contractual Obligation)' },
      { label: 'Bill the patient?', value: 'No' },
      { label: 'Usual fix', value: 'Correct diagnosis or pointer, send a corrected claim' },
      { label: 'Appeal needed?', value: 'When the original diagnosis was supported' },
    ],
    intro: [
      'Every service line on a claim points to one or more ICD-10-CM diagnosis codes. CO-11 tells you the payer does not accept that diagnosis as a reason for that procedure, usually because of a coverage policy, a pointer error, or a code that is not specific enough.',
      'CO-11 is closely related to medical-necessity denials (CO-50). The difference is that CO-11 is about the match between the diagnosis and the procedure on the claim, which is often a coding or pointer error that can be corrected.',
    ],
    causes: [
      { title: 'Wrong diagnosis pointer', text: 'The line points to a diagnosis from the claim that is unrelated to that service.' },
      { title: 'Not specific enough', text: 'An unspecified or truncated code where the payer policy lists specific codes.' },
      { title: 'Coverage policy mismatch', text: 'For Medicare, the diagnosis is not on the covered list in the applicable LCD or NCD; commercial payers have similar lists.' },
      { title: 'Screening vs. diagnostic', text: 'A screening diagnosis (Z code) used for a diagnostic service, or the reverse.' },
      { title: 'Sex or age conflicts', text: 'A diagnosis that does not fit the patient\'s age or sex on file.' },
      { title: 'Outdated codes', text: 'A code that was deleted or expanded in the October 1 ICD-10-CM update.' },
    ],
    remarks: [
      { code: 'M76', meaning: 'Missing/incomplete/invalid diagnosis or condition.' },
      { code: 'MA63', meaning: 'Missing/incomplete/invalid principal diagnosis.' },
    ],
    fix: [
      { title: 'Check the pointer', text: 'Confirm each line points to the diagnosis that was the reason for that service.' },
      { title: 'Read the documentation', text: 'Find the most specific diagnosis the provider documented for the encounter.' },
      { title: 'Check the coverage policy', text: 'Compare the diagnosis with the payer policy or Medicare LCD/NCD covered codes for the procedure.' },
      { title: 'Correct and resubmit', text: 'If the coding or pointer was wrong, send a corrected claim with the supported diagnosis.' },
      { title: 'Appeal if supported', text: 'If the original diagnosis was correct and documented, appeal with the clinical notes and the policy language.' },
    ],
    appeal: [
      'Appeal when the diagnosis on the original claim was correct, documented and meets the payer policy. Quote the policy section and attach the notes.',
      'Never change a diagnosis to one the provider did not document just to get paid.',
    ],
    prevent: [
      'Check diagnosis-to-procedure edits and coverage policies in the claim scrubber before submission.',
      'Ask providers to document the most specific diagnosis, including laterality and episode where required.',
      'Update code sets and charge templates after each October 1 ICD-10-CM release.',
    ],
    faqs: [
      { question: 'What does denial code CO-11 mean?', answer: 'CO-11 means the diagnosis is inconsistent with the procedure. The payer does not accept the diagnosis on the claim as a reason for the service billed.' },
      { question: 'How do I fix a CO-11 denial?', answer: 'Check the diagnosis pointer and the documentation. If the claim used the wrong or a less specific diagnosis, send a corrected claim; if the original diagnosis was correct and meets policy, appeal with the records.' },
      { question: 'What is the difference between CO-11 and CO-50?', answer: 'CO-11 means the diagnosis does not match the procedure on the claim. CO-50 means the payer does not consider the service medically necessary. CO-11 is often a coding fix; CO-50 usually needs clinical documentation.' },
      { question: 'Can I bill the patient for CO-11?', answer: 'No. CO-11 uses the Contractual Obligation group code. Correct or appeal the claim instead.' },
    ],
    relatedCodes: ['co-4', 'co-16', 'co-97'],
  },

  // ------------------------------------------------------------------ CO-18
  {
    slug: 'co-18',
    code: 'CO-18',
    carc: '18',
    group: 'OA',
    name: 'Exact duplicate claim or service',
    official: 'Exact duplicate claim/service. Use only with Group Code OA except where state workers\' compensation regulations require CO.',
    definition:
      'Denial code 18 (usually shown as OA-18, sometimes CO-18) means the payer already received a claim for the same patient, provider, date and service, so it denied the copy; check whether the first claim was paid before doing anything else.',
    seoTitle: 'CO-18 / OA-18 Denial Code: Duplicate Claim (Meaning and Fix)',
    seoDescription:
      'CO-18 or OA-18 means exact duplicate claim or service. Why duplicates happen, how to check the original claim, and when to send a corrected claim.',
    glance: [
      { label: 'Group code', value: 'OA (CO for some workers\' comp)' },
      { label: 'Bill the patient?', value: 'No' },
      { label: 'Usual fix', value: 'Check the original claim; no resubmission' },
      { label: 'Appeal needed?', value: 'Only for repeat services wrongly denied' },
    ],
    intro: [
      'CARC 18 is the duplicate denial. X12 says to use it with group code OA, but many people search for it as CO-18 and some workers\' compensation payers do report it with CO. Either way the meaning is the same: the payer sees this claim or line as a copy of one it already has.',
      'Most duplicate denials need no rework at all, because the original claim is in process or already paid. The ones that matter are real repeat services (for example the same test twice in one day) that were billed without the modifiers that show they were separate.',
    ],
    causes: [
      { title: 'Resubmitted too early', text: 'A claim was sent again while the original was still processing.' },
      { title: 'Corrected claim sent as new', text: 'A correction was sent as a new original claim instead of a replacement with the right frequency code.' },
      { title: 'Repeat services without modifiers', text: 'The same procedure performed twice on the same day without modifier 76, 77 or 91 where appropriate.' },
      { title: 'Two providers, same service', text: 'Two practitioners in the same group billing the same service for the same patient and date.' },
      { title: 'Clearinghouse resend', text: 'Batches re-sent after a connection error, creating copies.' },
    ],
    remarks: [
      { code: 'M86', meaning: 'Service denied because payment already made for same/similar procedure within set time frame.' },
    ],
    fix: [
      { title: 'Find the original', text: 'Search the payer portal or 276/277 claim status for the first claim with the same date and service.' },
      { title: 'If it was paid', text: 'Close the duplicate: nothing more to do.' },
      { title: 'If it was denied', text: 'Work the original denial, not the duplicate.' },
      { title: 'If it needed a change', text: 'Send a replacement claim (frequency code 7) that references the original claim number.' },
      { title: 'If the service was repeated', text: 'Send a corrected claim with the modifier that shows the repeat (76, 77 or 91) and documentation.' },
    ],
    appeal: [
      'Appeal only when two separate services were truly performed and correctly identified, and the payer still denied the second as a duplicate. Attach records showing both services and their times.',
    ],
    prevent: [
      'Check claim status before resubmitting anything; follow payer timelines before chasing.',
      'Always send corrections as replacement claims with the original claim number.',
      'Use repeat-service modifiers when the documentation supports a second service on the same day.',
    ],
    faqs: [
      { question: 'What does denial code CO-18 or OA-18 mean?', answer: 'It means exact duplicate claim or service: the payer already has a claim for the same patient, provider, date and service.' },
      { question: 'How do I fix a duplicate claim denial?', answer: 'Check the status of the original claim. If it was paid, close the duplicate. If it needs a change, send a replacement claim that references the original claim number instead of a new claim.' },
      { question: 'Why does code 18 show OA instead of CO?', answer: 'X12 instructs payers to report CARC 18 with group code OA (Other Adjustment), except where state workers\' compensation rules require CO.' },
      { question: 'Can I bill the patient for a duplicate denial?', answer: 'No. A duplicate denial is not patient responsibility.' },
    ],
    relatedCodes: ['co-16', 'co-22', 'co-97'],
  },

  // ------------------------------------------------------------------ CO-22
  {
    slug: 'co-22',
    code: 'CO-22',
    carc: '22',
    group: 'CO',
    name: 'May be covered by another payer (coordination of benefits)',
    official: 'This care may be covered by another payer per coordination of benefits.',
    definition:
      'Denial code CO-22 means the payer believes another insurance plan is primary for this patient, so it will not pay until the primary payer has processed the claim; it is fixed by confirming coverage order and billing the correct primary payer first.',
    seoTitle: 'CO-22 Denial Code: Coordination of Benefits Explained',
    seoDescription:
      'CO-22 means another payer may be primary (coordination of benefits). How to confirm the primary plan, update COB, and rebill primary then secondary.',
    glance: [
      { label: 'Group code', value: 'CO (Contractual Obligation)' },
      { label: 'Bill the patient?', value: 'No (ask the patient to update COB)' },
      { label: 'Usual fix', value: 'Bill the primary payer, then secondary' },
      { label: 'Appeal needed?', value: 'Only if this payer is truly primary' },
    ],
    intro: [
      'When a patient has more than one health plan, coordination of benefits (COB) rules decide which plan pays first. CO-22 means the payer you billed thinks another plan should have paid first, either because its records show other coverage or because the patient has not updated COB information with the plan.',
      'CO-22 is common with Medicare patients who still work or have a spouse\'s employer plan, with children covered by both parents, and after job or plan changes. It is usually fixed on the front end: confirm coverage order, bill the primary payer, then send the secondary claim with the primary remittance.',
    ],
    causes: [
      { title: 'Other coverage on file', text: 'The payer has another active plan on record for the patient and considers it primary.' },
      { title: 'Patient COB not updated', text: 'Some plans hold claims until the member confirms whether other coverage exists.' },
      { title: 'Medicare Secondary Payer', text: 'Medicare is secondary to an employer group plan, workers\' compensation, liability or no-fault coverage in certain situations.' },
      { title: 'Dependent coverage', text: 'Children covered by both parents\' plans, where rules such as the birthday rule decide which plan is primary.' },
      { title: 'Ended coverage still listed', text: 'An old plan still shows as active in the payer\'s records.' },
    ],
    remarks: [
      { code: 'MA04', meaning: 'Secondary payment cannot be considered without the identity of or payment information from the primary payer.' },
    ],
    fix: [
      { title: 'Ask the patient', text: 'Confirm all current coverage and, for Medicare patients, complete a Medicare Secondary Payer questionnaire.' },
      { title: 'Verify with the payers', text: 'Check eligibility with both plans to confirm which one is primary and the effective dates.' },
      { title: 'Update registration', text: 'Set the correct primary and secondary order in the practice-management system.' },
      { title: 'Bill the primary payer', text: 'Submit the claim to the primary plan within its filing limit.' },
      { title: 'Bill the secondary', text: 'Send the secondary claim with the primary payer\'s payment information (remittance or COB loop data).' },
    ],
    appeal: [
      'Appeal or request reprocessing when the payer that denied is in fact primary, for example when the other coverage has ended. Attach proof such as a termination letter or eligibility response.',
      'Often the fastest fix is the patient calling their plan to update COB, followed by a request to reprocess.',
    ],
    prevent: [
      'Ask about other coverage at every visit, not only at registration.',
      'Use Medicare Secondary Payer questionnaires for Medicare patients at intake and periodically.',
      'Run eligibility checks that return other-coverage information before the visit.',
    ],
    faqs: [
      { question: 'What does denial code CO-22 mean?', answer: 'CO-22 means this care may be covered by another payer per coordination of benefits. The payer believes another plan is primary and should be billed first.' },
      { question: 'How do I fix a CO-22 denial?', answer: 'Confirm the patient\'s coverage order, update it in your system, bill the primary payer, then send the secondary claim with the primary payer\'s payment information.' },
      { question: 'Can I bill the patient for CO-22?', answer: 'Not for the denied amount itself. Ask the patient to update their coordination of benefits with the plan, and bill the correct primary payer.' },
      { question: 'What is the birthday rule?', answer: 'For children covered by both parents\' plans, many plans use the birthday rule: the plan of the parent whose birthday (month and day) falls earlier in the year is primary. Custody arrangements and plan rules can change this.' },
    ],
    relatedCodes: ['co-16', 'co-18', 'pr-1'],
  },

  // ------------------------------------------------------------------ CO-29
  {
    slug: 'co-29',
    code: 'CO-29',
    carc: '29',
    group: 'CO',
    name: 'Time limit for filing has expired',
    official: 'The time limit for filing has expired.',
    definition:
      'Denial code CO-29 means the claim reached the payer after its timely-filing deadline; it can only be overturned with proof that the claim was filed on time or that an exception applies, otherwise the amount is written off and cannot be billed to the patient.',
    seoTitle: 'CO-29 Denial Code: Timely Filing Limit Expired',
    seoDescription:
      'CO-29 means the timely filing limit has expired. Medicare and commercial limits, what counts as proof of timely filing, exceptions and prevention.',
    glance: [
      { label: 'Group code', value: 'CO (Contractual Obligation)' },
      { label: 'Bill the patient?', value: 'No' },
      { label: 'Usual fix', value: 'Appeal with proof of timely filing, or write off' },
      { label: 'Appeal needed?', value: 'Yes, if you have proof' },
    ],
    intro: [
      'Every payer sets a deadline for submitting claims. For Medicare Part B, claims must generally be filed within 12 months (one calendar year) of the date of service. Commercial and Medicaid plans set their own limits in provider manuals and contracts, and many are much shorter. CO-29 means the payer received the claim after that limit.',
      'CO-29 is one of the most expensive denials because it is usually final. Unlike most denials, there is nothing to correct on the claim itself: the only way to get paid is to prove the claim was submitted on time, or that a recognised exception applies.',
    ],
    causes: [
      { title: 'Claim never left the system', text: 'Charges held for missing information, a coding question or a provider signature and forgotten.' },
      { title: 'Rejections not worked', text: 'Clearinghouse or payer rejections were never corrected, so the claim was never accepted.' },
      { title: 'Wrong payer first', text: 'Time spent billing the wrong plan (see CO-22 and CO-109) used up the filing window at the right one.' },
      { title: 'Secondary claims late', text: 'Secondary claims not sent promptly after the primary payer paid.' },
      { title: 'Short commercial limits', text: 'A commercial contract with a much shorter limit than the team assumed.' },
      { title: 'Corrections sent too late', text: 'A corrected claim that arrived after the filing or correction window.' },
    ],
    fix: [
      { title: 'Check the dates', text: 'Confirm the date of service, the payer\'s filing limit and the dates the claim was first sent and accepted.' },
      { title: 'Find proof of timely filing', text: 'Pull the clearinghouse acceptance report (999/277CA) or payer acknowledgment showing the claim was received within the limit.' },
      { title: 'Check for exceptions', text: 'For Medicare, exceptions include an administrative error by Medicare or its contractor and retroactive Medicare or Medicaid entitlement. Commercial contracts may have their own.' },
      { title: 'Appeal or request reconsideration', text: 'Send the proof with a short letter that cites the original submission date and the payer\'s limit.' },
      { title: 'Write off if there is no proof', text: 'Without proof or an exception, post the balance as a timely-filing write-off. It cannot be billed to the patient.' },
    ],
    appeal: [
      'Appeal only with documentary proof: a clearinghouse acceptance report, payer acknowledgment or portal confirmation dated inside the filing limit.',
      'A screenshot of the claim in your own system is not usually accepted as proof that the payer received it.',
      'If the delay came from the payer (for example a retroactive eligibility change), include that evidence.',
    ],
    prevent: [
      'Keep a table of filing limits by payer and contract, and flag claims approaching them.',
      'Work clearinghouse rejections every day so claims are accepted, not just sent.',
      'Bill secondary claims as soon as the primary remittance posts.',
      'Store acceptance reports so proof is available if a payer later says the claim was late.',
    ],
    faqs: [
      { question: 'What does denial code CO-29 mean?', answer: 'CO-29 means the time limit for filing has expired: the payer received the claim after its timely-filing deadline.' },
      { question: 'What is the Medicare timely filing limit?', answer: 'Medicare claims must generally be filed within 12 months (one calendar year) after the date of service. Limited exceptions apply, such as administrative error or retroactive entitlement.' },
      { question: 'Can a CO-29 denial be appealed?', answer: 'Yes, but only with proof the claim was filed within the limit (for example a clearinghouse acceptance report) or evidence that an exception applies.' },
      { question: 'Can I bill the patient for a timely filing denial?', answer: 'No. CO-29 uses the Contractual Obligation group code, so the provider absorbs the amount.' },
    ],
    relatedCodes: ['co-22', 'co-109', 'co-16'],
  },

  // ------------------------------------------------------------------ CO-50
  {
    slug: 'co-50',
    code: 'CO-50',
    carc: '50',
    group: 'CO',
    name: 'Not deemed a medical necessity by the payer',
    official: 'These are non-covered services because this is not deemed a \'medical necessity\' by the payer.',
    definition:
      'Denial code CO-50 means the payer decided the service was not medically necessary for the diagnosis and documentation it received; it is resolved by correcting the diagnosis if it was coded wrongly, or by appealing with clinical records that meet the payer\'s coverage policy.',
    seoTitle: 'CO-50 Denial Code: Medical Necessity Denial (How to Appeal)',
    seoDescription:
      'CO-50 means the service was not deemed medically necessary. How LCDs, NCDs and payer policies apply, when an ABN shifts liability, and how to appeal.',
    glance: [
      { label: 'Group code', value: 'CO (PR when a valid ABN was signed)' },
      { label: 'Bill the patient?', value: 'Only with a valid ABN or waiver' },
      { label: 'Usual fix', value: 'Appeal with clinical documentation' },
      { label: 'Appeal needed?', value: 'Often' },
    ],
    intro: [
      'CO-50 is a medical-necessity denial. The payer is saying the documentation and diagnosis on the claim do not show that the service was reasonable and necessary under its coverage rules. For Medicare, those rules are mostly in National Coverage Determinations (NCDs) and the local coverage determinations (LCDs) published by each Medicare Administrative Contractor. Commercial payers publish their own medical policies.',
      'Some CO-50 denials are coding problems: the right diagnosis was documented but not coded, or a less specific code was used. Others are documentation problems, where the note does not show the criteria in the policy. The fix depends on which one you have.',
    ],
    causes: [
      { title: 'Diagnosis not on the covered list', text: 'The ICD-10-CM code billed is not one the LCD, NCD or payer policy accepts for the service.' },
      { title: 'Criteria not documented', text: 'The policy requires specific findings, prior treatments or test results that the note does not show.' },
      { title: 'Frequency limits', text: 'The service was repeated sooner than the policy allows.' },
      { title: 'Screening billed as diagnostic', text: 'A screening service without symptoms billed under a diagnostic code, or the reverse.' },
      { title: 'Experimental or investigational', text: 'The payer considers the service not proven for the condition.' },
    ],
    remarks: [
      { code: 'N115', meaning: 'This decision was based on a Local Coverage Determination (LCD).' },
      { code: 'N386', meaning: 'This decision was based on a National Coverage Determination (NCD).' },
    ],
    fix: [
      { title: 'Find the policy', text: 'Identify the LCD, NCD or payer medical policy for the service, using the remark code where available.' },
      { title: 'Compare the record', text: 'Check whether the documentation shows the criteria the policy requires.' },
      { title: 'Correct coding errors', text: 'If a supported, more specific or covered diagnosis was documented but not coded, send a corrected claim.' },
      { title: 'Appeal with records', text: 'If the service met the policy, appeal with the clinical notes, test results and a letter that maps them to the policy criteria.' },
      { title: 'Check liability', text: 'For Medicare, if the patient signed a valid ABN before the service (modifier GA), the amount may be billed to the patient.' },
    ],
    appeal: [
      'Write the appeal around the policy: quote the coverage criteria and point to the page in the record that meets each one.',
      'A letter of medical necessity from the treating provider strengthens the appeal.',
      'For Medicare Part B, the first level is a redetermination by the MAC, generally requested within 120 days of the initial determination.',
    ],
    prevent: [
      'Check LCD/NCD and payer policy criteria before scheduling services that are often denied.',
      'Use an Advance Beneficiary Notice (ABN) for Medicare patients when you expect a service may not be covered, and append the right modifier (GA, GZ, GX).',
      'Give providers documentation templates that capture policy criteria.',
    ],
    faqs: [
      { question: 'What does denial code CO-50 mean?', answer: 'CO-50 means the service is non-covered because the payer does not consider it medically necessary based on the diagnosis and documentation submitted.' },
      { question: 'How do I appeal a CO-50 denial?', answer: 'Find the coverage policy (LCD, NCD or payer policy), confirm the record meets its criteria, and appeal with the clinical notes and a letter that maps the documentation to each criterion.' },
      { question: 'What is the difference between CO-50 and PR-50?', answer: 'With CO-50 the provider is liable. PR-50 appears when the patient is liable, for example when a Medicare patient signed a valid Advance Beneficiary Notice before the service.' },
      { question: 'Can I bill the patient for CO-50?', answer: 'Not for a CO-50 denial. You can bill the patient only when liability has shifted to them, such as with a valid ABN for Medicare (reported as PR-50).' },
    ],
    relatedCodes: ['co-11', 'co-197', 'co-16'],
  },

  // ------------------------------------------------------------------ CO-109
  {
    slug: 'co-109',
    code: 'CO-109',
    carc: '109',
    group: 'CO',
    name: 'Claim not covered by this payer or contractor',
    official: 'Claim/service not covered by this payer/contractor. You must send the claim/service to the correct payer/contractor.',
    definition:
      'Denial code CO-109 means the claim was sent to the wrong payer or the wrong Medicare contractor; there is nothing to appeal, so the fix is to identify the correct payer or jurisdiction and submit the claim there before its filing limit runs out.',
    seoTitle: 'CO-109 Denial Code: Claim Sent to the Wrong Payer',
    seoDescription:
      'CO-109 means the claim must go to a different payer or contractor. Common causes: Medicare Advantage, DME MAC, Medicaid managed care. How to fix it.',
    glance: [
      { label: 'Group code', value: 'CO (Contractual Obligation)' },
      { label: 'Bill the patient?', value: 'No' },
      { label: 'Usual fix', value: 'Rebill the correct payer or contractor' },
      { label: 'Appeal needed?', value: 'No' },
    ],
    intro: [
      'CO-109 is a routing denial. The payer that received the claim is telling you it is not responsible for this patient or this type of service, and that the claim belongs with another payer or contractor.',
      'It often happens when a patient\'s coverage has changed, for example from Original Medicare to a Medicare Advantage plan, or from Medicaid fee-for-service to a Medicaid managed care plan. It also happens within Medicare when a claim goes to the wrong contractor, such as DME billed to the Part B MAC instead of the DME MAC.',
    ],
    causes: [
      { title: 'Medicare Advantage enrollment', text: 'The patient is enrolled in a Medicare Advantage plan, so Original Medicare does not pay; the plan does.' },
      { title: 'Medicaid managed care', text: 'The patient moved to a Medicaid managed care plan and the claim went to state fee-for-service Medicaid.' },
      { title: 'Wrong Medicare contractor', text: 'DMEPOS items billed to the Part B MAC instead of the DME MAC, or a claim sent to the wrong jurisdiction.' },
      { title: 'Carved-out benefits', text: 'Behavioral health, vision, lab or pharmacy benefits managed by a separate vendor.' },
      { title: 'Outdated registration', text: 'The insurance on file was not updated when the patient changed plans.' },
    ],
    remarks: [
      { code: 'N418', meaning: 'Misrouted claim. See the payer\'s claim submission instructions.' },
    ],
    fix: [
      { title: 'Verify current coverage', text: 'Run an eligibility check for the date of service to see which plan is responsible.' },
      { title: 'Check carve-outs', text: 'Look at the member card and plan details for separate behavioral health, lab or DME vendors.' },
      { title: 'Update registration', text: 'Correct the payer on file so future claims route correctly.' },
      { title: 'Submit to the right payer', text: 'Send a new claim to the correct payer or contractor, watching its timely-filing limit.' },
      { title: 'Close the original', text: 'Adjust the CO-109 balance off the wrong payer once the new claim is accepted.' },
    ],
    appeal: [
      'An appeal rarely helps: CO-109 means the payer is not responsible. Only dispute it if eligibility for that payer on the date of service is confirmed in writing.',
    ],
    prevent: [
      'Verify eligibility before every visit; Medicare Advantage and Medicaid plan changes are common.',
      'Ask patients at check-in whether their insurance has changed, including Medicare Advantage enrollment.',
      'Set payer routing rules for DME, lab and behavioral health carve-outs.',
    ],
    faqs: [
      { question: 'What does denial code CO-109 mean?', answer: 'CO-109 means the claim or service is not covered by this payer or contractor, and the claim must be sent to the correct payer or contractor.' },
      { question: 'How do I fix a CO-109 denial?', answer: 'Verify the patient\'s coverage for the date of service, update the payer in your system, and submit a new claim to the correct payer or Medicare contractor within its filing limit.' },
      { question: 'Why would Medicare deny a claim with CO-109?', answer: 'Common reasons are that the patient is enrolled in a Medicare Advantage plan, or the claim went to the wrong Medicare contractor, such as DME billed to the Part B MAC instead of the DME MAC.' },
      { question: 'Can I bill the patient for CO-109?', answer: 'No. The claim needs to go to the correct payer; CO-109 is not patient responsibility.' },
    ],
    relatedCodes: ['co-22', 'co-29', 'co-16'],
  },

  // ------------------------------------------------------------------ CO-197
  {
    slug: 'co-197',
    code: 'CO-197',
    carc: '197',
    group: 'CO',
    name: 'Precertification or authorization absent',
    official: 'Precertification/authorization/notification/pre-treatment absent.',
    definition:
      'Denial code CO-197 means the service needed prior authorization (or notification) that was not obtained or not shown on the claim; if an authorization exists, resubmit with its number, otherwise ask the payer about retro-authorization or appeal, because the amount cannot be billed to the patient.',
    seoTitle: 'CO-197 Denial Code: Prior Authorization Absent',
    seoDescription:
      'CO-197 means prior authorization was absent. How to fix it when an authorization existed, when retro-authorization is possible, and how to prevent it.',
    glance: [
      { label: 'Group code', value: 'CO (Contractual Obligation)' },
      { label: 'Bill the patient?', value: 'No' },
      { label: 'Usual fix', value: 'Add the auth number, or request retro-auth' },
      { label: 'Appeal needed?', value: 'When the service was urgent or auth was obtained' },
    ],
    intro: [
      'Many payers require prior authorization before advanced imaging, surgery, specialty drugs, therapy and other services. CO-197 means the payer has no authorization on record for the service billed, or the claim did not reference it.',
      'Some CO-197 denials are easy: the authorization was obtained but the number was left off the claim. Others are true process gaps, where nobody requested the authorization before the visit. Those are harder to recover and are best prevented at scheduling.',
    ],
    causes: [
      { title: 'Authorization number missing', text: 'An authorization existed but was not entered on the claim (for example, item 23 of the CMS-1500 or the 837P REF segment).' },
      { title: 'Authorization never requested', text: 'The service was scheduled without checking whether the payer requires authorization.' },
      { title: 'Code or date mismatch', text: 'The service performed differs from the code that was authorized, or falls outside the authorized dates.' },
      { title: 'Wrong provider or location', text: 'The authorization was issued for a different rendering provider or facility.' },
      { title: 'Coverage changed', text: 'The patient changed plans and the new payer has its own authorization rules.' },
    ],
    remarks: [
      { code: 'N54', meaning: 'Claim information is inconsistent with pre-certified/authorized services.' },
      { code: 'M62', meaning: 'Missing/incomplete/invalid treatment authorization code.' },
    ],
    fix: [
      { title: 'Search for an authorization', text: 'Check the payer portal and your records for an approval covering the patient, code, provider and date.' },
      { title: 'If it exists', text: 'Send a corrected claim with the authorization number in the right field.' },
      { title: 'If the code changed', text: 'Ask the payer to update the authorization to the code performed, then resubmit.' },
      { title: 'If none exists', text: 'Ask whether the payer allows retro-authorization and request it with clinical notes.' },
      { title: 'Appeal when justified', text: 'Appeal urgent or emergency services, or cases where the payer gave wrong information, with documentation.' },
    ],
    appeal: [
      'Appeal when the service was emergent, when the payer\'s own representative said no authorization was needed (note the call reference), or when an approval exists but was not linked to the claim.',
      'Include the clinical notes and any call reference numbers or portal screenshots.',
      'Note that CO-198 is different: it means the authorization was exceeded (for example more visits or units than approved).',
    ],
    prevent: [
      'Check authorization requirements by payer and CPT code at scheduling, not at check-in.',
      'Track authorization numbers, approved codes, units and dates, and link them to the visit in your system.',
      'Re-check authorization when the planned procedure changes.',
    ],
    faqs: [
      { question: 'What does denial code CO-197 mean?', answer: 'CO-197 means precertification, authorization, notification or pre-treatment was absent: the payer has no required authorization on record for the service billed.' },
      { question: 'How do I fix a CO-197 denial?', answer: 'If an authorization was obtained, send a corrected claim with the authorization number. If not, ask the payer about retro-authorization, and appeal urgent services with clinical documentation.' },
      { question: 'What is the difference between CO-197 and CO-198?', answer: 'CO-197 means the authorization is absent. CO-198 means an authorization exists but the service exceeded it, such as more units or visits than were approved.' },
      { question: 'Can I bill the patient for a missing authorization?', answer: 'No. CO-197 uses the Contractual Obligation group code, so the provider cannot transfer the amount to the patient.' },
    ],
    relatedCodes: ['co-50', 'co-16', 'co-109'],
  },

  // ------------------------------------------------------------------ PR-2
  {
    slug: 'pr-2',
    code: 'PR-2',
    carc: '2',
    group: 'PR',
    name: 'Coinsurance amount',
    official: 'Coinsurance Amount.',
    definition:
      'Code PR-2 means the payer applied the patient\'s coinsurance, the percentage of the allowed amount the patient shares under the plan, so the patient owes that amount; it is not a denial, and the practice should bill the patient or a secondary payer rather than appeal.',
    seoTitle: 'PR-2 Denial Code: Coinsurance Amount Explained',
    seoDescription:
      'PR-2 means the amount is the patient\'s coinsurance. What it means, how it differs from deductible and copay, and how to bill secondary insurance first.',
    glance: [
      { label: 'Group code', value: 'PR (Patient Responsibility)' },
      { label: 'Bill the patient?', value: 'Yes (after any secondary payer)' },
      { label: 'Usual fix', value: 'Bill secondary insurance, then the patient' },
      { label: 'Appeal needed?', value: 'No (unless coinsurance was applied in error)' },
    ],
    intro: [
      'PR-2 is a patient-responsibility adjustment, not a denial. The payer processed the claim, calculated the allowed amount, paid its share and reported the patient\'s share as coinsurance with CARC 2. Coinsurance is a percentage of the allowed amount, for example 20% for most services under Medicare Part B once the Part B deductible is met.',
      'Because coinsurance is a percentage, PR-2 amounts grow with the cost of the service, so they can be large for surgery, imaging and infusions. Many patients have a secondary plan or Medicare supplement that covers some or all of it, so the order of billing matters before a statement goes to the patient.',
    ],
    causes: [
      { title: 'Plan coinsurance applies', text: 'The plan pays a set percentage of the allowed amount and the patient pays the rest, up to the plan\'s out-of-pocket maximum.' },
      { title: 'Deductible already met', text: 'Once the deductible is met, many plans move from deductible (PR-1) to coinsurance (PR-2) for the same kind of service.' },
      { title: 'Medicare Part B cost sharing', text: 'For most Part B services, the patient owes 20% of the Medicare-approved amount after the Part B deductible.' },
      { title: 'Out-of-network benefits', text: 'Many plans apply a higher coinsurance percentage for out-of-network services.' },
      { title: 'Service-specific cost sharing', text: 'Some plans set different coinsurance for categories such as imaging, outpatient surgery or therapy.' },
    ],
    fix: [
      { title: 'Post to patient responsibility', text: 'Move the PR-2 amount from insurance A/R to the patient balance, linked to the claim and date of service.' },
      { title: 'Bill the secondary payer', text: 'If the patient has secondary coverage or a Medicare supplement, send the secondary claim with the primary payer\'s payment information before billing the patient. Some secondary claims cross over automatically.' },
      { title: 'Check the math', text: 'Confirm the coinsurance matches the plan percentage applied to the allowed amount, not to your billed charge.' },
      { title: 'Send a clear statement', text: 'Show the date of service, allowed amount, what insurance paid and that the balance is coinsurance.' },
      { title: 'Offer payment options', text: 'Card on file, online payment and payment plans help with larger coinsurance balances.' },
    ],
    appeal: [
      'Only question PR-2 when it looks wrong: for example a preventive service that should have no cost sharing, a coinsurance percentage that does not match the plan, or a patient who has already reached the out-of-pocket maximum. Ask the payer to reprocess with the correct benefit.',
    ],
    prevent: [
      'Check the coinsurance percentage, remaining deductible and out-of-pocket maximum during eligibility verification.',
      'Give patients a cost estimate before higher-cost services and explain coinsurance in plain language.',
      'Capture all secondary coverage at registration so coinsurance goes to the secondary payer first.',
      'Collect a deposit toward expected coinsurance when your financial policy allows it.',
    ],
    faqs: [
      { question: 'What does PR-2 mean on an EOB?', answer: 'PR-2 means coinsurance amount: the patient\'s share of the allowed amount under the plan, reported as patient responsibility.' },
      { question: 'Is PR-2 a denial?', answer: 'No. The claim was processed and the payer paid its share. PR-2 shows the portion the patient owes as coinsurance.' },
      { question: 'Can I bill the patient for PR-2?', answer: 'Yes. PR stands for Patient Responsibility. Bill any secondary insurance first, then send the patient a statement for the remaining amount.' },
      { question: 'What is the difference between PR-1, PR-2 and PR-3?', answer: 'PR-1 is the deductible, PR-2 is coinsurance (a percentage of the allowed amount) and PR-3 is a copayment (a fixed dollar amount). All three are patient responsibility.' },
      { question: 'Does a Medicare supplement pay PR-2 amounts?', answer: 'Often, yes. Many Medigap plans cover some or all of the Part B coinsurance, so bill the supplement, or confirm the claim crossed over, before billing the patient.' },
    ],
    relatedCodes: ['pr-1', 'pr-3', 'co-45'],
  },

  // ------------------------------------------------------------------ PR-3
  {
    slug: 'pr-3',
    code: 'PR-3',
    carc: '3',
    group: 'PR',
    name: 'Copayment amount',
    official: 'Co-payment Amount.',
    definition:
      'Code PR-3 means the payer subtracted the patient\'s copayment, a fixed dollar amount set by the plan, from its payment, so the patient owes that amount; it is not a denial, and it is best collected at check-in.',
    seoTitle: 'PR-3 Denial Code: Copayment Amount Explained',
    seoDescription:
      'PR-3 means the amount is the patient\'s copayment. What it means, how it differs from coinsurance, how to post it and how to collect copays at check-in.',
    glance: [
      { label: 'Group code', value: 'PR (Patient Responsibility)' },
      { label: 'Bill the patient?', value: 'Yes (if not collected at the visit)' },
      { label: 'Usual fix', value: 'Apply the copay collected, or bill the patient' },
      { label: 'Appeal needed?', value: 'No (unless the copay was applied in error)' },
    ],
    intro: [
      'PR-3 is a patient-responsibility adjustment, not a denial. The payer processed the claim and reduced its payment by the copayment the plan requires for that type of visit, such as a primary care visit, a specialist visit or urgent care.',
      'Unlike coinsurance, a copay is a fixed amount that the patient usually knows from their insurance card or plan documents. That makes PR-3 the easiest patient balance to collect up front. When it is not collected at check-in, it turns into a small statement balance that costs more to collect than many practices realize.',
    ],
    causes: [
      { title: 'Plan copay for the visit type', text: 'The plan sets a fixed copay for office visits, specialist visits, urgent care or other service types.' },
      { title: 'Specialist copay applied', text: 'The visit was processed under the specialist benefit, which often has a higher copay than primary care.' },
      { title: 'Copay plus other cost sharing', text: 'Some plans apply a copay and also deductible or coinsurance to other services on the same claim.' },
      { title: 'Copay not collected at the visit', text: 'The copay was not collected at check-in, so it now shows as an open patient balance.' },
    ],
    fix: [
      { title: 'Match the copay collected', text: 'If the copay was collected at the visit, apply that payment to the PR-3 amount so the patient is not billed twice.' },
      { title: 'Refund overpayments', text: 'If the patient paid more than the PR-3 amount, refund or apply the credit according to your policy.' },
      { title: 'Bill the secondary payer', text: 'If the patient has secondary coverage that pays copays, send it the claim with the primary payment details first.' },
      { title: 'Bill the patient', text: 'Send a statement for any copay that was not collected, showing the date of service and that it is the plan copay.' },
    ],
    appeal: [
      'Only question PR-3 when the copay looks wrong, for example a specialist copay on a primary care visit, a copay on a preventive visit that should have no cost sharing, or a copay that does not match the plan. Ask the payer to reprocess with the correct benefit.',
    ],
    prevent: [
      'Verify the copay for the visit type during eligibility checks before the visit.',
      'Collect copays at check-in, before the patient is seen, as a standard front-desk step.',
      'Make sure visits are scheduled and registered under the right provider type so the correct copay is quoted.',
      'Offer card-on-file and contactless payment to make collection quick.',
    ],
    faqs: [
      { question: 'What does PR-3 mean on an EOB?', answer: 'PR-3 means copayment amount: a fixed amount the patient owes for the service under the plan, reported as patient responsibility.' },
      { question: 'Is PR-3 a denial?', answer: 'No. The claim was processed and paid, minus the copay the plan requires the patient to pay.' },
      { question: 'Can I bill the patient for PR-3?', answer: 'Yes. PR stands for Patient Responsibility. If the copay was already collected at the visit, apply it instead of billing again.' },
      { question: 'What is the difference between a copay and coinsurance?', answer: 'A copay (PR-3) is a fixed dollar amount. Coinsurance (PR-2) is a percentage of the allowed amount, so it changes with the cost of the service.' },
    ],
    relatedCodes: ['pr-1', 'pr-2', 'co-45'],
  },

  // ------------------------------------------------------------------ CO-24
  {
    slug: 'co-24',
    code: 'CO-24',
    carc: '24',
    group: 'CO',
    name: 'Covered under capitation or a managed care plan',
    official: 'Charges are covered under a capitation agreement/managed care plan.',
    definition:
      'Denial code CO-24 means the payer will not pay the service fee-for-service because it is covered by a capitation agreement or a managed care plan; if you are paid by capitation the line is written off, and if the patient belongs to a different plan the claim must be sent there.',
    seoTitle: 'CO-24 Denial Code: Capitation and Managed Care Plans',
    seoDescription:
      'CO-24 means charges are covered under a capitation agreement or managed care plan. When to write it off, when to rebill another plan, and prevention.',
    glance: [
      { label: 'Group code', value: 'CO (Contractual Obligation)' },
      { label: 'Bill the patient?', value: 'No' },
      { label: 'Usual fix', value: 'Write off under capitation, or bill the correct plan' },
      { label: 'Appeal needed?', value: 'Only if the service is carved out of capitation' },
    ],
    intro: [
      'Under a capitation agreement, a payer pays a provider a fixed amount per member, usually each month, to cover a defined set of services, whether or not the patient comes in. Claims for those services are still submitted, often as encounter data, but each line is adjusted to zero with CO-24 because it has already been paid through the capitation payment.',
      'CO-24 also appears when a payer sees that the patient is enrolled in a managed care plan that is responsible for the service. A common example is a claim sent to Original Medicare for a patient enrolled in a Medicare Advantage plan. In that case the claim needs to go to the plan, so the fix is a routing fix, much like CO-109.',
    ],
    causes: [
      { title: 'Service included in capitation', text: 'The practice has a capitated contract and the service is one the capitation payment covers.' },
      { title: 'Patient enrolled in a managed care plan', text: 'The patient is in a Medicare Advantage or Medicaid managed care plan, and the claim went to Original Medicare or fee-for-service Medicaid.' },
      { title: 'Patient assigned to another provider', text: 'In some HMO-style plans the patient is assigned to a different primary care provider, who holds the capitation.' },
      { title: 'Carve-out service billed under capitation', text: 'A service that the contract pays fee-for-service was processed as if it were included in the capitation.' },
      { title: 'Outdated registration', text: 'The insurance on file was not updated after the patient enrolled in a managed care plan.' },
    ],
    fix: [
      { title: 'Check the patient\'s coverage', text: 'Run an eligibility check for the date of service to confirm the plan, product and assigned provider.' },
      { title: 'Check your contract', text: 'If you are capitated for this patient, confirm whether the service is included in the capitation or carved out for separate payment.' },
      { title: 'Write off included services', text: 'When the service is covered by your capitation, post the CO-24 amount as a contractual adjustment. It cannot be billed to the patient.' },
      { title: 'Rebill the correct plan', text: 'When the patient belongs to another managed care plan, update registration and send a new claim to that plan within its filing limit.' },
      { title: 'Dispute carve-outs', text: 'When the contract pays the service fee-for-service, ask the payer to reprocess and cite the contract section.' },
    ],
    appeal: [
      'Appeal or request reprocessing only when the contract shows the service is carved out of capitation, or when the patient was not enrolled in the managed care plan on the date of service. Attach the contract language or the eligibility response.',
      'Do not appeal CO-24 for services the capitation already covers; the payment was made through the capitation.',
    ],
    prevent: [
      'Verify eligibility before every visit and note Medicare Advantage, Medicaid managed care and HMO enrollment.',
      'Keep a list of which services are included in each capitated contract and which are carved out.',
      'Check that patients are assigned to your practice in capitated plans, and request reassignment when needed.',
      'Reconcile monthly capitation payments against the member rosters the payer sends.',
    ],
    faqs: [
      { question: 'What does denial code CO-24 mean?', answer: 'CO-24 means the charges are covered under a capitation agreement or a managed care plan, so the payer does not pay the service separately on this claim.' },
      { question: 'How do I fix a CO-24 denial?', answer: 'Check the patient\'s coverage and your contract. If the service is included in your capitation, write it off. If the patient belongs to another managed care plan, bill that plan. If the service is carved out, ask the payer to reprocess.' },
      { question: 'Can I bill the patient for CO-24?', answer: 'No. CO-24 uses the Contractual Obligation group code, so the amount cannot be billed to the patient. Any copay the plan requires is reported separately.' },
      { question: 'Why do capitated claims still need to be submitted?', answer: 'Payers use encounter data from these claims to track care, quality measures and risk adjustment, and many capitated contracts require it even though the lines pay zero.' },
      { question: 'What is the difference between CO-24 and CO-109?', answer: 'CO-24 says the service is covered under a capitation agreement or managed care plan. CO-109 says the claim must go to a different payer or contractor. Both can appear when a patient is in a managed care plan and the claim went to the wrong payer.' },
    ],
    relatedCodes: ['co-109', 'co-45', 'co-22'],
  },

  // ------------------------------------------------------------------ CO-59
  {
    slug: 'co-59',
    code: 'CO-59',
    carc: '59',
    group: 'CO',
    name: 'Multiple or concurrent procedure reduction',
    official: 'Processed based on multiple or concurrent procedure rules. (For example multiple surgery or diagnostic imaging, concurrent anesthesia.)',
    definition:
      'Code CO-59 means the payer reduced payment for a procedure under its multiple-procedure or concurrent-procedure rules, such as paying the second surgery or imaging study at a lower rate; it is usually a correct contractual reduction, and only worth disputing when the codes were ranked or reduced incorrectly.',
    seoTitle: 'CO-59 Denial Code: Multiple Procedure Reductions Explained',
    seoDescription:
      'CO-59 means payment was reduced under multiple or concurrent procedure rules. How surgery and imaging reductions work and when to dispute.',
    glance: [
      { label: 'Group code', value: 'CO (Contractual Obligation)' },
      { label: 'Bill the patient?', value: 'No' },
      { label: 'Usual fix', value: 'Verify the reduction, then post as contractual' },
      { label: 'Appeal needed?', value: 'Only when the reduction was applied wrongly' },
    ],
    intro: [
      'When more than one procedure is performed in the same session, payers usually do not pay each one at the full rate, because some of the work, such as preparation and recovery, overlaps. CO-59 is how the remittance reports that reduction. Under the Medicare Physician Fee Schedule, for example, multiple surgeries are generally paid at 100% for the highest-valued procedure and 50% for each additional one, and multiple-procedure payment reductions also apply to certain diagnostic imaging and therapy services.',
      'CARC 59 also covers concurrent procedure rules, most often in anesthesia, where an anesthesiologist medically directs several cases at the same time and payment for each case is adjusted. Do not confuse CARC 59 with modifier 59: the modifier marks a distinct procedural service, while the reason code reports a payment reduction.',
    ],
    causes: [
      { title: 'Multiple surgery rules', text: 'Two or more surgical procedures in the same session, with the additional procedures paid at a reduced rate.' },
      { title: 'Diagnostic imaging reductions', text: 'Several imaging studies in the same session, with reductions applied to the additional studies.' },
      { title: 'Concurrent anesthesia', text: 'Anesthesia cases medically directed at the same time, with payment adjusted for concurrency.' },
      { title: 'Therapy or other payer reductions', text: 'Payer policies that reduce payment for additional units or services in the same day.' },
      { title: 'Ranking errors', text: 'The payer, or the claim, ranked the procedures in the wrong order so the full rate went to a lower-valued code.' },
      { title: 'Codes exempt from reduction', text: 'Add-on codes or codes the fee schedule exempts from multiple-procedure rules were reduced anyway.' },
    ],
    fix: [
      { title: 'Identify the reduced lines', text: 'Find which lines carry CARC 59 and how much each one was reduced.' },
      { title: 'Check the payer rules', text: 'Look up the multiple-procedure indicator for each code in the Medicare fee schedule, or the payer\'s reimbursement policy, to see which reduction should apply.' },
      { title: 'Check the ranking', text: 'Confirm that the highest-valued procedure was paid at the full rate and that exempt codes, such as add-on codes, were not reduced.' },
      { title: 'Post or dispute', text: 'If the reduction is correct, post it as a contractual adjustment. If not, request reprocessing with the fee schedule or policy that shows the correct calculation.' },
      { title: 'Review the coding', text: 'Make sure the procedures and modifiers on the claim reflect what was done, since modifier errors can change how reductions apply.' },
    ],
    appeal: [
      'Dispute only when the reduction does not follow the fee schedule or the payer\'s published policy, for example when the wrong code was paid at the full rate or an exempt code was reduced.',
      'Attach the fee schedule indicators or policy section and a short calculation showing the expected payment by line.',
      'Do not appeal a correctly applied reduction; it reflects the payment rules in your contract or the fee schedule.',
    ],
    prevent: [
      'Load multiple-procedure rules by payer so your billing system calculates expected payment for each line.',
      'List procedures in the order your payers expect, usually the highest-valued procedure first, when payer rules call for it.',
      'Review contracts for multiple-procedure terms, since commercial payers can differ from Medicare.',
      'Track CO-59 variances by payer to catch systematic ranking or reduction errors.',
    ],
    faqs: [
      { question: 'What does denial code CO-59 mean?', answer: 'CO-59 means the payer processed the service under multiple or concurrent procedure rules, so payment for one or more procedures was reduced. Examples are multiple surgeries, multiple imaging studies and concurrent anesthesia.' },
      { question: 'Is CO-59 a denial?', answer: 'Usually not. The service was paid, but at a reduced amount because other procedures were performed in the same session.' },
      { question: 'Is CARC 59 the same as modifier 59?', answer: 'No. Modifier 59 tells the payer a procedure was distinct from another service. CARC 59 is a reason code that explains a payment reduction under multiple or concurrent procedure rules.' },
      { question: 'Can I bill the patient for CO-59?', answer: 'No. CO-59 uses the Contractual Obligation group code, so the reduction is written off.' },
      { question: 'When should I dispute a CO-59 reduction?', answer: 'When the reduction does not match the fee schedule or payer policy, for example when the highest-valued procedure was reduced instead of a lower-valued one, or an exempt code was reduced.' },
    ],
    relatedCodes: ['co-45', 'co-97', 'co-4'],
  },

  // ------------------------------------------------------------------ CO-96
  {
    slug: 'co-96',
    code: 'CO-96',
    carc: '96',
    group: 'CO',
    name: 'Non-covered charges',
    official: 'Non-covered charge(s). At least one Remark Code must be provided.',
    definition:
      'Denial code CO-96 means the payer considers the service not covered under the patient\'s plan, and the remark code sent with it explains why; the provider cannot bill the patient unless liability was properly shifted, for example with a valid advance notice, so the fix is to read the remark code and correct, appeal or write off.',
    seoTitle: 'CO-96 Denial Code: Non-Covered Charges and How to Fix',
    seoDescription:
      'CO-96 means non-covered charges. How to read the remark code, when the patient can be billed, how CO-96 differs from CO-50, and how to prevent it.',
    glance: [
      { label: 'Group code', value: 'CO (PR when the patient is liable)' },
      { label: 'Bill the patient?', value: 'Not when CO; possibly when PR' },
      { label: 'Usual fix', value: 'Read the remark code, then correct, appeal or write off' },
      { label: 'Appeal needed?', value: 'When the service is covered under the plan' },
    ],
    intro: [
      'CO-96 is a broad non-coverage denial. The payer is saying the service is not a covered benefit for this patient, for this plan or in these circumstances. X12 requires at least one remark code with CARC 96, and that remark code is the starting point: it may point to a benefit exclusion, a plan limitation, a provider type the plan does not cover, or another reason.',
      'CO-96 differs from a medical-necessity denial (CO-50). With CO-50, the service can be covered but the documentation did not meet the criteria. With CO-96, the payer is saying it does not cover the service at all, or not under these conditions. When the group code is CO, the provider is liable; when the patient agreed in advance to pay, payers may report it as PR-96 instead.',
    ],
    causes: [
      { title: 'Plan benefit exclusion', text: 'The patient\'s plan excludes the service, such as some cosmetic, routine or elective services.' },
      { title: 'Statutory exclusion', text: 'For Medicare, some services are excluded by law, such as most routine physical exams, routine foot care and cosmetic surgery.' },
      { title: 'Provider or setting not covered', text: 'The plan does not cover the service from that provider type, or in that place of service.' },
      { title: 'Wrong code for a covered service', text: 'A covered service was billed with a code the plan does not cover, such as a code the payer wants billed another way.' },
      { title: 'Coverage ended or changed', text: 'The service is not part of the benefits the patient had on the date of service.' },
    ],
    remarks: [
      { code: 'N130', meaning: 'Consult plan benefit documents/guidelines for information about restrictions for this service.' },
    ],
    fix: [
      { title: 'Read the remark code', text: 'Find the RARC sent with CARC 96; it explains why the payer considers the service non-covered.' },
      { title: 'Check the benefits', text: 'Review the patient\'s plan benefits or, for Medicare, the coverage rules for the service.' },
      { title: 'Check the coding', text: 'Make sure the procedure, diagnosis, place of service and modifiers describe the service correctly. If they were wrong, send a corrected claim.' },
      { title: 'Check for a signed notice', text: 'If the patient signed a valid advance notice or financial waiver before the service, and the claim showed it where required, ask whether the line should be reprocessed as patient responsibility.' },
      { title: 'Appeal or write off', text: 'Appeal when the plan covers the service. Otherwise, post the CO-96 amount as a write-off; it cannot be billed to the patient.' },
    ],
    appeal: [
      'Appeal when the plan documents show the service is covered for this patient. Quote the benefit language and attach it.',
      'Include the clinical notes if the coverage depends on the patient\'s condition.',
      'For Medicare, a valid Advance Beneficiary Notice matters for services that may be denied as not reasonable and necessary. For statutorily excluded services an ABN is not required, but it can be used as a courtesy notice.',
    ],
    prevent: [
      'Check benefits for services that plans often exclude before scheduling them.',
      'Give patients a written notice and cost estimate for services the plan may not cover, and get a signature before the service.',
      'Use the correct modifiers for Medicare notices (GA, GX, GY, GZ) when they apply.',
      'Track CO-96 by remark code and payer to find recurring benefit or coding gaps.',
    ],
    faqs: [
      { question: 'What does denial code CO-96 mean?', answer: 'CO-96 means non-covered charges: the payer does not cover the service under the patient\'s plan or in the circumstances billed. The remark code sent with it gives the reason.' },
      { question: 'How do I fix a CO-96 denial?', answer: 'Read the remark code, check the patient\'s benefits and the coding. Correct and resubmit if the coding was wrong, appeal if the plan covers the service, and otherwise write off the line.' },
      { question: 'Can I bill the patient for CO-96?', answer: 'Not when the group code is CO. If the patient agreed in writing before the service to pay for a non-covered service, the payer may report the line as PR-96, and the patient can then be billed.' },
      { question: 'What is the difference between CO-96 and CO-50?', answer: 'CO-50 means the service was not considered medically necessary based on the diagnosis and documentation. CO-96 means the service is not covered under the plan at all, or not under these conditions.' },
    ],
    relatedCodes: ['co-50', 'co-11', 'co-197'],
  },

  // ------------------------------------------------------------------ CO-151
  {
    slug: 'co-151',
    code: 'CO-151',
    carc: '151',
    group: 'CO',
    name: 'Units or frequency not supported',
    official: 'Payment adjusted because the payer deems the information submitted does not support this many/frequency of services.',
    definition:
      'Denial code CO-151 means the payer decided the claim does not support the number of units or the frequency of the service billed, often because of a Medicare Medically Unlikely Edit (MUE) or a payer frequency limit; it is fixed by correcting the units, or by appealing with records that support the extra units.',
    seoTitle: 'CO-151 Denial Code: Units or Frequency Not Supported',
    seoDescription:
      'CO-151 means the payer does not accept the units or frequency billed. How MUEs and frequency limits work, correcting units, and appeals.',
    glance: [
      { label: 'Group code', value: 'CO (Contractual Obligation)' },
      { label: 'Bill the patient?', value: 'No' },
      { label: 'Usual fix', value: 'Correct units, or appeal with documentation' },
      { label: 'Appeal needed?', value: 'When the units were truly provided and necessary' },
    ],
    intro: [
      'CO-151 is about quantity. The payer accepts that the service can be paid, but not as many units, or not as often, as the claim shows. For Medicare claims, the most common source is a Medically Unlikely Edit (MUE), which sets the maximum units of a code that a provider would report for one patient on one date of service. Commercial payers apply their own unit and frequency limits.',
      'Many CO-151 denials are data entry problems, such as units entered as minutes or a dose billed in the wrong unit of measure. Others are real cases where a patient needed more than the usual amount of a service. For Medicare MUE denials, CMS has said an Advance Beneficiary Notice does not shift liability to the patient, so the amount cannot be billed to the patient.',
    ],
    causes: [
      { title: 'Units over the MUE', text: 'The units billed for a code on one date exceed the Medicare MUE value for that code.' },
      { title: 'Unit-of-measure errors', text: 'Drug units billed in milligrams instead of the HCPCS unit, or time-based codes billed in minutes instead of units.' },
      { title: 'Frequency limits', text: 'The service was repeated sooner than the payer\'s policy allows, such as a test limited to once per year.' },
      { title: 'Bilateral or repeat services reported wrongly', text: 'Bilateral or repeat procedures reported in a way the payer counts as too many units on one line.' },
      { title: 'Units split across lines incorrectly', text: 'Units reported on several lines without the modifiers that show they were separate services, where the edit allows it.' },
    ],
    remarks: [
      { code: 'N362', meaning: 'The number of Days or Units of Service exceeds our acceptable maximum.' },
    ],
    fix: [
      { title: 'Check the units', text: 'Compare the units billed with the documentation and the code descriptor, including the HCPCS unit for drugs and time rules for timed codes.' },
      { title: 'Check the limit', text: 'Look up the MUE value for the code and its adjudication indicator, or the payer\'s frequency policy.' },
      { title: 'Correct data entry errors', text: 'If the units were wrong, send a corrected claim with the right units.' },
      { title: 'Report separate services correctly', text: 'If services were truly separate (for example a different site or session) and the edit allows it, report them as the payer requires, with supported modifiers.' },
      { title: 'Appeal supported units', text: 'If the patient needed and received more units than the limit, appeal with the records that show why.' },
    ],
    appeal: [
      'Appeal when the documentation shows the units were provided and medically necessary, for example a higher drug dose or an unusual number of lesions treated. Attach the notes, orders and administration records.',
      'Explain in the letter why this case differs from the usual one, since unit limits are based on what is typical.',
      'Do not split units across lines or add modifiers just to get around an edit; that creates compliance risk.',
    ],
    prevent: [
      'Load MUE values and payer frequency limits into your claim scrubber.',
      'Set up drug billing to convert doses into the correct HCPCS units.',
      'Check frequency limits before scheduling services that payers restrict, such as screening tests.',
      'Review CO-151 denials by code to find charge-entry or template errors.',
    ],
    faqs: [
      { question: 'What does denial code CO-151 mean?', answer: 'CO-151 means the payer deems the information submitted does not support the number or frequency of services billed, so payment was adjusted.' },
      { question: 'Is CO-151 related to Medically Unlikely Edits?', answer: 'Often, yes. For Medicare claims, services that exceed an MUE are commonly denied with CARC 151. Commercial payers also use it for their own unit and frequency limits.' },
      { question: 'How do I fix a CO-151 denial?', answer: 'Check the units against the documentation and the code rules. Send a corrected claim if the units were wrong, or appeal with records if the extra units were truly provided and necessary.' },
      { question: 'Can I bill the patient for CO-151?', answer: 'No. CO-151 uses the Contractual Obligation group code. For Medicare MUE denials, CMS has said an ABN does not shift liability to the patient.' },
    ],
    relatedCodes: ['co-50', 'co-4', 'co-97'],
  },

  // ------------------------------------------------------------------ CO-252
  {
    slug: 'co-252',
    code: 'CO-252',
    carc: '252',
    group: 'CO',
    name: 'Attachment or other documentation required',
    official: 'An attachment/other documentation is required to adjudicate this claim/service. At least one Remark Code must be provided.',
    definition:
      'Denial code CO-252 means the payer needs an attachment or other documentation, such as medical records or an invoice, before it can decide the claim; the remark code names what is missing, and the fix is to send that documentation the way the payer asks, within its deadline.',
    seoTitle: 'CO-252 Denial Code: Attachment or Documentation Required',
    seoDescription:
      'CO-252 means the payer needs an attachment or documentation to process the claim. How to read the remark code, what to send, and prevention.',
    glance: [
      { label: 'Group code', value: 'CO (Contractual Obligation)' },
      { label: 'Bill the patient?', value: 'No' },
      { label: 'Usual fix', value: 'Send the requested documentation' },
      { label: 'Appeal needed?', value: 'Sometimes, depending on the payer process' },
    ],
    intro: [
      'CO-252 tells you the payer cannot finish processing the claim without more paperwork. X12 requires at least one remark code with CARC 252, and the remark code tells you what the payer wants, such as the medical record for the service, an operative report, an invoice for a supply or drug, or a consent form.',
      'Payers handle CO-252 in different ways. Some deny the claim and expect a resubmission or appeal with the documents attached; others send a separate records request and reprocess when the documents arrive. Read the remittance and any letter carefully, because sending the right documents to the wrong place or after the deadline usually means starting over.',
    ],
    causes: [
      { title: 'Payer policy requires records', text: 'The payer\'s policy requires documentation for the code, such as unlisted procedures or services with modifier 22.' },
      { title: 'Unlisted codes', text: 'An unlisted procedure code was billed without a description and the operative or procedure note.' },
      { title: 'Invoice needed for pricing', text: 'A drug, implant or supply without a set price needs an invoice so the payer can price it.' },
      { title: 'Attachment indicated but not received', text: 'The claim said documentation would follow, but it never reached the payer or could not be matched to the claim.' },
      { title: 'Prepayment review', text: 'The payer selected the claim for review and needs records before paying.' },
    ],
    remarks: [
      { code: 'M127', meaning: 'Missing patient medical record for this service.' },
      { code: 'N706', meaning: 'Missing documentation.' },
    ],
    fix: [
      { title: 'Read the remark code', text: 'Find the RARC on the line and any payer letter to see exactly which documents are required.' },
      { title: 'Gather the documents', text: 'Pull the complete, signed record for the date of service, plus any invoice, report or form named in the request.' },
      { title: 'Check the documentation', text: 'Make sure the records support the codes, units and modifiers billed before sending them.' },
      { title: 'Send them the way the payer asks', text: 'Use the payer\'s portal, fax cover sheet, electronic attachment process or mailing address, and include the claim number on every page or cover sheet.' },
      { title: 'Track the deadline', text: 'Note the response deadline and follow up until the claim is reprocessed.' },
    ],
    appeal: [
      'Appeal when the documentation was already sent and received, and include proof such as a portal confirmation or fax report.',
      'If the payer requires a new claim with attachments rather than an appeal, follow that process instead; check its provider manual.',
      'Send only the records for the date of service in question, and make sure they are complete and signed.',
    ],
    prevent: [
      'Keep a list of codes and payers that always need documentation, and attach it on the first submission.',
      'Use the claim\'s attachment indicator (the PWK segment on the 837) and send the attachment promptly with the matching control number.',
      'Make sure provider notes are signed and complete before claims go out.',
      'Respond to every records request quickly and log what was sent and when.',
    ],
    faqs: [
      { question: 'What does denial code CO-252 mean?', answer: 'CO-252 means an attachment or other documentation is required to adjudicate the claim or service. The remark code sent with it names what is needed.' },
      { question: 'How do I fix a CO-252 denial?', answer: 'Read the remark code and any payer letter, gather the requested records or invoice, and send them through the payer\'s required channel with the claim number, within its deadline.' },
      { question: 'What documents are usually requested with CO-252?', answer: 'Common requests are the medical record or progress note, operative reports for unlisted procedures, and invoices for drugs or supplies that need pricing.' },
      { question: 'Can I bill the patient for CO-252?', answer: 'No. CO-252 uses the Contractual Obligation group code. Send the documentation so the payer can process the claim.' },
      { question: 'What is the difference between CO-252 and CO-16?', answer: 'CO-16 means the claim itself lacks information or has a billing error. CO-252 means the claim may be complete, but the payer needs separate documentation to decide it.' },
    ],
    relatedCodes: ['co-16', 'co-50', 'co-197'],
  },

  // ------------------------------------------------------------------ CO-119
  {
    slug: 'co-119',
    code: 'CO-119',
    carc: '119',
    group: 'PR',
    name: 'Benefit maximum reached',
    official: 'Benefit maximum for this time period or occurrence has been reached.',
    definition:
      'Denial code 119 means the patient has used up the benefit their plan allows for this service in the current period (for example a yearly visit limit); it is usually reported as PR-119, so the balance can often be billed to the patient if they were informed, unless the plan allows more visits through an exception or a new benefit period has started.',
    seoTitle: 'CO-119 / PR-119 Denial Code: Benefit Maximum Reached',
    seoDescription:
      'Code 119 means the plan’s benefit maximum for the period was reached. Why visit limits trigger it, when the patient can be billed, and how to prevent it.',
    glance: [
      { label: 'Group code', value: 'Usually PR (patient responsibility); CO if the contract says so' },
      { label: 'Bill the patient?', value: 'Often, if the plan and your policy allow it' },
      { label: 'Usual fix', value: 'Check benefits used; bill the patient or the next benefit period' },
      { label: 'Appeal needed?', value: 'Only if the count or the limit is wrong' },
    ],
    intro: [
      'Many health plans cap how much of a service they cover in a period: a number of physical therapy, chiropractic or behavioral health visits per year, a dollar maximum, or a limit per occurrence. When a claim pushes past that cap, the payer adjusts it with CARC 119.',
      'Whether the practice or the patient absorbs the amount depends on the group code and the plan. With PR-119 the payer is telling you the amount is the patient’s responsibility. With CO-119 the contract makes it the provider’s responsibility. In both cases the best protection is checking remaining benefits before the visit, not after the denial.',
    ],
    causes: [
      { title: 'Visit limit reached', text: 'The plan covers a set number of visits per year (common for therapy and behavioral health) and the patient has used them.' },
      { title: 'Dollar or unit maximum', text: 'The plan has a dollar or unit cap for the service, such as durable medical equipment or certain drugs.' },
      { title: 'Visits used at another provider', text: 'The patient used part of the benefit with a different practice earlier in the year, so your count is too low.' },
      { title: 'Benefit period mix-up', text: 'The plan year is not the calendar year, so the reset date was later than expected.' },
      { title: 'Payer counting error', text: 'The payer counted denied, duplicate or voided visits toward the limit.' },
    ],
    fix: [
      { title: 'Confirm the limit', text: 'Check the plan’s benefit for the service, the benefit period and how many visits or dollars were used, through the portal or the 271 eligibility response.' },
      { title: 'Check the payer’s count', text: 'Compare the payer’s count with your records and claims from other providers the patient mentions.' },
      { title: 'Correct errors', text: 'If the payer counted voided, denied or duplicate visits, ask them to reprocess with the right count.' },
      { title: 'Ask about exceptions', text: 'Some plans allow more visits with medical necessity review or a new authorization.' },
      { title: 'Bill or adjust', text: 'With PR-119, bill the patient under your financial policy. With CO-119, adjust the amount off as the contract requires.' },
    ],
    appeal: [
      'Appeal when the benefit was not actually used up: miscounted visits, a wrong benefit period, or a service that falls under a different benefit category.',
      'If the plan allows extra visits for medical necessity, send the request with progress notes showing measurable improvement and the treatment plan.',
    ],
    prevent: [
      'Check remaining visits or dollars at scheduling and again when a course of treatment is planned.',
      'Track visit counts per patient and payer, and warn patients before they reach the limit.',
      'Have patients sign a financial responsibility notice for visits beyond the plan limit, where your policy and payer rules allow it.',
      'Note the plan year reset date in the patient account.',
    ],
    faqs: [
      { question: 'What does denial code 119 mean?', answer: 'CARC 119 means the benefit maximum for this time period or occurrence has been reached: the patient has used up the coverage their plan allows for the service.' },
      { question: 'What is the difference between PR-119 and CO-119?', answer: 'With PR-119 the amount is the patient’s responsibility, so it can usually be billed to the patient. With CO-119 the provider’s contract makes the provider responsible, so it is adjusted off.' },
      { question: 'Can I bill the patient for a 119 denial?', answer: 'Usually yes when the group code is PR, under your financial policy and any payer rules. Telling the patient before the visit that the limit was reached avoids surprise bills.' },
      { question: 'How do I prevent 119 denials?', answer: 'Verify the remaining benefit before each course of treatment, track visit counts by payer, and request extra visits before the limit when the plan allows exceptions.' },
    ],
    relatedCodes: ['pr-1', 'co-96', 'co-151'],
  },

  // ------------------------------------------------------------------ CO-27 (and CO-26)
  {
    slug: 'co-27',
    code: 'CO-27',
    carc: '27',
    group: 'CO',
    name: 'Expenses incurred after coverage terminated',
    official: 'Expenses incurred after coverage terminated.',
    definition:
      'Denial code CO-27 means the patient’s coverage with this payer had ended before the date of service (its twin, CO-26, means coverage had not started yet); the fix is to find the coverage that was active on that date and bill it, or bill the patient if they had none.',
    seoTitle: 'CO-27 Denial Code: Coverage Terminated (and CO-26)',
    seoDescription:
      'CO-27 means coverage ended before the date of service; CO-26 means it had not started. How to find the right coverage, rebill, and prevent both denials.',
    glance: [
      { label: 'Group code', value: 'Usually CO (sometimes PR)' },
      { label: 'Bill the patient?', value: 'Only if no other coverage applied on that date' },
      { label: 'Usual fix', value: 'Verify eligibility for the date and bill the right payer' },
      { label: 'Appeal needed?', value: 'Only if the payer’s dates are wrong' },
    ],
    intro: [
      'CARC 27 tells you the payer has the patient on file, but their coverage ended before the date of service. Its counterpart, CARC 26 ("Expenses incurred prior to coverage."), means the coverage had not begun yet. Both are eligibility problems, not coding problems, so the claim itself is usually fine; it went to a payer that was not responsible on that date.',
      'These denials are common at the start of a year, after job changes, and when patients move between Medicaid, marketplace and employer plans. The fastest fix is an eligibility check for the exact date of service, followed by a new claim to the payer that was active then.',
    ],
    causes: [
      { title: 'Plan ended', text: 'The patient left a job, missed premiums or changed plans, and the old card was still on file.' },
      { title: 'New plan not started', text: 'A new plan begins on the first of the next month, but the visit happened before that date (CO-26).' },
      { title: 'Retroactive termination', text: 'The payer ended coverage retroactively, for example after unpaid marketplace premiums or a Medicaid redetermination.' },
      { title: 'Eligibility not rechecked', text: 'Eligibility was checked at the first visit but not at later visits.' },
      { title: 'Wrong subscriber or member ID', text: 'An old member ID or the wrong subscriber was billed.' },
    ],
    fix: [
      { title: 'Check eligibility for the date', text: 'Run an eligibility check (270/271 or portal) for the exact date of service, not today.' },
      { title: 'Find the active coverage', text: 'Ask the patient for any new or other coverage and confirm its effective dates.' },
      { title: 'Update registration', text: 'Correct the payer, member ID and effective dates in the practice-management system.' },
      { title: 'Bill the right payer', text: 'Send a new claim to the payer that was active on the date of service, within its filing limit.' },
      { title: 'Bill the patient if uninsured', text: 'If no coverage applied, bill the patient under your financial policy.' },
    ],
    appeal: [
      'Appeal or ask for reprocessing only when the payer’s eligibility dates are wrong. Attach the eligibility response, card or enrollment confirmation that shows active coverage on the date of service.',
      'For retroactive terminations, check your contract and state rules on recoupment and on payment for services already authorized.',
    ],
    prevent: [
      'Verify eligibility before every visit, and again at the start of each month and plan year.',
      'Ask patients at check-in whether their insurance has changed.',
      'Scan new insurance cards and record effective dates.',
      'Watch for Medicaid redetermination and marketplace premium grace-period notices in eligibility responses.',
    ],
    faqs: [
      { question: 'What does denial code CO-27 mean?', answer: 'CO-27 means expenses incurred after coverage terminated: the patient’s coverage with this payer had ended before the date of service.' },
      { question: 'What does CO-26 mean?', answer: 'CO-26 means expenses incurred prior to coverage: the patient’s coverage had not started yet on the date of service.' },
      { question: 'How do I fix a CO-27 denial?', answer: 'Check eligibility for the exact date of service, find the coverage that was active then, update the registration and bill that payer. If the patient had no coverage, bill the patient.' },
      { question: 'Can I bill the patient for CO-27?', answer: 'Not for the denied amount as such. First look for other coverage on that date. If there was none, the visit is self-pay and can be billed to the patient under your financial policy.' },
    ],
    relatedCodes: ['co-109', 'co-22', 'co-29'],
  },

  // ------------------------------------------------------------------ OA-23
  {
    slug: 'co-23',
    code: 'OA-23',
    carc: '23',
    group: 'OA',
    name: 'Impact of prior payer adjudication',
    official: 'The impact of prior payer(s) adjudication including payments and/or adjustments. (Use only with Group Code OA)',
    definition:
      'Code 23 (reported as OA-23, often searched as CO-23) means the secondary payer reduced its payment because of what the primary payer already paid or adjusted; it is usually not an error, but the amount should be checked against the primary remittance and the secondary plan’s coordination of benefits rules.',
    seoTitle: 'CO-23 / OA-23 Denial Code: Prior Payer Adjudication',
    seoDescription:
      'Code 23 means the secondary payer adjusted the claim for what the primary payer paid. How to read OA-23, check the math, and post secondary payments.',
    glance: [
      { label: 'Group code', value: 'OA (Other Adjustment), per X12' },
      { label: 'Bill the patient?', value: 'Only the remaining patient share shown by the payers' },
      { label: 'Usual fix', value: 'Reconcile with the primary remittance and post' },
      { label: 'Appeal needed?', value: 'Only if the primary data was wrong or ignored' },
    ],
    intro: [
      'When a patient has two plans, the secondary payer does not pay as if it were alone. It looks at what the primary payer allowed, paid and adjusted, and pays only what its coordination of benefits rules allow on top of that. CARC 23 is how the secondary payer reports that reduction. X12 says it is used only with group code OA, so it appears as OA-23 even though many people search for CO-23.',
      'In most cases OA-23 is expected and correct. It becomes a problem when the secondary payer used the wrong primary amounts, did not receive the primary remittance data, or applied the wrong coordination method.',
    ],
    causes: [
      { title: 'Normal secondary processing', text: 'The primary payer paid part of the claim, and the secondary payer reduced its payment by that amount.' },
      { title: 'Primary paid in full', text: 'The primary payment met or exceeded what the secondary would allow, so the secondary pays nothing more.' },
      { title: 'Wrong primary amounts', text: 'The secondary claim carried the wrong primary paid or adjusted amounts in the COB fields.' },
      { title: 'Missing primary data', text: 'The primary remittance information was not sent with the secondary claim.' },
      { title: 'Medicare secondary rules', text: 'When Medicare is secondary, it applies its own calculation based on the primary payment and the Medicare allowed amount.' },
    ],
    fix: [
      { title: 'Pull both remittances', text: 'Put the primary and secondary remittances side by side for the same claim lines.' },
      { title: 'Check the COB data sent', text: 'Confirm the primary paid amount, adjustments and patient responsibility on the secondary claim matched the primary remittance.' },
      { title: 'Recalculate', text: 'Compare the secondary payment with the plan’s coordination method, if you know it.' },
      { title: 'Correct and resubmit', text: 'If the COB amounts on the secondary claim were wrong or missing, send a corrected claim with the right data.' },
      { title: 'Post and bill the remainder', text: 'Post OA-23 as an adjustment and bill the patient only for the remaining patient responsibility.' },
    ],
    appeal: [
      'Ask for reprocessing when the secondary payer used incorrect primary amounts or ignored primary data you sent. Attach the primary remittance.',
      'There is usually nothing to appeal when the math matches the primary remittance and the plan’s rules.',
    ],
    prevent: [
      'Send primary remittance data with every secondary claim, ideally electronically from the 835.',
      'Keep coordination of benefits information current at registration.',
      'Review OA-23 lines in payment posting rather than writing them off automatically.',
    ],
    faqs: [
      { question: 'What does denial code 23 mean?', answer: 'CARC 23 means the impact of prior payer adjudication, including payments and adjustments. The secondary payer reduced its payment because of what the primary payer already paid or adjusted.' },
      { question: 'Why is code 23 reported as OA instead of CO?', answer: 'X12 instructs payers to use CARC 23 only with group code OA (Other Adjustment). Many people still search for it as CO-23.' },
      { question: 'Is OA-23 a denial?', answer: 'Usually not. It is a normal adjustment on a secondary claim. Check that it matches the primary remittance before posting it.' },
      { question: 'Can I bill the patient for an OA-23 adjustment?', answer: 'Not for the adjustment itself. Bill only the remaining patient responsibility (deductible, coinsurance or copay) that the payers report.' },
    ],
    relatedCodes: ['co-22', 'co-45', 'pr-2'],
  },
]

/** Codes summarised on the hub that do not have their own page yet. */
export const otherCodes: { code: string; meaning: string }[] = [
  { code: 'CO-198', meaning: 'Precertification/notification/authorization/pre-treatment exceeded.' },
  { code: 'CO-216', meaning: 'Based on the findings of a review organization.' },
  { code: 'CO-253', meaning: 'Sequestration: reduction in federal payment.' },
]

export const DENIAL_HUB_PATH = '/denial-codes'

/**
 * Per-code example scenario (illustrative, not a client case) and the
 * specialty pages where the code is common (internal-link map, plan 24 Nov).
 */
export const denialCodeExtras: Record<string, { example: string; specialties: { label: string; path: string }[]; guide?: { label: string; path: string } }> = {
  'co-23': {
    example: 'An allowed amount of $200 is paid $160 by the primary plan, with $40 left as coinsurance. The secondary plan pays $40 and adjusts the rest with OA-23. The biller matches both remittances, posts the OA-23 adjustment, and the patient owes nothing.',
    specialties: [{ label: 'Internal medicine billing', path: '/specialties/internal-medicine' }, { label: 'Cardiology billing', path: '/specialties/cardiology' }],
  },
  'co-27': {
    example: 'A patient changed jobs in March and kept using the old card. An April visit is denied CO-27. An eligibility check for the date of service shows a new plan effective April 1, so the practice updates the registration and bills the new plan.',
    specialties: [{ label: 'Internal medicine billing', path: '/specialties/internal-medicine' }, { label: 'Pediatric billing', path: '/specialties/pediatrics' }],
  },
  'co-119': {
    example: 'A patient\u2019s plan covers 20 physical therapy visits a year. Visit 21 is denied PR-119. The practice confirms the count in the portal, bills the patient under the signed financial policy, and from now on checks remaining visits when a plan of care is set up.',
    specialties: [{ label: 'Mental health billing', path: '/specialties/mental-health-counseling' }, { label: 'Orthopedic billing', path: '/specialties/orthopedics' }],
  },
  'co-16': {
    example: 'A secondary claim is sent to the second insurer without the primary payer\'s payment information. The remittance shows CO-16 with remark MA04. The biller adds the primary remittance data to the claim and resubmits, and the secondary pays.',
    specialties: [{ label: 'Internal medicine billing', path: '/specialties/internal-medicine' }, { label: 'Radiology billing', path: '/specialties/radiology' }],
  },
  'co-97': {
    example: 'A patient gets a knee injection and an office visit on the same day, and the visit line is denied CO-97. The note documents a separate problem that was evaluated and managed. The biller adds modifier 25 to the visit and sends a corrected claim.',
    specialties: [{ label: 'Orthopedic billing', path: '/specialties/orthopedics' }, { label: 'Pain management billing', path: '/specialties/pain-management' }],
  },
  'co-45': {
    example: 'A practice bills $250 for an office visit and the payer allows $142, adjusting $108 with CO-45. The biller posts $108 as a contractual write-off and checks that $142 matches the contracted rate for that code.',
    specialties: [{ label: 'Dermatology billing', path: '/specialties/dermatology' }, { label: 'Internal medicine billing', path: '/specialties/internal-medicine' }],
  },
  'pr-1': {
    example: 'In January, a patient with a high-deductible plan has an MRI read. The payer allows the professional fee and applies all of it to the deductible as PR-1. The practice bills the patient, after confirming there is no secondary coverage.',
    specialties: [{ label: 'Radiology billing', path: '/specialties/radiology' }, { label: 'Dermatology billing', path: '/specialties/dermatology' }],
  },
  'co-4': {
    example: 'A radiologist reads a CT scan performed on hospital equipment, but the claim goes out without modifier 26. The line is denied CO-4. The biller adds modifier 26 and sends a corrected claim for the professional component only.',
    specialties: [{ label: 'Radiology billing', path: '/specialties/radiology' }, { label: 'Orthopedic billing', path: '/specialties/orthopedics' }],
  },
  'co-11': {
    example: 'A urine drug screen is billed with a diagnosis for low back pain only, and the payer denies it CO-11 because its policy requires a monitoring diagnosis. The record documents long-term opioid therapy, so the biller adds the supported diagnosis and resubmits.',
    specialties: [{ label: 'Pain management billing', path: '/specialties/pain-management' }, { label: 'Psychiatry billing', path: '/specialties/psychiatry' }],
  },
  'co-18': {
    example: 'A claim shows "pending" in the portal, so a staff member sends it again. The second claim comes back OA-18. The biller confirms the first claim is processing, closes the duplicate and adds a rule to check status before resubmitting.',
    specialties: [{ label: 'Internal medicine billing', path: '/specialties/internal-medicine' }, { label: 'Mental health billing', path: '/specialties/mental-health-counseling' }],
  },
  'co-22': {
    example: 'A 67-year-old patient who still works is billed to Medicare first, and Medicare denies with CO-22 because the employer plan is primary. The front desk completes the Medicare Secondary Payer questionnaire, the claim goes to the employer plan, and Medicare is billed second.',
    specialties: [{ label: 'Orthopedic billing', path: '/specialties/orthopedics' }, { label: 'Cardiology billing', path: '/specialties/cardiology' }],
  },
  'co-29': {
    example: 'A batch of claims was rejected at the clearinghouse and never corrected, and months later the payer denies them CO-29. There is no acceptance report inside the filing limit, so the claims are written off and rejections are now worked every day.',
    specialties: [{ label: 'Mental health billing', path: '/specialties/mental-health-counseling' }, { label: 'Gastroenterology billing', path: '/specialties/gastroenterology' }],
  },
  'co-50': {
    example: 'A repeat epidural steroid injection is denied CO-50 because the coverage policy requires documented relief from the earlier injection. The note does document the relief and the functional improvement, so the practice appeals with that record and the policy criteria.',
    specialties: [{ label: 'Pain management billing', path: '/specialties/pain-management' }, { label: 'Dermatology billing', path: '/specialties/dermatology' }],
  },
  'co-109': {
    example: 'A patient switched from Original Medicare to a Medicare Advantage plan in January, but the visit is billed to Medicare and denied CO-109. An eligibility check shows the new plan, so the claim is sent to the Medicare Advantage plan within its filing limit.',
    specialties: [{ label: 'Internal medicine billing', path: '/specialties/internal-medicine' }, { label: 'Orthopedic billing', path: '/specialties/orthopedics' }],
  },
  'co-197': {
    example: 'An MRI is scheduled without checking the payer\'s authorization list, and the claim is denied CO-197. The payer does not allow retro-authorization for this service, so the practice adds an authorization check at scheduling for all advanced imaging.',
    specialties: [{ label: 'Radiology billing', path: '/specialties/radiology' }, { label: 'Rheumatology billing', path: '/specialties/rheumatology' }],
    guide: { label: 'prior authorization in medical billing', path: '/blog/what-is-authorization-in-medical-billing' },
  },
  'pr-2': {
    example: 'After the deductible is met, a Medicare patient has an office visit. Medicare pays its share and reports the remaining 20% of the approved amount as PR-2. The claim crosses over to the patient\'s Medigap plan, which pays the coinsurance, so no statement goes to the patient.',
    specialties: [{ label: 'Cardiology billing', path: '/specialties/cardiology' }, { label: 'Hematology and oncology billing', path: '/specialties/hematology-oncology' }],
  },
  'pr-3': {
    example: 'A patient with a $40 specialist copay checks in for a follow-up visit and pays the copay at the front desk. The remittance shows $40 as PR-3. The biller applies the payment collected at check-in, so the visit balance is zero.',
    specialties: [{ label: 'Dermatology billing', path: '/specialties/dermatology' }, { label: 'Allergy and immunology billing', path: '/specialties/allergy-immunology' }],
  },
  'co-24': {
    example: 'A primary care practice is paid a monthly capitation amount for its HMO members. It submits a claim for a routine visit, and the line is adjusted to zero with CO-24. The biller confirms the visit is included in the capitation and posts the adjustment, while the claim still counts as encounter data.',
    specialties: [{ label: 'Internal medicine billing', path: '/specialties/internal-medicine' }, { label: 'Pediatrics billing', path: '/specialties/pediatrics' }],
  },
  'co-59': {
    example: 'A surgeon performs two procedures in the same session. The payer pays the higher-valued procedure in full and reduces the second, reporting the reduction with CO-59. The biller checks the fee-schedule indicators, confirms the ranking is correct and posts the reduction as contractual.',
    specialties: [{ label: 'General surgery billing', path: '/specialties/general-surgery' }, { label: 'Anesthesiology billing', path: '/specialties/anesthesiology' }],
  },
  'co-96': {
    example: 'A patient asks for a cosmetic procedure, and the claim is denied CO-96 with remark N130 because the plan excludes cosmetic services. The practice had not collected a signed waiver, so the line is written off, and the practice now gets a signed financial agreement before elective cosmetic work.',
    specialties: [{ label: 'Plastic surgery billing', path: '/specialties/plastic-surgery' }, { label: 'Dermatology billing', path: '/specialties/dermatology' }],
  },
  'co-151': {
    example: 'An infusion clinic bills a drug in milligrams instead of the HCPCS billing unit, so the units on the claim are far above the limit and the line is denied CO-151. The biller converts the dose to the correct units and sends a corrected claim.',
    specialties: [{ label: 'Hematology and oncology billing', path: '/specialties/hematology-oncology' }, { label: 'Rheumatology billing', path: '/specialties/rheumatology' }],
  },
  'co-252': {
    example: 'A surgeon bills an unlisted procedure code, and the payer denies it CO-252 with remark M127. The biller uploads the operative report and a short description of the procedure through the payer portal with the claim number, and the claim is reprocessed.',
    specialties: [{ label: 'General surgery billing', path: '/specialties/general-surgery' }, { label: 'Gastroenterology billing', path: '/specialties/gastroenterology' }],
  },
}
