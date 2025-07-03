import { Zap, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-8 bg-apple-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-xl font-light text-white tracking-wide">VISIBLE</span>
              <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">AI</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">Sichtbarkeit in der KI-gestützten Customer Journey.</p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/ai_visibility" rel="noopener noreferrer" target="_blank" aria-label="AI Visibility auf Twitter">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </a>
              <a href="https://linkedin.com/company/ai-visibility" rel="noopener noreferrer" target="_blank" aria-label="AI Visibility auf LinkedIn">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </a>
              <a href="mailto:info@ai-visibility.com" aria-label="Kontakt per E-Mail">
                <Mail className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Lösungen</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">AI Feed Optimierung</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vektor-Katalog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Schema Integration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prompt Engineering</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Unternehmen</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Über uns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Presse</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold mb-4">Support</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Dokumentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Referenz</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 visibleai. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">AGB</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
