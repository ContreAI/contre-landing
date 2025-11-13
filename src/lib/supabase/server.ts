import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

function getCookieDomain(): string | undefined {
  // In production, use the domain from env var or default to contre.ai
  // This allows cookies to be shared across:
  // - contre.ai (root domain)
  // - platform.contre.ai, dev.contre.ai, and all other subdomains
  // In development (localhost), don't set domain so cookies work locally
  if (process.env.NODE_ENV === 'development') {
    return undefined
  }
  return process.env.COOKIE_DOMAIN || 'contre.ai'
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
                ...(cookieDomain && { domain: cookieDomain }),
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

