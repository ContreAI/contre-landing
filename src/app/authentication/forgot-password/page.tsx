'use client'

import { ForgotPasswordProvider } from './_providers/ForgotPasswordProvider'
import { ForgotPasswordForm } from './_components/ForgotPasswordForm'

export default function ForgotPasswordPage() {
  return (
    <ForgotPasswordProvider>
      {(props) => <ForgotPasswordForm {...props} />}
    </ForgotPasswordProvider>
  )
}

