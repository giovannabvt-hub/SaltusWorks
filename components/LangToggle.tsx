"use client";

import { useLang } from "@/lib/i18n";

export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const next = lang === "es" ? "en" : "es";

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={lang === "es" ? "View site in English" : "Ver el sitio en español"}
      className={`inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold tracking-wide text-night-100 transition-colors hover:border-glow-400/50 hover:text-white ${className}`}
    >
      <span className={lang === "es" ? "text-glow-300" : "text-night-400"}>ES</span>
      <span className="text-night-500">/</span>
      <span className={lang === "en" ? "text-glow-300" : "text-night-400"}>EN</span>
    </button>
  );
}
