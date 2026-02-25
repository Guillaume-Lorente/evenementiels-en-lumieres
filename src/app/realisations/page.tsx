import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import LightboxGallery, { type GalleryItem } from "@/components/LightboxGallery";

export const metadata = {
  title: "Réalisations – Evénementiels en Lumières",
  description:
    "Galerie photo de nos événements : ambiances, décors et moments forts.",
};

// ✅ Pour l’instant : démo statique.
// Plus tard : on remplacera ce tableau par Airtable.
const items: GalleryItem[] = [
  { src: "/realisations/01.jpg", alt: "Ambiance lumineuse – soirée" },
  { src: "/realisations/02.jpg", alt: "Table élégante – dîner" },
  { src: "/realisations/03.jpg", alt: "Décoration florale – réception" },
  { src: "/realisations/04.jpg", alt: "Mise en scène – événement corporate" },
  { src: "/realisations/05.jpg", alt: "Espace cocktail – ambiance" },
  { src: "/realisations/06.jpg", alt: "Salle – scénographie" },
];

export default function RealisationsPage() {
  return (
    <main>
      <section className="py-16">
        <Container>
          <p className="text-sm opacity-70">Réalisations</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Quelques instants en images
          </h1>
          <p className="mt-5 max-w-2xl text-lg opacity-80">
            Une sélection de nos ambiances et scénographies.
          </p>

          <div className="mt-8">
            <ButtonLink href="/contact" variant="primary">
              Demander un devis
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-12 border-t">
        <Container>
          {/* Si tu n’as pas encore les images dans /public/realisations, on affiche des placeholders */}
          {items.length === 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl border bg-black/5"
                  aria-hidden
                />
              ))}
            </div>
          ) : (
            <LightboxGallery items={items} />
          )}

          <p className="mt-6 text-sm opacity-70">
            Astuce : ajoute tes images dans{" "}
            <code className="rounded bg-black/5 px-1 py-0.5">
              public/realisations/
            </code>{" "}
            avec les noms <code className="rounded bg-black/5 px-1 py-0.5">01.jpg</code>,{" "}
            <code className="rounded bg-black/5 px-1 py-0.5">02.jpg</code>, etc.
          </p>
        </Container>
      </section>
    </main>
  );
}
