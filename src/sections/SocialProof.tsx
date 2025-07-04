import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Clock, Users } from 'lucide-react';

export function SocialProof() {
  const revealRef = useScrollReveal();

  return (
    <section className="relative py-24 px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-900/30 via-transparent to-slate-700/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-purple-400/10 rounded-full blur-2xl"></div>
      <div className="relative max-w-5xl mx-auto text-center">
        <div ref={revealRef} className="scroll-reveal">
          {/* Main Headline - Enhanced Hierarchy */}
          <h2 className="text-5xl lg:text-6xl mb-4 font-display leading-tight tracking-tight font-bold">
            Sichtbarkeit entscheidet –
          </h2>
          <h3 className="text-4xl lg:text-5xl font-light mb-16 font-display from-yellow-300 to-orange-300 bg-clip-text text-transparent bg-[#ffffff]">
            sichern Sie Ihren Slot.
          </h3>
          
          {/* Enhanced Glass Card */}
          <div className="relative bg-white/15 backdrop-blur-xl rounded-[32px] p-10 mb-8 border border-white/20 shadow-2xl">
            {/* Inner Glass Reflections */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[32px]"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl -translate-y-4 translate-x-4"></div>
            
            <div className="relative z-10">
              {/* Enhanced Badge Group */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                {/* Urgency Badge - Refined */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/40 to-emerald-400/40 rounded-full blur-lg"></div>
                  <div className="relative inline-flex items-center space-x-3 bg-gradient-to-r from-green-500/95 to-emerald-500/95 backdrop-blur-xl rounded-full px-8 py-4 shadow-xl border border-green-400/30">
                    <Clock className="w-5 h-5 text-white" />
                    <span className="text-lg font-bold text-white tracking-wide">Nur begrenzte Pilotplätze frei</span>
                  </div>
                </div>
                
                {/* Start Date - Enhanced */}
                <div className="relative">
                  <div className="bg-white/20 backdrop-blur-xl rounded-2xl px-8 py-4 border border-white/20 shadow-lg">
                    <p className="text-white font-semibold text-lg tracking-wide">Start Juli 2025</p>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-2xl text-white/95 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
                Wir bauen bewusst mit einer <span className="font-semibold">handvoll Pilot-Shops</span>, um jeden Case persönlich zu begleiten.
              </p>
              
              {/* Waitlist Counter - Enhanced */}
              <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-3xl p-8 mb-10 border border-white/30 shadow-xl max-w-md mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-lg"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <Users className="w-6 h-6 text-blue-200" />
                    <span className="text-lg font-medium text-blue-200">Warteliste</span>
                  </div>
                  <div className="text-5xl font-black text-white mb-2 tracking-tight">4</div>
                  <div className="text-lg text-blue-200 font-medium">Interessenten bereits registriert</div>
                </div>
              </div>
              
              {/* CTA Button - Enhanced */}
              <div className="relative inline-block group">
                {/* Button glow */}
                <div className="absolute inset-0 bg-white/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                
                <Button 
                  className="relative px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-100 shadow-2xl transform hover:scale-105 transition-all duration-300 bg-[#2094f3] text-[#ffffff]"
                  onClick={() => window.open('https://visibleai-7layer.replit.app/', '_blank')}
                >
                  Unverbindlich bewerben
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}