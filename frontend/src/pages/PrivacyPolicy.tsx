import React from 'react'
import PageTitle from '../components/PageTitle'
import { Mail, Globe, ChevronRight } from 'lucide-react'

const PrivacyPolicy: React.FC = () => {
    const sections = [
        { id: 'introduction', title: '1. Introduction / Overview' },
        { id: 'collection', title: '2. Information We Collect' },
        { id: 'usage', title: '3. How We Use Your Information' },
        { id: 'sharing', title: '4. Data Sharing and Disclosure' },
        { id: 'security', title: '5. Security Measures' },
        { id: 'cookies', title: '6. Cookies and Website Analytics' },
        { id: 'rights', title: '7. Your Privacy Rights' },
        { id: 'hipaa', title: '8. HIPAA Compliance' },
        { id: 'children', title: '9. Children’s Privacy' },
        { id: 'changes', title: '10. Changes to Privacy Policy' },
        { id: 'contact', title: '11. Contact Information' },
        { id: 'consent', title: '12. Consent' }
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
                title="Privacy Policy | Alpha Medi Assist"
                description="Protecting your personal and health data is our priority. Learn how Alpha Medi Assist handles medical billing information, HIPAA compliance, and website data."
            />

            <div className="about-sleek-container" style={{ background: '#fcfcfd' }}>
                {/* Header Section */}
                <section className="sleek-hero" style={{
                    padding: '8rem 0 5rem',
                    background: 'radial-gradient(circle at 50% 50%, rgba(33, 150, 243, 0.05) 0%, rgba(255, 255, 255, 0) 100%)'
                }}>
                    <div className="container text-center">
                        <h1 className="hero-main-title" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem', color: '#0f172a' }}>Privacy Policy</h1>
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
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>1. Introduction / Overview</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8' }}>
                                        At Alpha Medi Assist, we prioritize your privacy. This Privacy Policy explains how we collect, use, and protect the personal and health-related information of our clients, patients, and website visitors. All practices adhere to HIPAA regulations and industry best practices.
                                    </p>
                                </div>

                                <div id="collection" className="legal-section" style={{ marginTop: '5rem', paddingTop: '5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>2. Information We Collect</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>Detail the types of information collected. Sub-sections can include:</p>

                                    <div style={{ marginBottom: '3rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>a. Personal Information</h3>
                                        <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8' }}>
                                            Name, email, phone number, mailing address, and other identifiers when registering or contacting us.
                                        </p>
                                    </div>

                                    <div style={{ marginBottom: '3rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>b. Health Information</h3>
                                        <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8' }}>
                                            Data related to medical billing and claims strictly for providing our medical billing services.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>c. Website and Technical Information</h3>
                                        <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8' }}>
                                            Cookies, IP addresses, device information, and browsing behavior for analytics and website optimization.
                                        </p>
                                    </div>
                                </div>

                                <div id="usage" className="legal-section" style={{ marginTop: '5rem', paddingTop: '5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>3. How We Use Your Information</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>Explain purposes clearly:</p>

                                    <ul style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: '0', listStyleType: 'none' }}>
                                        {[
                                            'Deliver nurse practitioner, urology, or other medical billing services efficiently.',
                                            'Communicate updates, service inquiries, or support requests.',
                                            'Improve website functionality and service quality through analytics.',
                                            'Ensure compliance with HIPAA and other federal or state regulations.'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ marginBottom: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                                <div style={{ marginTop: '0.65rem', width: '8px', height: '8px', borderRadius: '50%', background: '#2196F3', flexShrink: 0 }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div id="sharing" className="legal-section" style={{ marginTop: '5rem', paddingTop: '5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>4. Data Sharing and Disclosure</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>Clarify situations where data may be shared:</p>

                                    <ul style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem', paddingLeft: '0', listStyleType: 'none' }}>
                                        {[
                                            'Legal or regulatory obligations.',
                                            'Protecting rights, safety, or property of the company or clients.',
                                            'Trusted third-party service providers assisting with operations (billing software providers, analytics platforms) under strict confidentiality agreements.'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ marginBottom: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                                <div style={{ marginTop: '0.65rem', width: '8px', height: '8px', borderRadius: '2px', background: '#2196F3', flexShrink: 0 }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div id="security" className="legal-section" style={{ marginTop: '5rem', padding: '3.5rem', background: '#f8fafc', borderRadius: '32px', border: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>5. Security Measures</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>Explain technical and organizational safeguards:</p>

                                    <ul style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '0', paddingLeft: '0', listStyleType: 'none' }}>
                                        {[
                                            'Data encryption for storage and transmission.',
                                            'Access controls limiting sensitive data to authorized personnel.',
                                            'Regular audits and monitoring to ensure compliance with HIPAA and industry standards.'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ marginBottom: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                                <div style={{ marginTop: '0.65rem', width: '8px', height: '8px', borderRadius: '50%', background: '#2196F3', flexShrink: 0 }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div id="cookies" className="legal-section" style={{ marginTop: '5rem', paddingTop: '5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>6. Cookies and Website Analytics</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                        Explain the use of cookies and third-party analytics for performance optimization.
                                    </p>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8' }}>
                                        Provide an option to disable cookies with a note about limitations.
                                    </p>
                                </div>

                                <div id="rights" className="legal-section" style={{ marginTop: '5rem', paddingTop: '5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>7. Your Privacy Rights</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>Educate users about their rights:</p>

                                    <ul style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2.5rem', paddingLeft: '0', listStyleType: 'none' }}>
                                        {[
                                            'Access, correct, or update personal information.',
                                            'Request deletion when legally permissible.',
                                            'Opt-out of promotional emails.'
                                        ].map((item, idx) => (
                                            <li key={idx} style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                                <div style={{ marginTop: '0.65rem', width: '8px', height: '8px', borderRadius: '50%', background: '#2196F3', flexShrink: 0 }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', fontWeight: 600 }}>
                                        Contact Method: Include email and phone for exercising rights.
                                    </p>
                                </div>

                                <div id="hipaa" className="legal-section" style={{ marginTop: '5rem', paddingTop: '5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>8. HIPAA Compliance</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                        Confirm your adherence to HIPAA guidelines for protecting PHI (Protected Health Information).
                                    </p>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8' }}>
                                        Mention training of staff, secure systems, and confidentiality in billing operations.
                                    </p>
                                </div>

                                <div id="children" className="legal-section" style={{ marginTop: '5rem', paddingTop: '5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>9. Children’s Privacy</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                        State that your website and services are not directed to children under 13.
                                    </p>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8' }}>
                                        You do not knowingly collect data from minors.
                                    </p>
                                </div>

                                <div id="changes" className="legal-section" style={{ marginTop: '5rem', paddingTop: '5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>10. Changes to Privacy Policy</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                        Notify users that updates may occur periodically.
                                    </p>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8' }}>
                                        Include “effective date” and encourage checking the page for updates.
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
                                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>11. Contact Information</h2>
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

                                <div id="consent" className="legal-section" style={{ marginTop: '5rem', paddingTop: '5rem', borderTop: '1px solid #f1f5f9' }}>
                                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>12. Consent</h2>
                                    <p style={{ color: '#1e293b', fontSize: '1.125rem', lineHeight: '1.8' }}>
                                        Clearly state that by using the website or services, users consent to the practices described in the Privacy Policy.
                                    </p>
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

export default PrivacyPolicy
