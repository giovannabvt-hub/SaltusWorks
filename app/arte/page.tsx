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

export const metadata: Metadata = {
  title: "Arte y artistas",
  description:
    "Un espacio editorial de Saltus Works dedicado a difundir arte de distintos lugares y a dar voz a los artistas que transforman el mundo.",
};

export default function ArtePage() {
  return (
    <>
      <PageHeader
        eyebrow="Arte y artistas"
        title="Un espacio para el arte de todas partes"
        intro="Un journal en construcción: aquí difundiremos obra y voces de artistas de distintos lugares del mundo, porque dar visibilidad al arte también es llevar luz."
      />

      {/* Intro editorial */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <SectionTitle
            eyebrow="Próximamente"
            title="Un journal sobre el arte que transforma"
          />
          <Reveal className="space-y-5 text-lg leading-relaxed text-night-200">
            <p>
              Creemos que difundir arte es parte de nuestra misión. Este espacio
              será un journal editorial donde compartir historias de artistas,
              ensayos sobre arte y salud, y descubrimientos culturales de
              distintos rincones del mundo.
            </p>
            <p>
              Estamos preparando los primeros artículos.{" "}
              <span className="text-glow-200">
                ¿Sos artista y querés que contemos tu historia?
              </span>{" "}
              Nos encantaría escucharte.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Grid de artículos placeholder */}
      <Section className="border-t border-white/5">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Música que sana",
            "Retratos de artistas",
            "Arte desde Argentina",
            "Cultura del mundo",
            "Arte y comunidad",
            "El oficio de crear",
          ].map((titulo, i) => (
            <Reveal
              key={titulo}
              delay={(i % 3) * 100}
              className="group overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] transition-colors hover:border-glow-400/30"
            >
              <Placeholder label="Imagen próximamente" aspect="aspect-[16/10]" />
              <div className="p-6">
                <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-glow-400">
                  <Spark className="h-3 w-3" /> Journal
                </span>
                <h3 className="mt-3 font-serif text-xl text-white">{titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-night-200">
                  Artículo en preparación. Este es un espacio reservado para
                  contenido editorial futuro.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        eyebrow="Colaborá"
        title="¿Querés que difundamos tu arte?"
        intro="Buscamos artistas, obras e historias para compartir. Escribinos y sumate a este espacio."
        primary={{ href: "/contacto", label: "Proponer una historia" }}
      />
    </>
  );
}
