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
  Heart
} from 'lucide-react'
import PageTitle from '../components/PageTitle'
import aboutHeroImg from '../Images/about_hero.png'

const About: React.FC = () => {
  return (
    <>
      <PageTitle
        title="About AlphaMedi Assist | Trusted Medical Billing Experts"
        description="Learn about AlphaMedi Assist, a trusted medical billing and revenue cycle management company helping healthcare practices improve efficiency and compliance."
      />

      <div className="about-sleek-container">
        {/* Sleek Hero Section */}
        <section className="sleek-hero">
          <div className="container">
            <div className="hero-grid-sleek">
              <div className="hero-text">
                <span className="sleek-badge">About Alpha Medi Assist</span>
                <h1>Empowering Healthcare Practices With Smarter Revenue Management</h1>
                <p className="lead">Alpha Medi Assist is a healthcare support and revenue management company dedicated to helping medical practices operate more efficiently, profitably, and compliantly.</p>
              </div>
              <div className="hero-image">
                <div className="sleek-image-wrapper">
                  <img src={aboutHeroImg} alt="Professional Medical Office" />
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
              <p className="sleek-quote">We believe healthcare professionals should spend their time treating patients, not chasing claims, fixing denials, or managing paperwork. That belief drives everything we do.</p>
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
            <div className="sleek-grid-2 mt-5">
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
                  <li><CheckCircle size={20} className="text-primary" /> Improve revenue cycle performance</li>
                  <li><CheckCircle size={20} className="text-primary" /> Reduce claim denials and payment delays</li>
                  <li><CheckCircle size={20} className="text-primary" /> Ensure full compliance with HIPAA and payer regulations</li>
                  <li><CheckCircle size={20} className="text-primary" /> Minimize administrative burden for healthcare teams</li>
                  <li><CheckCircle size={20} className="text-primary" /> Create sustainable systems that support long term practice growth</li>
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
              <h2>Our Experience and Growth</h2>
              <h3>Proven Expertise You Can Trust</h3>
              <p className="description">With more than eight years of industry experience, Alpha Medi Assist has grown into a trusted healthcare operations partner serving providers across multiple specialties.</p>
            </div>
            <div className="sleek-impact-stats mt-5">
              <div className="stat-item">
                <div className="stat-val">100+</div>
                <p>Supporting over 100 healthcare providers nationwide</p>
              </div>
              <div className="stat-item">
                <div className="stat-val">600+</div>
                <p>Managing workflows with 600 plus trained virtual assistants</p>
              </div>
              <div className="stat-item">
                <div className="stat-val">4.8★</div>
                <p>Maintaining a consistent 4.8 star client satisfaction rating</p>
              </div>
              <div className="stat-item">
                <div className="stat-val">20+</div>
                <p>Earning recognition through more than 20 healthcare service awards</p>
              </div>
            </div>
            <p className="text-center mt-5 subtext">Our growth reflects our commitment to results, transparency, and long term partnerships.</p>
          </div>
        </section>

        {/* Our Core Values */}
        <section className="sleek-section">
          <div className="container">
            <div className="sleek-section-header text-center">
              <h2>Our Core Values</h2>
              <p className="subtext">The Foundation of Everything We Do</p>
              <p className="description mx-auto mt-3">At Alpha Medi Assist, our values shape our culture, services, and client relationships. These principles guide every interaction and decision.</p>
            </div>
            <div className="sleek-grid-3 mt-5">
              <div className="value-sleek-item">
                <div className="value-icon"><ShieldCheck size={32} /></div>
                <h4>Integrity</h4>
                <p>We believe trust is earned through honesty and accountability. We operate with complete transparency in billing processes, reporting, and communication. Our clients always know where their revenue stands.</p>
              </div>
              <div className="value-sleek-item">
                <div className="value-icon"><Zap size={32} /></div>
                <h4>Excellence</h4>
                <p>We pursue excellence through continuous improvement, training, and innovation. Our team stays current with healthcare regulations to deliver accurate results.</p>
              </div>
              <div className="value-sleek-item">
                <div className="value-icon"><Globe size={32} /></div>
                <h4>Compliance</h4>
                <p>Compliance is non-negotiable. We maintain strict HIPAA compliance and follow all federal, state, and payer regulations. Data security is embedded into every workflow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Alpha Medi Assist Different */}
        <section className="sleek-section bg-sleek-blue-light">
          <div className="container">
            <div className="sleek-content-max text-center">
              <h2>What Makes Alpha Medi Assist Different</h2>
              <h3 className="mb-4">A Partner, Not Just a Service Provider</h3>
              <p>Many companies offer medical billing or virtual assistance. Alpha Medi Assist focuses on partnership. We take time to understand your practice goals, specialty requirements, patient demographics, and financial challenges. Our solutions are customized, not templated. We measure success by your outcomes, not just task completion.</p>
            </div>
          </div>
        </section>

        {/* Expertise List */}
        <section className="sleek-section">
          <div className="container">
            <div className="sleek-section-header text-center">
              <h2>Our Expertise</h2>
              <p>Comprehensive Healthcare Support Services</p>
              <p className="description mx-auto mt-3">Alpha Medi Assist provides end to end healthcare operational support, including:</p>
            </div>
            <div className="expertise-sleek-grid mt-5">
              <div className="exp-item"><FileText size={20} /> Medical billing and coding services</div>
              <div className="exp-item"><TrendingUp size={20} /> Revenue cycle management</div>
              <div className="exp-item"><Target size={20} /> Claims submission and denial management</div>
              <div className="exp-item"><Shield size={20} /> Insurance verification and eligibility checks</div>
              <div className="exp-item"><Briefcase size={20} /> Patient billing and statement management</div>
              <div className="exp-item"><Clock size={20} /> Prior authorizations and referrals</div>
              <div className="exp-item"><Layout size={20} /> EHR documentation and data entry</div>
              <div className="exp-item"><Users size={20} /> Scheduling and front desk virtual support</div>
              <div className="exp-item"><BarChart size={20} /> Reporting and financial analytics</div>
            </div>
            <p className="text-center mt-5 subtext">Our multidisciplinary expertise allows us to support practices at every stage of growth.</p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="sleek-section bg-sleek-light">
          <div className="container">
            <div className="sleek-section-header text-center">
              <h2>Why Healthcare Providers Choose Alpha Medi Assist</h2>
              <p>Trusted Nationwide for Consistent Results</p>
              <p className="description mx-auto mt-3">Healthcare providers across the United States choose Alpha Medi Assist because we deliver measurable improvements and dependable support.</p>
            </div>
            <div className="sleek-grid-2 mt-5">
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
              <h2>Our Approach to Client Success</h2>
              <p>Customized, Data Driven, and Scalable</p>
              <p className="description mx-auto mt-3">We follow a structured yet flexible approach to ensure successful partnerships.</p>
            </div>
            <div className="sleek-approach-row mt-5">
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
            <p className="text-center mt-5 subtext">This approach allows us to scale with your practice as your needs evolve.</p>
          </div>
        </section>

        {/* HIPAA & Partnerships */}
        <section className="sleek-section bg-sleek-light">
          <div className="container">
            <div className="sleek-grid-2">
              <div className="sleek-info-box">
                <ShieldCheck size={40} className="text-secondary" />
                <h3>Commitment to HIPAA and Data Security</h3>
                <h4>Protecting Patient Trust</h4>
                <p>Patient data protection is central to our operations. Alpha Medi Assist maintains strict HIPAA compliant systems, secure access controls, encrypted communications, and regular staff training.</p>
                <p>We take data privacy seriously because patient trust and regulatory compliance are critical to every healthcare practice.</p>
              </div>
              <div className="sleek-info-box">
                <Heart size={40} className="text-secondary" />
                <h3>Long Term Partnerships</h3>
                <h4>Growing Together With Our Clients</h4>
                <p>We believe the best results come from long term relationships built on trust, communication, and shared goals.</p>
                <p>Many of our clients have partnered with us for years because we adapt as their practices grow. Whether expanding services, adding providers, or transitioning to telehealth, we evolve with you.</p>
                <p className="mt-3 font-weight-bold">Your success is our success.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="sleek-section">
          <div className="container">
            <div className="sleek-section-header text-center">
              <h2>Who We Serve</h2>
              <p className="description">Alpha Medi Assist proudly supports:</p>
            </div>
            <div className="sleek-serve-grid mt-4">
              <div className="s-item">Independent medical practices</div>
              <div className="s-item">Nurse practitioners and providers</div>
              <div className="s-item">Specialty clinics and clinics</div>
              <div className="s-item">Multi provider organizations</div>
              <div className="s-item">Telehealth and remote care</div>
            </div>
            <p className="text-center mt-5 subtext">Our services are scalable and designed to fit practices of all sizes.</p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="sleek-cta-section text-center">
          <div className="container">
            <div className="sleek-cta-card">
              <h2>Ready to Partner With Alpha Medi Assist</h2>
              <h3>Let Us Simplify Your Practice Operations</h3>
              <p className="mt-4">If administrative tasks, billing challenges, or revenue concerns are holding your practice back, Alpha Medi Assist is here to help.</p>
              <p>We offer a free consultation to understand your needs and demonstrate how our healthcare support solutions can improve efficiency, compliance, and financial performance.</p>
              <div className="mt-5">
                <h4>Contact Alpha Medi Assist Today</h4>
                <p>Take the first step toward a more organized, profitable, and stress free practice.</p>
                <div className="cta-btns mt-4">
                  <Link to="/contact" className="btn btn-secondary btn-large">Get Free Consultation</Link>
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
