import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from '@/components/Logo';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Lösung', id: 'solution' },
    { label: 'ORBIT', id: 'orbit' },
    { label: 'Proof', id: 'proof' },
    { label: 'Team', id: 'team' },
    { label: 'FAQ', id: 'faq' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Logo className={`transition-colors duration-300 ${
              isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
            }`} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-apple-blue ${
                  isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:underline ${
                isScrolled 
                  ? 'text-gray-700 hover:text-apple-blue dark:text-gray-300 dark:hover:text-apple-blue' 
                  : 'text-white hover:text-blue-300'
              }`}
              onClick={() => scrollToSection('audit')}
            >
              Kostenloses AI Audit
            </button>
            <Button
              className="bg-apple-blue hover:bg-apple-blue/90 text-white"
              onClick={() => scrollToSection('contact')}
            >
              Beratung buchen
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              }`}
              aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-xl border-t border-gray-200 dark:border-gray-700"
            role="navigation"
            aria-label="Mobile Navigation"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-apple-blue transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 space-y-3 border-t border-gray-200 dark:border-gray-700">
                <button
                  className="block w-full text-left py-2 text-apple-blue hover:text-apple-blue/80 font-medium transition-colors"
                  onClick={() => scrollToSection('audit')}
                >
                  Kostenloses AI Audit
                </button>
                <Button
                  className="w-full bg-apple-blue hover:bg-apple-blue/90 text-white"
                  onClick={() => scrollToSection('contact')}
                >
                  Beratung buchen
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}