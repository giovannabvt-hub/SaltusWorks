export const site = {
  name: "Saltus Works",
  tagline: "Arte que lleva luz al mundo",
  description:
    "Saltus Works une música, arte, ciencia y tecnología al servicio del bienestar, la salud, el medio ambiente y la sostenibilidad. Defendemos el valor del arte y de los artistas como motor de transformación social.",
  url: "https://saltusworks.org",
  origin: "Argentina, con proyección internacional",
  email: "pharos@saltus.works",
  social: {
    instagram: "https://instagram.com/saltusworks",
    linkedin: "https://linkedin.com/company/saltusworks",
    youtube: "https://youtube.com/@saltusworks",
  },
};

export type NavItem = { label: string; labelEn: string; href: string };

export const nav: NavItem[] = [
  { label: "Inicio", labelEn: "Home", href: "/" },
  { label: "Sobre nosotros", labelEn: "About", href: "/sobre" },
  { label: "The Lighthouse App", labelEn: "The Lighthouse App", href: "/lighthouse" },
  { label: "CHISPA", labelEn: "CHISPA", href: "/chispa" },
  { label: "Semillas", labelEn: "Seeds", href: "/arte" },
  { label: "Contacto", labelEn: "Contact", href: "/contacto" },
];
