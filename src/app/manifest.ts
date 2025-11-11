import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Contre AI - Real Estate Document Protection',
    short_name: 'Contre AI',
    description: 'AI-powered contract analysis for real estate agents and brokerages',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#264E36',
    icons: [
      {
        src: '/contre-logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/contre-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

