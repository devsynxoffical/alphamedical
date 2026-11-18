import React from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, ClipboardCheck, ArrowRight } from 'lucide-react'
import { specialtyInsights } from '../data/specialtyInsights'
import '../styles/landing.css'

/**
 * Specialty-specific billing knowledge (codes, modifiers, denial drivers,
 * documentation, FAQs). Renders nothing for specialties without data yet.
 */
const SpecialtyInsights: React.FC<{ id: string; name: string }> = ({ id, name }) => {
  const data = specialtyInsights[id]
  if (!data) return null

  return (
    <section className="si" aria-labelledby={`si-${id}`}>
      <div className="container si-inner">
        <p className="lp-eyebrow">Billing guide</p>
        <h2 id={`si-${id}`}>{name} billing at a glance</h2>
        <p className="si-intro">{data.intro}</p>

        <div className="si-grid">
          <div className="si-card si-card-wide">
            <h3>Common {name.toLowerCase()} codes we bill</h3>
            <div className="lp-table-wrap">
              <table className="lp-table">
                <thead>
                  <tr><th scope="col">Code</th><th scope="col">What it covers</th></tr>
                </thead>
                <tbody>
                  {data.codes.map((c) => (
                    <tr key={c.code}><th scope="row">{c.code}</th><td>{c.desc}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="si-card">
            <h3>Modifiers that matter</h3>
            <dl className="si-dl">
              {data.modifiers.map((m) => (
                <div key={m.mod}>
                  <dt>{m.mod}</dt>
                  <dd>{m.use}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="si-card">
            <h3><AlertTriangle size={18} aria-hidden="true" /> Top denial drivers</h3>
            <ul className="si-list">
              {data.denials.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>

          <div className="si-card">
            <h3><ClipboardCheck size={18} aria-hidden="true" /> Documentation checklist</h3>
            <ul className="si-list">
              {data.documentation.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>
        </div>

        <h3 className="si-faq-title">{name} billing questions</h3>
        <div className="lp-faqs">
          {data.faqs.map((f) => (
            <div key={f.question} className="lp-faq">
              <h4 data-faq-q>{f.question}</h4>
              <p data-faq-a>{f.answer}</p>
            </div>
          ))}
        </div>

        {data.seeAlso && (
          <p className="si-seealso">
            {data.seeAlso.note}{' '}
            <Link to={data.seeAlso.path}>{data.seeAlso.label} <ArrowRight size={14} aria-hidden="true" /></Link>
          </p>
        )}

        <p className="si-note">
          Code descriptions are simplified summaries. CPT® is a registered trademark of the American Medical
          Association. Coding rules and payer policies change every year; verify against current code sets and payer policies.
        </p>
      </div>
    </section>
  )
}

export default SpecialtyInsights
