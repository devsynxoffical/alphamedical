import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Clock, CalendarDays, ExternalLink, ShieldCheck, Phone } from 'lucide-react'
import PageTitle from '../components/PageTitle'
import { blogPosts } from '../data/blogPosts'
import { slugify, readingMinutes, formatDate } from '../utils/blog'
import { BRAND } from '../seo/site'
import NotFound from './NotFound'
import '../styles/landing.css'
import '../styles/blog.css'

const defaultRelated = [
  { label: 'Outsourced medical billing services', path: '/medical-billing-services' },
  { label: 'Revenue cycle management services', path: '/revenue-cycle-management-services' },
  { label: 'Medical coding services', path: '/medical-coding-services' },
]

const BlogPostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return <NotFound />
  }

  const updated = post.dateModified ?? post.datePublished
  const toc = [
    ...post.sections.map((s) => ({ id: slugify(s.heading), label: s.heading })),
    { id: 'faq', label: 'Frequently asked questions' },
    ...(post.references?.length ? [{ id: 'sources', label: 'Sources' }] : []),
  ]
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3)

  return (
    <>
      <PageTitle
        title={post.seoTitle}
        description={post.seoDescription}
        article={{
          headline: post.title,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          author: post.author,
          citations: post.references?.map((r) => r.url),
          section: post.category,
        }}
      />
      <div className="bp">
        <header className="bp-header">
          <div className="container bp-header-inner">
            <nav className="lp-breadcrumb" aria-label="Breadcrumb">
              <span><Link to="/">Home</Link><span className="lp-sep">/</span></span>
              <span><Link to="/blog">Blog</Link><span className="lp-sep">/</span></span>
              <span aria-current="page">{post.category ?? 'Article'}</span>
            </nav>
            {post.category && <p className="lp-eyebrow">{post.category}</p>}
            <h1>{post.title}</h1>
            <p className="bp-meta">
              <span>By {post.author ?? 'the Alpha Medi Assist billing team'}</span>
              <span><CalendarDays size={16} aria-hidden="true" /> Updated <time dateTime={updated}>{formatDate(updated)}</time></span>
              <span><Clock size={16} aria-hidden="true" /> {readingMinutes(post)} min read</span>
            </p>
          </div>
        </header>

        <div className="container bp-layout">
          <article className="bp-article">
            <div className="bp-lead">
              {post.intro.map((paragraph, index) => (
                <p key={`intro-${index}`}>{paragraph}</p>
              ))}
            </div>

            <nav className="bp-toc bp-toc-inline" aria-label="In this article">
              <p className="bp-toc-title">In this article</p>
              <ol>
                {toc.map((t) => <li key={t.id}><a href={`#${t.id}`}>{t.label}</a></li>)}
              </ol>
            </nav>

            {post.sections.map((section) => (
              <section key={section.heading} id={slugify(section.heading)} className="bp-section">
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph, index) => (
                  <p key={`${section.heading}-${index}`}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="bp-list">
                    {section.bullets.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </section>
            ))}

            <section id="faq" className="bp-section">
              <h2>Frequently asked questions</h2>
              <div className="lp-faqs">
                {post.faqs.map((faq) => (
                  <div key={faq.question} className="lp-faq">
                    <h3 data-faq-q>{faq.question}</h3>
                    <p data-faq-a>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bp-section bp-closing">
              {post.closing.map((paragraph, index) => (
                <p key={`closing-${index}`}>{paragraph}</p>
              ))}
            </section>

            {post.references && post.references.length > 0 && (
              <section id="sources" className="bp-section bp-sources">
                <h2>Sources</h2>
                <ol>
                  {post.references.map((r) => (
                    <li key={r.url}>
                      <a href={r.url} target="_blank" rel="noopener noreferrer">
                        {r.label} <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            <aside className="bp-author" aria-label="About the author">
              <ShieldCheck size={28} aria-hidden="true" />
              <div>
                <p className="bp-author-name">Written by the {BRAND.name} billing team</p>
                <p>
                  Our certified coders and billers manage claims, denials and credentialing for U.S. practices in 90+
                  specialties. Articles are checked against CMS, payer and code-set sources (listed above) and updated when
                  rules change. This article is general information, not legal or payer-specific advice.
                </p>
              </div>
            </aside>

            <section className="bp-section">
              <h2>Related services</h2>
              <ul className="lp-related">
                {(post.related ?? defaultRelated).map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label} <ArrowRight size={16} aria-hidden="true" /></Link>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="bp-sidebar" aria-label="Article tools">
            <nav className="bp-toc" aria-label="Table of contents">
              <p className="bp-toc-title">In this article</p>
              <ol>
                {toc.map((t) => <li key={t.id}><a href={`#${t.id}`}>{t.label}</a></li>)}
              </ol>
            </nav>
            <div className="bp-cta-card">
              <p className="bp-cta-title">Free billing assessment</p>
              <p>We review your denials and aging A/R and show where revenue is leaking. No obligation.</p>
              <Link to="/free-consultation" className="btn btn-primary">Get Free Consultation</Link>
              <a href={`tel:${BRAND.telephone.replace(/-/g, '')}`} className="bp-cta-phone">
                <Phone size={16} aria-hidden="true" /> {BRAND.telephoneDisplay}
              </a>
            </div>
          </aside>
        </div>

        <section className="bp-more">
          <div className="container">
            <h2>More billing guides</h2>
            <div className="bp-cards">
              {relatedPosts.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="bp-card">
                  {p.category && <span className="bp-card-cat">{p.category}</span>}
                  <span className="bp-card-title">{p.title}</span>
                  <span className="bp-card-excerpt">{p.excerpt}</span>
                  <span className="bp-card-meta">{readingMinutes(p)} min read <ArrowRight size={14} aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="lp-cta">
          <div className="container">
            <h2>Stop losing revenue to denials and slow A/R</h2>
            <p>Alpha Medi Assist handles billing, coding, credentialing and A/R follow-up for practices across the U.S.</p>
            <div className="lp-actions lp-actions-center">
              <Link to="/free-consultation" className="btn btn-primary btn-large">Get Free Consultation</Link>
              <Link to="/medical-billing-services" className="btn btn-outline btn-large">Our Billing Services</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogPostDetail
