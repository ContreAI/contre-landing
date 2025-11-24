import { Suspense } from 'react'
import { VerifyEmailClient } from './_components/VerifyEmailClient'
import { Loader2 } from 'lucide-react'

export default function VerifyEmailPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Loading...
            </h2>
            <p className="text-sm text-gray-600">Please wait</p>
          </div>
        </div>
      }
    >
      <VerifyEmailClient />
    </Suspense>
  )
}
