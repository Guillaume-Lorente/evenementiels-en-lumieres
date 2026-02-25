import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Evénementiels en Lumières",
  description:
    "Organisation d’événements sur mesure : mariages, corporate, soirées privées.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
  <head>
    <script
      src="https://www.google.com/recaptcha/api.js"
      async
      defer
    />
  </head>
  <body>
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  </body>
</html>
  );
}
