import React from 'react'
import { CheckCircle, Phone, ShieldCheck } from 'lucide-react'
import LeadForm from './LeadForm'
import { BRAND } from '../seo/site'
import { LEAD_ANCHOR } from '../utils/leadEvents'
import teamImg from '../Images/lp/billing-specialist-call.webp'
import '../styles/lead.css'

interface Props {
  title?: string
  intro?: string
  /** Short benefit lines shown next to the form */
  points?: string[]
}

const DEFAULT_POINTS = [
  'Review of your denial trends and aging A/R',
  'Clear list of fixes, whether or not you hire us',
  'A quote based on your specialty and claim volume',
]

/** Full-width lead capture block: image + benefits on the left, form on the right. */
const LeadSection: React.FC<Props> = ({
  title = 'Get a free billing assessment',
  intro = 'Tell us a little about your practice. A billing specialist will review where revenue is slipping and send you practical next steps.',
  points = DEFAULT_POINTS,
}) => (
  <section className="lead-section" id={LEAD_ANCHOR} aria-labelledby={`${LEAD_ANCHOR}-title`}>
    <div className="container lead-grid">
      <div className="lead-copy">
        <p className="lead-eyebrow">Free, no obligation</p>
        <h2 id={`${LEAD_ANCHOR}-title`}>{title}</h2>
        <p className="lead-intro">{intro}</p>
        <ul className="lead-points">
          {points.map((p) => (
            <li key={p}><CheckCircle size={20} aria-hidden="true" /> {p}</li>
          ))}
        </ul>
        <figure className="lead-photo">
          <img src={teamImg} alt="Alpha Medi Assist billing specialist on a call with a practice" loading="lazy" width="560" height="360" />
          <figcaption>
            <ShieldCheck size={18} aria-hidden="true" /> HIPAA-compliant team · U.S. practices only
          </figcaption>
        </figure>
        <a className="lead-call" href={`tel:${BRAND.telephone.replace(/-/g, '')}`}>
          <Phone size={18} aria-hidden="true" /> Prefer to talk? {BRAND.telephoneDisplay}
        </a>
      </div>
      <div className="lead-card">
        <LeadForm />
      </div>
    </div>
  </section>
)

export default LeadSection
