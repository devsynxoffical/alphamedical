// Registry of every indexable URL. Used by:
//  - scripts/prerender.mjs  (which pages get static HTML)
//  - sitemap.xml / llms.txt generation
//  - <PageTitle> (breadcrumbs + page-type structured data)
import { specialties } from '../data/specialties'
import { blogPosts } from '../data/blogPosts'

export type RouteKind = 'home' | 'page' | 'service' | 'specialty' | 'hub' | 'blog-index' | 'blog-post' | 'legal' | 'conversion'

export interface SiteRoute {
  path: string
  kind: RouteKind
  /** Short label used in breadcrumbs and llms.txt */
  label: string
  /** Service type for Service schema */
  serviceType?: string
  priority: number
  changefreq: 'weekly' | 'monthly' | 'yearly'
}

export const SPECIALTY_HUB_PATH = '/medical-billing-specialities'

export const serviceRoutes: SiteRoute[] = [
  { path: '/medical-coding-services', kind: 'service', label: 'Medical Coding Services', serviceType: 'Medical coding', priority: 0.9, changefreq: 'monthly' },
  { path: '/medical-credentialing-service', kind: 'service', label: 'Medical Credentialing Services', serviceType: 'Provider credentialing and payer enrollment', priority: 0.9, changefreq: 'monthly' },
  { path: '/medical-payment-posting-services', kind: 'service', label: 'Medical Payment Posting Services', serviceType: 'Payment posting', priority: 0.8, changefreq: 'monthly' },
  { path: '/virtual-medical-assistant-services', kind: 'service', label: 'Virtual Medical Assistant Services', serviceType: 'Virtual medical assistant', priority: 0.8, changefreq: 'monthly' },
  { path: '/virtual-medical-receptionist-services', kind: 'service', label: 'Virtual Medical Receptionist Services', serviceType: 'Virtual medical receptionist', priority: 0.8, changefreq: 'monthly' },
  { path: '/healthcare-seo-services', kind: 'service', label: 'Healthcare SEO Services', serviceType: 'Healthcare search engine optimization', priority: 0.7, changefreq: 'monthly' },
]

const cleanSpecialtyName = (name: string) => name.replace(/\s*\(.*\)\s*/, '').trim()

export const specialtyRoutes: SiteRoute[] = specialties.map((s) => ({
  path: `/specialties/${s.id}`,
  kind: 'specialty',
  label: `${cleanSpecialtyName(s.name)} Medical Billing`,
  serviceType: `${cleanSpecialtyName(s.name)} medical billing`,
  priority: 0.8,
  changefreq: 'monthly',
}))

export const blogRoutes: SiteRoute[] = blogPosts.map((p) => ({
  path: `/blog/${p.slug}`,
  kind: 'blog-post',
  label: p.title,
  priority: 0.7,
  changefreq: 'monthly',
}))

export const siteRoutes: SiteRoute[] = [
  { path: '/', kind: 'home', label: 'Home', serviceType: 'Medical billing services', priority: 1.0, changefreq: 'weekly' },
  { path: '/services', kind: 'hub', label: 'Services', priority: 0.9, changefreq: 'monthly' },
  ...serviceRoutes,
  { path: SPECIALTY_HUB_PATH, kind: 'hub', label: 'Medical Billing Specialties', serviceType: 'Specialty medical billing', priority: 0.9, changefreq: 'monthly' },
  ...specialtyRoutes,
  { path: '/about-us', kind: 'page', label: 'About Us', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact', kind: 'page', label: 'Contact', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog', kind: 'blog-index', label: 'Blog', priority: 0.7, changefreq: 'weekly' },
  ...blogRoutes,
  { path: '/free-consultation', kind: 'conversion', label: 'Free Consultation', priority: 0.6, changefreq: 'yearly' },
  { path: '/book-appointment', kind: 'conversion', label: 'Book a Meeting', priority: 0.5, changefreq: 'yearly' },
  { path: '/privacy-policy', kind: 'legal', label: 'Privacy Policy', priority: 0.2, changefreq: 'yearly' },
  { path: '/terms-and-conditions', kind: 'legal', label: 'Terms and Conditions', priority: 0.2, changefreq: 'yearly' },
]

/** Old / duplicate URLs -> canonical URL (emitted as 301s in server configs). */
export const redirects: Record<string, string> = {
  '/about': '/about-us',
  '/specialties': SPECIALTY_HUB_PATH,
  '/services/medical-billing': SPECIALTY_HUB_PATH,
  '/services/virtual-assistant': '/virtual-medical-assistant-services',
  '/services/medical-coding': '/medical-coding-services',
  '/services/payment-posting': '/medical-payment-posting-services',
  '/services/virtual-receptionist': '/virtual-medical-receptionist-services',
  '/services/healthcare-seo': '/healthcare-seo-services',
  '/services/credentialing': '/medical-credentialing-service',
}

export const findRoute = (path: string) => {
  const normalized = path !== '/' ? path.replace(/\/+$/, '') : path
  return siteRoutes.find((r) => r.path === normalized)
}

export const breadcrumbTrail = (path: string): { name: string; path: string }[] => {
  const route = findRoute(path)
  if (!route || route.kind === 'home') return []
  const trail = [{ name: 'Home', path: '/' }]
  if (route.kind === 'service') trail.push({ name: 'Services', path: '/services' })
  if (route.kind === 'specialty') trail.push({ name: 'Medical Billing Specialties', path: SPECIALTY_HUB_PATH })
  if (route.kind === 'blog-post') trail.push({ name: 'Blog', path: '/blog' })
  trail.push({ name: route.label, path: route.path })
  return trail
}
