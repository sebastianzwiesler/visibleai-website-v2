import { Navigation } from '@/components/Navigation';
import { OptimizedHero } from '@/components/OptimizedHero';
import { PainPoint } from '@/sections/PainPoint';
import { InsightsSection } from '@/sections/InsightsSection';
import { FirstMover } from '@/sections/FirstMover';
import { BusinessImpact } from '@/sections/BusinessImpact';
import { Solution } from '@/sections/Solution';
import { AIAudit } from '@/sections/AIAudit';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { 
  LazyOrbitMethod, 
  LazyProof, 
  LazyTeam, 
  LazySocialProof, 
  LazyFAQ, 
  LazySection 
} from '@/components/LazyLoad';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main id="main-content">
        <OptimizedHero />
        <PainPoint />
        <InsightsSection />
        <FirstMover />
        <BusinessImpact />
        <Solution />
        
        {/* Lazy loaded sections for better LCP */}
        <LazySection>
          <LazyOrbitMethod />
        </LazySection>
        
        <AIAudit />
        
        <LazySection>
          <LazyProof />
        </LazySection>
        
        <LazySection>
          <LazyTeam />
        </LazySection>
        
        <LazySection>
          <LazySocialProof />
        </LazySection>
        
        <LazySection>
          <LazyFAQ />
        </LazySection>
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
