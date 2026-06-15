import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Wedding & Event Planner`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "wedding planner",
    "event planner",
    "organisation de mariage",
    "organisation d’événements",
    "décoration mariage",
    "soirée privée",
    "réception sur mesure",
    "Événementiels en Lumières",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Wedding & Event Planner`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/hero2.jpg",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Wedding & Event Planner`,
    description: SITE_DESCRIPTION,
    images: ["/hero2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: absoluteUrl("/hero2.jpg"),
  logo: absoluteUrl("/logo2.png"),
  slogan: "L’art de sublimer vos événements",
  knowsLanguage: "fr-FR",
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Wedding Planner",
        description:
          "Organisation et coordination complète de mariage : lieu, prestataires, budget, planning et gestion des imprévus.",
        url: absoluteUrl("/prestations/wedding-planner"),
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Event Planner",
        description:
          "Organisation d’événements privés : anniversaires, soirées, baptêmes, dîners et moments sur mesure.",
        url: absoluteUrl("/prestations/event-planner"),
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="min-h-dvh flex flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
