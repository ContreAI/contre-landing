import { createBrowserClient } from '@supabase/ssr'

function getCookieDomain(): string | undefined {
  // Use NEXT_PUBLIC_COOKIE_DOMAIN if set (for custom local domains)
  if (process.env.NEXT_PUBLIC_COOKIE_DOMAIN) {
    return process.env.NEXT_PUBLIC_COOKIE_DOMAIN
  }
  
  // In production, default to .contre.ai
  if (process.env.NODE_ENV === 'production') {
    return '.contre.ai'
  }
  
  return undefined
}

export function createClient() {
  const cookieDomain = getCookieDomain()
  
  // Server-side: use default client without custom cookie handling
  if (typeof window === 'undefined') {
    return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    )
  }
  
  // Client-side: use custom cookie handling with domain
  console.log('[Browser Client] Cookie domain:', cookieDomain)
  
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name) {
          return document.cookie
            .split('; ')
            .find(row => row.startsWith(`${name}=`))
            ?.split('=')[1]
        },
        set(name, value, options) {
          const cookieOptions = {
            ...options,
            ...(cookieDomain && {
              domain: cookieDomain,
              sameSite: 'lax', // Works with both HTTP and HTTPS
              // No secure flag - allows cookies over HTTP
            }),
          }
          
          console.log('[Browser Client] Setting cookie:', name, 'domain:', cookieOptions.domain)
          
          const cookieString = [
            `${name}=${value}`,
            cookieOptions.domain && `domain=${cookieOptions.domain}`,
            `path=${cookieOptions.path || '/'}`,
            cookieOptions.maxAge && `max-age=${cookieOptions.maxAge}`,
            cookieOptions.sameSite && `samesite=${cookieOptions.sameSite}`,
            cookieOptions.secure && 'secure',
          ]
            .filter(Boolean)
            .join('; ')
          
          document.cookie = cookieString
        },
        remove(name, options) {
          const cookieOptions = {
            ...options,
            ...(cookieDomain && { domain: cookieDomain }),
          }
          
          const cookieString = [
            `${name}=`,
            cookieOptions.domain && `domain=${cookieOptions.domain}`,
            `path=${cookieOptions.path || '/'}`,
            'max-age=0',
          ]
            .filter(Boolean)
            .join('; ')
          
          document.cookie = cookieString
        },
      },
    }
  )
}

