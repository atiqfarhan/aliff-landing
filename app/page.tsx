import { Metadata } from 'next'
import Hero from '../components/Hero'
import ProblemSection from '../components/ProblemSection'
import HowItWorks from '../components/HowItWorks'
import WhatYouGet from '../components/WhatYouGet'
import WhoItsFor from '../components/WhoItsFor'
import TrustPrivacy from '../components/TrustPrivacy'
import WaitlistSection from '../components/WaitlistSection'
import FAQ from '../components/FAQ'
import Header from '../components/Header'

export const metadata: Metadata = {
  title: 'ALIFF — Modesty, intelligently styled.',
  description: 'AI styling service for Muslim women. Turn your wardrobe into outfits with modesty as a first-class design constraint.',
  openGraph: {
    title: 'ALIFF — Modesty, intelligently styled.',
    description: 'Your AI modest fashion consultant that learns your taste and makes you feel understood.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALIFF — Modesty, intelligently styled.',
    description: 'AI styling service for Muslim women.',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <WhatYouGet />
      <WhoItsFor />
      <TrustPrivacy />
      <WaitlistSection />
      <FAQ />
      
      <footer className="bg-aliff-black text-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-aliff-gold rounded-full flex items-center justify-center text-white font-playfair font-bold">
                  A
                </div>
                <div>
                  <div className="font-playfair font-bold text-xl">ALIFF</div>
                  <div className="text-xs text-gray-300 font-montserrat">Modesty, intelligently styled.</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm font-montserrat">
                Your AI modest fashion consultant that learns your taste and makes you feel understood.
              </p>
            </div>
            
            <div>
              <h3 className="font-playfair font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 font-montserrat">
                <li><a href="#how-it-works" className="text-gray-300 hover:text-aliff-gold transition-colors">How it works</a></li>
                <li><a href="#features" className="text-gray-300 hover:text-aliff-gold transition-colors">Features</a></li>
                <li><a href="#privacy" className="text-gray-300 hover:text-aliff-gold transition-colors">Privacy</a></li>
                <li><a href="#faq" className="text-gray-300 hover:text-aliff-gold transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-playfair font-bold text-lg mb-4">Contact</h3>
              <p className="text-gray-300 text-sm font-montserrat mb-2">
                For questions about the beta or partnerships:
              </p>
              <a href="mailto:hello@aliff.app" className="text-aliff-gold hover:underline font-montserrat">
                hello@aliff.app
              </a>
              <p className="text-xs text-gray-400 mt-6 font-montserrat">
                © 2024 ALIFF. All rights reserved.<br />
                Built with community feedback.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}