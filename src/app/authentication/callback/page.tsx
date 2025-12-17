'use client'

import { useEffect, useState, useRef, Suspense, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Loader2, AlertCircle, CheckCircle } from 'lucide-react'

// Force dynamic rendering - this page requires search params
export const dynamic = 'force-dynamic'

function CallbackContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const supabase = createClient()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const isProcessingRef = useRef(false)
  
  // Helper to verify cookies are set correctly and accessible
  const verifyCookiesSet = useCallback(async (retries: number = 0): Promise<boolean> => {
    const maxRetries = 5
    const retryDelay = 300
    
    // Check if auth cookies exist
    const cookies = document.cookie.split('; ').map(c => c.split('=')[0])
    const authCookieNames = cookies.filter(name => name.startsWith('sb-') && name.includes('-auth-token'))
    const hasAuthCookie = authCookieNames.length > 0
    
    if (hasAuthCookie) {
      console.log('[Callback] Auth cookies found:', authCookieNames)
      
      // Verify that we can actually read the session (cookies are accessible)
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        console.log('[Callback] Session is accessible via cookies - cookies are properly set')
        return true
      } else {
        console.warn(`[Callback] Cookies exist but session is not accessible (retry ${retries}/${maxRetries})`)
        
        // Retry if we haven't exceeded max retries
        if (retries < maxRetries) {
          await new Promise(resolve => setTimeout(resolve, retryDelay))
          return verifyCookiesSet(retries + 1)
        }
        
        return false
      }
    }
    
    console.warn(`[Callback] No auth cookies found (retry ${retries}/${maxRetries})`)
    
    // Retry if we haven't exceeded max retries
    if (retries < maxRetries) {
      await new Promise(resolve => setTimeout(resolve, retryDelay))
      return verifyCookiesSet(retries + 1)
    }
    
    return false
  }, [supabase])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let authListener: { data: { subscription: any } } | null = null

    const handleCallback = async () => {
      // Prevent duplicate processing (React strict mode in dev causes double renders)
      if (isProcessingRef.current) {
        console.log('[Callback] Already processing, skipping...')
        return
      }
      isProcessingRef.current = true
      try {
        // Check for hash parameters (email verification tokens come in hash)
        const hash = window.location.hash
        const fullUrl = window.location.href
        console.log('[Callback] Full URL:', fullUrl)
        console.log('[Callback] Hash:', hash)
        console.log('[Callback] Search params:', window.location.search)
        
        const hashParams = new URLSearchParams(hash.substring(1))
        const accessToken = hashParams.get('access_token')
        const refreshToken = hashParams.get('refresh_token')
        const type = hashParams.get('type')
        const error = hashParams.get('error')
        const errorDescription = hashParams.get('error_description')
        
        console.log('[Callback] Hash params:', {
          hasAccessToken: !!accessToken,
          hasRefreshToken: !!refreshToken,
          type,
          error,
          errorDescription
        })

        // Check for error in hash
        if (error) {
          console.error('[Callback] Error in hash:', error, errorDescription)
          setStatus('error')
          setErrorMessage(errorDescription || error || 'Authentication failed')
          timeoutId = setTimeout(() => {
            router.push(`/authentication/login?error=${encodeURIComponent(error)}`)
          }, 3000)
          return
        }

        // Check for error in query params
        const queryError = searchParams?.get('error')
        if (queryError) {
          console.error('[Callback] Error in query:', queryError)
          setStatus('error')
          setErrorMessage('Authentication failed')
          timeoutId = setTimeout(() => {
            router.push(`/authentication/login?error=${encodeURIComponent(queryError)}`)
          }, 3000)
          return
        }

        // Check for token in query params (email verification flow)
        const token = searchParams?.get('token')
        const tokenType = searchParams?.get('type')
        
        if (token && tokenType) {
          console.log('[Callback] Found token in query params, type:', tokenType)
          
          try {
            // Verify OTP token (for email verification)
            const { data, error: verifyError } = await supabase.auth.verifyOtp({
              token_hash: token,
              type: tokenType as 'signup' | 'email' | 'recovery' | 'invite' | 'magiclink' | 'email_change',
            })
            
            if (verifyError) {
              console.error('[Callback] Error verifying token:', verifyError)
              
              // If token is already used/expired, Supabase may have already verified the email
              // Check if we can get the user - if yes, email is verified, just redirect to login
              if (verifyError.message?.includes('already been used') || 
                  verifyError.message?.includes('expired') ||
                  verifyError.message?.includes('invalid') ||
                  verifyError.message?.includes('code verifier') ||
                  verifyError.message?.includes('code_verifier')) {
                
                console.log('[Callback] Token error, but checking if email was already verified...')
                // Try to get user - if successful, email is verified
                const { data: { user }, error: userError } = await supabase.auth.getUser()
                
                if (!userError && user) {
                  console.log('[Callback] User exists - email is verified! Redirecting to login')
                  setStatus('success')
                  const url = new URL(window.location.href)
                  url.searchParams.delete('token')
                  url.searchParams.delete('type')
                  window.history.replaceState(null, '', url.pathname + url.search)
                  
                  timeoutId = setTimeout(() => {
                    router.push('/authentication/login?verified=true')
                  }, 1500)
                  return
                }
              }
              
              // Handle rate limit specifically
              if (verifyError.message?.includes('rate limit') || verifyError.status === 429) {
                setStatus('error')
                setErrorMessage('Too many verification attempts. Please wait a few minutes and try again, or request a new verification email.')
                timeoutId = setTimeout(() => {
                  router.push('/authentication/login?error=rate_limit')
                }, 5000)
                return
              }
              
              // Generic error - but still check if user exists (email might be verified)
              const { data: { user: checkUser } } = await supabase.auth.getUser()
              if (checkUser) {
                console.log('[Callback] Error but user exists - email verified, redirecting to login')
                setStatus('success')
                timeoutId = setTimeout(() => {
                  router.push('/authentication/login?verified=true')
                }, 1500)
                return
              }
              
              setStatus('error')
              setErrorMessage(verifyError.message || 'Failed to verify email')
              timeoutId = setTimeout(() => {
                router.push('/authentication/login?error=verification_failed')
              }, 3000)
              return
            }

            if (data.session) {
              console.log('[Callback] Session created from token verification')
              setStatus('success')
              
              // Clear the token from URL
              const url = new URL(window.location.href)
              url.searchParams.delete('token')
              url.searchParams.delete('type')
              window.history.replaceState(null, '', url.pathname + url.search)
              
              const next = searchParams?.get('next') || '/onboarding'
              timeoutId = setTimeout(() => {
                router.push(next)
                router.refresh()
              }, 1000)
              return
            } else {
              setStatus('error')
              setErrorMessage('Verification completed but no session was created. Please try signing in.')
              timeoutId = setTimeout(() => {
                router.push('/authentication/login?error=no_session_after_verification')
              }, 3000)
              return
            }
          } catch (err) {
            console.error('[Callback] Unexpected error verifying token:', err)
            setStatus('error')
            setErrorMessage(err instanceof Error ? err.message : 'An unexpected error occurred during verification')
            timeoutId = setTimeout(() => {
              router.push('/authentication/login?error=verification_error')
            }, 3000)
            return
          }
        }
        
        // Check for code in query params (PKCE flow - fallback for other flows)
        const code = searchParams?.get('code')
        if (code) {
          console.log('[Callback] Found code in query params (PKCE flow)')
          
          // IMPORTANT: Remove code from URL immediately to prevent Supabase auto-exchange
          // Supabase's createBrowserClient automatically exchanges codes when it sees them in the URL
          // By removing it immediately, we prevent the duplicate exchange
          const url = new URL(window.location.href)
          url.searchParams.delete('code')
          window.history.replaceState(null, '', url.pathname + url.search)
          
          // Check if Supabase already auto-exchanged before we removed the code
          // Wait a moment to see if auto-exchange completed
          await new Promise(resolve => setTimeout(resolve, 200))
          
          const { data: { session: existingSession } } = await supabase.auth.getSession()
          
          if (existingSession) {
            console.log('[Callback] Session already exists (Supabase auto-exchanged code before we removed it)')
            
            // IMPORTANT: Ensure session cookies are properly set with correct domain
            // Wait to ensure cookies are persisted
            await new Promise(resolve => setTimeout(resolve, 300))
            
            // Verify session is still accessible
            const { data: { session: verifySession } } = await supabase.auth.getSession()
            if (!verifySession) {
              console.warn('[Callback] Session lost, this might be a cookie domain issue')
            }
            
            setStatus('success')
            
            const next = searchParams?.get('next') || '/onboarding'
            timeoutId = setTimeout(() => {
              router.push(next)
              router.refresh()
            }, 1000)
            return
          }
          
          try {
            // Manual exchange (code is now removed from URL so Supabase won't auto-exchange again)
            console.log('[Callback] No existing session, exchanging code manually...')
            const { data: { session }, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)
            
            if (exchangeError) {
              console.error('[Callback] Error exchanging code:', exchangeError)
              
              // Handle missing code verifier (PKCE issue)
              // If code verifier is missing, Supabase may have already verified the email
              // Check if user exists - if yes, email is verified, redirect to login
              if (exchangeError.message?.includes('code verifier') || 
                  exchangeError.message?.includes('code_verifier') ||
                  exchangeError.message?.includes('both auth code and code verifier')) {
                
                console.log('[Callback] Code verifier missing, but checking if email was already verified...')
                // Try to get user - if successful, email is verified
                const { data: { user }, error: userError } = await supabase.auth.getUser()
                
                if (!userError && user) {
                  console.log('[Callback] User exists - email is verified! Redirecting to login')
                  setStatus('success')
                  const url = new URL(window.location.href)
                  url.searchParams.delete('code')
                  window.history.replaceState(null, '', url.pathname + url.search)
                  
                  timeoutId = setTimeout(() => {
                    router.push('/authentication/login?verified=true')
                  }, 1500)
                  return
                }
                
                setStatus('error')
                setErrorMessage('This verification link requires a code verifier that is no longer available. Please request a new verification email - it will work from a fresh link.')
                timeoutId = setTimeout(() => {
                  router.push('/authentication/login?error=code_verifier_missing')
                }, 5000)
                return
              }
              
              // Handle rate limit specifically
              if (exchangeError.message?.includes('rate limit') || exchangeError.status === 429) {
                setStatus('error')
                setErrorMessage('Too many verification attempts. Please wait a few minutes and try again, or request a new verification email.')
                timeoutId = setTimeout(() => {
                  router.push('/authentication/login?error=rate_limit')
                }, 5000)
                return
              }
              
              // Handle expired/invalid code
              if (exchangeError.message?.includes('expired') || exchangeError.message?.includes('invalid')) {
                setStatus('error')
                setErrorMessage('This verification link has expired or is invalid. Please request a new verification email.')
                timeoutId = setTimeout(() => {
                  router.push('/authentication/login?error=code_expired')
                }, 3000)
                return
              }
              
              // Generic error
              setStatus('error')
              setErrorMessage(exchangeError.message || 'Failed to exchange verification code')
              timeoutId = setTimeout(() => {
                router.push('/authentication/login?error=code_exchange_failed')
              }, 3000)
              return
            }

            if (session) {
              console.log('[Callback] Session created from code exchange')
              console.log('[Callback] Current domain:', window.location.hostname)
              
              // IMPORTANT: Ensure session is properly persisted with correct cookie domain
              // This ensures cookies are accessible across subdomains (platform.local.contre.ai)
              // Wait for Supabase to set cookies
              await new Promise(resolve => setTimeout(resolve, 500))
              
              // Verify cookies are actually set and accessible (with retries)
              console.log('[Callback] Verifying cookies are set and accessible...')
              const cookiesSet = await verifyCookiesSet()
              
              if (!cookiesSet) {
                console.error('[Callback] ERROR: Cookies not accessible after retries - session may not work on redirect')
                setStatus('error')
                setErrorMessage('Session could not be established. Please try logging in again.')
                timeoutId = setTimeout(() => {
                  router.push('/authentication/login?error=cookies_not_accessible')
                }, 3000)
                return
              }
              
              // Additional wait to ensure cookies are fully persisted before redirect
              // This is critical for cross-subdomain cookie sharing
              console.log('[Callback] Cookies verified. Waiting for full persistence before redirect...')
              await new Promise(resolve => setTimeout(resolve, 1000))
              
              // Final verification that session is still accessible
              const { data: { session: finalSession } } = await supabase.auth.getSession()
              if (!finalSession) {
                console.error('[Callback] ERROR: Session lost after cookie verification')
                setStatus('error')
                setErrorMessage('Session was lost. Please try logging in again.')
                timeoutId = setTimeout(() => {
                  router.push('/authentication/login?error=session_lost')
                }, 3000)
                return
              }
              
              setStatus('success')
              
              // Code already removed from URL above
              const next = searchParams?.get('next') || '/onboarding'
              console.log(`[Callback] Redirecting to: ${next} (cookies should be available)`)
              timeoutId = setTimeout(() => {
                router.push(next)
                router.refresh()
              }, 1500) // Increased delay to ensure cookies are sent with redirect
              return
            } else {
              setStatus('error')
              setErrorMessage('Verification completed but no session was created. Please try signing in.')
              timeoutId = setTimeout(() => {
                router.push('/authentication/login?error=no_session_after_verification')
              }, 3000)
              return
            }
          } catch (err) {
            console.error('[Callback] Unexpected error exchanging code:', err)
            setStatus('error')
            setErrorMessage(err instanceof Error ? err.message : 'An unexpected error occurred during verification')
            timeoutId = setTimeout(() => {
              router.push('/authentication/login?error=verification_error')
            }, 3000)
            return
          }
        }

        // If we have tokens in the hash, explicitly set the session
        if (accessToken || refreshToken) {
          console.log('[Callback] Found tokens in hash, type:', type)
          
          try {
            // Explicitly set the session from hash tokens
            // This is necessary when using custom cookie handlers
            if (accessToken) {
              console.log('[Callback] Setting session from hash tokens...')
              
              // If we have both tokens, use setSession
              if (refreshToken) {
                const { data: { session }, error: setSessionError } = await supabase.auth.setSession({
                  access_token: accessToken,
                  refresh_token: refreshToken,
                })

                if (setSessionError) {
                  console.error('[Callback] Error setting session:', setSessionError)
                  throw setSessionError
                }

                if (session) {
                  console.log('[Callback] Session set successfully from hash tokens')
                  setStatus('success')
                  
                  // Clear the hash from URL
                  window.history.replaceState(null, '', window.location.pathname + window.location.search)
                  
                  // Get redirect destination
                  const next = searchParams?.get('next') || '/onboarding'
                  
                  // Small delay to show success message
                  timeoutId = setTimeout(() => {
                    router.push(next)
                    router.refresh()
                  }, 1000)
                  return
                }
              } else {
                // Only access token - try to use it directly
                console.log('[Callback] Only access token found, attempting to use it...')
                // Supabase should handle this automatically, but let's wait a moment
                await new Promise(resolve => setTimeout(resolve, 1000))
              }
            }

            // Fallback: Listen for auth state changes
            console.log('[Callback] Waiting for session via auth state change...')
            authListener = supabase.auth.onAuthStateChange(async (event, session) => {
              console.log('[Callback] Auth state changed:', event, 'Has session:', !!session)
              
              if ((event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') && session) {
                console.log('[Callback] Session created from auth state change')
                setStatus('success')
                
                // Clear the hash from URL
                window.history.replaceState(null, '', window.location.pathname + window.location.search)
                
                // Get redirect destination
                const next = searchParams?.get('next') || '/onboarding'
                
                // Small delay to show success message
                timeoutId = setTimeout(() => {
                  router.push(next)
                  router.refresh()
                }, 1000)
              }
            })

            // Also try to get session immediately (in case it's already processed)
            const { data: { session }, error: sessionError } = await supabase.auth.getSession()
            
            if (sessionError) {
              console.error('[Callback] Session error:', sessionError)
              // Wait for onAuthStateChange or timeout
            } else if (session) {
              console.log('[Callback] Session already exists')
              setStatus('success')
              
              // Clear the hash from URL
              window.history.replaceState(null, '', window.location.pathname + window.location.search)
              
              const next = searchParams?.get('next') || '/onboarding'
              timeoutId = setTimeout(() => {
                router.push(next)
                router.refresh()
              }, 1000)
              return
            } else {
              // Wait up to 5 seconds for session to be created from hash
              timeoutId = setTimeout(() => {
                console.error('[Callback] Timeout waiting for session from hash tokens')
                setStatus('error')
                setErrorMessage('Verification timed out. Please try again or request a new verification email.')
                setTimeout(() => {
                  router.push('/authentication/login?error=verification_timeout')
                }, 3000)
              }, 5000)
            }
          } catch (err) {
            console.error('[Callback] Error processing hash tokens:', err)
            setStatus('error')
            setErrorMessage(err instanceof Error ? err.message : 'Failed to process verification tokens')
            timeoutId = setTimeout(() => {
              router.push('/authentication/login?error=token_processing_failed')
            }, 3000)
            return
          }
        } else {
          // No hash tokens - check for existing session (code-based flow or direct access)
          const { data: { session }, error: sessionError } = await supabase.auth.getSession()

          if (sessionError) {
            console.error('[Callback] Session error:', sessionError)
            setStatus('error')
            setErrorMessage(sessionError.message || 'Failed to create session')
            timeoutId = setTimeout(() => {
              router.push('/authentication/login?error=auth_failed')
            }, 3000)
            return
          }

          if (session) {
            console.log('[Callback] Session exists')
            setStatus('success')
            const next = searchParams?.get('next') || '/onboarding'
            timeoutId = setTimeout(() => {
              router.push(next)
              router.refresh()
            }, 1000)
          } else {
            setStatus('error')
            setErrorMessage('No active session found. Please try verifying your email again.')
            timeoutId = setTimeout(() => {
              router.push('/authentication/login?error=no_session')
            }, 3000)
          }
        }
      } catch (err) {
        console.error('[Callback] Unexpected error:', err)
        setStatus('error')
        setErrorMessage(err instanceof Error ? err.message : 'An unexpected error occurred')
        timeoutId = setTimeout(() => {
          router.push('/authentication/login?error=auth_failed')
        }, 3000)
      }
    }

    handleCallback()

    // Cleanup
    return () => {
      isProcessingRef.current = false
      if (timeoutId) clearTimeout(timeoutId)
      if (authListener) {
        authListener.data.subscription.unsubscribe()
      }
    }
  }, [router, supabase.auth, searchParams, verifyCookiesSet])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md w-full px-4">
        {status === 'loading' && (
          <>
            <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Verifying your email...
            </h2>
            <p className="text-sm text-gray-600">Please wait</p>
          </>
        )}
        
        {status === 'success' && (
          <>
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Email verified successfully!
            </h2>
            <p className="text-sm text-gray-600">Redirecting you now...</p>
          </>
        )}
        
        {status === 'error' && (
          <>
            <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Verification failed
            </h2>
            <p className="text-sm text-gray-600 mb-4">{errorMessage}</p>
            <p className="text-xs text-gray-500">Redirecting to login...</p>
          </>
        )}
      </div>
    </div>
  )
}

export default function CallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Loading...
            </h2>
            <p className="text-sm text-gray-600">Please wait</p>
          </div>
        </div>
      }
    >
      <CallbackContent />
    </Suspense>
  )
}
