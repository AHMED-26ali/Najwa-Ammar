import { Sparkles } from 'lucide-react';

interface NajwaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showText?: boolean;
}

export default function NajwaLogo({ className = '', size = 'md', showText = true }: NajwaLogoProps) {
  // Dimensions
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32',
    hero: 'w-48 h-48 sm:w-64 sm:h-64'
  };

  const chosenSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`relative inline-flex items-center gap-3 ${className}`}>
      {/* High-Fidelity Official Logo Emblem */}
      <div className={`relative ${chosenSize} shrink-0 rounded-full overflow-hidden shadow-[0_4px_24px_rgba(229,169,60,0.35)] transition-transform duration-300 hover:scale-105 group`}>
        <img
          src="/najwa-ammar-logo.svg"
          alt="شعار نجوى عمار للدعاية والإعلان"
          className="w-full h-full object-contain"
        />
        {/* Ambient subtle glow ring */}
        <div className="absolute inset-0 rounded-full ring-1 ring-amber-400/40 pointer-events-none" />
      </div>

      {showText && (
        <div className="flex flex-col text-right leading-tight">
          <span className="font-black text-slate-900 tracking-tight text-base sm:text-lg flex items-center gap-1.5">
            <span>نجوى عمار</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse inline-block" />
          </span>
          <span className="text-[11px] sm:text-xs font-bold text-emerald-700 tracking-wide">
            للدعاية والإعلان
          </span>
        </div>
      )}
    </div>
  );
}
