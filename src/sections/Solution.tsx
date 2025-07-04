import { Database, BrainCircuit, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function Solution() {
  return (
    <section id="solution" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            ORBIT-Methode
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Unsere wissenschaftlich entwickelte 5-Schicht-Methode macht Ihre Produkte in allen KI-Systemen sichtbar.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Database className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-4">Schema.org Optimierung</h3>
              <p className="text-gray-600">Strukturierte Daten für maximale KI-Sichtbarkeit und besseres Ranking in AI-Suchergebnissen.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <BrainCircuit className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-4">Vektor-Kataloge</h3>
              <p className="text-gray-600">Ihre Produkte werden in KI-Datenbanken indexiert und in jeder relevanten AI-Antwort präsent.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Zap className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-4">Prompt Engineering</h3>
              <p className="text-gray-600">Optimiert für ChatGPT, Claude, Gemini und alle kommenden KI-Systeme.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
