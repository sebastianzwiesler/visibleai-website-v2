import { Button } from '@/components/Button';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Bereit für mehr AI-Sichtbarkeit?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Starten Sie mit unserem kostenlosen AI-Audit und entdecken Sie das Potenzial Ihrer Website.
          </p>
          <div className="space-y-4">
            <Button 
              variant="secondary"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg"
              onClick={() => window.open('https://visibleai-7layer.replit.app/', '_blank')}
            >
              Kostenloses Audit starten
            </Button>
            <div className="text-blue-200">
              <p>Kostenlos • Dauert 2 Minuten • Sofortige Ergebnisse</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
