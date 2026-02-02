import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, TrendingUp, Star, Shield, Clock, Users, Target, Zap, Award, TrendingUp as TrendingUpIcon } from 'lucide-react'
import { services } from '../data/services'
import PageTitle from '../components/PageTitle'

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>()
  const service = services.find(s => s.id === serviceId)

  if (!service) {
    return (
      <div className="container">
        <div className="error-page">
          <h1>Service Not Found</h1>
          <p>The service you're looking for doesn't exist.</p>
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    )
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
      <PageTitle title={`${service.name} - Alpha Medi Assist`} />
    <div className="service-detail-page">
      {/* Enhanced Hero Section */}
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
                <p className="service-description">{service.description}</p>
                <div className="service-badges">
                  <span className="service-badge" style={{ backgroundColor: serviceColor }}>
                    Professional Service
                  </span>
                  <span className="service-badge" style={{ backgroundColor: serviceColor }}>
                    HIPAA Compliant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Metrics Section */}
      <section className="service-metrics-enhanced section">
        <div className="container">
          <div className="metrics-header">
            <h2>Performance Metrics</h2>
            <p>Proven results that speak for themselves</p>
          </div>
          <div className="metrics-grid-enhanced">
            {service.metrics.map((metric, index) => (
              <div key={index} className="metric-card-enhanced" style={{ borderColor: serviceColor }}>
                <div className="metric-icon" style={{ color: serviceColor }}>
                  <TrendingUp size={24} />
                </div>
                <div className="metric-content">
                  <div className="metric-value" style={{ color: serviceColor }}>{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="service-features-enhanced section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="features-header">
            <h2>What We Offer</h2>
            <p>Comprehensive features designed to optimize your practice's performance</p>
          </div>
          <div className="features-grid-enhanced">
            {service.features.map((feature, index) => (
              <div key={index} className="feature-card-enhanced" style={{ borderLeftColor: serviceColor }}>
                <div className="feature-content">
                  <h4>{feature}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="service-benefits-enhanced section">
        <div className="container">
          <div className="benefits-header">
            <h2>Key Benefits</h2>
            <p>Discover how our services can transform your practice</p>
          </div>
          <div className="benefits-grid-enhanced">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="benefit-card-enhanced">
                <div className="benefit-icon-wrapper" style={{ backgroundColor: serviceColor }}>
                  <TrendingUpIcon size={24} />
                </div>
                <div className="benefit-content">
                  <h4>{benefit}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="service-process-enhanced section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="process-header">
            <h2>Our Process</h2>
            <p>Simple, streamlined approach to delivering exceptional results</p>
          </div>
          <div className="process-timeline">
            {service.process.map((step, index) => (
              <div key={index} className="process-step-enhanced">
                <div className="step-connector" style={{ backgroundColor: serviceColor }}></div>
                <div className="step-content-enhanced">
                  <div className="step-number-enhanced" style={{ backgroundColor: serviceColor }}>
                    {step.step}
                  </div>
                  <div className="step-details">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="service-cta-enhanced section" style={{ background: `linear-gradient(135deg, ${serviceColor} 0%, ${serviceColor}CC 100%)` }}>
        <div className="container">
          <div className="cta-content-enhanced">
            <div className="cta-icon" style={{ color: 'white' }}>
              {serviceIcon}
            </div>
            <h2 style={{ color: 'white' }}>Ready to Get Started?</h2>
            <p style={{ color: 'white' }}>Contact us today to learn more about our {service.name.toLowerCase()}</p>
            <div className="cta-actions-enhanced">
              <Link to="/contact" className="btn btn-white" style={{ backgroundColor: 'white', color: serviceColor }}>
                Get Free Consultation
              </Link>
              <Link to="/contact" className="btn btn-outline-white" style={{ borderColor: 'white', color: 'white' }}>
                Schedule a Demo
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
