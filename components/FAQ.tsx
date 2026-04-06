'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is this a shopping app?',
      answer: 'No. ALIFF is a styling consultant that works with your existing wardrobe. We help you wear what you already own better. Shopping recommendations may come later as an optional feature.'
    },
    {
      question: 'Do I need a big wardrobe?',
      answer: 'Not at all! ALIFF works with whatever you have. Even with 10-15 pieces, we can create multiple outfit combinations. The more items you add, the more variety we can suggest.'
    },
    {
      question: 'What modesty preferences can I set?',
      answer: 'You can specify coverage level (full, moderate, relaxed), sleeve length, hem length, neckline preference, hijab style (if applicable), fabric opacity, and fit preference (loose, structured, etc.).'
    },
    {
      question: 'Is my data private?',
      answer: 'Absolutely. We never sell your data. Photos are encrypted, and you control retention (keep, analyze-then-delete, or manual deletion). Your modesty preferences stay private.'
    },
    {
      question: 'How does the AI understand modest fashion?',
      answer: 'ALIFF is trained with modesty as a first-class design constraint. It understands coverage requirements, layering for gaps, and creates outfits that respect your preferences while being stylish.'
    },
    {
      question: 'When will ALIFF be available?',
      answer: 'We\'re launching beta access soon. Join the waitlist to be among the first to try it and help shape the product.'
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
          Frequently asked questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-aliff-sand rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-aliff-offwhite transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-playfair font-bold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-aliff-gold" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-aliff-gold" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 font-montserrat">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}