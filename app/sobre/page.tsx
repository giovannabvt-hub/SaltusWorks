import type { Metadata } from "next";
import {
  Section,
  SectionTitle,
  PageHeader,
  Pillar,
  Placeholder,
  CTASection,
} from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Spark } from "@/components/Spark";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Misión, visión y filosofía de Saltus Works: por qué el arte importa y cómo la música, el arte y la tecnología transforman la salud, el bienestar y la sostenibilidad.",
};

export default function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre Saltus Works"
        title="Creemos en el arte como fuerza que transforma vidas"
        intro="Nacimos en Argentina con una convicción simple y ambiciosa: el arte y los artistas pueden mejorar la calidad de vida de las personas y llevar luz al mundo."
      />

      {/* Misión y visión */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-white/8 bg-white/[0.02] p-8">
            <Spark className="h-6 w-6 text-glow-300" animated />
            <h2 className="mt-4 font-serif text-2xl text-white">Misión</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-night-200">
              Poner la música, el arte y la tecnología al servicio del
              bienestar, la salud y la sostenibilidad, defendiendo el valor del
              arte y de los artistas como motor de transformación social.
            </p>
          </Reveal>
          <Reveal
            delay={120}
            className="rounded-2xl border border-white/8 bg-white/[0.02] p-8"
          >
            <Spark className="h-6 w-6 text-glow-300" animated />
            <h2 className="mt-4 font-serif text-2xl text-white">Visión</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-night-200">
              Un mundo donde el arte sea reconocido como herramienta esencial de
              salud y cohesión social, y donde los artistas tengan un lugar
              central y sostenible en la vida de las comunidades.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Manifiesto: por qué el arte importa */}
      <Section className="border-y border-white/5 bg-white/[0.015]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <SectionTitle
            eyebrow="Nuestra filosofía"
            title="Por qué el arte importa"
          />
          <Reveal className="prose-glow space-y-5 text-lg leading-relaxed text-night-200">
            <p>
              El arte es una de las formas más antiguas y universales de cuidar
              a otros. Antes que industria o entretenimiento, fue ritual,
              acompañamiento y memoria. Nos ayuda a atravesar el dolor, a
              celebrar, a recordar quiénes somos.
            </p>
            <p>
              Sin embargo, el trabajo de los artistas suele quedar
              invisibilizado o mal valorado. En Saltus Works partimos de lo
              contrario:{" "}
              <span className="text-glow-200">
                los artistas son trabajadores de la salud emocional y social
              </span>
              , y su tarea merece reconocimiento, estructura y sostenibilidad.
            </p>
            <p>
              Por eso construimos herramientas y proyectos que amplifican su
              alcance —sin diluir su esencia— y que conectan la creación
              artística con quienes más la necesitan.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Los tres pilares */}
      <Section>
        <SectionTitle
          eyebrow="Nuestros pilares"
          title="Cómo pensamos cada proyecto"
          intro="Toda iniciativa de Saltus Works se sostiene sobre estas tres dimensiones."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Pillar
            title="Arte, música y tecnología"
            description="Creatividad humana potenciada por herramientas digitales para llegar más lejos, con más profundidad y a más personas."
          />
          <Pillar
            delay={120}
            title="Salud y bienestar"
            description="Prácticas artísticas con valor terapéutico y de cuidado, que acompañan procesos de salud física y emocional."
          />
          <Pillar
            delay={240}
            title="Sostenibilidad"
            description="Modelos de impacto social, cultural y económico pensados para perdurar y multiplicarse en el tiempo."
          />
        </div>
      </Section>

      {/* Equipo (placeholder) */}
      <Section className="border-t border-white/5">
        <SectionTitle
          eyebrow="Equipo"
          title="Las personas detrás de la luz"
          intro="Un equipo interdisciplinario de artistas, profesionales de la salud y tecnólogos. Pronto vas a poder conocer a cada una de ellas aquí."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Dirección", "Arte y salud", "Tecnología"].map((rol, i) => (
            <Reveal
              key={rol}
              delay={i * 100}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-6"
            >
              <Placeholder label="Foto próximamente" aspect="aspect-square" />
              <h3 className="mt-5 font-serif text-xl text-white">
                Nombre Apellido
              </h3>
              <p className="text-sm text-glow-300">{rol}</p>
              <p className="mt-2 text-sm leading-relaxed text-night-200">
                Breve biografía en construcción. Este espacio está reservado
                para presentar a cada integrante del equipo.
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        eyebrow="Trabajemos juntos"
        title="¿Compartís esta manera de ver el arte?"
        intro="Nos encantaría conocerte. Escribinos y contanos en qué estás trabajando."
        primary={{ href: "/contacto", label: "Escribinos" }}
        secondary={{ href: "/chispa", label: "Ver CHISPA" }}
      />
    </>
  );
}
