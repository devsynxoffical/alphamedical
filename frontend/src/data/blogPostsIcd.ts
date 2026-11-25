// ICD-10-CM behavioral health articles (depression, PTSD). Written because the
// ADHD and anxiety code articles are the site's top pages in Search Console, so
// the same searcher intent for related behavioral health codes is proven.
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
const APA_DSM = { label: 'American Psychiatric Association: DSM-5-TR', url: 'https://www.psychiatry.org/psychiatrists/practice/dsm' }
const X12_CARC = { label: 'X12: Claim Adjustment Reason Codes (CARC)', url: 'https://x12.org/codes/claim-adjustment-reason-codes' }

export const icdPosts: BlogPost[] = [
  {
    slug: 'what-is-the-icd-10-code-for-depression',
    datePublished: '2026-11-25',
    category: 'Coding',
    title: 'What Is the ICD-10 Code for Depression? F32, F33 and F32.A',
    seoTitle: 'ICD-10 Code for Depression: F32.A, F32.9, F33 and F34.1',
    seoDescription:
      'Depression NOS is F32.A; MDD single episode unspecified is F32.9. F32 and F33 codes by severity and remission, F34.1 dysthymia, and claim denials.',
    excerpt:
      'Depression is coded by episode, severity and remission status. The F32, F33 and F34.1 codes, how they map to DSM-5-TR, and the errors behind depression claim denials.',
    intro: [
      'Short answer: depression that is documented without any further detail ("depression" or "depressive disorder NOS") is F32.A, depression, unspecified. Major depressive disorder is coded in category F32 for a single episode and F33 for recurrent episodes, with the fourth and fifth characters showing severity and remission status. F32.9 is major depressive disorder, single episode, unspecified. Persistent depressive disorder (dysthymia) is F34.1.',
      'The right code depends on three facts the clinician documents: whether this is a single or recurrent episode, how severe the current episode is, and whether the patient is in partial or full remission. This guide covers each code, the DSM-5-TR crosswalk, related codes for mixed anxiety and depression, adjustment disorder, postpartum depression and depression due to a medical condition, screening codes, and the claim problems behind most depression denials. Codes are revised every October 1, so always check the current CMS/CDC code files.',
    ],
    sections: [
      {
        heading: 'F32: major depressive disorder, single episode',
        paragraphs: [
          'Category F32 sits in the block F30-F39, mood [affective] disorders. F32 by itself is a category heading and is not billable; the claim needs the full code:',
        ],
        bullets: [
          'F32.0 - Major depressive disorder, single episode, mild.',
          'F32.1 - Major depressive disorder, single episode, moderate.',
          'F32.2 - Major depressive disorder, single episode, severe without psychotic features.',
          'F32.3 - Major depressive disorder, single episode, severe with psychotic features.',
          'F32.4 - Major depressive disorder, single episode, in partial remission.',
          'F32.5 - Major depressive disorder, single episode, in full remission.',
          'F32.81 - Premenstrual dysphoric disorder. It has an Excludes1 note for premenstrual tension syndrome (N94.3).',
          'F32.89 - Other specified depressive episodes (for example atypical depression or post-schizophrenic depression).',
          'F32.9 - Major depressive disorder, single episode, unspecified (major depression NOS).',
          'F32.A - Depression, unspecified (depression NOS, depressive disorder NOS).',
        ],
      },
      {
        heading: 'F33: major depressive disorder, recurrent',
        bullets: [
          'F33.0 - Major depressive disorder, recurrent, mild.',
          'F33.1 - Major depressive disorder, recurrent, moderate.',
          'F33.2 - Major depressive disorder, recurrent severe without psychotic features.',
          'F33.3 - Major depressive disorder, recurrent, severe with psychotic symptoms.',
          'F33.40 - Major depressive disorder, recurrent, in remission, unspecified.',
          'F33.41 - Major depressive disorder, recurrent, in partial remission.',
          'F33.42 - Major depressive disorder, recurrent, in full remission.',
          'F33.8 - Other recurrent depressive disorders.',
          'F33.9 - Major depressive disorder, recurrent, unspecified.',
          'F33.4 alone is a subcategory and is not billable; it needs the fifth character.',
        ],
      },
      {
        heading: 'How episode, severity and remission drive the code',
        paragraphs: [
          'Think of the code as answering three questions in order. First, is this the first episode (F32) or has the patient had more than one (F33)? Second, if the patient is currently in an episode, is it mild, moderate or severe, and are psychotic features present? Third, if the patient is no longer in an episode, is the remission partial or full?',
          'A patient with a second major depressive episode of moderate severity is F33.1, not F32.1. A patient whose recurrent depression has resolved but who still has a few symptoms is F33.41. When the note says "major depressive disorder" with no episode, severity or remission detail, the code falls back to F32.9 for a single episode or F33.9 for recurrent. Those defaults are legitimate, but they tell the payer very little.',
        ],
      },
      {
        heading: 'F32.A vs. F32.9: they are not interchangeable',
        paragraphs: [
          'F32.A was added to ICD-10-CM on October 1, 2021. Before then, "depression" with no other detail indexed to F32.9, which meant patients without a major depressive disorder diagnosis were coded as having one. Now, depression NOS goes to F32.A, and F32.9 is reserved for major depressive disorder, single episode, when the severity is not documented.',
          'Pick the code that matches the diagnosis the provider actually wrote. If the assessment says "depression," use F32.A. If it says "major depressive disorder" and gives no further detail, use F32.9. Some quality measures and payer policies count only major depression codes, so using one for the other can affect both reporting and payment.',
        ],
      },
      {
        heading: 'Matching DSM-5-TR diagnoses to ICD-10-CM codes',
        paragraphs: [
          'Clinicians diagnose with DSM-5-TR, which uses the same ICD-10-CM codes on the claim. The most common crosswalks:',
        ],
        bullets: [
          'Major depressive disorder, single or recurrent episode, with severity and remission specifiers: the matching F32.0-F32.5 or F33.0-F33.42 code.',
          'Persistent depressive disorder: F34.1 (the ICD-10-CM title is dysthymic disorder; dysthymia and persistent depressive disorder are inclusion terms).',
          'Premenstrual dysphoric disorder: F32.81.',
          'Other specified depressive disorder: F32.89.',
          'Unspecified depressive disorder: F32.A (APA updated this from F32.9 in its October 2021 coding update).',
          'Depressive disorder due to another medical condition: F06.31 (with depressive features) or F06.32 (with major depressive-like episode), with the medical condition coded as well.',
          'Peripartum onset is a DSM-5-TR specifier for major depressive disorder, not a separate DSM diagnosis. See the postpartum section below for the ICD-10-CM side.',
        ],
      },
      {
        heading: 'Related codes coded outside F32 and F33',
        bullets: [
          'F34.1 - Dysthymic disorder, for depressed mood that is persistent over a long period. It has an Excludes2 note for anxiety depression that is mild or not persistent (F41.8).',
          'F41.8 - Other specified anxiety disorders. "Mixed anxiety and depressive disorder" indexes here in the U.S. code set. F41.2 is a WHO ICD-10 code and is not valid in ICD-10-CM, so a claim with F41.2 will be rejected. If the patient meets criteria for both a full anxiety disorder and a depressive disorder, code each one instead.',
          'F43.21 - Adjustment disorder with depressed mood, when symptoms follow an identifiable stressor and the clinician diagnoses an adjustment disorder rather than a depressive disorder.',
          'F06.31 and F06.32 - Mood disorder due to known physiological condition, with depressive features or with a major depressive-like episode. Code the underlying condition (for example hypothyroidism) first.',
          'F53.0 - Postpartum depression. It sits in category F53 (mental and behavioral disorders associated with the puerperium, not elsewhere classified) and has Excludes1 notes for mood disorders with psychotic features and for postpartum dysphoria (O90.6). Postpartum psychosis is F53.1.',
        ],
      },
      {
        heading: 'Screening codes: Z13.31 and Z13.32',
        bullets: [
          'Z13.31 - Encounter for screening for depression, for example a PHQ-9 given to a patient with no depression diagnosis at an annual visit.',
          'Z13.32 - Encounter for screening for maternal depression, used when a mother is screened, for example during prenatal or postpartum care. Some claim edits treat it as a female-only code, so check how your payer applies it when the screening happens at an infant visit.',
          'If the screen is positive and the provider diagnoses depression at the same visit, report the F code for the diagnosis.',
        ],
      },
      {
        heading: 'Documentation that supports a depression code',
        bullets: [
          'Single or recurrent episode, stated in the assessment.',
          'Current severity (mild, moderate, severe) and whether psychotic features are present, or remission status (partial or full).',
          'Measurement scores such as the PHQ-9 at intake and follow-up, which show both severity and response to treatment.',
          'Suicide risk assessment and safety planning when applicable.',
          'Coexisting conditions that were evaluated or treated, such as anxiety, ADHD or substance use.',
          'The treatment plan: medication management, psychotherapy, follow-up interval and goals. For psychotherapy (CPT 90832, 90834, 90837), record start and stop times or total time.',
          'An updated diagnosis whenever severity or remission status changes. A patient who started at F33.2 and improved should not still be billed as F33.2 a year later.',
        ],
      },
      {
        heading: 'Common depression claim denials and how to avoid them',
        bullets: [
          'Unspecified codes for ongoing psychotherapy: months of sessions billed under F32.A or F32.9 are more likely to draw medical-necessity reviews and are harder to defend on appeal than a specific diagnosis with a documented treatment plan.',
          'Mismatched severity: the claim says F32.0 (mild) while the note describes severe symptoms and a high PHQ-9 score, or the reverse. Reviewers compare the code with the record.',
          'Wrong episode category: billing F32 for a patient whose history shows prior episodes. Recurrent depression belongs in F33.',
          'Truncated or invalid codes: billing F32, F33 or F33.4 without the required characters, or using F41.2. Expect a rejection or a denial such as CARC 146 (diagnosis invalid for the date of service) or CARC 16 (claim lacks information or has billing errors).',
          'Diagnosis does not support the procedure: CARC 11, "the diagnosis is inconsistent with the procedure," for example a screening Z code linked to a psychotherapy code.',
        ],
      },
    ],
    faqs: [
      { question: 'What is the ICD-10 code for depression?', answer: 'Depression documented without further detail (depression NOS) is F32.A, depression, unspecified. Major depressive disorder is coded in F32 (single episode) or F33 (recurrent), with codes for severity and remission, for example F32.1 or F33.41.' },
      { question: 'What is the difference between F32.9 and F32.A?', answer: 'F32.9 is major depressive disorder, single episode, unspecified: the provider diagnosed major depressive disorder but did not document severity. F32.A is depression, unspecified, used when the provider documents depression without diagnosing major depressive disorder.' },
      { question: 'What is the ICD-10 code for recurrent major depressive disorder?', answer: 'Recurrent major depressive disorder is coded in category F33: F33.0 mild, F33.1 moderate, F33.2 severe without psychotic features, F33.3 severe with psychotic symptoms, F33.41 partial remission, F33.42 full remission and F33.9 unspecified.' },
      { question: 'What is the ICD-10 code for persistent depressive disorder (dysthymia)?', answer: 'Persistent depressive disorder is F34.1. The ICD-10-CM title is dysthymic disorder, and persistent depressive disorder is listed as an inclusion term.' },
      { question: 'What is the ICD-10 code for anxiety and depression?', answer: 'Mixed anxiety and depressive disorder, where neither condition meets full criteria, indexes to F41.8 in ICD-10-CM. F41.2 is not a valid U.S. code. If both a full anxiety disorder and a depressive disorder are diagnosed, code each one separately.' },
      { question: 'What is the ICD-10 code for depression screening?', answer: 'Screening for depression in a patient without a diagnosis is Z13.31, encounter for screening for depression. Maternal depression screening is Z13.32. If the screen leads to a diagnosis, report the F code.' },
    ],
    closing: [
      'Depression coding has more moving parts than most behavioral health diagnoses: episode, severity and remission all change the code, and F32.A and F32.9 are easy to mix up. Most denials come from codes that were never updated after the first visit, or that do not match what the note describes.',
      'Alpha Medi Assist\'s certified coders review psychiatry and counseling documentation before claims go out, so the diagnosis on the claim matches the record and supports the service billed.',
    ],
    related: [
      { label: 'Psychiatry billing services', path: '/specialties/psychiatry' },
      { label: 'Mental health counseling billing', path: '/specialties/mental-health-counseling' },
      { label: 'Medical coding services', path: '/medical-coding-services' },
      { label: 'ICD-10 codes for anxiety', path: '/blog/what-is-the-icd-10-code-for-anxiety' },
      { label: 'ICD-10 codes for ADHD', path: '/blog/what-is-the-icd-10-code-for-adhd' },
      { label: 'Denial code CO-11: diagnosis inconsistent with procedure', path: '/denial-codes/co-11' },
      { label: 'Denial code CO-16: claim lacks information', path: '/denial-codes/co-16' },
    ],
    references: [
      CDC_ICD10CM_GUIDELINES,
      CMS_ICD10,
      { label: 'NIMH: Depression', url: 'https://www.nimh.nih.gov/health/topics/depression' },
      APA_DSM,
      { label: 'American Psychiatric Association: 2021 DSM-5 coding updates', url: 'https://www.psychiatry.org/psychiatrists/practice/dsm/updates-to-dsm/coding-updates/2021-coding-updates' },
      X12_CARC,
    ],
  },
  {
    slug: 'what-is-the-icd-10-code-for-ptsd',
    datePublished: '2026-11-25',
    category: 'Coding',
    title: 'What Is the ICD-10 Code for PTSD? F43.10, F43.11, F43.12',
    seoTitle: 'ICD-10 Code for PTSD: F43.10, F43.11, F43.12 and F43.0',
    seoDescription:
      'PTSD is F43.10 (unspecified), F43.11 (acute) or F43.12 (chronic). Acute stress reaction, prolonged grief, complex PTSD, trauma history and denials.',
    excerpt:
      'The PTSD codes in ICD-10-CM subcategory F43.1, how acute and chronic are documented, related stress and adjustment codes, complex PTSD, and how to avoid denials.',
    intro: [
      'Short answer: post-traumatic stress disorder is coded in ICD-10-CM subcategory F43.1. Use F43.10 for PTSD, unspecified, F43.11 for acute PTSD and F43.12 for chronic PTSD. F43.1 by itself is not billable; the claim needs the fifth character.',
      'PTSD sits in category F43, reaction to severe stress, and adjustment disorders, alongside acute stress reaction, prolonged grief disorder and adjustment disorders. This guide covers each code, how acute and chronic are usually documented, the DSM-5-TR crosswalk, how complex PTSD is handled in the U.S. code set, trauma history Z codes, and the claim problems behind most PTSD-related denials. Codes are revised every October 1, so always check the current CMS/CDC code files.',
    ],
    sections: [
      {
        heading: 'PTSD and stress-related codes at a glance (category F43)',
        bullets: [
          'F43.0 - Acute stress reaction.',
          'F43.10 - Post-traumatic stress disorder, unspecified.',
          'F43.11 - Post-traumatic stress disorder, acute.',
          'F43.12 - Post-traumatic stress disorder, chronic.',
          'F43.2- - Adjustment disorders (F43.20 through F43.29, listed below).',
          'F43.81 - Prolonged grief disorder.',
          'F43.89 - Other reactions to severe stress.',
          'F43.9 - Reaction to severe stress, unspecified.',
          'F43, F43.1, F43.2 and F43.8 are headings and are not billable.',
        ],
      },
      {
        heading: 'Acute vs. chronic PTSD: what to document',
        paragraphs: [
          'The ICD-10-CM tabular list does not define how long symptoms must last for "acute" or "chronic." The widely used convention comes from DSM-IV, which specified acute PTSD when symptoms had lasted less than 3 months and chronic PTSD when they had lasted 3 months or more. Many payers and coding references still follow that 3-month line.',
          'DSM-5 and DSM-5-TR dropped the acute and chronic specifiers, and DSM-5-TR lists PTSD with F43.10. That is why so many claims carry the unspecified code. When the provider documents the duration of symptoms, or states acute or chronic, the more specific F43.11 or F43.12 can be used. If the note is silent, F43.10 is correct, and a provider query is better than guessing.',
          'The DSM-5-TR "with delayed expression" specifier (full criteria not met until at least 6 months after the event) does not have its own ICD-10-CM code. Record it in the note.',
        ],
      },
      {
        heading: 'Matching DSM-5-TR diagnoses to ICD-10-CM codes',
        bullets: [
          'Posttraumatic stress disorder: F43.10, or F43.11/F43.12 when acute or chronic duration is documented.',
          'Acute stress disorder: F43.0. In DSM-5-TR this applies to symptoms lasting 3 days to 1 month after the trauma; PTSD requires more than 1 month.',
          'Adjustment disorders: F43.20-F43.25 by subtype (see below).',
          'Prolonged grief disorder: F43.81.',
          'Other specified trauma- and stressor-related disorder: F43.89.',
          'Unspecified trauma- and stressor-related disorder: F43.9.',
          'Reactive attachment disorder (F94.1) and disinhibited social engagement disorder (F94.2) are trauma-related DSM-5-TR diagnoses coded with childhood-onset disorders.',
        ],
      },
      {
        heading: 'F43.8- changed: prolonged grief disorder and F43.89',
        paragraphs: [
          'Before October 1, 2022, "other reactions to severe stress" was the single code F43.8. The FY2023 update expanded it into F43.81 (prolonged grief disorder) and F43.89 (other reactions to severe stress). F43.8 is no longer a billable code, so a claim that still uses it will be rejected as invalid.',
          'Use F43.81 only when the provider diagnoses prolonged grief disorder. Normal grief that does not meet criteria is not a mental disorder diagnosis and should not be coded as one.',
        ],
      },
      {
        heading: 'Adjustment disorders as a differential',
        paragraphs: [
          'Adjustment disorders follow an identifiable stressor that does not have to be traumatic, and the symptoms are milder or shorter than PTSD. When the clinician diagnoses an adjustment disorder, use the subtype code:',
        ],
        bullets: [
          'F43.20 - Adjustment disorder, unspecified.',
          'F43.21 - Adjustment disorder with depressed mood.',
          'F43.22 - Adjustment disorder with anxiety.',
          'F43.23 - Adjustment disorder with mixed anxiety and depressed mood.',
          'F43.24 - Adjustment disorder with disturbance of conduct.',
          'F43.25 - Adjustment disorder with mixed disturbance of emotions and conduct.',
          'F43.29 - Adjustment disorder with other symptoms.',
          'If symptoms later meet PTSD criteria, update the diagnosis to the F43.1- code rather than billing both for the same symptoms.',
        ],
      },
      {
        heading: 'Complex PTSD in ICD-10-CM',
        paragraphs: [
          'There is no separate code for complex PTSD in the U.S. ICD-10-CM code set, and DSM-5-TR does not list it as a separate diagnosis. Complex PTSD is a distinct diagnosis in the WHO ICD-11, which is not used for U.S. claims.',
          'When a provider documents complex PTSD, code the PTSD with F43.10, F43.11 or F43.12 based on the documentation, and code coexisting conditions that the provider diagnoses and treats separately. The note should describe the symptoms and impairment that support the treatment plan, since the code alone will not show the added complexity.',
        ],
      },
      {
        heading: 'Trauma history Z codes',
        paragraphs: [
          'Z codes in subcategory Z91.4- (personal history of psychological trauma) describe a past trauma that affects care. They are not a substitute for a PTSD diagnosis, but they can be reported with one when the history is relevant:',
        ],
        bullets: [
          'Z91.41- - Personal history of adult abuse, with sixth characters for the type, for example Z91.410 (adult physical and sexual abuse) and Z91.411 (adult psychological abuse).',
          'Z91.42 - Personal history of forced labor or sexual exploitation.',
          'Z91.49 - Other personal history of psychological trauma, not elsewhere classified.',
          'Code to the full, most specific code in the subcategory; Z91.4 and Z91.41 are headings.',
        ],
      },
      {
        heading: 'Documentation that supports a PTSD code',
        bullets: [
          'The diagnosis stated in the assessment, with acute or chronic status or the duration of symptoms.',
          'The traumatic event in general terms, and how DSM-5-TR criteria were met (intrusion, avoidance, negative changes in mood and thinking, changes in arousal and reactivity, duration over 1 month, and impairment).',
          'Measurement scores such as the PCL-5 at intake and follow-up.',
          'Coexisting conditions that were evaluated or treated, such as depression, anxiety or substance use.',
          'The treatment plan and the therapy approach used. For psychotherapy (CPT 90832, 90834, 90837), record start and stop times or total time.',
        ],
      },
      {
        heading: 'Common PTSD claim denials and how to avoid them',
        bullets: [
          'Truncated or retired codes: billing F43.1 without a fifth character, or the retired F43.8. Expect a rejection or a denial such as CARC 146 (diagnosis invalid for the date of service) or CARC 16 (claim lacks information or has billing errors).',
          'Acute or chronic not supported: billing F43.12 when the note never documents duration. If audited, the record has to support the more specific code.',
          'Diagnosis does not support the procedure: CARC 11, "the diagnosis is inconsistent with the procedure," for example a Z91.4- history code listed as the primary diagnosis for psychotherapy.',
          'Missing prior authorization for intensive or extended therapy where the payer requires it: CARC 197 (precertification/authorization absent).',
          'Adjustment disorder and PTSD billed together for the same symptoms, which signals a documentation conflict.',
        ],
      },
    ],
    faqs: [
      { question: 'What is the ICD-10 code for PTSD?', answer: 'PTSD is coded in subcategory F43.1: F43.10 (post-traumatic stress disorder, unspecified), F43.11 (acute) and F43.12 (chronic). F43.1 alone is not billable.' },
      { question: 'What is the difference between F43.10 and F43.12?', answer: 'F43.10 is PTSD, unspecified, used when the record does not say whether it is acute or chronic. F43.12 is chronic PTSD. By the long-standing DSM-IV convention, chronic means symptoms lasting 3 months or more; document the duration to support F43.12.' },
      { question: 'What is the ICD-10 code for complex PTSD?', answer: 'There is no separate complex PTSD code in U.S. ICD-10-CM. Code the PTSD with F43.10, F43.11 or F43.12 based on the documentation, and code other diagnosed conditions separately. Complex PTSD has its own code only in the WHO ICD-11.' },
      { question: 'What is the ICD-10 code for acute stress disorder?', answer: 'Acute stress disorder (acute stress reaction) is F43.0. It applies to symptoms in the first month after a traumatic event. If symptoms continue past one month and meet criteria, the diagnosis becomes PTSD.' },
      { question: 'Is F43.8 still a valid code?', answer: 'No. Since October 1, 2022, F43.8 has been split into F43.81 (prolonged grief disorder) and F43.89 (other reactions to severe stress). Use one of those codes instead.' },
      { question: 'Is there a Z code for a history of trauma?', answer: 'Yes. Subcategory Z91.4- covers personal history of psychological trauma, including Z91.41- (adult abuse), Z91.42 (forced labor or sexual exploitation) and Z91.49 (other psychological trauma, not elsewhere classified). These describe history; they do not replace a PTSD diagnosis.' },
    ],
    closing: [
      'PTSD coding comes down to a few codes, but denials follow the same patterns: unspecified codes that were never updated, acute or chronic status the note does not support, retired codes such as F43.8, and missing authorizations for extended therapy.',
      'Alpha Medi Assist\'s certified coders review behavioral health documentation and claims before submission so the diagnosis, procedure and authorization line up the first time.',
    ],
    related: [
      { label: 'Mental health counseling billing', path: '/specialties/mental-health-counseling' },
      { label: 'Psychiatry billing services', path: '/specialties/psychiatry' },
      { label: 'Medical coding services', path: '/medical-coding-services' },
      { label: 'ICD-10 codes for anxiety', path: '/blog/what-is-the-icd-10-code-for-anxiety' },
      { label: 'ICD-10 codes for ADHD', path: '/blog/what-is-the-icd-10-code-for-adhd' },
      { label: 'Denial code CO-11: diagnosis inconsistent with procedure', path: '/denial-codes/co-11' },
      { label: 'Denial code CO-16: claim lacks information', path: '/denial-codes/co-16' },
    ],
    references: [
      CDC_ICD10CM_GUIDELINES,
      CMS_ICD10,
      { label: 'NIMH: Post-Traumatic Stress Disorder', url: 'https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd' },
      APA_DSM,
      X12_CARC,
    ],
  },
]
