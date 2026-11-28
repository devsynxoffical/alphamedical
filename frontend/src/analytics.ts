// GA4 lead tracking. Inactive until VITE_GA_MEASUREMENT_ID is set (GitHub
// Actions variable), so no third-party script loads without a property.
//
// Events sent:
//   page_view       on every route change (SPA navigation)
//   generate_lead   after a form is successfully submitted (form_name = source)
//   click_to_call   on tel: link clicks
//   email_click     on mailto: link clicks
// Mark `generate_lead` as a key event (conversion) in GA4.

type GtagArgs = [string, ...unknown[]]
declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: GtagArgs) => void
  }
}

const GA_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined)?.trim() || ''
let started = false

export const analyticsEnabled = () => GA_ID !== '' && typeof window !== 'undefined'

export function initAnalytics() {
  if (!analyticsEnabled() || started) return
  started = true
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: GtagArgs) {
    window.dataLayer!.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, { send_page_view: false })

  const load = () => {
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`
    document.head.appendChild(s)
  }
  // Load after the page is interactive so it never delays first paint.
  if (document.readyState === 'complete') setTimeout(load, 0)
  else window.addEventListener('load', load, { once: true })

  // Phone and email clicks anywhere on the site.
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement | null)?.closest?.('a')
    const href = a?.getAttribute('href') || ''
    if (href.startsWith('tel:')) trackEvent('click_to_call', { link_url: href, page_path: location.pathname })
    else if (href.startsWith('mailto:')) trackEvent('email_click', { link_url: href, page_path: location.pathname })
  })
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (!analyticsEnabled() || !window.gtag) return
  window.gtag('event', name, params)
}

export function trackPageView(path: string) {
  trackEvent('page_view', { page_path: path, page_location: location.href, page_title: document.title })
}
