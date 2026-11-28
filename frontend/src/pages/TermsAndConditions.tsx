import React from 'react'
import PageTitle from '../components/PageTitle'
import { Mail, Globe, ChevronRight } from 'lucide-react'

const TermsAndConditions: React.FC = () => {
    const sections = [
        { id: 'introduction', title: '1. Introduction' },
        { id: 'about', title: '2. About Alpha Medi Assist' },
        { id: 'eligibility', title: '3. Eligibility and Use of Website' },
        { id: 'scope', title: '4. Scope of Services' },
        { id: 'advice', title: '5. No Medical or Legal Advice' },
        { id: 'hipaa', title: '6. HIPAA Compliance and Data Protection' },
        { id: 'ip', title: '7. Intellectual Property Rights' },
        { id: 'client-resp', title: '8. Client Responsibilities' },
        { id: 'payments', title: '9. Payments and Fees' },
        { id: 'liability', title: '10. Limitation of Liability' },
        { id: 'warranties', title: '11. Disclaimer of Warranties' },
        { id: 'third-party', title: '12. Third-Party Links' },
        { id: 'termination', title: '13. Termination of Services' },
        { id: 'governing-law', title: '14. Governing Law' },
        { id: 'changes', title: '15. Changes to Terms and Conditions' },
        { id: 'contact', title: '16. Contact Information' }
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <PageTitle
                title="Terms and Conditions | Alpha Medi Assist"
                description="Review AlphaMedi Assist’s terms and conditions covering website use, medical billing services, compliance, data protection, and user responsibilities."
            />

            <div className="about-sleek-container" style={{ background: '#fcfcfd' }}>
                {/* Header Section */}
                <section className="sleek-hero" style={{
                    padding: '8rem 0 5rem',
                    background: 'radial-gradient(circle at 50% 50%, rgba(33, 150, 243, 0.05) 0%, rgba(255, 255, 255, 0) 100%)'
                }}>
                    <div className="container text-center">
                        <h1 className="hero-main-title" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem', color: '#0f172a' }}>Terms and Conditions</h1>
                        <p className="hero-sub-headline" style={{ color: '#64748b', fontWeight: 500, fontSize: '1.25rem' }}>Last Updated: January 2026</p>
                    </div>
                </section>

                <section className="sleek-section" style={{ paddingTop: '0', paddingBottom: '8rem' }}>
                    <div className="container" style={{ maxWidth: '1200px' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '280px 1fr',
                            gap: '4rem',
                            alignItems: 'flex-start'
                        }} className="legal-layout-grid">

                            {/* Sticky Sidebar ToC */}
                            <aside style={{ position: 'sticky', top: '120px' }} className="legal-toc-aside">
                                <div style={{
                                    padding: '2.5rem',
                                    background: '#fff',
                                    borderRadius: '24px',
                                    border: '1px solid #f1f5f9',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                                }}>
                                    <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '0.02rem', textTransform: 'uppercase' }}>Navigation</h4>
                                    <nav>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                            {sections.map((section) => (
                                                <li key={section.id}>
                                                    <button
                                                        onClick={() => scrollToSection(section.id)}
                                                        style={{
                                                            background: 'none',
                                                            border: 'none',
                                                            padding: '0.6rem 0.5rem',
                                                            fontSize: '0.9rem',
                                                            color: '#64748b',
                                                            fontWeight: 600,
                                                            textAlign: 'left',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.2s ease',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '0.5rem',
                                                            width: '100%',
                                                            borderRadius: '8px'
                                                        }}
                                                        onMouseOver={(e) => {
                                                            e.currentTarget.style.color = '#2196F3';
                                                            e.currentTarget.style.background = 'rgba(33, 150, 243, 0.05)';
                                                        }}
                                                        onMouseOut={(e) => {
                                                            e.currentTarget.style.color = '#64748b';
                                                            e.currentTarget.style.background = 'none';
                                                        }}
                                                    >
                                                        <ChevronRight size={14} />
                                                        {section.title.split('. ')[1]}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </aside>

                            {/* Main Content */}
                            <div className="legal-content-card" style={{
                                background: '#fff',
                                padding: '4.5rem',
                                borderRadius: '32px',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.03)',
                                border: '1px solid #f1f5f9'
                            }}>

                                <div id="introduction" className="legal-section">
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>1. Introduction</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                        Welcome to <strong style={{ color: '#0f172a' }}>Alpha Medi Assist</strong>. These Terms and Conditions govern your access to and use of our website, services, and solutions related to medical billing, coding, revenue cycle management, and virtual healthcare support.
                                    </p>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                        By accessing our website or using our services, you agree to be legally bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our website or services.
                                    </p>
                                </div>

                                <div id="about" className="legal-section" style={{ marginTop: '5rem', paddingTop: '5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>2. About Alpha Medi Assist</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                        Alpha Medi Assist is a healthcare support services company providing medical billing, medical coding, revenue cycle management (RCM), and virtual assistant services to healthcare providers across the United States.
                                    </p>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                        Our services are designed to support operational efficiency, regulatory compliance, and revenue optimization for medical practices, clinics, and healthcare organizations.
                                    </p>
                                </div>

                                <div id="eligibility" className="legal-section" style={{ marginTop: '5rem', paddingTop: '5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>3. Eligibility and Use of Website</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>By using this website, you confirm that:</p>
                                    <ul style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: '0', listStyleType: 'none' }}>
                                        {[
                                            'You are at least 18 years of age',
                                            'You are authorized to act on behalf of a healthcare practice or business if engaging our services',
                                            'You will use the website for lawful purposes only'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                                <div style={{ marginTop: '0.65rem', width: '8px', height: '8px', borderRadius: '50%', background: '#2196F3', flexShrink: 0 }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8' }}>
                                        You agree not to misuse the website, attempt unauthorized access, or interfere with the website’s functionality, security, or data.
                                    </p>
                                </div>

                                <div id="scope" className="legal-section" style={{ marginTop: '5rem', paddingTop: '5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>4. Scope of Services</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>Alpha Medi Assist provides services including but not limited to:</p>
                                    <ul style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: '0', listStyleType: 'none' }}>
                                        {[
                                            'Medical billing and claims management',
                                            'Medical coding services',
                                            'Revenue cycle management',
                                            'Insurance verification and eligibility checks',
                                            'Prior authorization support',
                                            'Virtual healthcare administrative support'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                                <div style={{ marginTop: '0.65rem', width: '8px', height: '8px', borderRadius: '2px', background: '#2196F3', flexShrink: 0 }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8' }}>
                                        Specific service details, pricing, and timelines are defined in separate service agreements or contracts executed with clients.
                                    </p>
                                </div>

                                <div id="advice" className="legal-section" style={{ marginTop: '5rem', paddingTop: '5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>5. No Medical or Legal Advice</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                        Alpha Medi Assist does not provide medical diagnosis, treatment, or legal advice. Our services are administrative and operational in nature and are intended to support healthcare providers.
                                    </p>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>Healthcare providers remain fully responsible for:</p>
                                    <ul style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '0', paddingLeft: '0', listStyleType: 'none' }}>
                                        {[
                                            'Clinical decision-making',
                                            'Patient care',
                                            'Compliance with applicable medical, legal, and regulatory requirements'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                                <div style={{ marginTop: '0.65rem', width: '8px', height: '8px', borderRadius: '50%', background: '#2196F3', flexShrink: 0 }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div id="hipaa" className="legal-section" style={{ marginTop: '5rem', padding: '3.5rem', background: '#f8fafc', borderRadius: '32px', border: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>6. HIPAA Compliance and Data Protection</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                        We are committed to maintaining strict HIPAA compliance and safeguarding protected health information (PHI).
                                    </p>
                                    <ul style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: '0', listStyleType: 'none' }}>
                                        {[
                                            'All client data is handled in accordance with HIPAA and applicable healthcare regulations',
                                            'Access to sensitive information is restricted to authorized personnel only',
                                            'Clients are responsible for ensuring proper authorization before sharing patient data with us'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ marginBottom: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                                <div style={{ marginTop: '0.65rem', width: '8px', height: '8px', borderRadius: '50%', background: '#2196F3', flexShrink: 0 }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: 0 }}>
                                        Please review our Privacy Policy for detailed information on data handling and security practices.
                                    </p>
                                </div>

                                <div id="ip" className="legal-section" style={{ marginTop: '5rem', paddingTop: '5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>7. Intellectual Property Rights</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                        All content on this website, including text, graphics, logos, icons, and software, is the property of Alpha Medi Assist or its licensors and is protected by applicable intellectual property laws.
                                    </p>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8' }}>
                                        You may not copy, reproduce, distribute, or modify any content without prior written consent from Alpha Medi Assist.
                                    </p>
                                </div>

                                <div id="client-resp" className="legal-section" style={{ marginTop: '5rem', paddingTop: '5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>8. Client Responsibilities</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>Clients agree to:</p>
                                    <ul style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: '0', listStyleType: 'none' }}>
                                        {[
                                            'Provide accurate and complete information required for service delivery',
                                            'Maintain proper documentation and records',
                                            'Comply with payer, federal, and state regulations',
                                            'Review reports and communications provided by Alpha Medi Assist in a timely manner'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ marginBottom: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                                <div style={{ marginTop: '0.65rem', width: '8px', height: '8px', borderRadius: '50%', background: '#2196F3', flexShrink: 0 }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8' }}>
                                        Failure to provide accurate information may impact service outcomes.
                                    </p>
                                </div>

                                <div id="payments" className="legal-section" style={{ marginTop: '5rem', paddingTop: '5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>9. Payments and Fees</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                        Service fees, billing cycles, and payment terms are outlined in individual service agreements.
                                    </p>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8' }}>
                                        Late or non-payment may result in service suspension or termination. Alpha Medi Assist reserves the right to revise pricing with prior notice, as outlined in contractual agreements.
                                    </p>
                                </div>

                                <div id="liability" className="legal-section" style={{ marginTop: '5rem', paddingTop: '5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>10. Limitation of Liability</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>To the fullest extent permitted by law:</p>
                                    <ul style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '0', paddingLeft: '0', listStyleType: 'none' }}>
                                        {[
                                            'Alpha Medi Assist shall not be liable for indirect, incidental, or consequential damages',
                                            'We do not guarantee specific reimbursement amounts or payer decisions',
                                            'Liability is limited to the fees paid for services during the applicable service period'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ marginBottom: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                                <div style={{ marginTop: '0.65rem', width: '8px', height: '8px', borderRadius: '50%', background: '#2196F3', flexShrink: 0 }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div id="warranties" className="legal-section" style={{ marginTop: '5rem', paddingTop: '5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>11. Disclaimer of Warranties</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                        All services and website content are provided on an “as is” and “as available” basis.
                                    </p>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8' }}>
                                        We make no warranties, express or implied, regarding uninterrupted service, accuracy of information, or suitability for a specific purpose.
                                    </p>
                                </div>

                                <div id="third-party" className="legal-section" style={{ marginTop: '5rem', paddingTop: '5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>12. Third-Party Links</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8' }}>
                                        Our website may contain links to third-party websites for informational purposes. Alpha Medi Assist does not control or endorse these websites and is not responsible for their content, policies, or practices.
                                    </p>
                                </div>

                                <div id="termination" className="legal-section" style={{ marginTop: '5rem', paddingTop: '5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>13. Termination of Services</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>Alpha Medi Assist reserves the right to suspend or terminate access to services or the website if:</p>
                                    <ul style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: '0', listStyleType: 'none' }}>
                                        {[
                                            'These Terms are violated',
                                            'There is misuse of services',
                                            'Legal or compliance risks arise'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ marginBottom: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                                <div style={{ marginTop: '0.65rem', width: '8px', height: '8px', borderRadius: '50%', background: '#2196F3', flexShrink: 0 }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8' }}>
                                        Termination terms are further governed by individual service agreements.
                                    </p>
                                </div>

                                <div id="governing-law" className="legal-section" style={{ marginTop: '5rem', paddingTop: '5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>14. Governing Law</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8' }}>
                                        These Terms and Conditions shall be governed by and interpreted in accordance with the laws of the United States, without regard to conflict of law principles.
                                    </p>
                                </div>

                                <div id="changes" className="legal-section" style={{ marginTop: '5rem', paddingTop: '5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>15. Changes to Terms and Conditions</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                        Alpha Medi Assist reserves the right to update or modify these Terms and Conditions at any time. Changes will be posted on this page with an updated revision date.
                                    </p>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8' }}>
                                        Continued use of our website or services constitutes acceptance of the updated terms.
                                    </p>
                                </div>

                                <div id="contact" className="legal-section" style={{
                                    marginTop: '8rem',
                                    padding: '5rem 4rem',
                                    background: '#0f172a',
                                    borderRadius: '48px',
                                    color: '#fff',
                                    boxShadow: '0 25px 60px -12px rgba(15, 23, 42, 0.4)'
                                }}>
                                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>16. Contact Information</h2>
                                    <p style={{ color: '#94a3b8', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '3.5rem', fontWeight: 500 }}>
                                        If you have questions regarding these Terms and Conditions, please contact us:
                                    </p>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                            <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'rgba(33, 150, 243, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(33, 150, 243, 0.2)' }}>
                                                <Mail size={28} style={{ color: '#2196F3' }} />
                                            </div>
                                            <div>
                                                <p style={{ margin: 0, fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.25rem' }}>Email Us</p>
                                                <a href="mailto:info@alphamediassist.com" style={{ color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '1.25rem' }}>info@alphamediassist.com</a>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                            <div style={{ width: '64px', height: '64px', borderRadius: '18px', background: 'rgba(33, 150, 243, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(33, 150, 243, 0.2)' }}>
                                                <Globe size={28} style={{ color: '#2196F3' }} />
                                            </div>
                                            <div>
                                                <p style={{ margin: 0, fontSize: '0.8rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.25rem' }}>Official Website</p>
                                                <a href="https://alphamediassist.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '1.25rem' }}>alphamediassist.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                                        <p style={{ margin: 0, color: '#94a3b8', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '0.02em' }}>Alpha Medi Assist</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 1023px) {
                    .legal-toc-aside { display: none !important; }
                    .legal-layout-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
                    .legal-content-card { padding: 3rem 1.5rem !important; border-radius: 20px !important; border: none !important; box-shadow: none !important; }
                    .hero-main-title { font-size: 2.75rem !important; }
                    .legal-section { margin-top: 4rem !important; padding-top: 4rem !important; }
                    .legal-section h2 { font-size: 1.85rem !important; }
                    #contact { padding: 3rem 1.5rem !important; border-radius: 24px !important; }
                }
            `}} />
        </>
    )
}

export default TermsAndConditions
