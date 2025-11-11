import { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Sign In - Contre AI',
  description: 'Sign in to your Contre AI account to access AI-powered contract analysis and transaction protection.',
  robots: {
    index: false, // Don't index login pages
    follow: false,
  },
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

