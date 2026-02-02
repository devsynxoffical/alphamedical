import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import logo from '../Images/ALPHA-MEDI-ASSIST-LOGO-PNG.png'
import hipaaIcon from '../Images/HIPAA-1-768x296 - Edited.png'
import accreditedIcon from '../Images/Accredited.png'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="Alpha Medi Assist" className="footer-logo-img" />
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
              <li><Link to="/services/medical-billing">Medical Billing</Link></li>
              <li><Link to="/services/medical-coding">Medical Coding</Link></li>
              <li><Link to="/services/credentialing">Credentialing</Link></li>
              <li><Link to="/services/payment-posting">Payment Posting</Link></li>
              <li><Link to="/services/virtual-assistant">Virtual Assistance</Link></li>
              <li><Link to="/services/healthcare-seo">Healthcare SEO</Link></li>
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
              <div className="contact-item">
                <MapPin size={18} />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=7901+4th+ST+N+Ste+23684+St.+Petersburg+Florida+33702" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  7901 4th ST N Ste 23684<br />St. Petersburg, Florida 33702
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-badges">
            <img 
              src={hipaaIcon} 
              alt="HIPAA Compliant"
              className="footer-badge-image"
            />
            <img 
              src={accreditedIcon} 
              alt="BBB Accredited"
              className="footer-badge-image"
            />
          </div>
          <div className="footer-legal">
            <p>&copy; 2025 Alpha Medi Assist. All Rights Reserved. Project by Alpha Ahead</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
