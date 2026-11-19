import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Shield, TrendingUp, Users, Activity, FileText, Settings, ChevronDown, ChevronUp, Star, Database, DollarSign, ArrowLeft } from 'lucide-react'
import PageTitle from '../components/PageTitle'
import RelatedLinks from '../components/RelatedLinks'
import LeadSection from '../components/LeadSection'
import SpecialtyInsights from '../components/SpecialtyInsights'
import { specialtyRelatedLinks } from '../data/relatedLinks'
import drEmily from '../Images/doc lessa jenn.jpg'
import '../App.css'

const OBGYN: React.FC = () => {
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
                title="OB-GYN Medical Billing Services | Alpha Medi Assist"
                description="Streamline OB-GYN medical billing services with AlphaMedi Assist. Expert coding, claims, and revenue cycle management for obstetrics and gynecology practices."
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
                                    <h1 className="specialty-title">OB-GYN Medical Billing Services</h1>
                                    <p className="specialty-description">
                                        Efficient billing is crucial for OB-GYN practices to maintain smooth operations, maximize revenue, and focus on patient care. At AlphaMedi Assist, we specialize in OB-GYN medical billing services that streamline claims, coding, and revenue cycle management (RCM) for gynecology and obstetrics practices. Our expert solutions reduce administrative burdens, improve reimbursements, and ensure HIPAA-compliant processes, allowing your team to concentrate on delivering exceptional patient care.
                                    </p>

                                    <div className="testimonial-badge">
                                        <div className="doctor-image">
                                            <img loading="lazy" decoding="async" src={drEmily} alt="Dr. Emily" />
                                        </div>
                                        <div className="rating">
                                            <Star size={20} fill="#ffc107" color="#ffc107" />
                                            <span>5/5</span>
                                            <span>Ratings</span>
                                        </div>
                                        <div className="doctor-info">
                                            <span className="doctor-name">Dr. Emily</span>
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
                                    AlphaMedi Assist is a leading provider of OB/GYN billing services across the United States. Our team of experienced billing specialists delivers comprehensive gynecology medical billing services designed to optimize financial performance for private clinics, multi-provider facilities, and hospital-affiliated OB-GYN practices.
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
                                            <span>Accurate OB‑GYN coding for obstetrics and gynecology procedures</span>
                                        </li>
                                        <li>
                                            <div className="feature-icon-wrapper">
                                                <CheckCircle size={20} />
                                            </div>
                                            <span>Timely claims submission, denial management, and appeal processing</span>
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
                                            <span>EHR documentation, workflow optimization, and scheduling</span>
                                        </li>
                                        <li>
                                            <div className="feature-icon-wrapper">
                                                <CheckCircle size={20} />
                                            </div>
                                            <span>Full compliance with HIPAA regulations and data protection</span>
                                        </li>
                                    </ul>
                                    <p className="mt-4" style={{ color: '#666', fontSize: '0.95rem', marginTop: '1.5rem' }}>
                                        Our OB-GYN medical billing services are scalable and tailored to meet the unique needs of every obstetrics and gynecology practice, ensuring efficiency and improved revenue cycle management.
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
                            <p>Selecting the right gynecology billing company can significantly impact your practice’s revenue and operational efficiency. Here’s why OB-GYN practices trust AlphaMedi Assist:</p>
                        </div>
                        <div className="why-choose-grid">
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Users size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Skilled specialists trained in OB/GYN billing services and coding standards</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Settings size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Comprehensive OB‑GYN revenue cycle management solutions, covering claims, coding, and reporting</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Shield size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>HIPAA-compliant workflows to protect sensitive patient information</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><TrendingUp size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Faster reimbursements and reduced claim denials</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Activity size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Scalable services for solo practitioners, multi-provider clinics, and hospital-affiliated OB-GYN offices</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><FileText size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Transparent reporting and dedicated support to guide financial decisions</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Services Section */}
                <section className="services-enhanced section">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>Our OB-GYN Medical Billing Services</h2>
                            <p className="lead">We provide a complete suite of OB/GYN medical billing services, including:</p>
                        </div>
                        <div className="services-grid-enhanced">
                            <div className="service-card-enhanced">
                                <div className="service-icon"><FileText size={32} /></div>
                                <h3>Claims Submission & Denial Management</h3>
                                <p>Accurate claims processing, denial tracking, and appeals management for obstetrics and gynecology services, ensuring practices receive the reimbursements they deserve. Our team follows up on unpaid claims and resolves rejections efficiently.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><Activity size={32} /></div>
                                <h3>Coding Services</h3>
                                <p>Precise OB‑GYN coding for prenatal care, deliveries, gynecologic surgeries, fertility treatments, laparoscopic procedures, and routine OB/GYN visits. Our coding experts ensure compliance with ICD-10, CPT, and HCPCS standards.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><DollarSign size={32} /></div>
                                <h3>Patient Billing & Statements</h3>
                                <p>We handle all patient invoicing, statements, and follow-ups to streamline collections. This reduces administrative workload and improves patient satisfaction with transparent billing processes.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><CheckCircle size={32} /></div>
                                <h3>Insurance Verification</h3>
                                <p>Our team verifies insurance eligibility before appointments, reducing claim rejections, delays, and denials. With proper coverage checks, your practice avoids lost revenue opportunities.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><TrendingUp size={32} /></div>
                                <h3>Revenue Cycle Management (RCM)</h3>
                                <p>Comprehensive gynecology RCM and obstetrics RCM solutions ensure seamless financial operations. From preauthorization to final payment, our services optimize cash flow and improve operational efficiency.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><Database size={32} /></div>
                                <h3>EHR Integration & Documentation Support</h3>
                                <p>We integrate with your EHR systems for real-time charting, scheduling, and documentation, maintaining accurate patient records while supporting smooth office workflows.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><FileText size={32} /></div>
                                <h3>Reporting & Analytics</h3>
                                <p>Detailed reports on claims, reimbursements, outstanding balances, and workflow performance provide actionable insights to make informed financial decisions for your OB-GYN practice.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How Alpha Medi Assist Supports */}
                <section className="section bg-light support-section">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>How Alpha Medi Assist Supports OB-GYN Practices</h2>
                        </div>
                        <div className="support-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                            <div className="support-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #0d6efd', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#1a1a1a' }}>Streamlined Pre- and Post-Procedure Documentation</h3>
                                <p>Our virtual assistants handle prenatal and postnatal scheduling, EHR charting, and SOAP notes to ensure smooth workflows for pre-op, intraoperative, and post-op obstetrics procedures.</p>
                            </div>
                            <div className="support-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #0d6efd', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#1a1a1a' }}>Seamless Billing & Prior Authorization</h3>
                                <p>We manage insurance verification, prior authorizations, and claims submissions for routine gynecologic care, obstetrics, and elective procedures, ensuring optimized reimbursements for your practice.</p>
                            </div>
                            <div className="support-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #0d6efd', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#1a1a1a' }}>24/7 Support for OB-GYN Practices</h3>
                                <p>Our trained team manages patient communication, referrals, and EHR updates, providing support around the clock. This enhances workflow efficiency and patient satisfaction.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section - Compact */}
                <section className="section">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>How Our OB-GYN Billing Process Works</h2>
                        </div>
                        <div className="process-timeline">
                            <div className="process-step">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h3>Step 1: Practice Assessment</h3>
                                    <p>We evaluate patient flow, billing volume, coding accuracy, and workflow efficiency to create a tailored solution.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h3>Step 2: System Integration</h3>
                                    <p>Our team integrates seamlessly with your EHR, scheduling systems, and practice software to enhance operational efficiency.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h3>Step 3: Customization & Training</h3>
                                    <p>Billing processes are customized according to your OB-GYN practice’s policies, coding preferences, and insurance contracts.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h3>Step 4: Live Billing & Claims Management</h3>
                                    <p>Our specialists manage OB-GYN medical billing services, including claims, denials, and patient statements with precision and compliance.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">5</div>
                                <div className="step-content">
                                    <h3>Step 5: Ongoing Support & Reporting</h3>
                                    <p>Continuous monitoring, reporting, and workflow optimization ensure your OB-GYN practice remains efficient and financially healthy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Benefits */}
                <section className="section bg-light">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>Key Benefits of Our OB-GYN Medical Billing Services</h2>
                        </div>
                        <div className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
                            {[
                                "Accurate and timely claims for gynecology and obstetrics procedures",
                                "Reduced administrative burden for office staff",
                                "HIPAA-compliant processes to protect patient data",
                                "Faster reimbursements and improved revenue cycle management",
                                "Scalable solutions for practices of any size",
                                "Transparent reporting with actionable insights",
                                "Enhanced coding accuracy for higher claim approvals",
                                "Dedicated team specializing in medical billing for gynecology and obstetrics"
                            ].map((benefit, index) => (
                                <div key={index} className="benefit-item" style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    <div style={{ color: '#2ed47a', flexShrink: 0 }}><CheckCircle size={20} /></div>
                                    <span style={{ fontSize: '1.05rem', color: '#333' }}>{benefit}</span>
                                </div>
                            ))}
                        </div>
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
                                <p className="testimonial-text">"Alpha Medi Assist’s OB-GYN medical billing services significantly reduced our claim denials and improved revenue."</p>
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
                                <p className="testimonial-text">"Professional and accurate OB/GYN billing services. Workflow efficiency and collections improved tremendously."</p>
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
                                <p className="testimonial-text">"Their OB‑GYN RCM services made administrative tasks seamless and stress-free."</p>
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
                                <p className="testimonial-text">"Outsourcing gynecology billing services to Alpha Medi Assist was one of the best decisions for our clinic."</p>
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
                                <p className="testimonial-text">"Reliable OB-GYN billing consultants who handle claims, denials, and patient statements professionally."</p>
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
                                    q: "What are OB-GYN medical billing services?",
                                    a: "Services that manage coding, claims submission, insurance verification, patient billing, and OB‑GYN revenue cycle management for gynecology and obstetrics practices."
                                },
                                {
                                    q: "Can you manage multi-provider OB-GYN clinics?",
                                    a: "Yes, our services scale to support single-provider clinics and large OB/GYN multi-specialty practices."
                                },
                                {
                                    q: "Are your services HIPAA-compliant?",
                                    a: "Absolutely. All processes comply with HIPAA regulations to protect patient data."
                                },
                                {
                                    q: "How quickly can services be implemented?",
                                    a: "Services usually start within a few days after assessment and system integration."
                                },
                                {
                                    q: "Do you provide detailed reporting?",
                                    a: "Yes. We deliver comprehensive reports on claims, reimbursements, outstanding balances, and workflow performance."
                                },
                                {
                                    q: "Can you handle complex obstetrics and gynecology billing services?",
                                    a: "Yes. We specialize in billing for routine care, complex procedures, surgeries, and prenatal/postnatal care."
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
                                        {index + 1}. {item.q}
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

                <SpecialtyInsights id="gynecology-obstetrics" name="OB/GYN" />

                <LeadSection title="Get a free OB-GYN billing assessment" />

                <RelatedLinks links={specialtyRelatedLinks} />

                {/* Final CTA */}
                <section className="specialties-cta-enhanced">
                    <div className="container">
                        <div className="cta-content-enhanced">
                            <h2>Get Started Today</h2>
                            <p>Optimize your OB-GYN practice with expert OB-GYN medical billing services from Alpha Medi Assist. Reduce administrative burdens, improve revenue cycle efficiency, and allow our specialists to manage OB/GYN coding, claims, and patient billing, so your team can focus on providing quality obstetrics and gynecology care.</p>
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

export default OBGYN
