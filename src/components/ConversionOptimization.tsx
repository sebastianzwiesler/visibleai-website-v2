import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, TrendingUp, Star, Zap } from 'lucide-react';

// Urgency & Scarcity Elements
export function UrgencyBadge() {
  const [timeLeft, setTimeLeft] = useState(7);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 7);
    }, 86400000); // Update daily
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center space-x-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-4 py-2 rounded-full text-sm font-medium">
      <Clock className="w-4 h-4 animate-pulse" />
      <span>Nur noch {timeLeft} Plätze im Juni verfügbar</span>
    </div>
  );
}

export function SocialProofCounter() {
  const [count, setCount] = useState(247);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3));
    }, 30000); // Update every 30 seconds
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium">
      <Users className="w-4 h-4" />
      <span>{count}+ Shops bereits analysiert</span>
    </div>
  );
}

export function ValueBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
      <Star className="w-3 h-3" />
      <span>{value} {label}</span>
    </div>
  );
}

// CTA Hierarchy Components
export function PrimaryCTA({ children, onClick, className = "" }: { 
  children: React.ReactNode; 
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Button
      size="lg"
      className={`bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center space-x-2">
        <Zap className="w-5 h-5" />
        <span>{children}</span>
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Button>
  );
}

export function SecondaryCTA({ children, onClick, className = "" }: { 
  children: React.ReactNode; 
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Button
      variant="outline"
      size="lg"
      className={`border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export function TertiaryCTA({ children, onClick, className = "" }: { 
  children: React.ReactNode; 
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      className={`text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium underline underline-offset-4 hover:underline-offset-8 transition-all duration-200 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Trust Signals
export function TrustSignals() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span>DSGVO-konform</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span>Kein Spam</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span>24h Ergebnisse</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span>Geld-zurück-Garantie</span>
      </div>
    </div>
  );
}

// Risk Reversal
export function MoneyBackGuarantee() {
  return (
    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center">
      <div className="flex items-center justify-center space-x-2 mb-2">
        <div className="w-8 h-8 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center">
          <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
        </div>
        <span className="font-semibold text-green-800 dark:text-green-300">30-Tage Geld-zurück-Garantie</span>
      </div>
      <p className="text-sm text-green-700 dark:text-green-400">
        Wenn Sie nicht zufrieden sind, erhalten Sie Ihr Geld zurück. Ohne Fragen.
      </p>
    </div>
  );
}