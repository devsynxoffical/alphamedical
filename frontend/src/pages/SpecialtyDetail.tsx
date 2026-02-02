import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Star, Shield, Quote } from 'lucide-react'
import { specialties } from '../data/specialties'
import drLissaJenn from '../Images/doc lessa jenn.jpg'
import PageTitle from '../components/PageTitle'

const SpecialtyDetail: React.FC = () => {
  const { specialtyId } = useParams<{ specialtyId: string }>()
  const specialty = specialties.find(s => s.id === specialtyId)

  if (!specialty) {
    return (
      <div className="container">
        <div className="error-page">
          <h1>Specialty Not Found</h1>
          <p>The specialty you're looking for doesn't exist.</p>
          <Link to="/specialties" className="btn btn-primary">
            View All Specialties
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <PageTitle title={`${specialty.name} - Medical Billing Services | Alpha Medi Assist`} />
    <div className="specialty-detail-page">
      {/* Hero Section */}
      <section className="specialty-hero-enhanced">
        <div className="container">
          <div className="specialty-hero-content">
            <Link to="/specialties" className="back-link-enhanced">
              <ArrowLeft size={16} />
              Back to Specialties
            </Link>
            
            <div className="specialty-hero-main">
              <div className="specialty-hero-text">
                <h1 className="specialty-title">{specialty.description}</h1>
                <p className="specialty-description">{specialty.heroDescription}</p>
                
                <div className="testimonial-badge">
                  <div className="doctor-image">
                    <img src={drLissaJenn} alt="Dr. Lissa Jenn" />
                  </div>
                  <div className="rating">
                    <Star size={20} />
                    <span>{specialty.testimonial.rating}</span>
                    <span>Ratings</span>
                  </div>
                  <div className="doctor-info">
                    <span className="doctor-name">{specialty.testimonial.doctor}</span>
                    <span className="years">{specialty.testimonial.years}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Sections */}
      <section className="support-sections-enhanced">
        <div className="container">
          <div className="support-header">
            <h2>How Alpha Medi Assist Supports {specialty.name}?</h2>
          </div>
          <div className="support-grid">
            {specialty.supportSections.map((section, index) => (
              <div key={index} className="support-card-enhanced">
                <div className="support-icon">
                  <CheckCircle size={32} />
                </div>
                <div className="support-content">
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-enhanced section bg-light">
        <div className="container">
          <div className="why-choose-header">
            <h2>Why Choose Alpha Medi Assist?</h2>
          </div>
          <div className="why-choose-grid">
            {specialty.whyChoose.map((item, index) => (
              <div key={index} className="why-choose-card">
                <div className="why-choose-icon">
                  <Shield size={24} />
                </div>
                <div className="why-choose-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-enhanced section">
        <div className="container">
          <div className="testimonials-header">
            <h2>Our Practitioners are Happy & Healthy</h2>
          </div>
          <div className="testimonials-grid">
            {specialty.testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card-enhanced">
                <div className="quote-icon">
                  <Quote size={24} />
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <span className="author-name">{testimonial.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="specialty-cta-enhanced section">
        <div className="container">
          <div className="cta-content-enhanced">
            <h2>{specialty.ctaTitle}</h2>
            <Link to="/book-appointment" className="btn btn-primary btn-large">
              {specialty.ctaDescription}
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default SpecialtyDetail
