export const site = {
  name: "Saltus Works",
  tagline: "Arte que lleva luz al mundo",
  description:
    "Saltus Works une música, arte y tecnología al servicio del bienestar, la salud y la sostenibilidad. Defendemos el valor del arte y de los artistas como motor de transformación social.",
  url: "https://saltusworks.com",
  origin: "Argentina — con proyección internacional",
  email: "hola@saltusworks.com",
  social: {
    instagram: "https://instagram.com/saltusworks",
    linkedin: "https://linkedin.com/company/saltusworks",
    youtube: "https://youtube.com/@saltusworks",
  },
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Sobre nosotros", href: "/sobre" },
  { label: "The Lighthouse App", href: "/lighthouse" },
  { label: "CHISPA", href: "/chispa" },
  { label: "Arte y artistas", href: "/arte" },
  { label: "Contacto", href: "/contacto" },
];
