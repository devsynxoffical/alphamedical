import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { preloadPageFor } from './pageRegistry'
import { initAnalytics } from './analytics'

initAnalytics()

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Pages are prerendered to static HTML at build time (scripts/prerender.mjs);
// hydrate that markup instead of re-rendering from scratch.
// The current page's code is loaded first, so hydration matches the static markup.
if (container.firstElementChild) {
  preloadPageFor(window.location.pathname).finally(() => hydrateRoot(container, app))
} else {
  createRoot(container).render(app)
}
