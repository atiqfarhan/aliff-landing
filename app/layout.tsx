import type { Metadata } from 'next'
import './globals.css'

// Fonts are loaded via globals.css for better performance

export const metadata: Metadata = {
  title: 'ALIFF — Modesty, intelligently styled.',
  description: 'AI styling service that turns your wardrobe into outfits—based on your modesty preferences, body shape, colors, lifestyle, and dress code. Built for Muslim modest women.',
  keywords: ['modest fashion', 'AI styling', 'Muslim women', 'wardrobe', 'outfit planning', 'hijab', 'modesty', 'AI consultant'],
  openGraph: {
    title: 'ALIFF — Modesty, intelligently styled.',
    description: 'Your AI modest fashion consultant that learns your taste and makes you feel understood.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-aliff-offwhite text-aliff-black font-montserrat">
        {children}
      </body>
    </html>
  )
}