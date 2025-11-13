import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

function getCookieDomain(): string | undefined {
  // IMPORTANT: Only NEXT_PUBLIC_* env vars work in middleware!
  // Use NEXT_PUBLIC_COOKIE_DOMAIN for custom domains in development
  if (process.env.NEXT_PUBLIC_COOKIE_DOMAIN) {
    return process.env.NEXT_PUBLIC_COOKIE_DOMAIN
  }
  
  // In production, default to .contre.ai
  if (process.env.NODE_ENV === 'production') {
    return '.contre.ai'
  }
  
  // In development without COOKIE_DOMAIN set, don't set domain (localhost only)
  return undefined
}

export async function updateSession(request: NextRequest) {
  console.log('[Middleware] ========== CALLED ==========')
  console.log('[Middleware] Path:', request.nextUrl.pathname)
  console.log('[Middleware] Method:', request.method)
  
  let supabaseResponse = NextResponse.next({
    request,
  })

  const cookieDomain = getCookieDomain()
  console.log('[Middleware] Cookie domain:', cookieDomain)
  console.log('[Middleware] NEXT_PUBLIC_COOKIE_DOMAIN:', process.env.NEXT_PUBLIC_COOKIE_DOMAIN)
  console.log('[Middleware] NODE_ENV:', process.env.NODE_ENV)

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
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
            console.log('[Middleware] Setting cookie:', name, 'with options:', cookieOptions)
            supabaseResponse.cookies.set(name, value, cookieOptions)
          })
        },
      },
    }
  )

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Protected routes (require authentication)
  const protectedRoutes = ['/onboarding', '/dashboard', '/settings', '/profile', '/transactions', '/admin']
  const isProtectedRoute = protectedRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  )

  // Redirect to login if accessing protected route without auth
  if (!user && isProtectedRoute) {
    const url = request.nextUrl.clone()
    url.pathname = '/authentication/login'
    url.searchParams.set('redirectTo', request.nextUrl.pathname)
    return NextResponse.redirect(url)
  }

  // Redirect authenticated users away from login/signup pages
  if (user && (request.nextUrl.pathname === '/authentication/login' || request.nextUrl.pathname === '/authentication/signup')) {
    // Check if there's a redirectTo param (coming from platform/workspace)
    const redirectTo = request.nextUrl.searchParams.get('redirectTo')
    
    if (redirectTo) {
      // User is already logged in and came from workspace - send them back
      return NextResponse.redirect(redirectTo)
    } else {
      // User is already logged in and accessing login directly - go to dashboard
      const url = request.nextUrl.clone()
      url.pathname = '/dashboard'
      return NextResponse.redirect(url)
    }
  }

  if (user && request.nextUrl.pathname === '/') {
    const url = request.nextUrl.clone()
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }

  // IMPORTANT: You *must* return the supabaseResponse object as it is. If you're
  // creating a new response object with NextResponse.next() make sure to:
  // 1. Pass the request in it, like so:
  //    const myNewResponse = NextResponse.next({ request })
  // 2. Copy over the cookies, like so:
  //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
  // 3. Change the myNewResponse object to fit your needs, but avoid changing
  //    the cookies!
  // 4. Finally:
  //    return myNewResponse
  // If this is not done, you may be causing the browser and server to go out
  // of sync and terminate the user's session prematurely!

  return supabaseResponse
}

