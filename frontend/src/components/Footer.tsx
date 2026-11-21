import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import logo from '../Images/ALPHA-MEDI-ASSIST-LOGO-PNG.png'
import PreferredSourceButton from './PreferredSourceButton'
import hipaaIcon from '../Images/HIPAA-1-768x296 - Edited.png'
import accreditedIcon from '../Images/Accredited.png'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/" className="footer-logo">
              <img loading="lazy" decoding="async" src={logo} alt="Alpha Medi Assist" className="footer-logo-img" />
            </Link>
            <p className="footer-mission">
              Alpha Medi Assist empowers healthcare providers with innovative billing solutions
              designed to simplify practice management and enhance revenue performance.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/alphamediassist" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/alphamediassist/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/alpha-med-assist/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/medical-billing-services">Medical Billing Services</Link></li>
              <li><Link to="/revenue-cycle-management-services">Revenue Cycle Management</Link></li>
              <li><Link to="/denial-management-services">Denial Management</Link></li>
              <li><Link to="/medical-billing-specialities">Billing by Specialty</Link></li>
              <li><Link to="/medical-coding-services">Medical Coding</Link></li>
              <li><Link to="/medical-credentialing-service">Credentialing</Link></li>
              <li><Link to="/medical-payment-posting-services">Payment Posting</Link></li>
              <li><Link to="/virtual-medical-assistant-services">Virtual Medical Assistants</Link></li>
              <li><Link to="/virtual-medical-receptionist-services">Virtual Receptionists</Link></li>
              <li><Link to="/healthcare-seo-services">Healthcare SEO</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Locations &amp; Resources</h4>
            <ul className="footer-links">
              <li><Link to="/medical-billing-services-florida">Medical Billing in Florida</Link></li>
              <li><Link to="/medical-billing-services-virginia">Medical Billing in Virginia</Link></li>
              <li><Link to="/medical-billing-for-small-practices">Billing for Small Practices</Link></li>
              <li><Link to="/blog/how-much-does-medical-billing-cost">Medical Billing Cost Guide</Link></li>
              <li><Link to="/denial-codes">Denial Codes Guide</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get in Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={18} />
                <a href="mailto:info@alphamediassist.com">info@alphamediassist.com</a>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <a href="tel:+14245427170">+1 424-542-7170</a>
              </div>
              <div className="footer-locations-wrapper">
                <div className="footer-locations-header">
                  <MapPin size={18} className="location-header-pin" />
                  <span>Our Locations</span>
                </div>
                <div className="footer-locations-cards">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=7313+Cloverhill+Road+Spotsylvania+Virginia+22551"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-location-card"
                  >
                    <div className="location-card-number">1</div>
                    <div className="location-card-info">
                      <strong className="location-city">Spotsylvania, VA</strong>
                      <span className="location-line">7313 Cloverhill Road</span>
                      <span className="location-line">Virginia 22551</span>
                    </div>
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=7901+4th+ST+N+Ste+23684+St.+Petersburg+Florida+33702"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-location-card"
                  >
                    <div className="location-card-number">2</div>
                    <div className="location-card-info">
                      <strong className="location-city">St. Petersburg, FL</strong>
                      <span className="location-line">7901 4th ST N Ste 23684</span>
                      <span className="location-line">Florida 33702</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <PreferredSourceButton />
          <div className="footer-badges">
            <img loading="lazy" decoding="async"
              src={hipaaIcon}
              alt="HIPAA Compliant"
              className="footer-badge-image"
            />
            <img loading="lazy" decoding="async"
              src={accreditedIcon}
              alt="BBB Accredited"
              className="footer-badge-image"
            />
          </div>
          <div className="footer-legal">
            <p>&copy; {new Date().getFullYear()} Alpha Medi Assist. All Rights Reserved. Project by Alpha Ahead</p>
            <div className="footer-legal-links" style={{ marginTop: '0.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <Link to="/terms-and-conditions" style={{ color: 'var(--sleek-text-muted)', fontSize: '0.875rem', textDecoration: 'none' }}>Terms and Conditions</Link>
              <Link to="/privacy-policy" style={{ color: 'var(--sleek-text-muted)', fontSize: '0.875rem', textDecoration: 'none' }}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
