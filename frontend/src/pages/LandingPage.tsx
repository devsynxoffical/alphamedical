import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Phone, ShieldCheck, Award, Stethoscope, ChevronDown, BookOpen } from 'lucide-react'
import PageTitle from '../components/PageTitle'
import LeadSection from '../components/LeadSection'
import RevenueLeakCalculator from '../components/RevenueLeakCalculator'
import type { LandingPageData, LandingSection } from '../data/landingPages'
import { breadcrumbTrail } from '../seo/routes'
import { BRAND } from '../seo/site'
import { LEAD_ANCHOR } from '../utils/leadEvents'
import hipaaBadge from '../Images/HIPAA-1-768x296 - Edited.png'
import imgTeam from '../Images/lp/billing-team-meeting.webp'
import imgRcm from '../Images/lp/rcm-dashboard.webp'
import imgSmall from '../Images/lp/small-practice.webp'
import imgClaims from '../Images/lp/claims-entry.webp'
import imgOffice from '../Images/lp/practice-office.webp'
import imgProvider from '../Images/lp/provider-patient.webp'
import '../styles/landing.css'
import '../styles/blog.css'

// Hero and in-content images per page: [hero, secondary, alt text for hero]
const PAGE_IMAGES: Record<string, [string, string, string]> = {
  '/medical-billing-services': [imgTeam, imgClaims, 'Medical billing team reviewing claims with a practice'],
  '/revenue-cycle-management-services': [imgRcm, imgProvider, 'Revenue cycle analytics on a laptop'],
  '/medical-billing-for-small-practices': [imgSmall, imgOffice, 'Physician with a young patient at a small practice'],
  '/medical-billing-services-florida': [imgClaims, imgProvider, 'Billing specialist entering claims for a Florida practice'],
  '/medical-billing-services-virginia': [imgOffice, imgClaims, 'Practice staff reviewing billing on a computer'],
  '/denial-management-services': [imgClaims, imgRcm, 'Billing specialist reviewing denied claims at a computer'],
}
const DEFAULT_IMAGES: [string, string, string] = [imgTeam, imgProvider, 'Alpha Medi Assist medical billing team']

/** Bullets render as cards when there are several short items, otherwise as a checklist. */
const SectionBody: React.FC<{ section: LandingSection; image?: string }> = ({ section, image }) => {
  const asCards = !!section.bullets && section.bullets.length >= 4 && !section.paragraphs?.some((p) => p.length > 400)
  const text = section.paragraphs?.map((p, i) => <p key={i}>{p}</p>)

  return (
    <>
      {image && !section.bullets && !section.steps && !section.table ? (
        <div className="lp-split">
          <div>{text}</div>
          <img src={image} alt="" loading="lazy" width="1000" height="667" className="lp-split-img" />
        </div>
      ) : (
        text
      )}

      {section.bullets && asCards && (
        <ul className="lp-cards">
          {section.bullets.map((b) => (
            <li key={b} className="lp-card"><span className="lp-card-icon"><CheckCircle size={20} aria-hidden="true" /></span><span>{b}</span></li>
          ))}
        </ul>
      )}
      {section.bullets && !asCards && (
        <ul className="lp-list">
          {section.bullets.map((b) => (
            <li key={b}><CheckCircle size={18} aria-hidden="true" /> <span>{b}</span></li>
          ))}
        </ul>
      )}

      {section.steps && (
        <ol className="lp-timeline">
          {section.steps.map((s, i) => (
            <li key={s.title}>
              <span className="lp-timeline-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
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
    </>
  )
}

const LandingPage: React.FC<{ page: LandingPageData }> = ({ page }) => {
  const crumbs = breadcrumbTrail(page.path)
  const [heroImg, secondImg, heroAlt] = PAGE_IMAGES[page.path] ?? DEFAULT_IMAGES
  // The calculator goes after the second content section; the secondary image
  // goes on the first text-only section.
  const calcAfter = Math.min(1, page.sections.length - 1)
  const imageIndex = page.sections.findIndex((s) => !s.bullets && !s.steps && !s.table)

  return (
    <>
      <PageTitle title={page.metaTitle} description={page.metaDescription} />
      <div className="lp">
        <section className="lp-hero">
          <div className="container lp-hero-grid">
            <div className="lp-hero-copy">
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
                <a href={`#${LEAD_ANCHOR}`} className="btn btn-primary btn-large">Get a Free Billing Assessment</a>
                <a href={`tel:${BRAND.telephone.replace(/-/g, '')}`} className="btn btn-outline btn-large">
                  <Phone size={18} aria-hidden="true" /> {BRAND.telephoneDisplay}
                </a>
              </div>
            </div>
            <div className="lp-hero-media">
              <img src={heroImg} alt={heroAlt} width="1000" height="667" fetchPriority="high" />
              {page.stats?.[0] && (
                <div className="lp-float lp-float-top">
                  <strong>{page.stats[0].value}</strong>
                  <span>{page.stats[0].label}</span>
                </div>
              )}
              <div className="lp-float lp-float-bottom">
                <ShieldCheck size={22} aria-hidden="true" />
                <span>HIPAA-compliant<br />BAA with every client</span>
              </div>
            </div>
          </div>
        </section>

        <section className="lp-trust" aria-label="Why practices trust us">
          <div className="container lp-trust-row">
            <img src={hipaaBadge} alt="HIPAA compliant" width="150" height="58" loading="lazy" />
            <span><Stethoscope size={20} aria-hidden="true" /> 90+ specialties</span>
            <span><Award size={20} aria-hidden="true" /> Certified coders and billers</span>
            <span><ShieldCheck size={20} aria-hidden="true" /> Works in your existing EHR</span>
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
          {page.sections.map((section, i) => (
            <React.Fragment key={section.heading}>
              <section className={`lp-section${section.steps ? ' lp-section-band' : ''}`}>
                <h2>{section.heading}</h2>
                <SectionBody section={section} image={i === imageIndex ? secondImg : undefined} />
              </section>
              {i === calcAfter && <RevenueLeakCalculator />}
            </React.Fragment>
          ))}

          <section className="lp-section">
            <h2>Frequently asked questions</h2>
            <div className="lp-faqs lp-accordion">
              {page.faqs.map((f, i) => (
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

          <section className="lp-section">
            <h2>Related services and guides</h2>
            <ul className="lp-related lp-related-cards">
              {page.related.map((r) => (
                <li key={r.path}>
                  <Link to={r.path}>
                    <span className="lp-related-icon"><BookOpen size={18} aria-hidden="true" /></span>
                    <span className="lp-related-label">{r.label}</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
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
        </div>

        <LeadSection title={page.ctaTitle} intro={page.ctaText} />
      </div>
    </>
  )
}

export default LandingPage
