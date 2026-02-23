import type { Metadata } from 'next'
import { Inter, Bebas_Neue, Manrope } from 'next/font/google'
import Script from 'next/script'
import { defaultMetadata } from '@/lib/metadata'
import { SimpleHeader } from '@/components/ui/simple-header'
import { ThemeProvider } from '@/components/theme-provider'
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/contre-logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/contre-logo.png" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LH9Q87XMPZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LH9Q87XMPZ');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${bebasNeue.variable} ${manrope.variable} ${inter.className} antialiased`}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#9DBFBF] focus:text-[#0D1A14] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <SimpleHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

