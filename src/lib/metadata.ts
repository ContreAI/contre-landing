import { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://contreai.com'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Contre AI - AI-Powered Real Estate Document Protection',
    template: '%s | Contre AI',
  },
  description: 'AI that protects your deals, clients, and commission. Comprehensive contract analysis for real estate agents and brokerages.',
  keywords: [
    'real estate AI',
    'contract analysis',
    'document review',
    'transaction coordinator',
    'real estate technology',
    'brokerage software',
    'agent tools',
    'contract intelligence',
  ],
  authors: [{ name: 'Cory Turnbull', url: 'https://contreai.com' }],
  creator: 'Contre AI',
  publisher: 'Contre AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Contre AI',
    title: 'Contre AI - AI-Powered Real Estate Document Protection',
    description: 'AI that protects your deals, clients, and commission. Comprehensive contract analysis for real estate agents and brokerages.',
    images: [
      {
        url: '/contre-logo.png',
        width: 1200,
        height: 630,
        alt: 'Contre AI Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contre AI - AI-Powered Real Estate Document Protection',
    description: 'AI that protects your deals, clients, and commission.',
    images: ['/contre-logo.png'],
    creator: '@contreai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // other: 'your-other-verification-code',
  },
}

export function createPageMetadata({
  title,
  description,
  keywords,
  path = '',
  image,
}: {
  title: string
  description: string
  keywords?: string[]
  path?: string
  image?: string
}): Metadata {
  const url = `${baseUrl}${path}`
  const imageUrl = image || '/contre-logo.png'

  return {
    title,
    description,
    keywords: keywords || defaultMetadata.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

