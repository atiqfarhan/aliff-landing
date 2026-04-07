export default function Home() {
  // Smooth scroll function for anchor links accounting for fixed navbar
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-aliff-black text-aliff-cream">
      {/* Enhanced Navigation */}
      <nav className="sticky top-0 z-50 bg-aliff-black/95 backdrop-blur-lg border-b border-aliff-gold/20">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="ALIFF Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-playfair font-bold">ALIFF</div>
                <div className="text-xs text-aliff-sand">Modesty, intelligently styled.</div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-10">
              <a href="#how-it-works" onClick={(e) => { e.preventDefault(); smoothScrollTo('how-it-works'); }} className="text-aliff-cream hover:text-aliff-gold transition-colors duration-300">How It Works</a>
              <a href="#features" onClick={(e) => { e.preventDefault(); smoothScrollTo('features'); }} className="text-aliff-cream hover:text-aliff-gold transition-colors duration-300">Features</a>
              <a href="#privacy" onClick={(e) => { e.preventDefault(); smoothScrollTo('privacy'); }} className="text-aliff-cream hover:text-aliff-gold transition-colors duration-300">Privacy</a>
              <a href="#waitlist" onClick={(e) => { e.preventDefault(); smoothScrollTo('waitlist'); }} className="btn-premium px-6 py-3">Join Waitlist</a>
            </div>

            <button className="md:hidden text-aliff-gold">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="hero" className="section-spacing gradient-bg relative overflow-hidden pt-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center fade-in-up">
            <div className="mb-10">
              <span className="subtitle inline-block px-6 py-3 bg-aliff-gold/10 text-aliff-gold rounded-full mb-6">
                AI-Powered Modest Styling
              </span>
              <div className="gold-accent"></div>
            </div>

            <h1 className="text-sixxl md:text-7xl lg:text-8xl font-playfair font-bold mb-10 leading-tight">
              Outfits that
              <span className="block text-aliff-gold mt-6">respect your values</span>
            </h1>

            <p className="lead text-2xl md:text-3xl text-aliff-sand mb-16 max-w-3xl mx-auto">
              ALIFF is your personal AI stylist for modest dressing. From the clothes in your closet to looks you love,
              aligned with your coverage, comfort, and values.
            </p>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-20">
              <a
                href="#waitlist"
                onClick={(e) => { e.preventDefault(); smoothScrollTo('waitlist'); }}
                className="btn-premium px-12 py-5 text-lg"
              >
                Join the Waitlist
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => { e.preventDefault(); smoothScrollTo('how-it-works'); }}
                className="btn-premium-outline px-12 py-5 text-lg"
              >
                See How It Works
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-aliff-sand">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Privacy-first AI</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Full delete controls</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Consent-based design</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Modesty-first approach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Problem Section */}
      <section id="problem" className="section-spacing gradient-gold pt-16 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
              Tired of the morning struggle?
            </h2>
            <p className="lead text-aliff-sand max-w-2xl mx-auto">
              Modern styling tools weren't built with modesty in mind. ALIFF changes that.
            </p>
            <div className="gold-accent"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Decision Fatigue',
                description: '"What do I wear?" every morning drains your mental energy before the day even begins.',
                icon: '🧠'
              },
              {
                title: 'Closet Underused',
                description: 'Pieces exist in your wardrobe, but complete outfits don\'t. You own clothes but feel like you have nothing to wear.',
                icon: '👗'
              },
              {
                title: 'Tools Ignore Modesty',
                description: 'Most styling apps don\'t understand modest dressing. You waste time filtering through inappropriate suggestions.',
                icon: '🚫'
              }
            ].map((problem, index) => (
              <div
                key={index}
                className="premium-card rounded-3xl p-10 fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-8">{problem.icon}</div>
                <h3 className="text-2xl font-playfair font-bold mb-6">{problem.title}</h3>
                <p className="text-aliff-sand leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section id="how-it-works" className="section-spacing pt-16 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
              How ALIFF Works
            </h2>
            <p className="lead text-aliff-sand max-w-2xl mx-auto">
              Three simple steps to confident dressing every day
            </p>
            <div className="gold-accent"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                step: '1',
                title: 'Upload Your Wardrobe',
                description: 'Snap photos of your clothes or upload existing ones. Our AI identifies each item and understands modest constraints.',
                features: ['AI garment recognition', 'Modesty tagging', 'Closet organization']
              },
              {
                step: '2',
                title: 'Set Your Preferences',
                description: 'Tell us your coverage level, colors, lifestyle, and dress codes. Modesty becomes your design language.',
                features: ['Coverage preferences', 'Style profiles', 'Context awareness']
              },
              {
                step: '3',
                title: 'Get Outfit Plans',
                description: 'Receive personalized outfit recommendations for the week, tailored to your style, weather, and occasions.',
                features: ['Daily outfit plans', 'Weather adaptation', 'Occasion matching']
              }
            ].map((step, index) => (
              <div key={index} className="text-center fade-in-up">
                <div className="step-circle">{step.step}</div>
                <h3 className="text-2xl font-playfair font-bold mb-6">{step.title}</h3>
                <p className="text-aliff-sand mb-8">{step.description}</p>
                <ul className="space-y-3">
                  {step.features.map((feature, i) => (
                    <li key={i} className="text-sm text-aliff-sand flex items-center">
                      <div className="w-2 h-2 bg-aliff-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="section-spacing gradient-gold pt-16 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8">
              Designed for Modest Women
            </h2>
            <p className="lead text-aliff-sand max-w-2xl mx-auto">
              Features built specifically for your needs
            </p>
            <div className="gold-accent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="premium-card rounded-3xl p-10">
              <h3 className="text-2xl font-playfair font-bold mb-6">Coverage First Design</h3>
              <p className="text-aliff-sand mb-8">
                Modesty isn't a filter-it's the foundation. Every outfit respects your chosen coverage levels.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aliff-gold rounded-full mr-4"></div>
                  <span>Arm coverage settings</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aliff-gold rounded-full mr-4"></div>
                  <span>Leg length preferences</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aliff-gold rounded-full mr-4"></div>
                  <span>Head covering integration</span>
                </div>
              </div>
            </div>

            <div className="premium-card rounded-3xl p-10">
              <h3 className="text-2xl font-playfair font-bold mb-6">Context Aware Suggestions</h3>
              <p className="text-aliff-sand mb-8">
                Outfit recommendations adapt to your daily activities, weather, and cultural context.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aliff-gold rounded-full mr-4"></div>
                  <span>Workplace appropriateness</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aliff-gold rounded-full mr-4"></div>
                  <span>Social event matching</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aliff-gold rounded-full mr-4"></div>
                  <span>Weather adaptation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Waitlist Section */}
      <section id="waitlist" className="section-spacing pt-16 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="premium-card rounded-3xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                  Join the ALIFF Waitlist
                </h2>
                <p className="lead text-aliff-sand">
                  Be among the first to experience AI-powered modest styling. Beta access starts soon.
                </p>
                <div className="gold-accent"></div>
              </div>

              <form className="space-y-8">
                <div>
                  <label className="block text-aliff-cream mb-4 font-medium">Full Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-aliff-cream mb-4 font-medium">Email Address *</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-aliff-cream mb-4 font-medium">Where are you based? *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="City, Country"
                    required
                  />
                </div>

                <div>
                  <label className="block text-aliff-cream mb-4 font-medium">What is your biggest style struggle as a modest woman? *</label>
                  <textarea
                    rows={4}
                    className="form-input resize-none"
                    placeholder="e.g., Finding work-appropriate outfits that are still modest, coordinating hijab with outfits, dealing with decision fatigue every morning..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-premium py-5 text-lg"
                >
                  Join the ALIFF Waitlist
                </button>

                <p className="text-sm text-aliff-sand text-center">
                  Your information is secure. We never share data and respect your privacy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-aliff-navy py-16 border-t border-aliff-gold/20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-12">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="ALIFF Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-2xl font-playfair font-bold">ALIFF</div>
                <div className="text-sm text-aliff-sand">Modesty, intelligently styled.</div>
              </div>
            </div>

            <p className="lead text-aliff-sand mb-10 max-w-lg mx-auto">
              Your AI modest fashion consultant that learns your taste and makes you feel understood.
            </p>

            <div className="mb-10">
              <a href="mailto:hello@aliff.app" className="text-aliff-gold hover:text-aliff-sand transition-colors duration-300 text-lg">
                hello@aliff.app
              </a>
            </div>

            <div className="pt-10 border-t border-aliff-gold/10">
              <p className="text-sm text-aliff-sand">
                © 2024 ALIFF. All rights reserved.<br />
                Built with community feedback from Muslim women worldwide.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}