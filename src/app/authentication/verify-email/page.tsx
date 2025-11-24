import { VerifyEmailClient } from './_components/VerifyEmailClient'

// Force dynamic rendering - this page requires search params
export const dynamic = 'force-dynamic'

export default function VerifyEmailPage() {
  return <VerifyEmailClient />
}
