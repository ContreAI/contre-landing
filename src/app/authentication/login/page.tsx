'use client'

import { LoginFormProvider } from './_providers/LoginFormProvider'
import { LoginForm } from './_components/LoginForm'

export default function LoginPage() {
  return (
    <LoginFormProvider>
      {({ isLoading, error }) => (
        <LoginForm isLoading={isLoading} error={error} />
      )}
    </LoginFormProvider>
  )
}

