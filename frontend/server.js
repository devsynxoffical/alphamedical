import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import nodemailer from 'nodemailer'

dotenv.config({ path: '.env.local' })
dotenv.config()

const app = express()
const preferredPort = Number(process.env.API_PORT ?? 8787)
const fallbackPortCount = Number(process.env.API_PORT_FALLBACKS ?? 3)

app.use(cors())
app.use(express.json())

const requiredEnvVars = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'MAIL_TO',
]

const missingVars = requiredEnvVars.filter((envName) => !process.env[envName])
if (missingVars.length > 0) {
  console.warn(`Missing env vars: ${missingVars.join(', ')}`)
}

const smtpPort = Number(process.env.SMTP_PORT ?? 465)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

const buildHtml = ({ source, payload, submittedAt }) => `
  <h2>New Form Submission: ${source}</h2>
  <p><strong>Submitted At:</strong> ${submittedAt}</p>
  <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
    ${Object.entries(payload)
      .map(
        ([key, value]) =>
          `<tr><td><strong>${key}</strong></td><td>${String(value ?? '')}</td></tr>`,
      )
      .join('')}
  </table>
`

app.post('/api/form-submission', async (req, res) => {
  try {
    const { source, payload } = req.body ?? {}

    if (!source || typeof source !== 'string' || !payload || typeof payload !== 'object') {
      return res.status(400).json({ ok: false, message: 'Invalid request payload.' })
    }

    const submittedAt = new Date().toISOString()
    const textBody = [
      `New Form Submission: ${source}`,
      `Submitted At: ${submittedAt}`,
      '',
      ...Object.entries(payload).map(([key, value]) => `${key}: ${String(value ?? '')}`),
    ].join('\n')

    await transporter.sendMail({
      from: `"Alpha Medi Assist Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: typeof payload.email === 'string' ? payload.email : process.env.SMTP_USER,
      subject: `New ${source} submission`,
      text: textBody,
      html: buildHtml({ source, payload, submittedAt }),
    })

    return res.json({ ok: true })
  } catch (error) {
    console.error('Email send failed:', error)
    return res.status(500).json({ ok: false, message: 'Failed to send email.' })
  }
})

app.get('/health', (_req, res) => {
  res.json({ ok: true })
})

const candidatePorts = Array.from(
  { length: Math.max(1, fallbackPortCount + 1) },
  (_, index) => preferredPort + index,
)

function startServer(portIndex = 0) {
  if (portIndex >= candidatePorts.length) {
    console.error(`Mail API failed to bind any port: ${candidatePorts.join(', ')}`)
    process.exit(1)
  }

  const currentPort = candidatePorts[portIndex]
  const server = app.listen(currentPort)

  server.once('listening', () => {
    const note = currentPort === preferredPort
      ? ''
      : ` (fallback from ${preferredPort})`
    console.log(`Mail API running at http://localhost:${currentPort}${note}`)
  })

  server.on('error', (error) => {
    if (error?.code === 'EADDRINUSE') {
      console.warn(`Port ${currentPort} is busy, trying next port...`)
      startServer(portIndex + 1)
      return
    }

    console.error('Mail API server error:', error)
    process.exit(1)
  })
}

startServer()

process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error)
})

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled rejection:', reason)
})
