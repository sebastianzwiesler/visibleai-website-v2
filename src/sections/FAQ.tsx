import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const faqData = [
  {
    question: "Was ist AI Visibility und warum brauche ich es?",
    answer: "AI Visibility ist die Optimierung Ihrer Inhalte für KI-Systeme wie ChatGPT, Amazon Rufus und andere AI-Assistenten. Während traditionelles SEO auf Suchmaschinen-Rankings abzielt, sorgt AI Visibility dafür, dass Ihre Produkte und Services in AI-generierten Antworten erwähnt werden. Studien zeigen: 65% der Nutzer verwenden bereits AI-Tools für Kaufentscheidungen."
  },
  {
    question: "Wie funktioniert Generative Engine Optimization (GEO)?",
    answer: "GEO optimiert Inhalte für generative AI-Modelle durch strukturierte Daten (Schema.org), Vektor-Embeddings und prompt-optimierte Texte. Wir bereiten Ihre Produktdaten so auf, dass AI-Systeme sie verstehen und in relevanten Kontexten zitieren können. Das umfasst semantische Optimierung, Knowledge Graph Integration und AI-lesbare Metadaten."
  },
  {
    question: "Welche Ergebnisse kann ich in 12 Wochen erwarten?",
    answer: "Unsere Kunden sehen durchschnittlich +15% mehr AI-Mentions in 3 Monaten. Konkret bedeutet das: Ihre Produkte werden häufiger in ChatGPT-Antworten, Amazon Rufus Empfehlungen und anderen AI-Assistenten erwähnt. Das führt zu mehr qualifiziertem Traffic, höherem Trust und besseren Conversion-Raten."
  },
  {
    question: "Ist AI Visibility DSGVO-konform?",
    answer: "Ja, unsere AI Visibility Lösung ist vollständig DSGVO-konform. Wir verarbeiten nur öffentlich verfügbare Produktdaten und nutzen keine personenbezogenen Daten. Alle Optimierungen erfolgen auf Basis strukturierter Metadaten, die bereits auf Ihrer Website vorhanden sind oder ergänzt werden."
  },
  {
    question: "Brauche ich technisches Know-how für die Implementierung?",
    answer: "Nein, unser System ist 100% plug & play. Wir integrieren die AI Visibility Optimierungen direkt in Ihre bestehende Website-Struktur. Keine neue Plattform, keine komplexe Installation. Sie erhalten optimierte Schema.org Markups, Vektor-Kataloge und Prompt-Layer - alles automatisiert und update-sicher."
  },
  {
    question: "Wie unterscheidet sich AI Visibility von traditionellem SEO?",
    answer: "Traditionelles SEO optimiert für Suchmaschinen-Rankings, AI Visibility optimiert für AI-Mentions. Während SEO auf Keywords und Backlinks setzt, nutzt AI Visibility strukturierte Daten, semantische Embeddings und prompt-optimierte Inhalte. Beide ergänzen sich perfekt: SEO für Discovery, AI Visibility für Empfehlungen."
  },
  {
    question: "Welche AI-Systeme werden unterstützt?",
    answer: "Unsere Optimierung funktioniert für alle großen AI-Systeme: ChatGPT, Claude, Amazon Rufus, Google Bard, Microsoft Copilot und viele weitere. Da wir auf standardisierte Schema.org Markups und universelle Vektor-Formate setzen, sind unsere Optimierungen zukunftssicher und plattformübergreifend."
  },
  {
    question: "Was kostet AI Visibility und wie ist der ROI?",
    answer: "Preise auf Anfrage – passend zu Shop-Größe & Scope. Gerne erstellen wir Ihnen ein individuelles Angebot."
  },
  {
    question: "Warum sehe ich noch keine Kundenlogos?",
    answer: "VisibleAI ist 2025 gestartet. Aktuell onboarden wir erste Pilot-Shops, um Referenzwerte und Success Stories zu sammeln. Ihr Shop könnte einer davon sein."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-display-lg font-light mb-6 font-display">
            Häufige <span className="text-apple-blue">Fragen.</span>
          </h2>
          <h3 className="text-display-md font-semibold mb-8 font-display">
            Alles über AI Visibility.
          </h3>
          <p className="text-xl text-apple-gray dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Von GEO-Grundlagen bis zur Implementierung – hier finden Sie Antworten.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors rounded-lg"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h4>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-apple-blue flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-apple-blue flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div 
                    id={`faq-answer-${index}`}
                    className="px-6 pb-6 text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {faq.answer}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Haben Sie weitere Fragen zu AI Visibility oder Generative Engine Optimization?
          </p>
          <a 
            href="mailto:info@ai-visibility.com"
            className="inline-flex items-center text-apple-blue hover:text-apple-blue/80 font-semibold transition-colors"
          >
            Kontaktieren Sie unsere AI Visibility Experten
          </a>
        </div>
      </div>
    </section>
  );
}