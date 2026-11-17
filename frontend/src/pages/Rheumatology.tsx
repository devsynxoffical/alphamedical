import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Shield, TrendingUp, Users, Activity, FileText, Settings, ChevronDown, ChevronUp, Star, Database, DollarSign, ArrowLeft } from 'lucide-react'
import PageTitle from '../components/PageTitle'
import drJoe from '../Images/doc lessa jenn.jpg'
import '../App.css'

const Rheumatology: React.FC = () => {
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
                title="Rheumatology Medical Billing Services | AlphaMedi Assist"
                description="Expert rheumatology medical billing services with accurate coding, claims management, and RCM for rheumatology clinics nationwide."
            />

            <div className="specialty-detail-page internal-medicine-page">
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
                                    <h1 className="specialty-title">Rheumatology Medical Billing Services</h1>
                                    <p className="specialty-description">
                                        Efficient billing is essential for rheumatology practices to maintain smooth operations and ensure consistent revenue growth. At AlphaMedi Assist, we specialize in rheumatology medical billing services to streamline claims processing, coding accuracy, and revenue cycle management. Our expert solutions reduce administrative burdens, improve reimbursements, and ensure HIPAA-compliant billing for rheumatology clinics and specialty practices across the United States.
                                    </p>

                                    <div className="testimonial-badge">
                                        <div className="doctor-image">
                                            <img src={drJoe} alt="Dr. Sophia Reynolds" />
                                        </div>
                                        <div className="rating">
                                            <Star size={20} fill="#ffc107" color="#ffc107" />
                                            <span>5/5</span>
                                            <span>Ratings</span>
                                        </div>
                                        <div className="doctor-info">
                                            <span className="doctor-name">Dr. Sophia Reynolds</span>
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
                                    AlphaMedi Assist is a trusted rheumatology billing company providing comprehensive billing, coding, and revenue management services nationwide. Our experienced team delivers end-to-end rheumatology medical billing services designed specifically for rheumatologists, infusion centers, private clinics, and multi-provider practices.
                                </p>
                                <div className="about-cta-wrapper">
                                    <Link to="/about" className="btn btn-primary">Learn more</Link>
                                </div>
                            </div>

                            <div className="about-features-column">
                                <div className="features-box">
                                    <h3>We Focus On:</h3>
                                    <ul className="specialist-features-list">
                                        <li>
                                            <div className="feature-icon-wrapper">
                                                <CheckCircle size={20} />
                                            </div>
                                            <span>Accurate ICD-10 and CPT coding for rheumatology evaluations and treatments</span>
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
                                            <span>Infusion therapy billing and biologic drug claims</span>
                                        </li>
                                        <li>
                                            <div className="feature-icon-wrapper">
                                                <CheckCircle size={20} />
                                            </div>
                                            <span>EHR documentation, scheduling, and workflow optimization</span>
                                        </li>
                                    </ul>
                                    <p className="mt-4" style={{ color: '#666', fontSize: '0.95rem', marginTop: '1.5rem' }}>
                                        Our rheumatology medical billing services are fully HIPAA-compliant, scalable, and tailored to the operational needs of modern rheumatology practices.
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
                            <p>Choosing the right partner for medical billing rheumatology services can significantly impact your clinic’s cash flow and efficiency. AlphaMedi Assist combines specialty expertise with proven billing systems to support long-term success. Why Rheumatology Practices Trust Us:</p>
                        </div>
                        <div className="why-choose-grid">
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Users size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Certified billing specialists trained in rheumatology billing and coding</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Activity size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Deep expertise in rheumatology coding for chronic and complex conditions</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><TrendingUp size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Complete rheumatology RCM solutions covering the full revenue cycle</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Shield size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>HIPAA-compliant workflows to protect sensitive patient data</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><CheckCircle size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Faster reimbursements and reduced claim denials</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Settings size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Scalable services for solo rheumatologists and large clinics</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Users size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Transparent reporting with dedicated account management</h4>
                                </div>
                            </div>
                        </div>
                        <p className="text-center mt-4" style={{ color: '#666', fontStyle: 'italic' }}>Our rheumatology medical billing services help practices stay compliant while maximizing financial performance.</p>
                    </div>
                </section>

                {/* Our Services Section */}
                <section className="services-enhanced section">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>Our Rheumatology Medical Billing Services</h2>
                            <p className="lead">We offer a complete suite of rheumatology medical billing and coding services designed to meet the unique needs of rheumatology clinics.</p>
                        </div>
                        <div className="services-grid-enhanced">
                            <div className="service-card-enhanced">
                                <div className="service-icon"><FileText size={32} /></div>
                                <h3>Claims Submission and Denial Management</h3>
                                <p>We manage accurate claim submissions, payer follow-ups, and denial resolution. Our proactive approach minimizes delays and improves reimbursement rates for rheumatology services.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><Activity size={32} /></div>
                                <h3>Rheumatology Coding Services</h3>
                                <p>Our certified coders ensure precise rheumatology coding for autoimmune conditions, arthritis management, infusion therapies, imaging, and diagnostic testing. Accurate coding reduces audits and claim rejections.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><DollarSign size={32} /></div>
                                <h3>Patient Billing and Statements</h3>
                                <p>We handle patient invoices, statements, and payment follow-ups professionally, improving collections while maintaining strong patient relationships.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><CheckCircle size={32} /></div>
                                <h3>Insurance Verification and Eligibility</h3>
                                <p>Insurance verification is critical for biologic treatments and infusions. Our team confirms eligibility, benefits, and authorization requirements before services are rendered.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><TrendingUp size={32} /></div>
                                <h3>Revenue Cycle Management</h3>
                                <p>Our integrated rheumatology RCM services manage the full financial lifecycle, from patient intake to final payment posting, ensuring consistent cash flow.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><Database size={32} /></div>
                                <h3>EHR Integration and Documentation Support</h3>
                                <p>We integrate seamlessly with your EHR system to support accurate documentation, charge capture, and compliance.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><FileText size={32} /></div>
                                <h3>Reporting and Analytics</h3>
                                <p>Comprehensive financial reports provide insights into claims performance, denials, reimbursements, and outstanding balances.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How AlphaMedi Assist Supports */}
                <section className="section bg-light support-section">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>How AlphaMedi Assist Supports Rheumatology Practices</h2>
                        </div>
                        <div className="support-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                            <div className="support-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #0d6efd', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#1a1a1a' }}>Streamlined Chronic Care Documentation</h3>
                                <p>Our virtual assistants support documentation for long-term rheumatologic care, infusion scheduling, and follow-up visits to ensure accuracy across patient records.</p>
                            </div>
                            <div className="support-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #0d6efd', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#1a1a1a' }}>Prior Authorization and Infusion Billing</h3>
                                <p>We manage prior authorizations and claims for biologics, injections, and infusion services, helping reduce delays and denials.</p>
                            </div>
                            <div className="support-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #0d6efd', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#1a1a1a' }}>Patient Communication Support</h3>
                                <p>Our billing specialists assist with patient inquiries related to coverage, balances, and statements, reducing front-desk workload.</p>
                            </div>
                            <div className="support-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #0d6efd', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#1a1a1a' }}>Compliance and Risk Management</h3>
                                <p>Our rheumatology billing solutions follow payer guidelines, CMS regulations, and HIPAA standards to protect your clinic.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section - Vertical Timeline */}
                <section className="section">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>How Our Rheumatology Billing Process Works</h2>
                        </div>
                        <div className="process-timeline">
                            <div className="process-step">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h3>Step 1: Practice Assessment</h3>
                                    <p>We evaluate patient volume, payer mix, infusion services, and existing workflows to design a customized billing strategy.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h3>Step 2: System Integration</h3>
                                    <p>Our team integrates with your EHR, scheduling tools, and practice management software to ensure smooth operations.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h3>Step 3: Customization and Training</h3>
                                    <p>Billing processes are customized based on your clinic’s protocols, payer contracts, and rheumatology coding requirements.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h3>Step 4: Live Billing and Claims Management</h3>
                                    <p>Our specialists manage claims submission, denial resolution, patient billing, and payment posting with accuracy.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">5</div>
                                <div className="step-content">
                                    <h3>Step 5: Ongoing Support and Reporting</h3>
                                    <p>We provide continuous monitoring, transparent reporting, and workflow optimization to improve performance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Benefits */}
                <section className="section bg-light">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>Key Benefits of Our Rheumatology Medical Billing Services</h2>
                        </div>
                        <div className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
                            {[
                                "Accurate and timely claims for rheumatology treatments",
                                "Reduced administrative workload for clinic staff",
                                "Improved reimbursement rates and faster payments",
                                "HIPAA-compliant billing processes",
                                "Scalable solutions for practices of all sizes",
                                "Transparent reporting and financial visibility",
                                "Expert support for infusion and biologic billing",
                                "Reliable rheumatology billing and coding services"
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
                                <p className="testimonial-text">"AlphaMedi Assist improved our rheumatology billing accuracy and significantly reduced denials."</p>
                                <p className="testimonial-author">Dr. Olivia Carter, New York</p>
                            </div>
                            <div className="testimonial-card-enhanced">
                                <div className="stars">
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                </div>
                                <p className="testimonial-text">"Professional rheumatology billing services with excellent reporting and responsiveness."</p>
                                <p className="testimonial-author">Dr. Daniel Kim, California</p>
                            </div>
                            <div className="testimonial-card-enhanced">
                                <div className="stars">
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                </div>
                                <p className="testimonial-text">"Our infusion billing process became much smoother after outsourcing rheumatology billing."</p>
                                <p className="testimonial-author">Dr. Hannah Brooks, Texas</p>
                            </div>
                            <div className="testimonial-card-enhanced">
                                <div className="stars">
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                </div>
                                <p className="testimonial-text">"Outsourcing rheumatology billing services to Alpha Medi Assist helped us scale without stress."</p>
                                <p className="testimonial-author">Dr. Robert Allen, Florida</p>
                            </div>
                            <div className="testimonial-card-enhanced">
                                <div className="stars">
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                </div>
                                <p className="testimonial-text">"A dependable rheumatology billing company that understands complex coding and payer rules."</p>
                                <p className="testimonial-author">Lisa M., Practice Manager, Illinois</p>
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
                                    q: "1. What are rheumatology medical billing services?",
                                    a: "They include coding, claims submission, insurance verification, patient billing, and revenue cycle management for rheumatology clinics."
                                },
                                {
                                    q: "2. Do you offer rheumatology billing and coding services?",
                                    a: "Yes, we specialize in rheumatology billing and coding services for evaluations, infusions, diagnostics, and chronic care."
                                },
                                {
                                    q: "3. Can you handle infusion and biological billing?",
                                    a: "Absolutely. Our team has extensive experience with infusion therapy and specialty drug billing."
                                },
                                {
                                    q: "4. Are your services HIPAA-compliant?",
                                    a: "Yes, all rheumatology medical billing services follow strict HIPAA and data security standards."
                                },
                                {
                                    q: "5. Can you support multi-provider rheumatology clinics?",
                                    a: "Yes, our services scale for solo practices and large multi-location clinics."
                                },
                                {
                                    q: "6. How quickly can services be implemented?",
                                    a: "Most clinics can begin within a few days after assessment and system integration."
                                }
                            ].map((item, index) => (
                                <div key={index} className="faq-item" style={{ marginBottom: '1rem', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden', background: 'white' }}>
                                    <button
                                        onClick={() => toggleFaq(index)}
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
                                    {openFaq === index && (
                                        <div style={{ padding: '0 1.5rem 1.5rem', color: '#666', lineHeight: '1.6' }}>
                                            {item.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="specialties-cta-enhanced">
                    <div className="container">
                        <div className="cta-content-enhanced">
                            <h2>Get Started Today</h2>
                            <p>Optimize your practice with expert rheumatology medical billing services from Alpha Medi Assist. Reduce administrative burdens, streamline rheumatology RCM, and let our specialists manage billing, coding, and patient statements so you can focus on delivering high-quality rheumatologic care.</p>
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

export default Rheumatology
