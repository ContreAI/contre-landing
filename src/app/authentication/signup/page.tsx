'use client'

import { SignupFormProvider } from './_providers/SignupFormProvider'
import { SignupForm } from './_components/SignupForm'
import { b2cInitialValues, b2cSignupSchema } from './_schema/signupFormSchema'

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-8 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">Join Contre AI</h1>
          <p className="mt-2 text-gray-600">Create your account to start onboarding.</p>
        </div>

        <SignupFormProvider
          initialValues={b2cInitialValues}
          validationSchema={b2cSignupSchema}
        >
          {(props) => <SignupForm {...props} />}
        </SignupFormProvider>
      </div>
    </div>
  )
}

