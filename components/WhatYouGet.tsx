'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function WhatYouGet() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
          What you get with ALIFF
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              {[
                'Outfit plan cards (3–7 outfits per week)',
                'Mix-and-match rules ("If X, pair with Y")',
                'Packing list generator for travel',
                'Shopping gap identification',
                'Weather-aware suggestions',
                'Modesty-first styling principles'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-aliff-gold flex-shrink-0 mt-1" />
                  <span className="text-lg font-montserrat">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-aliff-offwhite p-8 rounded-2xl shadow-lg border border-aliff-sand"
          >
            <div className="text-center mb-6">
              <div className="text-aliff-gold font-playfair font-bold text-xl mb-2">AI Output Example</div>
              <div className="text-sm text-gray-600 font-montserrat">"Polished Monday" outfit suggestion</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {['Cream hijab', 'Navy blazer', 'Black trousers', 'Tan loafers'].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg text-center border border-aliff-sand">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-2"></div>
                  <div className="text-sm font-montserrat">{item}</div>
                </div>
              ))}
            </div>
            
            <div className="text-sm text-gray-700 font-montserrat italic border-l-4 border-aliff-gold pl-4 py-2">
              "The structured blazer adds definition to the flowing silhouette. Full coverage, opaque fabrics, your preferred neutral palette."
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}