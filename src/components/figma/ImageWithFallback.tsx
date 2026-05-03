// src/components/figma/ImageWithFallback.tsx
import React, { useState } from "react";
import { ImageIcon } from "lucide-react";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

interface ImageWithFallbackProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  showLoadingState?: boolean;
}

export function ImageWithFallback({
  showLoadingState = true,
  ...props
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    console.warn(`Failed to load image: ${props.src}`);
    setDidError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const { src, alt, style, className, ...rest } = props;
  const wrapperClassName = `relative ${className ?? ""}`.trim();

  // Estado de error: mostrar icono
  if (didError) {
    return (
      <div
        className={`inline-flex items-center justify-center bg-gray-100 rounded-lg ${
          className ?? ""
        }`}
        style={style}
        title={`Error loading: ${src}`}
      >
        <ImageIcon className="w-8 h-8 text-gray-400" />
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
        src={src}
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
