// Comprueba una web desplegada (solo lectura): cada ruta da 200 con su canonical, las rutas antiguas
// dan 301 a su destino, /ruta.html y /ruta/ redirigen a /ruta, el 404 es 404, y robots/sitemap responden.
// Uso: npm run check:routes -- https://subdominio-de-prueba.hostingersite.com
import fs from 'node:fs';

const base = (process.argv[2] || '').replace(/\/$/, '');
if (!base) { console.error('Uso: node scripts/check-routes.mjs <url-base>'); process.exit(2); }
const routes = JSON.parse(fs.readFileSync(new URL('../src/data/routes.json', import.meta.url), 'utf8'));
const redirects = JSON.parse(fs.readFileSync(new URL('../src/data/redirects.json', import.meta.url), 'utf8'));

let fail = 0;
const ok = (cond, msg) => { console.log((cond ? 'OK    ' : 'FALLO ') + msg); if (!cond) fail++; };
const get = (path) => fetch(base + encodeURI(path), { redirect: 'manual' });

for (const r of routes) {
  const res = await get(r);
  const html = res.status === 200 ? await res.text() : '';
  const canon = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  ok(res.status === 200 && canon === 'https://coolnetworks.eu' + (r === '/' ? '/' : r), `${r} -> ${res.status} canonical ${canon}`);
}
for (const { from, to } of redirects) {
  const res = await get(from.replace('/*', '/x'));
  const loc = res.headers.get('location') || '';
  ok(res.status === 301 && new URL(loc, base).pathname === to, `${from} -> ${res.status} ${loc}`);
}
for (const [path, to] of [['/it/microsoft-365.html', '/it/microsoft-365'], ['/it/', '/it'], ['/empresa/contacto/', '/empresa/contacto']]) {
  const res = await get(path);
  const loc = res.headers.get('location') || '';
  ok(res.status === 301 && new URL(loc, base).pathname === to, `${path} -> ${res.status} ${loc}`);
}
for (const p of ['/no-existe', '/empresa', '/ia']) {
  const res = await get(p);
  ok(res.status === 404, `${p} -> ${res.status} (404 esperado)`);
}
const robots = await get('/robots.txt');
ok(robots.status === 200, `/robots.txt -> ${robots.status}: ${(await robots.text()).trim().replace(/\n/g, ' | ')}`);
const sm = await get('/sitemap.xml');
ok(sm.status === 200 && (await sm.text()).includes('<loc>https://coolnetworks.eu/</loc>'), `/sitemap.xml -> ${sm.status}`);
const cfg = await get('/api/contacto-config.php');
ok(cfg.status === 404, `/api/contacto-config.php -> ${cfg.status} (no debe existir)`);
const api = await get('/api/contacto.php');
ok(api.status === 405, `/api/contacto.php GET -> ${api.status} (405 esperado: solo POST)`);

console.log(fail ? `\n${fail} FALLOS` : '\nTodo OK');
process.exit(fail ? 1 : 0);
