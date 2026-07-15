import { Hero } from "@/components/Hero";
import {
  Section,
  SectionTitle,
  ProjectCard,
  CTASection,
  Pillar,
} from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { T } from "@/lib/i18n";

export default function HomePage() {
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
                es="En Saltus Works creemos que el arte no es un lujo: es una necesidad humana y una herramienta concreta de transformación. La música y las artes nos acompañan y pueden ayudarnos en los procesos de sanación, conectan comunidades y le devuelven sentido a la vida cotidiana."
                en="At Saltus Works we believe art is not a luxury: it is a human need and a real tool for transformation. Music and the arts accompany us and can help us through healing, connect communities and give everyday life meaning again."
              />
            </p>
            <p>
              <T
                es={
                  <>
                    Trabajamos en la intersección de{" "}
                    <span className="text-glow-200">
                      música, arte y tecnología
                    </span>{" "}
                    para servir al bienestar, la salud y los objetivos de
                    sostenibilidad. Y lo hacemos defendiendo, ante todo, el valor
                    de quienes crean: los artistas como motor de cambio social.
                  </>
                }
                en={
                  <>
                    We work at the intersection of{" "}
                    <span className="text-glow-200">
                      music, art and technology
                    </span>{" "}
                    to serve wellbeing, health and sustainability goals. And we
                    do it by defending, above all, the value of those who create:
                    artists as a force for social change.
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
              es="Tres fuerzas, un mismo propósito"
              en="Three forces, one purpose"
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
            title={<T es="Arte, música y tecnología" en="Art, music and technology" />}
            description={
              <T
                es="La creación artística potenciada por herramientas digitales, para llegar más lejos y a más personas sin perder su alma."
                en="Artistic creation powered by digital tools, to reach further and more people without losing its soul."
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
                es="Proyectos con impacto social, cultural y económico duradero, pensados para sostenerse y multiplicarse en el tiempo."
                en="Projects with lasting social, cultural and economic impact, designed to sustain and multiply over time."
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
              es="Saltus Works crea y aloja dos iniciativas que llevan su misión a la práctica."
              en="Saltus Works creates and hosts two initiatives that put its mission into practice."
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

      <CTASection
        eyebrow={<T es="Sumate" en="Join us" />}
        title={
          <T
            es="Sumate a llevar luz a través del arte"
            en="Join us in bringing light through art"
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
