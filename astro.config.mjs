// @ts-check
import { defineConfig } from 'astro/config';

// Dominio público final. Canonical, og:url, hreflang, sitemap y robots salen de aquí.
// En el subdominio de prueba se sirve igual (canonical a .eu) y robots.txt bloquea la indexación
// si se construye con PUBLIC_NOINDEX=1.
export default defineConfig({
  site: 'https://coolnetworks.eu',
  trailingSlash: 'never',
  build: {
    // /it/infraestructura -> dist/it/infraestructura.html (Apache lo sirve sin barra final vía .htaccess)
    format: 'file',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
