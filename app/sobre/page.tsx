import type { Metadata } from "next";
import {
  Section,
  SectionTitle,
  PageHeader,
  CTASection,
} from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Spark } from "@/components/Spark";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Saltus Works pone la música, el arte y la tecnología al servicio del bienestar, la salud y la sostenibilidad. Conocé su misión, su visión y su filosofía.",
};

export default function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre Saltus Works"
        title="Creemos en el arte como fuerza que transforma vidas"
        intro="Saltus Works es la organización que crea y aloja The Lighthouse y CHISPA. Nace de una convicción simple y ambiciosa: el arte y los artistas pueden mejorar la calidad de vida de las personas y llevar luz al mundo."
      />

      {/* La compañía */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <SectionTitle eyebrow="La compañía" title="Una casa para el arte con propósito" />
          <Reveal className="space-y-5 text-lg leading-relaxed text-night-200">
            <p>
              Saltus Works trabaja en la intersección de{" "}
              <span className="text-glow-200">música, arte y tecnología</span>,
              al servicio del bienestar, la salud y los objetivos de
              sostenibilidad. Bajo su paraguas conviven dos proyectos que llevan
              esa misión a la práctica: <span className="text-glow-200">The Lighthouse</span>,
              un ecosistema educativo que usa la música como llave para descubrir
              el mundo, y <span className="text-glow-200">CHISPA</span>, una
              organización de arte y salud que acompaña a las personas a través
              del arte.
            </p>
            <p>
              Todo lo que hacemos se sostiene sobre el modelo de{" "}
              <span className="text-glow-200">Triple Bottom Line</span>:
              buscamos equilibrar el valor artístico, el social y el económico,
              para que el arte no solo emocione, sino que también sane, conecte y
              se sostenga en el tiempo.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Misión y visión */}
      <Section className="border-y border-white/5 bg-white/[0.015]">
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
      <Section>
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
              celebrar y a recordar quiénes somos.
            </p>
            <p>
              En Saltus Works partimos de una certeza:{" "}
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
