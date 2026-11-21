import React, { useEffect, useId, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CheckCircle, Lock, Send } from 'lucide-react'
import { sendFormSubmission } from '../api/sendFormSubmission'
import { BRAND } from '../seo/site'
import { LEAD_PREFILL_EVENT } from '../utils/leadEvents'
import '../styles/lead.css'

/**
 * Short "free billing assessment" form used on landing, specialty, service and
 * blog pages. Posts to the PHP endpoint as source "Free Assessment Form" and
 * records the page the lead came from.
 */
const LeadForm: React.FC<{ submitLabel?: string }> = ({ submitLabel = 'Get My Free Assessment' }) => {
  const id = useId()
  const { pathname } = useLocation()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  // The revenue calculator can hand its estimate to the form.
  useEffect(() => {
    const onPrefill = (e: Event) => {
      const text = (e as CustomEvent<string>).detail
      if (typeof text === 'string') setMessage(text)
    }
    window.addEventListener(LEAD_PREFILL_EVENT, onPrefill)
    return () => window.removeEventListener(LEAD_PREFILL_EVENT, onPrefill)
  }, [])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const get = (k: string) => String(data.get(k) ?? '').trim()
    setStatus('sending')
    setError('')
    try {
      await sendFormSubmission({
        source: 'Free Assessment Form',
        payload: {
          name: get('name'),
          email: get('email'),
          phone: get('phone'),
          practice: get('practice'),
          monthly_collections: get('monthly_collections'),
          message: get('message'),
          page: pathname,
          company_website: get('company_website'),
        },
      })
      setStatus('sent')
      form.reset()
      setMessage('')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  if (status === 'sent') {
    return (
      <div className="lead-success" role="status">
        <CheckCircle size={40} aria-hidden="true" />
        <h3>Thank you! Your request is in.</h3>
        <p>
          A billing specialist will contact you within 24 hours. Need us sooner? Call{' '}
          <a href={`tel:${BRAND.telephone.replace(/-/g, '')}`}>{BRAND.telephoneDisplay}</a>.
        </p>
      </div>
    )
  }

  return (
    <form className="lead-form" onSubmit={onSubmit} noValidate={false}>
      <div className="lead-row">
        <label htmlFor={`${id}-name`}>
          <span className="lead-lbl">Full name<em aria-hidden="true">*</em></span>
          <input id={`${id}-name`} name="name" type="text" autoComplete="name" required placeholder="Dr. Jane Smith" />
        </label>
        <label htmlFor={`${id}-practice`}>
          <span className="lead-lbl">Practice / specialty</span>
          <input id={`${id}-practice`} name="practice" type="text" autoComplete="organization" placeholder="e.g. Radiology group" />
        </label>
      </div>
      <div className="lead-row">
        <label htmlFor={`${id}-email`}>
          <span className="lead-lbl">Work email<em aria-hidden="true">*</em></span>
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" required placeholder="you@practice.com" />
        </label>
        <label htmlFor={`${id}-phone`}>
          <span className="lead-lbl">Phone</span>
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" placeholder="(555) 123-4567" />
        </label>
      </div>
      <label htmlFor={`${id}-collections`}>
        <span className="lead-lbl">Monthly collections</span>
        <select id={`${id}-collections`} name="monthly_collections" defaultValue="">
          <option value="" disabled>Select a range</option>
          <option>Under $50k</option>
          <option>$50k – $150k</option>
          <option>$150k – $500k</option>
          <option>$500k+</option>
          <option>New practice / not sure</option>
        </select>
      </label>
      <label htmlFor={`${id}-message`}>
        <span className="lead-lbl">What do you need help with?</span>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Denials, aging A/R, credentialing, switching billing companies…"
        />
      </label>
      {/* Honeypot: hidden from people, filled by bots */}
      <div className="lead-hp" aria-hidden="true">
        <label>
          Website
          <input name="company_website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button type="submit" className="lead-submit" disabled={status === 'sending'}>
        <Send size={18} aria-hidden="true" /> {status === 'sending' ? 'Sending…' : submitLabel}
      </button>
      {status === 'error' && <p className="lead-error" role="alert">{error}</p>}
      <p className="lead-privacy">
        <Lock size={14} aria-hidden="true" /> No patient data needed. We reply within 24 hours.
      </p>
    </form>
  )
}

export default LeadForm
