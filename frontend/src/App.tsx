import { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './App.css'
import ChatWidgetEmbed from './components/ChatWidgetEmbed'
import StickyCta from './components/StickyCta'
import NotFound from './pages/NotFound'
import { landingPagePaths } from './data/landingPagePaths'
import { redirects } from './seo/redirects'
import {
  Home,
  Services,
  ServiceDetail,
  Specialties,
  SpecialtyDetail,
  BookAppointment,
  About,
  Contact,
  Blog,
  BlogPostDetail,
  FreeConsultation,
  TermsAndConditions,
  PrivacyPolicy,
  InternalMedicine,
  AllergyImmunology,
  Orthopedics,
  PainManagement,
  Neurology,
  Gastroenterology,
  GeneralSurgery,
  Anesthesiology,
  Cardiology,
  Dermatology,
  EmergencyMedicine,
  OBGYN,
  HematologyOncology,
  Pediatrics,
  PlasticSurgery,
  Psychiatry,
  MentalHealthCounseling,
  Radiology,
  ReproductiveEndocrinology,
  Rheumatology,
  Urology,
  NursePractitioner,
  DenialCodesHub,
  HtmlSitemap,
  DenialCodePage,
  LandingPage,
} from './pageRegistry'

function App() {
  return (
    <>
      <ScrollToTop />
      <ChatWidgetEmbed siteId="alpha-medi-assist" />
      <div className="App">
        <Header />
        <main>
          <Suspense fallback={<div className="page-loading" style={{ minHeight: '60vh' }} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Services />} />
            {landingPagePaths.map((path) => (
              <Route key={path} path={path} element={<LandingPage path={path} />} />
            ))}
            <Route path="/medical-coding-services" element={<ServiceDetail serviceId="medical-coding" />} />
            <Route path="/virtual-medical-assistant-services" element={<ServiceDetail serviceId="virtual-assistant" />} />
            <Route path="/medical-payment-posting-services" element={<ServiceDetail serviceId="payment-posting" />} />
            <Route path="/virtual-medical-receptionist-services" element={<ServiceDetail serviceId="virtual-receptionist" />} />
            <Route path="/healthcare-seo-services" element={<ServiceDetail serviceId="healthcare-seo" />} />
            <Route path="/medical-credentialing-service" element={<ServiceDetail serviceId="credentialing" />} />
            <Route path="/medical-billing-specialities" element={<Specialties />} />
            <Route path="/specialties/internal-medicine" element={<InternalMedicine />} />
            <Route path="/specialties/allergy-immunology" element={<AllergyImmunology />} />
            <Route path="/specialties/orthopedics" element={<Orthopedics />} />
            <Route path="/specialties/pain-management" element={<PainManagement />} />
            <Route path="/specialties/neurology" element={<Neurology />} />
            <Route path="/specialties/gastroenterology" element={<Gastroenterology />} />
            <Route path="/specialties/general-surgery" element={<GeneralSurgery />} />
            <Route path="/specialties/anesthesiology" element={<Anesthesiology />} />
            <Route path="/specialties/cardiology" element={<Cardiology />} />
            <Route path="/specialties/dermatology" element={<Dermatology />} />
            <Route path="/specialties/emergency-medicine" element={<EmergencyMedicine />} />
            <Route path="/specialties/gynecology-obstetrics" element={<OBGYN />} />
            <Route path="/specialties/hematology-oncology" element={<HematologyOncology />} />
            <Route path="/specialties/pediatrics" element={<Pediatrics />} />
            <Route path="/specialties/plastic-surgery" element={<PlasticSurgery />} />
            <Route path="/specialties/psychiatry" element={<Psychiatry />} />
            <Route path="/specialties/mental-health-counseling" element={<MentalHealthCounseling />} />
            <Route path="/specialties/radiology" element={<Radiology />} />
            <Route path="/specialties/reproductive-endocrinology" element={<ReproductiveEndocrinology />} />
            <Route path="/specialties/rheumatology" element={<Rheumatology />} />
            <Route path="/specialties/urology" element={<Urology />} />
            <Route path="/specialties/nurse-practitioner" element={<NursePractitioner />} />
            <Route path="/specialties/:specialtyId" element={<SpecialtyDetail />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="/sitemap" element={<HtmlSitemap />} />
            <Route path="/denial-codes" element={<DenialCodesHub />} />
            <Route path="/denial-codes/:code" element={<DenialCodePage />} />
            <Route path="/free-consultation" element={<FreeConsultation />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {Object.entries(redirects).map(([from, to]) => (
              <Route key={from} path={from} element={<Navigate to={to} replace />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
        <StickyCta />
      </div>
    </>
  )
}

export default App