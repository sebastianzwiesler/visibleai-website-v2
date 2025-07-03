import { Logo } from './Logo';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="text-gray-600 hover:text-blue-600 transition-colors">
            Home
          </a>
          <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
            Services
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
            Kontakt
          </a>
        </div>
      </div>
    </nav>
  );
}
