import { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load heavy sections
export const LazyOrbitVisualization = lazy(() => 
  import('@/sections/OrbitVisualization').then(module => ({ default: module.OrbitVisualization }))
);

export const LazyTeam = lazy(() => 
  import('@/sections/Team').then(module => ({ default: module.Team }))
);

export const LazySocialProof = lazy(() => 
  import('@/sections/SocialProof').then(module => ({ default: module.SocialProof }))
);

// Loading skeletons for sections
export function SectionSkeleton() {
  return (
    <div className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-96 mx-auto mb-6" />
          <Skeleton className="h-4 w-64 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function OrbitSkeleton() {
  return (
    <div className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <Skeleton className="h-12 w-80 mx-auto mb-8" />
        <div className="relative">
          <Skeleton className="h-96 w-96 mx-auto rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-20 w-20 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Optimized image component
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false 
}: OptimizedImageProps) {
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/, '.webp');
  
  return (
    <picture className={className}>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="w-full h-auto"
      />
    </picture>
  );
}

// Critical CSS for above-the-fold content
export const CriticalCSS = `
  /* Critical styles for hero section */
  .hero-gradient {
    background: linear-gradient(135deg, #1e293b 0%, #1e40af 50%, #1e293b 100%);
  }
  
  .hero-text-shadow {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  /* Navigation styles */
  .nav-blur {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
  
  /* Button styles */
  .btn-primary {
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
  }
  
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.6);
  }
`;

// Preload critical resources
export function preloadCriticalResources() {
  // Preload fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.href = '/fonts/inter-var.woff2';
  fontLink.as = 'font';
  fontLink.type = 'font/woff2';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);
  
  // Preload hero background
  const heroImageLink = document.createElement('link');
  heroImageLink.rel = 'preload';
  heroImageLink.href = '/images/hero-bg.webp';
  heroImageLink.as = 'image';
  document.head.appendChild(heroImageLink);
}

// Initialize performance optimizations
export function initPerformanceOptimizations() {
  // Preload critical resources
  if (typeof window !== 'undefined') {
    preloadCriticalResources();
    
    // Enable DNS prefetch for external resources
    const dnsPrefetchDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'www.googletagmanager.com'
    ];
    
    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });
  }
}