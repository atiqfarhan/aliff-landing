import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ALIFF — Modesty, intelligently styled.',
  description: 'AI-powered modest fashion styling for Muslim women. Get personalized outfit recommendations that respect your values and cultural preferences.',
  keywords: ['modest fashion', 'Muslim women fashion', 'AI styling', 'hijab outfits', 'modest clothing', 'Islamic fashion', 'AI fashion assistant'],
  authors: [{ name: 'ALIFF' }],
  openGraph: {
    title: 'ALIFF — Modesty, intelligently styled.',
    description: 'AI-powered modest fashion styling for Muslim women.',
    type: 'website',
    locale: 'en_US',
    siteName: 'ALIFF',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALIFF — Modesty, intelligently styled.',
    description: 'AI-powered modest fashion styling for Muslim women.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-aliff-black text-aliff-cream">
        {children}
      </body>
    </html>
  )
}