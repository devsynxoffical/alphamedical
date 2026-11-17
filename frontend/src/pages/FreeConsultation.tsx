import React, { useState } from 'react'
import { CheckCircle, Send } from 'lucide-react'
import PageTitle from '../components/PageTitle'
import { sendFormSubmission } from '../api/sendFormSubmission'

const FreeConsultation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+1',
    questionsComments: '',
    city: '',
    state: ''
  })
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError('')
    setIsSubmitting(true)

    try {
      await sendFormSubmission({
        source: 'Free Consultation Form',
        payload: formData,
      })
      setShowSuccessModal(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        countryCode: '+1',
        questionsComments: '',
        city: '',
        state: ''
      })
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit the form.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <PageTitle
        title="Free Medical Billing Consultation | Alpha Medi Assist"
        description="Request a free medical billing consultation. We review your claims, denials and A/R and show where your practice is losing revenue. No obligation."
      />
      <div className="free-consultation-page">
      {/* Hero Section */}
      <section className="consultation-hero-section">
        <div className="container">
          <div className="consultation-hero-content">
            <div className="hero-badge">
              <span>Free Consultation</span>
            </div>
            <h1>Get Your Free Medical Billing Consultation</h1>
            <p className="hero-description">
              Connect with our experts to discover how we can streamline your practice's revenue cycle management. 
              Get personalized insights and a custom solution tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="consultation-form-section">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-header">
              <h2>Schedule Your Free Consultation</h2>
              <p>Fill out the form below and our team will reach out to you within 24 hours.</p>
            </div>
            <div className="consultation-form-container">
              <form onSubmit={handleSubmit} className="consultation-form">
              <div className="form-row-split">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="form-input"
                    />
                    <div className="input-focus-border"></div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                      className="form-input"
                    />
                    <div className="input-focus-border"></div>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <div className="phone-input">
                    <select 
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="country-code"
                    >
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+86">🇨🇳 +86</option>
                      <option value="+81">🇯🇵 +81</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+33">🇫🇷 +33</option>
                    </select>
                    <div className="input-wrapper" style={{ flex: 1 }}>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                        className="form-input"
                      />
                      <div className="input-focus-border"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="questionsComments">Questions/Comments *</label>
                  <div className="input-wrapper">
                    <textarea
                      id="questionsComments"
                      name="questionsComments"
                      rows={5}
                      value={formData.questionsComments}
                      onChange={handleChange}
                      placeholder="Tell us about your practice and what challenges you're facing..."
                      required
                      className="form-textarea"
                    ></textarea>
                    <div className="input-focus-border"></div>
                  </div>
                </div>
              </div>

              <div className="form-row form-row-split">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter your city"
                      className="form-input"
                    />
                    <div className="input-focus-border"></div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Enter your state"
                      className="form-input"
                    />
                    <div className="input-focus-border"></div>
                  </div>
                </div>
              </div>

                {submitError && <p className="form-error-message">{submitError}</p>}
                <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
                  <Send size={18} />
                  {isSubmitting ? 'Sending...' : 'Request Free Consultation'}
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
              <p>We've received your consultation request and will get back to you within 24 hours.</p>
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

export default FreeConsultation
