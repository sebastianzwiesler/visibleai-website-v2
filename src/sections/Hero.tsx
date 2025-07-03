import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Check, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';
import { PrimaryCTA, SecondaryCTA, UrgencyBadge } from '@/components/ConversionOptimization';

export function Hero() {
  const revealRef = useScrollReveal();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden lcp-optimized">
      {/* Simplified background for faster LCP */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
        {/* Simplified overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      {/* Content overlay */}
      <div className="relative z-10 text-center text-white px-6 lg:px-8 max-w-5xl mx-auto">
        <div ref={revealRef} className="scroll-reveal">
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
          
          <motion.div 
            className="text-lg md:text-xl text-blue-200 mb-8 leading-relaxed max-w-3xl mx-auto space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          >
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
          </motion.div>

          <motion.div 
            className="text-lg md:text-xl text-white mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          >
            <div className="font-medium">100% Done-for-You – kein Code nötig</div>
          </motion.div>
          
          
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                className="bg-apple-blue hover:bg-apple-blue/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-xl"
                aria-label="Quick Audit starten"
                onClick={() => window.open('https://visibleai-7layer.replit.app/', '_blank')}
              >
                Quick Audit starten
              </Button>
              <a 
                href="https://visibleai-7layer.replit.app/"
                target="_blank"
                className="text-white hover:text-blue-200 text-lg font-medium underline transition-colors"
              >
                Beispiel Report downloaden
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
