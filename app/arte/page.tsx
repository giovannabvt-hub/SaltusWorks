import type { Metadata } from "next";
import {
  Section,
  SectionTitle,
  PageHeader,
  Placeholder,
  CTASection,
} from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Spark } from "@/components/Spark";
import { T } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Semillas",
  description:
    "Un espacio editorial de Saltus Works dedicado a difundir arte de distintos lugares y a dar voz a los artistas que transforman el mundo.",
};

export default function ArtePage() {
  const topics = [
    { es: "Música que sana", en: "Music that heals" },
    { es: "Retratos de artistas", en: "Artist portraits" },
    { es: "Arte desde Argentina", en: "Art from Argentina" },
    { es: "Cultura del mundo", en: "World culture" },
    { es: "Arte y comunidad", en: "Art and community" },
    { es: "El oficio de crear", en: "The craft of creating" },
  ];

  return (
    <>
      <PageHeader
        eyebrow={<T es="Semillas" en="Seeds" />}
        title={
          <T
            es="Un espacio para el arte de todas partes"
            en="A space for art from everywhere"
          />
        }
        intro={
          <T
            es="Un journal en construcción: aquí difundiremos obra y voces de artistas de distintos lugares del mundo, porque dar visibilidad al arte también es llevar luz."
            en="A journal in the making: here we will share work and voices of artists from different parts of the world, because giving art visibility is also bringing light."
          />
        }
      />

      {/* Intro editorial */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <SectionTitle
            eyebrow={<T es="Próximamente" en="Coming soon" />}
            title={
              <T
                es="Un journal sobre el arte que transforma"
                en="A journal about art that transforms"
              />
            }
          />
          <Reveal className="space-y-5 text-lg leading-relaxed text-night-200">
            <p>
              <T
                es="Creemos que difundir arte es parte de nuestra misión. Este espacio será un journal editorial donde compartir historias de artistas, ensayos sobre arte y salud, y descubrimientos culturales de distintos rincones del mundo."
                en="We believe that spreading art is part of our mission. This space will be an editorial journal to share artists' stories, essays on art and health, and cultural discoveries from different corners of the world."
              />
            </p>
            <p>
              <T
                es={
                  <>
                    Estamos preparando los primeros artículos.{" "}
                    <span className="text-glow-200">
                      ¿Sos artista y querés que contemos tu historia?
                    </span>{" "}
                    Nos encantaría escucharte.
                  </>
                }
                en={
                  <>
                    We are preparing the first articles.{" "}
                    <span className="text-glow-200">
                      Are you an artist and want us to tell your story?
                    </span>{" "}
                    We would love to hear from you.
                  </>
                }
              />
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Grid de artículos placeholder */}
      <Section className="border-t border-white/5">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, i) => (
            <Reveal
              key={topic.es}
              delay={(i % 3) * 100}
              className="group overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] transition-colors hover:border-glow-400/30"
            >
              <Placeholder label="" aspect="aspect-[16/10]" />
              <div className="p-6">
                <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-glow-400">
                  <Spark className="h-3 w-3" /> Journal
                </span>
                <h3 className="mt-3 font-serif text-xl text-white">
                  <T es={topic.es} en={topic.en} />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-night-200">
                  <T
                    es="Artículo en preparación. Este es un espacio reservado para contenido editorial futuro."
                    en="Article in preparation. This is a space reserved for future editorial content."
                  />
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        eyebrow={<T es="Colaborá" en="Collaborate" />}
        title={
          <T es="¿Querés que difundamos tu arte?" en="Want us to share your art?" />
        }
        intro={
          <T
            es="Buscamos artistas, obras e historias para compartir. Escribinos y sumate a este espacio."
            en="We are looking for artists, works and stories to share. Write to us and join this space."
          />
        }
        primary={{
          href: "/contacto",
          label: <T es="Proponer una historia" en="Pitch a story" />,
        }}
      />
    </>
  );
}
