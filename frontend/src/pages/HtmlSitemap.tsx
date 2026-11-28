import React from 'react'
import { Link } from 'react-router-dom'
import PageTitle from '../components/PageTitle'
import { siteRoutes, type RouteKind } from '../seo/routes'
import '../styles/landing.css'

const GROUPS: { title: string; kinds: RouteKind[]; filter?: (path: string) => boolean }[] = [
  { title: 'Services', kinds: ['service', 'hub'], filter: (p) => p !== '/medical-billing-specialities' },
  { title: 'Locations', kinds: ['location'] },
  { title: 'Medical billing by specialty', kinds: ['hub', 'specialty'], filter: (p) => p === '/medical-billing-specialities' || p.startsWith('/specialties/') },
  { title: 'Denial codes', kinds: ['hub', 'guide'], filter: (p) => p.startsWith('/denial-codes') },
  { title: 'Billing guides and articles', kinds: ['blog-index', 'blog-post'] },
  { title: 'Company', kinds: ['home', 'page', 'conversion', 'legal'], filter: (p) => p !== '/sitemap' },
]

/** HTML sitemap: every indexable page, grouped, generated from the route registry. */
const HtmlSitemap: React.FC = () => (
  <>
    <PageTitle title="Sitemap | Alpha Medi Assist" description="All pages on Alpha Medi Assist: medical billing services, locations, specialty billing, denial code guides, articles and company pages." />
    <div className="lp">
      <section className="lp-hero" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <nav className="lp-breadcrumb" aria-label="Breadcrumb">
            <span><Link to="/">Home</Link><span className="lp-sep">/</span></span>
            <span aria-current="page">Sitemap</span>
          </nav>
          <h1>Sitemap</h1>
          <p className="lp-answer">Every page on the site, grouped by topic.</p>
        </div>
      </section>
      <div className="container lp-body">
        {GROUPS.map((g) => {
          const items = siteRoutes.filter((r) => g.kinds.includes(r.kind) && (!g.filter || g.filter(r.path)) && !(g.title === 'Services' && r.path.startsWith('/denial-codes')))
          if (!items.length) return null
          return (
            <section key={g.title} className="lp-section">
              <h2>{g.title}</h2>
              <ul className="lp-related">
                {items.map((r) => (
                  <li key={r.path}><Link to={r.path}>{r.label}</Link></li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  </>
)

export default HtmlSitemap
