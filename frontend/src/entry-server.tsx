/* eslint-disable react-refresh/only-export-components -- server-only build entry, never hot-reloaded */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { HeadContext, type HeadCollector } from './seo/HeadContext'
import { renderHeadTags } from './seo/headTags'
import { globalSchema, faqSchema } from './seo/schema'
import { siteRoutes, redirects } from './seo/routes'
import { blogPosts } from './data/blogPosts'
import { BRAND, SITE_URL } from './seo/site'

export function render(url: string) {
  const collector: HeadCollector = {}
  const html = renderToString(
    <StrictMode>
      <HeadContext.Provider value={collector}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HeadContext.Provider>
    </StrictMode>,
  )
  const head = collector.data
  return {
    html,
    title: head?.title ?? BRAND.name,
    description: head?.description ?? '',
    robots: head?.robots ?? '',
    headTags: head ? renderHeadTags(head) : '',
  }
}

export { globalSchema, faqSchema, siteRoutes, redirects, blogPosts, BRAND, SITE_URL }
