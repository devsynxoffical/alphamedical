// JSON-LD builders (schema.org). Entities are linked by @id so search engines
// and AI answer engines see one consistent "Alpha Medi Assist" entity graph.
import { BRAND, ORG_ID, WEBSITE_ID, SITE_URL, absoluteUrl } from './site'
import { breadcrumbTrail, findRoute } from './routeMeta'

type JsonLd = Record<string, unknown>

const postalAddress = (loc: (typeof BRAND.locations)[number]) => ({
  '@type': 'PostalAddress',
  streetAddress: loc.streetAddress,
  addressLocality: loc.addressLocality,
  addressRegion: loc.addressRegion,
  postalCode: loc.postalCode,
  addressCountry: loc.addressCountry,
})

/** Site-wide entities: Organization, two local offices, WebSite. */
export const globalSchema = (): JsonLd => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': ORG_ID,
      name: BRAND.name,
      alternateName: BRAND.alternateNames,
      legalName: BRAND.legalName,
      url: `${SITE_URL}/`,
      logo: { '@type': 'ImageObject', url: absoluteUrl(BRAND.logoPath) },
      image: absoluteUrl(BRAND.ogImagePath),
      description: BRAND.description,
      email: BRAND.email,
      telephone: BRAND.telephone,
      address: postalAddress(BRAND.locations[0]),
      areaServed: { '@type': 'Country', name: BRAND.areaServed },
      knowsAbout: BRAND.knowsAbout,
      sameAs: BRAND.sameAs,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: BRAND.telephone,
        email: BRAND.email,
        contactType: 'sales',
        areaServed: 'US',
        availableLanguage: ['English'],
      },
      subOrganization: BRAND.locations.map((loc) => ({ '@id': `${SITE_URL}/#${loc.id}` })),
    },
    ...BRAND.locations.map((loc) => ({
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#${loc.id}`,
      name: loc.name,
      parentOrganization: { '@id': ORG_ID },
      url: `${SITE_URL}/contact`,
      telephone: BRAND.telephone,
      email: BRAND.email,
      image: absoluteUrl(BRAND.ogImagePath),
      address: postalAddress(loc),
      areaServed: { '@type': 'Country', name: BRAND.areaServed },
    })),
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: BRAND.name,
      publisher: { '@id': ORG_ID },
      inLanguage: 'en-US',
    },
  ],
})

export interface PageSchemaInput {
  path: string
  title: string
  description?: string
  image?: string
  article?: { headline: string; datePublished?: string; dateModified?: string; author?: string; citations?: string[]; section?: string }
}

/** Per-page graph: WebPage + BreadcrumbList + Service / BlogPosting as appropriate. */
export const pageSchema = ({ path, title, description, image, article }: PageSchemaInput): JsonLd => {
  const url = absoluteUrl(path)
  const route = findRoute(path)
  const graph: JsonLd[] = []
  const trail = breadcrumbTrail(path)

  const webPage: JsonLd = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: 'en-US',
  }
  if (description) webPage.description = description
  if (image) webPage.primaryImageOfPage = { '@type': 'ImageObject', url: absoluteUrl(image) }
  if (path === '/about-us') webPage['@type'] = 'AboutPage'
  if (path === '/contact') webPage['@type'] = 'ContactPage'
  if (route?.kind === 'hub' || route?.kind === 'blog-index') webPage['@type'] = 'CollectionPage'
  if (trail.length) webPage.breadcrumb = { '@id': `${url}#breadcrumb` }
  graph.push(webPage)

  if (trail.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: trail.map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.path),
      })),
    })
  }

  if (route?.serviceType) {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: route.kind === 'home' ? 'Medical Billing Services' : route.label,
      serviceType: route.serviceType,
      description,
      url,
      provider: { '@id': ORG_ID },
      areaServed: route.areaServed
        ? { '@type': 'State', name: route.areaServed, containedInPlace: { '@type': 'Country', name: BRAND.areaServed } }
        : { '@type': 'Country', name: BRAND.areaServed },
      audience: { '@type': 'BusinessAudience', audienceType: 'Physician practices, clinics and healthcare providers' },
    })
    webPage.mainEntity = { '@id': `${url}#service` }
  }

  if (article) {
    graph.push({
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: article.headline,
      description,
      url,
      mainEntityOfPage: { '@id': `${url}#webpage` },
      image: absoluteUrl(image || BRAND.ogImagePath),
      datePublished: article.datePublished,
      dateModified: article.dateModified || article.datePublished,
      author: article.author
        ? { '@type': 'Person', name: article.author, worksFor: { '@id': ORG_ID } }
        : { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      inLanguage: 'en-US',
      ...(article.section ? { articleSection: article.section } : {}),
      ...(article.citations?.length ? { citation: article.citations } : {}),
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

export const faqSchema = (path: string, faqs: { question: string; answer: string }[]): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${absoluteUrl(path)}#faq`,
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
})
