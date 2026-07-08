# Saltus Works — Sitio institucional

Sitio web de **Saltus Works**: música, arte y tecnología al servicio del
bienestar, la salud y la sostenibilidad. Defendemos el valor del arte y de los
artistas como motor de transformación social.

Aloja la presentación de dos proyectos propios:

- **The Lighthouse App** — música + exploración cultural + legado digital.
- **CHISPA** — ONG argentina de arte y salud.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + React 19
- [Tailwind CSS 4](https://tailwindcss.com/)
- TypeScript
- Tipografías: Cormorant Garamond (serif editorial) + Inter (sans-serif)
- Deploy sugerido: [Vercel](https://vercel.com/) (cero configuración)

### ¿Por qué este stack?

Componentes reutilizables, muy buen SEO por defecto (metadata, Open Graph),
imágenes optimizadas y despliegue instantáneo en Vercel. Si en el futuro
querés editar el contenido sin tocar código, se integra fácil con un CMS
headless (Sanity, Contentful o similar) — el contenido ya está centralizado
para facilitar ese paso.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

Otros comandos:

```bash
npm run build   # build de producción
npm run start   # servir el build
npm run lint    # linter
```

## Estructura

```
app/
  layout.tsx          # layout raíz: fuentes, header, footer, SEO
  page.tsx            # Home (hero cinematográfico + secciones)
  sobre/              # Sobre Saltus Works (misión, filosofía, pilares, equipo)
  lighthouse/         # The Lighthouse App
  chispa/             # CHISPA (ONG de arte y salud)
  arte/               # Arte y artistas (journal editorial, a futuro)
  contacto/           # Contacto (formulario + redes)
  globals.css         # sistema de diseño (paleta, tipografía, animaciones)
components/
  Header.tsx          # navegación superior (responsive)
  Footer.tsx
  Hero.tsx            # hero cinematográfico del Home
  ContactForm.tsx     # formulario de contacto (client-side)
  Reveal.tsx          # animación de aparición al hacer scroll
  Spark.tsx           # motivo de "chispa" + logo placeholder
  ui.tsx              # primitivos: Section, ProjectCard, CTASection, etc.
lib/
  site.ts             # navegación, datos de contacto y textos compartidos
public/
  favicon.svg
  images/README.md    # cómo agregar la imagen principal del hero
```

## Contenido: lo que conviene personalizar

Todo el texto está en español y escrito como contenido real (no *lorem
ipsum*), listo para refinar sección por sección. Los puntos a completar:

1. **Imagen del hero** → agregá `public/images/hero.jpg` (ver
   `public/images/README.md`).
2. **Datos de contacto y redes** → editá `lib/site.ts` (email, Instagram,
   LinkedIn, YouTube, dominio).
3. **Formulario de contacto** → en `components/ContactForm.tsx` está marcado
   con un `TODO` dónde conectar un servicio real (Formspree, Resend, una API
   route, etc.). Hoy simula el envío para dejar el flujo navegable.
4. **Equipo, historias de impacto y mockups** → reemplazá los marcos
   "placeholder" por fotos y textos reales cuando estén disponibles.
5. **Logos definitivos** → hoy se usa una "chispa" como marca provisional en
   `components/Spark.tsx`.

## Accesibilidad y rendimiento

- Mobile-first y responsive.
- Buen contraste, textos alternativos y navegación por teclado (incluye enlace
  "saltar al contenido").
- Respeta `prefers-reduced-motion` (desactiva animaciones si el sistema lo pide).
- Metadatos SEO y Open Graph configurados en `app/layout.tsx`.
