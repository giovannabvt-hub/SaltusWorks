import type { Book, Film } from "@/lib/community/types";
import { Reveal } from "@/components/Reveal";
import { T } from "@/lib/i18n";
import { AxisTag, SdgTags } from "./AxisTag";
import { MediaCover } from "./MediaCover";

/** Tarjeta vertical para el archivo de libros o películas. */
export function MediaCard({
  item,
  kind,
  delay = 0,
}: {
  item: Book | Film;
  kind: "book" | "film";
  delay?: number;
}) {
  const creator = "author" in item ? item.author : item.director;
  const year = "year" in item && item.year ? ` · ${item.year}` : "";

  return (
    <Reveal
      delay={delay}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] transition-colors hover:border-glow-400/30"
    >
      <div className="aspect-[3/4] w-full overflow-hidden">
        <MediaCover title={item.title} cover={item.cover} axis={item.axis} kind={kind} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg leading-tight text-white">
          <T es={item.title.es} en={item.title.en} />
        </h3>
        <p className="mt-1 text-sm text-night-300">
          {creator}
          {year}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <AxisTag axis={item.axis} />
          <SdgTags sdgs={item.sdgs} />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-night-200">
          <T es={item.description.es} en={item.description.en} />
        </p>
      </div>
    </Reveal>
  );
}
