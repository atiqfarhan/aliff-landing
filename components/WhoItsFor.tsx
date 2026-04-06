'use client';

import { motion } from 'framer-motion';

export default function WhoItsFor() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-aliff-offwhite to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
          Built for Muslim women who value...
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Modest-by-choice shoppers',
              desc: 'Who want style without compromise'
            },
            {
              title: 'Hijabi professionals',
              desc: 'Needing work-appropriate, polished looks'
            },
            {
              title: 'Students & busy moms',
              desc: 'Who want fast, confident outfit decisions'
            },
            {
              title: 'Style-conscious women',
              desc: 'Looking to maximize their existing wardrobe'
            }
          ].map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-aliff-sand text-center"
            >
              <h3 className="text-lg font-playfair font-bold mb-2">{audience.title}</h3>
              <p className="text-gray-600 text-sm font-montserrat">{audience.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}