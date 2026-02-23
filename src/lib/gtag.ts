declare global {
  interface Window {
    gtag: (...args: [string, ...unknown[]]) => void
  }
}

export function trackCTAClick(buttonText: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      button_text: buttonText,
      page_location: window.location.pathname,
    })
  }
}

export function trackGenerateLead(source: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      currency: 'USD',
      value: 0,
      source,
    })
  }
}
