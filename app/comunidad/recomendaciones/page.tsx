import type { Metadata } from "next";
import { Section, PageHeader } from "@/components/ui";
import { T } from "@/lib/i18n";
import { RECOMMENDATIONS } from "@/lib/community/recommendations";
import { RecommendationList } from "@/components/community/RecommendationList";

export const metadata: Metadata = {
  title: "Recomendaciones · Comunidad Saltus",
  description:
    "Noticias, cursos, canales, obras, lugares y podcasts recomendados por la Comunidad Saltus, filtrables por tipo y eje temático.",
};

export default function RecomendacionesPage() {
  return (
    <>
      <PageHeader
        eyebrow={<T es="Comunidad · Recomendaciones" en="Community · Recommendations" />}
        title={<T es="Lo que vale la pena conocer" en="Worth discovering" />}
        intro={
          <T
            es="Noticias, cursos, canales, obras, lugares y podcasts que la comunidad comparte. Filtralos por tipo y por eje temático."
            en="News, courses, channels, artworks, places and podcasts the community shares. Filter them by type and thematic axis."
          />
        }
      />

      <Section className="pt-4">
        <RecommendationList items={RECOMMENDATIONS} />
      </Section>
    </>
  );
}
