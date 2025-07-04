import { Card, CardContent } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { MessageSquare, ShoppingCart, TrendingUp, BarChart3, Users } from 'lucide-react';

export function PainPoint() {
  const revealRef1 = useScrollReveal();
  const revealRef2 = useScrollReveal();
  const revealRef3 = useScrollReveal();
  const revealRef4 = useScrollReveal();

  return (
    <section className="py-20 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Hero Headline - Enhanced Hierarchy */}
        <div ref={revealRef1} className="scroll-reveal text-center mb-20">
          <h2 className="text-5xl lg:text-6xl mb-6 font-display leading-tight tracking-tight text-gray-900 dark:text-white font-bold">
            Unsichtbar für KI?
          </h2>
          <h3 className="text-4xl lg:text-5xl font-light font-display bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Verlorene Kunden!
          </h3>
        </div>
        
        {/* Case Study - Gradient Background like Sebastian Profile */}
        <div ref={revealRef2} className="scroll-reveal mb-20">
          <div className="relative bg-gradient-to-br from-blue-600/90 via-blue-700/90 to-purple-700/90 backdrop-blur-xl rounded-[32px] p-12 shadow-2xl overflow-hidden border border-white/10">
            {/* Liquid Glass Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent rounded-[32px]"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-400/10 via-transparent to-blue-400/10 rounded-[32px]"></div>
            
            {/* Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/3 w-28 h-28 bg-purple-400/15 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              {/* Badge */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-6 py-3 bg-green-500/95 backdrop-blur-lg text-white rounded-full text-sm font-bold mb-6 shadow-lg">
                  💡 Mini Case Study
                </div>
                <h3 className="text-3xl font-bold text-white">Der verlorene Kunde</h3>
              </div>
              
              {/* Steps - Apple Liquid Glass Style */}
              <div className="grid md:grid-cols-3 gap-10 text-center mb-12">
                <div className="group">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-white/15 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl"></div>
                      <MessageSquare className="relative w-12 h-12 text-white/90" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full"></div>
                      <span className="relative text-white text-sm font-bold">1</span>
                    </div>
                  </div>
                  <p className="text-xl font-medium text-white/90 leading-relaxed">
                    Ein Kunde fragt ChatGPT:<br/>
                    <span className="font-semibold text-white">„Wo kaufe ich Laufschuhe online?"</span>
                  </p>
                </div>
                
                <div className="group">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-white/15 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl"></div>
                      <MessageSquare className="relative w-12 h-12 text-white/90" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full"></div>
                      <span className="relative text-white text-sm font-bold">2</span>
                    </div>
                  </div>
                  <p className="text-xl font-medium text-white/90 leading-relaxed">
                    Die Antwort zeigt 3 Shops.<br/>
                    <span className="font-bold text-white">Ihr Angebot ist nicht dabei.</span>
                  </p>
                </div>
                
                <div className="group">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-white/15 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl"></div>
                      <ShoppingCart className="relative w-12 h-12 text-white/90" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full"></div>
                      <span className="relative text-white text-sm font-bold">3</span>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-white leading-relaxed">
                    100 € Warenkorb<br/>
                    <span className="text-white/80">= 0 € Umsatz</span>
                  </p>
                </div>
              </div>
              
              {/* Result */}
              <div className="text-center">
                <div className="inline-flex items-center px-8 py-4 bg-white/15 backdrop-blur-xl rounded-2xl shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl"></div>
                  <span className="relative text-white font-bold text-xl">Verlust: 100% der Kaufabsicht</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Search Statement - Clean Text */}
        <div ref={revealRef3} className="scroll-reveal text-center mb-20">
          <p className="text-3xl text-gray-900 dark:text-white mb-8 font-light leading-relaxed">
            Willkommen im Zeitalter von AI Search.
          </p>
          <h3 className="text-5xl lg:text-6xl font-display bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight font-bold pl-[0px] pr-[0px] pt-[5px] pb-[5px]">
            Platz 1 in Google ≠ Platz 1 in der KI.
          </h3>
        </div>

        {/* Final Statement - Apple Pill Design */}
        <div className="scroll-reveal text-center">
          <div className="relative inline-block group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400/30 to-gray-600/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            
            {/* Pill */}
            <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl px-12 py-8 rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent rounded-full"></div>
              <p className="relative text-2xl font-bold text-gray-900 dark:text-white leading-relaxed">
                Wer nicht zitiert wird, existiert nicht im Moment der Entscheidung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
