// Kept apart from routes.ts so the client router can use the redirect list
// without bundling all page data.
export const SPECIALTY_HUB_PATH = '/medical-billing-specialities'

/** Old / duplicate URLs -> canonical URL (emitted as 301s in server configs). */
export const redirects: Record<string, string> = {
  '/about': '/about-us',
  '/specialties': SPECIALTY_HUB_PATH,
  '/services/medical-billing': '/medical-billing-services',
  '/services/virtual-assistant': '/virtual-medical-assistant-services',
  '/services/medical-coding': '/medical-coding-services',
  '/services/payment-posting': '/medical-payment-posting-services',
  '/services/virtual-receptionist': '/virtual-medical-receptionist-services',
  '/services/healthcare-seo': '/healthcare-seo-services',
  '/services/credentialing': '/medical-credentialing-service',
  // Legacy URL from the previous site, still shown by Google (Search Console, Nov 2026)
  '/virtual-medical-assistant': '/virtual-medical-assistant-services',
  // Old WordPress URLs with Search Console history (Jul 2025 to Jun 2026). Each
  // maps to the closest current page so its ranking signals are not lost.
  '/medical-credentialing-services': '/medical-credentialing-service',
  '/get-free-consultation': '/free-consultation',
  '/book-a-meeting': '/book-appointment',
  '/healthcare-seo': '/healthcare-seo-services',
  '/allergy-immunology': '/specialties/allergy-immunology',
  // Plan 23 Nov 2026: two near-identical orthopedic pages competed; merged into one.
  '/specialties/orthopedic-surgery': '/specialties/orthopedics',
  '/faq': '/services',
  '/faqs': '/services',
  '/customer-stories': '/about-us',
  '/category/blog': '/blog',
  '/category/specialties': SPECIALTY_HUB_PATH,
  '/blog/medical-virtual-assistant-vs-in-office-assistant': '/virtual-medical-assistant-services',
  '/uncategorized/how-medical-virtual-assistants-enhance-patient-care-experience': '/virtual-medical-assistant-services',
  '/uncategorized/medical-virtual-assistant-responsibilities': '/virtual-medical-assistant-services',
  '/uncategorized/what-is-a-virtual-medical-assistant-and-how-they-streamline-healthcare-operations': '/virtual-medical-assistant-services',
  '/uncategorized/caqh-hcpcs-and-npi-explained-the-ultimate-guide-to-medical-billing-and-credentialing': '/blog/how-long-does-medical-credentialing-take',
  '/uncategorized/rendering-and-referring-providers-explained-who-they-are-and-why-they-matter-in-billing': '/blog/rendering-vs-referring-provider',
}
