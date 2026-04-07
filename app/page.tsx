export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-aliff-offwhite to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-aliff-black mb-6">
            Outfits from your closet—
            <span className="block text-aliff-gold mt-4">
              without the mental load of modest dressing.
            </span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            ALIFF is an AI styling service that turns your wardrobe photos into outfit plans, 
            built for Muslim modest women, with modesty as a first-class constraint.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="#waitlist" 
              className="bg-aliff-gold text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors shadow-lg"
            >
              Join the waitlist
            </a>
            <a 
              href="#how-it-works" 
              className="border-2 border-aliff-gold text-aliff-gold px-8 py-4 rounded-lg font-semibold text-lg hover:bg-aliff-gold hover:bg-opacity-10 transition-colors"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Tired of the morning struggle?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-aliff-offwhite p-6 rounded-xl border border-aliff-sand">
              <div className="text-4xl mb-4">😫</div>
              <h3 className="text-xl font-bold mb-3">Decision fatigue</h3>
              <p className="text-gray-700">
                "What do I wear?" every single morning drains your mental energy before the day even starts.
              </p>
            </div>
            
            <div className="bg-aliff-offwhite p-6 rounded-xl border border-aliff-sand">
              <div className="text-4xl mb-4">👗</div>
              <h3 className="text-xl font-bold mb-3">Closet underused</h3>
              <p className="text-gray-700">
                Pieces exist in your wardrobe, but complete outfits don't. You own clothes but feel like you have nothing to wear.
              </p>
            </div>
            
            <div className="bg-aliff-offwhite p-6 rounded-xl border border-aliff-sand">
              <div className="text-4xl mb-4">🚫</div>
              <h3 className="text-xl font-bold mb-3">Tools ignore modesty</h3>
              <p className="text-gray-700">
                Most styling apps don't understand modest dressing. You waste time filtering through inappropriate suggestions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-16 px-4 bg-gradient-to-b from-white to-aliff-offwhite">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the ALIFF waitlist
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Be among the first to experience AI-powered modest styling.
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-aliff-sand">
            <form className="space-y-6">
              <div>
                <label className="block text-left mb-2 font-medium">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-aliff-sand rounded-lg focus:ring-2 focus:ring-aliff-gold focus:border-transparent"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-left mb-2 font-medium">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-aliff-sand rounded-lg focus:ring-2 focus:ring-aliff-gold focus:border-transparent"
                  placeholder="you@example.com"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-aliff-gold text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors"
              >
                Join the ALIFF waitlist
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-aliff-black text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-aliff-gold rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <div>
                <div className="text-xl font-bold">ALIFF</div>
                <div className="text-sm text-gray-300">Modesty, intelligently styled.</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Your AI modest fashion consultant that learns your taste and makes you feel understood.
            </p>
            <a href="mailto:hello@aliff.app" className="text-aliff-gold hover:underline">
              hello@aliff.app
            </a>
            <p className="text-xs text-gray-400 mt-6">
              © 2024 ALIFF. All rights reserved. Built with community feedback.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}