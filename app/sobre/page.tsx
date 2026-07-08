import type { Metadata } from "next";
import {
  Section,
  SectionTitle,
  PageHeader,
  Pillar,
  CTASection,
} from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Spark } from "@/components/Spark";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Saltus Works es la organización creada por Rosario para poner la música, el arte y la tecnología al servicio del bienestar, la salud y la sostenibilidad. Conocé su misión, su filosofía y sus tres pilares.",
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
              organización de arte y salud que acompaña a personas que atraviesan
              la enfermedad.
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
      <Section className="border-y border-white/5 bg-white/[0.015]">
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

      {/* Fundadora */}
      <Section>
        <SectionTitle eyebrow="Fundadora" title="La visión detrás de la luz" />
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
          <Reveal className="rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.05] to-transparent p-8">
            <Spark className="h-7 w-7 text-glow-300" animated />
            <h3 className="mt-5 font-serif text-3xl text-white">Rosario</h3>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-glow-300">
              Fundadora de Saltus Works
            </p>
          </Reveal>
          <Reveal
            delay={120}
            className="space-y-5 text-lg leading-relaxed text-night-200"
          >
            <p>
              Saltus Works nació de una historia personal. En la infancia de
              Rosario, frente a la inseguridad y la injusticia del mundo adulto,
              el arte se volvió un refugio donde la llama de la esperanza se
              mantuvo encendida.
            </p>
            <p>
              De adulta transformó esa certeza en propósito: si el arte fue lo
              que la sanó y la sostuvo, podía también ser una herramienta para
              cuidar a otros y aportar al mundo. Con esa idea creó Saltus Works
              como una casa para proyectos que ponen el arte al servicio de la
              vida.
            </p>
            <p>
              Su trabajo se inspira en referentes que unen consciencia, ciencia
              y sensibilidad —desde el legado de Jane Goodall y su defensa de la
              naturaleza y la esperanza, hasta la fuerza de artistas que
              entendieron el arte como una forma de alzar la voz.
            </p>
            <p className="text-night-100">
              Detrás de Saltus Works hay, además, un equipo interdisciplinario
              en crecimiento —artistas, profesionales de la salud y
              tecnólogos— que pronto vas a poder conocer aquí.
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
