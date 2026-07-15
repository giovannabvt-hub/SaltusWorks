import type { Metadata } from "next";
import { PageHeader, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { Spark } from "@/components/Spark";
import { T } from "@/lib/i18n";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Ponte en contacto con Saltus Works. Colaborá, doná, sumate a la lista de espera de Lighthouse o proponé tu arte.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow={<T es="Contacto" en="Contact" />}
        title={
          <T
            es="Hablemos de arte, salud y luz"
            en="Let's talk about art, health and light"
          />
        }
        intro={
          <T
            es="Ya sea que quieras colaborar, donar, sumarte como artista o simplemente saber más, estamos para escucharte."
            en="Whether you want to collaborate, donate, join as an artist or simply learn more, we're here to listen."
          />
        }
      />

      <Section className="pt-4">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <Reveal className="rounded-2xl border border-white/8 bg-white/[0.02] p-7 sm:p-10">
            <ContactForm />
          </Reveal>

          <Reveal delay={120} className="space-y-8">
            <div>
              <h2 className="flex items-center gap-2 font-serif text-2xl text-white">
                <Spark className="h-5 w-5 text-glow-300" />
                <T es="Escribinos" en="Write to us" />
              </h2>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 inline-block text-lg text-glow-300 underline underline-offset-4"
              >
                {site.email}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-night-400">
                <T es="Seguinos" en="Follow us" />
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-night-100 transition-colors hover:text-glow-300"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-night-100 transition-colors hover:text-glow-300"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={site.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-night-100 transition-colors hover:text-glow-300"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-night-400">
                <T es="Dónde estamos" en="Where we are" />
              </h3>
              <p className="mt-3 text-night-200">
                <T es={site.origin} en="Argentina, with international reach" />
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
