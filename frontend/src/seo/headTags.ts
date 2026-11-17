import type { HeadData } from './HeadContext'
import { BRAND } from './site'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// JSON inside <script> must not be able to close the tag.
const safeJson = (obj: unknown) => JSON.stringify(obj).replace(/</g, '\\u003c')

/**
 * Head tags for one page as an HTML string. Every tag carries data-seo so the
 * client can swap them on navigation; the same string is injected into the
 * static HTML at build time, so crawlers and the browser see identical tags.
 */
export const renderHeadTags = (d: HeadData): string => {
  const tags = [
    d.description ? `<meta data-seo name="description" content="${esc(d.description)}">` : '',
    `<meta data-seo name="robots" content="${d.robots}">`,
    d.robots.startsWith('noindex') ? '' : `<link data-seo rel="canonical" href="${esc(d.canonical)}">`,
    `<meta data-seo property="og:site_name" content="${esc(BRAND.name)}">`,
    `<meta data-seo property="og:locale" content="en_US">`,
    `<meta data-seo property="og:type" content="${d.ogType}">`,
    `<meta data-seo property="og:title" content="${esc(d.title)}">`,
    d.description ? `<meta data-seo property="og:description" content="${esc(d.description)}">` : '',
    `<meta data-seo property="og:url" content="${esc(d.canonical)}">`,
    `<meta data-seo property="og:image" content="${esc(d.image)}">`,
    `<meta data-seo name="twitter:card" content="summary_large_image">`,
    `<meta data-seo name="twitter:title" content="${esc(d.title)}">`,
    d.description ? `<meta data-seo name="twitter:description" content="${esc(d.description)}">` : '',
    `<meta data-seo name="twitter:image" content="${esc(d.image)}">`,
    ...d.jsonLd.map((j) => `<script data-seo type="application/ld+json">${safeJson(j)}</script>`),
  ]
  return tags.filter(Boolean).join('\n    ')
}

export const escapeHtml = esc
