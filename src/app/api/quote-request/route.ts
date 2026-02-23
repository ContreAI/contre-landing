import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
    const body = await request.json()
    const { transactionVolume, agentCount, brokerageName, contactName, email, location } = body

    if (!contactName || !email || !brokerageName) {
      return NextResponse.json(
        { error: 'Contact name, email, and brokerage name are required' },
        { status: 400 }
      )
    }

    const tierLabel = transactionVolume > 100
      ? 'Enterprise (100+)'
      : transactionVolume <= 20
        ? 'Starter (up to 20)'
        : transactionVolume <= 50
          ? 'Growth (up to 50)'
          : 'Professional (up to 100)'

    await sgMail.send({
      from: { email: 'noreply@contre.ai', name: 'Contre AI' },
      to: 'ct@contre.ai',
      replyTo: email,
      subject: `Brokerage Quote Request — ${brokerageName}`,
      html: `
        <h2>New Brokerage Quote Request</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Contact</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${contactName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Brokerage</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${brokerageName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Location</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${location || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Agents</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${agentCount || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Monthly Volume</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${transactionVolume > 100 ? '100+' : transactionVolume} transactions</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold;">Suggested Tier</td>
            <td style="padding: 8px 12px;">${tierLabel}</td>
          </tr>
        </table>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">Sent from the Contre AI pricing page</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Quote Request API] Error:', error)
    return NextResponse.json(
      { error: 'Failed to send quote request' },
      { status: 500 }
    )
  }
}
