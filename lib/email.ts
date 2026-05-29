/**
 * Resend wrapper voor contactformulier-mail.
 * Vereist env var RESEND_API_KEY. Gratis tot 3.000 mails/maand.
 */

import { Resend } from 'resend'
import { business } from '@/content/business'

export type ContactPayload = {
  name: string
  contact: string // tel of email
  message: string
}

// Lazy-init: voorkomt crashes tijdens `next build` als de env var nog niet gezet is.
let _resend: Resend | null = null
function getResend() {
  if (!_resend) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY ontbreekt in environment')
    }
    _resend = new Resend(process.env.RESEND_API_KEY)
  }
  return _resend
}

export async function sendContactEmail(payload: ContactPayload) {
  const html = `
    <h2>Nieuwe aanvraag via de website</h2>
    <p><strong>Van:</strong> ${escape(payload.name)}</p>
    <p><strong>Contact:</strong> ${escape(payload.contact)}</p>
    <hr/>
    <p style="white-space: pre-wrap;">${escape(payload.message)}</p>
  `

  return getResend().emails.send({
    from: `Website <noreply@${new URL(business.url).hostname}>`,
    to: business.email,
    replyTo: payload.contact.includes('@') ? payload.contact : undefined,
    subject: `Nieuwe aanvraag — ${payload.name}`,
    html,
  })
}

function escape(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
