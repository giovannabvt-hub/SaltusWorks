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

export const metadata: Metadata = {
  title: "CHISPA — Arte, Vida y Sanación",
  description:
    "CHISPA es una organización de arte y bienestar que trabaja en la intersección de la expresión creativa, la solidaridad comunitaria y el cuidado de la salud. El arte como necesidad humana, respaldado por evidencia clínica.",
};

export default function ChispaPage() {
  return (
    <>
      {/* Presentación / logo de CHISPA — imagen limpia (el águila queda visible) */}
      <header className="relative min-h-[90svh] overflow-hidden">
        {/* Imagen de presentación (logo) — public/images/chispa.jpg */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${asset("/images/chispa.jpg")}'), radial-gradient(120% 90% at 50% 35%, #e9b46f33, #5b547833 55%, #0a0e18 100%)`,
          }}
        />
        {/* Leve oscurecido arriba (para el nav) y fundido suave al pie */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-night-950/55 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-b from-transparent to-night-950"
        />
        {/* Indicador de scroll */}
        <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-night-100/80">
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <span className="block h-9 w-px bg-gradient-to-b from-glow-200/80 to-transparent" />
          </div>
        </div>
      </header>

      {/* Título e introducción (debajo de la imagen, sin tapar el águila) */}
      <Section className="pt-16 text-center sm:pt-20">
        <Reveal className="mx-auto max-w-3xl">
          <div className="flex justify-center">
            <Eyebrow>CHISPA · Arte, Vida y Sanación</Eyebrow>
          </div>
          <h1 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            El arte no es un lujo. Es una necesidad humana.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-night-200">
            CHISPA es una organización de arte y bienestar que trabaja en la
            intersección de la expresión creativa, la solidaridad comunitaria y
            el cuidado de la salud. Acerca el arte a cualquier persona que lo
            necesite, para mejorar su salud o acompañar el momento que esté
            atravesando, sea cual sea.
          </p>
        </Reveal>
      </Section>

      {/* Manifiesto / cita */}
      <Section>
        <Reveal className="mx-auto max-w-4xl text-center">
          <Spark className="mx-auto h-8 w-8 text-glow-300" animated />
          <blockquote className="mt-8 font-serif text-2xl leading-snug text-white sm:text-3xl lg:text-4xl">
            “El arte es, sobre todo, un estado del alma.”
          </blockquote>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-night-400">
            Marc Chagall
          </p>
        </Reveal>
      </Section>

      {/* Quiénes somos + el nombre / Elías */}
      <Section className="border-y border-white/5 bg-white/[0.015]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <SectionTitle eyebrow="Quiénes somos" title="Una luz que nadie puede apagar" />
          <Reveal className="space-y-5 text-lg leading-relaxed text-night-200">
            <p>
              CHISPA reúne a músicos, artistas visuales, poetas, bailarines,
              narradores y performers con personas que atraviesan cualquier
              condición de salud: desde el cáncer hasta la salud mental, desde el
              dolor crónico hasta el duelo o la recuperación. Nuestros programas
              son humanos antes que técnicos, están respaldados por evidencia
              científica y parten del respeto absoluto por la experiencia vivida
              de cada persona.
            </p>
            <p>
              El nombre <span className="text-glow-200">CHISPA</span> es un
              homenaje a <span className="text-glow-200">Elías</span>, un artista
              y amigo cuya alma creó arte que lo mantiene vivo para siempre. Es
              también esa pequeña luz que permanece cuando todo lo demás se apaga.{" "}
              <span className="text-night-100">
                Esa chispa es lo que venimos a cuidar.
              </span>
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Fundamentos filosóficos */}
      <Section>
        <SectionTitle
          eyebrow="Fundamentos"
          title="De dónde viene nuestra manera de acompañar"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-white/8 bg-white/[0.02] p-8">
            <h3 className="font-serif text-2xl text-white">
              El arte como prueba de existencia
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-night-200">
              Crear algo propio —un cuadro, un poema, una melodía— es afirmar la
              propia humanidad frente a un diagnóstico o un momento difícil que
              amenaza con reducir a la persona a un cuerpo o un expediente. Es una
              forma de decir: soy más que esto. Estuve aquí. Esto es lo que hice
              mientras estaba aquí.
            </p>
          </Reveal>
          <Reveal
            delay={120}
            className="rounded-2xl border border-white/8 bg-white/[0.02] p-8"
          >
            <h3 className="font-serif text-2xl text-white">
              La alegría como forma de cuidado
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-night-200">
              El humor, el juego y la conexión humana no son un complemento de la
              sanación: son parte de ella. Nuestros artistas no ofrecen
              distracción; son profesionales formados para sostener un espacio
              donde conviven la vulnerabilidad, el dolor, la risa y la dignidad.
            </p>
          </Reveal>
        </div>
        <Reveal className="mx-auto mt-10 max-w-3xl text-center text-lg italic leading-relaxed text-night-100">
          CHISPA no promete curar. Promete algo más honesto y, en nuestra
          experiencia, más poderoso: que mientras estés aquí, vas a ser visto con
          plenitud. Y que lo que crees va a permanecer.
        </Reveal>
      </Section>

      {/* Los tres pilares */}
      <Section className="border-y border-white/5 bg-white/[0.015]">
        <SectionTitle
          eyebrow="Lo que hacemos"
          title="Tres pilares"
          intro="Un modelo que conecta a los artistas, a los pacientes y a la comunidad creativa en un mismo ciclo."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Pillar
            title="1 · Los artistas van a los pacientes"
            description="Músicos, artistas visuales, poetas y performers profesionales visitan hospitales, oncología, salud mental, cuidados paliativos y centros comunitarios. No son actuaciones: son encuentros. El rol del artista es estar presente, ser testigo y crear junto a cada persona."
          />
          <Pillar
            delay={120}
            title="2 · Las personas crean: el Archivo del Legado"
            description="Cada persona tiene la oportunidad, nunca la obligación, de crear algo propio. El proceso es en sí mismo acompañamiento y terapia; y lo creado permanece. No es solo huella y legado: es también cuidado en el presente. Las obras se conservan y se comparten en la Colección CHISPA, un testimonio colectivo de la creatividad humana."
          />
          <Pillar
            delay={240}
            title="3 · Los artistas sostienen los programas"
            description="Músicos y artistas crean y actúan para financiar los programas, y pueden sumar su obra a los proyectos publicados en The Lighthouse. Un ciclo virtuoso: los artistas ganan propósito, las personas ganan acceso y quienes apoyan obtienen un impacto visible y verificable."
          />
        </div>
      </Section>

      {/* Evidencia */}
      <Section>
        <SectionTitle
          eyebrow="El arte como herramienta de salud"
          title="Nos apoyamos en evidencia"
          intro="Cada elemento de nuestro modelo está respaldado por investigación clínica publicada en revistas médicas de referencia internacional."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              stat: "−75%",
              label:
                "de cortisol (la hormona del estrés) tras 45 minutos de actividad creativa.",
              src: "Kaimal et al., 2016",
            },
            {
              stat: "1.113",
              label:
                "pacientes oncológicos: reducción significativa de ansiedad y depresión.",
              src: "Eur. J. Oncology Nursing, 2024",
            },
            {
              stat: "3.167",
              label:
                "participantes: efecto significativo de la arteterapia sobre la ansiedad.",
              src: "J. Psychiatric Mental Health Nursing, 2025",
            },
            {
              stat: "£4–£11",
              label:
                "de retorno social por cada £1 invertida en artes en prescripción.",
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
                {s.label}
              </p>
              <p className="mt-3 text-xs text-night-400">{s.src}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-sm text-night-400">
          Con evidencia documentada en oncología, salud mental, trauma y PTSD,
          neurología y demencia, rehabilitación, infancia y bienestar general. La
          OMS reconoce formalmente el papel de las artes en la salud poblacional.
        </Reveal>
      </Section>

      {/* Expansión a hospitales */}
      <Section className="border-y border-white/5 bg-white/[0.015]">
        <SectionTitle
          eyebrow="Hacia dónde vamos"
          title="Programas de arte permanentes en instituciones de salud"
          intro="Nuestro objetivo es instalar el arte no como eventos puntuales, sino como parte estructural y financiada del cuidado."
        />
        <div className="mt-14 grid gap-2 lg:max-w-3xl">
          <FeatureRow title="Fase 1 · Piloto y prueba de concepto">
            Alianzas con dos o tres departamentos hospitalarios o centros
            comunitarios, artistas presentes varios días por semana, resultados
            medidos con escalas validadas y el primer Archivo del Legado.
          </FeatureRow>
          <FeatureRow title="Fase 2 · Integración institucional" delay={100}>
            Usar los datos del piloto para acercarse a sistemas de salud y
            fundaciones, formar al personal en cuidado informado por las artes y
            establecer artistas residentes en los hospitales socios.
          </FeatureRow>
          <FeatureRow title="Fase 3 · Red nacional" delay={200}>
            Escalar a una red de hospitales socios y de artistas CHISPA
            remunerados y formados, con la Colección CHISPA como exposición
            itinerante, abogando por el arte en salud como provisión estándar.
          </FeatureRow>
        </div>
      </Section>

      {/* Conexión con Lighthouse */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <SectionTitle
            eyebrow="Ecosistema"
            title="Conectado con The Lighthouse"
            intro="A medida que CHISPA crece, The Lighthouse amplía su alcance más allá del hospital."
          />
          <Reveal className="space-y-5 text-lg leading-relaxed text-night-200">
            <p>
              El módulo de Sonido y Salud, el canal de contribuciones y la
              galería del legado digital conectan a los usuarios de The Lighthouse
              con el impacto clínico real de la música, y dan a cada obra un hogar
              digital permanente.
            </p>
            <div className="pt-2">
              <Button href="/lighthouse" variant="ghost">
                Ver The Lighthouse →
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Qué buscamos */}
      <Section className="border-t border-white/5">
        <SectionTitle
          eyebrow="Cómo sumarte"
          title="Lo que estamos buscando"
          intro="CHISPA se construye en comunidad. Hay muchas formas de encender más chispas."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Hospitales, centros de salud mental, hospices y centros comunitarios dispuestos a pilotar el programa.",
            "Músicos y artistas profesionales que quieran trabajar en entornos clínicos y comunitarios.",
            "Socios financiadores para apoyar la fase piloto y el primer Archivo del Legado.",
            "Socios académicos para co-diseñar la medición de impacto.",
            "Organizaciones de las industrias creativas que quieran contribuir a través de eventos de fundraising.",
            "Personas que quieran donar y ayudar a que el arte llegue a quien más lo necesita.",
          ].map((t, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 90}
              className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.02] p-6"
            >
              <Spark className="mt-1 h-5 w-5 shrink-0 text-glow-300" />
              <p className="text-[15px] leading-relaxed text-night-200">{t}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        eyebrow="Colaborá"
        title="Ayudanos a encender más chispas"
        intro="Podés sumarte como artista o institución, aliarte o donar. Cada aporte multiplica el alcance del arte que sana."
        primary={{ href: "/contacto", label: "Quiero colaborar" }}
        secondary={{ href: "/lighthouse", label: "Ver Lighthouse" }}
      />
    </>
  );
}
