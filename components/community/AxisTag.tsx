import { getAxis } from "@/lib/community/axes";
import type { AxisId } from "@/lib/community/types";
import { T } from "@/lib/i18n";

/** Chip con el color del eje temático y su etiqueta bilingüe. */
export function AxisTag({ axis }: { axis: AxisId }) {
  const a = getAxis(axis);
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium"
      style={{
        borderColor: `${a.color}55`,
        color: a.color,
        backgroundColor: `${a.color}14`,
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: a.color }}
      />
      <T es={a.label.es} en={a.label.en} />
    </span>
  );
}

/** Fila discreta con los ODS asociados a un contenido. */
export function SdgTags({ sdgs }: { sdgs: number[] }) {
  if (!sdgs.length) return null;
  return (
    <span className="inline-flex items-center gap-1 align-middle">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-night-400">
        ODS
      </span>
      {sdgs.map((n) => (
        <span
          key={n}
          className="flex h-4 w-4 items-center justify-center rounded-[4px] bg-white/10 text-[10px] font-semibold text-night-100"
        >
          {n}
        </span>
      ))}
    </span>
  );
}
