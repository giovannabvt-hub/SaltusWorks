/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  // Exportación estática para GitHub Pages
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // En GitHub Pages el sitio vive en /<repo>; en local o Vercel queda en la raíz
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
