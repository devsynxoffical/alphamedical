// Registry of every indexable URL. Used by:
//  - scripts/prerender.mjs  (which pages get static HTML)
//  - sitemap.xml / llms.txt generation
//  - <PageTitle> (breadcrumbs + page-type structured data)
import { specialties } from '../data/specialties'
import { blogPosts } from '../data/blogPosts'
import { landingPages } from '../data/landingPages'
import { denialCodes, DENIAL_HUB_PATH } from '../data/denialCodes'

export type RouteKind = 'home' | 'page' | 'service' | 'location' | 'specialty' | 'hub' | 'blog-index' | 'blog-post' | 'legal' | 'conversion' | 'guide'

export interface SiteRoute {
  path: string
  kind: RouteKind
  /** Short label used in breadcrumbs and llms.txt */
  label: string
  /** Service type for Service schema */
  serviceType?: string
  /** Schema areaServed override (e.g. a state for location pages) */
  areaServed?: string
  priority: number
  changefreq: 'weekly' | 'monthly' | 'yearly'
}

import { SPECIALTY_HUB_PATH, redirects } from './redirects'
import { specialtyNav } from '../data/specialtyNav'
import { landingPagePaths } from '../data/landingPagePaths'

export { SPECIALTY_HUB_PATH, redirects }

// Build-time guards: the light lists used by the router and header must match the full data.
const sameList = (a: string[], b: string[]) => a.length === b.length && a.every((v, i) => v === b[i])
if (!sameList(landingPagePaths, landingPages.map((p) => p.path))) {
  throw new Error('src/data/landingPagePaths.ts is out of sync with src/data/landingPages.ts')
}
if (!sameList(specialtyNav.map((s) => `${s.id}|${s.name}`), specialties.map((s) => `${s.id}|${s.name}`))) {
  throw new Error('src/data/specialtyNav.ts is out of sync with src/data/specialties.ts')
}

export const landingRoutes: SiteRoute[] = landingPages.map((p) => ({
  path: p.path,
  kind: p.kind,
  label: p.label,
  serviceType: p.serviceType,
  areaServed: p.areaServed,
  priority: p.path === '/medical-billing-services' ? 1.0 : 0.9,
  changefreq: 'monthly',
}))

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

export const denialCodeRoutes: SiteRoute[] = denialCodes.map((d) => ({
  path: `${DENIAL_HUB_PATH}/${d.slug}`,
  kind: 'guide',
  label: `${d.code} Denial Code`,
  priority: 0.7,
  changefreq: 'monthly',
}))

export const siteRoutes: SiteRoute[] = [
  { path: '/', kind: 'home', label: 'Home', serviceType: 'Medical billing services', priority: 1.0, changefreq: 'weekly' },
  { path: '/services', kind: 'hub', label: 'Services', priority: 0.9, changefreq: 'monthly' },
  ...landingRoutes,
  ...serviceRoutes,
  { path: SPECIALTY_HUB_PATH, kind: 'hub', label: 'Medical Billing Specialties', serviceType: 'Specialty medical billing', priority: 0.9, changefreq: 'monthly' },
  ...specialtyRoutes,
  { path: '/about-us', kind: 'page', label: 'About Us', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact', kind: 'page', label: 'Contact', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog', kind: 'blog-index', label: 'Blog', priority: 0.7, changefreq: 'weekly' },
  ...blogRoutes,
  { path: DENIAL_HUB_PATH, kind: 'hub', label: 'Denial Codes', priority: 0.8, changefreq: 'monthly' },
  ...denialCodeRoutes,
  { path: '/free-consultation', kind: 'conversion', label: 'Free Consultation', priority: 0.6, changefreq: 'yearly' },
  { path: '/book-appointment', kind: 'conversion', label: 'Book a Meeting', priority: 0.5, changefreq: 'yearly' },
  { path: '/sitemap', kind: 'page', label: 'Sitemap', priority: 0.3, changefreq: 'monthly' },
  { path: '/privacy-policy', kind: 'legal', label: 'Privacy Policy', priority: 0.2, changefreq: 'yearly' },
  { path: '/terms-and-conditions', kind: 'legal', label: 'Terms and Conditions', priority: 0.2, changefreq: 'yearly' },
]

export const findRoute = (path: string) => {
  const normalized = path !== '/' ? path.replace(/\/+$/, '') : path
  return siteRoutes.find((r) => r.path === normalized)
}

export const breadcrumbTrail = (path: string): { name: string; path: string }[] => {
  const route = findRoute(path)
  if (!route || route.kind === 'home') return []
  const trail = [{ name: 'Home', path: '/' }]
  if (route.kind === 'service') trail.push({ name: 'Services', path: '/services' })
  if (route.kind === 'location') trail.push({ name: 'Medical Billing Services', path: '/medical-billing-services' })
  if (route.kind === 'specialty') trail.push({ name: 'Medical Billing Specialties', path: SPECIALTY_HUB_PATH })
  if (route.kind === 'blog-post') trail.push({ name: 'Blog', path: '/blog' })
  if (route.kind === 'guide') trail.push({ name: 'Denial Codes', path: DENIAL_HUB_PATH })
  trail.push({ name: route.label, path: route.path })
  return trail
}
