import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Shield, TrendingUp, Users, Activity, FileText, Settings, ChevronDown, ChevronUp, Star, Database, DollarSign, ArrowLeft } from 'lucide-react'
import PageTitle from '../components/PageTitle'
import RelatedLinks from '../components/RelatedLinks'
import { specialtyRelatedLinks } from '../data/relatedLinks'
import drAdam from '../Images/doc lessa jenn.jpg'
import '../App.css'

const Cardiology: React.FC = () => {
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
                title="Cardiology Medical Billing Services | Alpha Medi Assist"
                description="Expert cardiology medical billing services by AlphaMedi Assist. Accurate coding, faster claims, and optimized revenue cycle management."
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
                                    <h1 className="specialty-title">Cardiology Medical Billing Services</h1>
                                    <p className="specialty-description">
                                        Efficient billing is essential for cardiology practices to maintain financial stability and uninterrupted patient care. At AlphaMedi Assist, we specialize in cardiology medical billing services to manage complex claims, precise coding, and complete revenue cycle management workflows. Our solutions reduce administrative workload, improve reimbursement accuracy, and ensure HIPAA-compliant billing for cardiology providers.
                                    </p>

                                    <div className="testimonial-badge">
                                        <div className="doctor-image">
                                            <img loading="lazy" decoding="async" src={drAdam} alt="Dr. Adam" />
                                        </div>
                                        <div className="rating">
                                            <Star size={20} fill="#ffc107" color="#ffc107" />
                                            <span>5/5</span>
                                            <span>Ratings</span>
                                        </div>
                                        <div className="doctor-info">
                                            <span className="doctor-name">Dr. Adam</span>
                                            <span className="years">6 Years working with Alpha Medi Assist</span>
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
                                    AlphaMedi Assist is a trusted partner for cardiology practices across the United States, delivering specialized cardiology medical billing services tailored to private cardiology clinics, hospital-based cardiologists, diagnostic centers, and multi-provider heart care facilities.
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
                                            <span>Accurate ICD-10, CPT, and HCPCS coding for cardiology procedures and diagnostics</span>
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
                                            <span>Patient billing, statements, and insurance eligibility verification</span>
                                        </li>
                                        <li>
                                            <div className="feature-icon-wrapper">
                                                <CheckCircle size={20} />
                                            </div>
                                            <span>EHR documentation, charge capture, and workflow optimization</span>
                                        </li>
                                    </ul>
                                    <p className="mt-4" style={{ color: '#666', fontSize: '0.95rem', marginTop: '1.5rem' }}>
                                        Our cardiology medical billing services are fully HIPAA-compliant, scalable, and customized to meet the operational needs of cardiology practices.
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
                            <h2>Why Choose AlphaMedi Assist</h2>
                            <p>Selecting the right cardiology medical billing company can significantly impact revenue consistency and operational efficiency. Cardiology practices nationwide trust AlphaMedi Assist because of our specialty expertise and transparent service model.</p>
                        </div>
                        <div className="why-choose-grid">
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Users size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Certified specialists trained in cardiology billing and compliance</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Settings size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>End-to-end cardiology billing solutions covering coding, claims, and reporting</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Shield size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>HIPAA-compliant systems protecting sensitive patient data</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><TrendingUp size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Faster reimbursements with reduced denials and underpayments</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Activity size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Scalable services for solo cardiologists and large cardiology groups</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><FileText size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Transparent reporting with dedicated account support</h4>
                                </div>
                            </div>
                        </div>
                        <p className="text-center mt-4" style={{ color: '#666', marginTop: '2rem' }}>
                            As one of the reliable billing companies for cardiology, we align our workflows with payer policies and clinical documentation standards.
                        </p>
                    </div>
                </section>

                {/* Our Services Section */}
                <section className="services-enhanced section">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>Our Cardiology Medical Billing Services</h2>
                            <p className="lead">We offer a complete suite of cardiology medical billing services designed to improve accuracy, compliance, and cash flow.</p>
                        </div>
                        <div className="services-grid-enhanced">
                            <div className="service-card-enhanced">
                                <div className="service-icon"><FileText size={32} /></div>
                                <h3>Claims Submission & Denial Management</h3>
                                <p>Clean claim submission, denial tracking, and appeals management to maximize cardiology reimbursements.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><Activity size={32} /></div>
                                <h3>Coding Services</h3>
                                <p>Accurate cardiology billing and coding for diagnostic testing, interventional procedures, imaging, and monitoring services.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><DollarSign size={32} /></div>
                                <h3>Patient Billing & Statements</h3>
                                <p>Clear patient invoicing, payment posting, and follow-ups to streamline collections.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><CheckCircle size={32} /></div>
                                <h3>Insurance Verification</h3>
                                <p>Eligibility verification prior to appointments to reduce rejected or delayed claims.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><TrendingUp size={32} /></div>
                                <h3>Revenue Cycle Management (RCM)</h3>
                                <p>Integrated cardiology RCM workflows covering charge entry, posting, reconciliation, and reporting.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><Database size={32} /></div>
                                <h3>EHR Integration & Documentation Support</h3>
                                <p>Accurate documentation and charge capture within cardiology EHR systems.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><FileText size={32} /></div>
                                <h3>Reporting & Analytics</h3>
                                <p>Detailed financial reports on claims performance, reimbursements, and outstanding balances.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How AlphaMedi Assist Supports */}
                <section className="section bg-light support-section">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>How AlphaMedi Assist Supports Cardiology Practices</h2>
                        </div>
                        <div className="support-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                            <div className="support-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #0d6efd', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#1a1a1a' }}>Streamlined Diagnostic and Procedure Documentation</h3>
                                <p>Our specialists ensure accurate documentation for EKGs, echocardiograms, stress tests, catheterizations, and interventional cardiology procedures.</p>
                            </div>
                            <div className="support-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #0d6efd', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#1a1a1a' }}>Seamless Billing & Prior Authorization</h3>
                                <p>We manage insurance verification, authorizations, and claims submission for elective and urgent cardiology services.</p>
                            </div>
                            <div className="support-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #0d6efd', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#1a1a1a' }}>24/7 Support for Cardiology Practices</h3>
                                <p>From outpatient diagnostics to inpatient procedures, our team manages billing follow-ups, payer communication, and documentation updates.</p>
                            </div>
                        </div>
                        <p className="text-center mt-4" style={{ color: '#666', marginTop: '2rem' }}>
                            Practices that outsource to our cardiology billing service provider experience improved collections and fewer administrative disruptions.
                        </p>
                    </div>
                </section>

                {/* Process Section - Compact */}
                <section className="section">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>How Our Cardiology Billing Process Works</h2>
                        </div>
                        <div className="process-timeline">
                            <div className="process-step">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h3>Step 1: Practice Assessment</h3>
                                    <p>We evaluate patient volume, procedure mix, and billing workflows to create a tailored strategy.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h3>Step 2: System Integration</h3>
                                    <p>Our team integrates seamlessly with your EHR, scheduling, and practice management systems.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h3>Step 3: Customization & Training</h3>
                                    <p>Billing processes are customized to cardiology payer contracts, coding requirements, and documentation standards.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h3>Step 4: Live Billing & Claims Management</h3>
                                    <p>Our specialists handle claims submission, denials, and patient billing with accuracy and consistency.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">5</div>
                                <div className="step-content">
                                    <h3>Step 5: Ongoing Support & Reporting</h3>
                                    <p>Continuous monitoring and detailed reporting ensure optimized cardiology medical billing services performance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Benefits */}
                <section className="section bg-light">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>Key Benefits of Our Cardiology Medical Billing Services</h2>
                        </div>
                        <div className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
                            {[
                                "Accurate and timely cardiology claims processing",
                                "Reduced administrative burden for clinical staff",
                                "HIPAA-compliant data handling and workflows",
                                "Improved revenue cycle performance",
                                "Faster reimbursements with fewer denials",
                                "Scalable services for all cardiology practice sizes",
                                "Transparent reporting and actionable insights"
                            ].map((benefit, index) => (
                                <div key={index} className="benefit-item" style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    <div style={{ color: '#2ed47a', flexShrink: 0 }}><CheckCircle size={20} /></div>
                                    <span style={{ fontSize: '1.05rem', color: '#333' }}>{benefit}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-center mt-4" style={{ color: '#666', marginTop: '2rem' }}>
                            Our cardiology medical billing services allow cardiologists to focus on patient outcomes while we manage financial operations.
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
                                <p className="testimonial-text">“AlphaMedi Assist’s cardiology medical billing services significantly reduced our claim denials.”</p>
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
                                <p className="testimonial-text">“Professional, accurate, and reliable cardiology billing support.”</p>
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
                                <p className="testimonial-text">“Their cardiology billing service improved our revenue flow and reporting.”</p>
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
                                <p className="testimonial-text">“One of the most dependable cardiology medical billing companies we have worked with.”</p>
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
                                <p className="testimonial-text">“Accurate coding and consistent follow-ups made a real difference.”</p>
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
                                    q: "What are cardiology medical billing services?",
                                    a: "They include coding, claims submission, insurance verification, patient billing, and revenue cycle management for cardiology practices."
                                },
                                {
                                    q: "Do you support hospital-based cardiologists?",
                                    a: "Yes, we support hospital, private, and multi-provider cardiology practices."
                                },
                                {
                                    q: "Are your services HIPAA-compliant?",
                                    a: "Absolutely. All workflows meet strict HIPAA standards."
                                },
                                {
                                    q: "Can you manage high-volume cardiology practices?",
                                    a: "Yes, our services scale for practices of any size."
                                },
                                {
                                    q: "How fast can services be implemented?",
                                    a: "Most practices are onboarded within a few days after assessment."
                                },
                                {
                                    q: "Do you provide detailed financial reporting?",
                                    a: "Yes, we offer transparent reports on claims, reimbursements, and balances."
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

                <RelatedLinks links={specialtyRelatedLinks} />

                {/* Final CTA */}
                <section className="specialties-cta-enhanced">
                    <div className="container">
                        <div className="cta-content-enhanced">
                            <h2>Get Started Today</h2>
                            <p>Optimize your cardiology practice with expert cardiology medical billing services from Alpha Medi Assist. Reduce administrative workload, improve reimbursement accuracy, and allow our specialists to manage coding, claims, and patient billing so you can focus on delivering high-quality cardiac care.</p>
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

export default Cardiology
