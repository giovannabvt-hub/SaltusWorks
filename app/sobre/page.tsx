import type { Metadata } from "next";
import {
  Section,
  SectionTitle,
  PageHeader,
  CTASection,
} from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Spark } from "@/components/Spark";
import { T } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Saltus Works pone la música, el arte y la tecnología al servicio del bienestar, la salud y la sostenibilidad. Conocé su misión, su visión y su filosofía.",
};

export default function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow={<T es="Sobre Saltus Works" en="About Saltus Works" />}
        title={
          <T
            es="Creemos en el arte como fuerza que transforma vidas"
            en="We believe in art as a force that transforms lives"
          />
        }
        intro={
          <T
            es="Saltus Works es la organización que crea y aloja The Lighthouse y CHISPA. Nace de una convicción simple y ambiciosa: el arte y los artistas pueden mejorar la calidad de vida de las personas y llevar luz al mundo."
            en="Saltus Works is the organization that creates and hosts The Lighthouse and CHISPA. It is born from a simple, ambitious conviction: art and artists can improve people's quality of life and bring light to the world."
          />
        }
      />

      {/* La compañía */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <SectionTitle
            eyebrow={<T es="La compañía" en="The company" />}
            title={
              <T
                es="Una casa para el arte con propósito"
                en="A home for art with purpose"
              />
            }
          />
          <Reveal className="space-y-5 text-lg leading-relaxed text-night-200">
            <p>
              <T
                es={
                  <>
                    Saltus Works trabaja en la intersección de{" "}
                    <span className="text-glow-200">
                      música, arte, ciencia y tecnología
                    </span>
                    , al servicio del bienestar, la salud, el medio ambiente y
                    la sostenibilidad. Bajo su paraguas conviven dos proyectos que
                    llevan esa misión a la práctica:{" "}
                    <span className="text-glow-200">The Lighthouse</span>, un
                    ecosistema educativo que usa la música como llave para
                    descubrir el mundo, y{" "}
                    <span className="text-glow-200">CHISPA</span>, una
                    organización de arte y salud que acompaña a las personas a
                    través del arte.
                  </>
                }
                en={
                  <>
                    Saltus Works works at the intersection of{" "}
                    <span className="text-glow-200">
                      music, art, science and technology
                    </span>
                    , in the service of wellbeing, health, the environment and
                    sustainability. Under its umbrella live two projects that put that
                    mission into practice:{" "}
                    <span className="text-glow-200">The Lighthouse</span>, an
                    educational ecosystem that uses music as a key to discover
                    the world, and{" "}
                    <span className="text-glow-200">CHISPA</span>, an arts and
                    health organization that accompanies people through art.
                  </>
                }
              />
            </p>
            <p>
              <T
                es={
                  <>
                    Todo lo que hacemos se sostiene sobre el modelo de{" "}
                    <span className="text-glow-200">Triple Bottom Line</span>:
                    buscamos equilibrar el valor artístico, el social y el
                    económico, para que el arte no solo emocione, sino que
                    también sane, conecte y se sostenga en el tiempo.
                  </>
                }
                en={
                  <>
                    Everything we do rests on the{" "}
                    <span className="text-glow-200">Triple Bottom Line</span>{" "}
                    model: we seek to balance artistic, social and economic
                    value, so that art not only moves us, but also heals,
                    connects and sustains itself over time.
                  </>
                }
              />
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Misión y visión */}
      <Section className="border-y border-white/5 bg-white/[0.015]">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-white/8 bg-white/[0.02] p-8">
            <Spark className="h-6 w-6 text-glow-300" animated />
            <h2 className="mt-4 font-serif text-2xl text-white">
              <T es="Misión" en="Mission" />
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-night-200">
              <T
                es="Poner la música, el arte, la ciencia y la tecnología al servicio del bienestar, la salud, el medio ambiente y la sostenibilidad, defendiendo el valor del arte y de los artistas como motor de transformación social."
                en="To put music, art, science and technology in the service of wellbeing, health, the environment and sustainability, defending the value of art and artists as a force for social change."
              />
            </p>
          </Reveal>
          <Reveal
            delay={120}
            className="rounded-2xl border border-white/8 bg-white/[0.02] p-8"
          >
            <Spark className="h-6 w-6 text-glow-300" animated />
            <h2 className="mt-4 font-serif text-2xl text-white">
              <T es="Visión" en="Vision" />
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-night-200">
              <T
                es="Un mundo donde el arte sea reconocido como herramienta esencial de salud y cohesión social, y donde los artistas tengan un lugar central y sostenible en la vida de las comunidades."
                en="A world where art is recognized as an essential tool for health and social cohesion, and where artists have a central, sustainable place in the life of communities."
              />
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Manifiesto: por qué el arte importa */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <SectionTitle
            eyebrow={<T es="Nuestra filosofía" en="Our philosophy" />}
            title={<T es="Por qué el arte importa" en="Why art matters" />}
          />
          <Reveal className="prose-glow space-y-5 text-lg leading-relaxed text-night-200">
            <p>
              <T
                es="El arte es una de las formas más antiguas y universales de cuidar a otros. Antes que industria o entretenimiento, fue ritual, acompañamiento y memoria. Nos ayuda a atravesar el dolor, a celebrar y a recordar quiénes somos."
                en="Art is one of the oldest and most universal ways of caring for others. Before it was industry or entertainment, it was ritual, company and memory. It helps us move through pain, celebrate and remember who we are."
              />
            </p>
            <p>
              <T
                es={
                  <>
                    En Saltus Works partimos de una certeza:{" "}
                    <span className="text-glow-200">
                      los artistas son trabajadores de la salud emocional y
                      social
                    </span>
                    , y su tarea merece reconocimiento, estructura y
                    sostenibilidad.
                  </>
                }
                en={
                  <>
                    At Saltus Works we start from one certainty:{" "}
                    <span className="text-glow-200">
                      artists are workers of emotional and social health
                    </span>
                    , and their work deserves recognition, structure and
                    sustainability.
                  </>
                }
              />
            </p>
            <p>
              <T
                es="Por eso construimos herramientas y proyectos que amplifican su alcance, sin diluir su esencia, y que conectan la creación artística con quienes más la necesitan."
                en="That is why we build tools and projects that amplify their reach, without diluting their essence, and that connect artistic creation with those who need it most."
              />
            </p>
          </Reveal>
        </div>
      </Section>

      <CTASection
        eyebrow={<T es="Trabajemos juntos" en="Let's work together" />}
        title={
          <T
            es="¿Compartís esta manera de ver el arte?"
            en="Do you share this way of seeing art?"
          />
        }
        intro={
          <T
            es="Nos encantaría conocerte. Escribinos y contanos en qué estás trabajando."
            en="We would love to meet you. Write to us and tell us what you are working on."
          />
        }
        primary={{
          href: "/contacto",
          label: <T es="Escribinos" en="Write to us" />,
        }}
        secondary={{
          href: "/chispa",
          label: <T es="Ver CHISPA" en="See CHISPA" />,
        }}
      />
    </>
  );
}
