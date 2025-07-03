import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Award, FileCheck, TrendingUp } from 'lucide-react';

export function Proof() {
  const revealRef1 = useScrollReveal();
  const revealRef2 = useScrollReveal();

  return (
    <section id="proof" className="py-20 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div ref={revealRef1} className="scroll-reveal text-center mb-16">
          <h2 className="text-display-lg font-light mb-6 font-display">
            Wissenschaftlich validiert. <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Bereit für den Praxiseinsatz.</span>
          </h2>
        </div>
        
        <div ref={revealRef2} className="scroll-reveal grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white dark:bg-gray-800 border-0 rounded-2xl text-center p-8">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FileCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Wissenschaftlich fundierte Methode</h4>
              <p className="text-apple-gray dark:text-gray-400">Basiert auf aktueller Forschung zu KI-Sichtbarkeit und Retrieval-Systemen</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800 border-0 rounded-2xl text-center p-8">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">+40%</div>
              <h4 className="text-xl font-semibold mb-4">Visibility Steigerung</h4>
              <p className="text-apple-gray dark:text-gray-400">Durchschnittliche Verbesserung der KI-Sichtbarkeit in Studien</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800 border-0 rounded-2xl text-center p-8">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Praxiserprobt</h4>
              <p className="text-apple-gray dark:text-gray-400">Methodik bereits erfolgreich in ersten Pilotprojekten implementiert</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button 
            className="bg-apple-blue text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-apple-blue/90 transition-all transform hover:scale-105"
            onClick={() => window.open('https://visibleai-7layer.replit.app/', '_blank')}
          >
            Studie downloaden
          </Button>
        </div>
      </div>
    </section>
  );
}
