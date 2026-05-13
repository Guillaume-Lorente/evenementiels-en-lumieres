import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import Gallery from "@/components/Gallery";
import { galleryImages } from "@/data/gallery";

export default function HomePage() {
  return (
    <main>
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/hero2.jpg"
          alt="Ambiance événementielle élégante"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

        <div className="relative z-10 flex h-full items-end pb-50">
          <div className="w-full px-8 sm:px-16 lg:px-24">
            <div className="max-w-2xl animate-fadeUp">
              <p className="text-sm text-white/70 tracking-wide">
                Organisation d’événements
              </p>

              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl text-white">
                Événementiels en Lumières
              </h1>

              <p className="mt-5 text-lg text-white/85">
                Mariages, événements privés et instants sur mesure : une
                organisation élégante, une esthétique soignée et une expérience
                mémorable.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/contact" variant="highlight">
                  Nous contacter
                </ButtonLink>

                <ButtonLink href="/prestations" variant="secondary-light">
                  Nos prestations
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-background pt-18 pb-24 overflow-hidden section-soft-shadow">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[var(--surface)]/30 to-transparent pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center animate-fadeUp">
          <p className="text-sm text-secondary tracking-[0.2em] uppercase">
            Instants d’exception
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">
            Des ambiances qui marquent les esprits
          </h2>

          <div className="mx-auto mt-6 h-0.5 w-16 bg-[var(--highlight)] rounded-full" />

          <p className="mt-6 text-lg text-foreground/80">
            Quelques aperçus d’ambiances, de détails et de moments imaginés pour
            créer des souvenirs uniques.
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-16 max-w-6xl px-6">
          <Gallery images={galleryImages} initialCount={6} step={6} />
        </div>
      </section>
    </main>
  );
}