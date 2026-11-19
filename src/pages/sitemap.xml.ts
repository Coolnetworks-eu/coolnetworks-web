import type { APIRoute } from 'astro';
import routes from '../data/routes.json';
import { TRANSLATIONS, NOINDEX_ROUTES } from '../data/site';

// Sitemap con alternates hreflang (solo los idiomas que existen de verdad).
export const GET: APIRoute = ({ site }) => {
  const origin = site!.origin;
  const abs = (p: string) => origin + (p === '/' ? '/' : p);
  const today = new Date().toISOString().slice(0, 10);
  const urls = routes.filter((r) => !NOINDEX_ROUTES.has(r)).map((r) => {
    const tr = TRANSLATIONS[r] || {};
    const alts = Object.keys(tr).length
      ? [['es', r], ...Object.entries(tr)].map(([l, p]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(p as string)}"/>`).join('\n')
        + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(r)}"/>`
      : '';
    return `  <url>\n    <loc>${abs(r)}</loc>\n    <lastmod>${today}</lastmod>${alts ? '\n' + alts : ''}\n  </url>`;
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
