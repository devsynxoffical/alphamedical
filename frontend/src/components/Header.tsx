import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import logo from '../Images/ALPHA-MEDI-ASSIST-LOGO-PNG.png'
import { specialties } from '../data/specialties'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { id: 'medical-billing', name: 'Medical Billing Services', path: '/services/medical-billing' },
    { id: 'virtual-assistant', name: 'Virtual Medical Assistant', path: '/services/virtual-assistant' },
    { id: 'medical-coding', name: 'Medical Coding Services', path: '/services/medical-coding' },
    { id: 'payment-posting', name: 'Medical Payment Posting Services', path: '/services/payment-posting' },
    { id: 'virtual-receptionist', name: 'Virtual Medical Receptionist Services', path: '/services/virtual-receptionist' },
    { id: 'healthcare-seo', name: 'Healthcare SEO', path: '/services/healthcare-seo' },
    { id: 'credentialing', name: 'Medical Credentialing Services', path: '/services/credentialing' }
  ]

  // Map specialties to dropdown format
  const specialtiesList = specialties.map(specialty => ({
    id: specialty.id,
    name: specialty.name,
    path: `/specialties/${specialty.id}`
  }))

  const isActive = (path: string) => location.pathname === path

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src={logo} alt="Alpha Medi Assist" className="logo-img" />
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <button
              className="mobile-close-btn"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <div className="dropdown">
              <button
                className={`nav-link dropdown-toggle ${isServicesOpen ? 'active' : ''}`}
                onClick={() => {
                  setIsServicesOpen(!isServicesOpen)
                  if (!isServicesOpen) {
                    setIsSpecialtiesOpen(false)
                  }
                }}
              >
                Services <ChevronDown size={16} />
              </button>
              <div className={`dropdown-menu ${isServicesOpen ? 'show' : ''}`}>
                <Link
                  to="/services"
                  className="dropdown-item"
                  onClick={() => {
                    setIsServicesOpen(false)
                    setIsMenuOpen(false)
                  }}
                >
                  All Services
                </Link>
                {services.map(service => (
                  <Link
                    key={service.id}
                    to={service.path}
                    className="dropdown-item"
                    onClick={() => {
                      setIsServicesOpen(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="dropdown">
              <button
                className={`nav-link dropdown-toggle ${isSpecialtiesOpen ? 'active' : ''}`}
                onClick={() => {
                  setIsSpecialtiesOpen(!isSpecialtiesOpen)
                  if (!isSpecialtiesOpen) {
                    setIsServicesOpen(false)
                  }
                }}
              >
                Specialties <ChevronDown size={16} />
              </button>
              <div className={`dropdown-menu specialties-dropdown ${isSpecialtiesOpen ? 'show' : ''}`}>
                <Link
                  to="/specialties"
                  className="dropdown-item dropdown-header"
                  onClick={() => {
                    setIsSpecialtiesOpen(false)
                    setIsMenuOpen(false)
                  }}
                >
                  View All Specialties
                </Link>
                <div className="dropdown-divider"></div>
                <div className="specialties-dropdown-grid">
                  {specialtiesList.map(specialty => (
                    <Link
                      key={specialty.id}
                      to={specialty.path}
                      className="dropdown-item"
                      onClick={() => {
                        setIsSpecialtiesOpen(false)
                        setIsMenuOpen(false)
                      }}
                    >
                      {specialty.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              to="/blog"
              className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </nav>

          <div className="header-actions">
            <Link to="/book-appointment" className="btn btn-outline">
              Book a Meeting
            </Link>
            <Link to="/free-consultation" className="btn btn-primary">
              Get Free Consultation
            </Link>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  )
}

export default Header
