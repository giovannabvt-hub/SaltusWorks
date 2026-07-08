import Link from "next/link";
import { site } from "@/lib/site";
import { Spark } from "./Spark";

/**
 * Hero cinematográfico y etéreo.
 * Capa base: gradiente cálido "noche → luz" siempre presente.
 * Capa superior: la obra real, si existe /public/images/hero.jpg.
 * (Reemplazá el archivo para usar la imagen adjunta del brief.)
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Capa base: cielo cálido al amanecer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 animate-drift bg-[radial-gradient(120%_90%_at_50%_100%,#f4d99b_0%,#e6a23c_14%,#bd6318_30%,#7a3a19_48%,#212a3c_70%,#0b0f1a_100%)]"
      />
      {/* Obra real (si está disponible) con mezcla suave */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-90 [background-image:url('/images/hero.jpg')]"
      />
      {/* Halo de luz central (el faro / la chispa) */}
      <div
        aria-hidden="true"
        className="absolute bottom-[8%] left-1/2 h-[45vh] w-[45vh] -translate-x-1/2 rounded-full bg-glow-200/40 blur-[120px]"
      />
      {/* Viñeta para legibilidad del texto */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-night-950/70 via-night-950/10 to-night-950/85"
      />

      {/* Chispas flotantes */}
      <FloatingSparks />

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p
          className="animate-rise text-xs font-semibold uppercase tracking-[0.35em] text-glow-200"
          style={{ animationDelay: "0.1s" }}
        >
          Música · Arte · Tecnología
        </p>
        <h1
          className="animate-rise mt-6 font-serif text-5xl leading-[1.05] text-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.5)] sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.25s" }}
        >
          Llevamos luz
          <br />
          al mundo a través
          <br />
          <span className="text-glow-300">del arte</span>
        </h1>
        <p
          className="animate-rise mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-night-100/90 sm:text-xl"
          style={{ animationDelay: "0.4s" }}
        >
          Saltus Works une música, arte y tecnología al servicio del bienestar,
          la salud y la sostenibilidad. Defendemos el valor del arte y de los
          artistas como motor de transformación social.
        </p>
        <div
          className="animate-rise mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "0.55s" }}
        >
          <Link
            href="/sobre"
            className="inline-flex items-center gap-2 rounded-full bg-glow-400 px-8 py-3.5 text-sm font-medium tracking-wide text-night-950 transition-all duration-300 hover:bg-glow-300 hover:shadow-[0_0_50px_-8px] hover:shadow-glow-400/70"
          >
            Conocé nuestra misión
          </Link>
          <Link
            href="/chispa"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-3.5 text-sm font-medium tracking-wide text-white backdrop-blur-sm transition-colors duration-300 hover:border-glow-400/60 hover:bg-white/5"
          >
            Descubrí los proyectos
          </Link>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-night-200">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="block h-10 w-px bg-gradient-to-b from-glow-300/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function FloatingSparks() {
  const sparks = [
    { top: "22%", left: "16%", size: "h-3 w-3", delay: "0s" },
    { top: "35%", left: "82%", size: "h-4 w-4", delay: "1.2s" },
    { top: "60%", left: "10%", size: "h-2.5 w-2.5", delay: "2.1s" },
    { top: "70%", left: "88%", size: "h-3 w-3", delay: "0.6s" },
    { top: "18%", left: "60%", size: "h-2 w-2", delay: "1.8s" },
    { top: "48%", left: "40%", size: "h-2 w-2", delay: "2.6s" },
  ];
  return (
    <div aria-hidden="true" className="absolute inset-0 z-0">
      {sparks.map((s, i) => (
        <span
          key={i}
          className="absolute"
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        >
          <Spark className={`${s.size} animate-spark text-glow-200`} />
        </span>
      ))}
    </div>
  );
}
