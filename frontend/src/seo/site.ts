// Single source of truth for business facts used in meta tags, structured data,
// sitemap.xml and llms.txt. Keep NAP (name, address, phone) identical to the
// Google Business Profile and directory listings - consistency is a ranking
// signal for local SEO and helps AI engines resolve the entity.

export const SITE_URL = 'https://www.alphamediassist.com'

export const BRAND = {
  name: 'Alpha Medi Assist',
  alternateNames: ['AlphaMedi Assist', 'Alpha Medical Assist', 'Alpha Med Assist'],
  legalName: 'Alpha Medi Assist',
  description:
    'Alpha Medi Assist is a U.S. medical billing and revenue cycle management (RCM) company. It provides outsourced medical billing, medical coding, payment posting, provider credentialing, virtual medical assistants and virtual medical receptionists for physician practices across 90+ specialties.',
  email: 'info@alphamediassist.com',
  telephone: '+1-424-542-7170',
  telephoneDisplay: '+1 424-542-7170',
  logoPath: '/logo.png',
  ogImagePath: '/og-image.jpg',
  sameAs: [
    'https://www.facebook.com/alphamediassist',
    'https://www.instagram.com/alphamediassist/',
    'https://www.linkedin.com/company/alpha-med-assist/',
  ],
  areaServed: 'United States',
  knowsAbout: [
    'Medical billing',
    'Revenue cycle management',
    'Medical coding',
    'ICD-10-CM coding',
    'CPT coding',
    'HCPCS coding',
    'Claim denial management',
    'Accounts receivable follow-up',
    'Payment posting',
    'Provider credentialing',
    'Payer enrollment',
    'Insurance eligibility verification',
    'Prior authorization',
    'HIPAA compliance',
    'Virtual medical assistants',
    'Healthcare SEO',
  ],
  locations: [
    {
      id: 'spotsylvania-va',
      name: 'Alpha Medi Assist - Spotsylvania, VA',
      streetAddress: '7313 Cloverhill Road',
      addressLocality: 'Spotsylvania',
      addressRegion: 'VA',
      postalCode: '22551',
      addressCountry: 'US',
    },
    {
      id: 'st-petersburg-fl',
      name: 'Alpha Medi Assist - St. Petersburg, FL',
      streetAddress: '7901 4th St N Ste 23684',
      addressLocality: 'St. Petersburg',
      addressRegion: 'FL',
      postalCode: '33702',
      addressCountry: 'US',
    },
  ],
} as const

export const ORG_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`

export const absoluteUrl = (path: string) => {
  if (/^https?:\/\//.test(path)) return path
  if (path === '/' || path === '') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`
}
