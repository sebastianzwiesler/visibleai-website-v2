import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { AlertTriangle, Search, MessageSquare, CheckCircle2, Lightbulb, TrendingUp } from 'lucide-react';

export function BusinessImpact() {
  const revealRef = useScrollReveal();

  return (
    <section className="py-20 px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div ref={revealRef} className="scroll-reveal">
          {/* Minimalist Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-6 font-display leading-tight">
              Was das für Ihr Business bedeutet
            </h2>
            <div className="w-16 h-px bg-gray-300 dark:bg-gray-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Die Realität des AI-Zeitalters bringt neue Herausforderungen mit sich
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Challenge Cards - Apple-style minimalist */}
            <div className="lg:col-span-2 grid gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Produktqualität vs. KI-Ignoranz</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Ihre Produkte können besser sein – doch die KI ignoriert sie.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">SEO-Erfolg ohne AI-Sichtbarkeit</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Ihre Website kann auf Platz 1 stehen – doch Sie tauchen nicht in der Antwort auf.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Neue Kaufentscheidungsträger</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Die Empfehlung trifft nicht mehr der Nutzer, sondern ChatGPT & Co.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Card - Height-matched and subtle */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-2xl p-8 border border-green-100 dark:border-green-800/30 shadow-sm h-full flex flex-col">
              <div className="text-center flex-1 flex flex-col justify-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-800/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 font-display">
                  Die gute Nachricht
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-6">
                  Sie können das ändern.
                </p>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full"></div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Strategische AI-Optimierung</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full"></div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Messbare Sichtbarkeitssteigerung</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full"></div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Zukunftssichere Positionierung</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-green-200 dark:border-green-800/50">
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center font-medium">
                  Mit der richtigen Strategie wird Ihr Business sichtbar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}