import type { Axis, AxisId } from "./types";

/* -------------------------------------------------------------------------- */
/*  Los 5 ejes temáticos de la comunidad, con su color y sus ODS asociados.     */
/*  Cada contenido referencia un eje por su id y además lleva sus propios        */
/*  `sdgs`, para poder reorganizar todo por los 17 ODS en el futuro.            */
/* -------------------------------------------------------------------------- */
export const AXES: Axis[] = [
  {
    id: "arte-cultura",
    label: { es: "Arte y Cultura", en: "Art & Culture" },
    color: "#e0915f",
    sdgs: [4, 11],
  },
  {
    id: "ciencia-tecnologia",
    label: { es: "Ciencia y Tecnología", en: "Science & Technology" },
    color: "#7aa2d6",
    sdgs: [9, 4],
  },
  {
    id: "arte-salud",
    label: { es: "Salud", en: "Health" },
    color: "#6fb48a",
    sdgs: [3],
  },
  {
    id: "medio-ambiente",
    label: { es: "Medio Ambiente", en: "Environment" },
    color: "#4C9F38",
    sdgs: [13, 12, 15],
  },
  {
    id: "general",
    label: { es: "General", en: "Lounge" },
    color: "#e9b46f",
    sdgs: [17],
  },
];

const AXIS_MAP: Record<AxisId, Axis> = Object.fromEntries(
  AXES.map((a) => [a.id, a]),
) as Record<AxisId, Axis>;

export function getAxis(id: AxisId): Axis {
  return AXIS_MAP[id];
}
