import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Shield, TrendingUp, Users, Activity, FileText, Settings, ChevronDown, ChevronUp, Star, Database, DollarSign, ArrowLeft } from 'lucide-react'
import PageTitle from '../components/PageTitle'
import RelatedLinks from '../components/RelatedLinks'
import LeadSection from '../components/LeadSection'
import { specialtyRelatedLinks } from '../data/relatedLinks'
import drLissa from '../Images/doc lessa jenn.jpg'
import '../App.css'

const Neurology: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // State for FAQ
    const [openFaq, setOpenFaq] = React.useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    return (
        <div className="internal-medicine-page">
            <PageTitle
                title="Neurology Medical Billing Services | Alpha Medi Assist"
                description="Streamline neurology medical billing services with AlphaMedi Assist. Accurate coding, faster claims, and optimized RCM for neurology practices."
            />

            <div className="specialty-detail-page internal-medicine-page">
                {/* Hero Section */}
                <section className="specialty-hero-enhanced">
                    <div className="container">
                        <div className="specialty-hero-content">
                            <Link to="/medical-billing-specialities" className="back-link-enhanced">
                                <ArrowLeft size={16} />
                                Back to Specialties
                            </Link>

                            <div className="specialty-hero-main">
                                <div className="specialty-hero-text">
                                    <h1 className="specialty-title">Neurology Medical Billing Services</h1>
                                    <p className="specialty-description">
                                        Efficient billing is essential for neurology practices to maintain smooth operations and consistent revenue. At AlphaMedi Assist, we specialize in neurology medical billing services to streamline claims, coding, and revenue cycle management. Our solutions reduce administrative burdens, improve reimbursement accuracy, and ensure HIPAA-compliant patient care.
                                    </p>

                                    <div className="testimonial-badge">
                                        <div className="doctor-image">
                                            <img loading="lazy" decoding="async" src={drLissa} alt="Dr. Lissa William" />
                                        </div>
                                        <div className="rating">
                                            <Star size={20} fill="#ffc107" color="#ffc107" />
                                            <span>5/5</span>
                                            <span>Ratings</span>
                                        </div>
                                        <div className="doctor-info">
                                            <span className="doctor-name">Dr. Lissa William</span>
                                            <span className="years">6 Years working with AlphaMedi Assist</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section - Redesigned Layout */}
                <section className="section bg-white">
                    <div className="container">
                        <div className="about-redesign-container">
                            <div className="about-text-column">
                                <h2>About AlphaMedi Assist</h2>
                                <p className="lead-text">
                                    AlphaMedi Assist is a trusted provider of neurology medical billing services across the United States. We support neurologists, neurodiagnostic clinics, hospital-based practices, and multi-provider facilities with complete billing, coding, and revenue cycle management solutions designed specifically for neurology.
                                </p>
                                <p className="description-text">
                                    Neurology billing requires precision due to complex diagnostics, extended visit times, and frequent use of advanced testing. Our team delivers reliable neurology billing solutions that align with payer rules and documentation standards.
                                </p>
                                <div className="about-cta-wrapper">
                                    <Link to="/about-us" className="btn btn-primary">Learn more</Link>
                                </div>
                            </div>

                            <div className="about-features-column">
                                <div className="features-box">
                                    <h3>We focus on:</h3>
                                    <ul className="specialist-features-list">
                                        <li>
                                            <div className="feature-icon-wrapper">
                                                <CheckCircle size={20} />
                                            </div>
                                            <span>Accurate ICD-10 and CPT neurology coding for evaluations, diagnostics, and procedures</span>
                                        </li>
                                        <li>
                                            <div className="feature-icon-wrapper">
                                                <CheckCircle size={20} />
                                            </div>
                                            <span>Claims submission, denial management, and appeal processing</span>
                                        </li>
                                        <li>
                                            <div className="feature-icon-wrapper">
                                                <CheckCircle size={20} />
                                            </div>
                                            <span>Patient billing, statements, and insurance verification</span>
                                        </li>
                                        <li>
                                            <div className="feature-icon-wrapper">
                                                <CheckCircle size={20} />
                                            </div>
                                            <span>EHR documentation, scheduling, and workflow optimization</span>
                                        </li>
                                    </ul>
                                    <p className="mt-4" style={{ color: '#666', fontSize: '0.95rem', marginTop: '1.5rem' }}>
                                        Our neurology medical billing services are fully HIPAA-compliant, scalable, and customized to meet the operational needs of neurology practices of all sizes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Section - Centered Grid */}
                <section className="why-choose-enhanced section bg-light">
                    <div className="container">
                        <div className="why-choose-header">
                            <h2>Why Choose Alpha Medi Assist</h2>
                            <p>Choosing the right partner for neurology billing services directly impacts revenue stability and compliance. Alpha Medi Assist is trusted by neurology providers for the following reasons:</p>
                        </div>
                        <div className="why-choose-grid">
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Users size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Experienced specialists trained in neurology billing and coding services</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Settings size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Comprehensive revenue cycle strategies tailored to neurology workflows</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Shield size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>HIPAA-compliant systems to protect sensitive neurological patient data</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><TrendingUp size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Faster reimbursements and fewer claim denials</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Activity size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Scalable services for solo neurologists and large practices</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><FileText size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Transparent reporting with dedicated account management</h4>
                                </div>
                            </div>
                        </div>
                        <p className="text-center mt-4" style={{ color: '#666', marginTop: '2rem' }}>
                            Our expertise allows neurologists to focus on patient care while we handle billing complexity with accuracy.
                        </p>
                    </div>
                </section>

                {/* Our Services Section */}
                <section className="services-enhanced section">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>Our Neurology Medical Billing Services</h2>
                            <p className="lead">We provide a full suite of neurology medical billing services designed to support clinical efficiency and financial performance.</p>
                        </div>
                        <div className="services-grid-enhanced">
                            <div className="service-card-enhanced">
                                <div className="service-icon"><FileText size={32} /></div>
                                <h3>Claims Submission & Denial Management</h3>
                                <p>We submit clean claims, monitor payer responses, and manage denials promptly to protect cash flow and reduce aging accounts for neurology practices.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><Activity size={32} /></div>
                                <h3>Coding Services</h3>
                                <p>Our certified coders specialize in billing and coding for neurology, ensuring accurate reporting for office visits, EEGs, EMGs, sleep studies, and neurological procedures.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><DollarSign size={32} /></div>
                                <h3>Patient Billing & Statements</h3>
                                <p>We manage patient invoicing, statements, and follow-ups to support collections while maintaining a professional patient experience.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><CheckCircle size={32} /></div>
                                <h3>Insurance Verification</h3>
                                <p>Our team verifies eligibility and benefits before visits, reducing rejected claims and payment delays for neurology services.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><TrendingUp size={32} /></div>
                                <h3>Revenue Cycle Management (RCM)</h3>
                                <p>Integrated neurology medical billing & coding services optimize every stage of the revenue cycle, from charge entry to payment posting and reconciliation.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><Database size={32} /></div>
                                <h3>EHR Integration & Documentation Support</h3>
                                <p>We assist with charting, scheduling, and documentation updates to ensure records support accurate billing and compliance audits.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><FileText size={32} /></div>
                                <h3>Reporting & Analytics</h3>
                                <p>Detailed reports provide insights into claim performance, reimbursement trends, and outstanding balances for informed financial decisions.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How Alpha Medi Assist Supports */}
                <section className="section bg-light support-section">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>How Alpha Medi Assist Supports Neurology Practices</h2>
                        </div>
                        <div className="support-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                            <div className="support-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #0d6efd', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#1a1a1a' }}>Streamlined Diagnostic & Follow-Up Documentation</h3>
                                <p>Our virtual assistants support documentation for consultations, diagnostic testing, and follow-up care to maintain consistency across all encounters.</p>
                            </div>
                            <div className="support-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #0d6efd', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#1a1a1a' }}>Seamless Billing & Prior Authorization</h3>
                                <p>We manage insurance verification, authorizations, and claim submissions for neurological diagnostics and treatments, reducing delays and denials.</p>
                            </div>
                            <div className="support-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #0d6efd', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#1a1a1a' }}>24/7 Support for Neurology Clinics</h3>
                                <p>From urgent neurological cases to routine follow-ups, our team assists with patient communication, referral coordination, and EHR updates.</p>
                            </div>
                        </div>
                        <p className="text-center mt-4" style={{ color: '#666', marginTop: '2rem' }}>
                            Our experience supporting a billings clinic neurology environment allows us to adapt workflows for both outpatient and hospital-based neurology practices.
                        </p>
                    </div>
                </section>

                {/* Process Section - Compact */}
                <section className="section">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>How Our Neurology Billing Process Works</h2>
                        </div>
                        <div className="process-timeline">
                            <div className="process-step">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h3>Step 1: Practice Assessment</h3>
                                    <p>We analyze patient volume, documentation workflows, payer mix, and service complexity to design a customized billing strategy.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h3>Step 2: System Integration</h3>
                                    <p>Our team integrates with your EHR, scheduling platforms, and billing software to ensure seamless data flow.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h3>Step 3: Customization & Training</h3>
                                    <p>Billing workflows are tailored to neurology-specific procedures, coding requirements, and insurance contracts.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h3>Step 4: Live Billing & Claims Management</h3>
                                    <p>Our specialists manage claims, denials, and patient statements accurately and consistently.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">5</div>
                                <div className="step-content">
                                    <h3>Step 5: Ongoing Support & Reporting</h3>
                                    <p>Continuous monitoring, transparent reporting, and workflow refinement help maximize reimbursement and operational efficiency.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Benefits */}
                <section className="section bg-light">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>Key Benefits of Our Neurology Medical Billing Services</h2>
                        </div>
                        <div className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
                            {[
                                "Accurate and timely claims for neurological services",
                                "Reduced administrative workload for staff",
                                "HIPAA-compliant handling of patient data",
                                "Improved revenue cycle performance",
                                "Scalable support for practices of any size",
                                "Transparent financial reporting and insights",
                                "Enhanced compliance with payer and coding guidelines"
                            ].map((benefit, index) => (
                                <div key={index} className="benefit-item" style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    <div style={{ color: '#2ed47a', flexShrink: 0 }}><CheckCircle size={20} /></div>
                                    <span style={{ fontSize: '1.05rem', color: '#333' }}>{benefit}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-center mt-4" style={{ color: '#666', marginTop: '2rem' }}>
                            Our neurology medical billing services help practices remain financially healthy while delivering high-quality neurological care.
                        </p>
                    </div>
                </section>

                {/* Testimonials - Centered */}
                <section className="section">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>Testimonials</h2>
                        </div>
                        <div className="testimonials-grid">
                            <div className="testimonial-card-enhanced">
                                <div className="stars">
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                </div>
                                <p className="testimonial-text">“Alpha Medi Assist’s neurology medical billing services helped us reduce denials and stabilize our cash flow.”</p>
                                <p className="testimonial-author">Dr. Emily Harris, New York</p>
                            </div>
                            <div className="testimonial-card-enhanced">
                                <div className="stars">
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                </div>
                                <p className="testimonial-text">“Professional and reliable neurology billing services. Our collections improved within months.”</p>
                                <p className="testimonial-author">Dr. Michael Lee, California</p>
                            </div>
                            <div className="testimonial-card-enhanced">
                                <div className="stars">
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                </div>
                                <p className="testimonial-text">“Their expertise in neurology coding and billing transformed our administrative workflow.”</p>
                                <p className="testimonial-author">Dr. Sarah Thompson, Texas</p>
                            </div>
                            <div className="testimonial-card-enhanced">
                                <div className="stars">
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                </div>
                                <p className="testimonial-text">“Outsourcing neurology billing and coding services allowed our clinic to focus on patient outcomes.”</p>
                                <p className="testimonial-author">Dr. John Matthews, Florida</p>
                            </div>
                            <div className="testimonial-card-enhanced">
                                <div className="stars">
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                </div>
                                <p className="testimonial-text">“A dependable partner for neurology medical billing and coding services with excellent reporting.”</p>
                                <p className="testimonial-author">Michael P., Practice Manager, Texas</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section bg-light">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>Frequently Asked Questions</h2>
                        </div>
                        <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            {[
                                {
                                    q: "What are neurology medical billing services?",
                                    a: "They include coding, claims submission, insurance verification, patient billing, and revenue cycle management for neurology practices."
                                },
                                {
                                    q: "Do you support diagnostic neurology procedures?",
                                    a: "Yes, we handle billing for EEGs, EMGs, sleep studies, and neurological evaluations."
                                },
                                {
                                    q: "Are your services HIPAA-compliant?",
                                    a: "Yes, all workflows follow strict HIPAA privacy and security standards."
                                },
                                {
                                    q: "Can you support multi-provider neurology practices?",
                                    a: "Absolutely. Our services scale to support practices of all sizes."
                                },
                                {
                                    q: "How quickly can services begin?",
                                    a: "Most neurology practices can be onboard within a few days after assessment and system integration."
                                },
                                {
                                    q: "Do you provide performance reporting?",
                                    a: "Yes, detailed reports track claims, reimbursements, and outstanding balances."
                                }
                            ].map((item, index) => (
                                <div key={index} className="faq-item" style={{ marginBottom: '1rem', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        aria-expanded={openFaq === index}
                                        data-faq-q
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            padding: '1.5rem',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                            fontWeight: 600,
                                            fontSize: '1.1rem',
                                            color: '#1a1a1a'
                                        }}
                                    >
                                        {item.q}
                                        {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </button>
                                    {(
                                        <div data-faq-a hidden={openFaq !== index} style={{ padding: '0 1.5rem 1.5rem', color: '#666', lineHeight: '1.6' }}>
                                            {item.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <LeadSection title="Get a free Neurology billing assessment" />

                <RelatedLinks links={specialtyRelatedLinks} />

                {/* Final CTA */}
                <section className="specialties-cta-enhanced">
                    <div className="container">
                        <div className="cta-content-enhanced">
                            <h2>Get Started Today</h2>
                            <p>Optimize your practice with expert neurology medical billing services from Alpha Medi Assist. Reduce administrative burden, streamline revenue cycle management, and allow our specialists to manage coding, claims, and patient billing so you can focus on neurological patient care.</p>
                            <div className="cta-actions">
                                <Link to="/free-consultation" className="btn btn-primary btn-large">
                                    Get Free Consultation
                                </Link>
                                <Link to="/contact" className="btn btn-secondary btn-large">
                                    Schedule a Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Neurology
