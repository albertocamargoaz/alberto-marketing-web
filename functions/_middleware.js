// Limpieza de URLs basura que dejó el sitio anterior (hackeado) en Google.
// Responde 410 (Gone = "ya no existe, no vuelvas") para que Google las olvide
// más rápido que con un 404. Solo corre en las rutas de _routes.json.
const RUTAS_BASURA = /^\/(items|category|shop|toyu|prizes)(\/|$)|^\/\d{6,}\/?$/i;
const CONSULTA_BASURA = /^\?(prizes|items|category)/i;

export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (RUTAS_BASURA.test(url.pathname) || (url.pathname === "/" && CONSULTA_BASURA.test(url.search))) {
    return new Response("410 - Esta página ya no existe.", {
      status: 410,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex",
        "Cache-Control": "public, max-age=86400",
      },
    });
  }
  return context.next();
}
