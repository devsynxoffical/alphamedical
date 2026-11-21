import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import PageTitle from '../components/PageTitle'
import LeadSection from '../components/LeadSection'
import { denialCodes, otherCodes, DENIAL_HUB_PATH } from '../data/denialCodes'
import '../styles/landing.css'
import '../styles/blog.css'
import '../styles/denial.css'

const GROUPS = [
  { code: 'CO', name: 'Contractual Obligation', text: 'The provider is responsible under the payer contract; do not bill the patient.' },
  { code: 'PR', name: 'Patient Responsibility', text: 'The amount may be billed to the patient (deductible, coinsurance, copay).' },
  { code: 'OA', name: 'Other Adjustment', text: 'An adjustment that fits neither CO nor PR, often seen with coordination of benefits.' },
  { code: 'PI', name: 'Payer Initiated', text: 'A reduction the payer applied that is not the patient\'s responsibility.' },
]

const FAQS = [
  { question: 'What is a denial code in medical billing?', answer: 'A denial code is the Claim Adjustment Reason Code (CARC) on a remittance that explains why a claim or service line was denied or paid differently than billed. It is combined with a group code (CO, PR, OA or PI) that says who is responsible for the amount.' },
  { question: 'What is the difference between a CARC and a RARC?', answer: 'A CARC gives the reason for the adjustment. A Remittance Advice Remark Code (RARC) adds detail, such as which piece of information is missing. Some CARCs, like 16, always need a RARC.' },
  { question: 'What are the most common denial codes?', answer: 'Practices commonly see CO-16 (missing information), CO-97 (bundled service), CO-45 (charge above the allowed amount), PR-1 (deductible), CO-18 (duplicate), CO-29 (timely filing), CO-50 (medical necessity) and CO-197 (missing authorization).' },
  { question: 'Who maintains denial codes?', answer: 'CARC and RARC code lists are maintained by X12 code committees and updated several times a year. Always check the current list when a code is new to you.' },
]

const DenialCodesHub: React.FC = () => (
  <>
    <PageTitle
      title="Denial Codes in Medical Billing: CO-16, CO-97, CO-45, PR-1 & More"
      description="Plain-English guide to claim denial codes (CARC): what CO-16, CO-97, CO-45, PR-1 and other common codes mean, who pays, and how to fix each one."
    />
    <div className="bp dc">
      <header className="bp-header">
        <div className="container bp-header-inner">
          <nav className="lp-breadcrumb" aria-label="Breadcrumb">
            <span><Link to="/">Home</Link><span className="lp-sep">/</span></span>
            <span aria-current="page">Denial Codes</span>
          </nav>
          <p className="lp-eyebrow">Reference</p>
          <h1>Denial Codes in Medical Billing: Meanings and Fixes</h1>
          <p className="dc-answer">
            A denial code is the Claim Adjustment Reason Code (CARC) on a remittance that explains why a payer denied or
            reduced a claim. Read it together with its group code (CO, PR, OA or PI) to know who pays, and with any remark
            code (RARC) to know exactly what to fix.
          </p>
        </div>
      </header>

      <div className="container dc-hub">
        <section className="bp-section">
          <h2>Detailed guides by code</h2>
          <ul className="dc-code-grid">
            {denialCodes.map((d) => (
              <li key={d.slug}>
                <Link to={`${DENIAL_HUB_PATH}/${d.slug}`} className="dc-code-card">
                  <span className={`dc-badge dc-badge-${d.group.toLowerCase()}`}>{d.code}</span>
                  <strong>{d.name}</strong>
                  <span className="dc-code-def">{d.glance.find((g) => g.label === 'Usual fix')?.value}</span>
                  <span className="dc-code-more">Read the guide <ArrowRight size={15} aria-hidden="true" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="bp-section">
          <h2>First, read the group code</h2>
          <ul className="dc-groups">
            {GROUPS.map((g) => (
              <li key={g.code}>
                <span className={`dc-badge dc-badge-${g.code.toLowerCase()}`}>{g.code}</span>
                <div><strong>{g.name}</strong><p>{g.text}</p></div>
              </li>
            ))}
          </ul>
        </section>

        <section className="bp-section">
          <h2>Other common denial codes</h2>
          <div className="lp-table-wrap">
            <table className="lp-table dc-table">
              <thead><tr><th scope="col">Code</th><th scope="col">Meaning</th></tr></thead>
              <tbody>
                {otherCodes.map((c) => <tr key={c.code}><th scope="row">{c.code}</th><td>{c.meaning}</td></tr>)}
              </tbody>
            </table>
          </div>
          <p className="dc-more">
            For fixes to these codes, see our guide to{' '}
            <Link to="/blog/common-claim-denial-codes-and-how-to-fix-them">common claim denial codes and how to fix them</Link>{' '}
            and the{' '}<Link to="/blog/top-10-reasons-for-medical-claim-denials-and-how-to-fix-them">top 10 reasons claims are denied</Link>.
          </p>
        </section>

        <section className="bp-section">
          <h2>Denial codes FAQ</h2>
          <div className="lp-faqs lp-accordion">
            {FAQS.map((f, i) => (
              <details key={f.question} className="lp-faq" open={i === 0}>
                <summary>
                  <h3 data-faq-q>{f.question}</h3>
                  <ChevronDown size={20} aria-hidden="true" className="lp-faq-chev" />
                </summary>
                <p data-faq-a>{f.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <LeadSection
        title="Get a free denial assessment"
        intro="Send us a few details. We will review your denials by reason code and show which claims can still be recovered."
      />
    </div>
  </>
)

export default DenialCodesHub
