'use client'

import { Suspense } from 'react'
import { LoginFormProvider } from './_providers/LoginFormProvider'
import { LoginForm } from './_components/LoginForm'
import { AuthLayout } from '@/components/ui/AuthLayout'
import { Loader2 } from 'lucide-react'

function LoginFormContent() {
  return (
    <LoginFormProvider>
      {({ isLoading, error }) => (
        <LoginForm isLoading={isLoading} error={error} />
      )}
    </LoginFormProvider>
  )
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa]">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin text-[#1a4a4a] mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Loading...
            </h2>
            <p className="text-sm text-gray-600">Please wait</p>
          </div>
        </div>
      }
    >
      <AuthLayout
        rightPanel={{
          headline: "Welcome Back.",
          subtext: "We had your back, while you were asleep."
        }}
      >
        <LoginFormContent />
      </AuthLayout>
    </Suspense>
  )
}
