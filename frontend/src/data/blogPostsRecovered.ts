// Articles restored at (or redirected from) URLs that ranked on the previous
// site before it was rebuilt. Search Console (Jul 2025 to Jun 2026) showed these
// topics earning most of the site's clicks and impressions; the old pages were
// lost in the migration and returned 404. Content is newly written and
// targets the queries Search Console recorded for each URL.
import type { BlogPost } from './blogPosts'

const X12_CARC = { label: 'X12: Claim Adjustment Reason Codes (CARC)', url: 'https://x12.org/codes/claim-adjustment-reason-codes' }
const X12_RARC = { label: 'X12: Remittance Advice Remark Codes (RARC)', url: 'https://x12.org/codes/remittance-advice-remark-codes' }
const CMS_CLAIMS_MANUAL = { label: 'CMS: Medicare Claims Processing Manual (Pub. 100-04)', url: 'https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms-items/cms018912' }

export const recoveredPosts: BlogPost[] = [
  {
    // Old URL kept exactly (it ranked at about position 7 for its main query).
    slug: 'can-an-health-insurance-company-reverse-a-paid-claim',
    datePublished: '2026-11-19',
    category: 'Denial management',
    title: 'Can a Health Insurance Company Reverse a Paid Claim?',
    seoTitle: 'Can an Insurance Company Reverse a Paid Claim? (Yes)',
    seoDescription:
      'Yes, insurers can reverse a paid claim and take the money back. Common reasons, how reversals show on the ERA, time limits and how to respond.',
    excerpt:
      'Insurers can and do take back payments after a claim is paid. Why it happens, how to spot it on the remittance, and what to do next.',
    intro: [
      'Short answer: yes. A health insurance company can reverse a claim it has already paid and recover the money, usually by deducting it from future payments to the provider. This is called a claim reversal, retroactive denial or payment takeback.',
      'Reversals are legal when the payer finds the original payment was wrong, but they are not unlimited: contracts, state laws and Medicare rules set time limits and notice requirements. Here is why they happen and how a practice should handle them.',
    ],
    sections: [
      {
        heading: 'Why insurers reverse paid claims',
        bullets: [
          'Retroactive eligibility: the patient\'s coverage was terminated back to a date before the service (for example, unpaid premiums or a job change reported late).',
          'Coordination of benefits: the payer learns another plan was primary on the date of service.',
          'Duplicate payment: the same service was paid twice, often after a corrected claim was processed as a new claim.',
          'Post-payment audit or review: documentation did not support the code, level of service or medical necessity.',
          'Contract or fee schedule errors: the claim was paid at the wrong rate and is reprocessed.',
          'Provider-initiated corrections: the practice submitted a void or replacement claim, so the original payment is reversed and the claim reprocessed.',
        ],
      },
      {
        heading: 'How a reversal shows up on the ERA / EOB',
        paragraphs: [
          'On an electronic remittance (835), a reversed claim typically appears with claim status code 22 ("reversal of previous payment") and negative amounts that cancel the original payment. If the claim is reprocessed, a new line with the corrected payment usually follows.',
          'When the payer recovers the money from a later check rather than requesting a refund, the deduction appears as a provider-level adjustment (PLB segment), commonly with adjustment reason WO (overpayment recovery). Payment posters need to match that deduction to the original claim; otherwise the patient account and A/R reports become wrong.',
        ],
      },
      {
        heading: 'How far back can an insurer recoup a payment?',
        paragraphs: [
          'It depends on the payer and the state. Many states limit how long commercial insurers have to recoup an overpayment from a provider (frequently 12 to 24 months after payment), with exceptions for fraud. Your participation agreement may set a shorter window.',
          'Medicare follows federal overpayment rules. When Medicare identifies an overpayment it issues a demand letter, and if the debt is not repaid or appealed in time, it recovers the amount by offsetting future payments. Separately, providers who identify an overpayment themselves must report and return it within the time limits CMS sets.',
        ],
      },
      {
        heading: 'What to do when a paid claim is reversed',
        bullets: [
          'Read the reason codes (CARC and RARC) on the reversal line before acting.',
          'Check eligibility history and coordination of benefits for the date of service; if another plan was primary, bill it promptly.',
          'If the reversal is wrong, appeal within the payer\'s deadline with documentation (eligibility verification, medical records, contract rates).',
          'If it is correct, post the takeback against the original claim and decide whether the balance becomes patient responsibility under the payer contract.',
          'Track reversals by payer and reason monthly; a pattern usually points to a front-desk or coding process that needs fixing.',
        ],
      },
      {
        heading: 'How to prevent claim reversals',
        bullets: [
          'Verify eligibility and coordination of benefits at every visit, not only at registration.',
          'Use corrected (frequency 7) or void (frequency 8) claims instead of resubmitting a new claim, which can create duplicate payments.',
          'Audit high-risk codes and E/M levels against documentation before payers do.',
          'Reconcile every payment to the contract rate so underpayments and overpayments are caught early.',
        ],
      },
    ],
    faqs: [
      { question: 'Can an insurance company take back money after paying a claim?', answer: 'Yes. If the payer determines the payment was made in error, for example because coverage had ended or another plan was primary, it can reverse the claim and recover the payment, usually by offsetting future payments to the provider.' },
      { question: 'What does claim status code 22 mean on an ERA?', answer: 'Claim status code 22 means "reversal of previous payment". The payer is cancelling a payment it made earlier on that claim, and a corrected payment line may follow if the claim is reprocessed.' },
      { question: 'Do patients have to pay when a claim is reversed?', answer: 'Sometimes. If coverage was terminated retroactively, the patient may become responsible. If the reversal is due to a payer or provider error, the provider contract often prevents billing the patient. Check the reason codes and the contract before billing.' },
      { question: 'Can a claim reversal be appealed?', answer: 'Yes. If the payer reversed the claim incorrectly, file an appeal within the payer\'s deadline with supporting documentation such as eligibility verification and medical records.' },
    ],
    closing: [
      'Reversals are a normal part of payer reconciliation, but unexplained takebacks quietly drain revenue. Posting them accurately and appealing the wrong ones protects your collections.',
      'Alpha Medi Assist posts every ERA, matches takebacks to the original claims and appeals incorrect reversals as part of our payment posting and denial management services.',
    ],
    related: [
      { label: 'Payment posting services', path: '/medical-payment-posting-services' },
      { label: 'Reversal vs. recoupment explained', path: '/blog/difference-between-reversal-and-recoupment-in-medical-billing' },
      { label: 'What is a void claim?', path: '/blog/what-is-void-claim-in-medical-billing' },
      { label: 'Revenue cycle management services', path: '/revenue-cycle-management-services' },
    ],
    references: [X12_CARC, X12_RARC, CMS_CLAIMS_MANUAL],
  },
  {
    slug: 'what-is-void-claim-in-medical-billing',
    datePublished: '2026-11-19',
    category: 'Claims',
    title: 'What Is a Void Claim in Medical Billing? (And When to Use One)',
    seoTitle: 'Void Claim in Medical Billing: Meaning & How to Void',
    seoDescription:
      'A void claim cancels a claim already sent to the payer. What voided means, void vs. corrected claims, frequency code 8, the ICN you need, and reasons.',
    excerpt:
      'Void claims cancel a previously submitted claim entirely. How they differ from corrected claims, and how to submit one correctly.',
    intro: [
      'Short answer: a void claim tells the insurance company to cancel a claim that was already submitted, as if it had never been billed. If the original claim was paid, the payer takes the payment back.',
      'A void is different from a corrected (replacement) claim, which changes details on a claim that should still be paid. Choosing the wrong one is a common cause of duplicate payments, takebacks and denials.',
    ],
    sections: [
      {
        heading: 'What "voided" means on a claim',
        paragraphs: [
          'When a claim is voided, the payer cancels the original claim record. Any payment made on it is reversed, and the claim is treated as not billed. "Claim voided" on a remittance means the payer has processed that cancellation.',
        ],
      },
      {
        heading: 'Void claim vs. corrected (replacement) claim',
        bullets: [
          'Void (claim frequency code 8): the entire claim should not have been billed. Examples: wrong patient, service not performed, billed to the wrong payer, or a duplicate claim.',
          'Corrected / replacement (claim frequency code 7): the claim is valid but something on it was wrong (a code, modifier, units, date or diagnosis). The replacement claim supersedes the original.',
          'Original claim: frequency code 1.',
        ],
      },
      {
        heading: 'How to submit a void claim',
        bullets: [
          'Find the payer\'s claim number for the original claim: called the ICN (internal control number), DCN (document control number) or payer claim control number, depending on the payer.',
          'On the CMS-1500 paper form, enter resubmission code 8 and the original reference number in Item 22.',
          'On an electronic 837P claim, set the claim frequency code to 8 and include the payer claim control number of the original claim.',
          'Submit the void with the same patient, provider and service details as the original so the payer can match it.',
          'Watch the next remittance for the void and any takeback, then post it against the original claim.',
        ],
      },
      {
        heading: 'What do ICN and DCN mean?',
        paragraphs: [
          'The ICN (internal control number) and DCN (document control number) are identifiers the payer assigns to each claim it receives. Medicare and many Medicaid programs use these terms; commercial payers often just say "claim number". You need this number to void or replace a claim, because it tells the payer exactly which claim to cancel or correct.',
        ],
      },
      {
        heading: 'Common reasons to void a claim',
        bullets: [
          'The claim was sent to the wrong insurance company or the wrong patient',
          'The service was billed but not performed, or billed twice',
          'The claim was submitted under the wrong provider or billing entity',
          'A payer instructs you to void and resubmit instead of correcting',
        ],
      },
    ],
    faqs: [
      { question: 'What does void claim mean in medical billing?', answer: 'A void claim cancels a previously submitted claim entirely. The payer reverses any payment made on it and treats the claim as never billed.' },
      { question: 'What is the claim frequency code for a void?', answer: 'Frequency code 8 means void or cancel a prior claim. Code 7 is a replacement (corrected) claim, and code 1 is an original claim.' },
      { question: 'Should I void a claim or send a corrected claim?', answer: 'Send a corrected (replacement) claim when the service should still be paid but details were wrong. Void only when the whole claim should not have been billed.' },
      { question: 'What does DCN stand for in medical billing?', answer: 'DCN stands for document control number, the identifier a payer assigns to a claim. Along with the ICN (internal control number), it is used to reference the original claim when voiding or correcting it.' },
    ],
    closing: [
      'Voids and corrections look like small clerical steps, but used incorrectly they create duplicate payments, takebacks and denials that take months to untangle.',
      'Alpha Medi Assist handles corrected claims, voids and follow-up as part of full-service billing.',
    ],
    related: [
      { label: 'Outsourced medical billing services', path: '/medical-billing-services' },
      { label: 'Can an insurer reverse a paid claim?', path: '/blog/can-an-health-insurance-company-reverse-a-paid-claim' },
      { label: 'Common denial codes and fixes', path: '/blog/common-claim-denial-codes-and-how-to-fix-them' },
    ],
    references: [CMS_CLAIMS_MANUAL, X12_CARC],
  },
  {
    slug: 'difference-between-reversal-and-recoupment-in-medical-billing',
    datePublished: '2026-11-19',
    category: 'Payment posting',
    title: 'Reversal vs. Recoupment in Medical Billing: What\'s the Difference?',
    seoTitle: 'Reversal vs. Recoupment in Medical Billing: Meaning',
    seoDescription:
      'A reversal cancels a prior claim payment; a recoupment is how the payer recovers the money, often by offsetting future payments. How to spot and post each.',
    excerpt:
      'Reversals, recoupments and offsets are related but not the same. A practical explanation for billers and practice managers.',
    intro: [
      'Short answer: a reversal is the payer cancelling a payment it made on a specific claim. A recoupment is the payer recovering that money, usually by deducting (offsetting) it from a future payment to the provider rather than asking for a refund check.',
      'They often happen together: the claim is reversed, and the resulting overpayment is recouped from a later remittance. Posting them correctly is essential for accurate A/R.',
    ],
    sections: [
      {
        heading: 'What is a reversal?',
        paragraphs: [
          'A reversal is claim-level. The payer cancels its previous payment on a claim (on an 835 remittance, claim status code 22, "reversal of previous payment", with negative amounts). It is often followed by a reprocessed line with the corrected payment, so the net effect may be a partial takeback.',
        ],
      },
      {
        heading: 'What is a recoupment?',
        paragraphs: [
          'A recoupment is the recovery of an overpayment. Instead of waiting for a refund, the payer withholds the amount from a future payment, sometimes on an unrelated patient\'s claim. On the remittance this usually appears as a provider-level adjustment (PLB segment), often with adjustment reason WO (overpayment recovery), which reduces the check total.',
        ],
      },
      {
        heading: 'What is an offset?',
        paragraphs: [
          'An offset is the mechanism of a recoupment: one amount owed is subtracted from another. "Offset" and "recoupment" are often used interchangeably on payer notices.',
        ],
      },
      {
        heading: 'Reversal vs. recoupment at a glance',
        bullets: [
          'Level: a reversal applies to a specific claim; a recoupment usually applies to the provider\'s payment as a whole.',
          'Where it appears: reversals as claim lines with status 22; recoupments as provider-level adjustments that lower the check.',
          'Timing: the reversal is posted when the payer reprocesses the claim; the recoupment can happen weeks later on a different remittance.',
          'Refund vs. offset: the payer may also request a refund check instead of recouping.',
        ],
      },
      {
        heading: 'How to post reversals and recoupments correctly',
        bullets: [
          'Post the reversal against the original claim so that claim\'s balance reopens.',
          'When the recoupment appears, link it to the overpaid claim, not to the claim it was deducted from.',
          'Keep a recoupment log with payer reference numbers so takebacks can be verified and, if wrong, appealed.',
          'Watch for double recovery, where a payer recoups an amount you already refunded by check.',
        ],
      },
    ],
    faqs: [
      { question: 'What is the difference between reversal and recoupment?', answer: 'A reversal cancels a payment on a specific claim. A recoupment is how the payer collects the resulting overpayment, typically by deducting it from a future payment.' },
      { question: 'What does recoupment mean in medical billing?', answer: 'Recoupment means the payer recovers an overpayment by withholding money from future payments to the provider instead of requesting a refund check.' },
      { question: 'What is the difference between an offset and a refund?', answer: 'With a refund, the provider sends the overpaid amount back to the payer. With an offset, the payer deducts the amount from a future payment automatically.' },
    ],
    closing: [
      'Unmatched recoupments are one of the most common reasons practice A/R reports drift from reality. Accurate posting keeps balances, patient statements and denial reports trustworthy.',
      'Alpha Medi Assist\'s payment posting team reconciles every reversal and recoupment to the original claim.',
    ],
    related: [
      { label: 'Medical payment posting services', path: '/medical-payment-posting-services' },
      { label: 'Can an insurer reverse a paid claim?', path: '/blog/can-an-health-insurance-company-reverse-a-paid-claim' },
      { label: 'Revenue cycle management services', path: '/revenue-cycle-management-services' },
    ],
    references: [X12_CARC, X12_RARC],
  },
  {
    // Replaces /uncategorized/rendering-and-referring-providers-... (301 redirect).
    slug: 'rendering-vs-referring-provider',
    datePublished: '2026-11-19',
    category: 'Claims',
    title: 'Rendering vs. Referring Provider: What\'s the Difference in Billing?',
    seoTitle: 'Rendering vs. Referring Provider: Meaning in Billing',
    seoDescription:
      'The rendering provider performed the service; the referring provider sent the patient. Where each goes on the CMS-1500 and 837P, and common errors.',
    excerpt:
      'Who is the rendering, referring, ordering and billing provider on a claim, and where each NPI goes.',
    intro: [
      'Short answer: the rendering provider is the clinician who actually performed the service. The referring provider is the clinician who sent the patient for that service. Both are identified by NPI on the claim, in different fields.',
      'Mixing them up, or leaving out a required referring or ordering provider, is a common reason claims are rejected or denied.',
    ],
    sections: [
      {
        heading: 'The provider roles on a claim',
        bullets: [
          'Rendering provider: the individual who performed the service (physician, NP, PA, therapist).',
          'Referring provider: the provider who referred the patient to the rendering provider.',
          'Ordering provider: the provider who ordered a service such as lab work, imaging or durable medical equipment.',
          'Supervising provider: the physician supervising a service performed by someone else, when required.',
          'Billing provider: the entity that bills and is paid for the claim, often a group practice with its own NPI.',
        ],
      },
      {
        heading: 'Where each NPI goes',
        bullets: [
          'CMS-1500 Item 17 / 17b: referring, ordering or supervising provider name and NPI, with qualifier DN (referring), DK (ordering) or DQ (supervising).',
          'CMS-1500 Item 24J: rendering provider NPI for each service line.',
          'CMS-1500 Item 33 / 33a: billing provider name, address and NPI.',
          'Electronic 837P: billing provider (loop 2010AA), referring provider (loop 2310A) and rendering provider (loop 2310B, or 2420A at line level).',
        ],
      },
      {
        heading: 'Common errors that cause denials',
        bullets: [
          'Rendering provider not credentialed or enrolled with the payer.',
          'Required referring or ordering provider missing, especially for lab, imaging, DME and specialist visits that require a referral.',
          'For Medicare, the ordering or referring provider must be enrolled in Medicare (PECOS) for services that require one.',
          'Group NPI entered as the rendering provider instead of the individual clinician\'s NPI.',
          'Referral or authorization on file under a different provider than the one billed.',
        ],
      },
    ],
    faqs: [
      { question: 'What does rendering provider mean in medical billing?', answer: 'The rendering provider is the individual clinician who performed the service. Their NPI goes in Item 24J of the CMS-1500 (or the rendering provider loop on an 837P claim).' },
      { question: 'What is a referring provider?', answer: 'The referring provider is the clinician who sent the patient to another provider for care. Their name and NPI go in Item 17 and 17b of the CMS-1500 with qualifier DN.' },
      { question: 'Can the rendering and billing provider be the same?', answer: 'Yes. A solo provider billing under their own NPI can be both. In a group practice, the billing provider is usually the group NPI and the rendering provider is the individual clinician.' },
    ],
    closing: [
      'Provider fields look simple but drive a large share of front-end rejections, especially in multi-provider groups.',
      'Alpha Medi Assist sets up provider enrollment, credentialing and claim rules so the right NPIs go on every claim.',
    ],
    related: [
      { label: 'Medical credentialing services', path: '/medical-credentialing-service' },
      { label: 'How long does credentialing take?', path: '/blog/how-long-does-medical-credentialing-take' },
      { label: 'Outsourced medical billing services', path: '/medical-billing-services' },
    ],
    references: [
      CMS_CLAIMS_MANUAL,
      { label: 'CMS: PECOS Medicare enrollment', url: 'https://pecos.cms.hhs.gov/' },
      { label: 'CMS: NPPES (NPI registry)', url: 'https://nppes.cms.hhs.gov/' },
    ],
  },
]
