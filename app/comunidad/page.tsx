import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionTitle, PageHeader } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Spark } from "@/components/Spark";
import { T } from "@/lib/i18n";
import { AXES } from "@/lib/community/axes";
import { SdgTags } from "@/components/community/AxisTag";

export const metadata: Metadata = {
  title: "Comunidad Saltus",
  description:
    "Un espacio para la comunidad de Saltus Works: club de lectura, cine club, recomendaciones y un chat por venir, alrededor del arte, la ciencia, la tecnología, el bienestar y la sostenibilidad.",
};

const sections = [
  {
    href: "/comunidad/chat",
    title: { es: "Chat", en: "Chat" },
    desc: {
      es: "Un espacio para conversar por canales temáticos.",
      en: "A space to chat through themed channels.",
    },
    soon: true,
  },
  {
    href: "/comunidad/club-de-lectura",
    title: { es: "Club de lectura", en: "Book Club" },
    desc: {
      es: "Un libro por mes y un archivo para explorar por eje.",
      en: "A book each month and an archive to explore by axis.",
    },
    soon: false,
  },
  {
    href: "/comunidad/cine-club",
    title: { es: "Cine club", en: "Film Club" },
    desc: {
      es: "La película del mes y un archivo filtrable por eje.",
      en: "The film of the month and an archive filterable by axis.",
    },
    soon: false,
  },
  {
    href: "/comunidad/recomendaciones",
    title: { es: "Recomendaciones", en: "Recommendations" },
    desc: {
      es: "Noticias, cursos, canales, obras y lugares que vale la pena conocer.",
      en: "News, courses, channels, artworks and places worth discovering.",
    },
    soon: false,
  },
];

const axisIntro: Record<string, { es: string; en: string }> = {
  "arte-cultura": {
    es: "El arte como lenguaje común: literatura, música, cine y patrimonio.",
    en: "Art as a common language: literature, music, cinema and heritage.",
  },
  "ciencia-tecnologia": {
    es: "Curiosidad, innovación y pensamiento crítico.",
    en: "Curiosity, innovation and critical thinking.",
  },
  "arte-salud": {
    es: "El cuidado, la salud y el bienestar.",
    en: "Care, health and wellbeing.",
  },
  "medio-ambiente": {
    es: "Naturaleza, clima y formas de habitar el planeta.",
    en: "Nature, climate and ways of inhabiting the planet.",
  },
  general: {
    es: "El espacio abierto para todo lo demás.",
    en: "The open space for everything else.",
  },
};

export default function ComunidadPage() {
  return (
    <>
      <PageHeader
        eyebrow={<T es="Comunidad Saltus" en="Saltus Community" />}
        title={
          <T
            es="Un espacio para crear juntos"
            en="A space to build together"
          />
        }
        intro={
          <T
            es="Nos reunimos alrededor del arte, la ciencia, la tecnología, el bienestar y la sostenibilidad, con los Objetivos de Desarrollo Sostenible de la ONU como brújula común. Leemos, miramos cine, compartimos hallazgos y, pronto, conversamos."
            en="We gather around art, science, technology, wellbeing and sustainability, with the UN Sustainable Development Goals as a shared compass. We read, watch films, share finds and, soon, chat together."
          />
        }
      />

      {/* Ejes temáticos */}
      <Section className="border-y border-white/5 bg-white/[0.015]">
        <SectionTitle
          eyebrow={<T es="Ejes temáticos" en="Thematic axes" />}
          title={<T es="Cinco miradas, una comunidad" en="Five lenses, one community" />}
          intro={
            <T
              es="Todo lo que compartimos se organiza en estos ejes, cada uno vinculado a los ODS que le corresponden."
              en="Everything we share is organized into these axes, each linked to its related SDGs."
            />
          }
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AXES.map((a, i) => (
            <Reveal
              key={a.id}
              delay={(i % 3) * 80}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-6"
            >
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: a.color }}
              />
              <h3 className="mt-3 font-serif text-xl text-white">
                <T es={a.label.es} en={a.label.en} />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-night-200">
                <T es={axisIntro[a.id].es} en={axisIntro[a.id].en} />
              </p>
              <div className="mt-4">
                <SdgTags sdgs={a.sdgs} />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Accesos a las subsecciones */}
      <Section>
        <SectionTitle
          eyebrow={<T es="Qué vas a encontrar" en="What you'll find" />}
          title={<T es="Cuatro formas de participar" en="Four ways to take part" />}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {sections.map((s, i) => (
            <Reveal key={s.href} delay={(i % 2) * 120}>
              <Link
                href={s.href}
                className="group flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-glow-400/40"
              >
                <div className="flex items-center justify-between gap-3">
                  <Spark className="h-6 w-6 text-glow-300" />
                  {s.soon && (
                    <span className="rounded-full border border-glow-400/30 bg-glow-400/5 px-3 py-1 text-xs font-medium text-glow-200">
                      <T es="Próximamente" en="Coming soon" />
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-serif text-2xl text-white">
                  <T es={s.title.es} en={s.title.en} />
                </h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-night-200">
                  <T es={s.desc.es} en={s.desc.en} />
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-glow-300 transition-transform group-hover:gap-3">
                  <T es="Entrar" en="Open" />
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
