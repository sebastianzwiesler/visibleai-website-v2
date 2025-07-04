import { Navigation } from '@/components/Navigation';
import { Hero } from '@/sections/Hero';
import { PainPoint } from '@/sections/PainPoint';
import { Solution } from '@/sections/Solution';
import { Contact } from '@/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <PainPoint />
        <Solution />
        <Contact />
      </main>
    </div>
  );
}
