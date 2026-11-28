import { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { HeadContext, type HeadData } from '../seo/HeadContext'
import { renderHeadTags } from '../seo/headTags'
import { pageSchema, type PageSchemaInput } from '../seo/schema'
import { BRAND, absoluteUrl } from '../seo/site'

interface PageTitleProps {
  title: string
  description?: string
  /** Override canonical path (defaults to the current route path). */
  path?: string
  /** Absolute or root-relative social share image. */
  image?: string
  noindex?: boolean
  ogType?: 'website' | 'article'
  article?: PageSchemaInput['article']
}

/**
 * Per-page SEO head manager: <title>, meta description, canonical, robots,
 * Open Graph / Twitter tags and JSON-LD (WebPage, BreadcrumbList, Service,
 * BlogPosting). FAQPage schema is added at build time from the rendered FAQ
 * markup (see scripts/prerender.mjs).
 */
const PageTitle: React.FC<PageTitleProps> = ({ title, description, path, image, noindex, ogType, article }) => {
  const location = useLocation()
  const collector = useContext(HeadContext)
  const rawPath = path ?? location.pathname
  const canonicalPath = rawPath !== '/' ? rawPath.replace(/\/+$/, '') : rawPath

  const data: HeadData = {
    title,
    description,
    canonical: absoluteUrl(canonicalPath),
    robots: noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    ogType: ogType ?? (article ? 'article' : 'website'),
    image: absoluteUrl(image ?? BRAND.ogImagePath),
    jsonLd: noindex ? [] : [pageSchema({ path: canonicalPath, title, description, image, article })],
  }

  // Build-time prerender: hand the data to the collector synchronously.
  if (collector) collector.data = data

  const serialized = renderHeadTags(data)

  useEffect(() => {
    document.title = title
    // Keep the build-time FAQ schema only on the page it was generated for.
    document.head.querySelectorAll('[data-seo]').forEach((el) => {
      const keep = el.hasAttribute('data-seo-faq') && el.getAttribute('data-seo-faq') === canonicalPath
      if (!keep) el.remove()
    })
    document.head.insertAdjacentHTML('beforeend', serialized)
  }, [title, serialized, canonicalPath])

  return null
}

export default PageTitle
