import React from "react"
import type { Metadata, Viewport } from 'next'
import { Source_Sans_3, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: '--font-source-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Swami Debananda Ashram | A Sanctuary for Spiritual Growth',
    template: '%s | Swami Debananda Ashram',
  },
  description: 'Swami Debananda Ashram is a sacred space dedicated to Vedantic teachings, meditation, and spiritual transformation. Experience the timeless wisdom of ancient India in a serene environment.',
  keywords: ['ashram', 'spirituality', 'vedanta', 'meditation', 'yoga', 'swami', 'teachings', 'india', 'spiritual retreat'],
  authors: [{ name: 'Swami Debananda Ashram' }],
  creator: 'Swami Debananda Ashram',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://swamidebanandaashram.org',
    siteName: 'Swami Debananda Ashram',
    title: 'Swami Debananda Ashram | A Sanctuary for Spiritual Growth',
    description: 'Experience Vedantic teachings and meditation in a serene spiritual environment.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swami Debananda Ashram',
    description: 'A sanctuary for spiritual growth and Vedantic wisdom.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#D97706',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
