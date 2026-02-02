import React, { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import PageTitle from '../components/PageTitle'

const Blog: React.FC = () => {
  const blogPosts: Array<never> = []
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

  return (
    <>
      <PageTitle
        title="Healthcare Insights & Updates - Blog | Alpha Medi Assist"
        description="Stay informed with the latest healthcare billing insights, industry trends, and best practices from the Alpha Medi Assist blog."
      />
      <div className="blog-page">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="container">
            <div className="hero-content">
              <h1>Healthcare Insights & Updates</h1>
              <p>Stay informed with the latest trends, tips, and best practices in healthcare revenue management</p>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="blog-section section">
          <div className="container">
            <div className="blog-grid">
              {blogPosts.length === 0 && (
                <div className="card text-center" style={{ padding: '2rem' }}>
                  <h3>Blog posts coming soon</h3>
                  <p>Stay tuned for expert insights on healthcare billing, compliance, and practice management.</p>
                </div>
              )}
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
