export default function SiteFooter() {
  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12 text-center">
        {/* Nom */}
        <h3 className="text-lg font-medium tracking-wide">
          Événementiels en Lumières
        </h3>

        {/* Ligne fine */}
        <div className="mx-auto mt-4 h-px w-12 bg-[var(--highlight)]/70" />

        {/* Signature */}
        <p className="mt-4 text-xs text-white/70">
          L’art de sublimer vos événements
        </p>

        {/* Copyright */}
        <p className="mt-6 text-xs text-white/50">
          © {new Date().getFullYear()} — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}