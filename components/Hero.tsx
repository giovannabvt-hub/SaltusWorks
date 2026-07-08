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
      {/* Capa base: amanecer sobre el árbol de la vida
          (sol dorado abajo, nubes lavanda/malva arriba, neblina) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 animate-drift bg-[radial-gradient(70%_55%_at_50%_88%,rgba(255,233,176,0.95)_0%,rgba(246,197,110,0.55)_22%,rgba(233,166,63,0)_55%),linear-gradient(to_top,#f2c877_0%,#e6a758_12%,#cf8f6e_28%,#b78f8f_44%,#9d86a6_60%,#85789c_76%,#5b5478_100%)]"
      />
      {/* Ilustración de marca: árbol de la vida al amanecer (asset propio) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center [background-image:url('/images/hero.svg')]"
      />
      {/* Obra final (opcional): al agregar public/images/hero.jpg, se superpone
          automáticamente; si no existe, se muestra la ilustración de arriba.
          Se reencuadra hacia abajo para no duplicar el wordmark del nav. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-no-repeat [background-image:url('/images/hero.jpg')] [background-position:center_72%]"
      />
      {/* Viñeta radial para legibilidad del texto */}
      <div
        aria-hidden="true"
        className="absolute inset-0 [background:radial-gradient(70%_55%_at_50%_44%,rgba(10,14,24,0.34)_0%,rgba(10,14,24,0)_60%)]"
      />
      {/* Acople cinematográfico: gradiente que funde el hero con la página */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-night-950/55 via-transparent to-night-950"
      />
      {/* Fundido inferior extendido hacia la sección siguiente */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-night-950"
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
          className="animate-rise mt-6 font-display text-6xl font-semibold uppercase leading-[0.98] tracking-[0.06em] text-white drop-shadow-[0_2px_36px_rgba(0,0,0,0.6)] sm:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.25s" }}
        >
          Saltus Works
        </h1>
        <p
          className="animate-rise mt-6 font-serif text-2xl leading-snug text-night-100 drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-3xl lg:text-4xl"
          style={{ animationDelay: "0.4s" }}
        >
          Llevamos luz al mundo a través{" "}
          <span className="text-glow-300">del arte</span>
        </p>
        <p
          className="animate-rise mx-auto mt-6 max-w-2xl text-base leading-relaxed text-night-100/90 sm:text-lg"
          style={{ animationDelay: "0.55s" }}
        >
          Unimos música, arte y tecnología al servicio del bienestar, la salud y
          la sostenibilidad. Defendemos el valor del arte y de los artistas como
          motor de transformación social.
        </p>
        <div
          className="animate-rise mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "0.7s" }}
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
