import type { Metadata } from 'next'
import { Inter, Cairo } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cairo = Cairo({ 
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PVNG Electromechanical Works L.L.C. - Professional Electromechanical Solutions in Dubai',
  description: 'Leading electromechanical services in Dubai including fire fighting systems, low voltage systems, gas piping solutions, security systems, and sustainability consulting.',
  keywords: 'electromechanical, fire fighting, security systems, low voltage, gas piping, sustainability, Dubai, UAE',
  authors: [{ name: 'PVNG Electromechanical Works L.L.C.' }],
  creator: 'PVNG Electromechanical Works L.L.C.',
  publisher: 'PVNG Electromechanical Works L.L.C.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pvng.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'ar-AE': '/ar',
    },
  },
  openGraph: {
    title: 'PVNG Electromechanical Works L.L.C.',
    description: 'Professional electromechanical solutions in Dubai. Fire fighting systems, security systems, low voltage systems, gas piping, and sustainability consulting.',
    url: 'https://pvng.com',
    siteName: 'PVNG Electromechanical Works L.L.C.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PVNG Electromechanical Works L.L.C.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PVNG Electromechanical Works L.L.C.',
    description: 'Professional electromechanical solutions in Dubai',
    images: ['/og-image.jpg'],
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
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cairo.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#004080" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-inter bg-gray-50 text-gray-900 leading-relaxed overflow-x-hidden flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}