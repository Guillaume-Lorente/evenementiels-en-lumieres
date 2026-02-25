import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-(--primary) text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marque */}
          <div>
            <h3 className="font-semibold">
              Événementiels en Lumières
            </h3>
            <p className="mt-3 text-sm text-white/80">
              Organisation d’événements élégants et sur mesure.
              Mariages, corporate et soirées privées.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-sm text-white/60">
          © {new Date().getFullYear()} Événementiels en Lumières — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}