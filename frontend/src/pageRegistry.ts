// Code-split page components (see src/lazyPage.ts) and the lookups used to preload
// them: every page before prerendering, the current page before hydration.
// Keep routePages in step with the <Route> list in App.tsx.
import { matchPath } from 'react-router-dom'
import { lazyPage, type PreloadablePage } from './lazyPage'
import { landingPagePaths } from './data/landingPagePaths'

export const Home = lazyPage(() => import('./pages/Home'))
export const Services = lazyPage(() => import('./pages/Services'))
export const ServiceDetail = lazyPage(() => import('./pages/ServiceDetail'))
export const Specialties = lazyPage(() => import('./pages/Specialties'))
export const SpecialtyDetail = lazyPage(() => import('./pages/SpecialtyDetail'))
export const BookAppointment = lazyPage(() => import('./pages/BookAppointment'))
export const About = lazyPage(() => import('./pages/About'))
export const Contact = lazyPage(() => import('./pages/Contact'))
export const Blog = lazyPage(() => import('./pages/Blog'))
export const BlogPostDetail = lazyPage(() => import('./pages/BlogPostDetail'))
export const FreeConsultation = lazyPage(() => import('./pages/FreeConsultation'))
export const TermsAndConditions = lazyPage(() => import('./pages/TermsAndConditions'))
export const PrivacyPolicy = lazyPage(() => import('./pages/PrivacyPolicy'))
export const InternalMedicine = lazyPage(() => import('./pages/InternalMedicine'))
export const AllergyImmunology = lazyPage(() => import('./pages/AllergyImmunology'))
export const Orthopedics = lazyPage(() => import('./pages/Orthopedics'))
export const PainManagement = lazyPage(() => import('./pages/PainManagement'))
export const Neurology = lazyPage(() => import('./pages/Neurology'))
export const Gastroenterology = lazyPage(() => import('./pages/Gastroenterology'))
export const GeneralSurgery = lazyPage(() => import('./pages/GeneralSurgery'))
export const Anesthesiology = lazyPage(() => import('./pages/Anesthesiology'))
export const Cardiology = lazyPage(() => import('./pages/Cardiology'))
export const Dermatology = lazyPage(() => import('./pages/Dermatology'))
export const EmergencyMedicine = lazyPage(() => import('./pages/EmergencyMedicine'))
export const OBGYN = lazyPage(() => import('./pages/OBGYN'))
export const HematologyOncology = lazyPage(() => import('./pages/HematologyOncology'))
export const Pediatrics = lazyPage(() => import('./pages/Pediatrics'))
export const PlasticSurgery = lazyPage(() => import('./pages/PlasticSurgery'))
export const Psychiatry = lazyPage(() => import('./pages/Psychiatry'))
export const MentalHealthCounseling = lazyPage(() => import('./pages/MentalHealthCounseling'))
export const Radiology = lazyPage(() => import('./pages/Radiology'))
export const ReproductiveEndocrinology = lazyPage(() => import('./pages/ReproductiveEndocrinology'))
export const Rheumatology = lazyPage(() => import('./pages/Rheumatology'))
export const Urology = lazyPage(() => import('./pages/Urology'))
export const NursePractitioner = lazyPage(() => import('./pages/NursePractitioner'))
export const DenialCodesHub = lazyPage(() => import('./pages/DenialCodesHub'))
export const HtmlSitemap = lazyPage(() => import('./pages/HtmlSitemap'))
export const DenialCodePage = lazyPage(() => import('./pages/DenialCodePage'))
export const LandingPage = lazyPage(() => import('./pages/LandingPage'))

/** Every page component, for prerendering (all) and hydration (the current one). */
const allPages: PreloadablePage<never>[] = [
  Home, Services, ServiceDetail, Specialties, SpecialtyDetail, BookAppointment, About, Contact, Blog, BlogPostDetail, FreeConsultation, TermsAndConditions, PrivacyPolicy, InternalMedicine, AllergyImmunology, Orthopedics, PainManagement, Neurology, Gastroenterology, GeneralSurgery, Anesthesiology, Cardiology, Dermatology, EmergencyMedicine, OBGYN, HematologyOncology, Pediatrics, PlasticSurgery, Psychiatry, MentalHealthCounseling, Radiology, ReproductiveEndocrinology, Rheumatology, Urology, NursePractitioner, DenialCodesHub, HtmlSitemap, DenialCodePage, LandingPage
] as PreloadablePage<never>[]

/** URL pattern -> page component, used to preload the current page before hydration. */
const routePages: [string, PreloadablePage<never>][] = [
  ['/', Home],
  ['/about-us', About],
  ['/services', Services],
  ['/medical-coding-services', ServiceDetail],
  ['/virtual-medical-assistant-services', ServiceDetail],
  ['/medical-payment-posting-services', ServiceDetail],
  ['/virtual-medical-receptionist-services', ServiceDetail],
  ['/healthcare-seo-services', ServiceDetail],
  ['/medical-credentialing-service', ServiceDetail],
  ['/medical-billing-specialities', Specialties],
  ['/specialties/internal-medicine', InternalMedicine],
  ['/specialties/allergy-immunology', AllergyImmunology],
  ['/specialties/orthopedics', Orthopedics],
  ['/specialties/pain-management', PainManagement],
  ['/specialties/neurology', Neurology],
  ['/specialties/gastroenterology', Gastroenterology],
  ['/specialties/general-surgery', GeneralSurgery],
  ['/specialties/anesthesiology', Anesthesiology],
  ['/specialties/cardiology', Cardiology],
  ['/specialties/dermatology', Dermatology],
  ['/specialties/emergency-medicine', EmergencyMedicine],
  ['/specialties/gynecology-obstetrics', OBGYN],
  ['/specialties/hematology-oncology', HematologyOncology],
  ['/specialties/pediatrics', Pediatrics],
  ['/specialties/plastic-surgery', PlasticSurgery],
  ['/specialties/psychiatry', Psychiatry],
  ['/specialties/mental-health-counseling', MentalHealthCounseling],
  ['/specialties/radiology', Radiology],
  ['/specialties/reproductive-endocrinology', ReproductiveEndocrinology],
  ['/specialties/rheumatology', Rheumatology],
  ['/specialties/urology', Urology],
  ['/specialties/nurse-practitioner', NursePractitioner],
  ['/specialties/:specialtyId', SpecialtyDetail],
  ['/book-appointment', BookAppointment],
  ['/contact', Contact],
  ['/blog', Blog],
  ['/blog/:slug', BlogPostDetail],
  ['/sitemap', HtmlSitemap],
  ['/denial-codes', DenialCodesHub],
  ['/denial-codes/:code', DenialCodePage],
  ['/free-consultation', FreeConsultation],
  ['/terms-and-conditions', TermsAndConditions],
  ['/privacy-policy', PrivacyPolicy],
  ...landingPagePaths.map((path) => [path, LandingPage] as [string, PreloadablePage<never>]),
] as [string, PreloadablePage<never>][]

export const preloadPageFor = (pathname: string) => {
  const hit = routePages.find(([pattern]) => matchPath(pattern, pathname))
  return hit ? hit[1].preload() : Promise.resolve()
}

export const preloadAllPages = () => Promise.all(allPages.map((p) => p.preload()))
