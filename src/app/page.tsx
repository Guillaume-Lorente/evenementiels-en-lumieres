import Image from "next/image";
import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import AutoCarousel from "@/components/AutoCarousel";

export default function HomePage() {
  return (
    <main>
      <section className="relative h-screen w-full overflow-hidden">
        {/* Image */}
        <Image
          src="/hero2.jpg"
          alt="Ambiance événementielle élégante"
          fill
          priority
          className="object-cover"
        />

        {/* Dégradé premium (plus élégant que noir brut) */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

        {/* Contenu bas gauche */}
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
                Mariages, événements corporate et soirées privées : une
                organisation sur mesure, une esthétique soignée et une
                expérience mémorable.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/contact" variant="highlight">
                  Demander un devis
                </ButtonLink>

<ButtonLink href="/prestations" variant="secondary-light">
  Nos prestations
</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative pt-18 pb-24 bg-background overflow-hidden section-soft-shadow">
  {/* Background subtil pour profondeur */}
  <div className="absolute inset-0 bg-linear-to-b from-transparent via-(--surface)]30 to-transparent pointer-events-none" />

  <div className="relative z-10 mx-auto max-w-4xl px-6 text-center animate-fadeUp">
    <p className="text-sm text-secondary tracking-[0.2em] uppercase">
      Nos réalisations
    </p>

    <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">
      Des ambiances qui marquent les esprits
    </h2>

    {/* Ligne dorée */}
    <div className="mx-auto mt-6 h-0.5 w-16 bg-(--highlight) rounded-full" />

    <p className="mt-6 text-lg text-foreground/80">
      Chaque événement est pensé comme une expérience immersive,
      où lumière, scénographie et émotion se rencontrent.
    </p>
  </div>

  {/* Fade latéral cinématographique */}
  <div className="relative mt-20">
    <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-linear-to-r from-background to-transparent z-20" />
    <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-linear-to-l from-background to-transparent z-20" />

    <AutoCarousel
      images={[
        "/realisations/01.jpg",
        "/realisations/02.jpg",
        "/realisations/03.jpg",
        "/realisations/04.jpg",
      ]}
    />
  </div>
</section>
    </main>
  );
}