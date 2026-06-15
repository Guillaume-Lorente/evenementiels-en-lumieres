const RAW_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.evenementiels-en-lumieres.fr";

export const SITE_URL = RAW_SITE_URL.replace(/\/$/, "");

export const SITE_NAME = "Événementiels en Lumières";

export const SITE_DESCRIPTION =
  "Wedding planner et event planner : organisation d’événements sur mesure — mariages, soirées privées, anniversaires et réceptions. Une organisation élégante et un sens du détail au service de vos plus beaux moments.";

export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
