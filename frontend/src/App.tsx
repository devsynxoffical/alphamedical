import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Specialties from './pages/Specialties'
import SpecialtyDetail from './pages/SpecialtyDetail'
import BookAppointment from './pages/BookAppointment'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPostDetail from './pages/BlogPostDetail'
import FreeConsultation from './pages/FreeConsultation'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import InternalMedicine from './pages/InternalMedicine'
import AllergyImmunology from './pages/AllergyImmunology'
import Orthopedics from './pages/Orthopedics'
import PainManagement from './pages/PainManagement'
import Neurology from './pages/Neurology'
import Gastroenterology from './pages/Gastroenterology'
import GeneralSurgery from './pages/GeneralSurgery'
import Anesthesiology from './pages/Anesthesiology'
import Cardiology from './pages/Cardiology'
import Dermatology from './pages/Dermatology'
import EmergencyMedicine from './pages/EmergencyMedicine'
import OBGYN from './pages/OBGYN'
import HematologyOncology from './pages/HematologyOncology'
import OrthopedicSurgery from './pages/OrthopedicSurgery'
import Pediatrics from './pages/Pediatrics'
import PlasticSurgery from './pages/PlasticSurgery'
import Psychiatry from './pages/Psychiatry'
import MentalHealthCounseling from './pages/MentalHealthCounseling'
import Radiology from './pages/Radiology'
import ReproductiveEndocrinology from './pages/ReproductiveEndocrinology'
import Rheumatology from './pages/Rheumatology'
import Urology from './pages/Urology'
import NursePractitioner from './pages/NursePractitioner'
import './App.css'
import ChatWidgetEmbed from './components/ChatWidgetEmbed'
import NotFound from './pages/NotFound'
import LandingPage from './pages/LandingPage'
import { landingPages } from './data/landingPages'
import { redirects } from './seo/routes'

function App() {
  return (
    <>
      <ScrollToTop />
      <ChatWidgetEmbed siteId="alpha-medi-assist" />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Services />} />
            {landingPages.map((page) => (
              <Route key={page.path} path={page.path} element={<LandingPage page={page} />} />
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
            <Route path="/specialties/orthopedic-surgery" element={<OrthopedicSurgery />} />
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
            <Route path="/free-consultation" element={<FreeConsultation />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {Object.entries(redirects).map(([from, to]) => (
              <Route key={from} path={from} element={<Navigate to={to} replace />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App