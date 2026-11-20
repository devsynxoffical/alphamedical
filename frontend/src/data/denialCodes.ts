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
    seoTitle: 'CO-4 Denial Code: Modifier Missing or Invalid (and How to Fix It)',
    seoDescription:
      'CO-4 means the procedure code is inconsistent with the modifier, or a required modifier is missing. Common causes (26/TC, laterality, 25, 59/X) and how to fix them.',
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
    seoTitle: 'CO-11 Denial Code: Diagnosis Inconsistent with Procedure (Fixes)',
    seoDescription:
      'CO-11 means the diagnosis does not match the procedure billed. Learn the common causes (pointers, specificity, coverage policies) and how to correct or appeal it.',
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
      'CO-18 or OA-18 means exact duplicate claim or service. Learn why duplicates happen, how to check the original claim, and when to send a corrected claim instead.',
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
    seoTitle: 'CO-22 Denial Code: Coordination of Benefits Explained (and Fixed)',
    seoDescription:
      'CO-22 means care may be covered by another payer (coordination of benefits). How to confirm which plan is primary, update COB, and rebill primary then secondary.',
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
]

/** Codes summarised on the hub that do not have their own page yet. */
export const otherCodes: { code: string; meaning: string }[] = [
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
