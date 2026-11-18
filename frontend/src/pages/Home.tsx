import React, { useState, useEffect } from 'react'
import heroVideo from '../Images/143378-782178671_small.mp4'
import { Link } from 'react-router-dom'
import {
  Star,
  Shield,
  ChevronRight,
  Quote,
  ThumbsUp,
  CheckCircle,
  Phone
} from 'lucide-react'
import PageTitle from '../components/PageTitle'
import ctaImage from '../Images/medical-practitioner-answering-phone-calls.jpg'

// Import icon images
import credentialIcon from '../Images/credential.png'
import medicalExpanseIcon from '../Images/medical-expanse.png'
import brainIcon from '../Images/brain.png'
import cardPaymentIcon from '../Images/card-payment.png'
import growthIcon from '../Images/growth.png'
import performanceIcon from '../Images/performance.png'
import leftRightArrowsIcon from '../Images/left-and-right-arrows.png'
import efficiencyIcon from '../Images/efficiency-management.png'
import governanceIcon from '../Images/governance.png'
import scalableIcon from '../Images/scalable.png'

// Import video files
import heartbeatVideo from '../Images/heartbeat.mp4'
import brokenBoneVideo from '../Images/broken-bone.mp4'
import healthcareVideo from '../Images/healthcare.mp4'
import experimentVideo from '../Images/experiment.mp4'
import generalSurgeryGif from '../Images/tools_17405975.webp'

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 6

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Load the 1 MB hero video only after the page has finished loading, so it
  // does not compete with critical resources (the poster frame paints first).
  const [heroSrc, setHeroSrc] = useState<string | undefined>(undefined)
  useEffect(() => {
    const start = () => setHeroSrc(heroVideo)
    if (document.readyState === 'complete') {
      const t = window.setTimeout(start, 200)
      return () => window.clearTimeout(t)
    }
    window.addEventListener('load', start, { once: true })
    return () => window.removeEventListener('load', start)
  }, [])

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <PageTitle
        title="Medical Billing Company for U.S. Practices | Alpha Medi Assist"
        description="Outsourced medical billing, coding, credentialing and RCM for U.S. practices in 90+ specialties. HIPAA-compliant, 98% net collection rate. Free consultation."
      />
      <div className="home">
        {/* Split-Screen Hero Section */}
        <section className="hero-section-split">
          <div className="hero-container-split">
            {/* Left Side - Blue Background with Text */}
            <div className="hero-left-side">
              <div className="hero-content-left">
                <h1 className="hero-title-split">
                  Medical Billing<br />
                  <span className="highlight-split">Company</span> for Healthcare Practices
                </h1>
                <p className="hero-subtext-split">
                  Maximize revenue and streamline operations with expert{' '}
                  <Link to="/medical-billing-services" className="hero-inline-link">medical billing services</Link> and{' '}
                  <Link to="/medical-coding-services" className="hero-inline-link">medical coding services</Link>.
                </p>
                <p className="hero-description-split">
                  Focus on patient care while our specialists handle claims and payments efficiently.
                </p>
                <Link to="/free-consultation" className="cta-button-split">
                  Start Now → Free Consultation
                </Link>
              </div>
            </div>

            {/* Right Side - White Background with Video */}
            <div className="hero-right-side">
              <div className="doctor-image-container">
                <video
                  src={heroSrc}
                  poster="/hero-poster.jpg"
                  aria-label="Medical billing specialist working at a laptop"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="doctor-image-split"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics Section */}
        <section className="metrics-section">
          <div className="container">
            <div className="section-header">
              <h2>Key Metrics</h2>
            </div>
            <div className="metrics-grid">
              <div className="metric-item">
                <div className="metric-value">90+</div>
                <div className="metric-label">Specialties Served</div>
              </div>
              <div className="metric-item">
                <div className="metric-value">98%</div>
                <div className="metric-label">Net Collection Rate</div>
              </div>
              <div className="metric-item">
                <div className="metric-value">30</div>
                <div className="metric-label">Days in AR</div>
              </div>
              <div className="metric-item">
                <div className="metric-value">72-Hour</div>
                <div className="metric-label">Claim Turnaround</div>
              </div>
              <div className="metric-item">
                <div className="metric-value">10%</div>
                <div className="metric-label">Increase in Cash Flow</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="services-showcase">
          <div className="container">
            <div className="section-header">
              <h2>Our Expert Services</h2>
              <p>Alpha Medi Assist provides a full suite of digital medical services to help healthcare practices maximize revenue, reduce administrative burdens, and stay compliant.</p>
            </div>
            <div className="services-grid">

              {/* 1. Medical Billing Services */}
              <div className="service-card">
                <div className="service-icon">
                  <img loading="lazy" decoding="async"
                    src={medicalExpanseIcon}
                    alt="Medical Billing"
                    style={{ width: '45px', height: '45px', objectFit: 'contain' }}
                  />
                </div>
                <h3>Medical Billing Services</h3>
                <p>Our medical billing services streamline revenue cycles and optimize reimbursement. Certified medical billing specialists handle all claims, minimize errors, and manage complex payer requirements.</p>

                <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#1a1a1a', fontWeight: 600 }}>Specialties We Serve:</h4>
                <div className="service-features">
                  <span className="feature-tag">Cardiology</span>
                  <span className="feature-tag">Orthopedics</span>
                  <span className="feature-tag">Urology</span>
                  <span className="feature-tag">Radiology</span>
                  <span className="feature-tag">General Surgery</span>
                </div>

                <Link to="/medical-billing-specialities" className="btn btn-primary service-card-btn">
                  Explore Medical Billing Services
                </Link>
              </div>

              {/* 3. Payment Posting */}
              <div className="service-card">
                <div className="service-icon">
                  <img loading="lazy" decoding="async"
                    src={cardPaymentIcon}
                    alt="Payment Posting"
                    style={{ width: '45px', height: '45px', objectFit: 'contain' }}
                  />
                </div>
                <h3>Medical Payment Posting Services</h3>
                <p>Reliable and accurate medical payment posting for clean financial records and consistent cash flow. We manage insurance and patient payments with complete accuracy and HIPAA compliance.</p>

                <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#1a1a1a', fontWeight: 600 }}>Specialties We Serve:</h4>
                <div className="service-features">
                  <span className="feature-tag">Cardiology</span>
                  <span className="feature-tag">Orthopedics</span>
                  <span className="feature-tag">Urology</span>
                  <span className="feature-tag">Lab Billing</span>
                  <span className="feature-tag">General Surgery</span>
                </div>

                <Link to="/medical-payment-posting-services" className="btn btn-primary service-card-btn">
                  Explore Payment Posting Services
                </Link>
              </div>

              {/* 6. Healthcare SEO */}
              <div className="service-card">
                <div className="service-icon">
                  <img loading="lazy" decoding="async"
                    src={growthIcon}
                    alt="Healthcare SEO"
                    style={{ width: '45px', height: '45px', objectFit: 'contain' }}
                  />
                </div>
                <h3>Healthcare SEO Services</h3>
                <p>Increase online visibility, attract new patients, and grow your practice with professional healthcare SEO. We optimize websites, manage local SEO, and create targeted digital strategies.</p>

                <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#1a1a1a', fontWeight: 600 }}>Specialties We Serve:</h4>
                <div className="service-features">
                  <span className="feature-tag">Private Practices</span>
                  <span className="feature-tag">Specialty Clinics</span>
                  <span className="feature-tag">Hospital Systems</span>
                  <span className="feature-tag">Urgent Care</span>
                  <span className="feature-tag">Behavioral Health</span>
                </div>

                <Link to="/healthcare-seo-services" className="btn btn-primary service-card-btn">
                  Explore Healthcare SEO Services
                </Link>
              </div>

              {/* 2. Medical Coding Services */}
              <div className="service-card">
                <div className="service-icon">
                  <img loading="lazy" decoding="async"
                    src={brainIcon}
                    alt="Medical Coding"
                    style={{ width: '45px', height: '45px', objectFit: 'contain' }}
                  />
                </div>
                <h3>Medical Coding Services</h3>
                <p>Precision-driven medical coding services ensure compliance with CPT, ICD-10, and HCPCS coding standards. Accurate coding safeguards your revenue and protects your practice from audits.</p>

                <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#1a1a1a', fontWeight: 600 }}>Specialties We Serve:</h4>
                <div className="service-features">
                  <span className="feature-tag">Neurology</span>
                  <span className="feature-tag">Gastroenterology</span>
                  <span className="feature-tag">Pain Management</span>
                  <span className="feature-tag">Plastic Surgery</span>
                  <span className="feature-tag">Internal Medicine</span>
                </div>

                <Link to="/medical-coding-services" className="btn btn-primary service-card-btn">
                  Explore Medical Coding Services
                </Link>
              </div>

              {/* 4. Credentialing Services */}
              <div className="service-card">
                <div className="service-icon">
                  <img loading="lazy" decoding="async"
                    src={credentialIcon}
                    alt="Credentialing"
                    style={{ width: '45px', height: '45px', objectFit: 'contain' }}
                  />
                </div>
                <h3>Medical Credentialing Services</h3>
                <p>Professional medical credentialing services designed to simplify the complex process of credentialing for healthcare providers. Secure proper credentials with insurance companies and regulatory bodies efficiently.</p>

                <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#1a1a1a', fontWeight: 600 }}>Specialties We Serve:</h4>
                <div className="service-features">
                  <span className="feature-tag">Cardiology</span>
                  <span className="feature-tag">Orthopedics</span>
                  <span className="feature-tag">Urology</span>
                  <span className="feature-tag">Lab Billing</span>
                  <span className="feature-tag">General Surgery</span>
                </div>

                <Link to="/medical-credentialing-service" className="btn btn-primary service-card-btn">
                  Explore Credentialing Services
                </Link>
              </div>

              {/* 5. Virtual Medical Receptionist Services */}
              <div className="service-card">
                <div className="service-icon">
                  <img loading="lazy" decoding="async"
                    src={efficiencyIcon}
                    alt="Virtual Medical Receptionist"
                    style={{ width: '45px', height: '45px', objectFit: 'contain' }}
                  />
                </div>
                <h3>Virtual Medical Receptionist Services</h3>
                <p>Manage patient communications efficiently while reducing administrative overhead. Our virtual receptionists handle calls, scheduling, and inquiries with professional care and HIPAA compliance.</p>

                <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#1a1a1a', fontWeight: 600 }}>Specialties We Serve:</h4>
                <div className="service-features">
                  <span className="feature-tag">Cardiology</span>
                  <span className="feature-tag">Orthopedics</span>
                  <span className="feature-tag">Urology</span>
                  <span className="feature-tag">Primary Care</span>
                  <span className="feature-tag">Urgent Care</span>
                </div>

                <Link to="/virtual-medical-receptionist-services" className="btn btn-primary service-card-btn">
                  Explore Virtual Medical Receptionist
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Creative About Us Section */}
        <section className="creative-about-section">
          <div className="container">
            {/* Centered Header Section */}
            <div className="about-us-header">
              <h4 className="about-us-label">About Us</h4>
              <h2 className="about-us-title">
                <span className="title-line">Blending Technology</span>
                <span className="title-line highlight">& Expertise</span>
                <span className="title-line">for Smarter Healthcare Operations</span>
              </h2>
              <p className="about-us-description">
                At Alpha Medi Assist, we combine advanced technology with deep industry knowledge to provide comprehensive medical billing and consulting services. Our solutions go beyond simple billing; we help practices achieve financial excellence and operational efficiency.
              </p>
            </div>

            {/* Our Approach Section */}
            <div className="our-approach-section">
              <h3 className="approach-heading">Our Approach</h3>
              <div className="values-grid-4">
                <div className="value-card-redesigned">
                  <div className="value-icon-redesigned">
                    <Shield size={32} />
                  </div>
                  <div className="value-content-redesigned">
                    <h4>Integrity</h4>
                    <p>Transparent processes with the highest ethical standards</p>
                  </div>
                </div>

                <div className="value-card-redesigned">
                  <div className="value-icon-redesigned">
                    <Star size={32} />
                  </div>
                  <div className="value-content-redesigned">
                    <h4>Excellence</h4>
                    <p>Exceptional medical billing, measurable results, and consistent support</p>
                  </div>
                </div>

                <div className="value-card-redesigned">
                  <div className="value-icon-redesigned">
                    <Shield size={32} />
                  </div>
                  <div className="value-content-redesigned">
                    <h4>Compliance</h4>
                    <p>Certified medical coding services ensuring accurate reimbursements</p>
                  </div>
                </div>

                <div className="value-card-redesigned">
                  <div className="value-icon-redesigned">
                    <Star size={32} />
                  </div>
                  <div className="value-content-redesigned">
                    <h4>Scalability</h4>
                    <p>Solutions for small, medium, and large practices</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="about-cta-wrapper">
              <Link to="/contact" className="btn-start-now">
                <span>Start Now</span>
                <ChevronRight size={20} />
              </Link>
            </div>

            {/* Optimized Business Solutions Section */}
            <div className="optimized-solutions-section">
              <div className="optimized-solutions-card-redesigned">
                <h3 className="optimized-solutions-title">Optimized Business Solutions</h3>
                <p className="optimized-solutions-intro">With our full suite of services, we help practices:</p>
                <ul className="optimized-solutions-list">
                  <li>
                    <span className="check-icon">✓</span>
                    <span>Increase cash flow through optimized medical billing services</span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span>Reduce administrative workload for providers</span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span>Ensure compliance with payer regulations</span>
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    <span>Implement virtual solutions to modernize practice management</span>
                  </li>
                </ul>
                <Link to="/free-consultation" className="btn-schedule-analysis">
                  Schedule a Free Analysis
                </Link>
              </div>
            </div>
          </div>

          {/* Background Elements */}
          <div className="background-elements">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
            <div className="floating-shape shape-4"></div>
            <div className="floating-shape shape-5"></div>
            <div className="floating-shape shape-6"></div>
            <div className="floating-shape shape-7"></div>
            <div className="floating-shape shape-8"></div>

            <div className="animated-line line-1"></div>
            <div className="animated-line line-2"></div>
            <div className="animated-line line-3"></div>

            <div className="pulse-dot dot-1"></div>
            <div className="pulse-dot dot-2"></div>
            <div className="pulse-dot dot-3"></div>
            <div className="pulse-dot dot-4"></div>
            <div className="pulse-dot dot-5"></div>
          </div>
        </section>

        {/* Specialty Medical Billing Solutions */}
        <section className="specialties-section">
          <div className="container">
            <div className="section-header">
              <h2>Specialty Medical Billing Solutions</h2>
              <p>Our team delivers medical billing and coding services across 90+ specialties, ensuring accurate, efficient, and compliant management for every type of practice. Each specialty has unique coding requirements, claim complexities, and payer regulations, which our specialists handle with precision.</p>
            </div>
            <div className="specialties-grid">
              <div className="specialty-card">
                <div className="specialty-icon">
                  <video autoPlay muted loop playsInline preload="none" src={heroSrc ? heartbeatVideo : undefined} aria-hidden="true" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                </div>
                <h3>Cardiology</h3>
                <p>Accurate billing for complex cardiac procedures, including EKGs, echocardiograms, interventional cardiology, and electrophysiology services. Our medical billing specialists ensure timely reimbursements while reducing claim denials for cardiac care providers.</p>
              </div>
              <div className="specialty-card">
                <div className="specialty-icon">
                  <video autoPlay muted loop playsInline preload="none" src={heroSrc ? brokenBoneVideo : undefined} aria-hidden="true" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                </div>
                <h3>Orthopedics</h3>
                <p>Efficient coding for musculoskeletal treatments such as joint replacements, arthroscopy, fracture care, and spinal surgeries. Our medical coding services optimize revenue by applying precise CPT, ICD-10, and HCPCS codes.</p>
              </div>
              <div className="specialty-card">
                <div className="specialty-icon">
                  <video autoPlay muted loop playsInline preload="none" src={heroSrc ? healthcareVideo : undefined} aria-hidden="true" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                </div>
                <h3>Urology</h3>
                <p>Streamlined claims for urological care including kidney, bladder, and prostate procedures. Our specialty medical billing handles complex procedures like lithotripsy, cystoscopy, and robotic surgeries with high accuracy.</p>
              </div>
              <div className="specialty-card">
                <div className="specialty-icon">
                  <video autoPlay muted loop playsInline preload="none" src={heroSrc ? experimentVideo : undefined} aria-hidden="true" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                </div>
                <h3>Laboratory Billing</h3>
                <p>Customized solutions for lab testing requirements including blood tests, pathology, microbiology, and molecular diagnostics. Our team ensures proper coding, accurate claims, and timely reimbursement for laboratories of all sizes.</p>
              </div>
              <div className="specialty-card">
                <div className="specialty-icon">
                  <img loading="lazy" decoding="async" src={generalSurgeryGif} alt="General Surgery" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%' }} />
                </div>
                <h3>General Surgery</h3>
                <p>Precise coding for surgical procedures, including minimally invasive surgeries, laparoscopic procedures, and complex inpatient surgeries. We reduce claim errors and improve reimbursement rates for surgical practices.</p>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link to="/medical-billing-specialities" className="btn btn-secondary">View All Specialties</Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-section">
          <div className="container">
            <div className="section-header">
              <h2>Why Choose Alpha Medi Assist?</h2>

            </div>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <img loading="lazy" decoding="async"
                    src={growthIcon}
                    alt="Maximize Revenue"
                    style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  />
                </div>
                <h3>Maximize Revenue</h3>
                <p>Increase cash flow by up to 10% with our medical billing services.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <img loading="lazy" decoding="async"
                    src={performanceIcon}
                    alt="Faster Reimbursements"
                    style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  />
                </div>
                <h3>Faster Reimbursements</h3>
                <p>92% first-submission pass rate ensures steady revenue.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <img loading="lazy" decoding="async"
                    src={leftRightArrowsIcon}
                    alt="Minimize Denials"
                    style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  />
                </div>
                <h3>Minimize Denials</h3>
                <p>99% clean claim ratio reduces AR days.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <img loading="lazy" decoding="async"
                    src={efficiencyIcon}
                    alt="Operational Efficiency"
                    style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  />
                </div>
                <h3>Operational Efficiency</h3>
                <p>Streamlined medical billing services free providers to focus on patients.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <img loading="lazy" decoding="async"
                    src={governanceIcon}
                    alt="Compliance & Accuracy"
                    style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  />
                </div>
                <h3>Compliance & Accuracy</h3>
                <p>Certified medical coding services protect your practice from costly errors.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">
                  <img loading="lazy" decoding="async"
                    src={scalableIcon}
                    alt="Scalability"
                    style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                  />
                </div>
                <h3>Scalability</h3>
                <p>Solutions for practices of all sizes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section className="testimonials-section">
          <div className="container">
            <div className="section-header">
              <h2>Client Success Stories</h2>
              <p>Many practices across the country have experienced the Alpha Medi Assist advantage</p>
            </div>
            <div className="testimonials-carousel">
              <div
                className="testimonials-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="testimonial-card">
                  <div className="testimonial-icon">
                    <Quote size={32} />
                  </div>
                  <p>“Alpha Medi Assist transformed our billing process, reducing claim denials and improving cash flow by 12% within six months. Their medical billing services are efficient, accurate, and reliable.”</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4>Dr. Sarah L.</h4>
                      <span>California</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-icon">
                    <ThumbsUp size={32} />
                  </div>
                  <p>“The team’s medical coding services streamlined our revenue cycle, minimized errors, and ensured faster reimbursements. Our administrative workload has reduced dramatically.”</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4>Michael R.</h4>
                      <span>Practice Manager, Texas</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-icon">
                    <Quote size={32} />
                  </div>
                  <p>“With Alpha Medi Assist, we achieved a 99% clean claim ratio within three months. Their expertise in specialty medical billing services significantly improved our financial performance.”</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4>Dr. Emily S.</h4>
                      <span>New York</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-icon">
                    <ThumbsUp size={32} />
                  </div>
                  <p>“Their medical billing and credentialing services guided us through complex payer networks. We now have faster claim approvals and secured essential provider privileges.”</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4>Karen T.</h4>
                      <span>Florida</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-icon">
                    <Quote size={32} />
                  </div>
                  <p>“The virtual medical assistant team handled our patient scheduling, billing follow-ups, and coding verification efficiently, allowing our staff to focus entirely on patient care.”</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4>Dr. James W.</h4>
                      <span>Illinois</span>
                    </div>
                  </div>
                </div>
                {/* Duplicate for loop effect if needed or keep strictly to 5 */}
                <div className="testimonial-card">
                  <div className="testimonial-icon">
                    <Quote size={32} />
                  </div>
                  <p>“Alpha Medi Assist transformed our billing process, reducing claim denials and improving cash flow by 12% within six months. Their medical billing services are efficient, accurate, and reliable.”</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4>Dr. Sarah L.</h4>
                      <span>California</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-controls">
                <button
                  className="carousel-btn prev-btn"
                  aria-label="Previous testimonial"
                  onClick={prevSlide}
                >
                  <ChevronRight size={20} />
                </button>
                <button
                  className="carousel-btn next-btn"
                  aria-label="Next testimonial"
                  onClick={nextSlide}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              <div className="carousel-dots">
                {Array.from({ length: totalSlides }, (_, index) => (
                  <span
                    key={index}
                    className={`dot ${currentSlide === index ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="faq-section" style={{ padding: '4rem 0', background: '#f9f9f9' }}>
          <div className="container">
            <div className="section-header">
              <h2>FAQs</h2>
              <p>Common questions about our medical billing and coding services</p>
            </div>
            <div className="faq-grid" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="faq-item" style={{ background: '#fff', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#0b3d91' }}>Q1: What are medical billing services?</h3>
                <p style={{ color: '#555' }}>A: Medical billing services manage claims and reimbursements with insurance companies to ensure accurate, timely revenue.</p>
              </div>
              <div className="faq-item" style={{ background: '#fff', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#0b3d91' }}>Q2: How do medical coding services help my practice?</h3>
                <p style={{ color: '#555' }}>A: Certified medical coding services ensure proper coding, regulatory compliance, and optimal reimbursement.</p>
              </div>
              <div className="faq-item" style={{ background: '#fff', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#0b3d91' }}>Q3: Can Alpha Medi Assist handle multiple specialties?</h3>
                <p style={{ color: '#555' }}>A: Yes, we provide specialty medical billing and coding services for 90+ specialties, including cardiology, orthopedics, urology, radiology, and more.</p>
              </div>
              <div className="faq-item" style={{ background: '#fff', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#0b3d91' }}>Q4: What is the advantage of virtual medical services?</h3>
                <p style={{ color: '#555' }}>A: Remote medical billing services reduce overhead, improve workflow, and allow staff to focus on patient care.</p>
              </div>
              <div className="faq-item" style={{ background: '#fff', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#0b3d91' }}>Q5: How fast are claims processed?</h3>
                <p style={{ color: '#555' }}>A: Most claims are processed within 72 hours with a 92% first-submission pass rate.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reborn CTA Section */}
        <section className="cta-section-reborn">
          <div className="container">
            <div className="cta-split-wrapper">
              <div className="cta-text-content">
                <h2>Streamline Your Billing. <span className="highlight">Maximize Your Revenue.</span></h2>
                <p>Don’t let billing challenges interfere with patient care. Partner with Alpha Medi Assist for:</p>

                <div className="cta-benefit-list">
                  <div className="cta-benefit-item">
                    <CheckCircle size={18} className="check-icon" />
                    <span>Expert medical billing services</span>
                  </div>
                  <div className="cta-benefit-item">
                    <CheckCircle size={18} className="check-icon" />
                    <span>Certified medical coding and billing services</span>
                  </div>
                  <div className="cta-benefit-item">
                    <CheckCircle size={18} className="check-icon" />
                    <span>Efficient payment posting in medical billing</span>
                  </div>
                  <div className="cta-benefit-item">
                    <CheckCircle size={18} className="check-icon" />
                    <span>Comprehensive medical billing and credentialing services</span>
                  </div>
                  <div className="cta-benefit-item">
                    <CheckCircle size={18} className="check-icon" />
                    <span>Scalable virtual solutions</span>
                  </div>
                </div>

                <div className="cta-button-group">
                  <Link to="/free-consultation" className="btn-modern btn-primary-modern">
                    <Phone size={18} />
                    Free Consultation Today
                  </Link>
                </div>
              </div>

              <div className="cta-image-content">
                <div className="image-overlay-card">
                  <div className="stat-item">
                    <span className="stat-value">92%</span>
                    <span className="stat-desc">Clean Claim Rate</span>
                  </div>
                </div>
                <img loading="lazy" decoding="async"
                  src={ctaImage}
                  alt="Professional billing support"
                  className="cta-main-img"
                />
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default Home
