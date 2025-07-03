import { Navigation } from '@/components/Navigation';
import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { Contact } from '@/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
    </div>
  );
}
