import { Hero } from "@/components/Hero";
import {
  Section,
  SectionTitle,
  ProjectCard,
  CTASection,
  Pillar,
  Button,
} from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { T } from "@/lib/i18n";

export default function HomePage() {
  const ods = [
    { num: 3, color: "#4C9F38", es: "Salud y bienestar", en: "Good Health and Well-being" },
    { num: 4, color: "#C5192D", es: "Educación de calidad", en: "Quality Education" },
    { num: 10, color: "#DD1367", es: "Reducción de las desigualdades", en: "Reduced Inequalities" },
    { num: 12, color: "#BF8B2E", es: "Producción y consumo responsables", en: "Responsible Consumption and Production" },
    { num: 13, color: "#3F7E44", es: "Acción por el clima", en: "Climate Action" },
    { num: 17, color: "#19486A", es: "Alianzas para lograr los objetivos", en: "Partnerships for the Goals" },
  ];

  return (
    <>
      <Hero />

      {/* Introducción / misión */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionTitle
            eyebrow={<T es="Quiénes somos" en="Who we are" />}
            title={
              <T
                es="El arte y los artistas mejoran la calidad de vida de las personas."
                en="Art and artists improve people's quality of life."
              />
            }
          />
          <Reveal className="space-y-5 text-lg leading-relaxed text-night-200">
            <p>
              <T
                es="En Saltus Works creemos que el arte no es un lujo: es una necesidad humana y una herramienta concreta de transformación. La música y las artes nos acompañan y pueden ayudarnos en los procesos de sanación, conectan comunidades y le dan sentido a la vida cotidiana."
                en="At Saltus Works we believe art is not a luxury: it is a human need and a real tool for transformation. Music and the arts accompany us and can help us through healing, connect communities and give everyday life meaning."
              />
            </p>
            <p>
              <T
                es={
                  <>
                    Trabajamos en la intersección de{" "}
                    <span className="text-glow-200">
                      música, arte, ciencia y tecnología
                    </span>{" "}
                    para servir al bienestar, la salud, el medio ambiente y la
                    sostenibilidad. Y lo hacemos defendiendo, ante todo, el valor
                    de quienes crean: los artistas como motor de cambio social.
                  </>
                }
                en={
                  <>
                    We work at the intersection of{" "}
                    <span className="text-glow-200">
                      music, art, science and technology
                    </span>{" "}
                    to serve wellbeing, health, the environment and
                    sustainability. And we do it by defending, above all, the
                    value of those who create: artists as a force for social
                    change.
                  </>
                }
              />
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Los tres pilares */}
      <Section className="border-y border-white/5 bg-white/[0.015]">
        <SectionTitle
          eyebrow={<T es="Nuestros pilares" en="Our pillars" />}
          title={
            <T
              es="Distintos campos, un mismo propósito"
              en="Different fields, one purpose"
            />
          }
          intro={
            <T
              es="Todo lo que hacemos nace del cruce de estas tres dimensiones."
              en="Everything we do is born from the meeting of these three dimensions."
            />
          }
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Pillar
            title={
              <T
                es="Arte, música, ciencia y tecnología"
                en="Art, music, science and technology"
              />
            }
            description={
              <T
                es="La creación artística potenciada por la ciencia y las herramientas digitales, para llegar más lejos y a más personas sin perder su alma."
                en="Artistic creation powered by science and digital tools, to reach further and more people without losing its soul."
              />
            }
          />
          <Pillar
            delay={120}
            title={<T es="Salud y bienestar" en="Health and wellbeing" />}
            description={
              <T
                es="El arte como práctica terapéutica y de cuidado: música, sonoterapia, artes plásticas y escénicas, y experiencias que acompañan los procesos de salud."
                en="Art as therapeutic and caring practice: music, sound therapy, visual and performing arts, and experiences that support health journeys."
              />
            }
          />
          <Pillar
            delay={240}
            title={<T es="Sostenibilidad" en="Sustainability" />}
            description={
              <T
                es="Proyectos que cuidan el medio ambiente y generan un impacto social, cultural y económico duradero, pensados para sostenerse y multiplicarse en el tiempo."
                en="Projects that care for the environment and create lasting social, cultural and economic impact, designed to sustain and multiply over time."
              />
            }
          />
        </div>
      </Section>

      {/* Proyectos */}
      <Section>
        <SectionTitle
          eyebrow={<T es="Qué impulsamos" en="What we drive" />}
          title={<T es="Dos proyectos, un mismo fin" en="Two projects, one goal" />}
          intro={
            <T
              es="Saltus Works crea y aloja dos iniciativas que llevan su misión a la práctica y colaboran con los Objetivos de Desarrollo Sostenible de la ONU."
              en="Saltus Works creates and hosts two initiatives that put its mission into practice and collaborate with the UN Sustainable Development Goals."
            />
          }
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <ProjectCard
            kicker={<T es="Herramienta digital" en="Digital tool" />}
            title="The Lighthouse App"
            description={
              <T
                es="Vinilos coleccionables sorpresa y una plataforma digital que difunde músicos de todo el mundo: la música como llave para descubrir culturas y dar visibilidad a artistas de cada continente."
                en="Surprise collectible vinyls and a digital platform that spreads musicians from all over the world: music as a key to discover cultures and give visibility to artists from every continent."
              />
            }
            href="/lighthouse"
            cta={<T es="Conocer Lighthouse" en="Explore Lighthouse" />}
            accent="glow"
          />
          <ProjectCard
            kicker={<T es="ONG de arte y salud" en="Arts & health NGO" />}
            title="CHISPA"
            description={
              <T
                es="Usa el arte de forma terapéutica y con impacto social, y le da a cada persona la posibilidad de crear y dejar su huella a través de sus proyectos."
                en="Uses art therapeutically and with social impact, giving each person the chance to create and leave their mark through its projects."
              />
            }
            href="/chispa"
            cta={<T es="Conocer CHISPA" en="Explore CHISPA" />}
            accent="terra"
            delay={120}
          />
        </div>
      </Section>

      {/* Objetivos de Desarrollo Sostenible */}
      <Section className="border-y border-white/5 bg-white/[0.015]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionTitle
            eyebrow={<T es="Compromiso global" en="Global commitment" />}
            title={
              <T
                es="Los Objetivos de Desarrollo Sostenible"
                en="The Sustainable Development Goals"
              />
            }
          />
          <Reveal className="space-y-5 text-lg leading-relaxed text-night-200">
            <p>
              <T
                es="Los Objetivos de Desarrollo Sostenible (ODS) son 17 metas globales que la ONU adoptó en 2015: un plan compartido para erradicar la pobreza, proteger el planeta y asegurar bienestar y paz para todas las personas hacia 2030."
                en="The Sustainable Development Goals (SDGs) are 17 global goals adopted by the UN in 2015: a shared plan to end poverty, protect the planet and ensure wellbeing and peace for everyone by 2030."
              />
            </p>
            <p>
              <T
                es="Cada proyecto de Saltus Works trabaja en servicio de estos objetivos: The Lighthouse canaliza el aprendizaje en donaciones reales a causas alineadas con los ODS, y CHISPA aporta a la salud y el bienestar a través del arte."
                en="Every Saltus Works project works in service of these goals: The Lighthouse channels learning into real donations to SDG-aligned causes, and CHISPA contributes to health and wellbeing through art."
              />
            </p>
            <div className="pt-2">
              <T
                es={
                  <Button
                    href="https://www.un.org/sustainabledevelopment/es/sustainable-development-goals/"
                    variant="ghost"
                    external
                  >
                    Conocer los ODS →
                  </Button>
                }
                en={
                  <Button
                    href="https://www.un.org/sustainabledevelopment/sustainable-development-goals/"
                    variant="ghost"
                    external
                  >
                    Learn about the SDGs →
                  </Button>
                }
              />
            </div>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ods.map((o, i) => (
            <Reveal
              key={o.num}
              delay={(i % 3) * 80}
              className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] p-4"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md font-serif text-lg font-semibold text-white"
                style={{ backgroundColor: o.color }}
              >
                {o.num}
              </span>
              <span className="text-sm leading-snug text-night-100">
                <T es={o.es} en={o.en} />
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title={
          <T
            es="Sumate a transformar vidas a través del arte"
            en="Join us in transforming lives through art"
          />
        }
        intro={
          <T
            es="Ya seas artista, institución de salud, aliado o alguien que cree en el poder del arte, hay un lugar para vos."
            en="Whether you are an artist, a health institution, a partner or someone who believes in the power of art, there is a place for you."
          />
        }
        primary={{
          href: "/contacto",
          label: <T es="Ponerse en contacto" en="Get in touch" />,
        }}
        secondary={{
          href: "/sobre",
          label: <T es="Conocer más" en="Learn more" />,
        }}
      />
    </>
  );
}
