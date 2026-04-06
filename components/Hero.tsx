'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-aliff-black leading-tight mb-6">
          Outfits from your closet—
          <span className="block text-aliff-gold">without the mental load of modest dressing.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8 font-montserrat">
          ALIFF is an AI styling service that turns your wardrobe photos into outfit plans, 
          built for Muslim modest women, with modesty as a first-class constraint.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
          <motion.a
            href="#waitlist"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-aliff-gold text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-colors shadow-lg"
          >
            Join the waitlist
          </motion.a>
          <motion.a
            href="#how-it-works"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-aliff-gold text-aliff-gold px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-aliff-gold hover:bg-opacity-10 transition-colors"
          >
            See how it works
          </motion.a>
        </div>

        <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-600" />
          Privacy-first. Delete controls. Consent-based.
        </p>
      </motion.div>
    </section>
  );
}