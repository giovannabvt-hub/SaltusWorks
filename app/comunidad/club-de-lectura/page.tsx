import type { Metadata } from "next";
import { Section, SectionTitle, PageHeader } from "@/components/ui";
import { T } from "@/lib/i18n";
import { BOOKS } from "@/lib/community/books";
import { byMonthDesc } from "@/lib/community/format";
import { FeaturedMedia } from "@/components/community/FeaturedMedia";
import { MediaArchive } from "@/components/community/MediaArchive";

export const metadata: Metadata = {
  title: "Club de lectura · Comunidad Saltus",
  description:
    "El club de lectura de la Comunidad Saltus: un libro por mes y un archivo filtrable por eje temático.",
};

export default function ClubDeLecturaPage() {
  const sorted = byMonthDesc(BOOKS);
  const [featured, ...archive] = sorted;

  return (
    <>
      <PageHeader
        eyebrow={<T es="Comunidad · Club de lectura" en="Community · Book Club" />}
        title={<T es="Un libro por mes" en="One book a month" />}
        intro={
          <T
            es="Leemos juntos y nos encontramos para conversar. Cada libro se vincula a un eje temático y a sus ODS."
            en="We read together and meet to talk. Each book is linked to a thematic axis and its SDGs."
          />
        }
      />

      {featured && (
        <Section className="pt-4">
          <FeaturedMedia
            item={featured}
            kind="book"
            eyebrow={{ es: "Libro del mes", en: "Book of the month" }}
          />
        </Section>
      )}

      {archive.length > 0 && (
        <Section className="border-t border-white/5">
          <SectionTitle
            eyebrow={<T es="Archivo" en="Archive" />}
            title={<T es="Libros anteriores" en="Past books" />}
          />
          <div className="mt-10">
            <MediaArchive items={archive} kind="book" />
          </div>
        </Section>
      )}
    </>
  );
}
