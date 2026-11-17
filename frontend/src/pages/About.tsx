import React from 'react'
import { Link } from 'react-router-dom'
import {
  Users,
  Globe,
  CheckCircle,
  ShieldCheck,
  Zap,
  FileText,
  TrendingUp,
  Target,
  Shield,
  Clock,
  Layout,
  Briefcase,
  BarChart,
  Heart,
  Award,
  Star
} from 'lucide-react'
import PageTitle from '../components/PageTitle'
import aboutHeroImg from '../Images/AdobeStock_566596170.jpeg'

const About: React.FC = () => {
  return (
    <>
      <PageTitle
        title="About Alpha Medi Assist | Medical Billing & RCM Company"
        description="Alpha Medi Assist is a U.S. medical billing and revenue cycle management company with offices in Virginia and Florida, serving practices in 90+ specialties."
      />

      <div className="about-sleek-container">
        {/* Premium Hero Section */}
        <section className="sleek-hero">
          <div className="container">
            <div className="hero-grid-sleek">
              <div className="hero-text">
                <h1 className="hero-main-title">About Alpha Medi Assist</h1>
                <p className="hero-sub-headline">Empowering Healthcare Practices With Smarter Revenue Management</p>
                <p className="lead">Alpha Medi Assist is a healthcare support and revenue management company dedicated to helping medical practices operate more efficiently, profitably, and compliantly.</p>
              </div>
              <div className="hero-image">
                <div className="sleek-image-wrapper">
                  <img loading="lazy" decoding="async" src={aboutHeroImg} alt="Professional Medical Office" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Narrative */}
        <section className="sleek-section sleek-intro">
          <div className="container">
            <div className="sleek-content-wrapper">
              <p>With more than eight years of hands-on experience in medical billing, coding, revenue cycle management, and virtual healthcare support, we partner with providers to remove administrative complexity so they can focus on patient care.</p>
              <h2 className="sleek-quote">We believe healthcare professionals should spend their time treating patients, not chasing claims, fixing denials, or managing paperwork. That belief drives everything we do.</h2>
              <p>From solo practitioners to multi provider clinics across the United States, Alpha Medi Assist delivers reliable, scalable, and HIPAA compliant solutions designed to improve cash flow, reduce operational stress, and support long term growth.</p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="sleek-section bg-sleek-light">
          <div className="container">
            <div className="sleek-section-header text-center">
              <h2>Who We Are</h2>
              <p className="description">Alpha Medi Assist is built by healthcare revenue specialists, certified medical coders, billing experts, and virtual healthcare professionals who understand the real challenges medical practices face every day.</p>
            </div>
            <div className="sleek-grid-2">
              <div className="sleek-card">
                <div className="sleek-icon"><Users size={32} /></div>
                <h4>Our Team</h4>
                <p>Our team works as an extension of your practice. We align with your workflows, payer contracts, and specialty specific requirements to deliver customized solutions that fit your operations rather than forcing you into a one size fits all system.</p>
              </div>
              <div className="sleek-card">
                <div className="sleek-icon"><Globe size={32} /></div>
                <h4>Who We Support</h4>
                <p>We support a wide range of healthcare providers including primary care practices, nurse practitioners, specialty clinics, surgical centers, and telehealth providers nationwide.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="sleek-section">
          <div className="container">
            <div className="sleek-grid-2 align-center">
              <div className="sleek-text-area">
                <h2>Our Mission</h2>
                <h3 className="text-secondary">Supporting Better Healthcare Through Operational Excellence</h3>
                <p>Our mission is to strengthen healthcare practices by delivering accurate medical billing, compliant coding, efficient claims management, and dependable virtual support services.</p>
              </div>
              <div className="sleek-list-area">
                <h4>We aim to:</h4>
                <ul className="sleek-check-list">
                  <li><CheckCircle size={24} className="text-primary" /> <span>Improve revenue cycle performance</span></li>
                  <li><CheckCircle size={24} className="text-primary" /> <span>Reduce claim denials and payment delays</span></li>
                  <li><CheckCircle size={24} className="text-primary" /> <span>Ensure full compliance with HIPAA and payer regulations</span></li>
                  <li><CheckCircle size={24} className="text-primary" /> <span>Minimize administrative burden for healthcare teams</span></li>
                  <li><CheckCircle size={24} className="text-primary" /> <span>Create sustainable systems that support long term practice growth</span></li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-5">
              <p className="italic-text">Every service we provide is guided by one goal: helping healthcare professionals succeed without sacrificing patient care quality.</p>
            </div>
          </div>
        </section>

        {/* Experience and Growth */}
        <section className="sleek-section bg-sleek-light">
          <div className="container">
            <div className="sleek-section-header text-center">
              <h2 className="hero-main-title" style={{ textAlign: 'center', margin: '0 auto 1.5rem' }}>Our Experience and Growth</h2>
              <h3 className="hero-sub-headline" style={{ textAlign: 'center' }}>Proven Expertise You Can Trust</h3>
              <p className="description mx-auto" style={{ textAlign: 'center' }}>With more than eight years of industry experience, Alpha Medi Assist has grown into a trusted healthcare operations partner serving providers across multiple specialties.</p>
              <p className="mt-4" style={{ fontWeight: 700, fontSize: '1.25rem', color: '#0f172a', textAlign: 'center', marginBottom: '1rem' }}>Our impact includes:</p>
            </div>
            <div className="sleek-impact-stats" style={{ marginTop: '2rem' }}>
              <div className="stat-item">
                <div className="stat-icon"><Users size={32} /></div>
                <div className="stat-val">100+</div>
                <p>Supporting over 100 healthcare providers nationwide</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon"><Briefcase size={32} /></div>
                <div className="stat-val">600+</div>
                <p>Managing workflows with 600 plus trained virtual assistants</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon"><Star size={32} /></div>
                <div className="stat-val">4.8★</div>
                <p>Maintaining a consistent 4.8 star client satisfaction rating</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon"><Award size={32} /></div>
                <div className="stat-val">20+</div>
                <p>Earning recognition through more than 20 healthcare service awards</p>
              </div>
            </div>
            <p className="text-center" style={{ marginTop: '5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 500, color: '#64748b', fontSize: '1.2rem' }}>Our growth reflects our commitment to results, transparency, and long term partnerships.</p>
          </div>
        </section>

        {/* Our Core Values */}
        <section className="sleek-section">
          <div className="container">
            <div className="sleek-section-header text-center">
              <h2 className="hero-main-title" style={{ textAlign: 'center', margin: '0 auto 1.5rem' }}>Our Core Values</h2>
              <h3 className="hero-sub-headline" style={{ textAlign: 'center' }}>The Foundation of Everything We Do</h3>
              <p className="description mx-auto" style={{ textAlign: 'center' }}>At Alpha Medi Assist, our values shape our culture, services, and client relationships. These principles guide every interaction and decision.</p>
            </div>
            <div className="sleek-grid-3">
              <div className="value-sleek-item">
                <div className="value-icon"><ShieldCheck size={48} /></div>
                <h4>Integrity</h4>
                <p>We believe trust is earned through honesty and accountability. We operate with complete transparency in billing processes, reporting, and communication. Our clients always know where their revenue stands and how their operations are being managed.</p>
              </div>
              <div className="value-sleek-item">
                <div className="value-icon"><Zap size={48} /></div>
                <h4>Excellence</h4>
                <p>We pursue excellence through continuous improvement, training, and innovation. Our team stays current with healthcare regulations, payer updates, and coding changes to deliver accurate and reliable results. We do not settle for average outcomes.</p>
              </div>
              <div className="value-sleek-item">
                <div className="value-icon"><Globe size={48} /></div>
                <h4>Compliance</h4>
                <p>Compliance is non-negotiable. We maintain strict HIPAA compliance and follow all federal, state, and payer regulations. Data security is embedded into every workflow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Alpha Medi Assist Different */}
        <section className="sleek-section bg-sleek-blue-light">
          <div className="container">
            <div className="sleek-content-wrapper text-center">
              <h2 className="hero-main-title" style={{ textAlign: 'center', margin: '0 auto 1.5rem' }}>What Makes Alpha Medi Assist Different</h2>
              <h3 className="hero-sub-headline" style={{ textAlign: 'center' }}>A Partner, Not Just a Service Provider</h3>
              <p style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', lineHeight: '1.7', color: '#475569' }}>Many companies offer medical billing or virtual assistance. Alpha Medi Assist focuses on partnership. We take time to understand your practice goals, specialty requirements, patient demographics, and financial challenges. Our solutions are customized, not templated. We measure success by your outcomes, not just task completion.</p>
            </div>
          </div>
        </section>

        {/* Expertise List */}
        <section className="sleek-section">
          <div className="container">
            <div className="sleek-section-header text-center">
              <h2 className="hero-main-title" style={{ textAlign: 'center', margin: '0 auto 1.5rem' }}>Our Expertise</h2>
              <h3 className="hero-sub-headline" style={{ textAlign: 'center' }}>Comprehensive Healthcare Support Services</h3>
              <p className="description mx-auto" style={{ textAlign: 'center', fontSize: '1.125rem', fontWeight: 400, color: '#64748b' }}>Alpha Medi Assist provides end-to-end healthcare operational support, including:</p>
            </div>
            <div className="expertise-sleek-grid">
              <div className="exp-item"><FileText size={20} className="text-primary" /> Medical billing and coding services</div>
              <div className="exp-item"><TrendingUp size={20} className="text-primary" /> Revenue cycle management</div>
              <div className="exp-item"><Target size={20} className="text-primary" /> Claims submission and denial management</div>
              <div className="exp-item"><Shield size={20} className="text-primary" /> Insurance verification and eligibility checks</div>
              <div className="exp-item"><Briefcase size={20} className="text-primary" /> Patient billing and statement management</div>
              <div className="exp-item"><Clock size={20} className="text-primary" /> Prior authorizations and referrals</div>
              <div className="exp-item"><Layout size={20} className="text-primary" /> EHR documentation and data entry</div>
              <div className="exp-item"><Users size={20} className="text-primary" /> Scheduling and front desk virtual support</div>
              <div className="exp-item"><BarChart size={20} className="text-primary" /> Reporting and financial analytics</div>
            </div>
            <p className="text-center" style={{ marginTop: '4rem', fontFamily: 'Outfit, sans-serif', fontWeight: 500, color: '#64748b', fontSize: '1.2rem' }}>Our multidisciplinary expertise allows us to support practices at every stage of growth.</p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="sleek-section bg-sleek-light">
          <div className="container">
            <div className="sleek-section-header text-center">
              <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', textAlign: 'center', margin: '0 auto 1.5rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Why Healthcare Providers Choose Alpha Medi Assist</h2>
              <h3 className="hero-sub-headline" style={{ textAlign: 'center' }}>Trusted Nationwide for Consistent Results</h3>
              <p className="description mx-auto" style={{ textAlign: 'center', fontSize: '1.125rem', fontWeight: 400, color: '#64748b' }}>Healthcare providers across the United States choose Alpha Medi Assist because we deliver measurable improvements and dependable support.</p>
            </div>
            <div className="sleek-grid-2">
              <div className="choose-sleek-card">
                <h4>Experienced Healthcare Professionals</h4>
                <p>Our team includes certified medical coders, billing specialists, revenue cycle experts, and trained virtual assistants with real world healthcare experience. We understand payer rules, specialty coding nuances, and compliance requirements.</p>
              </div>
              <div className="choose-sleek-card">
                <h4>Advanced Technology and Tools</h4>
                <p>We utilize modern billing software, secure EHR integrations, and analytics tools to track performance, identify issues, and optimize revenue. Technology enhances our accuracy and efficiency without replacing human expertise.</p>
              </div>
              <div className="choose-sleek-card">
                <h4>Proven Financial Results</h4>
                <p>Our clients consistently see reduced claim denials, faster reimbursements, improved collections, and clearer financial visibility. We focus on sustainable revenue growth, not short term fixes.</p>
              </div>
              <div className="choose-sleek-card">
                <h4>Dedicated Client Support</h4>
                <p>Every practice receives a dedicated account manager and access to responsive support. We believe communication should be proactive, not reactive.</p>
              </div>
              <div className="choose-sleek-card">
                <h4>Compliance Focused Operations</h4>
                <p>HIPAA compliance and data security are built into every process. Our systems, training, and policies ensure patient information remains protected at all times.</p>
              </div>
              <div className="choose-sleek-card">
                <h4>Transparent Reporting</h4>
                <p>We provide clear weekly and monthly reports covering claims status, payments, denials, and outstanding balances. You always know how your practice is performing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="sleek-section">
          <div className="container">
            <div className="sleek-section-header text-center">
              <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', textAlign: 'center', margin: '0 auto 1.5rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Our Approach to Client Success</h2>
              <h3 className="hero-sub-headline" style={{ textAlign: 'center' }}>Customized, Data Driven, and Scalable</h3>
              <p className="description mx-auto" style={{ textAlign: 'center', fontSize: '1.125rem', fontWeight: 400, color: '#64748b' }}>We follow a structured yet flexible approach to ensure successful partnerships.</p>
            </div>
            <div className="sleek-approach-row">
              <div className="approach-item">
                <div className="step-circle">01</div>
                <h4>Assessment</h4>
                <p>We analyze your existing workflows, billing volume, payer mix, and operational challenges.</p>
              </div>
              <div className="approach-item">
                <div className="step-circle">02</div>
                <h4>Customization</h4>
                <p>We design solutions aligned with your specialty, practice size, and financial goals.</p>
              </div>
              <div className="approach-item">
                <div className="step-circle">03</div>
                <h4>Integration</h4>
                <p>Our team integrates seamlessly with your EHR, billing software, and internal processes.</p>
              </div>
              <div className="approach-item">
                <div className="step-circle">04</div>
                <h4>Execution</h4>
                <p>We manage day to day operations with accuracy, consistency, and compliance.</p>
              </div>
              <div className="approach-item">
                <div className="step-circle">05</div>
                <h4>Optimization</h4>
                <p>Ongoing monitoring, reporting, and refinement ensure continuous improvement.</p>
              </div>
            </div>
            <p className="text-center" style={{ marginTop: '3rem', fontFamily: 'Outfit, sans-serif', fontWeight: 500, color: '#64748b', fontSize: '1.2rem' }}>This approach allows us to scale with your practice as your needs evolve.</p>
          </div>
        </section>

        {/* HIPAA & Partnerships */}
        <section className="sleek-section bg-sleek-light">
          <div className="container">
            <div className="sleek-grid-2">
              <div className="sleek-info-box">
                <ShieldCheck size={48} className="text-primary" />
                <h3>Commitment to HIPAA and Data Security</h3>
                <h4 className="text-muted mb-3">Protecting Patient Trust</h4>
                <p>Patient data protection is central to our operations. Alpha Medi Assist maintains strict HIPAA compliant systems, secure access controls, encrypted communications, and regular staff training.</p>
                <p>We take data privacy seriously because patient trust and regulatory compliance are critical to every healthcare practice.</p>
              </div>
              <div className="sleek-info-box">
                <Heart size={48} className="text-primary" />
                <h3>Long Term Partnerships</h3>
                <h4 className="text-muted mb-3">Growing Together With Our Clients</h4>
                <p>We believe the best results come from long term relationships built on trust, communication, and shared goals.</p>
                <p>Many of our clients have partnered with us for years because we adapt as their practices grow. Whether expanding services, adding providers, or transitioning to telehealth, we evolve with you.</p>
                <p className="mt-3 font-weight-bold text-primary">Your success is our success.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="sleek-section">
          <div className="container">
            <div className="sleek-section-header text-center">
              <h2 className="hero-main-title" style={{ textAlign: 'center', margin: '0 auto 1.5rem' }}>Who We Serve</h2>
              <p className="description mx-auto" style={{ textAlign: 'center', fontSize: '1.125rem', fontWeight: 400, color: '#64748b' }}>Alpha Medi Assist proudly supports:</p>
            </div>
            <div className="sleek-serve-grid mt-4">
              <div className="s-item"><CheckCircle size={20} className="text-primary" style={{ marginRight: '0.75rem', flexShrink: 0 }} /> Independent medical practices</div>
              <div className="s-item"><CheckCircle size={20} className="text-primary" style={{ marginRight: '0.75rem', flexShrink: 0 }} /> Nurse practitioners and advanced practice providers</div>
              <div className="s-item"><CheckCircle size={20} className="text-primary" style={{ marginRight: '0.75rem', flexShrink: 0 }} /> Specialty clinics and outpatient centers</div>
              <div className="s-item"><CheckCircle size={20} className="text-primary" style={{ marginRight: '0.75rem', flexShrink: 0 }} /> Multi provider healthcare organizations</div>
              <div className="s-item"><CheckCircle size={20} className="text-primary" style={{ marginRight: '0.75rem', flexShrink: 0 }} /> Telehealth and remote care providers</div>
            </div>
            <p className="text-center" style={{ marginTop: '4rem', fontFamily: 'Outfit, sans-serif', fontWeight: 500, color: '#64748b', fontSize: '1.2rem' }}>Our services are scalable and designed to fit practices of all sizes.</p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="sleek-cta-section text-center">
          <div className="container">
            <div className="sleek-cta-card">
              <h2>Ready to Partner With Alpha Medi Assist?</h2>
              <h3>Let Us Simplify Your Practice Operations</h3>
              <div className="mt-5 mb-5">
                <p className="lead" style={{ color: '#475569', fontSize: '1.25rem' }}>If administrative tasks, billing challenges, or revenue concerns are holding your practice back, Alpha Medi Assist is here to help.</p>
                <p style={{ color: '#64748b' }}>We offer a free consultation to understand your needs and demonstrate how our healthcare support solutions can improve efficiency, compliance, and financial performance.</p>
              </div>
              <div className="mt-5">
                <h4 className="h3 mb-4" style={{ fontWeight: 700, color: '#0f172a' }}>Contact Alpha Medi Assist Today</h4>
                <p className="mb-5 lead" style={{ color: '#475569' }}>Take the first step toward a more organized, profitable, and stress free practice.</p>
                <div className="cta-btns mt-4">
                  <Link to="/contact" className="btn btn-large" style={{ color: 'white' }}>Get Free Consultation</Link>
                  <Link to="/contact" className="btn btn-outline-primary">Contact Our Team</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
