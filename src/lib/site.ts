// Configuration centrale du site.
// 👉 Pour changer le domaine, modifie NEXT_PUBLIC_SITE_URL dans .env.local
//    ou la valeur par défaut ci-dessous (une seule fois, pour tout le site).

const RAW_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.evenementiels-en-lumieres.fr";

// On enlève un éventuel "/" final pour éviter les doubles slashs dans les URLs.
export const SITE_URL = RAW_SITE_URL.replace(/\/$/, "");

export const SITE_NAME = "Événementiels en Lumières";

export const SITE_DESCRIPTION =
  "Wedding planner et event planner : organisation d’événements sur mesure — mariages, soirées privées, anniversaires et réceptions. Une organisation élégante et un sens du détail au service de vos plus beaux moments.";

// Construit une URL absolue à partir d'un chemin relatif (ex: "/contact").
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
