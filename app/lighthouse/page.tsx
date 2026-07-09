import type { Metadata } from "next";
import {
  Section,
  SectionTitle,
  FeatureRow,
  Pillar,
  CTASection,
  Button,
  Eyebrow,
} from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Spark } from "@/components/Spark";
import { asset } from "@/lib/basePath";

const LIGHTHOUSE_URL = "https://www.pharosophia.org/lighthouse-launcher.html";

export const metadata: Metadata = {
  title: "The Lighthouse App",
  description:
    "The Lighthouse es un ecosistema educativo que usa la música como llave para descubrir, aprender y conectar: vinilos coleccionables sorpresa y una plataforma digital en pharosophia.org.",
};

export default function LighthousePage() {
  return (
    <>
      {/* Hero con dos elementos etéreos flanqueando el texto (apoyados abajo) */}
      <header className="relative flex min-h-[82svh] items-center justify-center overflow-hidden">
        {/* halo suave detrás del título */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[42vh] w-[42vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow-400/10 blur-[120px]"
        />
        {/* Faro (derecha, apoyado abajo) — public/images/lighthouse-tower.png */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 hidden h-[86%] w-[32%] max-w-[460px] bg-contain bg-right-bottom bg-no-repeat opacity-95 [mask-image:linear-gradient(to_bottom,black_86%,transparent)] md:block lg:h-[94%]"
          style={{ backgroundImage: `url('${asset("/images/lighthouse-tower.png")}')` }}
        />
        {/* fundido inferior hacia la página */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-night-950"
        />
        <div className="relative z-10 mx-auto max-w-2xl px-6 pt-24 text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow>The Lighthouse</Eyebrow>
            </div>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-6xl">
              La música como llave para descubrir el mundo
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-night-100/90">
              Un ecosistema educativo que usa la música para descubrir, aprender
              y conectar. Combina vinilos coleccionables sorpresa con una
              plataforma digital, tratando al arte como una herramienta esencial
              para el bienestar humano.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Qué es + redirección */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <SectionTitle
            eyebrow="Qué es"
            title="Un faro de música, cultura y conocimiento"
            intro="The Lighthouse funciona a través de dos elementos conectados: una serie de vinilos coleccionables sorpresa —físicos y digitales— y una plataforma digital alojada en pharosophia.org. Cada vinilo trae un código que desbloquea la experiencia educativa en la plataforma."
          />
          <Reveal
            delay={100}
            className="flex flex-col justify-center rounded-2xl border border-glow-400/20 bg-gradient-to-br from-night-900 to-night-950 p-8"
          >
            <Spark className="h-7 w-7 text-glow-300" animated />
            <h3 className="mt-4 font-serif text-2xl text-white">
              Explorá la plataforma
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-night-200">
              La mejor forma de entender The Lighthouse es entrar y verlo. La
              plataforma está en construcción y evolución constante.
            </p>
            <div className="mt-6">
              <Button href={LIGHTHOUSE_URL} external>
                Entrar a The Lighthouse →
              </Button>
            </div>
            <p className="mt-4 text-xs text-night-400">
              Se abre pharosophia.org en una pestaña nueva.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Terra Bianca */}
      <Section className="border-y border-white/5 bg-white/[0.015]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <SectionTitle
            eyebrow="La colección"
            title="Terra Bianca: una vuelta al mundo en siete continentes"
          />
          <Reveal className="space-y-5 text-lg leading-relaxed text-night-200">
            <p>
              La colección debut, <span className="text-glow-200">Terra Bianca</span>,
              está organizada en torno a los siete continentes. Cada álbum se
              compra como una sorpresa: no sabés qué continente vas a recibir
              hasta abrirlo.
            </p>
            <p>
              Dentro de cada álbum conviven artistas de varios países de esa
              región. La compra “a ciegas” es intencional: te libera de prejuicios
              y te abre a sonidos y voces que quizás nunca habrías buscado, dando
              lugar a músicos emergentes de cada rincón del planeta.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Las 5 capas de la plataforma */}
      <Section>
        <SectionTitle
          eyebrow="La plataforma"
          title="Cinco capas para aprender a través de la música"
          intro="El código de cada vinilo abre una experiencia digital estructurada en cinco espacios."
        />
        <div className="mt-14 grid gap-2 lg:max-w-3xl">
          <FeatureRow title="Mi Colección">
            Tu biblioteca digital personal, donde guardás tus álbumes y escuchás
            la música cuando quieras.
          </FeatureRow>
          <FeatureRow title="El Observatorio del Conocimiento" delay={80}>
            Contenido educativo por categorías: biografías de artistas, datos
            culturales y geográficos, la ciencia del sonido y la frecuencia, y la
            huella ambiental de cada vinilo.
          </FeatureRow>
          <FeatureRow title="Contribuciones" delay={160}>
            Conecta tu aprendizaje con causas humanitarias alineadas a los
            Objetivos de Desarrollo Sostenible de la ONU. Los puntos que ganás
            aprendiendo desbloquean donaciones reales a organizaciones aliadas.
          </FeatureRow>
          <FeatureRow title="Comunidad Global" delay={240}>
            Un espacio abierto para que personas de todo el mundo se conecten a
            través de la música.
          </FeatureRow>
          <FeatureRow title="Inicio" delay={320}>
            Tu perfil de un vistazo: discos, lecciones completadas, tu “eco
            score” de contribuciones y tus últimas incorporaciones.
          </FeatureRow>
        </div>
      </Section>

      {/* Triple Bottom Line / misión */}
      <Section className="border-y border-white/5 bg-white/[0.015]">
        <SectionTitle
          eyebrow="Por qué existe"
          title="Arte, personas y sostenibilidad en equilibrio"
          intro="The Lighthouse está construido con la arquitectura del Triple Bottom Line, buscando balancear tres tipos de valor."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Pillar
            title="Valor artístico"
            description="Curar músicos genuinamente diversos y poner voces emergentes de cada continente en la misma plataforma, con sus historias y su música tradicional."
          />
          <Pillar
            delay={120}
            title="Valor social"
            description="Conectar a las personas con la cultura, la historia y entre sí a través de la música, que afecta la memoria, la emoción y la empatía."
          />
          <Pillar
            delay={240}
            title="Valor económico"
            description="Un modelo que genera ingresos con productos coleccionables mientras mantiene el acceso a la plataforma gratuito y ayuda a artistas a vivir de su arte."
          />
        </div>
      </Section>

      {/* Integración con CHISPA */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <SectionTitle
            eyebrow="Ecosistema"
            title="Conectado con CHISPA"
            intro="The Lighthouse amplía el alcance de CHISPA más allá del hospital."
          />
          <Reveal className="space-y-5 text-lg leading-relaxed text-night-200">
            <p>
              A través del módulo de Sonido y Salud, la galería del legado
              digital y su canal de contribuciones, la plataforma da a los
              programas de arte y salud de CHISPA una audiencia global y un hogar
              digital permanente.
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
        eyebrow="Sé parte"
        title="Entrá a The Lighthouse"
        intro="Explorá la plataforma o sumate a la lista de espera para enterarte de las próximas colecciones."
        primary={{ href: LIGHTHOUSE_URL, label: "Explorar la plataforma" }}
        secondary={{ href: "/contacto", label: "Unirme a la lista de espera" }}
      />
    </>
  );
}
