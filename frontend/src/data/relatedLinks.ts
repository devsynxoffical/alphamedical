// Internal-link sets used by <RelatedLinks /> on specialty and service pages.
export interface RelatedLink {
  label: string
  path: string
}

export const specialtyRelatedLinks: RelatedLink[] = [
  { label: 'Radiology billing services', path: '/specialties/radiology' },
  { label: 'Pain management billing services', path: '/specialties/pain-management' },
  { label: 'Outsourced medical billing services', path: '/medical-billing-services' },
  { label: 'Revenue cycle management services', path: '/revenue-cycle-management-services' },
  { label: 'Denial management services', path: '/denial-management-services' },
  { label: 'Medical coding services', path: '/medical-coding-services' },
  { label: 'Medical credentialing services', path: '/medical-credentialing-service' },
  { label: 'Medical billing in Florida', path: '/medical-billing-services-florida' },
  { label: 'Medical billing in Virginia', path: '/medical-billing-services-virginia' },
  { label: 'Denial codes: meanings and fixes', path: '/denial-codes' },
  { label: 'CO-16 denial code: missing information', path: '/denial-codes/co-16' },
  { label: 'CO-97 denial code: bundled services', path: '/denial-codes/co-97' },
  { label: 'Prior authorization in medical billing', path: '/blog/what-is-authorization-in-medical-billing' },
  { label: 'How much does medical billing cost?', path: '/blog/how-much-does-medical-billing-cost' },
]

export const serviceRelatedLinks: RelatedLink[] = [
  { label: 'Radiology billing services', path: '/specialties/radiology' },
  { label: 'Pain management billing services', path: '/specialties/pain-management' },
  { label: 'Outsourced medical billing services', path: '/medical-billing-services' },
  { label: 'Revenue cycle management services', path: '/revenue-cycle-management-services' },
  { label: 'Denial management services', path: '/denial-management-services' },
  { label: 'Medical billing by specialty', path: '/medical-billing-specialities' },
  { label: 'Medical billing for small practices', path: '/medical-billing-for-small-practices' },
  { label: 'Medical billing in Florida', path: '/medical-billing-services-florida' },
  { label: 'Medical billing in Virginia', path: '/medical-billing-services-virginia' },
  { label: 'How long does credentialing take?', path: '/blog/how-long-does-medical-credentialing-take' },
  { label: 'Medical billing vs. medical coding', path: '/blog/medical-billing-vs-medical-coding' },
]
