"use client";

import { useState } from "react";
import type {
  AxisId,
  Recommendation,
  RecommendationType,
} from "@/lib/community/types";
import { AXES } from "@/lib/community/axes";
import { RECOMMENDATION_TYPES } from "@/lib/community/recommendations";
import { T } from "@/lib/i18n";
import { FilterButton } from "./FilterButton";
import { RecommendationCard } from "./RecommendationCard";

/** Listado de recomendaciones con filtros por tipo y por eje. */
export function RecommendationList({ items }: { items: Recommendation[] }) {
  const [type, setType] = useState<RecommendationType | "all">("all");
  const [axis, setAxis] = useState<AxisId | "all">("all");

  const typesPresent = (
    Object.keys(RECOMMENDATION_TYPES) as RecommendationType[]
  ).filter((t) => items.some((i) => i.type === t));
  const axesPresent = AXES.filter((a) => items.some((i) => i.axis === a.id));

  const filtered = items.filter(
    (i) => (type === "all" || i.type === type) && (axis === "all" || i.axis === axis),
  );

  return (
    <div>
      <div className="space-y-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-night-400">
            <T es="Tipo" en="Type" />
          </p>
          <div className="flex flex-wrap gap-2">
            <FilterButton active={type === "all"} onClick={() => setType("all")}>
              <T es="Todos" en="All" />
            </FilterButton>
            {typesPresent.map((t) => (
              <FilterButton
                key={t}
                active={type === t}
                onClick={() => setType(t)}
              >
                <T es={RECOMMENDATION_TYPES[t].es} en={RECOMMENDATION_TYPES[t].en} />
              </FilterButton>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-night-400">
            <T es="Eje" en="Axis" />
          </p>
          <div className="flex flex-wrap gap-2">
            <FilterButton active={axis === "all"} onClick={() => setAxis("all")}>
              <T es="Todos" en="All" />
            </FilterButton>
            {axesPresent.map((a) => (
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
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <RecommendationCard key={item.id} item={item} delay={(i % 3) * 80} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-night-300">
          <T
            es="No hay recomendaciones con esos filtros."
            en="No recommendations match these filters."
          />
        </p>
      )}
    </div>
  );
}
