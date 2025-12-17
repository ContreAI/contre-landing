import { createBrowserClient } from '@supabase/ssr'

function getCookieDomain(): string | undefined {
  // Use NEXT_PUBLIC_COOKIE_DOMAIN if set (for custom local domains)
  if (process.env.NEXT_PUBLIC_COOKIE_DOMAIN) {
    return process.env.NEXT_PUBLIC_COOKIE_DOMAIN;
  }

  // Check if we're on a local.contre.ai subdomain (development)
  if (typeof window !== 'undefined' && window.location.hostname.includes('local.contre.ai')) {
    return '.local.contre.ai';
  }

  // Check if we're on a contre.ai subdomain (production, excluding local)
  if (
    typeof window !== 'undefined' &&
    window.location.hostname.includes('contre.ai') &&
    !window.location.hostname.includes('local.contre.ai')
  ) {
    return '.contre.ai';
  }

  // In production, default to .contre.ai
  if (process.env.NODE_ENV === 'production') {
    return '.contre.ai';
  }

  return undefined;
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

  // Client-side: Use custom cookie handlers with domain configuration
  const client = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          const cookies = document.cookie.split('; ')
            .filter(cookie => cookie)
            .map(cookie => {
              const [name, ...valueParts] = cookie.split('=')
              return { name, value: valueParts.join('=') }
            })
            .filter(cookie => cookie.name)
          
          return cookies
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            // Determine if we should use secure flag (only for HTTPS)
            // Note: Secure cookies won't work on HTTP, so only set it for HTTPS
            const isSecure = typeof window !== 'undefined' && window.location.protocol === 'https:';

            const cookieOptions = {
              ...options,
              ...(cookieDomain
                ? {
                    domain: cookieDomain,
                    path: '/',
                    sameSite: 'lax' as const,
                    secure: isSecure,
                  }
                : {
                    path: '/',
                    sameSite: 'lax' as const,
                    secure: isSecure,
                  }),
            };

            const parts = [
              `${name}=${value}`,
              cookieOptions.domain && `domain=${cookieOptions.domain}`,
              `path=${cookieOptions.path || '/'}`,
              cookieOptions.maxAge && `max-age=${cookieOptions.maxAge}`,
              cookieOptions.sameSite && `samesite=${cookieOptions.sameSite}`,
              cookieOptions.secure && 'Secure',
            ].filter(Boolean);

            const cookieString = parts.join('; ');
            console.log(
              `[Supabase] Setting cookie: ${name} with domain: ${cookieOptions.domain}, secure: ${cookieOptions.secure}`
            );
            document.cookie = cookieString;
          })
        },
      },
    }
  )
  
  return client
}

