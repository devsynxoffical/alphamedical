import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Phone } from 'lucide-react'
import PageTitle from '../components/PageTitle'
import type { LandingPageData } from '../data/landingPages'
import { breadcrumbTrail } from '../seo/routes'
import { BRAND } from '../seo/site'
import '../styles/landing.css'
import '../styles/blog.css'

const LandingPage: React.FC<{ page: LandingPageData }> = ({ page }) => {
  const crumbs = breadcrumbTrail(page.path)

  return (
    <>
      <PageTitle title={page.metaTitle} description={page.metaDescription} />
      <div className="lp">
        <section className="lp-hero">
          <div className="container">
            {crumbs.length > 0 && (
              <nav className="lp-breadcrumb" aria-label="Breadcrumb">
                {crumbs.map((c, i) => (
                  <span key={c.path}>
                    {i < crumbs.length - 1 ? <Link to={c.path}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
                    {i < crumbs.length - 1 && <span className="lp-sep">/</span>}
                  </span>
                ))}
              </nav>
            )}
            <p className="lp-eyebrow">{page.eyebrow}</p>
            <h1>{page.h1}</h1>
            <p className="lp-answer">{page.answer}</p>
            <ul className="lp-hero-bullets">
              {page.heroBullets.map((b) => (
                <li key={b}><CheckCircle size={18} aria-hidden="true" /> {b}</li>
              ))}
            </ul>
            <div className="lp-actions">
              <Link to="/free-consultation" className="btn btn-primary btn-large">Get a Free Billing Assessment</Link>
              <a href={`tel:${BRAND.telephone.replace(/-/g, '')}`} className="btn btn-outline btn-large">
                <Phone size={18} aria-hidden="true" /> {BRAND.telephoneDisplay}
              </a>
            </div>
          </div>
        </section>

        {page.stats && (
          <section className="lp-stats" aria-label="Key results">
            <div className="container lp-stats-grid">
              {page.stats.map((s) => (
                <div key={s.label} className="lp-stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="container lp-body">
          {page.sections.map((section) => (
            <section key={section.heading} className="lp-section">
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
              {section.bullets && (
                <ul className="lp-list">
                  {section.bullets.map((b) => (
                    <li key={b}><CheckCircle size={18} aria-hidden="true" /> <span>{b}</span></li>
                  ))}
                </ul>
              )}
              {section.steps && (
                <ol className="lp-steps">
                  {section.steps.map((s) => (
                    <li key={s.title}>
                      <h3>{s.title}</h3>
                      <p>{s.text}</p>
                    </li>
                  ))}
                </ol>
              )}
              {section.table && (
                <div className="lp-table-wrap">
                  <table className="lp-table">
                    <thead>
                      <tr>{section.table.head.map((h, i) => <th key={i} scope="col">{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, r) => (
                        <tr key={r}>
                          {row.map((cell, c) => (c === 0 ? <th key={c} scope="row">{cell}</th> : <td key={c}>{cell}</td>))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          <section className="lp-section">
            <h2>Frequently asked questions</h2>
            <div className="lp-faqs">
              {page.faqs.map((f) => (
                <div key={f.question} className="lp-faq">
                  <h3 data-faq-q>{f.question}</h3>
                  <p data-faq-a>{f.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {page.references && page.references.length > 0 && (
            <section className="lp-section bp-sources">
              <h2>Sources</h2>
              <ol>
                {page.references.map((r) => (
                  <li key={r.url}>
                    <a href={r.url} target="_blank" rel="noopener noreferrer">{r.label}</a>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <section className="lp-section">
            <h2>Related services and guides</h2>
            <ul className="lp-related">
              {page.related.map((r) => (
                <li key={r.path}>
                  <Link to={r.path}>{r.label} <ArrowRight size={16} aria-hidden="true" /></Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="lp-cta">
          <div className="container">
            <h2>{page.ctaTitle}</h2>
            <p>{page.ctaText}</p>
            <div className="lp-actions lp-actions-center">
              <Link to="/free-consultation" className="btn btn-primary btn-large">Get Free Consultation</Link>
              <Link to="/book-appointment" className="btn btn-outline btn-large">Book a Call</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default LandingPage
