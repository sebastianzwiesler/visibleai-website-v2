import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function InsightsSection() {
  const revealRef = useScrollReveal();

  return (
    <section className="py-20 px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div ref={revealRef} className="scroll-reveal">
          {/* Enhanced Headline */}
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl mb-6 font-display leading-tight tracking-tight text-gray-900 dark:text-white font-bold">
              Die Realität des
            </h2>
            <h3 className="text-4xl lg:text-5xl font-light font-display bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
              AI-Zeitalters
            </h3>
            <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              Warum traditionelle SEO-Strategien nicht mehr ausreichen
            </p>
          </div>
          
          {/* Statistics Cards - Color-coded Design */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="relative bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/30 dark:to-green-900/20 backdrop-blur-xl rounded-[32px] p-10 shadow-lg border border-green-200/30 dark:border-green-800/30">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-[20px] flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-5xl font-black text-green-600 dark:text-green-400 mb-2">77%</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AI Sichtbarkeit</h3>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                  der Suchanfragen enden mit einer KI-Antwort – ohne Klick auf Ihre Website.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20 backdrop-blur-xl rounded-[32px] p-10 shadow-lg border border-blue-200/30 dark:border-blue-800/30">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[20px] flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-5xl font-black text-blue-600 dark:text-blue-400 mb-2">43%</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Assisted Sales</h3>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                  der Kaufentscheidungen werden laut Studien heute von KI-Empfehlungen beeinflusst.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="relative bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/30 dark:to-purple-900/20 backdrop-blur-xl rounded-[32px] p-10 shadow-lg border border-purple-200/30 dark:border-purple-800/30">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-[20px] flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="text-5xl font-black text-purple-600 dark:text-purple-400 mb-2">+40%</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Live KPI Tracking</h3>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                  Sichtbarkeit erzielen Inhalte mit Struktur, Zitaten & Vektoren in AI-Antworten.
                </p>
              </div>
            </div>
          </div>

          {/* Final Statement - Clean Text */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6 font-light leading-relaxed">
              84 % der AI-Ergebnisse stammen nicht aus Googles klassischen Top-3.
            </p>
            <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              Wer nicht zitiert wird, existiert nicht im Moment der Entscheidung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}