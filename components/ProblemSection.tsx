'use client';

import { motion } from 'framer-motion';

export default function ProblemSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
          Tired of the morning struggle?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Decision fatigue',
              description: '"What do I wear?" every single morning drains your mental energy before the day even starts.'
            },
            {
              title: 'Closet underused',
              description: 'Pieces exist in your wardrobe, but complete outfits don\'t. You own clothes but feel like you have nothing to wear.'
            },
            {
              title: 'Tools ignore modesty',
              description: 'Most styling apps don\'t understand modest dressing. You waste time filtering through inappropriate suggestions.'
            }
          ].map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-aliff-offwhite p-6 rounded-xl shadow-sm border border-aliff-sand"
            >
              <div className="text-2xl mb-4 text-aliff-gold font-bold">•</div>
              <h3 className="text-xl font-playfair font-bold mb-3">{problem.title}</h3>
              <p className="text-gray-700 font-montserrat">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}