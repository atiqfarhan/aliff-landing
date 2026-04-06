'use client';

import { CheckCircle, X } from 'lucide-react';

export default function TrustPrivacy() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
          Your privacy, our priority
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">What we do</h3>
            <ul className="space-y-3 font-montserrat">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Encrypt all photos and data at rest</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Never share your data with third parties</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span>Give you full control: delete any photo anytime</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">What we never do</h3>
            <ul className="space-y-3 font-montserrat">
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <span>Sell your data to advertisers</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <span>Use your photos for AI training without consent</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                <span>Share your modesty preferences externally</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 bg-aliff-offwhite p-8 rounded-2xl border border-aliff-sand">
          <h3 className="text-xl font-playfair font-bold mb-4 text-center">Choose your photo privacy level</h3>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {[
              {
                title: 'Keep my photos',
                desc: 'Stored securely. Delete anytime.',
                color: 'border-green-500'
              },
              {
                title: 'Analyze then delete',
                desc: 'We extract details, delete originals in 24h.',
                color: 'border-blue-500'
              },
              {
                title: 'I\'ll manage myself',
                desc: 'Full control. Delete photos whenever.',
                color: 'border-aliff-gold'
              }
            ].map((option, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 ${option.color} bg-white`}>
                <h4 className="font-playfair font-bold mb-2">{option.title}</h4>
                <p className="text-sm text-gray-600 font-montserrat">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}