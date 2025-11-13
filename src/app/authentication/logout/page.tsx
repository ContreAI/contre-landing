'use client'

import { useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    async function handleLogout() {
      const supabase = createClient()
      
      // Sign out from Supabase (clears session and cookies)
      await supabase.auth.signOut()
      
      // Redirect to homepage
      router.push('/')
    }

    handleLogout()
  }, [router])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Signing out...</h2>
        <p className="text-gray-600">You will be redirected shortly.</p>
      </div>
    </div>
  )
}

