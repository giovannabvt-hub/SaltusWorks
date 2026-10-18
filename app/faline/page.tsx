import type { Metadata } from "next";
import { Section, PageHeader, Button } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Spark } from "@/components/Spark";
import { T } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Faline",
  description:
    "Faline es la app que Saltus Works está desarrollando para que dar y recibir ayuda sea más simple y se comparta entre todos. Próximamente.",
};

export default function FalinePage() {
  return (
    <>
      <PageHeader
        eyebrow={<T es="Proyecto · App en desarrollo" en="Project · App in development" />}
        title="Faline"
        intro={
          <T
            es="La app que estamos creando para que dar y recibir ayuda sea más simple y se comparta entre todos."
            en="The app we're building to make giving and receiving help simpler and shared by everyone."
          />
        }
      />

      <Section className="pt-4">
        <Reveal className="mx-auto max-w-2xl rounded-3xl border border-glow-400/20 bg-gradient-to-br from-night-900 to-night-950 p-8 text-center sm:p-12">
          <Spark className="mx-auto h-8 w-8 text-glow-300" animated />
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-glow-400/30 bg-glow-400/5 px-4 py-1.5 text-sm font-medium text-glow-200">
            <T es="Próximamente" en="Coming soon" />
          </span>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-night-200">
            <T
              es="Faline está en pleno desarrollo. Pronto vas a poder conocerla y ser parte desde el comienzo."
              en="Faline is in active development. Soon you'll be able to discover it and be part of it from the start."
            />
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contacto">
              <T es="Avisame cuando esté lista" en="Notify me when it's ready" />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
