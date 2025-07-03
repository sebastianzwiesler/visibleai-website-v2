interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`font-bold text-2xl text-blue-600 ${className}`}>
      VISIBLE AI
    </div>
  );
}
