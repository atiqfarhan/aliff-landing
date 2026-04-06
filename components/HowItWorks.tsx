'use client';

import { motion } from 'framer-motion';
import { Upload, Settings, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-aliff-offwhite">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-4">
          How ALIFF works
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto font-montserrat">
          Three simple steps to confident dressing every day
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Upload className="w-12 h-12" />,
              step: '1',
              title: 'Upload wardrobe photos',
              description: 'Snap photos of your clothes or upload existing ones. Our AI identifies each item automatically.',
              color: 'text-blue-600'
            },
            {
              icon: <Settings className="w-12 h-12" />,
              step: '2',
              title: 'Set your preferences',
              description: 'Tell us your coverage level, colors, lifestyle, and dress codes. Modesty is your design language.',
              color: 'text-purple-600'
            },
            {
              icon: <Sparkles className="w-12 h-12" />,
              step: '3',
              title: 'Get outfit plans',
              description: 'Receive personalized outfit recommendations for the week, tailored to your style and context.',
              color: 'text-aliff-gold'
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`${step.color} mb-4 flex justify-center`}>
                {step.icon}
              </div>
              <div className="text-2xl font-playfair font-bold mb-2">{step.step}</div>
              <h3 className="text-xl font-playfair font-bold mb-3">{step.title}</h3>
              <p className="text-gray-700 font-montserrat">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}