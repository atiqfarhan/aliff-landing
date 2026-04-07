'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-aliff-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <div className="font-playfair font-bold text-2xl text-aliff-gold">A</div>
            </div>
            <div>
              <div className="font-playfair font-bold text-xl">ALIFF</div>
              <div className="text-xs text-gray-600 font-montserrat">Modesty, intelligently styled.</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-aliff-gold transition-colors font-montserrat">
              How it works
            </a>
            <a href="#features" className="text-gray-700 hover:text-aliff-gold transition-colors font-montserrat">
              Features
            </a>
            <a href="#privacy" className="text-gray-700 hover:text-aliff-gold transition-colors font-montserrat">
              Privacy
            </a>
            <a href="#faq" className="text-gray-700 hover:text-aliff-gold transition-colors font-montserrat">
              FAQ
            </a>
            <a 
              href="#waitlist" 
              className="bg-aliff-gold text-white px-6 py-2 rounded-lg font-montserrat font-semibold hover:bg-opacity-90 transition-colors"
            >
              Join waitlist
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-aliff-sand">
            <div className="flex flex-col space-y-4">
              <a href="#how-it-works" className="text-gray-700 hover:text-aliff-gold transition-colors font-montserrat py-2">
                How it works
              </a>
              <a href="#features" className="text-gray-700 hover:text-aliff-gold transition-colors font-montserrat py-2">
                Features
              </a>
              <a href="#privacy" className="text-gray-700 hover:text-aliff-gold transition-colors font-montserrat py-2">
                Privacy
              </a>
              <a href="#faq" className="text-gray-700 hover:text-aliff-gold transition-colors font-montserrat py-2">
                FAQ
              </a>
              <a 
                href="#waitlist" 
                className="bg-aliff-gold text-white px-6 py-3 rounded-lg font-montserrat font-semibold hover:bg-opacity-90 transition-colors text-center"
              >
                Join waitlist
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}