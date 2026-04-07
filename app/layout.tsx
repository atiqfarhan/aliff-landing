import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ALIFF — Modesty, intelligently styled.',
  description: 'AI styling service for Muslim women.',
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