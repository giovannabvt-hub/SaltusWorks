import type { L } from "@/lib/community/types";
import { AXES } from "@/lib/community/axes";
import { T } from "@/lib/i18n";

type MockMessage = {
  name: string;
  initials: string;
  color: string;
  time: string;
  text: L;
};

/* Usuarios y mensajes ficticios, solo para la maqueta visual. */
const MESSAGES: MockMessage[] = [
  {
    name: "Lucía M.",
    initials: "LM",
    color: "#e0915f",
    time: "10:02",
    text: {
      es: "¿Alguien leyó el libro del mes? Me encantó el capítulo sobre las bibliotecas antiguas.",
      en: "Did anyone read this month's book? I loved the chapter on ancient libraries.",
    },
  },
  {
    name: "Mateo R.",
    initials: "MR",
    color: "#7aa2d6",
    time: "10:05",
    text: {
      es: "¡Sí! Quería proponer que hagamos el próximo encuentro con música de fondo.",
      en: "Yes! I wanted to suggest we hold the next meeting with background music.",
    },
  },
  {
    name: "Sol A.",
    initials: "SA",
    color: "#6fb48a",
    time: "10:09",
    text: {
      es: "Sumo una recomendación para el eje de Medio Ambiente, después la comparto.",
      en: "I'll add a recommendation for the Environment axis and share it later.",
    },
  },
  {
    name: "Diego P.",
    initials: "DP",
    color: "#e9b46f",
    time: "10:12",
    text: {
      es: "Perfecto. ¿Nos vemos también en el cine club del viernes?",
      en: "Perfect. See you at the film club on Friday too?",
    },
  },
];

export function ChatMockup() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-2xl border border-white/8 bg-night-950/60 shadow-2xl"
    >
      <div className="grid grid-cols-1 sm:grid-cols-[220px_minmax(0,1fr)]">
        {/* Barra lateral de canales */}
        <div className="border-b border-white/8 bg-white/[0.02] p-4 sm:border-b-0 sm:border-r">
          <p className="px-2 text-xs font-semibold uppercase tracking-wider text-night-400">
            <T es="Canales" en="Channels" />
          </p>
          <ul className="mt-3 flex gap-2 overflow-x-auto sm:flex-col sm:gap-1 sm:overflow-visible">
            <li>
              <span className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-glow-400/15 px-3 py-2 text-sm font-medium text-glow-200">
                <span className="text-night-400">#</span>
                <T es="General" en="General" />
              </span>
            </li>
            {AXES.filter((a) => a.id !== "general").map((a) => (
              <li key={a.id}>
                <span className="flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm text-night-300">
                  <span style={{ color: a.color }}>#</span>
                  <T es={a.label.es} en={a.label.en} />
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Conversación */}
        <div className="flex min-h-[360px] min-w-0 flex-col">
          <div className="flex items-center gap-2 border-b border-white/8 px-5 py-3">
            <span className="text-night-400">#</span>
            <span className="text-sm font-medium text-white">
              <T es="General" en="General" />
            </span>
          </div>

          <div className="flex-1 space-y-5 p-5">
            {MESSAGES.map((m) => (
              <div key={m.name} className="flex gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-night-950"
                  style={{ backgroundColor: m.color }}
                >
                  {m.initials}
                </span>
                <div className="min-w-0">
                  <p className="flex items-baseline gap-2">
                    <span className="text-sm font-medium text-white">{m.name}</span>
                    <span className="text-[11px] text-night-500">{m.time}</span>
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed text-night-200">
                    <T es={m.text.es} en={m.text.en} />
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input deshabilitado con overlay suave */}
          <div className="relative border-t border-white/8 p-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-night-500">
              <T es="Escribí un mensaje…" en="Write a message…" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center rounded-b-2xl bg-night-950/40 backdrop-blur-[1px]">
              <span className="rounded-full border border-glow-400/30 bg-night-950/80 px-4 py-1.5 text-xs font-medium text-glow-200">
                <T es="Chat en construcción" en="Chat under construction" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
