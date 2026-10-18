import type { L, Recommendation, RecommendationType } from "./types";

/* -------------------------------------------------------------------------- */
/*  Recomendaciones de la comunidad: noticias, canales, cursos, obras, etc.      */
/*  Cada ficha lleva tipo, eje, idioma del contenido, link externo y            */
/*  descripción bilingüe.                                                       */
/* -------------------------------------------------------------------------- */

/** Etiquetas visibles de cada tipo (bilingües). */
export const RECOMMENDATION_TYPES: Record<RecommendationType, L> = {
  noticia: { es: "Noticia", en: "News" },
  youtube: { es: "Canal de YouTube", en: "YouTube channel" },
  curso: { es: "Curso", en: "Course" },
  obra: { es: "Obra de arte", en: "Artwork" },
  lugar: { es: "Lugar", en: "Place" },
  podcast: { es: "Podcast", en: "Podcast" },
};

/** Etiqueta corta del idioma del contenido. */
export const CONTENT_LANG_LABELS: Record<Recommendation["lang"], string> = {
  es: "ES",
  en: "EN",
  "es-en": "ES · EN",
};

export const RECOMMENDATIONS: Recommendation[] = [
  {
    id: "kurzgesagt",
    type: "youtube",
    title: { es: "Kurzgesagt – In a Nutshell", en: "Kurzgesagt – In a Nutshell" },
    axis: "ciencia-tecnologia",
    sdgs: [4, 13],
    lang: "en",
    url: "https://www.youtube.com/@kurzgesagt",
    description: {
      es: "Ciencia compleja explicada con animaciones bellísimas: clima, biología, espacio y grandes preguntas.",
      en: "Complex science explained with gorgeous animations: climate, biology, space and big questions.",
    },
  },
  {
    id: "radio-ambulante",
    type: "podcast",
    title: { es: "Radio Ambulante", en: "Radio Ambulante" },
    axis: "arte-cultura",
    sdgs: [11, 10],
    lang: "es",
    url: "https://radioambulante.org",
    description: {
      es: "Historias reales de América Latina narradas con una producción sonora excepcional.",
      en: "True stories from Latin America told with exceptional sound production.",
    },
  },
  {
    id: "musicoterapia-coursera",
    type: "curso",
    title: {
      es: "Introducción a la musicoterapia",
      en: "Introduction to Music Therapy",
    },
    axis: "arte-salud",
    sdgs: [3, 4],
    lang: "es-en",
    url: "https://www.coursera.org",
    description: {
      es: "Fundamentos del uso de la música con fines terapéuticos, con base en evidencia clínica.",
      en: "Foundations of using music for therapeutic purposes, grounded in clinical evidence.",
    },
  },
  {
    id: "the-clock-marclay",
    type: "obra",
    title: { es: "The Clock, de Christian Marclay", en: "The Clock, by Christian Marclay" },
    axis: "arte-cultura",
    sdgs: [11],
    lang: "es-en",
    url: "https://en.wikipedia.org/wiki/The_Clock_(2010_film)",
    description: {
      es: "Un montaje de 24 horas hecho con miles de escenas de cine: una obra que funciona, además, como reloj real.",
      en: "A 24-hour montage made from thousands of film scenes: an artwork that also works as a real clock.",
    },
  },
  {
    id: "nature-based-solutions",
    type: "noticia",
    title: {
      es: "Soluciones basadas en la naturaleza",
      en: "Nature-based solutions",
    },
    axis: "medio-ambiente",
    sdgs: [13, 15],
    lang: "en",
    url: "https://www.unep.org",
    description: {
      es: "Cómo los ecosistemas sanos ayudan a enfrentar el cambio climático. Recursos del Programa de la ONU para el Medio Ambiente.",
      en: "How healthy ecosystems help tackle climate change. Resources from the UN Environment Programme.",
    },
  },
];
