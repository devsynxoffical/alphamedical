// Coding-modifier articles from the content backlog (12-hour monitor runs).
// Rules described are the published CPT descriptor and CMS/NCCI policy; payer-specific
// payment reductions vary and are described generally, with no invented figures.
import type { BlogPost } from './blogPosts'

const AMA_CPT = { label: 'AMA: CPT (Current Procedural Terminology)', url: 'https://www.ama-assn.org/practice-management/cpt' }
const CMS_NCCI = { label: 'CMS: National Correct Coding Initiative (NCCI) edits', url: 'https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci-edits' }
const CMS_CLM12 = { label: 'CMS: Medicare Claims Processing Manual, Chapter 12 (Physicians/Nonphysician Practitioners)', url: 'https://www.cms.gov/regulations-and-guidance/guidance/manuals/downloads/clm104c12.pdf' }
const CMS_X_MODS = { label: 'CMS MLN Matters MM8863: Specific modifiers for distinct procedural services (X{EPSU})', url: 'https://www.cms.gov/outreach-and-education/medicare-learning-network-mln/mlnmattersarticles/downloads/mm8863.pdf' }
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
      { label: 'Modifier 59 vs. XE, XS, XP and XU', path: '/blog/modifier-59-vs-x-modifiers' },
      { label: 'CO-97: payment included in another service', path: '/denial-codes/co-97' },
      { label: 'CO-4: procedure code inconsistent with modifier', path: '/denial-codes/co-4' },
      { label: 'CO-16: claim lacks information', path: '/denial-codes/co-16' },
      { label: 'Medical coding services', path: '/medical-coding-services' },
      { label: 'Denial management services', path: '/denial-management-services' },
      { label: 'Denial codes: meanings and fixes', path: '/denial-codes' },
    ],
    references: [AMA_CPT, CMS_CLM12, CMS_NCCI, X12_CARC],
  },
  {
    slug: 'modifier-59-vs-x-modifiers',
    category: 'Coding',
    datePublished: '2026-11-28',
    title: 'Modifier 59 vs. XE, XS, XP and XU: When to Use Each and How to Avoid Denials',
    seoTitle: 'Modifier 59 vs. XE, XS, XP, XU: When to Use Each',
    seoDescription:
      'Modifier 59 and the X modifiers (XE, XS, XP, XU) explained: what each means, when NCCI edits allow them, examples, and how to fix CO-97 and CO-4 denials.',
    excerpt:
      'What modifier 59 and the four X modifiers mean, when an NCCI edit can be bypassed, which one to pick, and how to fix the denials they cause.',
    intro: [
      'Short answer: modifier 59 (distinct procedural service) tells the payer that two procedures that are normally bundled were truly separate on this date of service. The X modifiers, XE, XS, XP and XU, are more specific versions of modifier 59 that CMS introduced on January 1, 2015. Each one says why the service was separate: a separate encounter, a separate structure, a separate practitioner, or an unusual non-overlapping service.',
      'Modifier 59 is one of the most frequently used, and most frequently misused, modifiers in medical billing. Used correctly, it gets real, separate work paid. Used to push a bundled code through, it leads to denials, recoupments and audits. This guide explains each modifier, how they work with NCCI edits, and how to choose between them.',
    ],
    sections: [
      {
        heading: 'What modifier 59 means',
        paragraphs: [
          'Modifier 59 identifies a procedure or service, other than an E/M service, that is not normally reported together with another service on the same day but is appropriate under the circumstances. The CPT definition lists the situations that make a service distinct:',
        ],
        bullets: [
          'A different session or patient encounter.',
          'A different procedure or surgery.',
          'A different site or organ system.',
          'A separate incision or excision.',
          'A separate lesion.',
          'A separate injury (or area of injury in extensive injuries) not ordinarily encountered or performed on the same day by the same individual.',
        ],
      },
      {
        heading: 'The four X modifiers',
        paragraphs: [
          'CMS created the X{EPSU} modifiers because modifier 59 was too broad. Each one describes one specific reason a service was distinct:',
        ],
        bullets: [
          'XE (separate encounter): the service was distinct because it occurred during a separate encounter on the same date.',
          'XS (separate structure): the service was distinct because it was performed on a separate organ or structure.',
          'XP (separate practitioner): the service was distinct because it was performed by a different practitioner.',
          'XU (unusual non-overlapping service): the service was distinct because it does not overlap the usual components of the main service.',
        ],
      },
      {
        heading: 'Modifier 59 or an X modifier: which one to use',
        bullets: [
          'Use the X modifier that describes the situation when the payer accepts X modifiers. CMS describes the X modifiers as more selective versions of 59 and states that 59 should not be used when a more descriptive modifier is available.',
          'Use an X modifier instead of 59, not together with it. Reporting 59 and an X modifier on the same line is redundant.',
          'Medicare accepts either 59 or the matching X modifier on most NCCI edits. Some Medicare contractors and commercial payers require an X modifier for specific code pairs, and some commercial payers do not recognize X modifiers at all. Check each payer\'s modifier policy.',
          'Use a more specific modifier when one exists: anatomic modifiers (RT, LT, F1 to FA, TA to T9, E1 to E4, LC, LD, RC and others) for different sides, digits or vessels, and modifier 91 for repeat clinical lab tests. These are preferred over 59 and the X modifiers.',
        ],
      },
      {
        heading: 'How modifier 59 works with NCCI edits',
        paragraphs: [
          'NCCI procedure-to-procedure (PTP) edits list pairs of codes that should not normally be billed together for the same patient on the same day by the same provider. Each pair has a column 1 code (usually the more comprehensive service) and a column 2 code. When both are billed, the column 2 code is denied unless an allowed modifier shows the services were separate. The modifier goes on the column 2 code.',
          'Every PTP edit has a modifier indicator:',
        ],
        bullets: [
          'Indicator 1: a modifier such as 59 or an X modifier may bypass the edit when the documentation supports it.',
          'Indicator 0: no modifier bypasses the edit. The column 2 code is never separately payable with the column 1 code on the same day. Adding 59 is incorrect.',
          'Indicator 9: the edit no longer applies (it was deleted).',
        ],
      },
      {
        heading: 'When not to use modifier 59',
        bullets: [
          'On an E/M code. A separately identifiable E/M on the same day as a procedure uses modifier 25, never 59.',
          'When the NCCI edit has a modifier indicator of 0.',
          'When the services were performed at the same session, on the same site, through the same incision, and the documentation does not show they were distinct.',
          'Only because a claim was denied CO-97. A bundling denial is not by itself evidence that the services were separate.',
          'When a more specific modifier describes the situation, such as RT/LT, a digit or eyelid modifier, or modifier 91.',
        ],
      },
      {
        heading: 'Examples',
        paragraphs: [
          'Illustrative examples, not specific client cases:',
        ],
        bullets: [
          'XS: a provider biopsies a lesion on the back and, in the same session, removes a separate lesion on the arm. The two codes form a PTP pair, but they were performed on separate structures. The column 2 code is reported with XS, and the note describes each lesion and its site.',
          'XE: a patient has a procedure in the morning and returns in the afternoon with a new problem that needs a procedure that normally bundles with the first. The second service is reported with XE, and the record shows two separate encounters with their times.',
          'Modifier 59 in physical therapy: two therapy codes that form a PTP edit are performed in separate, distinct time intervals by the same therapist. Where the payer allows it, modifier 59 (or XU, if the payer requires an X modifier) goes on the column 2 code, and the note shows the separate intervals.',
        ],
      },
      {
        heading: 'Denials related to modifier 59 and the X modifiers',
        bullets: [
          'CO-97: the column 2 service is included in the payment for the column 1 service. Usually means a needed modifier was missing, or the edit does not allow a modifier.',
          'CO-4: the procedure code is inconsistent with the modifier used, or a required modifier is missing. For example, an X modifier sent to a payer that does not accept it, or 59 sent where the payer requires an X modifier.',
          'CO-236: the procedure or modifier combination is not compatible with another procedure or modifier on the same date of service, under NCCI or payer rules.',
          'Medical record review denials: the payer reviewed the record and did not find a separate encounter, structure, practitioner or non-overlapping service.',
        ],
      },
      {
        heading: 'How to fix a modifier 59 or X modifier denial',
        bullets: [
          'Find the code pair in the current quarter\'s NCCI PTP table (or the payer\'s own edit list) and check the modifier indicator.',
          'If the indicator is 0, the denial is correct. Do not rebill with a modifier.',
          'If the indicator is 1 and the record shows a distinct service, send a corrected claim with the right modifier on the column 2 code. Pick the X modifier that matches the situation if the payer accepts X modifiers.',
          'If the payer denied a correctly modified line, appeal with the procedure notes that show the separate session, site, incision, lesion or practitioner.',
          'Fix the cause: add scrubber rules for each payer\'s modifier policy, and train providers to document the site, time and reason that make each service distinct.',
        ],
      },
    ],
    faqs: [
      { question: 'What is modifier 59 in medical billing?', answer: 'Modifier 59 (distinct procedural service) shows that a procedure normally bundled with another procedure on the same day was distinct, for example because it was done at a different session, on a different site or through a separate incision. It is never used on E/M codes.' },
      { question: 'What do the XE, XS, XP and XU modifiers mean?', answer: 'XE means a separate encounter, XS a separate organ or structure, XP a separate practitioner, and XU an unusual non-overlapping service. They are more specific subsets of modifier 59 that CMS introduced on January 1, 2015.' },
      { question: 'Should I use modifier 59 or an X modifier?', answer: 'Use the X modifier that describes the situation when the payer accepts X modifiers, because CMS says 59 should not be used when a more descriptive modifier is available. Use one or the other on a line, not both, and follow each payer\'s policy.' },
      { question: 'Does modifier 59 go on the column 1 or column 2 code?', answer: 'The modifier goes on the column 2 code of the NCCI procedure-to-procedure edit, which is the code that would otherwise be denied as bundled.' },
      { question: 'Can modifier 59 bypass every NCCI edit?', answer: 'No. Only edits with a modifier indicator of 1 can be bypassed with a modifier. When the indicator is 0, the two codes are never separately payable on the same day, with or without a modifier.' },
      { question: 'What is the difference between modifier 25 and modifier 59?', answer: 'Modifier 25 is used only on E/M codes to show a significant, separately identifiable visit on the same day as a procedure. Modifier 59 and the X modifiers are used on procedures and other non-E/M services.' },
    ],
    closing: [
      'Modifier 59 and the X modifiers are a way to report real, separate work, not a way to get around bundling edits. Check the edit, check the documentation, and pick the most specific modifier the payer accepts.',
      'Alpha Medi Assist coders check NCCI edits and payer modifier policies before claims go out, and work CO-97 and CO-4 denials back to the cause.',
    ],
    related: [
      { label: 'Modifier 25 in medical billing', path: '/blog/modifier-25-in-medical-billing' },
      { label: 'CO-97: payment included in another service', path: '/denial-codes/co-97' },
      { label: 'CO-4: procedure code inconsistent with modifier', path: '/denial-codes/co-4' },
      { label: 'Medical coding services', path: '/medical-coding-services' },
      { label: 'Denial management services', path: '/denial-management-services' },
      { label: 'Denial codes: meanings and fixes', path: '/denial-codes' },
    ],
    references: [AMA_CPT, CMS_NCCI, CMS_X_MODS, X12_CARC],
  },
]
