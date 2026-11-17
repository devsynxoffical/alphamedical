import React, { useMemo, memo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Stethoscope, Users, Heart, Brain, Shield, Clock, Target, Zap, Activity, Baby, Scissors, Smile, TestTube, Pill, Star, UserCheck, Scan } from 'lucide-react'
import { specialties } from '../data/specialties'
import PageTitle from '../components/PageTitle'

// Import specialty images
import defaultSpecialtyImg from '../Images/optimized_medical_coding.png'
import internalMedicineImg from '../Images/Internal Medicine.jpg'
import allergyImmunologyImg from '../Images/Allergy & Immunology.png'
import orthopedicsImg from '../Images/Orthopedics.jpg'
import painManagementImg from '../Images/Pain Management.webp'
import neurologyImg from '../Images/Neurology.jpg'
import gastroenterologyImg from '../Images/Gastroenterology.jpg'
import generalSurgeryImg from '../Images/General Surgery1.jpg'
import anesthesiologyImg from '../Images/closeup-syringe-with-anesthesia-dental-clinic.jpg'
import cardiologyImg from '../Images/optimized_cardiology.png'
import dermatologyImg from '../Images/skin-allergy-person-s-arm.jpg'
import emergencyMedicineImg from '../Images/young-handsome-physician-medical-robe-with-stethoscope.jpg'
import obgynImg from '../Images/AdobeStock_566596170.jpeg'
import hematologyOncologyImg from '../Images/doctor-with-blood-samples-making-medical-report.jpg'
import orthopedicSurgeryImg from '../Images/optimized_orthopedic_surgery.png'
import pediatricsImg from '../Images/optimized_pediatrics.png'
import plasticSurgeryImg from '../Images/optimized_plastic_surgery.png'
import psychiatryImg from '../Images/psychology-depression-happy-smile-asian-600nw-2533816059.webp'
import mentalHealthCounselingImg from '../Images/doctor-suggesting-hospital-program-patient.jpg'
import radiologyImg from '../Images/side-view-nurse-looking-radiography.jpg'
import reproductiveEndocrinologyImg from '../Images/doctors-discussing-laptop-meeting.jpg'
import rheumatologyImg from '../Images/rheumatology.webp'
import urologyImg from '../Images/urologist.webp'
import nursePractitionerImg from '../Images/nurse-hospital-office-reading-pacient-treatment-laptop-health-care-practitioner-sitting-desk-using-computer-modern-clinic-looking-monitor-medicine.jpg'

// Memoized Specialty Card Component
const SpecialtyCard = memo(({ specialty, getSpecialtyIcon, getSpecialtyImage, priority = false
}: {
  specialty: typeof specialties[0],
  getSpecialtyIcon: (id: string) => React.ReactNode,
  getSpecialtyImage: (id: string) => string,
  priority?: boolean
}) => (
  <div className="specialty-card-enhanced">
    <div className="specialty-image">
      <img
        src={getSpecialtyImage(specialty.id)}
        alt={`${specialty.name} medical billing`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
      />
      <div className="specialty-overlay">
        <div className="specialty-icon">
          {getSpecialtyIcon(specialty.id)}
        </div>
      </div>
    </div>

    <div className="specialty-content">
      <h3 className="specialty-name">{specialty.name}</h3>
      <p className="specialty-description">{specialty.heroDescription}</p>

      <Link to={`/specialties/${specialty.id}`} className="btn btn-primary specialty-btn">
        Learn More <ArrowRight size={16} />
      </Link>
    </div>
  </div>
))

SpecialtyCard.displayName = 'SpecialtyCard'

const Specialties: React.FC = () => {
  // Memoize icon map
  const iconMap = useMemo(() => ({
    'internal-medicine': <Heart size={48} />,
    'allergy-immunology': <Shield size={48} />,
    'orthopedics': <Target size={48} />,
    'pain-management': <Zap size={48} />,
    'neurology': <Brain size={48} />,
    'gastroenterology': <Users size={48} />,
    'general-surgery': <Stethoscope size={48} />,
    'anesthesiology': <Activity size={48} />,
    'cardiology': <Heart size={48} />,
    'dermatology': <Shield size={48} />,
    'emergency-medicine': <Zap size={48} />,
    'gynecology-obstetrics': <Users size={48} />,
    'hematology-oncology': <TestTube size={48} />,
    'orthopedic-surgery': <Target size={48} />,
    'pediatrics': <Baby size={48} />,
    'plastic-surgery': <Scissors size={48} />,
    'psychiatry': <Brain size={48} />,
    'mental-health-counseling': <Smile size={48} />,
    'radiology': <Scan size={48} />,
    'reproductive-endocrinology': <Star size={48} />,
    'rheumatology': <Activity size={48} />,
    'urology': <Pill size={48} />,
    'nurse-practitioner': <UserCheck size={48} />
  }), [])

  // Memoize image map
  const imageMap = useMemo(() => ({
    'internal-medicine': internalMedicineImg,
    'allergy-immunology': allergyImmunologyImg,
    'orthopedics': orthopedicsImg,
    'pain-management': painManagementImg,
    'neurology': neurologyImg,
    'gastroenterology': gastroenterologyImg,
    'general-surgery': generalSurgeryImg,
    'anesthesiology': anesthesiologyImg,
    'cardiology': cardiologyImg,
    'dermatology': dermatologyImg,
    'emergency-medicine': emergencyMedicineImg,
    'gynecology-obstetrics': obgynImg,
    'hematology-oncology': hematologyOncologyImg,
    'orthopedic-surgery': orthopedicSurgeryImg,
    'pediatrics': pediatricsImg,
    'plastic-surgery': plasticSurgeryImg,
    'psychiatry': psychiatryImg,
    'mental-health-counseling': mentalHealthCounselingImg,
    'radiology': radiologyImg,
    'reproductive-endocrinology': reproductiveEndocrinologyImg,
    'rheumatology': rheumatologyImg,
    'urology': urologyImg,
    'nurse-practitioner': nursePractitionerImg
  }), [])

  // Get specialty-specific icons
  const getSpecialtyIcon = useCallback((specialtyId: string) => {
    return iconMap[specialtyId as keyof typeof iconMap] || <Stethoscope size={48} />
  }, [iconMap])

  // Get specialty-specific images
  const getSpecialtyImage = useCallback((specialtyId: string) => {
    return imageMap[specialtyId as keyof typeof imageMap] || defaultSpecialtyImg
  }, [imageMap])

  // Separate featured specialties (Urology and Nurse Practitioner)
  const { featuredSpecialties, otherSpecialties } = useMemo(() => {
    const featuredSpecialtyIds = ['urology', 'nurse-practitioner']
    return {
      featuredSpecialties: specialties.filter(s => featuredSpecialtyIds.includes(s.id)),
      otherSpecialties: specialties.filter(s => !featuredSpecialtyIds.includes(s.id))
    }
  }, [])

  return (
    <>
      <PageTitle
        title="Medical Billing by Specialty (90+) | Alpha Medi Assist"
        description="Specialty-specific medical billing and coding for cardiology, urology, pain management, psychiatry, OB/GYN, radiology and 90+ other specialties. HIPAA-compliant RCM."
      />
      <div className="specialties-page">
        {/* Page Header */}
        <section className="specialties-header section">
          <div className="container">
            <div className="specialties-header-content">
              <h1 className="specialties-title">Medical Billing Services by Specialty</h1>
              <p className="specialties-subtitle">Specialty-specific billing, coding and RCM support for 90+ specialties</p>
            </div>
          </div>
        </section>

        {/* Specialties Grid */}
        <section className="specialties-grid-section-enhanced section">
          <div className="container">
            <div className="specialties-grid-enhanced">
              {otherSpecialties.map((specialty, index) => (
                <SpecialtyCard
                  key={specialty.id}
                  specialty={specialty}
                  getSpecialtyIcon={getSpecialtyIcon}
                  getSpecialtyImage={getSpecialtyImage}
                  priority={index < 3}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Specialties - Centered at the end */}
        <section className="featured-specialties-section section">
          <div className="container">
            <div className="featured-specialties-grid">
              {featuredSpecialties.map(specialty => (
                <SpecialtyCard
                  key={specialty.id}
                  specialty={specialty}
                  getSpecialtyIcon={getSpecialtyIcon}
                  getSpecialtyImage={getSpecialtyImage}
                  priority={false}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="why-choose-specialties section bg-light">
          <div className="container">
            <div className="why-choose-header">
              <h2>Why Choose Alpha Medi Assist?</h2>
              <p>Comprehensive medical billing solutions tailored to your specialty</p>
            </div>
            <div className="why-choose-grid">
              <div className="why-choose-item">
                <div className="why-choose-icon">
                  <Users size={32} />
                </div>
                <h4>Specialty-Specific Virtual Assistants</h4>
                <p>trained in urgent care, OB/GYN, pathology, radiology, and anesthesiology</p>
              </div>
              <div className="why-choose-item">
                <div className="why-choose-icon">
                  <Shield size={32} />
                </div>
                <h4>Comprehensive RCM Solutions</h4>
                <p>including Medical billing Services, coding, and denial management</p>
              </div>
              <div className="why-choose-item">
                <div className="why-choose-icon">
                  <Clock size={32} />
                </div>
                <h4>HIPAA-Compliant services</h4>
                <p>ensuring data security & patient confidentiality</p>
              </div>
              <div className="why-choose-item">
                <div className="why-choose-icon">
                  <Zap size={32} />
                </div>
                <h4>24/7 Administrative Support</h4>
                <p>to improve workflow efficiency & patient experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="specialties-cta-enhanced section">
          <div className="container">
            <div className="cta-content-enhanced">
              <h2>Ready to speak with a Medical Billing Expert?</h2>
              <p>Partner with Alpha Medi Assist to eliminate administrative stress and focus on delivering quality patient care. Schedule a free consultation today!</p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-large">
                  Get Free Consultation
                </Link>
                <Link to="/book-appointment" className="btn btn-outline btn-large">
                  Talk to Billing Expert
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Specialties