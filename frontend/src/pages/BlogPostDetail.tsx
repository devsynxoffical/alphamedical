import React from 'react'
import { Link, useParams } from 'react-router-dom'
import PageTitle from '../components/PageTitle'
import { blogPosts } from '../data/blogPosts'

const BlogPostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <div className="section">
        <div className="container">
          <div className="card text-center" style={{ padding: '2rem' }}>
            <h2>Article Not Found</h2>
            <p>The blog post you are looking for is not available.</p>
            <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <PageTitle title={post.seoTitle} description={post.seoDescription} />
      <div className="blog-post-page section">
        <div className="container blog-post-container">
          <Link to="/blog" className="blog-back-link">Back to all posts</Link>
          <article className="card blog-post-card">
            <h1>{post.title}</h1>

            {post.intro.map((paragraph, index) => (
              <p key={`intro-${index}`} className="blog-post-paragraph">{paragraph}</p>
            ))}

            {post.sections.map((section) => (
              <section key={section.heading} className="blog-post-section">
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph, index) => (
                  <p key={`${section.heading}-${index}`} className="blog-post-paragraph">{paragraph}</p>
                ))}
              </section>
            ))}

            <section className="blog-post-section">
              <h2>Frequently Asked Questions</h2>
              {post.faqs.map((faq) => (
                <div key={faq.question} className="blog-faq-item">
                  <h3>{faq.question}</h3>
                  <p className="blog-post-paragraph">{faq.answer}</p>
                </div>
              ))}
            </section>

            {post.closing.map((paragraph, index) => (
              <p key={`closing-${index}`} className="blog-post-paragraph">{paragraph}</p>
            ))}
          </article>
        </div>
      </div>
    </>
  )
}

export default BlogPostDetail
