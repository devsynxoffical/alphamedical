// Second batch of articles restored at the exact URLs that ranked on the previous
// site before it was rebuilt (ICD-10 ADHD and anxiety codes, prior authorization,
// billing cycle steps). Search Console showed these pages earning impressions;
// they returned 404 after the migration. Content is newly written.
//
// ICD-10-CM codes are revised every October 1. The codes below were checked
// against the code set in effect from October 1, 2026 (FY2027). Re-check the
// CMS/CDC files after each annual update and bump dateModified.
import type { BlogPost } from './blogPosts'

const CDC_ICD10CM_GUIDELINES = {
  label: 'CDC/NCHS: ICD-10-CM Official Guidelines for Coding and Reporting, FY2027',
  url: 'https://ftp.cdc.gov/pub/Health_Statistics/NCHS/Publications/ICD10CM/2027/ICD-10-CM-October-1-2026-FY27-Guidelines.pdf',
}
const CMS_ICD10 = { label: 'CMS: ICD-10 code sets and annual updates', url: 'https://www.cms.gov/medicare/coding-billing/icd-10-codes' }
const X12_CARC = { label: 'X12: Claim Adjustment Reason Codes (CARC)', url: 'https://x12.org/codes/claim-adjustment-reason-codes' }
const X12_RARC = { label: 'X12: Remittance Advice Remark Codes (RARC)', url: 'https://x12.org/codes/remittance-advice-remark-codes' }
const CMS_CLAIMS_MANUAL = { label: 'CMS: Medicare Claims Processing Manual (Pub. 100-04)', url: 'https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms-items/cms018912' }

export const recoveredPosts2: BlogPost[] = [
  {
    // Old URL kept exactly (about 3.3k impressions on the previous site).
    slug: 'what-is-the-icd-10-code-for-adhd',
    datePublished: '2026-11-19',
    category: 'Coding',
    title: 'What Is the ICD-10 Code for ADHD? F90.0 to F90.9 Explained',
    dateModified: '2026-11-23',
    seoTitle: 'ADHD ICD-10 Codes: F90.0 Inattentive, F90.2 Combined, NOS',
    seoDescription:
      'ADHD ICD-10-CM codes: F90.0 inattentive, F90.1 hyperactive-impulsive, F90.2 combined, F90.8 other, F90.9 unspecified (ADHD NOS). Adult ADHD and denials.',
    excerpt:
      'The ADHD codes in ICD-10-CM category F90, how they map to DSM-5-TR presentations, and the documentation and claim errors that cause denials.',
    intro: [
      'Short answer: ADHD is coded in ICD-10-CM category F90 (attention-deficit hyperactivity disorders). Use F90.0 for predominantly inattentive type, F90.1 for predominantly hyperactive type, F90.2 for combined type, F90.8 for other type and F90.9 for unspecified type. F90 by itself is not billable; claims need the full code.',
      'The right code depends on the presentation the clinician documents. This guide covers each code, how the codes line up with DSM-5-TR, adult ADHD, coexisting conditions, symptom and screening codes, and the documentation and claim problems behind most ADHD-related denials. Codes are revised every October 1, so always check the current CMS/CDC code files.',
    ],
    sections: [
      {
        heading: 'ADHD ICD-10-CM codes at a glance',
        paragraphs: [
          'Category F90 sits in the block F90-F98, behavioral and emotional disorders with onset usually occurring in childhood and adolescence. It has five billable codes:',
        ],
        bullets: [
          'F90.0 - Attention-deficit hyperactivity disorder, predominantly inattentive type.',
          'F90.1 - Attention-deficit hyperactivity disorder, predominantly hyperactive type.',
          'F90.2 - Attention-deficit hyperactivity disorder, combined type.',
          'F90.8 - Attention-deficit hyperactivity disorder, other type.',
          'F90.9 - Attention-deficit hyperactivity disorder, unspecified type (includes ADHD of childhood or adolescence NOS and ADHD NOS).',
        ],
      },
      {
        heading: 'Matching DSM-5-TR presentations to ICD-10-CM codes',
        paragraphs: [
          'Clinicians diagnose with DSM-5-TR, which describes ADHD by "presentation" rather than "type". The DSM presentations map one-to-one to the ICD-10-CM codes that go on the claim:',
        ],
        bullets: [
          'Predominantly inattentive presentation: F90.0.',
          'Predominantly hyperactive/impulsive presentation: F90.1.',
          'Combined presentation: F90.2.',
          'Other specified attention-deficit/hyperactivity disorder (symptoms cause impairment but do not meet full criteria, and the clinician states why): F90.8.',
          'Unspecified attention-deficit/hyperactivity disorder (criteria not fully met and the reason is not specified, or there is not enough information yet): F90.9.',
          'DSM specifiers such as "in partial remission" or severity (mild, moderate, severe) do not change the ICD-10-CM code. Record them in the note; they still matter for medical necessity and treatment plans.',
        ],
      },
      {
        heading: 'When F90.9 (unspecified) is appropriate, and when it is not',
        paragraphs: [
          'The ICD-10-CM Official Guidelines allow unspecified codes when the documentation does not support a more specific one. F90.9 is therefore legitimate at an initial visit, or in a primary care note where ADHD is listed without the presentation.',
          'It becomes a problem when the record clearly describes the presentation but the claim still says F90.9. That is a coding gap, not a clinical one, and some payers and pharmacy benefit managers look for a specific presentation before approving testing, ongoing therapy or certain medications. If a psychiatrist\'s evaluation documents combined presentation, the claim should carry F90.2.',
          'Ask the provider to state the presentation in the assessment section once it is established. A one-line addendum ("ADHD, combined presentation") prevents months of unspecified claims.',
        ],
      },
      {
        heading: 'Coding ADHD in adults',
        paragraphs: [
          'There is no separate adult ADHD code. The F90-F98 block carries a note that its codes may be used regardless of the patient\'s age: these disorders usually begin in childhood or adolescence but may continue or be diagnosed in adulthood. An adult with combined-presentation ADHD is coded F90.2, exactly as a child would be.',
          'For adults, the DSM-5-TR symptom threshold is lower: CDC summarizes the criteria as six or more symptoms for children up to age 16, and five or more for adolescents 17 and older and adults, with several symptoms present before age 12 and in two or more settings. Documenting how the threshold was met is especially important for new adult diagnoses, which payers review more often.',
        ],
      },
      {
        heading: 'Coexisting conditions: what the Excludes2 note means',
        paragraphs: [
          'Category F90 has an Excludes2 note for anxiety disorders (F40.-, F41.-), mood disorders (F30-F39), pervasive developmental disorders (F84.-) and schizophrenia (F20.-). Excludes2 means "not included here": the condition is not part of ADHD, but a patient can have both, and both may be coded when both are documented.',
          'Common combinations include ADHD with generalized anxiety disorder (for example F90.2 with F41.1), ADHD with a depressive disorder, ADHD with autism spectrum disorder (F84.0), and ADHD with a specific learning disorder such as F81.0 (specific reading disorder).',
          'Sequence first the condition chiefly responsible for the visit. If a medication-management visit is focused on ADHD, the F90 code goes first; if the visit addresses mainly anxiety, the anxiety code leads and ADHD follows if it affected care.',
        ],
      },
      {
        heading: 'Symptom and screening codes: R41.840 and Z13.39',
        bullets: [
          'R41.840 (attention and concentration deficit) is a symptom code for use when ADHD has not been diagnosed. It has an Excludes1 note for F90.-, so it must not be reported together with an ADHD code.',
          'Once the provider documents ADHD, use the F90 code and drop the symptom code.',
          'Z13.39 (encounter for screening examination for other mental health and behavioral disorders) applies to screening a patient without signs or symptoms, for example a routine questionnaire at a well visit. If the screen leads to a diagnosis at the same visit, code the diagnosis.',
          'If an evaluation for suspected ADHD ends without a diagnosis, code the presenting symptoms or reason for the evaluation rather than an F90 code.',
        ],
      },
      {
        heading: 'Documentation that supports an ADHD code',
        bullets: [
          'The presentation (inattentive, hyperactive/impulsive, combined, other specified or unspecified) stated in the assessment.',
          'How DSM-5-TR criteria were met: symptom counts, onset before age 12, impairment in two or more settings, and why symptoms are not better explained by another condition.',
          'Rating scales or other sources used (parent, teacher, partner or self-report instruments) and their results.',
          'Coexisting conditions that were evaluated or treated.',
          'The treatment plan: medication management, therapy, school or workplace coordination, and follow-up interval.',
          'For time-based services (psychotherapy, or E/M billed on time), the total time and what it was spent on.',
        ],
      },
      {
        heading: 'Common ADHD claim denials and how to avoid them',
        bullets: [
          'Truncated code: billing "F90" without the fourth character. The claim is rejected or denied as an invalid diagnosis (for example CARC 146, "diagnosis was invalid for the date(s) of service reported").',
          'Diagnosis does not support the procedure: CARC 11, "the diagnosis is inconsistent with the procedure". Check the payer\'s policy for psychological or neuropsychological testing (CPT 96130-96139 family) and make sure the ADHD code and the reason for testing are documented.',
          'Missing prior authorization: some payers require authorization for psychological testing or for visits beyond a set number. Without it, expect CARC 197 (precertification/authorization absent).',
          'R41.840 billed with F90.x: an Excludes1 conflict that claim scrubbers and payers flag.',
          'Unspecified code where the note is specific: not a denial on its own with most payers, but it weakens medical-necessity reviews and appeals.',
        ],
      },
    ],
    faqs: [
      { question: 'What is the ICD-10 code for ADD?', answer: 'ICD-10-CM has no separate code for ADD. Attention deficit disorder without hyperactivity is coded F90.0 (ADHD, predominantly inattentive type). If hyperactivity is documented, use F90.1 or F90.2 instead.' },
      { question: 'What is the ICD-10 code for ADHD NOS?', answer: 'ADHD not otherwise specified, where the clinician does not document a presentation, is coded F90.9 (attention-deficit hyperactivity disorder, unspecified type). When the presentation is documented, use the specific code instead: F90.0 inattentive, F90.1 hyperactive-impulsive or F90.2 combined.' },
      { question: 'What is the ICD-10 code for a history of ADHD?', answer: 'There is no separate code for a history of ADHD. If the provider documents ADHD as a current condition being monitored or treated, code it with the appropriate F90 code. If the provider documents ADHD as a past condition that has resolved, Z86.59 (personal history of other mental and behavioral disorders) can be used.' },
      { question: 'What was the ICD-9 code for ADHD?', answer: 'In ICD-9-CM, attention deficit disorder was coded 314.00 (without mention of hyperactivity) and 314.01 (with hyperactivity). ICD-9-CM was replaced by ICD-10-CM for U.S. claims on October 1, 2015, so current claims must use the F90 codes.' },
      { question: 'What is the ICD-10 code for ADHD?', answer: 'ADHD is coded in category F90: F90.0 (predominantly inattentive type), F90.1 (predominantly hyperactive type), F90.2 (combined type), F90.8 (other type) and F90.9 (unspecified type). F90 alone is a category heading and is not billable.' },
      { question: 'What is the ICD-10 code for adult ADHD?', answer: 'Adults use the same F90 codes as children. The F90-F98 block notes that its codes may be used regardless of age, so an adult with combined presentation is coded F90.2.' },
      { question: 'What is F90.9?', answer: 'F90.9 is attention-deficit hyperactivity disorder, unspecified type. Use it when ADHD is diagnosed but the documentation does not specify the presentation. Once the presentation is documented, switch to F90.0, F90.1, F90.2 or F90.8.' },
      { question: 'Can ADHD and anxiety be coded together?', answer: 'Yes. Category F90 has an Excludes2 note for anxiety disorders, which means both conditions can be reported when both are documented, for example F90.2 with F41.1.' },
      { question: 'Can R41.840 be billed with an ADHD code?', answer: 'No. R41.840 (attention and concentration deficit) has an Excludes1 note for F90.-. Use the symptom code only when ADHD has not been diagnosed.' },
    ],
    closing: [
      'ADHD coding is simple on paper, five codes, but denials usually come from the gaps around it: unspecified codes, truncated codes, missing authorizations for testing, and notes that do not show how criteria were met.',
      'Alpha Medi Assist\'s certified coders review behavioral health documentation and claims before submission so the diagnosis, procedure and authorization line up the first time.',
    ],
    related: [
      { label: 'ICD-10 code for autism', path: '/blog/what-is-the-icd-10-code-for-autism' },
      { label: 'ICD-10 code for depression', path: '/blog/what-is-the-icd-10-code-for-depression' },
      { label: 'ICD-10 code for PTSD', path: '/blog/what-is-the-icd-10-code-for-ptsd' },
      { label: 'Medical coding services', path: '/medical-coding-services' },
      { label: 'Psychiatry billing services', path: '/specialties/psychiatry' },
      { label: 'Mental health counseling billing', path: '/specialties/mental-health-counseling' },
      { label: 'ICD-10 codes for anxiety', path: '/blog/what-is-the-icd-10-code-for-anxiety' },
      { label: 'Common denial codes and fixes', path: '/blog/common-claim-denial-codes-and-how-to-fix-them' },
    ],
    references: [
      CDC_ICD10CM_GUIDELINES,
      CMS_ICD10,
      { label: 'CDC: Diagnosing ADHD', url: 'https://www.cdc.gov/adhd/diagnosis/index.html' },
      { label: 'CDC: Clinical Care of ADHD in Children (for healthcare providers)', url: 'https://www.cdc.gov/adhd/hcp/clinical-care/index.html' },
      { label: 'American Psychiatric Association: DSM-5-TR', url: 'https://www.psychiatry.org/psychiatrists/practice/dsm' },
      X12_CARC,
    ],
  },
  {
    // Old URL kept exactly (about 2.6k impressions on the previous site).
    slug: 'what-is-the-icd-10-code-for-anxiety',
    datePublished: '2026-11-19',
    category: 'Coding',
    title: 'What Is the ICD-10 Code for Anxiety? F41.9, F41.1 and Related Codes',
    seoTitle: 'ICD-10 Code for Anxiety: F41.9, F41.1 (GAD), F41.0 & F40.x',
    seoDescription:
      'Unspecified anxiety is F41.9 and generalized anxiety disorder is F41.1. Codes for panic, social anxiety, phobias, mixed anxiety, adjustment and PTSD.',
    excerpt:
      'Anxiety has several ICD-10-CM codes, not one. Which code fits which diagnosis, how to tell anxiety from adjustment disorder and PTSD, and how to avoid denials.',
    intro: [
      'Short answer: there is no single ICD-10 code for anxiety. Unspecified anxiety is F41.9 and generalized anxiety disorder is F41.1. Panic disorder is F41.0, other mixed anxiety disorders F41.3 and other specified anxiety disorders F41.8. Phobic anxiety disorders, including agoraphobia and social anxiety disorder, are coded in category F40.',
      'Picking the most specific code the documentation supports matters for medical necessity, especially for ongoing psychotherapy. Below are the anxiety codes, how they map to DSM-5-TR diagnoses, the conditions that are coded elsewhere (adjustment disorder, PTSD, separation anxiety), screening codes, and the claim errors to avoid. Codes are revised every October 1, so confirm against the current CMS/CDC code files.',
    ],
    sections: [
      {
        heading: 'Category F41: other anxiety disorders',
        bullets: [
          'F41.0 - Panic disorder [episodic paroxysmal anxiety]. Covers panic attacks and panic states. Panic disorder with agoraphobia is not coded here; it is F40.01.',
          'F41.1 - Generalized anxiety disorder.',
          'F41.3 - Other mixed anxiety disorders.',
          'F41.8 - Other specified anxiety disorders. Inclusion terms include anxiety depression (mild or not persistent), anxiety hysteria, and mixed anxiety and depressive disorder.',
          'F41.9 - Anxiety disorder, unspecified (anxiety NOS).',
          'F41 by itself is a category heading and is not billable.',
        ],
      },
      {
        heading: 'Category F40: phobic anxiety disorders',
        bullets: [
          'F40.00 - Agoraphobia, unspecified; F40.01 - agoraphobia with panic disorder; F40.02 - agoraphobia without panic disorder.',
          'F40.10 - Social phobia, unspecified; F40.11 - social phobia, generalized. Social anxiety disorder is coded here.',
          'F40.2- - Specific (isolated) phobias. These are subdivided by type (animal, natural environment, blood/injection/injury, situational and other) and must be coded to the full, most specific code in the subcategory.',
          'F40.8 - Other phobic anxiety disorders.',
          'F40.9 - Phobic anxiety disorder, unspecified.',
        ],
      },
      {
        heading: 'DSM-5-TR anxiety diagnoses and their ICD-10-CM codes',
        paragraphs: [
          'Clinicians usually diagnose with DSM-5-TR terms, while the claim needs the ICD-10-CM code. The most common crosswalks:',
        ],
        bullets: [
          'Generalized anxiety disorder: F41.1.',
          'Panic disorder: F41.0.',
          'Agoraphobia: F40.00 (DSM-5-TR codes agoraphobia separately; if panic disorder is also present, both diagnoses are recorded).',
          'Social anxiety disorder: F40.10.',
          'Specific phobia: the F40.2- code for the phobia type documented.',
          'Separation anxiety disorder: F93.0 (coded with childhood-onset disorders, but usable at any age).',
          'Selective mutism: F94.0.',
          'Other specified anxiety disorder: F41.8. Unspecified anxiety disorder: F41.9.',
          'Anxiety disorder due to another medical condition: F06.4, with the medical condition coded as well.',
          'Substance/medication-induced anxiety disorder: a combination code in the substance categories (F10-F19) that captures both the substance use and the anxiety disorder.',
        ],
      },
      {
        heading: 'Conditions that look like anxiety but are coded elsewhere',
        paragraphs: [
          'Category F41 carries an Excludes2 note for anxiety in acute stress reaction (F43.0), transient adjustment reaction (F43.2-), neurasthenia (F48.8), psychophysiologic disorders (F45.-) and separation anxiety (F93.0). When anxiety is a feature of one of these conditions, the other condition is coded instead of, or in addition to, an F41 code depending on what the provider documents.',
        ],
        bullets: [
          'Adjustment disorder with anxiety: F43.22. Adjustment disorder with mixed anxiety and depressed mood: F43.23. Use these when symptoms arise in response to an identifiable stressor and the clinician diagnoses an adjustment disorder rather than an anxiety disorder.',
          'Post-traumatic stress disorder: F43.10 (unspecified), F43.11 (acute) or F43.12 (chronic).',
          'Acute stress reaction: F43.0.',
          'Obsessive-compulsive disorder is no longer grouped with anxiety disorders in DSM-5-TR and is coded in category F42.',
        ],
      },
      {
        heading: 'Mixed anxiety and depression',
        paragraphs: [
          'Two situations are often confused. When a patient has mild or non-persistent symptoms of both anxiety and depression and neither meets criteria for a separate disorder, ICD-10-CM indexes "mixed anxiety and depressive disorder" to F41.8.',
          'When the patient meets criteria for both a full anxiety disorder and a depressive disorder, code each one, for example F41.1 with the appropriate F32.- or F33.- code. Do not use F41.8 to stand in for two documented diagnoses.',
          'F41.3 (other mixed anxiety disorders) is a different code from mixed anxiety and depressive disorder. Use it only when the documentation supports it.',
        ],
      },
      {
        heading: 'F41.9 vs. a specific code',
        paragraphs: [
          'F41.9 is valid. The Official Guidelines allow unspecified codes when the documentation does not support anything more specific, which is common in a first primary care visit or an urgent care note.',
          'In behavioral health it should be temporary. After an intake assessment, the record usually supports GAD, panic disorder, social anxiety disorder or another specific diagnosis. Long courses of psychotherapy billed under F41.9 are more likely to draw medical-necessity questions and are harder to defend on appeal than a specific diagnosis with a documented treatment plan.',
        ],
      },
      {
        heading: 'Screening and symptom codes',
        bullets: [
          'Z13.39 - encounter for screening examination for other mental health and behavioral disorders: for an anxiety screening (for example a GAD-7 questionnaire) in a patient without a diagnosis. Z13.31 is the depression screening code.',
          'If a screen is positive and the provider diagnoses an anxiety disorder at the same visit, report the F code for the diagnosis.',
          'R45.0 (nervousness) and similar symptom codes describe symptoms when no anxiety disorder has been diagnosed. Do not report them alongside an F41 code for the same symptoms.',
        ],
      },
      {
        heading: 'Documentation and billing tips for anxiety claims',
        bullets: [
          'Name the specific disorder in the assessment and state how criteria were met; record measurement scores (such as GAD-7) at intake and follow-up.',
          'For psychotherapy (CPT 90832, 90834, 90837), record start and stop times or total time, the interventions used and progress toward goals. The time documented must support the code billed.',
          'Update the diagnosis when it changes, for example from F41.9 to F41.1 after assessment, or from F43.22 to an anxiety disorder if symptoms persist beyond an adjustment disorder.',
          'Code all documented conditions that affect care, such as coexisting depression or ADHD.',
          'Watch for CARC 11 (diagnosis inconsistent with the procedure), CARC 146 (diagnosis invalid for the date of service, often a truncated code such as F41 or F40.2) and CARC 197 (authorization absent) where a payer requires authorization for behavioral health services.',
        ],
      },
    ],
    faqs: [
      { question: 'What is the DSM-5 code for generalized anxiety disorder?', answer: "DSM-5-TR lists generalized anxiety disorder with the ICD-10-CM code F41.1, so the clinician's DSM-5-TR diagnosis and the claim use the same code. Panic disorder is F41.0 and other specified or unspecified anxiety disorder are F41.8 and F41.9." },
      { question: 'Is there a CPT code for anxiety?', answer: 'No. Anxiety is a diagnosis, so it is coded with ICD-10-CM (for example F41.1 or F41.9). CPT codes describe the service: 90791 for a psychiatric diagnostic evaluation, 90832, 90834 or 90837 for psychotherapy by time, or an E/M code when a medical provider manages the condition. The claim links the CPT code to the anxiety diagnosis.' },
      { question: 'What is the ICD-10 code for OCD?', answer: 'Obsessive-compulsive disorder is coded in category F42, not F41. Common codes are F42.2 (mixed obsessional thoughts and acts), F42.8 (other obsessive-compulsive disorder) and F42.9 (obsessive-compulsive disorder, unspecified). Hoarding disorder (F42.3) and excoriation (skin-picking) disorder (F42.4) are also in F42.' },
      { question: 'What is the ICD-10 code for stress, unspecified?', answer: 'It depends on what the provider documents. F43.9 (reaction to severe stress, unspecified) is used for a stress-related disorder that is not specified further. Z73.3 (stress, not elsewhere classified) describes stress as a factor affecting health when no mental disorder is diagnosed. Anxiety disorders themselves stay in F41.' },
      { question: 'Is F41.2 a valid ICD-10-CM code?', answer: 'No. F41.2 (mixed anxiety and depressive disorder) exists in the World Health Organization ICD-10, but it is not part of the U.S. ICD-10-CM code set. In ICD-10-CM, mixed anxiety and depressive disorder is indexed to F41.8 (other specified anxiety disorders), so a claim with F41.2 will be rejected.' },
      { question: 'What is the ICD-10 code for anxiety?', answer: 'Unspecified anxiety (anxiety NOS) is F41.9. Specific anxiety disorders have their own codes: F41.1 generalized anxiety disorder, F41.0 panic disorder, F41.8 other specified anxiety disorders, and F40.- codes for phobic anxiety disorders such as social anxiety disorder (F40.10).' },
      { question: 'What is the difference between F41.1 and F41.9?', answer: 'F41.1 is generalized anxiety disorder, a specific diagnosis. F41.9 is anxiety disorder, unspecified, used when the documentation does not identify a specific anxiety disorder.' },
      { question: 'What is the ICD-10 code for anxiety and depression?', answer: 'Mixed anxiety and depressive disorder, where neither condition meets full criteria, indexes to F41.8. If both a full anxiety disorder and a depressive disorder are diagnosed, code each one separately.' },
      { question: 'What is the ICD-10 code for social anxiety disorder?', answer: 'Social anxiety disorder (social phobia) is coded F40.10, social phobia, unspecified. F40.11 is social phobia, generalized.' },
      { question: 'Is adjustment disorder with anxiety coded as F41?', answer: 'No. Adjustment disorder with anxiety is F43.22, and adjustment disorder with mixed anxiety and depressed mood is F43.23. They are used when symptoms follow an identifiable stressor and the clinician diagnoses an adjustment disorder.' },
      { question: 'What is the ICD-10 code for anxiety screening?', answer: 'Screening for anxiety in a patient without a diagnosis is generally reported with Z13.39, encounter for screening examination for other mental health and behavioral disorders. If a disorder is diagnosed, report its F code.' },
    ],
    closing: [
      'Anxiety coding errors are rarely about knowing F41.9. They come from staying on an unspecified code after the record supports something more specific, confusing adjustment disorder with an anxiety disorder, and time documentation that does not support the psychotherapy code.',
      'Alpha Medi Assist codes and bills for psychiatrists, therapists and counseling practices, and reviews diagnosis specificity and session documentation before claims go out.',
    ],
    related: [
      { label: 'ICD-10 code for depression', path: '/blog/what-is-the-icd-10-code-for-depression' },
      { label: 'ICD-10 code for PTSD', path: '/blog/what-is-the-icd-10-code-for-ptsd' },
      { label: 'Mental health counseling billing', path: '/specialties/mental-health-counseling' },
      { label: 'Psychiatry billing services', path: '/specialties/psychiatry' },
      { label: 'Medical coding services', path: '/medical-coding-services' },
      { label: 'ICD-10 codes for ADHD', path: '/blog/what-is-the-icd-10-code-for-adhd' },
      { label: 'Top 10 reasons for claim denials', path: '/blog/top-10-reasons-for-medical-claim-denials-and-how-to-fix-them' },
    ],
    references: [
      CDC_ICD10CM_GUIDELINES,
      CMS_ICD10,
      { label: 'NIMH: Anxiety Disorders', url: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders' },
      { label: 'American Psychiatric Association: DSM-5-TR', url: 'https://www.psychiatry.org/psychiatrists/practice/dsm' },
      X12_CARC,
    ],
  },
  {
    // Old URL kept exactly (about 615 impressions on the previous site).
    slug: 'what-is-authorization-in-medical-billing',
    datePublished: '2026-11-19',
    category: 'Revenue cycle',
    title: 'What Is Authorization in Medical Billing? Prior Auth Explained',
    seoTitle: 'Prior Authorization in Medical Billing: Process & Rules',
    seoDescription:
      'Prior authorization is a payer\u2019s approval before a service. How it differs from referrals, the step-by-step process, CMS 2026 timeframes and denials.',
    excerpt:
      'What authorization means in medical billing, how the prior auth process works, what changed under the CMS 2026 rule, and how to prevent authorization denials.',
    intro: [
      'Short answer: authorization (also called prior authorization, preauthorization or precertification) is a health plan\'s approval, obtained before a service is provided, confirming the service is covered and medically necessary for that patient. If a required authorization is missing, the payer can deny the claim, typically with CARC 197.',
      'Authorization is a front-end task, but its consequences show up at the back end as denials that are hard to overturn. This guide explains the terms, the workflow, the federal timeframes that took effect in 2026 for many government-program plans, and how practices prevent authorization denials.',
    ],
    sections: [
      {
        heading: 'Authorization, referral, precertification: the terms',
        bullets: [
          'Prior authorization (preauthorization): the payer approves a specific service, drug or item before it is provided. The approval usually lists the CPT/HCPCS codes, number of units or visits, date range, and sometimes the rendering provider and place of service.',
          'Precertification: often used for inpatient admissions and surgeries; in practice most payers treat it as the same thing as prior authorization.',
          'Referral: a primary care provider\'s permission for the patient to see a specialist, required by many HMO and some managed Medicaid plans. A referral is not an authorization; a specialist may need both.',
          'Notification: some payers do not review the service but require notice within a set time (for example, of an inpatient admission). Missing notification can still deny the claim.',
          'Predetermination: an optional, non-binding review of whether a service would be covered. It is not an authorization.',
          'Pre-claim review (Medicare): for certain services, Medicare lets the provider render the service and request review before the claim is submitted. Prior authorization requires the decision before the service.',
        ],
      },
      {
        heading: 'Which services usually need authorization?',
        paragraphs: [
          'Requirements vary by payer, plan and state, and change frequently, so each payer\'s current list is the only reliable source. Services that commonly appear on prior authorization lists include:',
        ],
        bullets: [
          'Advanced imaging such as MRI, CT and PET scans.',
          'Elective inpatient admissions and many outpatient surgeries.',
          'Specialty drugs, infusions and injectables (medical benefit) and many brand-name or specialty prescriptions (pharmacy benefit).',
          'Durable medical equipment, prosthetics, orthotics and supplies.',
          'Therapy services beyond an initial number of visits, such as physical, occupational and speech therapy.',
          'Behavioral health services such as psychological testing, intensive outpatient programs and partial hospitalization.',
          'Sleep studies, genetic testing and some cardiology and pain-management procedures.',
        ],
      },
      {
        heading: 'Does Medicare require prior authorization?',
        paragraphs: [
          'Original (fee-for-service) Medicare does not require prior authorization for most services. CMS does run prior authorization and pre-claim review programs for specific items and services, such as certain hospital outpatient department services and certain DMEPOS items, where the Medicare Administrative Contractor issues an affirmed or non-affirmed decision.',
          'Medicare Advantage plans, by contrast, use prior authorization widely. A patient\'s card that says "Medicare" may belong to an Advantage plan with its own authorization list, which is why eligibility verification should identify the exact plan.',
        ],
      },
      {
        heading: 'The prior authorization process, step by step',
        bullets: [
          'At scheduling, identify the patient\'s exact plan and check whether the planned CPT/HCPCS codes require authorization for that plan, provider and place of service.',
          'Collect the clinical documentation the payer\'s policy asks for: diagnosis, history, prior treatments tried, test results and the ordering provider\'s note.',
          'Submit the request through the payer portal, an electronic X12 278 transaction, a FHIR-based API where the payer offers one, or fax/phone if that is all the payer supports.',
          'Track the request and respond quickly to requests for additional information; a pending request does not protect the claim.',
          'If denied, review the specific reason and request a peer-to-peer discussion or file an appeal with additional documentation.',
          'Record the approval in the practice management system: authorization number, approved codes, units or visits, start and end dates, and the approved provider and location.',
          'Before the service, recheck that the plan still matches the approval. A change of CPT code, an added procedure, extra units, a different facility or a date outside the window can all void the authorization.',
          'On the claim, report the authorization number (item 23 on the CMS-1500; the prior authorization reference in loop 2300 of the 837P).',
        ],
      },
      {
        heading: 'What changed in 2026: CMS-0057-F decision timeframes',
        paragraphs: [
          'The CMS Interoperability and Prior Authorization Final Rule (CMS-0057-F), finalized in January 2024, applies to "impacted payers": Medicare Advantage organizations, state Medicaid and CHIP fee-for-service programs, Medicaid managed care plans, CHIP managed care entities, and Qualified Health Plan issuers on the Federally-Facilitated Exchanges.',
          'Beginning in 2026, impacted payers other than QHP issuers on the Exchanges must send prior authorization decisions within 72 hours for expedited (urgent) requests and within 7 calendar days for standard (non-urgent) requests. They must also give a specific reason when they deny a request, and publicly report prior authorization metrics each year.',
          'The rule also requires impacted payers to implement a Prior Authorization API, along with other FHIR-based APIs, generally by January 2027, so that providers can find out whether authorization is required, see documentation requirements and submit requests from their own systems.',
          'Most employer-sponsored commercial plans are not impacted payers under this rule. Their timeframes come from the provider contract, state law and other federal claims rules, so practices still need payer-by-payer tracking.',
        ],
      },
      {
        heading: 'Authorization denials: codes and fixes',
        bullets: [
          'CARC 197 - precertification/notification/authorization/pre-treatment absent. No valid authorization was found for the service. Check whether one was obtained but not reported on the claim; if so, submit a corrected claim with the number.',
          'CARC 198 - precertification/notification/authorization/pre-treatment exceeded. An authorization existed but the units, visits or dates were exceeded. Request an extension or additional units, and track remaining visits going forward.',
          'CARC 15 - the authorization number is missing, invalid, or does not apply to the billed services or provider. Often a typo, a number for a different CPT code, or a number issued to another provider in the group.',
          'Retroactive authorization: some payers accept retro requests for emergencies or when eligibility could not be determined at the time of service. Policies differ, and many have short deadlines.',
          'Appeals: when the service was urgent, the payer\'s own requirements were unclear, or the authorization was obtained but recorded incorrectly, appeal with the call reference, portal screenshot or approval letter.',
        ],
      },
      {
        heading: 'Can the practice bill the patient when authorization is missing?',
        paragraphs: [
          'Usually not when the practice is in-network. Most participation agreements make obtaining authorization the provider\'s responsibility, so a denial for missing authorization is a contractual write-off (group code CO) rather than patient responsibility. Read the contract and the group code on the remittance before sending a statement.',
        ],
      },
      {
        heading: 'Best practices to prevent authorization denials',
        bullets: [
          'Maintain an authorization matrix by payer, plan and CPT/HCPCS code, and review it whenever payers publish policy updates.',
          'Check authorization at scheduling and again shortly before the visit, especially for procedures scheduled weeks in advance.',
          'Track expiration dates and remaining visits for ongoing treatment such as therapy or infusions.',
          'Build a claim-scrubber edit that holds claims for authorization-required codes with no authorization number.',
          'Report authorization-related denials separately from other denials so the root cause (front desk, scheduling, clinical documentation) is visible.',
        ],
      },
    ],
    faqs: [
      { question: 'What is authorization in medical billing?', answer: 'Authorization (prior authorization) is a payer\'s approval, obtained before a service is provided, that the service is covered and medically necessary for the patient. Without a required authorization the claim can be denied.' },
      { question: 'What is the difference between a referral and a prior authorization?', answer: 'A referral is a primary care provider\'s permission for the patient to see a specialist. A prior authorization is the payer\'s approval of a specific service. Some plans require both.' },
      { question: 'How long does a prior authorization take?', answer: 'It depends on the payer. Under CMS-0057-F, Medicare Advantage, Medicaid and CHIP plans must decide expedited requests within 72 hours and standard requests within 7 calendar days starting in 2026. Commercial timelines are set by contract and state law.' },
      { question: 'What denial code is used for missing authorization?', answer: 'CARC 197 means the precertification or authorization was absent. CARC 198 means an authorization was exceeded, and CARC 15 means the authorization number was missing, invalid or did not apply to the service or provider.' },
      { question: 'Can you get a prior authorization after the service?', answer: 'Sometimes. Some payers accept retroactive authorization requests, typically for emergencies or when coverage could not be confirmed in time. It is never guaranteed, so check each payer\'s policy and deadline.' },
    ],
    closing: [
      'Authorization denials are among the most preventable denials in the revenue cycle, but only when someone owns the process from scheduling to claim submission.',
      'Alpha Medi Assist handles eligibility checks, prior authorization requests, tracking and authorization-related appeals as part of full-cycle billing.',
    ],
    related: [
      { label: 'Outsourced medical billing services', path: '/medical-billing-services' },
      { label: 'Denial management services', path: '/denial-management-services' },
      { label: 'Revenue cycle management services', path: '/revenue-cycle-management-services' },
      { label: 'Common denial codes and fixes', path: '/blog/common-claim-denial-codes-and-how-to-fix-them' },
      { label: 'Steps in the medical billing cycle', path: '/blog/steps-involved-in-the-medical-billing-cycle' },
    ],
    references: [
      { label: 'CMS: Interoperability and Prior Authorization Final Rule (CMS-0057-F) fact sheet', url: 'https://www.cms.gov/files/document/fact-sheet-cms-interoperability-and-prior-authorization-final-rule-cms-0057-f.pdf' },
      { label: 'CMS press release: CMS finalizes rule to expand access to health information and improve the prior authorization process (Jan. 17, 2024)', url: 'https://www.cms.gov/newsroom/press-releases/cms-finalizes-rule-expand-access-health-information-and-improve-prior-authorization-process' },
      { label: 'CMS: Prior Authorization and Pre-Claim Review Initiatives', url: 'https://www.cms.gov/research-statistics-data-and-systems/monitoring-programs/medicare-ffs-compliance-programs/pre-claim-review-initiatives/overview' },
      X12_CARC,
    ],
  },
  {
    // Old URL kept exactly.
    slug: 'steps-involved-in-the-medical-billing-cycle',
    datePublished: '2026-11-19',
    category: 'Revenue cycle',
    title: 'Steps Involved in the Medical Billing Cycle (12-Step Guide)',
    seoTitle: 'Medical Billing Cycle Steps: From Registration to Payment',
    seoDescription:
      'The 12 steps of the medical billing cycle: registration, eligibility, authorization, coding, claims, adjudication, posting, denials, patient billing, A/R.',
    excerpt:
      'Every step of the medical billing cycle, what happens at each one, the electronic transactions involved, and where revenue is most often lost.',
    intro: [
      'Short answer: the medical billing cycle runs from scheduling to final payment. Its core steps are patient registration, insurance eligibility verification, prior authorization, check-in and payment collection, documentation and coding, charge entry, claim scrubbing and submission, payer adjudication, payment posting, denial management, patient billing, and A/R follow-up with reporting.',
      'Each step depends on the one before it. Most denials trace back to the front end (wrong insurance, no authorization), while most lost revenue sits at the back end in claims nobody followed up. Here is what each step involves and what to check.',
    ],
    sections: [
      {
        heading: 'Before the cycle starts: credentialing and payer enrollment',
        paragraphs: [
          'A provider must be enrolled and, for networks, credentialed with each payer before claims can be paid at in-network rates. Claims for a provider whose enrollment is not active are commonly denied. This is not a step in each patient\'s billing cycle, but it is a prerequisite for all of them.',
        ],
      },
      {
        heading: '1. Patient scheduling and registration',
        paragraphs: [
          'Capture accurate demographics and insurance details: legal name, date of birth, address, subscriber name and relationship, member ID and group number, and a copy of the front and back of the card. Ask about secondary coverage. Small errors here (a misspelled name or wrong date of birth) cause eligibility rejections later.',
          'For uninsured or self-pay patients, the No Surprises Act requires providers to give a good faith estimate of expected charges when a service is scheduled in advance or on request.',
        ],
      },
      {
        heading: '2. Insurance eligibility and benefits verification',
        paragraphs: [
          'Before the visit, confirm that coverage is active on the date of service and check benefits for the planned services: copay, coinsurance, remaining deductible, visit limits, network status and whether a referral or authorization is needed. Electronic checks use the X12 270/271 eligibility inquiry and response. Recheck at every visit, because coverage changes mid-year.',
        ],
      },
      {
        heading: '3. Prior authorization and referrals',
        paragraphs: [
          'If the payer requires authorization or a referral, obtain it before the service and record the authorization number, approved codes, units and dates. Missing authorization is one of the hardest denials to overturn, because most contracts make it the provider\'s responsibility.',
        ],
      },
      {
        heading: '4. Check-in and time-of-service collections',
        paragraphs: [
          'Verify identity and insurance again, collect signed consent and financial-policy forms, and collect the copay and any known patient balance. Collecting at the visit costs far less than sending statements afterward.',
        ],
      },
      {
        heading: '5. Clinical documentation and charge capture',
        paragraphs: [
          'The provider documents the encounter, and every billable service, procedure, drug and supply is captured as a charge. Documentation must support what is billed: medical necessity, time for time-based services, and the elements required for the E/M level chosen. Unsigned or late notes delay the whole cycle.',
        ],
      },
      {
        heading: '6. Medical coding',
        paragraphs: [
          'Coders translate the documentation into code sets: ICD-10-CM for diagnoses, CPT and HCPCS Level II for procedures, services and supplies, plus modifiers. Diagnosis codes must be valid for the date of service (ICD-10-CM updates every October 1) and coded to the highest specificity the record supports, and each procedure must be linked to a diagnosis that supports it.',
        ],
      },
      {
        heading: '7. Charge entry and claim scrubbing',
        paragraphs: [
          'Charges, codes, units, place of service, rendering and referring provider details and authorization numbers are entered into the practice management system. A claim scrubber then checks for errors before submission: invalid or truncated codes, missing modifiers, NCCI edit conflicts, mismatched diagnosis and procedure, missing authorization numbers and demographic gaps. Fixing a claim here is far cheaper than after a denial.',
        ],
      },
      {
        heading: '8. Claim submission',
        paragraphs: [
          'Professional claims are submitted electronically as X12 837P transactions (the electronic equivalent of the CMS-1500), and institutional claims as 837I (the UB-04 equivalent), usually through a clearinghouse.',
          'Check acknowledgments every day. A claim rejected by the clearinghouse or payer front end never entered adjudication, so it must be corrected and resubmitted, and the timely filing clock keeps running. For Medicare, the limit is generally 12 months from the date of service; commercial limits are set by contract and are often shorter.',
        ],
      },
      {
        heading: '9. Payer adjudication',
        paragraphs: [
          'The payer checks eligibility, coverage, coding edits, authorization, medical necessity and contract pricing, then pays, partially pays or denies the claim. Claim status can be checked electronically with the X12 276/277 transaction or through payer portals. Claims with no response after the payer\'s normal processing time should be followed up rather than left to age.',
        ],
      },
      {
        heading: '10. Payment posting and reconciliation',
        paragraphs: [
          'Payments arrive with an electronic remittance advice (X12 835) or a paper explanation of benefits. Posting records the payment, contractual adjustment and patient responsibility for each line, using the claim adjustment reason codes (CARCs) and remark codes (RARCs) on the remittance.',
          'Good posting does more than record money: compare each payment to the contracted rate to catch underpayments, post denials so they reach the denial queue, match takebacks to the original claims, and reconcile deposits to the bank.',
        ],
      },
      {
        heading: '11. Denial management and appeals',
        paragraphs: [
          'Every denial should be categorized by reason and worked: corrected claims for billing errors, appeals with documentation when the claim was right, and process fixes when the same denial repeats. Appeals have deadlines, and each payer has its own levels and forms.',
          'Tracking denials by reason code, payer and provider shows where the front end needs work. A denial that is never worked becomes lost revenue.',
        ],
      },
      {
        heading: '12. Patient statements, collections and A/R follow-up',
        paragraphs: [
          'After insurance pays, bill the remaining patient responsibility with clear statements, online payment options and payment plans where appropriate. Then work insurance and patient A/R by age and dollar value, focusing first on high-value claims nearing timely-filing or appeal deadlines.',
          'Close the loop with monthly reporting so problems are caught before they show up as cash-flow shortfalls.',
        ],
      },
      {
        heading: 'Key metrics for the billing cycle',
        bullets: [
          'Clean claim rate: the share of claims accepted and paid on first submission without edits or rework.',
          'Denial rate: denied claims as a share of claims processed, tracked by reason and payer.',
          'Days in A/R: how long, on average, it takes to collect a dollar of charges.',
          'A/R over 90 or 120 days: the share of receivables at risk of becoming uncollectable.',
          'Net collection rate: payments collected as a share of what was collectable after contractual adjustments.',
          'Time from date of service to claim submission: the charge lag that delays everything downstream.',
        ],
      },
      {
        heading: 'Where the billing cycle most often breaks',
        bullets: [
          'Front end: wrong or inactive insurance, missing secondary coverage, and services performed without authorization.',
          'Middle: incomplete documentation, unspecified or invalid diagnosis codes, and missing modifiers.',
          'Back end: rejections nobody corrected, denials never appealed, underpayments never noticed and patient balances never billed.',
        ],
      },
    ],
    faqs: [
      { question: 'What are the steps of the medical billing cycle?', answer: 'Patient registration, eligibility and benefits verification, prior authorization, check-in and copay collection, documentation and charge capture, coding, charge entry and claim scrubbing, claim submission, payer adjudication, payment posting, denial management, and patient billing with A/R follow-up.' },
      { question: 'What is the difference between the billing cycle and the revenue cycle?', answer: 'The terms overlap. The revenue cycle usually describes the whole financial process around a patient, including credentialing, contracting and reporting, while the billing cycle focuses on the steps from registration to payment for each encounter.' },
      { question: 'Which step of the billing cycle causes the most denials?', answer: 'Many denials originate at the front end: inaccurate patient or insurance information, inactive coverage, and missing authorizations. Coding and documentation problems are the other major source.' },
      { question: 'What is the timely filing limit for Medicare claims?', answer: 'Medicare generally requires claims to be filed within 12 months (one calendar year) of the date of service. Commercial payers set their own limits in their contracts, and many are shorter.' },
      { question: 'What electronic transactions are used in medical billing?', answer: 'The main HIPAA standard transactions are 270/271 (eligibility), 278 (authorization), 837 (claims), 276/277 (claim status) and 835 (remittance advice).' },
    ],
    closing: [
      'A billing cycle is only as strong as its weakest step. Most practices do not need more effort everywhere; they need the right checks at registration, before submission and on every remittance.',
      'Alpha Medi Assist runs the full billing cycle for practices, from eligibility and authorization to coding, claim submission, payment posting, denial management and A/R follow-up.',
    ],
    related: [
      { label: 'Revenue cycle management services', path: '/revenue-cycle-management-services' },
      { label: 'Outsourced medical billing services', path: '/medical-billing-services' },
      { label: 'Medical payment posting services', path: '/medical-payment-posting-services' },
      { label: 'What is authorization in medical billing?', path: '/blog/what-is-authorization-in-medical-billing' },
      { label: 'How to reduce claim denials', path: '/blog/how-to-reduce-medical-claim-denials-complete-guide' },
    ],
    references: [
      CMS_CLAIMS_MANUAL,
      { label: 'CMS: No Surprises Act (good faith estimates for uninsured and self-pay patients)', url: 'https://www.cms.gov/nosurprises' },
      X12_CARC,
      X12_RARC,
    ],
  },
]
