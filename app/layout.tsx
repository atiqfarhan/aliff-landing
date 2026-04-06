import type { Metadata } from 'next'
import { Inter, Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-playfair',
})
const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

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
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-aliff-offwhite text-aliff-black`}>
        {children}
      </body>
    </html>
  )
}