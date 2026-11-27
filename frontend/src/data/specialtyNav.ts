// Lightweight specialty list for the header menu, so the full specialty data
// (src/data/specialties.ts) is not shipped on every page. Kept in sync by a
// build-time check in src/seo/routes.ts.
export const specialtyNav: { id: string; name: string }[] = [
  { id: 'internal-medicine', name: 'Internal Medicine' },
  { id: 'allergy-immunology', name: 'Allergy & Immunology' },
  { id: 'orthopedics', name: 'Orthopedics' },
  { id: 'pain-management', name: 'Pain Management' },
  { id: 'neurology', name: 'Neurology' },
  { id: 'gastroenterology', name: 'Gastroenterology' },
  { id: 'general-surgery', name: 'General Surgery' },
  { id: 'anesthesiology', name: 'Anesthesiology' },
  { id: 'cardiology', name: 'Cardiology (Cardiovascular Medicine)' },
  { id: 'dermatology', name: 'Dermatology' },
  { id: 'emergency-medicine', name: 'Emergency Medicine' },
  { id: 'gynecology-obstetrics', name: 'Gynecology/Obstetrics' },
  { id: 'hematology-oncology', name: 'Hematology/Oncology' },
  { id: 'pediatrics', name: 'Pediatrics' },
  { id: 'plastic-surgery', name: 'Plastic Surgery' },
  { id: 'psychiatry', name: 'Psychiatry' },
  { id: 'mental-health-counseling', name: 'Mental Health Counseling' },
  { id: 'radiology', name: 'Radiology' },
  { id: 'reproductive-endocrinology', name: 'Reproductive Endocrinology' },
  { id: 'rheumatology', name: 'Rheumatology' },
  { id: 'urology', name: 'Urology' },
  { id: 'nurse-practitioner', name: 'Nurse Practitioner' },
]
