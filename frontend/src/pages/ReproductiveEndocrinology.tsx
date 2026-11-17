import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Shield, TrendingUp, Users, Activity, FileText, Settings, ChevronDown, ChevronUp, Star, Database, DollarSign, ArrowLeft } from 'lucide-react'
import PageTitle from '../components/PageTitle'
import RelatedLinks from '../components/RelatedLinks'
import { specialtyRelatedLinks } from '../data/relatedLinks'
import drJoe from '../Images/doc lessa jenn.jpg'
import '../App.css'

const ReproductiveEndocrinology: React.FC = () => {
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
                title="Endocrinology Medical Billing Services | Alpha Medi Assist"
                description="Expert endocrinology medical billing services for fertility clinics. Accurate coding, claims management, and RCM by AlphaMedi Assist."
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
                                    <h1 className="specialty-title">Reproductive Endocrinology Medical Billing Services</h1>
                                    <p className="specialty-description">
                                        Efficient billing is essential for reproductive endocrinology and fertility practices to ensure uninterrupted patient care and consistent revenue growth. At AlphaMedi Assist, we specialize in endocrinology medical billing services designed to simplify claims processing, coding accuracy, and revenue cycle management. Our expert-driven solutions reduce administrative workload, improve reimbursements, and maintain full HIPAA compliance for fertility clinics and endocrinology practices nationwide.
                                    </p>

                                    <div className="testimonial-badge">
                                        <div className="doctor-image">
                                            <img loading="lazy" decoding="async" src={drJoe} alt="Dr. Amanda Lewis" />
                                        </div>
                                        <div className="rating">
                                            <Star size={20} fill="#ffc107" color="#ffc107" />
                                            <span>5/5</span>
                                            <span>Ratings</span>
                                        </div>
                                        <div className="doctor-info">
                                            <span className="doctor-name">Dr. Amanda Lewis</span>
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
                                    Alpha Medi Assist is a trusted provider of endocrinology medical billing services across the United States, supporting reproductive endocrinologists, fertility specialists, and IVF clinics. Our experienced billing professionals deliver end-to-end billing, coding, and revenue cycle solutions tailored specifically to the complexities of fertility treatments and hormonal care.
                                </p>
                                <div className="about-cta-wrapper">
                                    <Link to="/about-us" className="btn btn-primary">Learn more</Link>
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
                                            <span>Accurate ICD-10 and CPT coding for reproductive endocrinology procedures</span>
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
                                            <span>Fertility clinic billing for IVF, IUI, hormone therapy, and diagnostic testing</span>
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
                                            <span>EHR documentation support and workflow optimization</span>
                                        </li>
                                    </ul>
                                    <p className="mt-4" style={{ color: '#666', fontSize: '0.95rem', marginTop: '1.5rem' }}>
                                        Our endocrinology medical billing services are scalable, HIPAA-compliant, and customized for single-provider fertility clinics and multi-location practices.
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
                            <p>Choosing the right endocrinology billing partner directly impacts cash flow, claim approval rates, and patient satisfaction. AlphaMedi Assist is trusted by reproductive endocrinology practices because we combine specialty expertise with proven billing systems.</p>
                        </div>
                        <div className="why-choose-grid">
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Users size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Certified billing specialists trained in endocrinology billing services</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Activity size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Deep experience in fertility clinic billing and insurance protocols</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><TrendingUp size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>End-to-end revenue cycle management for reproductive endocrinology</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Shield size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>HIPAA-compliant processes to safeguard sensitive patient data</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><CheckCircle size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Reduced claim denials and faster reimbursements</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Settings size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Scalable services for growing fertility practices</h4>
                                </div>
                            </div>
                            <div className="why-choose-card">
                                <div className="why-choose-icon"><Users size={24} /></div>
                                <div className="why-choose-content">
                                    <h4>Transparent reporting with dedicated account support</h4>
                                </div>
                            </div>
                        </div>
                        <p className="text-center mt-4" style={{ color: '#666', fontStyle: 'italic' }}>Our endocrinology medical billing services help practices maintain financial stability while delivering high-quality reproductive care.</p>
                    </div>
                </section>

                {/* Our Services Section */}
                <section className="services-enhanced section">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>Our Reproductive Endocrinology Medical Billing Services</h2>
                            <p className="lead">We offer a comprehensive range of endocrinology medical billing services designed specifically for fertility clinics and reproductive endocrinology practices.</p>
                        </div>
                        <div className="services-grid-enhanced">
                            <div className="service-card-enhanced">
                                <div className="service-icon"><FileText size={32} /></div>
                                <h3>Claims Submission and Denial Management</h3>
                                <p>We manage accurate claim submissions, monitor claim status, and handle denial resolution efficiently. Our proactive approach ensures maximum reimbursement and minimizes payment delays for fertility procedures.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><Activity size={32} /></div>
                                <h3>Coding Services for Reproductive Endocrinology</h3>
                                <p>Our certified coders ensure precise coding for IVF cycles, ovulation induction, fertility diagnostics, embryo transfer procedures, and hormone therapies. Accurate coding improves claim acceptance rates and reduces audit risks.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><DollarSign size={32} /></div>
                                <h3>Patient Billing and Statements</h3>
                                <p>We handle patient invoices, statements, and follow-ups with clarity and professionalism, helping fertility clinics maintain positive patient relationships while improving collections.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><CheckCircle size={32} /></div>
                                <h3>Insurance Verification and Eligibility</h3>
                                <p>Insurance verification is critical in fertility clinic billing. We confirm coverage, benefits, and limitations before treatment begins to reduce rejected claims and unexpected patient balances.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><TrendingUp size={32} /></div>
                                <h3>Revenue Cycle Management</h3>
                                <p>Our integrated endocrinology billing services cover the entire revenue cycle, from patient intake to final payment posting, ensuring consistent cash flow and financial transparency.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><Database size={32} /></div>
                                <h3>EHR Integration and Documentation Support</h3>
                                <p>We integrate seamlessly with your EHR system, ensuring accurate documentation, scheduling, and charge capture for reproductive endocrinology services.</p>
                            </div>
                            <div className="service-card-enhanced">
                                <div className="service-icon"><FileText size={32} /></div>
                                <h3>Reporting and Analytics</h3>
                                <p>Detailed financial reports provide insight into claims performance, reimbursement trends, aging accounts, and revenue opportunities.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How AlphaMedi Assist Supports */}
                <section className="section bg-light support-section">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>How AlphaMedi Assist Supports Reproductive Endocrinology Practices</h2>
                        </div>
                        <div className="support-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                            <div className="support-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #0d6efd', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#1a1a1a' }}>Streamlined Treatment Cycle Documentation</h3>
                                <p>Our virtual assistants support IVF cycle tracking, treatment scheduling, and EHR documentation to ensure accurate records across each stage of fertility care.</p>
                            </div>
                            <div className="support-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #0d6efd', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#1a1a1a' }}>Prior Authorization and Pre-Treatment Billing</h3>
                                <p>Many fertility treatments require prior authorization. Our endocrinology billing services include authorization management to prevent claim rejections and treatment delays.</p>
                            </div>
                            <div className="support-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #0d6efd', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#1a1a1a' }}>Patient Communication Support</h3>
                                <p>We assist with billing inquiries, insurance explanations, and follow-ups, improving patient satisfaction and reducing front-desk workload.</p>
                            </div>
                            <div className="support-card" style={{ background: 'white', padding: '2rem', borderRadius: '16px', borderTop: '4px solid #0d6efd', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', color: '#1a1a1a' }}>Compliance and Audit Readiness</h3>
                                <p>Our endocrinology medical billing services adhere to industry regulations, payer guidelines, and HIPAA standards to protect your practice and patients.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section - Vertical Timeline */}
                <section className="section">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>How Our Endocrinology Billing Process Works</h2>
                        </div>
                        <div className="process-timeline">
                            <div className="process-step">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h3>Step 1: Practice Assessment</h3>
                                    <p>We assess patient volume, payer mix, fertility services offered, and current billing challenges to develop a tailored billing strategy.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h3>Step 2: System Integration</h3>
                                    <p>Our team integrates with your EHR, scheduling software, and practice management systems for seamless operations.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h3>Step 3: Customization and Training</h3>
                                    <p>Billing workflows are customized to your reproductive endocrinology protocols, payer contracts, and reporting needs.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h3>Step 4: Live Billing and Claims Management</h3>
                                    <p>Our specialists manage coding, claims submission, denial handling, and patient billing accurately and efficiently.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">5</div>
                                <div className="step-content">
                                    <h3>Step 5: Ongoing Optimization and Reporting</h3>
                                    <p>We continuously monitor performance, provide transparent reports, and refine processes to improve reimbursements and efficiency.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Benefits */}
                <section className="section bg-light">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2>Key Benefits of Our Endocrinology Medical Billing Services</h2>
                        </div>
                        <div className="benefits-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
                            {[
                                "Accurate and timely claims for fertility and endocrinology procedures",
                                "Reduced administrative workload for clinic staff",
                                "Improved claim approval rates and faster reimbursements",
                                "HIPAA-compliant data protection",
                                "Scalable solutions for growing fertility clinics",
                                "Transparent reporting and actionable financial insights",
                                "Enhanced patient billing accuracy and communication",
                                "Expert support for complex fertility clinic billing"
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
                                <p className="testimonial-text">"Alpha Medi Assist transformed our fertility clinic billing. Denials dropped and revenue improved."</p>
                                <p className="testimonial-author">Dr. Rachel Morgan, New York</p>
                            </div>
                            <div className="testimonial-card-enhanced">
                                <div className="stars">
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                </div>
                                <p className="testimonial-text">"Reliable endocrinology billing services with excellent reporting and support."</p>
                                <p className="testimonial-author">Dr. Steven Patel, California</p>
                            </div>
                            <div className="testimonial-card-enhanced">
                                <div className="stars">
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                </div>
                                <p className="testimonial-text">"Our IVF billing became far more organized and efficient after partnering with Alpha Medi Assist."</p>
                                <p className="testimonial-author">Dr. Laura Bennett, Texas</p>
                            </div>
                            <div className="testimonial-card-enhanced">
                                <div className="stars">
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                </div>
                                <p className="testimonial-text">"Their endocrinology medical billing services helped us scale without increasing staff."</p>
                                <p className="testimonial-author">Dr. James Wilson, Florida</p>
                            </div>
                            <div className="testimonial-card-enhanced">
                                <div className="stars">
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                    <Star fill="#FFD700" color="#FFD700" size={18} />
                                </div>
                                <p className="testimonial-text">"Professional billing team that understands fertility clinic billing inside and out."</p>
                                <p className="testimonial-author">Emily R., Practice Manager, Illinois</p>
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
                                    q: "What are endocrinology medical billing services?",
                                    a: "They include coding, claims submission, insurance verification, patient billing, and revenue cycle management for endocrinology and fertility practices."
                                },
                                {
                                    q: "Do you support fertility clinic billing?",
                                    a: "Yes, we specialize in fertility clinic billing, including IVF, IUI, diagnostics, and hormone therapy services."
                                },
                                {
                                    q: "Are your billing services HIPAA-compliant?",
                                    a: "Absolutely. All endocrinology billing services follow strict HIPAA and data security standards."
                                },
                                {
                                    q: "Can you handle multi-location fertility practices?",
                                    a: "Yes, our services are scalable for single clinics and multi-provider, multi-location practices."
                                },
                                {
                                    q: "How quickly can billing services begin?",
                                    a: "Most practices can be onboard within a few days after assessment and system integration."
                                },
                                {
                                    q: "Do you provide financial reporting?",
                                    a: "Yes, we provide detailed reports covering claims, reimbursements, denials, and outstanding balances."
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
                            <p>Optimize your fertility practice with expert endocrinology medical billing services from Alpha Medi Assist. Reduce administrative burdens, improve reimbursements, and let our specialists manage coding, claims, and fertility clinic billing so you can focus on delivering exceptional reproductive care.</p>
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

export default ReproductiveEndocrinology
