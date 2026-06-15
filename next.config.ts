import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Fixe la racine du projet (un autre package-lock.json existe plus haut dans
  // l'arborescence ; sans cela Next.js peut choisir le mauvais dossier racine).
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
