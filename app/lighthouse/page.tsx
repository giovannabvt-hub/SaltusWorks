import type { Metadata } from "next";
import {
  Section,
  SectionTitle,
  PageHeader,
  FeatureRow,
  Placeholder,
  CTASection,
  Button,
} from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The Lighthouse App",
  description:
    "The Lighthouse App integra música, exploración cultural y legado digital para conectar a las personas con el arte y con la misión de Saltus Works.",
};

export default function LighthousePage() {
  return (
    <>
      <PageHeader
        eyebrow="The Lighthouse App"
        title="Un puente entre la música, la cultura y la memoria"
        intro="Lighthouse es la herramienta digital de Saltus Works: integra música, exploración cultural y legado digital en una sola experiencia luminosa."
      />

      {/* Qué es */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionTitle
            eyebrow="Qué es"
            title="Música, cultura y legado en un mismo lugar"
            intro="Un espacio donde descubrir arte, conectar con historias de distintos lugares del mundo y preservar aquello que da sentido a nuestra vida."
          />
          <Reveal delay={100}>
            <Placeholder label="Mockup de la app próximamente" />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-2 lg:max-w-3xl">
          <FeatureRow title="Música que acompaña">
            Playlists y experiencias sonoras pensadas para cada momento: para
            sanar, concentrarse, recordar o simplemente sentir.
          </FeatureRow>
          <FeatureRow title="Exploración cultural" delay={100}>
            Un puente hacia el arte de distintos lugares y artistas, para
            descubrir voces nuevas y celebrar la diversidad cultural.
          </FeatureRow>
          <FeatureRow title="Legado digital" delay={200}>
            Un lugar para preservar y transmitir aquello que importa: memorias,
            obras y significados que trascienden el tiempo.
          </FeatureRow>
        </div>
      </Section>

      {/* Conexión con la misión */}
      <Section className="border-y border-white/5 bg-white/[0.015]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <SectionTitle
            eyebrow="Por qué existe"
            title="Cómo se conecta con la misión de Saltus"
          />
          <Reveal className="space-y-5 text-lg leading-relaxed text-night-200">
            <p>
              Lighthouse lleva la misión de Saltus Works a la palma de la mano.
              Si creemos que el arte mejora la calidad de vida, necesitábamos
              una forma de acercarlo a las personas de manera cotidiana,
              accesible y significativa.
            </p>
            <p>
              La app es esa raíz común: acerca el arte a las personas cuando más
              lo necesitan y, a la vez, da visibilidad y sostenibilidad al
              trabajo de los artistas.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Integración con CHISPA */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <SectionTitle
            eyebrow="Ecosistema"
            title="Integrada con CHISPA"
            intro="Lighthouse y CHISPA se potencian mutuamente. El modelo de organización de CHISPA se integra directamente con la app."
          />
          <Reveal className="space-y-5 text-lg leading-relaxed text-night-200">
            <p>
              A través de Lighthouse, los programas de arte y salud de CHISPA
              pueden llegar a más personas, documentar su impacto y sostener su
              trabajo en el tiempo.
            </p>
            <p>
              La tecnología al servicio del arte, y el arte al servicio de la
              salud:{" "}
              <span className="text-glow-200">un mismo ecosistema de luz.</span>
            </p>
            <div className="pt-2">
              <Button href="/chispa" variant="ghost">
                Conocer CHISPA →
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTASection
        eyebrow="Sé de los primeros"
        title="Sumate a la lista de espera de Lighthouse"
        intro="Estamos construyendo Lighthouse con cuidado. Dejanos tu contacto y te avisamos cuando esté disponible."
        primary={{ href: "/contacto", label: "Unirme a la lista de espera" }}
        secondary={{ href: "/sobre", label: "Conocer Saltus Works" }}
      />
    </>
  );
}
