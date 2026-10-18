import type { Film } from "./types";

/* -------------------------------------------------------------------------- */
/*  Cine club. Misma lógica que el club de lectura: el `month` más reciente      */
/*  es la "película del mes"; el resto es archivo. Pósters opcionales en         */
/*  /public/images/comunidad/films/.                                            */
/* -------------------------------------------------------------------------- */
export const FILMS: Film[] = [
  {
    id: "la-sociedad-de-los-poetas-muertos",
    title: {
      es: "La sociedad de los poetas muertos",
      en: "Dead Poets Society",
    },
    director: "Peter Weir",
    year: 1989,
    cover: "", // /images/comunidad/films/dead-poets-society.jpg
    axis: "arte-cultura",
    sdgs: [4],
    description: {
      es: "Un profesor despierta en sus alumnos el amor por la poesía y el pensamiento propio. Sobre el arte como forma de libertad.",
      en: "A teacher awakens in his students a love for poetry and independent thought. On art as a form of freedom.",
    },
    month: "2026-10",
    meetingDate: "2026-10-30",
  },
  {
    id: "una-verdad-incomoda",
    title: { es: "Una verdad incómoda", en: "An Inconvenient Truth" },
    director: "Davis Guggenheim",
    year: 2006,
    cover: "",
    axis: "medio-ambiente",
    sdgs: [13],
    description: {
      es: "El documental que llevó la crisis climática al gran público. Punto de partida para hablar de acción ambiental.",
      en: "The documentary that brought the climate crisis to a mass audience. A starting point to talk about environmental action.",
    },
    month: "2026-09",
  },
  {
    id: "talentos-ocultos",
    title: { es: "Talentos ocultos", en: "Hidden Figures" },
    director: "Theodore Melfi",
    year: 2016,
    cover: "",
    axis: "ciencia-tecnologia",
    sdgs: [4, 5, 10],
    description: {
      es: "La historia real de tres matemáticas afroamericanas clave en la carrera espacial de la NASA. Ciencia, talento e igualdad.",
      en: "The true story of three African-American mathematicians key to NASA's space race. Science, talent and equality.",
    },
    month: "2026-08",
  },
  {
    id: "el-lado-bueno-de-las-cosas",
    title: { es: "El lado bueno de las cosas", en: "Silver Linings Playbook" },
    director: "David O. Russell",
    year: 2012,
    cover: "",
    axis: "arte-salud",
    sdgs: [3],
    description: {
      es: "Una mirada honesta y luminosa sobre la salud mental, el vínculo y la recuperación a través del encuentro con el otro.",
      en: "An honest, warm look at mental health, connection and recovery through meeting others.",
    },
    month: "2026-07",
  },
];
