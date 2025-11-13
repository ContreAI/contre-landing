import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

function getCookieDomain(): string | undefined {
  // Use COOKIE_DOMAIN from env if set (for local testing with custom domains)
  // Otherwise use default based on NODE_ENV
  if (process.env.COOKIE_DOMAIN) {
    return process.env.COOKIE_DOMAIN
  }
  
  // In production, default to .contre.ai
  if (process.env.NODE_ENV === 'production') {
    return '.contre.ai'
  }
  
  // In development without COOKIE_DOMAIN set, don't set domain (localhost only)
  return undefined
}

export async function createClient() {
  const cookieStore = await cookies()
  const cookieDomain = getCookieDomain()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      db: {
        schema: 'app',
      },
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              const cookieOptions = {
                ...options,
                ...(cookieDomain && { 
                  domain: cookieDomain,
                  // In local dev (http), use 'lax'. In production (https), use 'none'
                  sameSite: process.env.NODE_ENV === 'production' ? 'none' as const : 'lax' as const,
                  secure: process.env.NODE_ENV === 'production',
                }),
              }
              cookieStore.set(name, value, cookieOptions)
            })
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}

