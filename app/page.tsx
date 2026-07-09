import { Hero } from "@/components/Hero";
import {
  Section,
  SectionTitle,
  ProjectCard,
  CTASection,
  Pillar,
} from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Introducción / misión */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionTitle
            eyebrow="Quiénes somos"
            title={
              <>
                El arte y los artistas mejoran la calidad de vida de las
                personas.
              </>
            }
          />
          <Reveal className="space-y-5 text-lg leading-relaxed text-night-200">
            <p>
              En Saltus Works creemos que el arte no es un lujo: es una
              necesidad humana y una herramienta concreta de transformación.
              La música y las artes nos acompañan y pueden ayudarnos en los
              procesos de sanación, conectan comunidades y le devuelven sentido
              a la vida cotidiana.
            </p>
            <p>
              Trabajamos en la intersección de{" "}
              <span className="text-glow-200">música, arte y tecnología</span>{" "}
              para servir al bienestar, la salud y los objetivos de
              sostenibilidad. Y lo hacemos defendiendo, ante todo, el valor de
              quienes crean: los artistas como motor de cambio social.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Los tres pilares */}
      <Section className="border-y border-white/5 bg-white/[0.015]">
        <SectionTitle
          eyebrow="Nuestros pilares"
          title="Tres fuerzas, un mismo propósito"
          intro="Todo lo que hacemos nace del cruce de estas tres dimensiones."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Pillar
            title="Arte, música y tecnología"
            description="La creación artística potenciada por herramientas digitales, para llegar más lejos y a más personas sin perder su alma."
          />
          <Pillar
            delay={120}
            title="Salud y bienestar"
            description="El arte como práctica terapéutica y de cuidado: música, sonoterapia, artes plásticas y escénicas, y experiencias que acompañan los procesos de salud."
          />
          <Pillar
            delay={240}
            title="Sostenibilidad"
            description="Proyectos con impacto social, cultural y económico duradero, pensados para sostenerse y multiplicarse en el tiempo."
          />
        </div>
      </Section>

      {/* Proyectos */}
      <Section>
        <SectionTitle
          eyebrow="Qué impulsamos"
          title="Dos proyectos, un mismo fin"
          intro="Saltus Works crea y aloja dos iniciativas que llevan su misión a la práctica."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <ProjectCard
            kicker="Herramienta digital"
            title="The Lighthouse App"
            description="Vinilos coleccionables sorpresa y una plataforma digital que difunde músicos de todo el mundo: la música como llave para descubrir culturas y dar visibilidad a artistas de cada continente."
            href="/lighthouse"
            cta="Conocer Lighthouse"
            accent="glow"
          />
          <ProjectCard
            kicker="ONG de arte y salud"
            title="CHISPA"
            description="Usa el arte de forma terapéutica y con impacto social, y le da a cada persona la posibilidad de crear y dejar su huella a través de sus proyectos."
            href="/chispa"
            cta="Conocer CHISPA"
            accent="terra"
            delay={120}
          />
        </div>
      </Section>

      <CTASection
        title="Sumate a llevar luz a través del arte"
        intro="Ya seas artista, institución de salud, aliado o alguien que cree en el poder del arte, hay un lugar para vos."
        primary={{ href: "/contacto", label: "Ponerse en contacto" }}
        secondary={{ href: "/sobre", label: "Conocer más" }}
      />
    </>
  );
}
