interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <img
        src="/images/logo.png"
        alt="Logo"
        width="32"
        height="32"
        className="rounded-lg"
      />
      {/* Logo Text */}
      {showText && (
        <span className="text-2xl tracking-tight fitvach-orange">
          FITVATCH
        </span>
      )}
    </div>
  );
}
