import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { OrbitVisualization } from './OrbitVisualization';
import { Button } from '@/components/ui/button';

export function OrbitMethod() {
  const revealRef = useScrollReveal();

  return (
    <section id="orbit" className="py-20 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div ref={revealRef} className="scroll-reveal text-center mb-16">
          <h2 className="text-3xl font-light mb-8 font-display">
            <span className="flex items-center justify-center gap-4 flex-wrap">
              <span>So funktioniert's: Der</span>
              <span className="flex items-center gap-2">
                <span className="text-gray-900 dark:text-white font-medium">VISIBLE</span>
                <span className="w-8 h-8 bg-apple-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </span>
              </span>
              <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">ORBIT</span>
            </span>
          </h2>
          
          <OrbitVisualization />
          
          <div className="mt-12">
            <Button 
              className="bg-apple-blue text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-apple-blue/90 transition-all transform hover:scale-105"
              onClick={() => window.open('https://visibleai-7layer.replit.app/', '_blank')}
            >
              Mehr erfahren
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}