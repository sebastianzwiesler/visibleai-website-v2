import { Database, BrainCircuit, Zap } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Unsere Services</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-slate-50 rounded-lg">
            <Database className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-4">Schema.org Optimierung</h3>
            <p className="text-gray-600">Strukturierte Daten für maximale KI-Sichtbarkeit</p>
          </div>
          
          <div className="text-center p-8 bg-slate-50 rounded-lg">
            <BrainCircuit className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-4">Vektor-Kataloge</h3>
            <p className="text-gray-600">Ihre Produkte in jeder AI-Antwort präsent</p>
          </div>
          
          <div className="text-center p-8 bg-slate-50 rounded-lg">
            <Zap className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-4">Prompt Engineering</h3>
            <p className="text-gray-600">Optimiert für ChatGPT, Claude & Gemini</p>
          </div>
        </div>
      </div>
    </section>
  );
}
