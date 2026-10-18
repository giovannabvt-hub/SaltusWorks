import type { Book, Film, L } from "@/lib/community/types";
import { Reveal } from "@/components/Reveal";
import { Spark } from "@/components/Spark";
import { T } from "@/lib/i18n";
import { formatMeetingDate } from "@/lib/community/format";
import { AxisTag, SdgTags } from "./AxisTag";
import { MediaCover } from "./MediaCover";

/** Destacado del mes (libro o película): portada + ficha ampliada. */
export function FeaturedMedia({
  item,
  kind,
  eyebrow,
}: {
  item: Book | Film;
  kind: "book" | "film";
  eyebrow: L;
}) {
  const creator = "author" in item ? item.author : item.director;
  const year = "year" in item && item.year ? ` · ${item.year}` : "";
  const meeting = item.meetingDate ? formatMeetingDate(item.meetingDate) : null;

  return (
    <Reveal className="grid gap-8 rounded-3xl border border-glow-400/20 bg-gradient-to-br from-night-900 to-night-950 p-6 sm:grid-cols-[200px_1fr] sm:p-8 lg:gap-10">
      <div className="mx-auto aspect-[3/4] w-full max-w-[200px] overflow-hidden rounded-xl">
        <MediaCover title={item.title} cover={item.cover} axis={item.axis} kind={kind} />
      </div>
      <div className="flex flex-col justify-center">
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-glow-400">
          <Spark className="h-3.5 w-3.5" />
          <T es={eyebrow.es} en={eyebrow.en} />
        </span>
        <h2 className="mt-3 font-serif text-2xl leading-tight text-white sm:text-3xl">
          <T es={item.title.es} en={item.title.en} />
        </h2>
        <p className="mt-1 text-night-300">
          {creator}
          {year}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <AxisTag axis={item.axis} />
          <SdgTags sdgs={item.sdgs} />
        </div>
        <p className="mt-4 text-[15px] leading-relaxed text-night-200">
          <T es={item.description.es} en={item.description.en} />
        </p>
        {meeting && (
          <p className="mt-5 text-sm text-night-100">
            <span className="text-night-400">
              <T es="Próximo encuentro: " en="Next meeting: " />
            </span>
            <span className="text-glow-200">
              <T es={meeting.es} en={meeting.en} />
            </span>
          </p>
        )}
      </div>
    </Reveal>
  );
}
