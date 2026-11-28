import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, ClipboardCheck } from 'lucide-react'
import { BRAND } from '../seo/site'
import { LEAD_ANCHOR } from '../utils/leadEvents'
import '../styles/lead.css'

const HIDDEN_ON = ['/free-consultation', '/book-appointment', '/contact']

/** Mobile-only bottom bar: call, or jump to the page's lead form. */
const StickyCta: React.FC = () => {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)
  const [hasForm, setHasForm] = useState(false)

  useEffect(() => {
    setHasForm(!!document.getElementById(LEAD_ANCHOR))
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  if (HIDDEN_ON.includes(pathname.replace(/\/+$/, ''))) return null

  return (
    <div className={`sticky-cta${visible ? ' is-visible' : ''}`} aria-hidden={!visible}>
      <a href={`tel:${BRAND.telephone.replace(/-/g, '')}`} className="sticky-cta-call" tabIndex={visible ? 0 : -1}>
        <Phone size={18} aria-hidden="true" /> Call now
      </a>
      {hasForm ? (
        <a href={`#${LEAD_ANCHOR}`} className="sticky-cta-main" tabIndex={visible ? 0 : -1}>
          <ClipboardCheck size={18} aria-hidden="true" /> Free assessment
        </a>
      ) : (
        <Link to="/free-consultation" className="sticky-cta-main" tabIndex={visible ? 0 : -1}>
          <ClipboardCheck size={18} aria-hidden="true" /> Free assessment
        </Link>
      )}
    </div>
  )
}

export default StickyCta
