import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Spark } from "./Spark";

/* -------------------------------------------------------------------------- */
/*  Section — envoltorio consistente con ancho máximo y padding vertical.      */
/* -------------------------------------------------------------------------- */
export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-6 py-20 sm:py-28 lg:px-10 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Eyebrow — pequeña etiqueta superior con chispa.                            */
/* -------------------------------------------------------------------------- */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-glow-400">
      <Spark className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  SectionTitle — título de sección con eyebrow y descripción opcionales.     */
/* -------------------------------------------------------------------------- */
export function SectionTitle({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-lg leading-relaxed text-night-200">{intro}</p>
      )}
    </Reveal>
  );
}

/* -------------------------------------------------------------------------- */
/*  Button — enlace con estilo primario o secundario.                          */
/* -------------------------------------------------------------------------- */
export function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-glow-400 text-night-950 hover:bg-glow-300 hover:shadow-[0_0_40px_-8px] hover:shadow-glow-400/60"
      : "border border-white/15 text-night-100 hover:border-glow-400/50 hover:text-white";

  const extra = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={`${base} ${styles}`} {...extra}>
      {children}
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*  ProjectCard — tarjeta de proyecto (Lighthouse / CHISPA).                   */
/* -------------------------------------------------------------------------- */
export function ProjectCard({
  kicker,
  title,
  description,
  href,
  cta,
  accent = "glow",
  delay = 0,
}: {
  kicker: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  accent?: "glow" | "terra";
  delay?: number;
}) {
  const ring =
    accent === "terra"
      ? "hover:border-terra-400/50 hover:shadow-terra-500/20"
      : "hover:border-glow-400/50 hover:shadow-glow-400/20";
  const dot = accent === "terra" ? "text-terra-400" : "text-glow-300";

  return (
    <Reveal
      as="article"
      delay={delay}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.04] to-transparent p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${ring}`}
    >
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500 ${
          accent === "terra" ? "bg-terra-500/10" : "bg-glow-400/10"
        } opacity-0 group-hover:opacity-100`}
      />
      <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-night-400">
        <Spark className={`h-3.5 w-3.5 ${dot}`} />
        {kicker}
      </span>
      <h3 className="mt-5 font-serif text-2xl text-white sm:text-3xl">{title}</h3>
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-night-200">
        {description}
      </p>
      <Link
        href={href}
        className={`mt-7 inline-flex items-center gap-2 text-sm font-medium ${dot} transition-transform group-hover:gap-3`}
      >
        {cta}
        <span aria-hidden="true">→</span>
      </Link>
    </Reveal>
  );
}

/* -------------------------------------------------------------------------- */
/*  CTASection — banda de llamado a la acción.                                 */
/* -------------------------------------------------------------------------- */
export function CTASection({
  eyebrow = "Sumate",
  title,
  intro,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <Section>
      <Reveal className="relative overflow-hidden rounded-3xl border border-glow-400/20 bg-gradient-to-br from-night-900 via-night-900 to-night-950 px-8 py-16 text-center sm:px-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-64 w-64 -translate-y-1/2 rounded-full bg-glow-400/20 blur-[100px]" />
        <div className="relative">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-night-200">{intro}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href={primary.href}>{primary.label}</Button>
            {secondary && (
              <Button href={secondary.href} variant="ghost">
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  PageHeader — encabezado de página interior con glow y eyebrow.             */
/* -------------------------------------------------------------------------- */
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden px-6 pb-16 pt-36 sm:pt-44 lg:px-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-72 w-72 -translate-y-1/3 rounded-full bg-glow-400/15 blur-[120px]"
      />
      <div className="relative mx-auto max-w-4xl">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-night-200">
              {intro}
            </p>
          )}
        </Reveal>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  FeatureRow — bloque de texto con chispa, para listar ideas.                */
/* -------------------------------------------------------------------------- */
export function FeatureRow({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className="flex gap-4 border-t border-white/8 py-7 first:border-t-0"
    >
      <Spark className="mt-1 h-5 w-5 shrink-0 text-glow-300" />
      <div>
        <h3 className="font-serif text-xl text-white">{title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-night-200">
          {children}
        </p>
      </div>
    </Reveal>
  );
}

/* -------------------------------------------------------------------------- */
/*  Placeholder — marco para contenido futuro (mockups, fotos, casos).         */
/* -------------------------------------------------------------------------- */
export function Placeholder({
  label,
  aspect = "aspect-video",
}: {
  label: string;
  aspect?: string;
}) {
  return (
    <div
      className={`flex ${aspect} w-full items-center justify-center rounded-2xl border border-dashed border-white/12 bg-white/[0.02] text-center`}
    >
      <div className="px-6">
        <Spark className="mx-auto h-6 w-6 text-glow-400/60" />
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-night-400">
          {label}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Pillar — tarjeta de pilar (arte / salud / sostenibilidad).                 */
/* -------------------------------------------------------------------------- */
export function Pillar({
  title,
  description,
  delay = 0,
}: {
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className="rounded-2xl border border-white/8 bg-white/[0.02] p-7 transition-colors hover:border-glow-400/30"
    >
      <Spark className="h-6 w-6 text-glow-300" animated />
      <h3 className="mt-4 font-serif text-xl text-white">{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-night-200">
        {description}
      </p>
    </Reveal>
  );
}
