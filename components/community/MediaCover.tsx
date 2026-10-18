import { getAxis } from "@/lib/community/axes";
import type { AxisId, L } from "@/lib/community/types";
import { asset } from "@/lib/basePath";
import { T } from "@/lib/i18n";

function BookGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
      <path
        d="M4 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16l-6-3-6 3V5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FilmGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 4v16M16 4v16M3 9h5M16 9h5M3 15h5M16 15h5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

/** Portada/póster: muestra la imagen si existe, o un placeholder elegante con el título. */
export function MediaCover({
  title,
  cover,
  axis,
  kind,
}: {
  title: L;
  cover?: string;
  axis: AxisId;
  kind: "book" | "film";
}) {
  const a = getAxis(axis);

  if (cover) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={asset(cover)}
        alt=""
        className="h-full w-full object-cover"
        loading="lazy"
      />
    );
  }

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-3 p-5 text-center"
      style={{ background: `linear-gradient(160deg, ${a.color}2e, #0a0e18 85%)` }}
    >
      <span style={{ color: a.color }}>
        {kind === "book" ? <BookGlyph /> : <FilmGlyph />}
      </span>
      <span className="font-serif text-base leading-tight text-white/90">
        <T es={title.es} en={title.en} />
      </span>
    </div>
  );
}
