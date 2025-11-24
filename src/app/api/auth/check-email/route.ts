import { NextResponse } from 'next/server'
import { getAdminClient } from '@/lib/supabase/admin'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    console.log('[Check Email API] Checking email:', email)

    if (!email) {
      console.log('[Check Email API] No email provided')
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Use service role to check if user exists
    const supabaseAdmin = getAdminClient()

    // Check if user exists by email using admin API
    // Note: listUsers with email filter
    const { data: { users }, error } = await supabaseAdmin.auth.admin.listUsers()

    if (error) {
      console.error('[Check Email API] Error listing users:', error)
      return NextResponse.json(
        { error: 'Failed to check email', details: error.message },
        { status: 500 }
      )
    }

    // Find user by email
    const userData = users?.find(u => u.email?.toLowerCase() === email.toLowerCase())

    // User not found
    if (!userData) {
      console.log('[Check Email API] User not found, returning exists: false')
      return NextResponse.json({
        exists: false,
        verified: false,
      })
    }

    // User exists
    const verified = !!userData.email_confirmed_at
    console.log('[Check Email API] User found:', {
      exists: true,
      verified,
      email_confirmed_at: userData.email_confirmed_at
    })
    return NextResponse.json({
      exists: true,
      verified,
      userId: userData.id,
    })
  } catch (error) {
    console.error('[Check Email API] Unexpected exception:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

