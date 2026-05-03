// src/components/figma/ImageWithFallback.tsx
import React, { useEffect, useState } from "react";
import { ImageIcon } from "lucide-react";
import { IMAGES } from "@/constants/images";

interface ImageWithFallbackProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  showLoadingState?: boolean;
  fallbackSrc?: string;
}

export function ImageWithFallback({
  showLoadingState = true,
  fallbackSrc,
  src,
  ...props
}: ImageWithFallbackProps) {
  const finalFallbackSrc = fallbackSrc ?? IMAGES.PLACEHOLDER;
  const [currentSrc, setCurrentSrc] = useState<string>(
    typeof src === "string" && src.length > 0 ? src : finalFallbackSrc
  );
  const [didError, setDidError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCurrentSrc(typeof src === "string" && src.length > 0 ? src : finalFallbackSrc);
    setDidError(false);
    setIsLoading(true);
  }, [src, finalFallbackSrc]);

  const handleError = () => {
    if (currentSrc !== finalFallbackSrc) {
      setCurrentSrc(finalFallbackSrc);
      setDidError(true);
    } else {
      setDidError(true);
    }
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const { alt, style, className, ...rest } = props;
  const wrapperClassName = `relative ${className ?? ""}`.trim();

  // Estado de error: mostrar imagen de fallback
  if (didError) {
    return (
      <div className={wrapperClassName} style={style}>
        <img
          src={finalFallbackSrc}
          alt={alt ?? "Imagen de respaldo"}
          className={`${className ?? ""} opacity-100 object-cover`}
          {...rest}
        />
      </div>
    );
  }

  // Mostrar imagen siempre, con skeleton sobrepuesta mientras carga
  return (
    <div className={wrapperClassName} style={style}>
      {isLoading && showLoadingState && (
        <div
          className="absolute inset-0 animate-pulse bg-gray-200 rounded-lg"
          aria-label="Loading image..."
        />
      )}
      <img
        src={currentSrc}
        alt={alt}
        className={`${className ?? ""} ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        {...rest}
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
