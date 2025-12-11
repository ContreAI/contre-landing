'use client'

import { SignupFormProvider } from './_providers/SignupFormProvider'
import { SignupForm } from './_components/SignupForm'
import { AuthLayout } from '@/components/ui/AuthLayout'
import { b2cInitialValues, b2cSignupSchema } from './_schema/signupFormSchema'

export default function SignupPage() {
  return (
    <AuthLayout
      rightPanel={{
        headline: "We're Watching. You're Covered.",
        subtext: "Every contract uploaded to Contre is monitored for critical dates, compliance gaps, and risk factors - so you can focus on closing.",
        stats: [
          "Thousands of deadlines tracked",
          "98%+ extraction accuracy",
          "0 surprises"
        ]
      }}
    >
      <SignupFormProvider
        initialValues={b2cInitialValues}
        validationSchema={b2cSignupSchema}
      >
        {(props) => <SignupForm {...props} />}
      </SignupFormProvider>
    </AuthLayout>
  )
}
