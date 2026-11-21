# alberto.marketing

Sitio estático (HTML + CSS, sin WordPress) publicado gratis en Cloudflare Pages.

- `index.html`: inicio. `el-anti-curso/`: página del programa. `pago-pendiente/`: a donde Wompi redirige si el pago falla. `gracias/`: tras pago aprobado.
- `assets/logo.svg`, `logo-oscuro.svg`, `favicon.svg`: cambiar solo estos archivos si se rediseña el logo.
- Links de pago: buscar `#WOMPI` y `#PAYPAL` y reemplazarlos. En `el-anti-curso/index.html` quitar `hidden` del bloque de pagos.
- WhatsApp: buscar `573204545118` si cambia el número.

## SEO y archivos especiales (21 nov 2026)
- Datos estructurados (JSON-LD): Persona + Sitio en el inicio; Curso + Preguntas frecuentes + Migas en El Anti-Curso. Si cambias preguntas visibles, cambia también el JSON-LD.
- `assets/compartir-1200x630.png`: imagen al compartir en redes. Iconos PNG y `site.webmanifest`.
- `llms.txt`: resumen para asistentes de IA (AEO/GEO). Actualízalo al agregar páginas.
- Archivo `<clave>.txt` en la raíz: clave de IndexNow (Bing, Yandex). No borrarlo.
- `_headers`: seguridad y caché de `/assets/`. Web Analytics de Cloudflare activado (sin cookies).
- Al agregar páginas: sumarlas a `sitemap.xml` (con `lastmod`) y a `llms.txt`.
