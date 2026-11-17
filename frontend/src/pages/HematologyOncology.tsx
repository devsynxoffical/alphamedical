import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Shield, TrendingUp, Users, Activity, FileText, Settings, ChevronDown, ChevronUp, Star, Database, DollarSign, ArrowLeft } from 'lucide-react'
import PageTitle from '../components/PageTitle'
import RelatedLinks from '../components/RelatedLinks'
import { specialtyRelatedLinks } from '../data/relatedLinks'
import drWilliam from '../Images/doc lessa jenn.jpg'
import '../App.css'

const HematologyOncology: React.FC = () => {
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
                title="Hematology & Oncology Billing Services | Alpha Medi Assist"
                description="Expert hematology & oncology billing services. Streamline claims, coding, and revenue cycle management for your practice."
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
                                    <h1 className="specialty-title">Hematology Oncology Medical Billing Services</h1>
                                    <p className="specialty-description">
                                        Efficient billing is critical for hematology and oncology practices to maintain smooth operations, maximize revenue, and provide high-quality patient care. At Alpha Medi Assist, we specialize in hematology oncology medical billing services to streamline claims, coding, and revenue cycle management (RCM). Our solutions reduce administrative burdens, enhance reimbursements, and ensure HIPAA-compliant workflows, allowing your team to focus entirely on patient care.
                                    </p>

                                    <div className="testimonial-badge">
                                        <div className="doctor-image">
                                            <img loading="lazy" decoding="async" src={drWilliam} alt="Dr. William" />
                                        </div>
                                        <div className="rating">
                                            <Star size={20} fill="#ffc107" color="#ffc107" />
                                            <span>5/5</span>
                                            <span>Ratings</span>
                                        </div>
                                        <div className="doctor-info">
                                            <span className="doctor-name">Dr. William</span>
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
                                    AlphaMedi Assist is a trusted provider of hematology medical billing services and oncology billing solutions across the United States. Our team of experienced professionals delivers end-to-end billing, coding, and oncology revenue cycle management services tailored specifically for hematology and oncology clinics.
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
                                            <span>Accurate hematology oncology coding billing for chemotherapy, immunotherapy, radiation therapy, bone marrow procedures, and lab diagnostics</span>
                                        </li>
                                        <li>
                                            <div className="feature-icon-wrapper">
                                                <CheckCircle size={20} />
                                            </div>
                                            <span>Claims submission, denial management, and appeals processing</span>
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
                                        <li>
                                            <div className="feature-icon-wrapper">
                                                <CheckCircle size={20} />
                                            </div>
                                            <span>HIPAA-compliant practices to ensure secure handling of sensitive patient information</span>
                                        </li>
                                    </ul>
                                    <p className="mt-4" style={{ color: '#666', fontSize: '0.95rem', marginTop: '1.5rem' }}>
                                        Our hematology oncology medical billing services are scalable, customizable, and designed to meet the unique needs of every oncology practice, improving operational efficiency and financial performance.
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
                            <p>Selecting the right hematology billing services provider can significantly impact revenue and practice efficiency. Here’s why hematology and oncology practices trust Alpha Medi Assist:</p>
                        </div>
                        <div className="why-choose-grid">
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Users size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Experienced specialists trained in hematology oncology coding billing and oncology billing standards</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Settings size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Comprehensive oncology revenue cycle management solutions covering claims, coding, and reporting</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Shield size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>HIPAA-compliant workflows to safeguard sensitive patient data</h4>
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
                                    <h4>Scalable services for solo practitioners and large multi-provider hematology/oncology clinics</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><FileText size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Transparent reporting and dedicated support for better financial insights</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Services Section */}
                <section className="services-enhanced section">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>Our Hematology Oncology Medical Billing Services</h2>
                            <p className="lead">We provide a full suite of hematology oncology medical billing services, including:</p>
                        </div>
                        <div className="services-grid-enhanced">
                            <div className="service-card-enhanced">
                                <div className="service-icon"><FileText size={32} /></div>
                                <h3>Claims Submission & Denial Management</h3>
                                <p>We process claims accurately, manage denials efficiently, and handle appeals for hematology and oncology services to ensure timely reimbursements. Our team follows up on rejected claims to minimize revenue loss.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><Activity size={32} /></div>
                                <h3>Coding Services</h3>
                                <p>Our experts provide precise hematology oncology coding billing for chemotherapy, immunotherapy, lab procedures, bone marrow biopsies, radiation treatments, and outpatient infusion services. Correct coding ensures compliance and maximizes reimbursement.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><DollarSign size={32} /></div>
                                <h3>Patient Billing & Statements</h3>
                                <p>We manage patient invoices, statements, and follow-ups to streamline collections. Clear, professional billing reduces administrative workload and enhances patient satisfaction.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><CheckCircle size={32} /></div>
                                <h3>Insurance Verification</h3>
                                <p>Our team verifies insurance eligibility before appointments, reducing claim rejections and delays. Proper verification ensures smoother billing and faster reimbursements.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><TrendingUp size={32} /></div>
                                <h3>Revenue Cycle Management (RCM)</h3>
                                <p>Our oncology revenue cycle management services optimize every step of the billing process, from pre-authorization to final payment, improving cash flow and reducing administrative burden.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><Database size={32} /></div>
                                <h3>EHR Integration & Documentation Support</h3>
                                <p>We integrate seamlessly with your EHR systems to ensure accurate documentation, real-time charting, and scheduling, supporting efficient clinical workflows.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><FileText size={32} /></div>
                                <h3>Reporting & Analytics</h3>
                                <p>Our reporting services provide comprehensive insights into claims, reimbursements, outstanding balances, and workflow performance, enabling informed decision-making.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How Alpha Medi Assist Supports */}
                <section className="section bg-light support-section">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>How Alpha Medi Assist Supports Hematology & Oncology Practices</h2>
                        </div>
                        <div className="support-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                            <div className="support-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #0d6efd', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#1a1a1a' }}>Streamlined Pre- and Post-Treatment Documentation</h3>
                                <p>Our virtual assistants handle pre-treatment scheduling, infusion documentation, lab results, and post-treatment follow-ups for a seamless workflow across hematology and oncology care.</p>
                            </div>
                            <div className="support-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #0d6efd', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#1a1a1a' }}>Seamless Billing & Prior Authorization</h3>
                                <p>We manage insurance verification, prior authorizations, and claims submission for chemotherapy, immunotherapy, radiation, and other oncology procedures to optimize reimbursements for your practice.</p>
                            </div>
                            <div className="support-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #0d6efd', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#1a1a1a' }}>24/7 Support for Hematology & Oncology Practices</h3>
                                <p>From urgent treatments to routine follow-ups, our team manages patient communication, referrals, and EHR updates, enhancing workflow efficiency and patient satisfaction.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section - Compact */}
                <section className="section">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>How Our Hematology Oncology Billing Process Works</h2>
                        </div>
                        <div className="process-timeline">
                            <div className="process-step">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h3>Step 1: Practice Assessment</h3>
                                    <p>We analyze patient flow, billing volume, coding accuracy, and workflow efficiency to create a customized solution for your hematology and oncology clinic.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h3>Step 2: System Integration</h3>
                                    <p>Our team integrates with your EHR, scheduling systems, and practice software to enhance operational efficiency.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h3>Step 3: Customization & Training</h3>
                                    <p>Billing processes are tailored to your practice’s policies, coding standards, and insurance contracts.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h3>Step 4: Live Billing & Claims Management</h3>
                                    <p>Our specialists manage hematology oncology medical billing services, including claims, denials, and patient statements with precision and compliance.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">5</div>
                                <div className="step-content">
                                    <h3>Step 5: Ongoing Support & Reporting</h3>
                                    <p>Continuous monitoring, reporting, and workflow optimization ensure your practice remains financially healthy and operationally efficient.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Benefits */}
                <section className="section bg-light">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>Key Benefits of Our Hematology Oncology Medical Billing Services</h2>
                        </div>
                        <div className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
                            {[
                                "Accurate and timely claims for hematology and oncology procedures",
                                "Reduced administrative burden for your staff",
                                "HIPAA-compliant workflows to protect patient information",
                                "Faster reimbursements and improved revenue cycle management",
                                "Scalable solutions for practices of any size",
                                "Transparent reporting with actionable insights",
                                "Enhanced coding accuracy for higher claim approvals",
                                "Dedicated team specializing in hematology medical billing services and oncology billing"
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
                                <p className="testimonial-text">"Alpha Medi Assist’s hematology oncology medical billing services reduced our claim denials and improved revenue."</p>
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
                                <p className="testimonial-text">"Professional and accurate oncology billing services. Collections and workflow improved significantly."</p>
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
                                <p className="testimonial-text">"Their hematology RCM and oncology billing services made administrative tasks seamless and stress-free."</p>
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
                                <p className="testimonial-text">"Outsourcing hematology oncology medical billing services to Alpha Medi Assist was one of the best decisions for our clinic."</p>
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
                                <p className="testimonial-text">"Reliable billing consultants who handle claims, denials, and patient billing professionally for hematology and oncology practices."</p>
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
                                    q: "What are hematology oncology medical billing services?",
                                    a: "Services that handle coding, claims submission, insurance verification, patient billing, and oncology revenue cycle management for hematology and oncology practices."
                                },
                                {
                                    q: "Can you manage multi-provider hematology/oncology clinics?",
                                    a: "Yes, our services scale to support single-provider clinics and large multi-specialty oncology practices."
                                },
                                {
                                    q: "Are your services HIPAA-compliant?",
                                    a: "Absolutely. All processes comply with HIPAA guidelines to safeguard patient information."
                                },
                                {
                                    q: "How quickly can services be implemented?",
                                    a: "Typically, services start within a few days after assessment and system integration."
                                },
                                {
                                    q: "Do you provide detailed reporting?",
                                    a: "Yes. We provide comprehensive reports on claims, reimbursements, outstanding balances, and workflow efficiency."
                                },
                                {
                                    q: "Can you handle complex hematology and oncology procedures?",
                                    a: "Yes, we specialize in billing for routine care, chemotherapy, immunotherapy, radiation treatments, and lab procedures."
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
                                        Q{index + 1}: {item.q}
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
                            <p>Optimize your hematology or oncology practice with expert hematology oncology medical billing services from Alpha Medi Assist. Reduce administrative burdens, streamline oncology revenue cycle management, and allow our specialists to manage coding, claims, and patient billing so your team can focus on delivering exceptional hematology and oncology care.</p>
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

export default HematologyOncology
