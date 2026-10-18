import type { Metadata } from "next";
import { Section, PageHeader, Button } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { T } from "@/lib/i18n";
import { ChatMockup } from "@/components/community/ChatMockup";

export const metadata: Metadata = {
  title: "Chat · Comunidad Saltus",
  description:
    "El chat de la Comunidad Saltus, con canales por eje temático. Vista previa: en construcción.",
};

export default function ChatPage() {
  return (
    <>
      <PageHeader
        eyebrow={<T es="Comunidad · Chat" en="Community · Chat" />}
        title={<T es="Un lugar para conversar" en="A place to talk" />}
        intro={
          <T
            es="Un chat con un canal general y canales por cada eje temático, para compartir ideas, encuentros y hallazgos. Así se va a ver cuando abra."
            en="A chat with a general channel and one channel per thematic axis, to share ideas, meetings and finds. Here's how it will look when it opens."
          />
        }
      />

      <Section className="pt-4">
        <Reveal className="flex flex-wrap items-center gap-4">
          <span className="rounded-full border border-glow-400/30 bg-glow-400/5 px-4 py-1.5 text-sm font-medium text-glow-200">
            <T es="Próximamente" en="Coming soon" />
          </span>
          <p className="text-sm text-night-300">
            <T
              es="Esta es una vista previa. Todavía no es posible escribir."
              en="This is a preview. Writing is not available yet."
            />
          </p>
        </Reveal>

        <div className="mt-8">
          <ChatMockup />
        </div>

        <Reveal className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <Button href="/contacto">
            <T es="Avisame cuando abra" en="Notify me when it opens" />
          </Button>
          <p className="text-sm text-night-400">
            <T
              es="Te escribimos cuando el chat esté disponible."
              en="We'll reach out when the chat is available."
            />
          </p>
        </Reveal>
      </Section>
    </>
  );
}
