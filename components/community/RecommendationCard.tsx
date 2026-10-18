import type { Recommendation } from "@/lib/community/types";
import {
  RECOMMENDATION_TYPES,
  CONTENT_LANG_LABELS,
} from "@/lib/community/recommendations";
import { Reveal } from "@/components/Reveal";
import { T } from "@/lib/i18n";
import { AxisTag, SdgTags } from "./AxisTag";

/** Ficha de recomendación con tipo, eje, idioma, descripción y link externo. */
export function RecommendationCard({
  item,
  delay = 0,
}: {
  item: Recommendation;
  delay?: number;
}) {
  const typeLabel = RECOMMENDATION_TYPES[item.type];

  return (
    <Reveal
      delay={delay}
      className="flex flex-col rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-colors hover:border-glow-400/30"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-glow-400/10 px-2.5 py-1 text-xs font-medium text-glow-200">
          <T es={typeLabel.es} en={typeLabel.en} />
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-night-400">
          {CONTENT_LANG_LABELS[item.lang]}
        </span>
      </div>

      <h3 className="mt-4 font-serif text-lg leading-tight text-white">
        <T es={item.title.es} en={item.title.en} />
      </h3>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <AxisTag axis={item.axis} />
        <SdgTags sdgs={item.sdgs} />
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-night-200">
        <T es={item.description.es} en={item.description.en} />
      </p>

      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-glow-300 transition-colors hover:text-glow-200"
      >
        <T es="Ver" en="View" />
        <span aria-hidden="true">→</span>
      </a>
    </Reveal>
  );
}
