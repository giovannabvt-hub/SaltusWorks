"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "es" | "en";

type LangContextValue = { lang: Lang; setLang: (l: Lang) => void };

const LangContext = createContext<LangContextValue>({
  lang: "es",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  // Recupera la preferencia guardada tras el primer render (evita mismatch).
  useEffect(() => {
    const saved = localStorage.getItem("saltus-lang");
    if (saved === "en" || saved === "es") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("saltus-lang", l);
    document.documentElement.lang = l;
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

/* Devuelve el contenido en el idioma activo, conservando el formato JSX. */
export function T({ es, en }: { es: ReactNode; en: ReactNode }) {
  const { lang } = useLang();
  return <>{lang === "en" ? en : es}</>;
}
