import type { ReactNode } from "react";

/** Botón de filtro reutilizable (se usa dentro de componentes cliente). */
export function FilterButton({
  active,
  onClick,
  color,
  children,
}: {
  active: boolean;
  onClick: () => void;
  color?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
        active
          ? "border-transparent text-night-950"
          : "border-white/15 text-night-200 hover:border-white/30 hover:text-white"
      }`}
      style={active ? { backgroundColor: color ?? "#e9b46f" } : undefined}
    >
      {children}
    </button>
  );
}
