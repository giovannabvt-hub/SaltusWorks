import type { Metadata } from "next";
import { Section, SectionTitle, PageHeader } from "@/components/ui";
import { T } from "@/lib/i18n";
import { FILMS } from "@/lib/community/films";
import { byMonthDesc } from "@/lib/community/format";
import { FeaturedMedia } from "@/components/community/FeaturedMedia";
import { MediaArchive } from "@/components/community/MediaArchive";

export const metadata: Metadata = {
  title: "Cine club · Comunidad Saltus",
  description:
    "El cine club de la Comunidad Saltus: una película por mes y un archivo filtrable por eje temático.",
};

export default function CineClubPage() {
  const sorted = byMonthDesc(FILMS);
  const [featured, ...archive] = sorted;

  return (
    <>
      <PageHeader
        eyebrow={<T es="Comunidad · Cine club" en="Community · Film Club" />}
        title={<T es="Una película por mes" en="One film a month" />}
        intro={
          <T
            es="Vemos cine y nos reunimos para comentarlo. Cada película se vincula a un eje temático y a sus ODS."
            en="We watch films and meet to discuss them. Each film is linked to a thematic axis and its SDGs."
          />
        }
      />

      {featured && (
        <Section className="pt-4">
          <FeaturedMedia
            item={featured}
            kind="film"
            eyebrow={{ es: "Película del mes", en: "Film of the month" }}
          />
        </Section>
      )}

      {archive.length > 0 && (
        <Section className="border-t border-white/5">
          <SectionTitle
            eyebrow={<T es="Archivo" en="Archive" />}
            title={<T es="Películas anteriores" en="Past films" />}
          />
          <div className="mt-10">
            <MediaArchive items={archive} kind="film" />
          </div>
        </Section>
      )}
    </>
  );
}
