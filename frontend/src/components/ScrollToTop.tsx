import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../analytics'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    // Wait a tick so <PageTitle> has updated document.title for this route.
    const t = window.setTimeout(() => trackPageView(pathname), 50)
    return () => window.clearTimeout(t)
  }, [pathname])

  return null
}

export default ScrollToTop
