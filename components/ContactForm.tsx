"use client";

import { useState, type FormEvent } from "react";
import { Spark } from "./Spark";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-night-100 placeholder:text-night-400 transition-colors focus:border-glow-400/60 focus:bg-white/[0.05] focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // TODO: conectar a un servicio real (Formspree, Resend, API route, etc.).
    // Por ahora simulamos un envío exitoso para dejar el flujo navegable.
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
        <h3 className="mt-4 font-serif text-2xl text-white">¡Gracias!</h3>
        <p className="mt-2 text-night-200">
          Recibimos tu mensaje. Te vamos a responder muy pronto.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-glow-300 underline underline-offset-4"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="mb-2 block text-sm text-night-200">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-night-200">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="asunto" className="mb-2 block text-sm text-night-200">
          Asunto
        </label>
        <select id="asunto" name="asunto" className={inputClass} defaultValue="">
          <option value="" disabled>
            Elegí una opción
          </option>
          <option value="colaborar">Quiero colaborar / ser voluntario</option>
          <option value="donar">Quiero donar a CHISPA</option>
          <option value="lighthouse">Lista de espera de Lighthouse</option>
          <option value="artista">Soy artista y quiero sumarme</option>
          <option value="prensa">Prensa / alianzas</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className="mb-2 block text-sm text-night-200">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          className={`${inputClass} resize-none`}
          placeholder="Contanos en qué estás pensando…"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-terra-400">
          Hubo un problema al enviar. Probá de nuevo o escribinos por email.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-glow-400 px-8 py-3.5 text-sm font-medium tracking-wide text-night-950 transition-all duration-300 hover:bg-glow-300 hover:shadow-[0_0_40px_-8px] hover:shadow-glow-400/60 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
        <Spark className="h-4 w-4" />
      </button>
    </form>
  );
}
