'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import WaitlistForm from './WaitlistForm';

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-aliff-offwhite">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Join the ALIFF waitlist
          </h2>
          <p className="text-gray-600 text-lg font-montserrat max-w-2xl mx-auto">
            Be among the first to experience AI-powered modest styling. 
            Beta access starts soon.
          </p>
        </motion.div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-aliff-sand">
          <WaitlistForm />
          
          <div className="mt-8 pt-8 border-t border-aliff-sand">
            <h3 className="font-playfair font-bold text-lg mb-4">What to expect as a beta tester:</h3>
            <ul className="grid md:grid-cols-2 gap-3 font-montserrat">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-aliff-gold flex-shrink-0" />
                <span>Early access to all features</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-aliff-gold flex-shrink-0" />
                <span>Direct input on product direction</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-aliff-gold flex-shrink-0" />
                <span>Priority support from our team</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-aliff-gold flex-shrink-0" />
                <span>Exclusive styling tips & content</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}