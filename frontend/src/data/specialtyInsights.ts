// Specialty-specific billing knowledge shown on specialty pages
// (src/components/SpecialtyInsights.tsx). Purpose: give each specialty page
// genuinely unique, expert content (codes, modifiers, denial drivers,
// documentation) instead of interchangeable template copy.
//
// Accuracy rules for editors:
// - Code descriptors are short paraphrases, not official CPT text.
// - Only list codes/rules you can verify against current CPT/HCPCS/CMS sources.
// - Review annually (CPT and Medicare fee schedule changes take effect Jan 1).

export interface SpecialtyInsight {
  /** Lead sentence explaining what makes billing in this specialty different */
  intro: string
  codes: { code: string; desc: string }[]
  modifiers: { mod: string; use: string }[]
  denials: string[]
  documentation: string[]
  faqs: { question: string; answer: string }[]
  /** Payer and coverage rules that shape billing in this specialty */
  payerRules?: string[]
  /** Denial code guides most relevant to this specialty (slugs under /denial-codes) */
  denialCodes?: string[]
  /** Optional cross-link to a closely related specialty page (avoids cannibalization) */
  seeAlso?: { label: string; path: string; note: string }
}

export const specialtyInsights: Record<string, SpecialtyInsight> = {
  cardiology: {
    intro:
      'Cardiology billing mixes office E/M visits with high-value diagnostic testing, where the same test is often split into a professional and a technical component, and many tests require prior authorization or must meet Medicare coverage policies.',
    codes: [
      { code: '93000', desc: 'Electrocardiogram (ECG), complete: tracing with interpretation and report' },
      { code: '93306', desc: 'Transthoracic echocardiogram, complete, with spectral and color flow Doppler' },
      { code: '93350', desc: 'Stress echocardiogram with interpretation and report' },
      { code: '93015', desc: 'Cardiovascular stress test, complete (supervision, interpretation and tracing)' },
      { code: '78452', desc: 'Myocardial perfusion imaging (SPECT), multiple studies' },
      { code: '93458', desc: 'Left heart catheterization with coronary angiography' },
      { code: '92928', desc: 'Percutaneous coronary stent placement, single major coronary artery' },
    ],
    modifiers: [
      { mod: '26 / TC', use: 'Split billing when the physician reads a test performed on hospital or outside equipment' },
      { mod: '25', use: 'Significant, separately identifiable E/M on the same day as a procedure or test' },
      { mod: '59 / XS', use: 'Distinct procedural service when NCCI edits would otherwise bundle services' },
    ],
    denials: [
      'Medical necessity: echo and stress testing frequency or diagnosis not meeting payer or Medicare coverage policy',
      'Missing prior authorization for nuclear imaging, echo or CT angiography with commercial plans',
      'Global vs. split billing errors (billing a global test when the technical component belongs to the hospital)',
      'Catheterization components bundled incorrectly or billed separately when included',
    ],
    documentation: [
      'Signed interpretation and report for every diagnostic test billed',
      'Diagnosis codes that match coverage policy for the test (symptoms, findings, or condition being monitored)',
      'Clear separation of the E/M note from the procedure note when modifier 25 is used',
    ],
    faqs: [
      { question: 'When should cardiology practices bill the professional component (modifier 26)?', answer: 'Bill with modifier 26 when the cardiologist only interprets a test performed on equipment owned by a hospital or another facility. The facility bills the technical component (TC). Bill globally, without either modifier, only when the practice owns the equipment and performs both parts.' },
      { question: 'Why are echocardiograms denied for medical necessity?', answer: 'Most echo denials come from diagnosis codes that do not support the test under the payer\'s coverage policy, or from repeat studies without a documented change in clinical status. Linking the right diagnosis and documenting the reason for a repeat study prevents most of them.' },
      { question: 'Do cardiology tests need prior authorization?', answer: 'Many commercial and Medicare Advantage plans require prior authorization for nuclear stress tests, echocardiograms, cardiac CT and MRI, often through a radiology benefit manager. Requirements differ by plan, so authorization should be checked at scheduling.' },
    ],
  },

  orthopedics: {
    intro:
      'Orthopedic clinic billing is driven by office visits, joint injections, in-office X-rays, splinting and durable medical equipment (DME). Laterality and same-day E/M rules cause most of the errors, so this page focuses on non-operative orthopedic care.',
    codes: [
      { code: '99202–99215', desc: 'New and established patient office visits (E/M)' },
      { code: '20610', desc: 'Arthrocentesis, aspiration or injection, major joint or bursa, without ultrasound guidance' },
      { code: '20611', desc: 'Same as 20610, with ultrasound guidance and permanent recording' },
      { code: '73030', desc: 'X-ray of shoulder, minimum two views' },
      { code: '73562', desc: 'X-ray of knee, three views' },
      { code: '29125', desc: 'Application of short arm splint (forearm to hand), static' },
      { code: 'J3301', desc: 'Triamcinolone acetonide injection, per 10 mg (billed with the injection procedure)' },
    ],
    modifiers: [
      { mod: 'RT / LT / 50', use: 'Right side, left side, or bilateral procedure; missing laterality is a top rejection cause' },
      { mod: '25', use: 'Separate E/M when a new problem is evaluated on the day of an injection' },
      { mod: '57', use: 'E/M that results in the decision for major surgery (the day before or day of surgery)' },
    ],
    denials: [
      'Missing or conflicting laterality modifiers on injections, imaging and DME',
      'E/M with modifier 25 denied because the note does not show work beyond the pre-procedure assessment',
      'Drug units billed incorrectly for injectables (units must match the HCPCS dosage descriptor)',
      'Office visits billed during another surgeon\'s global period without the correct modifier',
    ],
    documentation: [
      'Joint, side and imaging guidance documented for every injection',
      'Drug name, dose, lot/NDC where required, and wasted amount for single-dose vials',
      'For DME: medical necessity, fitting details and supplier requirements',
    ],
    payerRules: [
      'Major surgeries carry a 90-day Medicare global period; visits for the same condition inside it are included unless modifier 24, 25, 57, 58, 78 or 79 applies and is documented.',
      'Braces and other DME billed with HCPCS L-codes require DMEPOS supplier enrollment, and many items need written orders and documentation of medical need.',
      'Commercial payers commonly require prior authorization for MRI and for elective joint surgery, often through a radiology or musculoskeletal benefit manager.',
      "Workers' compensation and auto-injury claims follow state fee schedules and their own claim forms and deadlines, separate from health insurance.",
    ],
    denialCodes: ['co-97', 'co-4', 'co-22', 'co-16'],
    faqs: [
      { question: 'Can I bill an office visit and a joint injection on the same day?', answer: 'Yes, but only if the visit addressed something significant and separately identifiable beyond the routine assessment before the injection, documented in the note and billed with modifier 25. An injection-only visit is billed with the procedure code alone.' },
      { question: 'How do I bill bilateral knee injections?', answer: 'Most payers want 20610 with modifier 50 on one line, while some require separate RT and LT lines. Follow each payer\'s bilateral billing policy and bill drug units for the total dose given.' },
      { question: 'What is the difference between orthopedic practice billing and orthopedic surgery billing?', answer: 'Practice billing covers office visits, injections, imaging, splints and DME. Surgical billing deals with operative codes, global periods, assistant surgeons and surgical modifiers. Most orthopedic groups need both handled consistently.' },
    ],
    seeAlso: { label: 'Orthopedic surgery billing & coding', path: '/specialties/orthopedic-surgery', note: 'Operative billing (joint replacement, arthroscopy, spine), global periods and surgical modifiers are covered on our orthopedic surgery page.' },
  },

  'orthopedic-surgery': {
    intro:
      'Orthopedic surgery billing revolves around global surgical periods, multiple-procedure rules, assistant surgeon billing and prior authorization for high-cost procedures such as joint replacement and spine surgery.',
    codes: [
      { code: '27447', desc: 'Total knee arthroplasty' },
      { code: '27130', desc: 'Total hip arthroplasty' },
      { code: '23472', desc: 'Total shoulder arthroplasty' },
      { code: '29881', desc: 'Knee arthroscopy with meniscectomy (medial or lateral)' },
      { code: '29827', desc: 'Shoulder arthroscopy with rotator cuff repair' },
      { code: '63030', desc: 'Lumbar laminotomy with decompression, single interspace' },
      { code: '99024', desc: 'Post-operative follow-up visit included in the global period (tracking code)' },
    ],
    modifiers: [
      { mod: '51', use: 'Multiple procedures in the same session (payment reduced for secondary procedures)' },
      { mod: '58 / 78 / 79', use: 'Staged procedure, unplanned return to the OR, or unrelated procedure during the global period' },
      { mod: '80 / 82 / AS', use: 'Assistant at surgery (physician, when no resident is available, or non-physician practitioner)' },
      { mod: '22', use: 'Substantially increased procedural work, supported by the operative note' },
    ],
    denials: [
      'Prior authorization missing or not matching the procedure actually performed',
      'Post-operative visits billed separately inside the 90-day global period',
      'Assistant surgeon billed for procedures where payers do not allow an assistant',
      'Modifier 22 billed without documentation of the additional time and complexity',
    ],
    documentation: [
      'Operative report signed and listing every procedure performed, with laterality',
      'Authorization number matched to CPT codes; update the authorization if the procedure changes intra-op',
      'Time, complexity and reasons for any modifier 22 claim',
    ],
    faqs: [
      { question: 'What is a global surgical period in orthopedic billing?', answer: 'Major orthopedic procedures usually carry a 90-day global period (10 days for minor procedures) during which routine post-operative visits are included in the surgical payment. Those visits are tracked with 99024 and not billed separately.' },
      { question: 'When is modifier 78 used instead of 79?', answer: 'Modifier 78 is for an unplanned return to the operating room for a related complication during the global period. Modifier 79 is for an unrelated procedure performed during the global period.' },
      { question: 'Do joint replacements need prior authorization?', answer: 'Most commercial and Medicare Advantage plans require prior authorization for total joint replacement and spine surgery, often with documentation of failed conservative treatment. Traditional Medicare generally does not require prior authorization for these procedures, but coverage criteria still apply.' },
    ],
    seeAlso: { label: 'Orthopedic practice billing', path: '/specialties/orthopedics', note: 'Office visits, injections, X-rays, splints and DME are covered on our orthopedic practice billing page.' },
  },

  'pain-management': {
    intro:
      'Interventional pain management is one of the most audited specialties. Epidural steroid injections, facet joint procedures and radiofrequency ablation are governed by detailed Medicare coverage policies covering frequency, imaging guidance and documented pain relief.',
    codes: [
      { code: '64483', desc: 'Transforaminal epidural injection, lumbar or sacral, single level, with imaging guidance' },
      { code: '62323', desc: 'Interlaminar epidural injection, lumbar or sacral, with imaging guidance' },
      { code: '64493', desc: 'Facet joint injection (or medial branch block), lumbar or sacral, single level, with imaging guidance' },
      { code: '64635', desc: 'Radiofrequency ablation of facet joint nerves, lumbar or sacral, single level' },
      { code: '20552', desc: 'Trigger point injection(s), one or two muscles' },
      { code: '63650', desc: 'Percutaneous implantation of spinal cord stimulator electrode array' },
    ],
    modifiers: [
      { mod: '50 / RT / LT', use: 'Bilateral or single-side facet and transforaminal procedures' },
      { mod: '59 / XS', use: 'Separate site or session when procedures would otherwise bundle' },
      { mod: '25', use: 'Separate E/M on the day of an injection, only when clearly documented' },
    ],
    denials: [
      'Frequency limits exceeded for epidural or facet procedures under payer or Medicare coverage policy',
      'Missing documentation of diagnostic block results (percentage of pain relief) before radiofrequency ablation',
      'No record of failed conservative care (physical therapy, medications) for the required period',
      'Imaging guidance billed separately when it is already included in the procedure code',
    ],
    documentation: [
      'Pain scores before and after diagnostic blocks, and duration of relief',
      'Levels and sides treated, imaging used, and medications injected',
      'History of conservative treatment and functional limitations',
    ],
    payerRules: [
      'Medicare contractors publish local coverage determinations (LCDs) for epidural steroid injections and facet joint interventions that limit frequency and require documented conservative care and response to prior injections.',
      'Since July 2023, Medicare requires prior authorization for facet joint interventions performed in hospital outpatient departments.',
      'Fluoroscopic or CT guidance is included in many spinal injection codes and cannot be billed separately for them.',
      'Commercial payers often require prior authorization for radiofrequency ablation and spinal cord stimulator trials.',
    ],
    denialCodes: ['co-50', 'co-197', 'co-97', 'co-11'],
    faqs: [
      { question: 'Why are facet joint and RFA procedures denied so often?', answer: 'Coverage policies for facet interventions require specific steps, typically documented diagnostic medial branch blocks with a significant percentage of pain relief before ablation, plus limits on how often procedures can be repeated. Missing pain-relief documentation is the most common cause of denial.' },
      { question: 'Is fluoroscopic guidance billed separately for epidural injections?', answer: 'For most current epidural and facet injection codes, imaging guidance is included in the procedure code and is not billed separately.' },
      { question: 'Do pain management procedures need prior authorization?', answer: 'Commercial and Medicare Advantage plans frequently require authorization for epidurals, facet procedures, RFA and spinal cord stimulator trials and implants. We verify requirements at scheduling for every payer.' },
    ],
  },

  psychiatry: {
    intro:
      'Psychiatry billing is for prescribers (psychiatrists and psychiatric nurse practitioners) who combine medication management with psychotherapy. The key skill is pairing E/M codes with time-based psychotherapy add-on codes correctly, in person and via telehealth.',
    codes: [
      { code: '90791', desc: 'Psychiatric diagnostic evaluation without medical services' },
      { code: '90792', desc: 'Psychiatric diagnostic evaluation with medical services' },
      { code: '99213–99215', desc: 'Established patient E/M for medication management' },
      { code: '90833', desc: 'Psychotherapy add-on with E/M, about 30 minutes' },
      { code: '90836', desc: 'Psychotherapy add-on with E/M, about 45 minutes' },
      { code: '90838', desc: 'Psychotherapy add-on with E/M, about 60 minutes' },
      { code: '90785', desc: 'Interactive complexity add-on' },
    ],
    modifiers: [
      { mod: '95 / POS 10 / POS 02', use: 'Telehealth: payer-specific modifier and place-of-service rules for patient home vs. other sites' },
      { mod: '25', use: 'Separate E/M with certain same-day services when required by payer policy' },
    ],
    denials: [
      'Psychotherapy add-on billed without separately documented psychotherapy time',
      'E/M level not supported once psychotherapy time is excluded from the E/M documentation',
      'Telehealth claims with the wrong place of service or modifier for the payer',
      'Prior authorization missing for TMS or for visits beyond plan limits',
    ],
    documentation: [
      'Psychotherapy start/stop time or total time, separate from E/M work',
      'Medication management decision-making (supports the E/M level)',
      'Telehealth consent and patient location for virtual visits',
    ],
    faqs: [
      { question: 'Can a psychiatrist bill E/M and psychotherapy on the same day?', answer: 'Yes. Bill the E/M code for medication management plus the psychotherapy add-on (90833, 90836 or 90838) based on psychotherapy time. Time spent on psychotherapy cannot also be counted toward the E/M level.' },
      { question: 'What is the difference between 90791 and 90792?', answer: '90791 is a psychiatric diagnostic evaluation without medical services, typically by therapists. 90792 includes medical services such as medication review or physical assessment and is billed by physicians and other prescribers.' },
      { question: 'How should telepsychiatry be billed?', answer: 'Use the same CPT codes as in-person visits with the payer\'s required place of service (for example POS 10 when the patient is at home) and telehealth modifier. Rules vary between Medicare, Medicaid and commercial plans.' },
    ],
    seeAlso: { label: 'Mental health & therapy billing', path: '/specialties/mental-health-counseling', note: 'Billing for therapists and counselors (LCSW, LPC, LMFT, psychologists) is covered on our mental health billing page.' },
  },

  'mental-health-counseling': {
    intro:
      'Therapy practices bill mostly time-based psychotherapy codes, so time thresholds, credentialing of each clinician type and payer visit limits drive revenue. This page covers non-prescribing therapists: LCSWs, LPCs, LMFTs and psychologists.',
    codes: [
      { code: '90791', desc: 'Psychiatric diagnostic evaluation (intake), no medical services' },
      { code: '90832', desc: 'Psychotherapy, about 30 minutes (16–37 minutes)' },
      { code: '90834', desc: 'Psychotherapy, about 45 minutes (38–52 minutes)' },
      { code: '90837', desc: 'Psychotherapy, about 60 minutes (53 minutes or more)' },
      { code: '90846 / 90847', desc: 'Family psychotherapy without / with the patient present' },
      { code: '90853', desc: 'Group psychotherapy' },
      { code: '90839 / 90840', desc: 'Psychotherapy for crisis, first 60 minutes / each additional 30 minutes' },
    ],
    modifiers: [
      { mod: '95 / POS 10', use: 'Telehealth session with the patient at home (payer-specific)' },
      { mod: 'HO / AH / AJ', use: 'Credential-level modifiers some Medicaid and commercial plans require (vary by plan and state)' },
    ],
    denials: [
      'Session time below the threshold for the code billed (for example 90837 with less than 53 minutes)',
      'Clinician not credentialed with the plan, or billing under the wrong rendering provider',
      'Session limits or authorization requirements exceeded',
      'Telehealth billed with the wrong place of service',
    ],
    documentation: [
      'Exact session start and end times',
      'Treatment plan, diagnosis and progress toward goals',
      'For family sessions: who attended and whether the patient was present',
    ],
    faqs: [
      { question: 'What is the difference between 90834 and 90837?', answer: '90834 is for psychotherapy of about 45 minutes (38–52 minutes of face-to-face time). 90837 is for 53 minutes or more. Billing 90837 requires documented session time that meets the threshold, and some payers review it more closely.' },
      { question: 'Can licensed counselors and marriage and family therapists bill Medicare?', answer: 'Yes. Since January 1, 2024, mental health counselors (including LPCs) and marriage and family therapists can enroll in Medicare and bill for their services. They must enroll through PECOS before billing.' },
      { question: 'Why do therapy claims get denied for credentialing?', answer: 'Each clinician must be credentialed with each payer, and some plans require services to be billed under the clinician\'s own NPI. Claims for uncredentialed clinicians, or billed under a supervisor without payer approval, are commonly denied.' },
    ],
    seeAlso: { label: 'Psychiatry billing for prescribers', path: '/specialties/psychiatry', note: 'Medication management with psychotherapy add-on codes for psychiatrists and psychiatric NPs is covered on our psychiatry billing page.' },
  },

  dermatology: {
    intro:
      'Dermatology billing hinges on lesion-level detail: biopsy technique, lesion size including margins, benign vs. malignant pathology, and the line between medically necessary and cosmetic procedures.',
    codes: [
      { code: '11102', desc: 'Tangential (shave) biopsy of skin, single lesion' },
      { code: '11104', desc: 'Punch biopsy of skin, single lesion' },
      { code: '11106', desc: 'Incisional biopsy of skin, single lesion' },
      { code: '17000 / 17003 / 17004', desc: 'Destruction of premalignant lesions (e.g., actinic keratoses): first, 2–14 each, 15 or more' },
      { code: '17110', desc: 'Destruction of benign lesions such as warts, up to 14' },
      { code: '11600–11646', desc: 'Excision of malignant lesion, by site and excised diameter' },
      { code: '17311', desc: 'Mohs micrographic surgery, head/neck/hands/feet/genitalia, first stage' },
    ],
    modifiers: [
      { mod: '25', use: 'Separate E/M on the same day as a minor procedure' },
      { mod: '59 / XS', use: 'Procedures on separate lesions or sites that would otherwise bundle' },
    ],
    denials: [
      'Cosmetic exclusions (for example, removal of asymptomatic benign lesions)',
      'Excision size coded without including margins, or before pathology confirms benign vs. malignant',
      'Biopsy and destruction of the same lesion billed together',
      'E/M with modifier 25 not supported by separate documentation',
    ],
    documentation: [
      'Lesion location, size (with margins for excisions) and method',
      'Symptoms or clinical concern that make treatment medically necessary',
      'Pathology result linked before coding excisions',
    ],
    payerRules: [
      'Medicare covers removal of benign skin lesions only when medical necessity is documented (for example bleeding, itching, inflammation, or suspicion of malignancy); purely cosmetic removal is excluded.',
      'Lesion excisions carry a Medicare global surgical period, so related follow-up visits inside it are not paid separately; Mohs surgery codes have a 0-day global period.',
      'Excision codes are selected by the excised diameter including margins and by the pathology result, so final coding often waits for the pathology report.',
      'Many commercial plans require prior authorization for biologics and phototherapy; the approved drug, dose and dates must match the claim.',
    ],
    denialCodes: ['co-97', 'co-11', 'co-4', 'co-16'],
    faqs: [
      { question: 'Should excisions be coded before or after pathology?', answer: 'Wait for pathology. Benign (11400–11446) and malignant (11600–11646) excision codes differ, and the code also depends on the excised diameter including margins.' },
      { question: 'When is lesion removal considered cosmetic?', answer: 'Removing a benign lesion without symptoms (such as bleeding, itching, inflammation or a suspicious change) is generally considered cosmetic and not covered. Documenting the clinical reason is essential.' },
      { question: 'How are multiple biopsies billed?', answer: 'Bill the primary biopsy code for the first lesion and the matching add-on code for each additional lesion. When different biopsy techniques are used, follow the CPT hierarchy for which code is primary.' },
    ],
  },

  urology: {
    intro:
      'Urology billing combines office procedures (cystoscopy, urodynamics, prostate biopsy) with in-office drug administration, which brings drug unit, NDC and component-billing rules into play.',
    codes: [
      { code: '52000', desc: 'Cystourethroscopy (diagnostic)' },
      { code: '51798', desc: 'Post-void residual measurement by ultrasound' },
      { code: '51741', desc: 'Complex uroflowmetry' },
      { code: '55700', desc: 'Prostate biopsy, needle or punch, any approach' },
      { code: '52332', desc: 'Cystourethroscopy with insertion of indwelling ureteral stent' },
      { code: 'J9217', desc: 'Leuprolide acetate (depot suspension), per 7.5 mg' },
    ],
    modifiers: [
      { mod: '26 / TC', use: 'Urodynamic studies and imaging performed or read in different settings' },
      { mod: '25', use: 'Separate E/M on the day of an office procedure' },
      { mod: '59 / XS', use: 'Distinct services that would otherwise bundle under NCCI edits' },
    ],
    denials: [
      'Drug units or NDC missing or not matching the dose administered',
      'Urodynamic components billed without the correct professional/technical split',
      'Screening services (for example PSA screening) billed without coverage or frequency checks',
      'Bundling of cystoscopy with same-session procedures',
    ],
    documentation: [
      'Drug, dose, NDC, lot and route for every injection',
      'Indication for each diagnostic study',
      'Procedure notes for each office procedure',
    ],
    payerRules: [
      'Medicare covers screening PSA tests (G0103) once every 12 months for men age 50 and older; diagnostic PSA tests are billed with a diagnosis that supports them.',
      'Office cystoscopy (52000) has a 0-day global period, but procedures done in the same session are frequently bundled under NCCI edits.',
      'Injectable drugs such as leuprolide (J9217) are billed in units defined by the HCPCS descriptor, and many payers require the NDC on the claim.',
      "Urodynamic studies performed in the office with the practice's equipment are billed globally; when equipment belongs to a facility, only the professional component (modifier 26) is billed.",
    ],
    denialCodes: ['co-97', 'co-4', 'co-16', 'co-11'],
    faqs: [
      { question: 'How are hormone injections like leuprolide billed in urology?', answer: 'Bill the administration code plus the HCPCS drug code with units that match the dose given (J9217 is per 7.5 mg), and include the NDC when the payer requires it.' },
      { question: 'Can cystoscopy be billed with an office visit?', answer: 'Only when a separately identifiable E/M service is documented and billed with modifier 25. The routine pre-procedure assessment is included in the cystoscopy.' },
      { question: 'Why are urodynamics claims denied?', answer: 'Common causes are missing medical necessity, the wrong combination of urodynamic codes for the same session, and incorrect professional/technical component billing.' },
    ],
  },

  gastroenterology: {
    intro:
      'GI billing hinges on the difference between screening and diagnostic endoscopy, which changes the codes, modifiers and patient cost-sharing, plus correct linkage of biopsies and polypectomies to pathology.',
    codes: [
      { code: '45378', desc: 'Colonoscopy, diagnostic' },
      { code: '45380', desc: 'Colonoscopy with biopsy, single or multiple' },
      { code: '45385', desc: 'Colonoscopy with removal of lesion(s) by snare technique' },
      { code: 'G0121', desc: 'Screening colonoscopy, patient not at high risk (Medicare)' },
      { code: 'G0105', desc: 'Screening colonoscopy, patient at high risk (Medicare)' },
      { code: '43239', desc: 'Upper GI endoscopy (EGD) with biopsy' },
    ],
    modifiers: [
      { mod: 'PT', use: 'Medicare: a screening colonoscopy that became diagnostic or therapeutic' },
      { mod: '33', use: 'Commercial payers: preventive service (screening intent)' },
      { mod: '59 / XS', use: 'Separate lesions treated with different techniques' },
    ],
    denials: [
      'Screening vs. diagnostic coding mismatch with the documented indication',
      'Screening frequency limits not met',
      'Biopsy and polypectomy of the same lesion both billed',
      'Anesthesia for screening procedures billed without the matching modifiers',
    ],
    documentation: [
      'Indication (screening, surveillance or symptoms) recorded before the procedure',
      'Each lesion\'s location, size and removal technique',
      'Pathology linked to procedure lines',
    ],
    faqs: [
      { question: 'What happens when a screening colonoscopy turns into a polypectomy?', answer: 'The procedure is billed with the therapeutic code (for example 45385) and the screening diagnosis listed first. Medicare requires modifier PT; commercial payers typically use modifier 33 so the service is processed under preventive benefits.' },
      { question: 'What is the difference between G0121 and G0105?', answer: 'Both are Medicare screening colonoscopy codes. G0105 is for patients at high risk for colorectal cancer, and G0121 is for patients not at high risk. They have different frequency limits.' },
      { question: 'Can biopsy and snare removal be billed in the same colonoscopy?', answer: 'Yes, when they are performed on different lesions, typically with modifier 59 or XS. They cannot both be billed for the same lesion.' },
    ],
  },

  radiology: {
    intro:
      'Radiology billing is defined by the professional/technical split, prior authorization for advanced imaging, and precise matching of the code to the exact study performed (views, contrast, body area).',
    codes: [
      { code: '71046', desc: 'Chest X-ray, two views' },
      { code: '70553', desc: 'MRI brain without contrast, followed by contrast' },
      { code: '74177', desc: 'CT abdomen and pelvis with contrast' },
      { code: '76700', desc: 'Abdominal ultrasound, complete' },
      { code: '77067', desc: 'Screening mammography, bilateral, including computer-aided detection when performed' },
    ],
    modifiers: [
      { mod: '26', use: 'Professional component (interpretation) only' },
      { mod: 'TC', use: 'Technical component (equipment, staff, supplies) only' },
      { mod: '59 / XS / 76 / 77', use: 'Distinct or repeat studies on the same day' },
    ],
    denials: [
      'Missing or mismatched prior authorization for CT, MRI and PET (authorized code must match the code billed)',
      'Contrast documentation not matching the code (with, without, or without-then-with)',
      'Diagnosis codes that do not support medical necessity',
      'Global billing when the facility owns the equipment',
    ],
    documentation: [
      'Signed report stating views, contrast and technique',
      'Ordering provider and clinical indication',
      'Authorization numbers matched to the exact CPT code performed',
    ],
    payerRules: [
      'Most commercial and Medicare Advantage plans require prior authorization for CT, MRI, PET and nuclear studies, often through a radiology benefit manager; the authorized CPT code must match the study performed.',
      'Who owns the equipment decides the billing: global billing for practice-owned equipment, modifier 26 for the professional read and TC for the technical component.',
      'Medicare applies a multiple procedure payment reduction to certain advanced imaging services performed for the same patient in the same session.',
      'Diagnostic studies need a signed order from the treating practitioner and a diagnosis that supports medical necessity.',
    ],
    denialCodes: ['co-197', 'co-16', 'co-11', 'co-50'],
    faqs: [
      { question: 'What do modifiers 26 and TC mean in radiology billing?', answer: 'Modifier 26 bills only the professional component (the radiologist\'s interpretation). Modifier TC bills only the technical component (equipment and staff). When one entity performs both, the study is billed globally without either modifier.' },
      { question: 'Why are MRI and CT claims denied even with an authorization?', answer: 'Frequently because the study performed differs from the one authorized, for example with and without contrast instead of without. The authorization must be updated to match the exact code billed.' },
      { question: 'How are screening and diagnostic mammograms billed differently?', answer: 'Screening mammography (77067) is for patients without symptoms. Diagnostic codes are used when there are symptoms, findings or a call-back from screening, and patient cost-sharing differs.' },
    ],
  },

  anesthesiology: {
    intro:
      'Anesthesia is paid with its own formula instead of a fixed fee per CPT code: base units plus time units, multiplied by a conversion factor, with payment modifiers that describe who personally performed or medically directed the case.',
    codes: [
      { code: '00100–01999', desc: 'Anesthesia codes by anatomic area, crosswalked from the surgical CPT code' },
      { code: '01967', desc: 'Neuraxial labor analgesia/anesthesia for planned vaginal delivery' },
      { code: '64447', desc: 'Femoral nerve block, single injection (separately billable when for post-op pain)' },
      { code: '99100', desc: 'Qualifying circumstance: anesthesia for patient of extreme age' },
    ],
    modifiers: [
      { mod: 'AA', use: 'Anesthesia services personally performed by the anesthesiologist' },
      { mod: 'QK', use: 'Medical direction of two, three or four concurrent procedures' },
      { mod: 'QX / QZ / QY', use: 'CRNA with medical direction / CRNA without medical direction / one CRNA directed by an anesthesiologist' },
      { mod: 'P1–P6', use: 'Physical status modifiers (some payers add units for P3–P5)' },
    ],
    denials: [
      'Anesthesia time not documented with clear start and end times',
      'Medical direction modifiers inconsistent between the anesthesiologist and CRNA claims',
      'Wrong anesthesia code crosswalked from the surgical procedure',
      'Post-op nerve blocks billed without documentation that the surgeon requested them for pain control',
    ],
    documentation: [
      'Anesthesia start/stop times and continuous presence',
      'Medical direction steps (pre-anesthetic exam, induction, emergence) when billing QK/QY',
      'Physical status and any qualifying circumstances',
    ],
    faqs: [
      { question: 'How is anesthesia payment calculated?', answer: 'Payment is (base units + time units + any modifying units) × the payer\'s conversion factor. Base units come from the anesthesia code, and time units are usually counted in 15-minute increments for Medicare.' },
      { question: 'What is the difference between QK and QY?', answer: 'QK is used by an anesthesiologist medically directing two to four concurrent cases. QY is used when an anesthesiologist medically directs one CRNA. The CRNA bills with QX in both situations.' },
      { question: 'Can nerve blocks be billed separately from general anesthesia?', answer: 'A peripheral nerve block for post-operative pain can be billed separately when the surgeon requests it and it is not the primary anesthetic, and the documentation supports it.' },
    ],
  },

  'gynecology-obstetrics': {
    intro:
      'OB/GYN billing is shaped by global obstetric packages that bundle prenatal, delivery and postpartum care, by what happens when care is split between practices or coverage changes mid-pregnancy, and by gynecologic procedures billed outside the package.',
    codes: [
      { code: '59400', desc: 'Routine obstetric care including antepartum, vaginal delivery and postpartum care (global)' },
      { code: '59510', desc: 'Routine obstetric care including antepartum, cesarean delivery and postpartum care (global)' },
      { code: '59610', desc: 'Global obstetric care for vaginal birth after previous cesarean (VBAC)' },
      { code: '59425 / 59426', desc: 'Antepartum care only: 4–6 visits / 7 or more visits' },
      { code: '59025', desc: 'Fetal non-stress test' },
      { code: '76805', desc: 'Obstetric ultrasound after the first trimester' },
      { code: '58558', desc: 'Hysteroscopy with sampling (biopsy) of endometrium and/or polypectomy' },
    ],
    modifiers: [
      { mod: '25', use: 'Problem-oriented E/M outside routine prenatal care' },
      { mod: '22', use: 'Substantially more complex delivery, documented in the delivery note' },
    ],
    denials: [
      'Global package billed when the patient changed practices or insurance during pregnancy',
      'Routine prenatal visits billed separately when they are included in the global package',
      'Ultrasounds exceeding payer frequency rules without a documented indication',
      'Delivery billed before eligibility is re-verified at the time of delivery',
    ],
    documentation: [
      'Date of first prenatal visit and number of antepartum visits',
      'Delivery method and complications',
      'Medical indication for each ultrasound and non-stress test',
    ],
    faqs: [
      { question: 'What is included in the global obstetric package?', answer: 'Global codes such as 59400 and 59510 include routine antepartum visits, the delivery and routine postpartum care. Ultrasounds, non-stress tests, labs and visits for unrelated problems are billed separately.' },
      { question: 'How do you bill when a patient transfers care mid-pregnancy?', answer: 'Bill only the components your practice provided: antepartum-only codes based on the number of visits (59425 or 59426), delivery-only codes, or postpartum-only care, instead of the global package.' },
      { question: 'When is the global obstetric code submitted?', answer: 'The global package is billed after the delivery, using the delivery date as the date of service. Some payers allow or require interim billing, so check the payer\'s policy.' },
    ],
  },

  rheumatology: {
    intro:
      'Rheumatology billing is dominated by in-office infusions and injections of high-cost biologics, so revenue depends on prior authorization, correct infusion code hierarchy, exact drug units and drug-wastage reporting.',
    codes: [
      { code: '96413', desc: 'IV infusion of a complex drug or biologic (chemotherapy administration codes), first hour' },
      { code: '96365', desc: 'IV infusion for therapy or diagnosis, initial, up to 1 hour' },
      { code: '96372', desc: 'Therapeutic injection, subcutaneous or intramuscular' },
      { code: 'J1745', desc: 'Infliximab injection, per 10 mg' },
      { code: 'J0129', desc: 'Abatacept injection, per 10 mg' },
      { code: 'J3262', desc: 'Tocilizumab injection, per 1 mg' },
      { code: '20610 / 20611', desc: 'Major joint injection or aspiration, without / with ultrasound guidance' },
      { code: '77080', desc: 'DXA bone density study, axial skeleton' },
    ],
    modifiers: [
      { mod: 'JW / JZ', use: 'Medicare drug wastage reporting: JW for discarded amount, JZ when no drug was discarded from a single-dose container' },
      { mod: '25', use: 'Separate E/M on the day of an infusion or injection' },
      { mod: 'RT / LT / 50', use: 'Laterality for joint injections' },
    ],
    denials: [
      'Missing or expired prior authorization for biologics, or step-therapy requirements not met',
      'Drug units or NDC not matching the dose administered',
      'Infusion codes billed out of hierarchy (initial vs. subsequent vs. concurrent)',
      'Missing JW/JZ modifier on single-dose drugs for Medicare claims',
    ],
    documentation: [
      'Drug, dose, NDC, lot, and any wasted amount for every administration',
      'Infusion start and stop times for each drug',
      'Diagnosis, disease activity and prior therapies supporting the biologic and authorization',
    ],
    faqs: [
      { question: 'Which administration code is used for biologic infusions like infliximab?', answer: 'Complex biologic infusions such as infliximab are commonly reported with the chemotherapy administration code 96413 (first hour) plus 96415 for each additional hour, rather than 96365, when the drug requires that level of monitoring under payer policy. Check each payer\'s policy for the specific drug.' },
      { question: 'What are the JW and JZ modifiers?', answer: 'For Medicare, drugs from single-dose containers must report wastage: JW on a separate line for the amount discarded, or JZ when no drug was discarded. Missing these modifiers can lead to claim rejections.' },
      { question: 'Why are biologic claims denied even when the infusion was given?', answer: 'The most common reasons are missing or expired prior authorization, step-therapy requirements not documented, and drug units that do not match the HCPCS dosage descriptor. Verifying authorization before each infusion prevents most of these denials.' },
    ],
  },

  'internal-medicine': {
    intro:
      'Internal medicine revenue depends on accurate E/M levels plus care-management and preventive services that many practices under-bill: annual wellness visits, chronic care management, transitional care and remote monitoring.',
    codes: [
      { code: '99202–99215', desc: 'Office visits, leveled by medical decision-making or total time' },
      { code: 'G0438 / G0439', desc: 'Medicare annual wellness visit, initial / subsequent' },
      { code: '99490', desc: 'Chronic care management, first 20 minutes of clinical staff time per month' },
      { code: '99495 / 99496', desc: 'Transitional care management after discharge (moderate / high complexity)' },
      { code: '99453 / 99454 / 99457', desc: 'Remote physiologic monitoring: setup, device supply, treatment management' },
      { code: '99497', desc: 'Advance care planning, first 30 minutes' },
      { code: 'G2211', desc: 'Medicare visit complexity add-on for longitudinal care relationships' },
    ],
    modifiers: [
      { mod: '25', use: 'Problem-oriented visit on the same day as a wellness or preventive visit' },
      { mod: '33', use: 'Preventive service with no cost-sharing (commercial plans)' },
    ],
    denials: [
      'Annual wellness visit billed within 12 months of the last one',
      'Chronic care management without documented patient consent or care plan',
      'Transitional care management billed without contact within two business days of discharge',
      'E/M level not supported by medical decision-making or documented total time',
    ],
    documentation: [
      'MDM elements or total time for each E/M visit',
      'Monthly CCM time logs and care plan',
      'Discharge date and interactive contact date for TCM',
    ],
    payerRules: [
      'Medicare pays the initial annual wellness visit (G0438) once per lifetime and subsequent visits (G0439) only after at least 11 full months have passed since the last one.',
      'Chronic care management requires two or more chronic conditions, a comprehensive care plan and documented patient consent before billing.',
      'Transitional care management requires interactive contact within two business days of discharge and a face-to-face visit within 7 or 14 days, depending on the code.',
      'Office E/M levels are chosen by medical decision-making or total time on the date of the encounter; the add-on G2211 applies only to longitudinal care relationships.',
    ],
    denialCodes: ['co-16', 'co-11', 'co-18', 'pr-1'],
    faqs: [
      { question: 'Can an annual wellness visit and a sick visit be billed on the same day?', answer: 'Yes. When a significant problem is addressed during the wellness visit, the problem-oriented E/M can be billed with modifier 25 alongside G0438 or G0439. The patient may owe cost-sharing for the problem-oriented portion.' },
      { question: 'What is required to bill chronic care management?', answer: 'The patient needs two or more chronic conditions expected to last at least 12 months, documented consent, a comprehensive care plan, and at least 20 minutes of clinical staff time in the month for 99490.' },
      { question: 'How are E/M office visits leveled?', answer: 'Since 2021, office E/M visits are leveled by either medical decision-making or total time on the date of the encounter. History and exam are documented as medically appropriate but no longer determine the level.' },
    ],
  },
}
