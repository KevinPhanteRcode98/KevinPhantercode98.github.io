import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Obligatorio para GitHub Pages
  images: {
    unoptimized: true, // Evita errores con imágenes
  },
};

export default nextConfig;