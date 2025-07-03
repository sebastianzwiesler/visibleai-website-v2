import logoPath from '@assets/image_1750367145394.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'png' | 'svg';
  isDarkBackground?: boolean;
}

export function Logo({ 
  className = '', 
  size = 'md', 
  variant = 'svg',
  isDarkBackground = false 
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8', 
    lg: 'h-10'
  };

  if (variant === 'png') {
    return (
      <img 
        src={logoPath} 
        alt="Visible AI Logo" 
        className={`${sizeClasses[size]} object-contain ${className}`}
      />
    );
  }

  // SVG version - coded like the previous AI Visibility + icon approach
  const textColor = isDarkBackground ? '#FFFFFF' : '#1F2937';
  
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <span 
        className={`${size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl'} font-bold transition-colors`}
        style={{ color: textColor }}
      >
        VISIBLE
      </span>
      <div className={`${size === 'sm' ? 'w-6 h-6' : size === 'md' ? 'w-8 h-8' : 'w-10 h-10'} bg-blue-500 rounded-full flex items-center justify-center`}>
        <span className="text-white font-bold text-sm">AI</span>
      </div>
    </div>
  );
}

// SVG Logo component for when you have an SVG file
interface SVGLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export function SVGLogo({ className = '', size = 'md', color = 'currentColor' }: SVGLogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  // Replace this with your actual SVG content when available
  return (
    <svg 
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Replace with your SVG path when available */}
      <rect x="3" y="3" width="18" height="18" rx="4" fill={color} />
      <path d="M12 8l4 8H8l4-8z" fill="white" />
    </svg>
  );
}