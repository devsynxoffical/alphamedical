import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config({ path: '.env.local' })
dotenv.config()

async function run() {
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

  const to = process.env.TEST_MAIL_TO ?? process.env.MAIL_TO
  if (!to) {
    throw new Error('Set TEST_MAIL_TO or MAIL_TO in .env.local')
  }

  const info = await transporter.sendMail({
    from: `"Alpha Medi Assist Test" <${process.env.SMTP_USER}>`,
    to,
    subject: 'SMTP test from Alpha Medi Assist website',
    text: 'This is a test email sent from the local SMTP integration script.',
    html: '<p>This is a test email sent from the local SMTP integration script.</p>',
  })

  console.log(`Test mail sent: ${info.messageId}`)
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
