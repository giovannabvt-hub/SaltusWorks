"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { T } from "@/lib/i18n";
import { Logo } from "./Spark";
import { LangToggle } from "./LangToggle";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú móvil al cambiar de página
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-white/5 bg-night-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" aria-label="Saltus Works · inicio" className="shrink-0">
          <Logo />
        </Link>

        {/* Navegación de escritorio */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {nav.slice(1).map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors ${
                  active
                    ? "text-glow-300"
                    : "text-night-200 hover:text-white"
                }`}
              >
                <T es={item.label} en={item.labelEn} />
              </Link>
            );
          })}
          <Link
            href="/contacto"
            className="rounded-full border border-glow-400/40 bg-glow-400/10 px-5 py-2 text-sm font-medium text-glow-200 transition-colors hover:bg-glow-400/20 hover:text-white"
          >
            <T es="Sumarse" en="Join us" />
          </Link>
          <LangToggle />
        </nav>

        {/* Controles móviles */}
        <div className="flex items-center gap-2 lg:hidden">
          <LangToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-night-100"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-all ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-6 bg-current transition-all ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-all ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <nav
          className="border-t border-white/5 bg-night-950/95 px-6 pb-8 pt-2 lg:hidden"
          aria-label="Principal móvil"
        >
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block border-b border-white/5 py-4 text-lg ${
                  active ? "text-glow-300" : "text-night-100"
                }`}
              >
                <T es={item.label} en={item.labelEn} />
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
