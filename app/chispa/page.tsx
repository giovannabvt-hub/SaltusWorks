import type { Metadata } from "next";
import {
  Section,
  SectionTitle,
  Pillar,
  CTASection,
  Button,
} from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { T } from "@/lib/i18n";
import { asset } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "CHISPA · Arte, Música, Ciencias de la Salud",
  description:
    "CHISPA integra el arte en centros oncológicos y de salud para acompañar a los pacientes durante su tratamiento. Arte, música y ciencias de la salud, con respaldo clínico.",
};

export default function ChispaPage() {
  return (
    <>
      {/* Presentación / logo de CHISPA */}
      <header className="relative min-h-[90svh] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${asset("/images/chispa.jpg")}'), radial-gradient(120% 90% at 50% 35%, #e9b46f33, #5b547833 55%, #0a0e18 100%)`,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-night-950/55 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-b from-transparent to-night-950"
        />
        <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-night-100/80">
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <span className="block h-9 w-px bg-gradient-to-b from-glow-200/80 to-transparent" />
          </div>
        </div>
      </header>

      {/* Título CHISPA + subtítulo + descripción */}
      <Section className="pt-16 text-center sm:pt-20">
        <Reveal className="mx-auto max-w-3xl">
          <h1 className="font-display font-bold leading-none text-white [font-size:clamp(48px,9vw,88px)] [font-variant:small-caps] [letter-spacing:0.04em]">
            CHISPA
          </h1>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-glow-400 sm:text-sm sm:tracking-[0.32em]">
            <T
              es="Arte · Música · Ciencias de la Salud"
              en="Art · Music · Health Sciences"
            />
          </p>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-night-200">
            <T
              es="CHISPA integra el arte en centros oncológicos y de salud para acompañar a las personas durante su tratamiento. Artistas, terapeutas y científicos crean junto a cada paciente, para que la música y el arte sean parte de su proceso y mejoren su bienestar físico y emocional."
              en="CHISPA integrates art into oncology and health centers to accompany people through their treatment. Artists, therapists and scientists create alongside each patient, so that music and art become part of their journey and improve their physical and emotional wellbeing."
            />
          </p>
        </Reveal>
      </Section>

      {/* Quiénes somos + Elías */}
      <Section className="border-y border-white/5 bg-white/[0.015]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <SectionTitle
            eyebrow={<T es="Quiénes somos" en="Who we are" />}
            title={
              <T
                es="Una luz que nadie puede apagar"
                en="A light no one can extinguish"
              />
            }
          />
          <Reveal className="space-y-5 text-lg leading-relaxed text-night-200">
            <p>
              <T
                es="Reunimos a músicos, artistas visuales, poetas, performers, terapeutas y científicos con personas que atraviesan cualquier condición de salud, del cáncer a la salud mental. Programas humanos, con respaldo científico y respeto absoluto por cada experiencia."
                en="We bring together musicians, visual artists, poets, performers, therapists and scientists with people facing any health condition, from cancer to mental health. Human programs, backed by science and with absolute respect for every experience."
              />
            </p>
            <p>
              <T
                es={
                  <>
                    El nombre <span className="text-glow-200">CHISPA</span> es un
                    homenaje a <span className="text-glow-200">Elías</span>, un
                    artista y amigo cuya alma creó arte que lo mantiene vivo para
                    siempre. Es esa pequeña luz que permanece cuando todo lo demás
                    se apaga.{" "}
                    <span className="text-night-100">
                      Es lo que venimos a cuidar.
                    </span>
                  </>
                }
                en={
                  <>
                    The name <span className="text-glow-200">CHISPA</span>{" "}
                    (spark) is a tribute to{" "}
                    <span className="text-glow-200">Elías</span>, an artist and
                    friend whose soul created art that keeps him alive forever. It
                    is that small light that remains when everything else goes
                    out.{" "}
                    <span className="text-night-100">
                      That is what we are here to protect.
                    </span>
                  </>
                }
              />
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Cómo funciona: Semillas, Encuentros, Huellas */}
      <Section>
        <SectionTitle
          eyebrow={<T es="Cómo funciona" en="How it works" />}
          title={
            <T
              es="Semillas, Encuentros y Huellas"
              en="Seeds, Encounters and Footprints"
            />
          }
          intro={
            <T
              es="Tres partes de un mismo ciclo: quiénes participan, cómo llega el arte y qué queda para siempre."
              en="Three parts of one cycle: who takes part, how art arrives and what stays forever."
            />
          }
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Pillar
            title={<T es="Semillas" en="Seeds" />}
            description={
              <T
                es="Las semillas son quienes forman CHISPA: pacientes, artistas, terapeutas, científicos, hospitales, otras ONG y comunidades que se suman a crear y cuidar."
                en="The seeds are those who make up CHISPA: patients, artists, therapists, scientists, hospitals, other NGOs and communities that join to create and care."
              />
            }
          />
          <Pillar
            delay={120}
            title={<T es="Encuentros" en="Encounters" />}
            description={
              <T
                es="Artistas profesionales llevan el arte a hospitales, salud mental, cuidados paliativos y centros comunitarios, para crear junto a cada persona."
                en="Professional artists bring art to hospitals, mental health, palliative care and community centers, to create alongside each person."
              />
            }
          />
          <Pillar
            delay={240}
            title={<T es="Huellas" en="Footprints" />}
            description={
              <T
                es="Eventos, exposiciones y una bitácora que encapsula las obras de cada participante, tenga o no un diagnóstico, para que perduren en el tiempo y se muestren al mundo."
                en="Events, exhibitions and a logbook that captures the works of every participant, with or without a diagnosis, so they endure over time and are shown to the world."
              />
            }
          />
        </div>
      </Section>

      {/* Fundamentos */}
      <Section className="border-y border-white/5 bg-white/[0.015]">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-white/8 bg-white/[0.02] p-8">
            <h3 className="font-serif text-2xl text-white">
              <T
                es="El arte como prueba de existencia"
                en="Art as proof of existence"
              />
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-night-200">
              <T
                es="Crear algo propio, un cuadro, un poema o una melodía, es afirmar la humanidad frente a un diagnóstico o un momento difícil. Una forma de decir: soy más que esto, estuve aquí."
                en="Creating something of your own, a painting, a poem or a melody, is to affirm your humanity in the face of a diagnosis or a hard moment. A way of saying: I am more than this, I was here."
              />
            </p>
          </Reveal>
          <Reveal
            delay={120}
            className="rounded-2xl border border-white/8 bg-white/[0.02] p-8"
          >
            <h3 className="font-serif text-2xl text-white">
              <T
                es="La alegría como forma de cuidado"
                en="Joy as a form of care"
              />
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-night-200">
              <T
                es="El humor, el juego y la conexión no son un complemento de la sanación: son parte de ella. Nuestros artistas sostienen un espacio donde conviven el dolor, la risa y la dignidad."
                en="Humor, play and connection are not an add-on to healing: they are part of it. Our artists hold a space where pain, laughter and dignity live together."
              />
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Evidencia */}
      <Section>
        <SectionTitle
          eyebrow={
            <T
              es="El arte como herramienta de salud"
              en="Art as a health tool"
            />
          }
          title={
            <T es="Nos apoyamos en evidencia" en="We rely on evidence" />
          }
          intro={
            <T
              es="Cada parte de nuestro modelo se apoya en investigación clínica publicada en revistas médicas de referencia."
              en="Every part of our model is grounded in clinical research published in leading medical journals."
            />
          }
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              stat: "−75%",
              es: "de cortisol tras 45 minutos de actividad creativa.",
              en: "less cortisol after 45 minutes of creative activity.",
              src: "Kaimal et al., 2016",
            },
            {
              stat: "1.113",
              es: "pacientes oncológicos: menos ansiedad y depresión.",
              en: "cancer patients: less anxiety and depression.",
              src: "Eur. J. Oncology Nursing, 2024",
            },
            {
              stat: "3.167",
              es: "participantes: efecto claro de la arteterapia sobre la ansiedad.",
              en: "participants: a clear effect of art therapy on anxiety.",
              src: "J. Psychiatric Mental Health Nursing, 2025",
            },
            {
              stat: "£4 a £11",
              es: "de retorno social por cada £1 invertida en artes en salud.",
              en: "of social return for every £1 invested in arts in health.",
              src: "Creative Health, APPG, 2017",
            },
          ].map((s, i) => (
            <Reveal
              key={s.stat}
              delay={i * 90}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-6"
            >
              <p className="font-serif text-4xl text-glow-300">{s.stat}</p>
              <p className="mt-3 text-sm leading-relaxed text-night-200">
                <T es={s.es} en={s.en} />
              </p>
              <p className="mt-3 text-xs text-night-400">{s.src}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Conexión con Lighthouse */}
      <Section className="border-y border-white/5 bg-white/[0.015]">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <SectionTitle
            eyebrow={<T es="Ecosistema" en="Ecosystem" />}
            title={
              <T
                es="Conectado con The Lighthouse"
                en="Connected to The Lighthouse"
              />
            }
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
                es="Da a cada obra un hogar digital permanente y conecta a la comunidad con el impacto real de la música."
                en="It gives each work a permanent digital home and connects the community with the real impact of music."
              />
            </p>
            <div className="pt-2">
              <Button href="/lighthouse" variant="ghost">
                <T es="Ver The Lighthouse →" en="See The Lighthouse →" />
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTASection
        eyebrow={<T es="Colaborá" en="Collaborate" />}
        title={
          <T
            es="Ayudanos a encender más chispas"
            en="Help us light more sparks"
          />
        }
        intro={
          <T
            es="Sumate como artista o institución, aliate o doná. Cada aporte multiplica el alcance del arte que sana."
            en="Join as an artist or institution, partner with us or donate. Every contribution multiplies the reach of art that heals."
          />
        }
        primary={{
          href: "/contacto",
          label: <T es="Quiero colaborar" en="I want to collaborate" />,
        }}
        secondary={{
          href: "/lighthouse",
          label: <T es="Ver Lighthouse" en="See Lighthouse" />,
        }}
      />
    </>
  );
}
