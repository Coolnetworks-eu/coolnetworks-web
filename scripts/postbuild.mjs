// Después de `astro build`: genera dist/.htaccess (rutas limpias, 301 de rutas antiguas, cabeceras)
// y copia el backend PHP del formulario a dist/api/.
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const redirects = JSON.parse(fs.readFileSync(path.join(root, 'src/data/redirects.json'), 'utf8'));

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const redirectRules = redirects
  .map(({ from, to }) => {
    // "/prefijo/*": cualquier subruta del prefijo (las exactas van antes en redirects.json)
    if (from.endsWith('/*')) return `RewriteRule ^${esc(from.slice(1, -2))}/.+$ ${to} [R=301,L,NE]`;
    // mod_rewrite compara la ruta ya decodificada, así que basta la forma con tildes
    const enc = from;
    const variants = [...new Set([from, enc])];
    return variants.map((v) => `RewriteRule ^${esc(v.slice(1))}/?$ ${to} [R=301,L,NE]`).join('\n');
  })
  .join('\n');

const htaccess = `# Generado por scripts/postbuild.mjs — no editar a mano en el servidor (el deploy lo sobrescribe).
Options -Indexes -MultiViews
DirectorySlash Off
DirectoryIndex index.html
ErrorDocument 404 /404.html
AddDefaultCharset utf-8

# Fuera del dominio de producción (subdominio de prueba, .hostingersite.com...) nada se indexa:
# cabecera X-Robots-Tag y robots.txt que lo bloquea todo. No depende de variables de build.
SetEnvIfNoCase Host "^(www\\.)?coolnetworks\\.eu$" CN_PRODUCTION

<IfModule mod_rewrite.c>
RewriteEngine On

RewriteCond %{HTTP_HOST} !^(www\\.)?coolnetworks\\.eu$ [NC]
RewriteRule ^robots\\.txt$ robots-noindex.txt [L]

# HTTPS y sin www
RewriteCond %{HTTPS} !=on
RewriteCond %{HTTP:X-Forwarded-Proto} !=https
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L,NE]
RewriteCond %{HTTP_HOST} ^www\\.(.+)$ [NC]
RewriteRule ^ https://%1%{REQUEST_URI} [R=301,L,NE]

# Rutas antiguas del sitio Horizons (antes las redirigía React Router)
${redirectRules}

# /ruta.html y /ruta/ -> /ruta (una sola URL por página)
RewriteCond %{THE_REQUEST} \\s/+(.+?)\\.html[\\s?] [NC]
RewriteRule ^ /%1 [R=301,L,NE]
RewriteCond %{REQUEST_URI} ^/(.+)/$
RewriteCond %{DOCUMENT_ROOT}/%1.html -f
RewriteRule ^ /%1 [R=301,L,NE]

# /ruta -> ruta.html (aunque exista también la carpeta /ruta/)
RewriteCond %{REQUEST_URI} !^/api/
RewriteCond %{DOCUMENT_ROOT}/$1.html -f
RewriteRule ^(.+?)/?$ $1.html [L]

# Carpetas sin página propia (/empresa, /ia, /legal, /api...) -> 404, no listado ni 403
RewriteCond %{REQUEST_FILENAME} -d
RewriteCond %{REQUEST_FILENAME}/index.html !-f
RewriteRule ^ - [R=404,L]
</IfModule>

<IfModule mod_headers.c>
Header always set X-Robots-Tag "noindex, nofollow" env=!CN_PRODUCTION
Header always set X-Content-Type-Options "nosniff"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"
Header always set Strict-Transport-Security "max-age=31536000"
<FilesMatch "\\.(css|js|woff2?|png|jpe?g|webp|svg|avif)$">
Header set Cache-Control "public, max-age=31536000, immutable"
</FilesMatch>
<FilesMatch "\\.html$">
Header set Cache-Control "public, max-age=300"
</FilesMatch>
</IfModule>
`;
fs.writeFileSync(path.join(dist, '.htaccess'), htaccess);
fs.writeFileSync(path.join(dist, 'robots-noindex.txt'), 'User-agent: *\nDisallow: /\n');

// backend PHP del formulario
const apiSrc = path.join(root, 'php');
const apiDst = path.join(dist, 'api');
fs.mkdirSync(apiDst, { recursive: true });
for (const f of fs.readdirSync(apiSrc, { recursive: true })) {
  const s = path.join(apiSrc, f);
  const d = path.join(apiDst, f);
  if (fs.statSync(s).isDirectory()) { fs.mkdirSync(d, { recursive: true }); continue; }
  if (/config|example|README/i.test(f)) continue; // nunca credenciales ni plantillas en public_html
  fs.copyFileSync(s, d);
}
console.log(`postbuild: .htaccess (${redirects.length} redirecciones antiguas) y api/ listos`);
