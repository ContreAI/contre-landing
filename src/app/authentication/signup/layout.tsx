import { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Sign Up - Contre AI',
  description: 'Create your Contre AI account and start protecting your real estate transactions with AI-powered contract analysis.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

