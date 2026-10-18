import type { Book } from "./types";

/* -------------------------------------------------------------------------- */
/*  Club de lectura. El libro con el `month` más reciente es el "del mes";       */
/*  el resto forma el archivo. Para agregar uno nuevo, copiá un bloque,          */
/*  cambiá los campos y subí la portada a /public/images/comunidad/books/.      */
/* -------------------------------------------------------------------------- */
export const BOOKS: Book[] = [
  {
    id: "el-infinito-en-un-junco",
    title: { es: "El infinito en un junco", en: "Papyrus" },
    author: "Irene Vallejo",
    cover: "", // /images/comunidad/books/el-infinito-en-un-junco.jpg
    axis: "arte-cultura",
    sdgs: [4, 11],
    description: {
      es: "Un viaje por la historia del libro y de la lectura, desde los primeros rollos de papiro hasta hoy. Un homenaje a la memoria colectiva.",
      en: "A journey through the history of the book and of reading, from the first papyrus scrolls to today. A tribute to collective memory.",
    },
    month: "2026-10",
    meetingDate: "2026-10-28",
  },
  {
    id: "la-vida-secreta-de-los-arboles",
    title: {
      es: "La vida secreta de los árboles",
      en: "The Hidden Life of Trees",
    },
    author: "Peter Wohlleben",
    cover: "",
    axis: "medio-ambiente",
    sdgs: [13, 15],
    description: {
      es: "Cómo se comunican y cuidan los árboles entre sí. Una mirada científica y sensible sobre los bosques y nuestro vínculo con ellos.",
      en: "How trees communicate and care for one another. A scientific and sensitive look at forests and our bond with them.",
    },
    month: "2026-09",
  },
  {
    id: "el-gen",
    title: { es: "El gen: una historia íntima", en: "The Gene: An Intimate History" },
    author: "Siddhartha Mukherjee",
    cover: "",
    axis: "ciencia-tecnologia",
    sdgs: [4, 9],
    description: {
      es: "La historia de la genética contada como una saga humana: ciencia, ética y las preguntas que nos definen.",
      en: "The history of genetics told as a human saga: science, ethics and the questions that define us.",
    },
    month: "2026-08",
  },
  {
    id: "el-cuerpo-lleva-la-cuenta",
    title: {
      es: "El cuerpo lleva la cuenta",
      en: "The Body Keeps the Score",
    },
    author: "Bessel van der Kolk",
    cover: "",
    axis: "arte-salud",
    sdgs: [3],
    description: {
      es: "Cómo el trauma marca el cuerpo y la mente, y el papel del arte, el movimiento y la comunidad en la sanación.",
      en: "How trauma shapes body and mind, and the role of art, movement and community in healing.",
    },
    month: "2026-07",
  },
];
