import React, { useState } from 'react'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTitle from '../components/PageTitle'
import { blogPosts } from '../data/blogPosts.ts'
import { readingMinutes, formatDate } from '../utils/blog'
import '../styles/landing.css'
import '../styles/blog.css'

// Newest first; the pricing guide is featured because it answers the most commercial question.
const FEATURED = 'how-much-does-medical-billing-cost'

const Blog: React.FC = () => {
  const [email, setEmail] = useState('')
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      console.log('Newsletter subscription:', email)
      setShowSuccessModal(true)
      setEmail('')
    }
  }

  const featured = blogPosts.find((p) => p.slug === FEATURED)
  const rest = [...blogPosts].reverse().filter((p) => p.slug !== FEATURED)

  return (
    <>
      <PageTitle
        title="Medical Billing & RCM Blog | Alpha Medi Assist"
        description="Practical guides on medical billing costs, claim denial codes, credentialing timelines, coding and revenue cycle management for U.S. practices."
      />
      <div className="blog-page bp">
        <section className="bi-hero">
          <div className="container">
            <p className="lp-eyebrow">Alpha Medi Assist blog</p>
            <h1>Medical Billing &amp; RCM Insights</h1>
            <p>Practical, source-backed guides on billing costs, claim denials, coding and credentialing, written by our billing team for U.S. practice owners and managers.</p>
            <div className="bi-topics" aria-label="Topics">
              {[...new Set(blogPosts.map((p) => p.category).filter(Boolean))].map((c) => <span key={c}>{c}</span>)}
            </div>
          </div>
        </section>

        <section className="bi-list">
          <div className="container">
            {featured && (
              <Link to={`/blog/${featured.slug}`} className="bi-featured">
                <div>
                  <span className="bp-card-cat">Featured guide{featured.category ? ` · ${featured.category}` : ''}</span>
                  <span className="bi-featured-title">{featured.title}</span>
                  <span className="bi-featured-excerpt">{featured.excerpt}</span>
                  <span className="bp-card-meta" style={{ marginTop: '1rem', display: 'inline-flex' }}>
                    Read the guide · {readingMinutes(featured)} min <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
                <div className="bi-featured-side">
                  <strong>Short answer:</strong> {featured.intro[0].replace(/^Short answer:\s*/i, '')}
                </div>
              </Link>
            )}
            <div className="bp-cards">
              {rest.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="bp-card">
                  {post.category && <span className="bp-card-cat">{post.category}</span>}
                  <span className="bp-card-title">{post.title}</span>
                  <span className="bp-card-excerpt">{post.excerpt}</span>
                  <span className="bp-card-meta bi-card-meta">
                    <time dateTime={post.dateModified ?? post.datePublished}>{formatDate(post.dateModified ?? post.datePublished)}</time>
                    <span>{readingMinutes(post)} min read <ArrowRight size={14} aria-hidden="true" /></span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="newsletter-section section bg-light">
          <div className="container">
            <div className="newsletter-content text-center">
              <h2>Stay Updated</h2>
              <p>Subscribe to our newsletter for the latest healthcare billing insights and industry updates</p>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="newsletter-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
              <p className="newsletter-note">
                Stay tuned for expert insights on healthcare billing, compliance, and practice management.
              </p>
            </div>
          </div>
        </section>

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="success-modal-overlay" onClick={() => setShowSuccessModal(false)}>
            <div className="success-modal" onClick={(e) => e.stopPropagation()}>
              <div className="success-modal-content">
                <div className="success-icon">
                  <CheckCircle size={64} />
                </div>
                <h2>Thank You for Subscribing!</h2>
                <p>You've successfully subscribed to our newsletter.</p>
                <p className="success-subtext">You'll now receive the latest healthcare billing insights and industry updates directly to your inbox.</p>
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="btn btn-primary success-close-btn"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Blog
