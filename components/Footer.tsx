import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo, Spark } from "./Spark";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-night-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-night-200">
              {site.description}
            </p>
            <p className="mt-4 flex items-center gap-2 text-xs uppercase tracking-widest text-night-400">
              <Spark className="h-3 w-3 text-glow-400" />
              {site.origin}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-night-400">
              Navegación
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-night-200 transition-colors hover:text-glow-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-night-400">
              Conectar
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-night-200 transition-colors hover:text-glow-300"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.social.instagram}
                  className="text-sm text-night-200 transition-colors hover:text-glow-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.social.linkedin}
                  className="text-sm text-night-200 transition-colors hover:text-glow-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.social.youtube}
                  className="text-sm text-night-200 transition-colors hover:text-glow-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-night-400 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. Hecho con arte, música y
            tecnología.
          </p>
          <p className="flex items-center gap-2">
            <Spark className="h-3 w-3 text-glow-400" />
            {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
