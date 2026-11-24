import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, BookOpen, CheckCircle, ChevronDown, ExternalLink, FileWarning, Lightbulb, ShieldCheck, Phone } from 'lucide-react'
import PageTitle from '../components/PageTitle'
import LeadSection from '../components/LeadSection'
import PreferredSourceButton from '../components/PreferredSourceButton'
import NotFound from './NotFound'
import { denialCodes, denialCodeSources, denialCodeExtras, DENIAL_HUB_PATH } from '../data/denialCodes'
import { BRAND } from '../seo/site'
import '../styles/landing.css'
import '../styles/blog.css'
import '../styles/denial.css'

const UPDATED = '2026-11-20'

const DenialCodePage: React.FC = () => {
  const { code } = useParams<{ code: string }>()
  const d = denialCodes.find((c) => c.slug === code)
  if (!d) return <NotFound />

  const sources = denialCodeSources[d.slug] ?? []
  const extra = denialCodeExtras[d.slug]
  const related = d.relatedCodes.map((s) => denialCodes.find((c) => c.slug === s)).filter(Boolean) as typeof denialCodes
  const toc = [
    { id: 'meaning', label: `What ${d.code} means` },
    { id: 'causes', label: 'Common causes' },
    ...(d.remarks ? [{ id: 'remarks', label: 'Remark codes you may see' }] : []),
    { id: 'fix', label: `How to fix ${d.code}` },
    ...(extra ? [{ id: 'example', label: 'Example' }] : []),
    { id: 'appeal', label: 'When to appeal' },
    { id: 'prevent', label: 'How to prevent it' },
    { id: 'faq', label: 'FAQ' },
  ]

  return (
    <>
      <PageTitle
        title={d.seoTitle}
        description={d.seoDescription}
        article={{
          headline: `${d.code} Denial Code: ${d.name}`,
          datePublished: UPDATED,
          section: 'Denial codes',
          citations: sources.map((s) => s.url),
        }}
      />
      <div className="bp dc">
        <header className="bp-header">
          <div className="container bp-header-inner">
            <nav className="lp-breadcrumb" aria-label="Breadcrumb">
              <span><Link to="/">Home</Link><span className="lp-sep">/</span></span>
              <span><Link to={DENIAL_HUB_PATH}>Denial Codes</Link><span className="lp-sep">/</span></span>
              <span aria-current="page">{d.code}</span>
            </nav>
            <p className="lp-eyebrow">Denial code guide · CARC {d.carc}</p>
            <h1>{d.code} Denial Code: {d.name}</h1>
            <p className="dc-answer" id="meaning">{d.definition}</p>
            <dl className="dc-glance">
              {d.glance.map((g) => (
                <div key={g.label}>
                  <dt>{g.label}</dt>
                  <dd>{g.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <div className="container bp-layout">
          <article className="bp-article">
            <section className="bp-section">
              <h2>What {d.code} means</h2>
              <blockquote className="dc-official">
                <FileWarning size={20} aria-hidden="true" />
                <div>
                  <strong>Official description (CARC {d.carc})</strong>
                  <p>{d.official}</p>
                </div>
              </blockquote>
              {d.intro.map((p, i) => <p key={i}>{p}</p>)}
            </section>

            <section className="bp-section" id="causes">
              <h2>Common causes of {d.code}</h2>
              <ul className="lp-cards dc-cards">
                {d.causes.map((c) => (
                  <li key={c.title} className="lp-card">
                    <span className="lp-card-icon"><Lightbulb size={18} aria-hidden="true" /></span>
                    <span><strong>{c.title}.</strong> {c.text}</span>
                  </li>
                ))}
              </ul>
            </section>

            {d.remarks && (
              <section className="bp-section" id="remarks">
                <h2>Remark codes often sent with {d.code}</h2>
                <div className="lp-table-wrap">
                  <table className="lp-table dc-table">
                    <thead><tr><th scope="col">RARC</th><th scope="col">What it tells you</th></tr></thead>
                    <tbody>
                      {d.remarks.map((r) => (
                        <tr key={r.code}><th scope="row">{r.code}</th><td>{r.meaning}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            <section className="bp-section" id="fix">
              <h2>How to fix a {d.code} denial, step by step</h2>
              <ol className="lp-timeline dc-steps">
                {d.fix.map((s, i) => (
                  <li key={s.title}>
                    <span className="lp-timeline-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </li>
                ))}
              </ol>
            </section>

            {extra && (
              <section className="bp-section" id="example">
                <h2>Example: a {d.code} denial and how it was fixed</h2>
                <blockquote className="dc-example">
                  <p>{extra.example}</p>
                  <p className="dc-example-note">Illustrative example, not a specific client case.</p>
                </blockquote>
                <p>
                  {d.code} is common in{' '}
                  {extra.specialties.map((sp, i) => (
                    <React.Fragment key={sp.path}>
                      {i > 0 && ' and '}
                      <Link to={sp.path}>{sp.label.toLowerCase()}</Link>
                    </React.Fragment>
                  ))}
                  . See how our <Link to="/denial-management-services">denial management service</Link> works these denials end to end.
                </p>
              </section>
            )}

            <section className="bp-section" id="appeal">
              <h2>When to appeal {d.code}</h2>
              <ul className="lp-list">
                {d.appeal.map((a) => <li key={a}><CheckCircle size={18} aria-hidden="true" /> <span>{a}</span></li>)}
              </ul>
            </section>

            <section className="bp-section" id="prevent">
              <h2>How to prevent {d.code} denials</h2>
              <ul className="lp-list">
                {d.prevent.map((a) => <li key={a}><ShieldCheck size={18} aria-hidden="true" /> <span>{a}</span></li>)}
              </ul>
            </section>

            <section className="bp-section" id="faq">
              <h2>{d.code} FAQ</h2>
              <div className="lp-faqs lp-accordion">
                {d.faqs.map((f, i) => (
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

            <section className="bp-section">
              <h2>Related denial codes</h2>
              <ul className="lp-related lp-related-cards">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link to={`${DENIAL_HUB_PATH}/${r.slug}`}>
                      <span className="lp-related-icon"><BookOpen size={18} aria-hidden="true" /></span>
                      <span className="lp-related-label">{r.code}: {r.name}</span>
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to={DENIAL_HUB_PATH}>
                    <span className="lp-related-icon"><BookOpen size={18} aria-hidden="true" /></span>
                    <span className="lp-related-label">All denial codes</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link to="/denial-management-services">
                    <span className="lp-related-icon"><BookOpen size={18} aria-hidden="true" /></span>
                    <span className="lp-related-label">Denial management services</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </section>

            {sources.length > 0 && (
              <section className="bp-section bp-sources" id="sources">
                <h2>Sources</h2>
                <ol>
                  {sources.map((r) => (
                    <li key={r.url}>
                      <a href={r.url} target="_blank" rel="noopener noreferrer">{r.label} <ExternalLink size={13} aria-hidden="true" /></a>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            <aside className="bp-author" aria-label="About this guide">
              <ShieldCheck size={28} aria-hidden="true" />
              <div>
                <p className="bp-author-name">Prepared by the {BRAND.name} billing team</p>
                <p>
                  Code descriptions follow the X12 CARC and RARC lists; payer policies vary, so always check the remittance and
                  your payer contract. This guide is general information, not legal or payer-specific advice.
                </p>
              </div>
            </aside>

            <PreferredSourceButton variant="article" />
          </article>

          <aside className="bp-sidebar" aria-label="Guide tools">
            <nav className="bp-toc" aria-label="Table of contents">
              <p className="bp-toc-title">In this guide</p>
              <ol>
                {toc.map((t) => <li key={t.id}><a href={`#${t.id}`}>{t.label}</a></li>)}
              </ol>
            </nav>
            <div className="bp-cta-card">
              <p className="bp-cta-title">Too many {d.code} denials?</p>
              <p>We work denials by reason code and fix the cause upstream. Free denial assessment, no obligation.</p>
              <a href="#free-assessment" className="btn btn-primary">Get Free Assessment</a>
              <a href={`tel:${BRAND.telephone.replace(/-/g, '')}`} className="bp-cta-phone">
                <Phone size={16} aria-hidden="true" /> {BRAND.telephoneDisplay}
              </a>
            </div>
          </aside>
        </div>

        <LeadSection
          title={`Stop losing revenue to ${d.code} denials`}
          intro="Send us a few details. We will review your denial trends by reason code and show which claims can still be recovered."
        />
      </div>
    </>
  )
}

export default DenialCodePage
