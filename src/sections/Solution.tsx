import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Clock, Users, TrendingUp } from 'lucide-react';

export function Solution() {
  const revealRef = useScrollReveal();

  return (
    <section id="solution" className="py-20 px-6 lg:px-8 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div ref={revealRef} className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light mb-6 font-display">
            Die Lösung?<br/>
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Unser AI-Visibility Accelerator</span>
          </h2>
          
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-blue-50 dark:bg-blue-900/20 border-0 rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Phase 1: Audit</h4>
                <p className="text-sm text-apple-gray dark:text-gray-400">Analyse der aktuellen KI-Sichtbarkeit</p>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 dark:bg-green-900/20 border-0 rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Phase 2: Build</h4>
                <p className="text-sm text-apple-gray dark:text-gray-400">Implementierung der ORBIT-Strategie</p>
              </CardContent>
            </Card>
            
            <Card className="bg-purple-50 dark:bg-purple-900/20 border-0 rounded-2xl">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-7 h-7 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Phase 3: Optimize</h4>
                <p className="text-sm text-apple-gray dark:text-gray-400">Kontinuierliche Verbesserung & Monitoring</p>
              </CardContent>
            </Card>
          </div>

          {/* Blue Text on White Background */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="dark:text-blue-400 text-[36px] font-bold pl-[100px] pr-[100px] bg-[#00000000] text-[#000000]">
              In drei Phasen von der Analyse bis zur kontinuierlichen Optimierung – komplett Done-for-You.
            </p>
          </div>

          {/* White Space */}
          <div className="py-16"></div>

          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 font-bold">
              Das 5-Layer-Modell hinter dem Erfolg
            </p>
            
            <div className="flex items-end justify-center space-x-3 mb-8">
              <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-display">
                ORBIT
              </h2>
              <div className="flex items-center space-x-1 text-sm mb-2">
                <span className="text-gray-500 dark:text-gray-400 font-light">by</span>
                <div className="flex items-center space-x-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">VISIBLE</span>
                  <div className="w-4 h-4 bg-apple-blue rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

          

        </div>
      </div>
    </section>
  );
}
