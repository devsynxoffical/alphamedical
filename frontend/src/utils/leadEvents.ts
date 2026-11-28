// Shared between the revenue calculator and the lead form.
export const LEAD_PREFILL_EVENT = 'ama:lead-prefill'
export const LEAD_ANCHOR = 'free-assessment'

/** Put text into the lead form's message box and scroll to the form. */
export function prefillLead(text: string) {
  window.dispatchEvent(new CustomEvent(LEAD_PREFILL_EVENT, { detail: text }))
  document.getElementById(LEAD_ANCHOR)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
