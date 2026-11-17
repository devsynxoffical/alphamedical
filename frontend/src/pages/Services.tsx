import React, { memo, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Phone,
  CheckCircle,
  Settings,
  Shield,
  Search,
  BarChart,
  MessageCircle
} from 'lucide-react'
import PageTitle from '../components/PageTitle'

// Import service images
import medicalBillingImg from '../Images/stomatolog-nurse-tooth-clinic-checking-patient-appointment-looking-computer-monitor-stomatology-assistant-teeth-doctor-discussing-reception-dental-office.jpg'
import virtualAssistantImg from '../Images/nurse-hospital-office-reading-pacient-treatment-laptop-health-care-practitioner-sitting-desk-using-computer-modern-clinic-looking-monitor-medicine.jpg'
import medicalCodingImg from '../Images/optimized_medical_coding.png'
import paymentPostingImg from '../Images/nurse-typing-computer-keyboard-consultation.jpg'
import virtualReceptionistImg from '../Images/medical-practitioner-answering-phone-calls.jpg'
import healthcareSeoImg from '../Images/optimized_healthcare_seo.png'
import credentialingImg from '../Images/medicall credentialing.jpg'

// Service image map
const serviceImages = {
  'medical-billing': medicalBillingImg,
  'virtual-assistant': virtualAssistantImg,
  'medical-coding': medicalCodingImg,
  'payment-posting': paymentPostingImg,
  'virtual-receptionist': virtualReceptionistImg,
  'healthcare-seo': healthcareSeoImg,
  'credentialing': credentialingImg
}

// Memoized Service Room Component
const ServiceRoom = memo(({
  serviceId,
  title,
  description,
  benefits,
  link,
  isLeft,
  priority = false
}: {
  serviceId: string
  title: string
  description: string
  benefits: string[]
  link: string
  isLeft: boolean
  priority?: boolean
}) => {
  const imageSrc = serviceImages[serviceId as keyof typeof serviceImages] || medicalBillingImg

  return (
    <div className={`service-room ${isLeft ? 'service-left' : 'service-right'}`} id={serviceId}>
      <div className="service-visual">
        <img
          src={imageSrc}
          alt={title}
          className="service-image"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          {...(priority ? { fetchpriority: "high" } : {})}
        />
      </div>
      <div className="service-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="service-benefits-wrapper">
          <strong>Benefits:</strong>
          <ul className="service-benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index}><CheckCircle size={16} className="text-primary" /> {benefit}</li>
            ))}
          </ul>
        </div>
        <div className="service-actions">
          <Link to={link} className="btn btn-primary">
            Explore {title}
          </Link>
        </div>
      </div>
    </div>
  )
})

ServiceRoom.displayName = 'ServiceRoom'

const Services: React.FC = () => {
  const servicesData = useMemo(() => [
    {
      id: 'medical-coding',
      title: 'Medical Coding Services',
      description: 'Accurate coding is essential for compliance and proper reimbursement. Our medical coding services cover CPT, ICD-10, and HCPCS coding standards.',
      benefits: [
        'Compliant coding for all procedures',
        'Reduced risk of audits',
        'Faster reimbursement cycles'
      ],
      link: '/medical-coding-services'
    },
    {
      id: 'medical-billing-specialties',
      title: 'Medical Billing Specialties',
      description: 'Comprehensive medical billing solutions for over 90 medical specialties, including cardiology, orthopedics, urology, and more.',
      benefits: [
        'Specialty-specific billing & coding',
        'Reduced administrative burden',
        'Maximzed revenue for custom practices'
      ],
      link: '/medical-billing-specialities'
    },
    {
      id: 'payment-posting',
      title: 'Medical Payment Posting Services',
      description: 'Maintain clean financial records and consistent cash flow with our reliable medical payment posting services. We handle insurance and patient payments with complete accuracy and HIPAA compliance.',
      benefits: [
        'Accurate reconciliation of insurance and patient payments',
        'Improved accuracy and compliance with payer contracts',
        'Transparent reporting for better financial decision making'
      ],
      link: '/medical-payment-posting-services'
    },
    {
      id: 'virtual-receptionist',
      title: 'Virtual Medical Receptionist Services',
      description: 'Professional virtual receptionist services for healthcare practices. Our trained team handles call answering, appointment management, and patient inquiries with full HIPAA compliance.',
      benefits: [
        'Improve patient experience and communication',
        'Reliable virtual front desk for practice operations',
        'Secure and HIPAA-compliant call handling'
      ],
      link: '/virtual-medical-receptionist-services'
    },
    {
      id: 'healthcare-seo',
      title: 'Healthcare SEO Services',
      description: 'Professional Healthcare SEO Services to increase online visibility and attract more patients. We provide website audits, on-page optimization, and local SEO strategies for medical practices.',
      benefits: [
        'Higher search engine rankings for your practice',
        'Increased patient inquiries and scheduling',
        'Expert medical digital marketing strategies'
      ],
      link: '/healthcare-seo-services'
    },
    {
      id: 'medical-credentialing',
      title: 'Medical Credentialing Services',
      description: 'Professional medical credentialing services designed to simplify the complex process of credentialing for healthcare providers. We ensure that physicians and clinics secure proper credentials with insurance companies efficiently.',
      benefits: [
        'Secure proper credentials with insurance carriers',
        'Streamline provider enrollment and renewals',
        'Ensure compliance with state and federal regulations'
      ],
      link: '/medical-credentialing-service'
    }
  ], [])

  const faqs = [
    {
      q: "What are digital medical services?",
      a: "Digital medical services streamline healthcare operations, including billing, coding, virtual reception, payment posting, and credentialing."
    },
    {
      q: "How do medical billing services benefit my practice?",
      a: "Accurate medical billing services reduce denials, improve cash flow, and save administrative time."
    },
    {
      q: "Can virtual receptionist services handle multiple tasks?",
      a: "Yes. Our virtual receptionist services manage calls, appointment scheduling, and patient inquiries efficiently."
    },
    {
      q: "Are your medical coding services compliant with regulations?",
      a: "Absolutely. Our certified medical coding services follow CPT, ICD-10, and HCPCS standards for accuracy."
    },
    {
      q: "Do you cover specialty practices?",
      a: "Yes. Our digital medical services cover over 90 specialties, including cardiology, orthopedics, urology, pediatrics, and more."
    }
  ]

  const successStories = [
    {
      quote: "Alpha Medi Assist transformed our billing process, reducing claim denials and improving cash flow by 12% in just six months. Their medical billing services are exceptional.",
      author: "Dr. Sarah Thompson",
      specialty: "Cardiology Specialist"
    },
    {
      quote: "Working with Alpha Medi Assist's medical coding services streamlined our revenue cycle and improved reimbursements. The team is highly professional.",
      author: "Dr. James Patel",
      specialty: "Orthopedic Surgeon"
    },
    {
      quote: "We achieved a 99% clean claim ratio thanks to their expertise in digital medical services. Our financial stability has improved dramatically.",
      author: "Dr. Emily Rogers",
      specialty: "Urology Specialist"
    },
    {
      quote: "With their virtual receptionist services, our appointment scheduling and patient communication are flawless. The team is reliable and professional.",
      author: "Dr. Michael Brown",
      specialty: "Pediatrics Clinic"
    },
    {
      quote: "Their medical credentialing services helped us join multiple payer networks quickly. We now receive timely reimbursements without delays.",
      author: "Dr. Lisa Nguyen",
      specialty: "Dermatology Clinic"
    },
    {
      quote: "Alpha Medi Assist's payment posting services ensure every transaction is accurately recorded. Our accounting has never been easier.",
      author: "Dr. Robert Wilson",
      specialty: "Laboratory Services"
    }
  ]

  return (
    <>
      <PageTitle
        title="Digital Medical Services | Medical Billing & Coding Solutions"
        description="Maximize revenue with Alpha Medi Assist digital medical services, including billing, coding, virtual reception, and credentialing."
      />

      <div className="services-page">
        {/* SEO Hero Section */}
        <section className="services-hero">
          <div className="container">
            <div className="services-hero-content text-center animate-in">
              <h1>Digital Medical Services for Healthcare Practices</h1>
              <p className="lead">Maximize revenue and streamline operations with expert digital medical services. Focus on patient care while our specialists handle billing, coding, and practice management efficiently.</p>
              <div className="services-hero-actions">
                <Link to="/free-consultation" className="btn btn-primary btn-large">
                  Get Started → Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="why-choose-services bg-light">
          <div className="container">
            <div className="section-header text-center">
              <h2>Why Choose Alpha Medi Assist?</h2>
              <p>Alpha Medi Assist offers comprehensive digital medical services to help healthcare practices:</p>
            </div>
            <div className="features-grid">
              <div className="feature-item">
                <CheckCircle className="text-primary" size={42} />
                <span>Maximize revenue with accurate medical billing services</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="text-primary" size={42} />
                <span>Ensure compliance with certified medical coding services</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="text-primary" size={42} />
                <span>Streamline patient interactions with virtual receptionist services</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="text-primary" size={42} />
                <span>Improve cash flow with payment posting services</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="text-primary" size={42} />
                <span>Join payer networks smoothly with medical credentialing services</span>
              </div>
              <div className="feature-item">
                <CheckCircle className="text-primary" size={42} />
                <span>Enhance digital visibility through healthcare SEO services</span>
              </div>
            </div>
            <p className="solutions-statement text-center">
              Our solutions are scalable, customizable, and designed for specialty clinics, hospitals, and private practices of all sizes.
            </p>
            <div className="text-center mt-4">
              <Link to="/free-consultation" className="btn btn-secondary btn-large">
                Schedule Your Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Services Showcase */}
        <section id="services" className="digital-services-showcase">
          <div className="container">
            <div className="section-header text-center">
              <h2>Our Digital Medical Services</h2>
              <p>We provide a full suite of digital medical services, covering every aspect of healthcare practice management</p>
            </div>

            {servicesData.map((service, index) => (
              <ServiceRoom
                key={service.id}
                serviceId={service.id}
                title={service.title}
                description={service.description}
                benefits={service.benefits}
                link={service.link}
                isLeft={index % 2 === 0}
                priority={index < 2}
              />
            ))}
          </div>
        </section>

        {/* How it Works Section */}
        <section className="how-services-work bg-light">
          <div className="container">
            <div className="section-header text-center">
              <h2>How Our Services Work</h2>
            </div>
            <div className="workflow-steps">
              <div className="step-card">
                <div className="step-number">1</div>
                <Search size={40} className="step-icon" />
                <h4>Assessment & Strategy</h4>
                <p>Review your current billing, coding, and workflow to identify improvements.</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <Settings size={40} className="step-icon" />
                <h4>Implementation</h4>
                <p>Integrate digital medical services tailored to your practice.</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <BarChart size={40} className="step-icon" />
                <h4>Monitoring & Optimization</h4>
                <p>Continuous oversight reduces errors and improves reimbursements.</p>
              </div>
              <div className="step-card">
                <div className="step-number">4</div>
                <Shield size={40} className="step-icon" />
                <h4>Reporting & Transparency</h4>
                <p>Detailed dashboards and reporting give you full visibility into your practice performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="client-success">
          <div className="container">
            <div className="section-header text-center">
              <h2>Client Success Stories</h2>
              <p>Hear from the healthcare professionals who trust us with their practice</p>
            </div>
            <div className="testimonials-grid">
              {successStories.map((story, index) => (
                <div key={index} className="testimonial-card">
                  <MessageCircle size={32} className="quote-icon" />
                  <p>"{story.quote}"</p>
                  <div className="author-info">
                    <strong>{story.author}</strong>
                    <span>{story.specialty}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="services-faqs bg-light">
          <div className="container">
            <div className="section-header text-center">
              <h2>Frequently Asked Questions (FAQs)</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item card">
                  <h4>{faq.q}</h4>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="digital-care-cta section-lg">
          <div className="container text-center">
            <div className="cta-content">
              <h2>"Simplify Your Billing. Boost Your Revenue."</h2>
              <div className="partner-benefits">
                <p>Partner with Alpha Medi Assist for:</p>
                <ul className="cta-benefits-list">
                  <li><CheckCircle size={18} /> Expert medical billing services</li>
                  <li><CheckCircle size={18} /> Certified medical coding services</li>
                  <li><CheckCircle size={18} /> Efficient payment posting services</li>
                  <li><CheckCircle size={18} /> Comprehensive medical credentialing services</li>
                  <li><CheckCircle size={18} /> Scalable virtual medical services</li>
                </ul>
              </div>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-large">
                  <Phone size={20} />
                  Contact Us Now → Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Services