// Coding-modifier articles from the content backlog (12-hour monitor runs).
// Rules described are the published CPT descriptor and CMS/NCCI policy; payer-specific
// payment reductions vary and are described generally, with no invented figures.
import type { BlogPost } from './blogPosts'

const AMA_CPT = { label: 'AMA: CPT (Current Procedural Terminology)', url: 'https://www.ama-assn.org/practice-management/cpt' }
const CMS_NCCI = { label: 'CMS: National Correct Coding Initiative (NCCI) edits', url: 'https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci-edits' }
const CMS_CLM12 = { label: 'CMS: Medicare Claims Processing Manual, Chapter 12 (Physicians/Nonphysician Practitioners)', url: 'https://www.cms.gov/regulations-and-guidance/guidance/manuals/downloads/clm104c12.pdf' }
const X12_CARC = { label: 'X12: Claim Adjustment Reason Codes (CARC)', url: 'https://x12.org/codes/claim-adjustment-reason-codes' }

export const codingPosts: BlogPost[] = [
  {
    slug: 'modifier-25-in-medical-billing',
    category: 'Coding',
    datePublished: '2026-11-28',
    title: 'Modifier 25 in Medical Billing: When It Applies and Why It Gets Denied',
    seoTitle: 'Modifier 25 in Medical Billing: When to Use It, Denials',
    seoDescription:
      'Modifier 25 explained: when an E/M visit is separately billable on the same day as a procedure, documentation rules, and how to fix CO-4 and CO-97 denials.',
    excerpt:
      'When an E/M visit on the same day as a procedure can be billed with modifier 25, what the note must show, and how to fix the denials it causes.',
    intro: [
      'Short answer: modifier 25 is added to an evaluation and management (E/M) code to show that the provider performed a significant, separately identifiable E/M service on the same day as a procedure or other service. It tells the payer the visit went beyond the usual work that is already included in the procedure, so both can be paid.',
      'Modifier 25 is one of the most used and most audited modifiers. Used correctly, it gets a practice paid for real work. Used on every visit with a procedure, it leads to denials, payment recoupments and audit risk. This guide explains when it applies, what the documentation must show, and how to fix the denials it causes.',
    ],
    sections: [
      {
        heading: 'What modifier 25 means',
        paragraphs: [
          'The CPT descriptor is: "Significant, separately identifiable evaluation and management service by the same physician or other qualified health care professional on the same day of the procedure or other service." Three parts of that sentence matter on every claim:',
        ],
        bullets: [
          'Significant: the E/M is more than the brief assessment that comes with any procedure, such as checking the site and confirming consent.',
          'Separately identifiable: the record shows E/M work that stands on its own, distinct from the procedure note.',
          'Same provider, same day: modifier 25 applies when the same physician or qualified health care professional (or the same group and specialty, under Medicare rules) performs the E/M and the procedure on the same date.',
        ],
      },
      {
        heading: 'Why payers bundle the E/M into the procedure',
        paragraphs: [
          'Every procedure includes some evaluation work. Under Medicare global surgery rules, minor procedures (0 or 10 global days) and endoscopies include the routine evaluation done right before the procedure, including the decision to perform it. Payer claim edits, such as the NCCI procedure-to-procedure edits CMS publishes, therefore bundle an E/M billed on the same day as many procedures. Without modifier 25, the E/M is denied as included in the procedure.',
          'Modifier 25 is the signal that the E/M was not part of that included work. It does not guarantee payment: the documentation still has to support a separate service if the claim is reviewed.',
        ],
      },
      {
        heading: 'When to use modifier 25',
        bullets: [
          'A patient is seen for one problem and the provider also performs a minor procedure for another, for example, a visit to manage diabetes and hypertension during which a suspicious skin lesion is biopsied.',
          'A patient comes in with a new complaint and the provider performs a full evaluation (history, exam, medical decision making) beyond what is needed to decide on the procedure, then performs a minor procedure the same day.',
          'A preventive visit and a problem-oriented visit happen at the same encounter: bill the preventive code and add modifier 25 to the problem-oriented E/M (99202 to 99215) when the problem needed significant extra work.',
          'An E/M is performed on the same day as another service that payer edits bundle with E/M, such as some injections or immunization administration, and the E/M was significant and separate from that service.',
        ],
      },
      {
        heading: 'When not to use modifier 25',
        bullets: [
          'On a procedure code. Modifier 25 belongs only on E/M codes. Putting it on a procedure code is a common cause of CO-4 denials.',
          'When the visit was only to decide on, or perform, a scheduled minor procedure. A patient who returns for a planned injection has no separate E/M.',
          'When the decision for major surgery (90 global days) is made the day before or the day of surgery. That E/M uses modifier 57 (decision for surgery), not 25.',
          'For a separate, non-E/M procedure that is bundled with another procedure. That situation calls for modifier 59 or an X modifier (XE, XS, XP, XU), never modifier 25.',
          'Automatically on every E/M billed with a procedure. Payers watch modifier 25 rates by provider, and a rate far above peers is a common audit trigger.',
        ],
      },
      {
        heading: 'Does the diagnosis have to be different?',
        paragraphs: [
          'No. CPT states that the E/M service may be prompted by the same symptom or condition for which the procedure was provided, so different diagnosis codes are not required. What is required is E/M work that goes beyond the procedure\'s included pre- and post-procedure care.',
          'In practice, a separate diagnosis on the E/M line makes the separate service easier to see and to defend, and some commercial payers apply their own, stricter policies. Check the payer\'s modifier policy, and do not add a diagnosis that was not addressed just to support the modifier.',
        ],
      },
      {
        heading: 'What the documentation must show',
        bullets: [
          'A clear reason for the E/M: the complaint, problem or condition evaluated beyond the procedure.',
          'The E/M work itself: the relevant history and exam and, under current E/M guidelines, the medical decision making or total time that supports the level billed.',
          'A procedure note that is separate from, or clearly distinguishable within, the visit note.',
          'Time spent on the procedure must not be counted toward a time-based E/M level.',
          'A level of E/M that is supported by the separate work only, not by the work of the procedure.',
        ],
      },
      {
        heading: 'Denials related to modifier 25',
        paragraphs: [
          'Modifier 25 problems show up on the remittance under a handful of claim adjustment reason codes:',
        ],
        bullets: [
          'CO-97: the E/M is included in the payment for the procedure. Usually means modifier 25 was missing, or the payer did not accept it for that code pair.',
          'CO-4: the procedure code is inconsistent with the modifier used, or a required modifier is missing. Often modifier 25 was placed on the procedure instead of the E/M.',
          'CO-16 with a remark code: information needed to process the claim, such as a required modifier, is missing or invalid.',
          'CO-50 or a medical record review denial: the payer reviewed the note and did not find a separately identifiable service.',
        ],
      },
      {
        heading: 'How to fix a modifier 25 denial',
        bullets: [
          'Read the CARC and RARC on the remittance to see whether the payer bundled the E/M, rejected the modifier placement or questioned the documentation.',
          'Review the note: is there E/M work beyond the procedure\'s included evaluation? If not, the denial is correct and the E/M should be written off, not rebilled.',
          'If the modifier was missing or on the wrong line, send a corrected claim (frequency code 7) with modifier 25 on the E/M line only.',
          'If the modifier was correct and the payer still bundled the E/M, appeal with the visit note, the procedure note and a short summary of the separate problem addressed.',
          'Fix the cause: update charge capture rules, train providers on what makes an E/M separate, and review modifier 25 use by provider every quarter.',
        ],
      },
      {
        heading: 'Example',
        paragraphs: [
          'Illustrative example, not a specific client case: an established patient comes in for follow-up of hypertension and type 2 diabetes. The provider reviews home readings and lab results, adjusts medication and orders new labs. During the exam the patient asks about a growing lesion on the arm, and the provider performs a shave removal the same day. The claim lists 99214-25 (supported by the chronic-condition management, with the lesion work excluded) and the removal code. If the patient had come in only for the lesion removal, there would be no separate E/M to bill.',
        ],
      },
    ],
    faqs: [
      { question: 'What is modifier 25 in medical billing?', answer: 'Modifier 25 is a CPT modifier added to an E/M code to show that a significant, separately identifiable E/M service was performed by the same provider on the same day as a procedure or other service, so the visit can be paid in addition to the procedure.' },
      { question: 'Does modifier 25 go on the E/M code or the procedure code?', answer: 'Modifier 25 goes on the E/M code only, never on the procedure code. Placing it on the procedure is a common cause of CO-4 denials.' },
      { question: 'Do I need a different diagnosis to use modifier 25?', answer: 'No. CPT allows the E/M to be prompted by the same symptom or condition as the procedure. The note must still show E/M work beyond the procedure\'s included evaluation, and some payers apply stricter policies.' },
      { question: 'What is the difference between modifier 25 and modifier 57?', answer: 'Modifier 25 is used when a separate E/M is performed on the same day as a minor procedure or other service. Modifier 57 is used on an E/M that resulted in the decision to perform major surgery (90 global days) on the day of or the day before the surgery.' },
      { question: 'What is the difference between modifier 25 and modifier 59?', answer: 'Modifier 25 applies only to E/M codes. Modifier 59 and the X modifiers (XE, XS, XP, XU) apply to procedures and other non-E/M services to show they were distinct from another procedure on the same day. Modifier 59 should never be used on an E/M code.' },
      { question: 'Can modifier 25 be used with a preventive visit?', answer: 'Yes. When a problem-oriented E/M is significant and separately identifiable from a preventive visit at the same encounter, bill both and add modifier 25 to the problem-oriented E/M code.' },
    ],
    closing: [
      'Modifier 25 is a documentation question more than a coding question. When the note shows a separate, significant service, the modifier gets that work paid. When it does not, the modifier only adds denial and audit risk.',
      'Alpha Medi Assist coders review modifier use before claims go out and work CO-97 and CO-4 denials back to the cause, so the same error does not repeat.',
    ],
    related: [
      { label: 'CO-97: payment included in another service', path: '/denial-codes/co-97' },
      { label: 'CO-4: procedure code inconsistent with modifier', path: '/denial-codes/co-4' },
      { label: 'CO-16: claim lacks information', path: '/denial-codes/co-16' },
      { label: 'Medical coding services', path: '/medical-coding-services' },
      { label: 'Denial management services', path: '/denial-management-services' },
      { label: 'Denial codes: meanings and fixes', path: '/denial-codes' },
    ],
    references: [AMA_CPT, CMS_CLM12, CMS_NCCI, X12_CARC],
  },
]
