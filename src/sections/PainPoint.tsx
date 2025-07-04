import { motion } from 'framer-motion';

export function PainPoint() {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Unsichtbar für <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">KI</span>? 
            <br />
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Verlorene Kunden!</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Mini Case Study</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">1</div>
                  <p className="text-gray-700">Kunde fragt ChatGPT: "Beste Laufschuhe für Marathon 2024"</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">2</div>
                  <p className="text-gray-700">ChatGPT empfiehlt 5 Marken – Ihr Shop ist nicht dabei</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">3</div>
                  <p className="text-gray-700">Kunde kauft bei der Konkurrenz = Umsatz weg</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-blue-900 mb-4">
                84% aller KI-Suchanfragen führen direkt zu Purchase-Decisions
              </h3>
              <p className="text-blue-700 text-lg">
                Während traditionelle SEO noch auf Google-Rankings setzt, entscheiden KI-Systeme bereits jetzt über Milliarden von Kaufentscheidungen.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-100 rounded-lg">
                <div className="text-4xl font-bold text-gray-800 mb-2">77%</div>
                <p className="text-gray-600">der Online-Shopper nutzen bereits KI für Produktrecherche</p>
              </div>
              <div className="text-center p-6 bg-gray-100 rounded-lg">
                <div className="text-4xl font-bold text-gray-800 mb-2">43%</div>
                <p className="text-gray-600">weniger Traffic durch traditionelle SEO in 2024</p>
              </div>
              <div className="text-center p-6 bg-blue-100 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">+40%</div>
                <p className="text-gray-700">höhere Conversion bei KI-optimierten Shops</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
