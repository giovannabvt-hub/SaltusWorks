export const site = {
  name: "Saltus Works",
  tagline: "Arte y tecnología al servicio del bienestar",
  description:
    "Saltus Works integra música, arte, ciencia y tecnología para promover la salud, el bienestar y un futuro más sostenible, con los artistas como motor de transformación social.",
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
  { label: "Faline", labelEn: "Faline", href: "/faline" },
  { label: "Semillas", labelEn: "Seeds", href: "/arte" },
  { label: "Comunidad Saltus", labelEn: "Saltus Community", href: "/comunidad" },
  { label: "Contacto", labelEn: "Contact", href: "/contacto" },
];
