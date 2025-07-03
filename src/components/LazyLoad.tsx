import { lazy, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load all non-critical sections
export const LazyOrbitMethod = lazy(() => import('@/sections/OrbitMethod').then(module => ({ default: module.OrbitMethod })));
export const LazyProof = lazy(() => import('@/sections/Proof').then(module => ({ default: module.Proof })));
export const LazyTeam = lazy(() => import('@/sections/Team').then(module => ({ default: module.Team })));
export const LazySocialProof = lazy(() => import('@/sections/SocialProof').then(module => ({ default: module.SocialProof })));
export const LazyFAQ = lazy(() => import('@/sections/FAQ').then(module => ({ default: module.FAQ })));

// Skeleton components for loading states
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

// Wrapper component for lazy sections
export function LazySection({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<SectionSkeleton />}>
      {children}
    </Suspense>
  );
}