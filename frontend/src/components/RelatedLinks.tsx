import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/landing.css'

import type { RelatedLink } from '../data/relatedLinks'

/** Internal-linking block: spreads link equity to money pages and guides. */
const RelatedLinks: React.FC<{ title?: string; links: RelatedLink[] }> = ({ title = 'Related services and resources', links }) => (
  <section className="related-links" aria-label={title}>
    <div className="container">
      <h2>{title}</h2>
      <ul>
        {links.map((l) => (
          <li key={l.path}>
            <Link to={l.path}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default RelatedLinks
