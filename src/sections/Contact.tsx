import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Mail, Phone, Clock, MapPin, MessageSquare } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { PrimaryCTA, TrustSignals, MoneyBackGuarantee } from '@/components/ConversionOptimization';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const revealRef = useScrollReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Vielen Dank! Wir melden uns innerhalb von 24h bei Ihnen.');
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div ref={revealRef} className="scroll-reveal">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-6 font-display">
              Bereit für mehr AI-Sichtbarkeit?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Lassen Sie uns gemeinsam Ihren Shop in jeder AI-Antwort sichtbar machen
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white dark:bg-gray-800 shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Kostenloses Strategiegespräch buchen
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Ihr Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Max Mustermann"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        E-Mail Adresse *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="max@firma.de"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Unternehmen
                      </label>
                      <Input
                        type="text"
                        name="company"
                        placeholder="Firma GmbH"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Website URL
                      </label>
                      <Input
                        type="url"
                        name="website"
                        placeholder="https://ihr-shop.de"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Ihre Nachricht
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Erzählen Sie uns von Ihren Zielen und Herausforderungen..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-blue-800 dark:text-blue-300">30 Min. Strategiegespräch</span>
                    </div>
                    <p className="text-sm text-blue-700 dark:text-blue-400">
                      Kostenlose Erstberatung inkl. individueller AI Visibility Roadmap
                    </p>
                  </div>
                  
                  <PrimaryCTA className="w-full">
                    {isSubmitting ? 'Wird gesendet...' : 'Jetzt Beratungstermin buchen'}
                  </PrimaryCTA>
                  
                  <TrustSignals />
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Benefits */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Oder kontaktieren Sie uns direkt:
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">E-Mail</h4>
                      <p className="text-gray-600 dark:text-gray-300">hello@visibleai.de</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Telefon</h4>
                      <p className="text-gray-600 dark:text-gray-300">+49 (0) 30 123 456 78</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Erreichbarkeit</h4>
                      <p className="text-gray-600 dark:text-gray-300">Mo-Fr 9:00-18:00 Uhr</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Standort</h4>
                      <p className="text-gray-600 dark:text-gray-300">Berlin, Deutschland</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Money Back Guarantee */}
              <MoneyBackGuarantee />
              
              {/* Response Time Promise */}
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <MessageSquare className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">24h Antwort-Garantie</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Wir melden uns innerhalb eines Werktages bei Ihnen</p>
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