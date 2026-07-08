// Prefijo de ruta para assets estáticos.
// Vacío en local/Vercel (raíz); "/SaltusWorks" en GitHub Pages.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefija una ruta absoluta de asset con el basePath. */
export function asset(path: string): string {
  return `${basePath}${path}`;
}
