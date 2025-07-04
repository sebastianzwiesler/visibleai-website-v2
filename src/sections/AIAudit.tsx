import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Timer, TrendingUp, Shield, Users, Clock } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export function AIAudit() {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const revealRef = useScrollReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Redirect to audit results or thank you page
      alert('Vielen Dank! Ihr AI Audit wird in den nächsten 24h erstellt und per E-Mail zugesendet.');
    }, 2000);
  };

  return (
    <section id="audit" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
      <div className="max-w-6xl mx-auto">
        <div ref={revealRef} className="scroll-reveal">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-6 font-display">
              Kostenloses AI Visibility Audit
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Erfahren Sie in 5 Minuten, wie sichtbar Ihr Shop bereits in AI-Systemen ist
            </p>
            
            {/* Value Props */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="flex items-center justify-center space-x-3 text-gray-700 dark:text-gray-300">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-medium">5 Min. Analyse</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-700 dark:text-gray-300">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="font-medium">100% DSGVO-konform</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-700 dark:text-gray-300">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                <span className="font-medium">Sofortige Ergebnisse</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Form */}
            <Card className="bg-white dark:bg-gray-800 shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Starten Sie Ihr kostenloses Audit
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Website URL *
                    </label>
                    <Input
                      type="url"
                      placeholder="https://ihr-shop.de"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      E-Mail für Ergebnisse *
                    </label>
                    <Input
                      type="email"
                      placeholder="ihre@email.de"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Timer className="w-5 h-5 text-yellow-600" />
                      <span className="font-semibold text-yellow-800 dark:text-yellow-300">Limitiertes Angebot</span>
                    </div>
                    <p className="text-sm text-yellow-700 dark:text-yellow-400">Nur noch 7 kostenlose Quick Audits diesen Monat verfügbar. Normalpreis: 150€.</p>
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-medium"
                  >
                    {isSubmitting ? 'Wird analysiert...' : '🚀 Jetzt kostenloses Audit starten'}
                  </Button>
                  
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">Kein Spam. Ergebnisse in max. 2 Werktagen.</p>
                </form>
              </CardContent>
            </Card>

            {/* What you get */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Das erhalten Sie:
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">AI Visibility Score</h4>
                      <p className="text-gray-600 dark:text-gray-300">Ihre aktuelle Sichtbarkeit in ChatGPT, Perplexity & Co.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Schema.org Analyse</h4>
                      <p className="text-gray-600 dark:text-gray-300">Schnelle Bewertung Ihrer strukturierten Daten</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">3 Quick Wins</h4>
                      <p className="text-gray-600 dark:text-gray-300">Sofort umsetzbare Optimierungen für bessere AI-Sichtbarkeit</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Wettbewerbsvergleich</h4>
                      <p className="text-gray-600 dark:text-gray-300">Wie schneiden Sie im Vergleich zu Ihren Mitbewerbern ab?</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Proof */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">247+ Shops analysiert</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Bis zu +40% mehr AI-Mentions nach Optimierung</p>
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