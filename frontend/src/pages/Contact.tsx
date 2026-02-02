import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle } from 'lucide-react'
import contactHeroImg from '../Images/computer-1149148_1280.jpg'
import PageTitle from '../components/PageTitle'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    smsConsent: false
  })
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setShowSuccessModal(true)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      smsConsent: false
    })
  }

  return (
    <>
      <PageTitle
        title="Contact Us - Alpha Medi Assist | Get in Touch"
        description="Get in touch with Alpha Medi Assist for expert medical billing services, coding solutions, and practice management inquiries."
      />
      <div className="contact-page">
        {/* Split Hero Section (inspired design) */}
        <section className="contact-hero-split">
          <div className="contact-hero-inner">
            <div className="contact-hero-left">
              <div className="split-badge">We’re here to help</div>
              <h1>Contact Us</h1>
              <p>
                Whether you have a question about our services, need assistance with medical billing,
                or want to discuss how Alpha Medi Assist can support your practice, we’re ready to connect.
              </p>
              <Link to="/about" className="btn btn-primary split-btn">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
            <div className="contact-hero-right">
              <img
                src={contactHeroImg}
                alt="Team discussing strategy"
                className="contact-hero-image"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section section" id="contact-form">
          <div className="container">
            <div className="contact-content">
              <div className="contact-info">
                <h2>Get in Touch</h2>
                <p>
                  Ready to transform your practice's revenue management? Contact us today for a
                  free consultation and discover how Alpha Medi Assist can help optimize your
                  billing processes and increase your revenue.
                </p>

                <div className="contact-details">
                  <div className="contact-item">
                    <Mail size={20} className="text-primary" />
                    <div>
                      <h4>Email</h4>
                      <a href="mailto:info@alphamediassist.com">info@alphamediassist.com</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <Phone size={20} className="text-primary" />
                    <div>
                      <h4>Phone</h4>
                      <a href="tel:+14245427170">+1 (424) 542-7170</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <MapPin size={20} className="text-primary" />
                    <div>
                      <h4>Address</h4>
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

              <div className="contact-form-container">
                <div className="form-header">
                  <h3>Schedule a Consultation</h3>
                  <p>Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <div className="input-wrapper">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                          className="form-input"
                        />
                        <div className="input-focus-border"></div>
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <div className="input-wrapper">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your email address"
                          className="form-input"
                        />
                        <div className="input-focus-border"></div>
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <div className="input-wrapper">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className="form-input"
                        />
                        <div className="input-focus-border"></div>
                      </div>
                    </div>
                  </div>

                  <div className="form-row form-row-split">
                    <div className="form-group">
                      <label htmlFor="preferredDate">Preferred Date</label>
                      <div className="input-wrapper">
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          className="form-input"
                        />
                        <div className="input-focus-border"></div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="preferredTime">Preferred Time</label>
                      <div className="select-wrapper">
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          className="form-select"
                        >
                          <option value="">Select a time slot</option>
                          {timeSlots.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                          ))}
                        </select>
                        <div className="select-arrow">
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="smsConsent"
                        checked={formData.smsConsent}
                        onChange={handleInputChange}
                        className="checkbox-input"
                      />
                      <span className="checkbox-custom">
                        <svg className="checkbox-check" width="12" height="9" viewBox="0 0 12 9" fill="none">
                          <path d="M1 4.5L4.5 8L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="checkbox-text">
                        I agree to receive SMS messages from Alpha Medi Assist regarding updates and marketing
                      </span>
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-submit">
                    <Send size={18} />
                    Send Message
                  </button>

                  <p className="form-footer">
                    By submitting this form, you agree to our <a href="#" className="form-link">Terms & Conditions</a> and <a href="#" className="form-link">Privacy Policy</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="success-modal-overlay" onClick={() => setShowSuccessModal(false)}>
            <div className="success-modal" onClick={(e) => e.stopPropagation()}>
              <div className="success-modal-content">
                <div className="success-icon">
                  <CheckCircle size={64} />
                </div>
                <h2>Thank You!</h2>
                <p>We've received your message and will get back to you within 24 hours.</p>
                <p className="success-subtext">Our team is excited to help you streamline your medical billing process.</p>
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="btn btn-primary success-close-btn"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Contact
