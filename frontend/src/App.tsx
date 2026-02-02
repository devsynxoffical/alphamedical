import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import FreeConsultation from './pages/FreeConsultation'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/specialties/:specialtyId" element={<SpecialtyDetail />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/free-consultation" element={<FreeConsultation />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App