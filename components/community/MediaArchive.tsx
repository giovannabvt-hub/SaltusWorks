"use client";

import { useState } from "react";
import type { AxisId, Book, Film } from "@/lib/community/types";
import { AXES } from "@/lib/community/axes";
import { T } from "@/lib/i18n";
import { FilterButton } from "./FilterButton";
import { MediaCard } from "./MediaCard";

/** Archivo filtrable por eje (libros o películas). */
export function MediaArchive({
  items,
  kind,
}: {
  items: (Book | Film)[];
  kind: "book" | "film";
}) {
  const [axis, setAxis] = useState<AxisId | "all">("all");
  const present = AXES.filter((a) => items.some((i) => i.axis === a.id));
  const filtered = axis === "all" ? items : items.filter((i) => i.axis === axis);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <FilterButton active={axis === "all"} onClick={() => setAxis("all")}>
          <T es="Todos" en="All" />
        </FilterButton>
        {present.map((a) => (
          <FilterButton
            key={a.id}
            active={axis === a.id}
            onClick={() => setAxis(a.id)}
            color={a.color}
          >
            <T es={a.label.es} en={a.label.en} />
          </FilterButton>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <MediaCard key={item.id} item={item} kind={kind} delay={(i % 3) * 80} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-night-300">
          <T es="Todavía no hay títulos en este eje." en="No titles in this axis yet." />
        </p>
      )}
    </div>
  );
}
