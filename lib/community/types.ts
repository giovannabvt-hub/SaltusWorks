/* -------------------------------------------------------------------------- */
/*  Modelo de datos de la Comunidad Saltus.                                     */
/*  Todo el contenido (libros, películas, recomendaciones) vive en archivos     */
/*  de datos tipados y lleva campos en ES y EN, más etiquetas de eje y ODS.     */
/* -------------------------------------------------------------------------- */

/** Texto bilingüe: se renderiza con <T es={x.es} en={x.en} />. */
export type L = { es: string; en: string };

/** Ejes temáticos que atraviesan toda la comunidad. */
export type AxisId =
  | "arte-cultura"
  | "ciencia-tecnologia"
  | "arte-salud"
  | "medio-ambiente"
  | "general";

export type Axis = {
  id: AxisId;
  label: L;
  /** Color de acento del eje (chips, bordes). */
  color: string;
  /** ODS de la ONU asociados por defecto a este eje. */
  sdgs: number[];
};

/** Base común a libros y películas (destacado del mes + archivo). */
type MediaBase = {
  id: string;
  title: L;
  cover?: string; // /images/comunidad/books|films/xxx.jpg — si falta, se muestra un placeholder
  axis: AxisId;
  sdgs: number[];
  description: L;
  /** "YYYY-MM": el mes más reciente es el destacado; el resto, archivo. */
  month: string;
  /** Fecha ISO del próximo encuentro (solo aplica al destacado). */
  meetingDate?: string;
};

export type Book = MediaBase & { author: string };

export type Film = MediaBase & { director: string; year?: number };

/** Tipos de recomendación. Las etiquetas visibles se traducen en RECOMMENDATION_TYPES. */
export type RecommendationType =
  | "noticia"
  | "youtube"
  | "curso"
  | "obra"
  | "lugar"
  | "podcast";

export type Recommendation = {
  id: string;
  type: RecommendationType;
  title: L;
  axis: AxisId;
  sdgs: number[];
  /** Idioma del contenido enlazado. */
  lang: "es" | "en" | "es-en";
  /** Link externo. */
  url: string;
  description: L;
};
