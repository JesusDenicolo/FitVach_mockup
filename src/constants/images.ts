// src/constants/images.ts
/**
 * Constantes centralizadas para todas las imágenes y URLs
 * TODAS LAS URLS SON DE UNSPLASH (funcionan sin problemas)
 */

/**
 * Constantes para todas las imágenes
 * Usando archivos locales en /public/images
 */

export const IMAGES = {
  // Logo
  LOGO: "/images/logo.png",

  // Imágenes de fondo
  BACKGROUND_LOGIN: "/images/background-login.jpg",
  BACKGROUND_DASHBOARD: "/images/background-dashboard.jpg",

  // Avatares y fotos de atletas
  ATHLETE_FEMALE: "/images/athlete-female.avif", 
  ATHLETE_MALE: "/images/athlete-male.jpg",
  ATHLETE_YOGA: "/images/athlete-yoga.jpg",

  // Placeholder
  PLACEHOLDER: "/images/placeholder.jpg",

  // Iconos
  ICON_RUNNING: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/svgs/solid/person-running.svg",
  ICON_CYCLING: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/svgs/solid/person-biking.svg",
  ICON_YOGA: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/svgs/solid/person.svg",

  // Emoji checkmark
  EMOJI_CHECKMARK: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOSAxNi4xN0w0LjgzIDEyTDMuNDEgMTMuNDFMMSAxNS44M0w5IDE1LjgzTDIxIDMuODNMMTkuNTkgMi40MUw5IDE2LjE3WiIgZmlsbD0iIzRDQUY1MCIvPjwvc3ZnPg==",
} as const;

/**
 * URLs de API externas
 */
export const API_ENDPOINTS = {
  UNSPLASH: "https://api.unsplash.com",
  PLACEHOLDER: "https://via.placeholder.com",
  IMGUR: "https://imgur.com",
} as const;

/**
 * Utilidad para validar si una URL es válida
 */
export function isValidImageUrl(url: string | undefined): boolean {
  if (!url) return false;
  try {
    // Permitir data URIs
    if (url.startsWith("data:")) return true;
    
    // Permitir URLs https
    const urlObj = new URL(url);
    return urlObj.protocol === "https:" || urlObj.protocol === "http:";
  } catch {
    return false;
  }
}

/**
 * Obtener URL con fallback
 */
export function getImageUrl(
  primaryUrl: string | undefined,
  fallbackUrl: string = IMAGES.PLACEHOLDER
): string {
  return primaryUrl && isValidImageUrl(primaryUrl) ? primaryUrl : fallbackUrl;
}

/**
 * Constructores de URLs comunes
 */
export const ImageUrlBuilders = {
  // Unsplash random image con parámetros
  unsplashRandom: (query: string, width: number = 400): string => {
    return `https://source.unsplash.com/${width}x${width}/?${query}`;
  },

  // Placeholder con color
  placeholder: (width: number = 400, height: number = 400, color: string = "cccccc"): string => {
    return `https://via.placeholder.com/${width}x${height}/${color}`;
  },
};

/**
 * Tipos de imagen para componentes
 */
export type ImageType = keyof typeof IMAGES;
