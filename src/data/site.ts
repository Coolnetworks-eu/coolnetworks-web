// Datos globales del sitio. El dominio sale de astro.config.mjs (site).
export const SITE_NAME = 'Coolnetworks';
export const DEFAULT_LOCALE = 'es';
export const OG_LOCALE: Record<string, string> = { es: 'es_ES', de: 'de_DE', en: 'en_GB', it: 'it_IT' };

/**
 * Versiones por idioma de cada ruta. Hoy el sitio solo tiene contenido en español.
 * Cuando exista una traducción, se añade aquí y el Layout emite su hreflang:
 *   '/it/microsoft-365': { de: '/de/it/microsoft-365', en: '/en/it/microsoft-365' }
 * No se publica hreflang a páginas que no existen (Google lo trata como error).
 */
export const TRANSLATIONS: Record<string, Partial<Record<'es' | 'de' | 'en' | 'it', string>>> = {};

export const CONTACT = {
  phone: '621 15 75 00',
  phoneHref: 'tel:+34621157500',
  whatsapp: 'https://wa.me/34621157500',
  email: 'info@coolnetworks.it', // el correo sigue en .it (no se migra)
};

/** Páginas con noindex (igual que en el sitio original): fuera del sitemap. */
export const NOINDEX_ROUTES = new Set(['/legal/cookies', '/legal/privacidad']);
