// src/components/common/Logo.tsx
import { IMAGES } from "@/constants/images";

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'icon' | 'full' | 'image';
  imageUrl?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: {
    box: 'px-2 py-1',
    icon: 'w-6 h-6',
    text: 'text-lg'
  },
  md: {
    box: 'px-3 py-2',
    icon: 'w-8 h-8',
    text: 'text-xl'
  },
  lg: {
    box: 'px-4 py-3',
    icon: 'w-12 h-12',
    text: 'text-2xl'
  }
};

export function Logo({ 
  className = "", 
  showText = true,
  variant = 'icon',
  imageUrl = IMAGES.LOGO,
  size = 'md'
}: LogoProps) {
  const sizeConfig = sizeClasses[size];
  
  // Variante 1: Solo icono SVG
  if (variant === 'icon') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className={`bg-orange-500 rounded-lg ${sizeConfig.box} flex items-center justify-center`}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${sizeConfig.icon} text-white`}
          >
            <path
              d="M16 4L20 8L16 12L12 8L16 4Z"
              fill="currentColor"
            />
            <path
              d="M8 12L12 16L8 20L4 16L8 12Z"
              fill="currentColor"
            />
            <path
              d="M24 12L28 16L24 20L20 16L24 12Z"
              fill="currentColor"
            />
            <path
              d="M16 20L20 24L16 28L12 24L16 20Z"
              fill="currentColor"
            />
            <circle cx="16" cy="16" r="3" fill="currentColor" />
          </svg>
        </div>
        {showText && (
          <span className={`${sizeConfig.text} font-bold tracking-tight text-orange-500`}>
            FITVATCH
          </span>
        )}
      </div>
    );
  }
  
  // Variante 2: Solo imagen + texto
  if (variant === 'image') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <img 
          src={imageUrl} 
          alt="FitVatch Logo" 
          className={`${sizeConfig.icon} rounded-lg object-cover`}
          loading="lazy"
        />
        {showText && (
          <span className={`${sizeConfig.text} font-bold tracking-tight text-orange-500`}>
            FITVATCH
          </span>
        )}
      </div>
    );
  }
  
  // Variante 3: Imagen con fondo
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`bg-orange-500 rounded-lg ${sizeConfig.box} flex items-center justify-center overflow-hidden`}>
        <img 
          src={imageUrl} 
          alt="FitVatch Logo" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      {showText && (
        <span className={`${sizeConfig.text} font-bold tracking-tight text-orange-500`}>
          FITVATCH
        </span>
      )}
    </div>
  );
}
