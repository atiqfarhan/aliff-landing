export default function Home() {
  return (
    <main className="min-h-screen bg-aliff-black text-aliff-cream islamic-pattern">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-aliff-black/90 backdrop-blur-lg border-b border-aliff-gold/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-3xl font-playfair text-aliff-gold font-bold">A</div>
              <div>
                <div className="text-xl font-playfair font-bold">ALIFF</div>
                <div className="text-xs text-aliff-sand">Modesty, intelligently styled.</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-aliff-cream hover:text-aliff-gold transition-colors">How It Works</a>
              <a href="#features" className="text-aliff-cream hover:text-aliff-gold transition-colors">Features</a>
              <a href="#privacy" className="text-aliff-cream hover:text-aliff-gold transition-colors">Privacy</a>
              <a href="#waitlist" className="btn-premium">Join Waitlist</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Premium & Elegant */}
      <section className="section-spacing relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-aliff-gold/10 text-aliff-gold rounded-full text-sm font-semibold mb-4">
                AI-Powered Modest Styling
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-8 leading-tight">
              Outfits that
              <span className="block text-aliff-gold mt-4">respect your values</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-aliff-sand mb-12 max-w-2xl mx-auto leading-relaxed">
              ALIFF is your personal AI stylist for modest dressing. From the clothes in your closet to looks you love, 
              aligned with your coverage, comfort, and values.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
              <a 
                href="#waitlist" 
                className="btn-premium px-10 py-4 text-lg"
              >
                Join the Waitlist
              </a>
              <a 
                href="#how-it-works" 
                className="btn-premium-outline px-10 py-4 text-lg"
              >
                See How It Works
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-aliff-sand">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Privacy-first
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Delete controls
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Consent-based
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Elegant Cards */}
      <section id="problem" className="section-spacing bg-aliff-navy/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Tired of the morning struggle?
            </h2>
            <p className="text-aliff-sand max-w-2xl mx-auto">
              Modern styling tools weren't built with modesty in mind. ALIFF changes that.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Decision Fatigue',
                description: '"What do I wear?" every morning drains your mental energy before the day even begins.'
              },
              {
                title: 'Closet Underused',
                description: 'Pieces exist in your wardrobe, but complete outfits don\'t. You own clothes but feel like you have nothing to wear.'
              },
              {
                title: 'Tools Ignore Modesty',
                description: 'Most styling apps don\'t understand modest dressing. You waste time filtering through inappropriate suggestions.'
              }
            ].map((problem, index) => (
              <div 
                key={index}
                className="premium-card rounded-2xl p-8 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-aliff-gold text-2xl mb-6">•</div>
                <h3 className="text-xl font-playfair font-bold mb-4">{problem.title}</h3>
                <p className="text-aliff-sand leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Premium Steps */}
      <section id="how-it-works" className="section-spacing">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              How ALIFF Works
            </h2>
            <p className="text-aliff-sand max-w-2xl mx-auto">
              Three simple steps to confident dressing every day
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Upload Your Wardrobe',
                description: 'Snap photos of your clothes or upload existing ones. Our AI identifies each item automatically.'
              },
              {
                step: '02',
                title: 'Set Your Preferences',
                description: 'Tell us your coverage level, colors, lifestyle, and dress codes. Modesty is your design language.'
              },
              {
                step: '03',
                title: 'Get Outfit Plans',
                description: 'Receive personalized outfit recommendations for the week, tailored to your style and context.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-aliff-gold text-5xl font-playfair font-bold mb-6">{step.step}</div>
                <h3 className="text-xl font-playfair font-bold mb-4">{step.title}</h3>
                <p className="text-aliff-sand">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section - Premium Form */}
      <section id="waitlist" className="section-spacing bg-aliff-navy/50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="premium-card rounded-3xl p-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                  Join the ALIFF Waitlist
                </h2>
                <p className="text-aliff-sand">
                  Be among the first to experience AI-powered modest styling. Beta access starts soon.
                </p>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-aliff-cream mb-2 font-medium">Full Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-3 bg-aliff-black/50 border border-aliff-gold/30 rounded-lg focus:ring-2 focus:ring-aliff-gold focus:border-transparent text-aliff-cream placeholder-aliff-sand"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-aliff-cream mb-2 font-medium">Email Address *</label>
                  <input 
                    type="email" 
                    className="w-full px-5 py-3 bg-aliff-black/50 border border-aliff-gold/30 rounded-lg focus:ring-2 focus:ring-aliff-gold focus:border-transparent text-aliff-cream placeholder-aliff-sand"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-aliff-cream mb-2 font-medium">Where are you based? *</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-3 bg-aliff-black/50 border border-aliff-gold/30 rounded-lg focus:ring-2 focus:ring-aliff-gold focus:border-transparent text-aliff-cream placeholder-aliff-sand"
                    placeholder="City, Country"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-aliff-cream mb-2 font-medium">What is your biggest style struggle as a modest woman? *</label>
                  <textarea 
                    rows={3}
                    className="w-full px-5 py-3 bg-aliff-black/50 border border-aliff-gold/30 rounded-lg focus:ring-2 focus:ring-aliff-gold focus:border-transparent text-aliff-cream placeholder-aliff-sand resize-none"
                    placeholder="e.g., Finding work-appropriate outfits that are still modest, coordinating hijab with outfits, dealing with decision fatigue every morning..."
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full btn-premium py-4 text-lg"
                >
                  Join the ALIFF Waitlist
                </button>
                
                <p className="text-xs text-aliff-sand text-center">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-aliff-navy py-12 border-t border-aliff-gold/20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="text-4xl font-playfair text-aliff-gold font-bold">A</div>
              <div>
                <div className="text-2xl font-playfair font-bold">ALIFF</div>
                <div className="text-sm text-aliff-sand">Modesty, intelligently styled.</div>
              </div>
            </div>
            
            <p className="text-aliff-sand mb-6 max-w-lg mx-auto">
              Your AI modest fashion consultant that learns your taste and makes you feel understood.
            </p>
            
            <a href="mailto:hello@aliff.app" className="text-aliff-gold hover:underline mb-8 inline-block">
              hello@aliff.app
            </a>
            
            <div className="pt-8 border-t border-aliff-gold/10">
              <p className="text-xs text-aliff-sand">
                © 2024 ALIFF. All rights reserved.<br />
                Built with community feedback.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}