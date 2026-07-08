type SparkProps = {
  className?: string;
  animated?: boolean;
};

/**
 * Motivo recurrente de SALTUS: un punto de luz / chispa.
 * Se usa como acento en bullets, separadores y transiciones.
 */
export function Spark({ className = "", animated = false }: SparkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`${className} ${animated ? "animate-spark" : ""}`}
    >
      <path
        d="M12 1.5c.5 4.6 2.4 6.5 7 7-4.6.5-6.5 2.4-7 7-.5-4.6-2.4-6.5-7-7 4.6-.5 6.5-2.4 7-7Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Logo placeholder de SALTUS Works: chispa + wordmark.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex h-8 w-8 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-glow-400/20 blur-md" />
        <Spark className="relative h-6 w-6 text-glow-300" animated />
      </span>
      <span className="font-serif text-xl font-semibold tracking-wide text-night-100">
        Saltus <span className="text-glow-300">Works</span>
      </span>
    </span>
  );
}
