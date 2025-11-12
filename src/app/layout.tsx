import type { Metadata } from 'next'
import { Inter, Bebas_Neue, Manrope } from 'next/font/google'
import { defaultMetadata } from '@/lib/metadata'
import { SimpleHeader } from '@/components/ui/simple-header'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/contre-logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/contre-logo.png" />
      </head>
      <body 
        className={`${inter.variable} ${bebasNeue.variable} ${manrope.variable} ${inter.className} antialiased`}
        suppressHydrationWarning
      >
        <SimpleHeader />
        {children}
      </body>
    </html>
  )
}

