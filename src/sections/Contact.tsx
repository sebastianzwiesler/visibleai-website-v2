import { Button } from '@/components/Button';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Bereit für mehr AI-Sichtbarkeit?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Starten Sie mit unserem kostenlosen AI-Audit und entdecken Sie das Potenzial Ihrer Website.
        </p>
        <Button 
          className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 text-lg"
          onClick={() => window.open('https://visibleai-7layer.replit.app/', '_blank')}
        >
          Kostenloses Audit starten
        </Button>
      </div>
    </section>
  );
}
