import type { L } from "./types";

/** Formatea una fecha ISO (YYYY-MM-DD) en texto largo bilingüe. */
export function formatMeetingDate(iso: string): L {
  const d = new Date(`${iso}T00:00:00`);
  return {
    es: d.toLocaleDateString("es-AR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    en: d.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  };
}

/** Ordena por `month` (YYYY-MM) descendente: el más reciente primero. */
export function byMonthDesc<T extends { month: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.month.localeCompare(a.month));
}
