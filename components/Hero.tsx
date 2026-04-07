'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-20 px-4 text-center bg-gradient-to-b from-aliff-offwhite to-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-aliff-black mb-6">
          Outfits that respect your values
        </h1>
        
        <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          ALIFF is your personal AI stylist for modest dressing. From the clothes in your closet to looks you love, aligned with your coverage, comfort, and values.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <motion.a
            href="#waitlist"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-aliff-gold text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors shadow-lg"
          >
            Join the waitlist
          </motion.a>
          <motion.a
            href="#how-it-works"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-aliff-gold text-aliff-gold px-8 py-4 rounded-lg font-semibold text-lg hover:bg-aliff-gold hover:bg-opacity-10 transition-colors"
          >
            See how it works
          </motion.a>
        </div>
        
        <p className="text-sm text-gray-600 flex items-center justify-center gap-2 mt-8">
          <CheckCircle className="w-4 h-4 text-green-600" />
          Privacy-first. Delete controls. Consent-based.
        </p>
      </motion.div>
    </section>
  );
}