import React from 'react'
import { Link, useParams } from 'react-router-dom'
import PageTitle from '../components/PageTitle'
import { blogPosts } from '../data/blogPosts'
import NotFound from './NotFound'
import '../styles/landing.css'

const defaultRelated = [
  { label: 'Outsourced medical billing services', path: '/medical-billing-services' },
  { label: 'Revenue cycle management services', path: '/revenue-cycle-management-services' },
  { label: 'Common denial codes and how to fix them', path: '/blog/common-claim-denial-codes-and-how-to-fix-them' },
]

const BlogPostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return <NotFound />
  }

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
        }}
      />
      <div className="blog-post-page section">
        <div className="container blog-post-container">
          <Link to="/blog" className="blog-back-link">Back to all posts</Link>
          <article className="card blog-post-card">
            <h1>{post.title}</h1>
            <p className="blog-post-meta" style={{ color: 'var(--sleek-text-muted, #64748b)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              By {post.author ?? 'the Alpha Medi Assist billing team'} ·{' '}
              <time dateTime={post.dateModified ?? post.datePublished}>
                Updated {new Date(`${post.dateModified ?? post.datePublished}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}
              </time>
            </p>

            {post.intro.map((paragraph, index) => (
              <p key={`intro-${index}`} className="blog-post-paragraph">{paragraph}</p>
            ))}

            {post.sections.map((section) => (
              <section key={section.heading} className="blog-post-section">
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph, index) => (
                  <p key={`${section.heading}-${index}`} className="blog-post-paragraph">{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="blog-post-list">
                    {section.bullets.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </section>
            ))}

            <section className="blog-post-section">
              <h2>Frequently Asked Questions</h2>
              {post.faqs.map((faq) => (
                <div key={faq.question} className="blog-faq-item">
                  <h3 data-faq-q>{faq.question}</h3>
                  <p data-faq-a className="blog-post-paragraph">{faq.answer}</p>
                </div>
              ))}
            </section>

            {post.closing.map((paragraph, index) => (
              <p key={`closing-${index}`} className="blog-post-paragraph">{paragraph}</p>
            ))}

            <section className="blog-post-section">
              <h2>Related services and guides</h2>
              <ul className="blog-post-list">
                {(post.related ?? defaultRelated).map((link) => (
                  <li key={link.path}><Link to={link.path}>{link.label}</Link></li>
                ))}
                {blogPosts
                  .filter((p) => p.slug !== post.slug)
                  .slice(0, 3)
                  .map((p) => (
                    <li key={p.slug}><Link to={`/blog/${p.slug}`}>{p.title}</Link></li>
                  ))}
              </ul>
            </section>
          </article>
        </div>
      </div>
    </>
  )
}

export default BlogPostDetail
