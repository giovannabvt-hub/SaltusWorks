"use client";

import { useState, type FormEvent } from "react";
import { useLang } from "@/lib/i18n";
import { Spark } from "./Spark";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-night-100 placeholder:text-night-400 transition-colors focus:border-glow-400/60 focus:bg-white/[0.05] focus:outline-none";

const copy = {
  es: {
    thanks: "¡Gracias!",
    received: "Recibimos tu mensaje. Te vamos a responder muy pronto.",
    another: "Enviar otro mensaje",
    name: "Nombre",
    namePh: "Tu nombre",
    email: "Email",
    emailPh: "tu@email.com",
    subject: "Asunto",
    choose: "Elegí una opción",
    optCollab: "Quiero colaborar / ser voluntario",
    optDonate: "Quiero donar a CHISPA",
    optWaitlist: "Lista de espera de Lighthouse",
    optArtist: "Soy artista y quiero sumarme",
    optPress: "Prensa / alianzas",
    optOther: "Otro",
    message: "Mensaje",
    messagePh: "Contanos en qué estás pensando…",
    error: "Hubo un problema al enviar. Probá de nuevo o escribinos por email.",
    sending: "Enviando…",
    send: "Enviar mensaje",
  },
  en: {
    thanks: "Thank you!",
    received: "We received your message. We'll get back to you very soon.",
    another: "Send another message",
    name: "Name",
    namePh: "Your name",
    email: "Email",
    emailPh: "you@email.com",
    subject: "Subject",
    choose: "Choose an option",
    optCollab: "I want to collaborate / volunteer",
    optDonate: "I want to donate to CHISPA",
    optWaitlist: "Lighthouse waitlist",
    optArtist: "I'm an artist and want to join",
    optPress: "Press / partnerships",
    optOther: "Other",
    message: "Message",
    messagePh: "Tell us what you have in mind…",
    error: "There was a problem sending. Try again or email us.",
    sending: "Sending…",
    send: "Send message",
  },
};

export function ContactForm() {
  const { lang } = useLang();
  const t = copy[lang];
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // TODO: conectar a un servicio real (Formspree, Resend, API route, etc.).
    try {
      await new Promise((r) => setTimeout(r, 700));
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-glow-400/30 bg-glow-400/5 p-10 text-center">
        <Spark className="mx-auto h-8 w-8 text-glow-300" animated />
        <h3 className="mt-4 font-serif text-2xl text-white">{t.thanks}</h3>
        <p className="mt-2 text-night-200">{t.received}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-glow-300 underline underline-offset-4"
        >
          {t.another}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="mb-2 block text-sm text-night-200">
            {t.name}
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder={t.namePh}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-night-200">
            {t.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder={t.emailPh}
          />
        </div>
      </div>

      <div>
        <label htmlFor="asunto" className="mb-2 block text-sm text-night-200">
          {t.subject}
        </label>
        <select id="asunto" name="asunto" className={inputClass} defaultValue="">
          <option value="" disabled>
            {t.choose}
          </option>
          <option value="colaborar">{t.optCollab}</option>
          <option value="donar">{t.optDonate}</option>
          <option value="lighthouse">{t.optWaitlist}</option>
          <option value="artista">{t.optArtist}</option>
          <option value="prensa">{t.optPress}</option>
          <option value="otro">{t.optOther}</option>
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className="mb-2 block text-sm text-night-200">
          {t.message}
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          className={`${inputClass} resize-none`}
          placeholder={t.messagePh}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-terra-400">{t.error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-glow-400 px-8 py-3.5 text-sm font-medium tracking-wide text-night-950 transition-all duration-300 hover:bg-glow-300 hover:shadow-[0_0_40px_-8px] hover:shadow-glow-400/60 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? t.sending : t.send}
        <Spark className="h-4 w-4" />
      </button>
    </form>
  );
}
