import { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Sign Out - Contre AI',
  description: 'Signing out of your Contre AI account.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function LogoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

