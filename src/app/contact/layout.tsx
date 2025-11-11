import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch with Contre AI',
  description: 'Have questions about Contre? Contact us for support, demos, or general inquiries. We typically respond within 24 hours.',
  keywords: [
    'contact contre',
    'support',
    'demo request',
    'customer service',
    'real estate AI support',
  ],
  openGraph: {
    title: 'Contact Contre AI - We\'re Here to Help',
    description: 'Get in touch with our team for support, demos, or inquiries.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

