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
import { T } from "@/lib/i18n";
import { asset } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "The Lighthouse App",
  description:
    "The Lighthouse es un ecosistema educativo que usa la música como llave para descubrir, aprender y conectar: vinilos coleccionables sorpresa y una plataforma digital en desarrollo.",
};

export default function LighthousePage() {
  return (
    <>
      {/* Hero con el faro apoyado a la derecha */}
      <header className="relative flex min-h-[82svh] items-center justify-center overflow-hidden">
        {/* halo suave detrás del título */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[42vh] w-[42vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow-400/10 blur-[120px]"
        />
        {/* Faro (derecha, apoyado abajo) */}
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
              <T
                es="La música como llave para descubrir el mundo"
                en="Music as a key to discover the world"
              />
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-night-100/90">
              <T
                es="Un ecosistema educativo que usa la música para descubrir, aprender y conectar. Combina vinilos coleccionables sorpresa con una plataforma digital, tratando al arte como una herramienta esencial para el bienestar humano."
                en="An educational ecosystem that uses music to discover, learn and connect. It combines surprise collectible vinyls with a digital platform, treating art as an essential tool for human wellbeing."
              />
            </p>
          </Reveal>
        </div>
      </header>

      {/* Qué es + redirección */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <SectionTitle
            eyebrow={<T es="Qué es" en="What it is" />}
            title={
              <T
                es="Un faro de música, cultura y conocimiento"
                en="A lighthouse of music, culture and knowledge"
              />
            }
            intro={
              <T
                es="The Lighthouse funciona a través de dos elementos conectados: una serie de vinilos coleccionables sorpresa, físicos y digitales, y una plataforma digital. Cada vinilo trae un código que desbloquea la experiencia educativa en la plataforma."
                en="The Lighthouse works through two connected elements: a series of surprise collectible vinyls, physical and digital, and a digital platform. Each vinyl comes with a code that unlocks the educational experience on the platform."
              />
            }
          />
          <Reveal
            delay={100}
            className="flex flex-col justify-center rounded-2xl border border-glow-400/20 bg-gradient-to-br from-night-900 to-night-950 p-8"
          >
            <Spark className="h-7 w-7 text-glow-300" animated />
            <h3 className="mt-4 font-serif text-2xl text-white">
              <T es="Plataforma en desarrollo" en="Platform in development" />
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-night-200">
              <T
                es="Estamos construyendo la plataforma con cuidado. Pronto vas a poder explorarla completa desde acá."
                en="We are building the platform with care. Soon you will be able to explore it in full right here."
              />
            </p>
            <div className="mt-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-glow-400/30 bg-glow-400/5 px-5 py-2 text-sm font-medium text-glow-200">
                <Spark className="h-4 w-4" />
                <T es="Próximamente" en="Coming soon" />
              </span>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Terra Bianca */}
      <Section className="border-y border-white/5 bg-white/[0.015]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <SectionTitle
            eyebrow={<T es="La colección" en="The collection" />}
            title={
              <T
                es="Terra Bianca: una vuelta al mundo en siete continentes"
                en="Terra Bianca: a trip around the world in seven continents"
              />
            }
          />
          <Reveal className="space-y-5 text-lg leading-relaxed text-night-200">
            <p>
              <T
                es={
                  <>
                    La colección debut,{" "}
                    <span className="text-glow-200">Terra Bianca</span>, está
                    organizada en torno a los siete continentes. Cada álbum se
                    compra como una sorpresa: no sabés qué continente vas a
                    recibir hasta abrirlo.
                  </>
                }
                en={
                  <>
                    The debut collection,{" "}
                    <span className="text-glow-200">Terra Bianca</span>, is
                    organized around the seven continents. Each album is bought
                    as a surprise: you don't know which continent you will receive
                    until you open it.
                  </>
                }
              />
            </p>
            <p>
              <T
                es="Dentro de cada álbum conviven artistas de varios países de esa región. La compra “a ciegas” es intencional: te libera de prejuicios y te abre a sonidos y voces que quizás nunca habrías buscado, dando lugar a músicos emergentes de cada rincón del planeta."
                en="Inside each album live artists from several countries of that region. The “blind” purchase is intentional: it frees you from prejudice and opens you to sounds and voices you might never have sought, making room for emerging musicians from every corner of the planet."
              />
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Las 5 capas de la plataforma */}
      <Section>
        <SectionTitle
          eyebrow={<T es="La plataforma" en="The platform" />}
          title={
            <T
              es="Las capas para aprender a través de la música"
              en="The layers to learn through music"
            />
          }
          intro={
            <T
              es="El código de cada vinilo abre una experiencia digital estructurada en varios espacios conectados."
              en="Each vinyl's code opens a digital experience structured in several connected spaces."
            />
          }
        />
        <div className="mt-14 grid gap-2 lg:max-w-3xl">
          <FeatureRow title={<T es="Mi Colección" en="My Collection" />}>
            <T
              es="Tu biblioteca digital personal, donde guardás tus álbumes y escuchás la música cuando quieras."
              en="Your personal digital library, where you keep your albums and listen to the music whenever you want."
            />
          </FeatureRow>
          <FeatureRow
            title={
              <T
                es="El Observatorio del Conocimiento"
                en="The Knowledge Observatory"
              />
            }
            delay={80}
          >
            <T
              es="Contenido educativo por categorías: biografías de artistas, datos culturales y geográficos, la ciencia del sonido y la frecuencia, y la huella ambiental de cada vinilo."
              en="Educational content by category: artist biographies, cultural and geographic facts, the science of sound and frequency, and the environmental footprint of each vinyl."
            />
          </FeatureRow>
          <FeatureRow title={<T es="Sonido y Salud" en="Sound & Health" />} delay={120}>
            <T
              es="La sección dedicada a la música como herramienta de salud: la ciencia del sonido y la frecuencia, playlists para acompañar el descanso y el estado de ánimo, y la conexión directa con los programas de arte y salud de CHISPA."
              en="The section devoted to music as a health tool: the science of sound and frequency, playlists to support rest and mood, and a direct link to CHISPA's arts and health programs."
            />
          </FeatureRow>
          <FeatureRow title={<T es="Contribuciones" en="Contributions" />} delay={160}>
            <T
              es="Conecta tu aprendizaje con causas humanitarias alineadas a los Objetivos de Desarrollo Sostenible de la ONU. Los puntos que ganás aprendiendo desbloquean donaciones reales a organizaciones aliadas."
              en="Connects your learning with humanitarian causes aligned with the UN Sustainable Development Goals. The points you earn by learning unlock real donations to partner organizations."
            />
          </FeatureRow>
          <FeatureRow title={<T es="Comunidad Global" en="Global Community" />} delay={240}>
            <T
              es="Un espacio abierto para que personas de todo el mundo se conecten a través de la música."
              en="An open space for people all over the world to connect through music."
            />
          </FeatureRow>
          <FeatureRow title={<T es="Inicio" en="Home" />} delay={320}>
            <T
              es="Tu perfil de un vistazo: discos, lecciones completadas, tu “eco score” de contribuciones y tus últimas incorporaciones."
              en="Your profile at a glance: records, completed lessons, your contributions “eco score” and your latest additions."
            />
          </FeatureRow>
        </div>
      </Section>

      {/* Triple Bottom Line / misión */}
      <Section className="border-y border-white/5 bg-white/[0.015]">
        <SectionTitle
          eyebrow={<T es="Por qué existe" en="Why it exists" />}
          title={
            <T
              es="Arte, personas y sostenibilidad en equilibrio"
              en="Art, people and sustainability in balance"
            />
          }
          intro={
            <T
              es="The Lighthouse está construido con la arquitectura del Triple Bottom Line, buscando balancear tres tipos de valor."
              en="The Lighthouse is built on the Triple Bottom Line architecture, seeking to balance three kinds of value."
            />
          }
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Pillar
            title={<T es="Valor artístico" en="Artistic value" />}
            description={
              <T
                es="Curar músicos genuinamente diversos y poner voces emergentes de cada continente en la misma plataforma, con sus historias y su música tradicional."
                en="Curating genuinely diverse musicians and placing emerging voices from every continent on the same platform, with their stories and their traditional music."
              />
            }
          />
          <Pillar
            delay={120}
            title={<T es="Valor social" en="Social value" />}
            description={
              <T
                es="Conectar a las personas con la cultura, la historia y entre sí a través de la música, que afecta la memoria, la emoción y la empatía."
                en="Connecting people with culture, history and one another through music, which shapes memory, emotion and empathy."
              />
            }
          />
          <Pillar
            delay={240}
            title={<T es="Valor económico" en="Economic value" />}
            description={
              <T
                es="Un modelo que genera ingresos con productos coleccionables mientras mantiene el acceso a la plataforma gratuito y ayuda a artistas a vivir de su arte."
                en="A model that earns income from collectible products while keeping platform access free and helping artists make a living from their art."
              />
            }
          />
        </div>
      </Section>

      {/* Integración con CHISPA */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <SectionTitle
            eyebrow={<T es="Ecosistema" en="Ecosystem" />}
            title={<T es="Conectado con CHISPA" en="Connected to CHISPA" />}
            intro={
              <T
                es="The Lighthouse amplía el alcance de CHISPA más allá del hospital."
                en="The Lighthouse extends CHISPA's reach beyond the hospital."
              />
            }
          />
          <Reveal className="space-y-5 text-lg leading-relaxed text-night-200">
            <p>
              <T
                es="A través del módulo de Sonido y Salud, la galería del legado digital y su canal de contribuciones, la plataforma da a los programas de arte y salud de CHISPA una audiencia global y un hogar digital permanente."
                en="Through the Sound and Health module, the digital legacy gallery and its contributions channel, the platform gives CHISPA's arts and health programs a global audience and a permanent digital home."
              />
            </p>
            <p>
              <T
                es={
                  <>
                    La tecnología al servicio del arte, y el arte al servicio de
                    la salud:{" "}
                    <span className="text-glow-200">
                      un mismo ecosistema de luz.
                    </span>
                  </>
                }
                en={
                  <>
                    Technology in the service of art, and art in the service of
                    health:{" "}
                    <span className="text-glow-200">
                      one single ecosystem of light.
                    </span>
                  </>
                }
              />
            </p>
            <div className="pt-2">
              <Button href="/chispa" variant="ghost">
                <T es="Conocer CHISPA →" en="Explore CHISPA →" />
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTASection
        eyebrow={<T es="Sé parte" en="Be part of it" />}
        title={
          <T es="Sumate a lo que viene" en="Be part of what's coming" />
        }
        intro={
          <T
            es="La plataforma todavía está en desarrollo. Dejanos tu contacto y te avisamos cuando abra y lleguen las próximas colecciones."
            en="The platform is still in development. Leave us your contact and we'll let you know when it opens and new collections arrive."
          />
        }
        primary={{
          href: "/contacto",
          label: <T es="Unirme a la lista de espera" en="Join the waitlist" />,
        }}
      />
    </>
  );
}
