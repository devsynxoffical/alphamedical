import { trackEvent } from '../analytics'

type SubmissionPayload = Record<string, string | boolean>

interface SendSubmissionInput {
  source: 'Contact Form' | 'Free Consultation Form' | 'Book Appointment Form' | 'Free Assessment Form'
  payload: SubmissionPayload
}

// Production: same-origin PHP endpoint (public/api/form-submission.php on the
// cPanel host). Local dev: the Node server in server.js. VITE_MAIL_API_URL
// overrides both when set to a non-empty value.
const MAIL_API_BASE_URL =
  import.meta.env.VITE_MAIL_API_URL || (import.meta.env.DEV ? 'http://localhost:8787' : '')

export async function sendFormSubmission({ source, payload }: SendSubmissionInput): Promise<void> {
  const response = await fetch(`${MAIL_API_BASE_URL}/api/form-submission`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ source, payload }),
  })

  if (!response.ok) {
    let message = 'Unable to send form right now.'
    try {
      const body = (await response.json()) as { message?: string }
      if (body?.message) {
        message = body.message
      }
    } catch {
      // Keep fallback message when response is not valid JSON.
    }
    throw new Error(message)
  }

  trackEvent('generate_lead', { form_name: source })
}
