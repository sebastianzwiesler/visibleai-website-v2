import { Button } from '@/components/ui/button';

// Optimized Hero component for better LCP
export function OptimizedHero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden lcp-optimized">
      {/* Simplified background for faster LCP */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
      {/* Content overlay - optimized for LCP */}
      <div className="relative z-10 text-center text-white px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-4 mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-none font-display">
            Sichtbarkeit.
          </h1>
          <div className="text-5xl md:text-7xl lg:text-8xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-none font-display">
            Neu gedacht.
          </div>
        </div>
        
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-blue-100 mb-6 font-display mt-12">
          In 12 Wochen vom Shop zum KI-Liebling.
        </h2>

        <h3 className="text-xl md:text-2xl text-blue-200 mb-8 font-display">
          Deine Produkte erscheinen direkt in ChatGPT & Co.
        </h3>
        
        {/* Benefits without animations for faster LCP */}
        <div className="text-lg md:text-xl text-blue-200 mb-8 leading-relaxed max-w-3xl mx-auto space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <span className="text-white font-medium">bis zu +35% mehr AI-Sichtbarkeit</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <span className="text-white font-medium">durchschnittlich +10% Assisted-Sales</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <span className="text-white font-medium">Boost für Trust, Traffic & Conversion</span>
            </div>
          </div>
        </div>

        <div className="text-lg md:text-xl text-white mb-12 leading-relaxed max-w-3xl mx-auto">
          <div className="font-medium">100% Done-for-You – kein Code nötig</div>
        </div>
        
        {/* CTA Buttons - optimized for LCP */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg bg-[#2094f3]"
            onClick={() => scrollToSection('audit')}
          >
            🚀 Kostenloses AI Audit starten
          </Button>
          
          <button
            className="text-white hover:text-blue-300 text-lg font-medium underline decoration-2 underline-offset-4 transition-colors"
            onClick={() => scrollToSection('orbit')}
          >Demo Report herunterladen.</button>
        </div>
        
        </div>
    </section>
  );
}