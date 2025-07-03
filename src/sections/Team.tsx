import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Check } from 'lucide-react';

export function Team() {
  const revealRef = useScrollReveal();

  return (
    <section id="team" className="py-20 px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div ref={revealRef} className="scroll-reveal text-center">
          <h2 className="text-display-md font-light mb-8 font-display">
            Erfahrung, die Sie <span className="font-semibold">sichtbar macht.</span>
          </h2>
          <p className="text-xl text-apple-gray dark:text-gray-400 mb-12 leading-relaxed">
            Über 10 Jahre CX-, CRM- & Daten-Expertise – jetzt gebündelt, um Ihre Marke in AI-Antworten nach vorn zu bringen.
          </p>
          
          <div className="relative bg-gradient-to-br from-blue-600/90 via-blue-700/90 to-purple-700/90 backdrop-blur-xl rounded-[32px] p-12 mb-12 shadow-2xl overflow-hidden border border-white/10">
            {/* Liquid Glass Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent rounded-[32px]"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-purple-400/10 via-transparent to-blue-400/10 rounded-[32px]"></div>
            
            {/* Floating Glass Elements */}
            <div className="absolute top-8 left-8 w-24 h-24 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 rotate-12"></div>
            <div className="absolute bottom-12 right-12 w-16 h-16 bg-white/3 backdrop-blur-sm rounded-xl border border-white/8 -rotate-6"></div>
            
            {/* Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/3 w-28 h-28 bg-purple-400/15 rounded-full blur-2xl"></div>
            
            {/* Badge with Glass Effect */}
            <div className="absolute top-8 right-8">
              <div className="bg-green-500/90 backdrop-blur-lg text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-green-400/30">
                GRÜNDER
              </div>
            </div>
            
            <div className="relative z-10 text-center">
              {/* Hero Name - Dramatic scale and spacing */}
              <h3 className="text-6xl mb-4 text-white tracking-tight leading-none font-bold">Vorname Nachname</h3>
              
              {/* Role - Enhanced glass pill with glow */}
              <div className="relative inline-block group mb-12">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                {/* Glass pill */}
                <div className="relative bg-white/15 backdrop-blur-xl rounded-3xl px-8 py-4 shadow-2xl">
                  {/* Inner glass reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl"></div>
                  
                  {/* Text */}
                  <p className="relative text-white font-bold text-2xl tracking-wide drop-shadow-lg">
                    CX & AI Consultant
                  </p>
                </div>
              </div>
              
              {/* Quote - Emphasis with typography */}
              <blockquote className="text-2xl text-white/95 mb-16 leading-relaxed font-light italic max-w-2xl mx-auto">
                „Ich mache komplexe Customer Journeys messbar –<br />
                <span className="font-medium">und künftig auch AI-visible.</span>"
              </blockquote>
              
              {/* Credentials with Glass Cards */}
              <div className="space-y-6 text-left max-w-3xl mx-auto">
                <div className="flex items-start space-x-5 bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <div className="w-7 h-7 bg-white backdrop-blur-sm rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 shadow-lg">
                    <Check className="w-4 h-4 text-blue-600 font-bold" />
                  </div>
                  <span className="text-lg text-white/95 leading-relaxed font-medium">10+ Jahre Beratung für CX, CRM, Loyalty & Strategy</span>
                </div>
                <div className="flex items-start space-x-5 bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <div className="w-7 h-7 bg-white backdrop-blur-sm rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 shadow-lg">
                    <Check className="w-4 h-4 text-blue-600 font-bold" />
                  </div>
                  <span className="text-lg text-white/95 leading-relaxed font-medium">B2B & B2C Website-Relaunches & Conversion-Optimierungen</span>
                </div>
                <div className="flex items-start space-x-5 bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <div className="w-7 h-7 bg-white backdrop-blur-sm rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 shadow-lg">
                    <Check className="w-4 h-4 text-blue-600 font-bold" />
                  </div>
                  <span className="text-lg text-white/95 leading-relaxed font-medium">CRM- & Marketing-Automation-Programme für Scale-Ups und Enterprise-Level</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Neugierig?</h4>
            <p className="text-lg text-apple-gray dark:text-gray-400 mb-8">
              Lassen Sie uns in 15 Minuten prüfen, wie wir Ihre KI-Sichtbarkeit beschleunigen.
            </p>
            <Button 
              className="bg-apple-blue hover:bg-apple-blue/90 text-white px-8 py-4 rounded-full text-lg font-medium"
              onClick={() => window.open('https://visibleai-7layer.replit.app/', '_blank')}
            >
              Kennenlerngespräch buchen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}