# coolnetworks-web

Web comercial de **CoolNetworks** (`https://coolnetworks.eu`). Sitio estático generado con
[Astro](https://astro.build) + Tailwind CSS, alojado en el plan **Business Web Hosting** de Hostinger.
Sustituye al proyecto de Hostinger Horizons `edc82c9d-4fec-483e-8b42-01568af657a9` (hasta nov-2026 en
`coolnetworks.it`), para poder cancelar la suscripción *Horizons Explorer*.

## Qué hay aquí

| Ruta | Qué es |
|---|---|
| `src/pages/**.astro` | Una página por ruta (53 + 404). HTML con clases de Tailwind, importado del sitio Horizons el 19-nov-2026. **El texto se edita aquí.** |
| `src/layouts/Layout.astro` | `<head>`: title, description, canonical, hreflang, Open Graph, Twitter, JSON-LD. Cabecera, pie, banner de cookies. |
| `src/components/` | Cabecera (menús), pie, botones flotantes, banner de cookies, iconos. |
| `src/data/nav.json` | Menú (escritorio y móvil). |
| `src/data/routes.json` | Rutas publicadas: alimentan el sitemap y `npm run check:routes`. **Añadir aquí cada página nueva.** |
| `src/data/redirects.json` | Rutas antiguas del sitio Horizons → 301 (las genera `scripts/postbuild.mjs` en `.htaccess`). |
| `src/data/site.ts` | Contacto, traducciones (hreflang) y páginas `noindex`. |
| `src/scripts/site.ts` | JS mínimo: menús, carrusel, aparición al hacer scroll, cookies, envío de formularios. Sin JS la web se lee igual. |
| `php/contacto.php` | Backend del formulario de contacto y de los 4 diagnósticos (sustituye a PocketBase de Horizons). Se copia a `dist/api/`. |
| `scripts/postbuild.mjs` | Genera `dist/.htaccess` y copia el PHP. |
| `scripts/check-routes.mjs` | Verificación (solo lectura) de una web desplegada. |
| `public/img/` | Imágenes (las del sitio original, optimizadas a WebP). |

## Trabajar en local

```bash
npm ci
npm run dev          # http://localhost:4321
npm run build        # genera dist/ (HTML por ruta + .htaccess + api/)
```

Node 22.12 o superior. El formulario no funciona en local (no hay PHP ni SMTP): muestra el mensaje de error con `info@coolnetworks.it`.

## Despliegue

1. Push a `main` → GitHub Actions (`.github/workflows/deploy.yml`) construye y publica `dist/` en la rama **`deploy`**.
2. Hostinger tiene la rama `deploy` conectada (Git → autodeploy) al sitio y la copia en `public_html` en cada push.

Mientras la web esté en el subdominio de prueba, la variable del repositorio `PUBLIC_NOINDEX=1` hace que
`robots.txt` bloquee todo y cada página lleve `noindex`. **Quitarla** al apuntar `coolnetworks.eu`.

Comprobar un despliegue:

```bash
npm run check:routes -- https://<dominio>
```

## URLs

- Canonical, `og:url`, sitemap y robots apuntan siempre a `https://coolnetworks.eu` (`site` en `astro.config.mjs`).
- Las rutas son las mismas que en el sitio Horizons, sin barra final: `coolnetworks.it` hará 301 a la misma ruta en `.eu`.
- `/ruta.html` y `/ruta/` redirigen a `/ruta`; las carpetas sin página (`/empresa`, `/ia`, `/legal`) dan 404 como antes.
- **hreflang**: hoy solo hay español (`es` + `x-default`). Para publicar una traducción, crear la página
  (p. ej. `src/pages/de/it/microsoft-365.astro` con `lang="de"`) y registrarla en `TRANSLATIONS` de `src/data/site.ts`:
  el Layout y el sitemap emiten los alternates. No se declara hreflang a páginas que no existen.
- El correo sigue en `.it` (`info@coolnetworks.it`): no cambia con el dominio de la web.

## Formulario

`php/contacto.php` valida (honeypot `company_website`, tiempo mínimo, límite por IP, consentimiento), envía
por **SMTP de Hostinger Mail** a `info@coolnetworks.it` con `Reply-To` del solicitante, y guarda una copia
(JSON por líneas) fuera de `public_html` si se configura `store_dir`.

**Ninguna credencial está en el repositorio.** La configuración se crea a mano en el servidor
(Administrador de archivos de hPanel), **un nivel por encima de `public_html`**:

```
/home/<usuario>/domains/<dominio>/contacto-config.php     ← copia de php/contacto-config.example.php con los datos reales
/home/<usuario>/domains/<dominio>/solicitudes-web/        ← carpeta para store_dir (opcional)
```

Si falta el fichero, el formulario responde error y la web muestra el aviso de escribir a `info@coolnetworks.it`.
