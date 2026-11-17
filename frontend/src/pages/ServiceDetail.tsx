import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, TrendingUp, Star, Shield, Clock, Users, Target, Zap, Award, CheckCircle } from 'lucide-react'
import { services } from '../data/services'
import PageTitle from '../components/PageTitle'
import NotFound from './NotFound'
import RelatedLinks from '../components/RelatedLinks'
import { serviceRelatedLinks } from '../data/relatedLinks'

interface ServiceDetailProps {
  serviceId?: string
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId: propServiceId }) => {
  const { serviceId: paramServiceId } = useParams<{ serviceId: string }>()
  const serviceId = propServiceId || paramServiceId
  const service = services.find(s => s.id === serviceId)

  if (!service) {
    return <NotFound />
  }

  // Get service-specific icon and color scheme
  const getServiceIcon = (serviceId: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'medical-billing': <TrendingUp size={48} />,
      'virtual-assistant': <Users size={48} />,
      'medical-coding': <Shield size={48} />,
      'payment-posting': <Target size={48} />,
      'virtual-receptionist': <Clock size={48} />,
      'healthcare-seo': <Zap size={48} />,
      'credentialing': <Award size={48} />
    }
    return iconMap[serviceId] || <Star size={48} />
  }

  const getServiceColor = (_serviceId: string) => {
    // All services use the same blue color scheme
    return '#2196F3'
  }

  const serviceColor = getServiceColor(serviceId || '')
  const serviceIcon = getServiceIcon(serviceId || '')

  return (
    <>
      <PageTitle
        title={service.metaTitle || `${service.name} - Alpha Medi Assist`}
        description={service.metaDescription}
      />
      <div className="service-detail-page">
        {/* 1. Enhanced Hero Section */}
        <section className="service-hero-enhanced" style={{ background: `linear-gradient(135deg, ${serviceColor}15 0%, ${serviceColor}05 100%)` }}>
          <div className="container">
            <div className="service-hero-content">
              <Link to="/services" className="back-link-enhanced">
                <ArrowLeft size={16} />
                Back to Services
              </Link>

              <div className="service-hero-main">
                <div className="service-icon-large" style={{ color: serviceColor }}>
                  {serviceIcon}
                </div>
                <div className="service-hero-text">
                  <h1 className="service-title">{service.name}</h1>
                  {service.shortDescription && (
                    <p className="service-subtitle" style={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: serviceColor,
                      marginBottom: '1rem',
                      lineHeight: '1.3'
                    }}>
                      {service.shortDescription}
                    </p>
                  )}
                  <p className="service-description">{service.description}</p>

                  <div style={{ marginTop: '2rem' }}>
                    <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: serviceColor }}>
                      {service.heroCtaText || "Get Started"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Sections Based on renderOrder */}
        {(service.sectionOrder || [
          'about',
          'why-choose',
          'detailed-services',
          'process',
          'key-benefits',
          'metrics',
          'specialties',
          'industries',
          'testimonials',
          'faqs'
        ]).map((sectionId) => {
          switch (sectionId) {
            case 'about':
              return service.aboutSection && (
                <section key="about" className="service-about section" style={{ backgroundColor: '#fff' }}>
                  <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                      <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>{service.aboutSection.title}</h2>
                        <p className="about-description" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4b5563', marginBottom: '1.5rem' }}>
                          {service.aboutSection.content}
                        </p>
                        {service.aboutSection.contentAfter && (
                          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4b5563', marginBottom: '2rem' }}>
                            {service.aboutSection.contentAfter}
                          </p>
                        )}
                        <Link to="/free-consultation" className="btn btn-primary" style={{ backgroundColor: serviceColor }}>
                          Learn More
                        </Link>
                      </div>
                      {service.aboutSection.bulletPoints && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                          {service.aboutSection.bulletPoints.map((point, index) => (
                            <div key={index} style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '1rem',
                              background: '#f8fafc',
                              padding: '1.2rem',
                              borderRadius: '12px',
                              borderLeft: `4px solid ${serviceColor}`
                            }}>
                              <div style={{ color: serviceColor, display: 'flex', alignItems: 'center' }}>
                                <Shield size={20} />
                              </div>
                              <span style={{ fontWeight: 600, color: '#1e293b', fontSize: '1.05rem' }}>{point}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              )

            case 'why-choose':
              return service.whyChooseDetail && (
                <section key="why-choose" className="service-why-choose section" style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="container">
                    <div className="features-header">
                      <h2>{service.whyChooseTitle || `Why Choose Our ${service.name}`}</h2>
                      <p>{service.whyChooseDescription || "Selecting the right partner is crucial for your practice's success"}</p>
                    </div>
                    <div className="features-grid-enhanced" style={{ marginTop: '3rem' }}>
                      {service.whyChooseDetail.map((item, index) => (
                        <div key={index} className="feature-card-enhanced" style={{ borderLeftColor: serviceColor }}>
                          <h4 style={{ color: serviceColor }}>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>
                    {service.whyChooseClosing && (
                      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        {service.whyChooseClosing.startsWith('CTA Button:') ? (
                          <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: serviceColor }}>
                            {service.whyChooseClosing.replace('CTA Button:', '').trim()}
                          </Link>
                        ) : (
                          <p style={{ fontWeight: 500, color: '#4b5563', fontSize: '1.1rem' }}>
                            {service.whyChooseClosing}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </section>
              )

            case 'detailed-services':
              return service.detailedServices ? (
                <section key="detailed-services" className="service-types section">
                  <div className="container">
                    <div className="features-header">
                      <h2>{service.detailedServicesTitle || "Services We Offer"}</h2>
                      <p>{service.detailedServicesDescription || "Our comprehensive solutions cover a wide range of administrative and operational tasks"}</p>
                    </div>
                    <div className="features-grid-enhanced" style={{ marginTop: '3rem' }}>
                      {service.detailedServices.map((serviceGroup, index) => (
                        <div key={index} className="feature-card-enhanced" style={{ borderLeftColor: serviceColor }}>
                          <h4 style={{ marginBottom: '1rem', color: serviceColor }}>{serviceGroup.title}</h4>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {serviceGroup.items.map((item, idx) => (
                              <li key={idx} style={{ marginBottom: '0.5rem', fontSize: '0.95rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                <span style={{ color: serviceColor, marginTop: '5px' }}>•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          {serviceGroup.ctaText && (
                            <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                              <Link
                                to={serviceGroup.ctaLink || "/free-consultation"}
                                className="btn btn-primary"
                                style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}
                              >
                                {serviceGroup.ctaText}
                              </Link>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              ) : service.typesOfServices && (
                <section key="detailed-services-simple" className="service-types section">
                  <div className="container">
                    <div className="features-header">
                      <h2>Types of Services We Offer</h2>
                      <p>We provide a wide range of solutions to meet every healthcare practice need</p>
                    </div>
                    <div style={{ marginTop: '4rem', maxWidth: '900px', margin: '4rem auto 0' }}>
                      {service.typesOfServices.map((type, index) => (
                        <div key={index} style={{ marginBottom: '1.2rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                          <div style={{ color: serviceColor, marginTop: '0.2rem' }}><Shield size={20} /></div>
                          <p style={{ margin: 0, fontSize: '1.1rem', lineHeight: '1.6' }}>{type}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )

            case 'simple-list':
              return service.simpleListSection && (
                <section key="simple-list" className="service-simple-list section" style={{ backgroundColor: '#fff' }}>
                  <div className="container">
                    <div className="features-header">
                      <h2>{service.simpleListSection.title}</h2>
                    </div>
                    <div className="features-grid-enhanced" style={{ marginTop: '3rem' }}>
                      {service.simpleListSection.items.map((item, index) => (
                        <div key={index} className="feature-card-enhanced" style={{
                          borderLeft: `4px solid ${serviceColor}`,
                          display: 'flex',
                          alignItems: 'center',
                          padding: '1.5rem'
                        }}>
                          <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{item}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )

            case 'process':
              return service.process && (
                <section key="process" className="service-process section" style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="container">
                    <div className="features-header">
                      <h2>{service.processTitle || "Our Process"}</h2>
                      <p>{service.processDescription || "How we deliver excellence to your practice"}</p>
                    </div>
                    <div className="process-timeline" style={{ marginTop: '4rem' }}>
                      {service.process.map((step, index) => (
                        <div key={index} className="process-step-enhanced">
                          <div className="step-number-enhanced" style={{ backgroundColor: serviceColor }}>{step.step}</div>
                          <div className="step-connector" style={{ backgroundColor: serviceColor, opacity: 0.2 }}></div>
                          <div className="step-content-enhanced">
                            <div className="step-details">
                              <h4>{step.title}</h4>
                              <p>{step.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {service.processClosing && (
                      <div className="text-center mt-5">
                        <p style={{ fontSize: '1.1rem', color: '#64748b' }}>{service.processClosing}</p>
                      </div>
                    )}
                  </div>
                </section>
              )

            case 'key-benefits':
              return service.keyBenefitsDetail && (
                <section key="key-benefits" className="service-benefits section" style={{ backgroundColor: '#fff' }}>
                  <div className="container">
                    <div className="features-header">
                      <h2>{service.keyBenefitsTitle || "Key Benefits"}</h2>
                      <p>{service.keyBenefitsDescription || "Maximize your practice potential with our solutions"}</p>
                    </div>
                    <div className="features-grid-enhanced" style={{ marginTop: '3rem' }}>
                      {service.keyBenefitsDetail.map((benefit, index) => (
                        <div key={index} className="feature-card-enhanced" style={{ borderLeftColor: serviceColor }}>
                          <h4 style={{ color: serviceColor }}>{benefit.title}</h4>
                          <p>{benefit.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )

            case 'metrics':
              return service.metrics && service.metrics.length > 0 && (
                <section key="metrics" className="service-metrics section" style={{ background: serviceColor }}>
                  <div className="container">
                    <div className="metrics-grid">
                      {service.metrics.map((metric, index) => (
                        <div key={index} className="metric-item">
                          <h3>{metric.value}</h3>
                          <p>{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )

            case 'specialties':
              return service.specialtiesExpertise && (
                <section key="specialties" className="service-specialties section" style={{ backgroundColor: '#fff' }}>
                  <div className="container">
                    <div className="features-header">
                      <h2>{service.specialtiesTitle || "Specialty Expertise"}</h2>
                      <p>{service.specialtiesDescription || "We provide expert solutions for a wide range of medical specialties"}</p>
                    </div>
                    <div className="features-grid-enhanced" style={{ marginTop: '3rem' }}>
                      {service.specialtiesExpertise.map((specialty, index) => (
                        <div key={index} className="feature-card-enhanced" style={{ borderLeftColor: serviceColor }}>
                          <h4 style={{ color: serviceColor }}>{specialty.name}</h4>
                          <p>{specialty.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )

            case 'industries':
              return service.industriesServed && (
                <section key="industries" className="service-industries section" style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="container">
                    <div className="features-header">
                      <h2>{service.industriesTitle || "Industries We Serve"}</h2>
                      <p>{service.industriesDescription || "Our solutions are tailored for various healthcare environments"}</p>
                    </div>
                    <div className="features-grid-enhanced" style={{ marginTop: '3rem' }}>
                      {service.industriesServed.map((industry, index) => (
                        <div key={index} className="feature-card-enhanced" style={{ borderLeft: `4px solid ${serviceColor}`, display: 'flex', alignItems: 'center', padding: '1.5rem' }}>
                          <h4 style={{ margin: 0, fontSize: '1.2rem' }}>{industry}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )

            case 'testimonials':
              return service.testimonials && (
                <section key="testimonials" className="service-testimonials section" style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="container">
                    <div className="features-header">
                      <h2>Client Testimonials</h2>
                      <p>What healthcare providers say about our services</p>
                    </div>
                    <div className="metrics-grid-enhanced" style={{ marginTop: '4rem' }}>
                      {service.testimonials.map((testi, index) => (
                        <div key={index} style={{ background: '#fff', padding: '2.5rem', borderRadius: '24px', position: 'relative', border: '1px solid #f1f5f9', boxShadow: '0 10px 40px rgba(0,0,0,0.02)' }}>
                          <div style={{ color: serviceColor, fontSize: '3rem', position: 'absolute', top: '1rem', left: '1.5rem', opacity: 0.1, fontFamily: 'serif' }}>"</div>
                          <p style={{ fontStyle: 'italic', marginBottom: '2rem', lineHeight: '1.8', fontSize: '1.05rem', position: 'relative', zIndex: 1 }}>{testi.quote}</p>
                          <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem' }}>
                            <h5 style={{ margin: 0, fontSize: '1.1rem' }}>{testi.name}</h5>
                            <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>{testi.location}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )

            case 'faqs':
              return service.faqs && (
                <section key="faqs" className="service-faqs section" style={{ backgroundColor: '#fff' }}>
                  <div className="container" style={{ maxWidth: '900px' }}>
                    <div className="features-header">
                      <h2>Frequently Asked Questions (FAQs)</h2>
                      <p>Common questions about our services and solutions</p>
                    </div>
                    <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      {service.faqs.map((faq, index) => (
                        <div key={index} style={{ background: '#f8fafc', padding: '2rem', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                          <h4 data-faq-q style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', color: '#0f172a' }}>
                            <span style={{ color: serviceColor }}>Q:</span> {faq.question}
                          </h4>
                          <p data-faq-a style={{ margin: 0, color: '#64748b', lineHeight: '1.7', paddingLeft: '2.4rem' }}>{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )

            default:
              return null
          }
        })}

        <RelatedLinks links={serviceRelatedLinks.filter((l) => !l.path.includes(serviceId ?? '__'))} />

        {/* 11. Enhanced CTA Section (Always Last) */}
        <section className="service-cta-enhanced section" style={{ background: `linear-gradient(135deg, ${serviceColor} 0%, ${serviceColor}CC 100%)` }}>
          <div className="container">
            <div className="cta-content-enhanced">
              <div className="cta-icon" style={{ color: 'white' }}>
                {serviceIcon}
              </div>
              <h2 style={{ color: 'white' }}>{service.ctaSection?.title || "Ready to Get Started?"}</h2>
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>
                {service.ctaSection?.content || "Contact us today for a free consultation and see how we can help your practice grow."}
              </p>

              {service.ctaSection?.bulletPoints && (
                <div style={{ margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'center' }}>
                  {service.ctaSection.bulletPoints.map((point, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'white' }}>
                      <CheckCircle size={18} />
                      <span style={{ fontSize: '1.1rem' }}>{point}</span>
                    </div>
                  ))}
                </div>
              )}

              {service.ctaSection?.contentAfter && (
                <p style={{ color: 'rgba(255,255,255,0.9)', marginTop: '1rem' }}>
                  {service.ctaSection.contentAfter}
                </p>
              )}
              <div className="cta-actions">
                <Link to="/free-consultation" className="btn btn-light btn-large">
                  {service.ctaSection?.buttonText || "Get Free Consultation"}
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-large">
                  {service.ctaSection?.button2Text || "Contact Us"}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ServiceDetail
