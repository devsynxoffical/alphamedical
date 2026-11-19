// Internal-link sets used by <RelatedLinks /> on specialty and service pages.
export interface RelatedLink {
  label: string
  path: string
}

export const specialtyRelatedLinks: RelatedLink[] = [
  { label: 'Outsourced medical billing services', path: '/medical-billing-services' },
  { label: 'Revenue cycle management services', path: '/revenue-cycle-management-services' },
  { label: 'Denial management services', path: '/denial-management-services' },
  { label: 'Medical coding services', path: '/medical-coding-services' },
  { label: 'Medical credentialing services', path: '/medical-credentialing-service' },
  { label: 'Medical billing in Florida', path: '/medical-billing-services-florida' },
  { label: 'Medical billing in Virginia', path: '/medical-billing-services-virginia' },
  { label: 'Common denial codes and how to fix them', path: '/blog/common-claim-denial-codes-and-how-to-fix-them' },
  { label: 'How much does medical billing cost?', path: '/blog/how-much-does-medical-billing-cost' },
]

export const serviceRelatedLinks: RelatedLink[] = [
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
