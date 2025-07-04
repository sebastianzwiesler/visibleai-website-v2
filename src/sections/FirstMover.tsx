import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function FirstMover() {
  const revealRef = useScrollReveal();

  return (
    <section className="py-20 px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div ref={revealRef} className="scroll-reveal text-center">
          {/* Enhanced Headline */}
          <h2 className="text-4xl lg:text-5xl font-light mb-8 font-display leading-tight tracking-tight text-gray-900 dark:text-white">
            Wer jetzt handelt, <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">gewinnt Marktanteile.</span>
          </h2>
          
          {/* Modern Card with Shadow */}
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-[32px] p-10 mb-12 border border-gray-200 dark:border-gray-700 shadow-xl max-w-5xl mx-auto">
            {/* Subtle accent lines */}
            <div className="absolute top-0 left-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <p className="text-2xl text-gray-900 dark:text-white font-semibold leading-relaxed mb-8">
                First-Mover bauen KI-Autorität auf, die später kaum einzuholen ist.
              </p>
              
              <div className="w-20 h-px bg-gray-300 dark:bg-gray-600 mx-auto mb-8"></div>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                LLMs lernen aus vorhandenen Quellen. Marken, die heute häufig zitiert werden, bleiben als vertrauenswürdige Entität im Modell verankert. Jeder Tag ohne AI-Visibility kostet Sichtbarkeit, die morgen nur mit hohem Budget zurückzugewinnen ist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}