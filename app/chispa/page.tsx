import type { Metadata } from "next";
import {
  Section,
  SectionTitle,
  PageHeader,
  FeatureRow,
  Placeholder,
  Pillar,
  CTASection,
} from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "CHISPA",
  description:
    "CHISPA es una ONG argentina de arte y salud que usa la música, el teatro y las artes escénicas como herramienta terapéutica y de impacto social, integrada con The Lighthouse App.",
};

export default function ChispaPage() {
  return (
    <>
      <PageHeader
        eyebrow="CHISPA"
        title="Arte y salud: una chispa que enciende comunidades"
        intro="CHISPA es una ONG argentina de arte y salud que utiliza el arte —música, teatro, artes escénicas— como herramienta terapéutica y de transformación social."
      />

      {/* Qué es */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionTitle
            eyebrow="Qué es"
            title="El arte como herramienta de salud"
            intro="CHISPA lleva prácticas artísticas a hospitales, instituciones y comunidades, entendiendo el arte como parte del cuidado integral de las personas."
          />
          <Reveal delay={100}>
            <Placeholder label="Fotografía de programas próximamente" />
          </Reveal>
        </div>
      </Section>

      {/* El modelo: Triple Bottom Line */}
      <Section className="border-y border-white/5 bg-white/[0.015]">
        <SectionTitle
          eyebrow="El modelo"
          title="Triple impacto: social, cultural y económico"
          intro="CHISPA se organiza en torno a un modelo de Triple Bottom Line, midiendo su valor más allá de lo económico."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Pillar
            title="Impacto social"
            description="Mejorar la calidad de vida y el bienestar de pacientes, familias y comunidades a través del arte."
          />
          <Pillar
            delay={120}
            title="Impacto cultural"
            description="Dar valor y espacio al arte y a los artistas, difundiendo la cultura como bien común y derecho."
          />
          <Pillar
            delay={240}
            title="Impacto económico"
            description="Generar trabajo digno y sostenible para artistas, con un modelo que perdura en el tiempo."
          />
        </div>
      </Section>

      {/* Áreas de trabajo */}
      <Section>
        <SectionTitle
          eyebrow="Áreas de trabajo"
          title="Dónde actúa CHISPA"
          intro="Nuestros programas combinan disciplinas artísticas con objetivos de salud y desarrollo. (Áreas orientativas, a ajustar según cada programa.)"
        />
        <div className="mt-14 grid gap-2 lg:max-w-3xl">
          <FeatureRow title="Musicoterapia">
            La música como herramienta terapéutica en procesos de salud física
            y emocional, individuales y comunitarios.
          </FeatureRow>
          <FeatureRow title="Teatro y artes escénicas" delay={100}>
            El teatro como espacio de expresión, vínculo y recuperación, que
            devuelve voz y protagonismo a las personas.
          </FeatureRow>
          <FeatureRow title="Arte y oncología" delay={200}>
            Programas específicos que acompañan a pacientes oncológicos y sus
            familias a través de experiencias artísticas.
          </FeatureRow>
          <FeatureRow title="Negocio creativo" delay={300}>
            Formación y oportunidades para que los artistas desarrollen un
            trabajo sostenible en torno a su práctica.
          </FeatureRow>
        </div>
      </Section>

      {/* Historias / impacto */}
      <Section className="border-y border-white/5 bg-white/[0.015]">
        <SectionTitle
          eyebrow="Historias"
          title="El impacto, en primera persona"
          intro="Pronto vas a encontrar aquí casos reales y testimonios de personas cuyas vidas fueron tocadas por el arte."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal
              key={i}
              delay={i * 100}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-7"
            >
              <Placeholder label="Historia próximamente" aspect="aspect-[4/3]" />
              <p className="mt-5 font-serif text-lg italic text-night-100">
                “Espacio reservado para un testimonio real de impacto.”
              </p>
              <p className="mt-3 text-sm text-glow-300">Nombre — Programa</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        eyebrow="Colaborá"
        title="Ayudanos a encender más chispas"
        intro="Podés sumarte como voluntario, aliado institucional o donante. Cada aporte multiplica el alcance del arte que sana."
        primary={{ href: "/contacto", label: "Quiero colaborar" }}
        secondary={{ href: "/lighthouse", label: "Ver Lighthouse" }}
      />
    </>
  );
}
