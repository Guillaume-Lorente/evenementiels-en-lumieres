import Image from "next/image";
import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";

export const metadata = {
  title: "Event Planner – Evénementiels en Lumières",
  description:
    "Organisation d’événements privés : anniversaires, soirées, baptêmes, dîners et moments sur mesure.",
};

const services = [
  "Sélection rigoureuse des prestataires",
  "Gestion du budget",
  "Coordination des interventions",
  "Ambiance selon vos désirs",
  "Décoration",
  "Musique",
];

export default function EventPlannerPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/event-planner.jpg"
          alt="Event planner"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />

        <div className="relative z-10 flex h-full items-end pb-20">
          <div className="w-full px-8 sm:px-16 lg:px-24">
            <div className="max-w-2xl animate-fadeUp">
              <p className="text-sm text-white/70 tracking-[0.2em] uppercase">
                Événements privés
              </p>

              <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
                Event Planner
              </h1>

              <p className="mt-6 text-lg text-white/85">
                Nous organisons vos moments de vie pour en faire des instants
                uniques, élégants et parfaitement orchestrés.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/contact" variant="highlight">
                  Nous contacter
                </ButtonLink>
                <ButtonLink href="/prestations" variant="secondary-light">
                  Retour aux prestations
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="bg-background py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            {/* Intro */}
            <p className="text-sm text-secondary tracking-[0.2em] uppercase">
              Votre événement
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              Des moments sur mesure, pensés pour vous
            </h2>

            <div className="mt-6 h-[2px] w-16 bg-[var(--highlight)] rounded-full" />

            <div className="mt-6 space-y-5 text-lg text-foreground/80">
              <p>
                Vous désirez organiser une soirée privée, un anniversaire à
                thème, un dîner de fête, un baptême ou tout autre événement.
              </p>

              <p>
                Nous sommes à votre écoute pour vous aider à réaliser ces moments
                de joie en toute sérénité.
              </p>

              <p>
                Ces instants que vous voulez inoubliables, personnalisés et à
                votre image, Événementiels en Lumières vous accompagne pour
                mettre en place votre réception dans les moindres détails.
              </p>
            </div>

            {/* Liste services */}
            <div className="mt-12 rounded-3xl border border-custom bg-surface p-8 shadow-sm">
              <ul className="space-y-5">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-4">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--highlight)]" />
                    <span className="text-base text-foreground/85 leading-7">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conclusion */}
            <div className="mt-12 space-y-6 text-lg text-foreground/85">
              <p className="font-medium text-primary">
                Nous allons faire de votre événement un moment extraordinaire.
              </p>

              <p>
                Simplicité et efficacité au service de toutes vos attentions.
              </p>

              <p className="font-medium">
                Contactez-nous pour une première rencontre.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <ButtonLink href="/contact" variant="highlight">
                Prendre contact
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}