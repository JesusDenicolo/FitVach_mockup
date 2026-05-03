interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 md:gap-3 ${className}`}>
      <img
        src="/images/logo.png"
        alt="Logo"
        className="w-8 h-8 md:w-10 md:h-10 rounded-lg"
      />
      {showText && (
        <span className="hidden sm:block text-lg md:text-2xl tracking-tight fitvach-orange">
          FITVATCH
        </span>
      )}
    </div>
  );
}
