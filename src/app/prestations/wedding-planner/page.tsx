import Image from "next/image";
import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";

export const metadata = {
  title: "Wedding Planner – Evénementiels en Lumières",
  description:
    "Accompagnement wedding planner : organisation, coordination, gestion du budget, prestataires et imprévus.",
};

const services = [
  "Sélection du lieu idéal pour vous et visite",
  "Choix des prestataires et présentations : traiteur, décorateur, fleuriste, photographe, DJ, groupes, location de matériel, location de voiture",
  "Négociations des contrats",
  "Gestion du budget",
  "Élaboration d’un calendrier",
  "Suivi du planning",
  "Rendez-vous avec le traiteur et dégustation",
  "Coordination des interventions",
  "Listing des boissons",
  "Assurance",
  "Gestion des imprévus",
  "À tout problème, une solution.",
];

export default function WeddingPlannerPage() {
  return (
    <main>
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/prestations-hero.jpg"
          alt="Wedding planner"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />

        <div className="relative z-10 flex h-full items-end pb-20">
          <div className="w-full px-8 sm:px-16 lg:px-24">
            <div className="max-w-2xl animate-fadeUp">
              <p className="text-sm text-white/70 tracking-[0.2em] uppercase">
                Mariage
              </p>

              <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
                Wedding Planner
              </h1>

              <p className="mt-6 text-lg text-white/85">
                Un accompagnement complet pour faire de votre cérémonie de
                mariage une réussite fluide, sereine et magique.
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

      <section className="bg-background py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-sm text-secondary tracking-[0.2em] uppercase">
              Ce que nous réalisons
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              Pour une cérémonie parfaitement orchestrée
            </h2>

            <div className="mt-6 h-[2px] w-16 rounded-full bg-[var(--highlight)]" />

            <p className="mt-6 text-lg text-foreground/80">
              Ce que nous allons réaliser pour que votre cérémonie de mariage
              soit une parfaite réussite, fluide et magique.
            </p>

            <div className="mt-10 rounded-3xl border border-custom bg-surface p-8 shadow-sm">
              <ul className="space-y-5">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-4">
                    <span className="mt-2 inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[var(--highlight)]" />
                    <span className="text-base leading-7 text-foreground/85">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 rounded-3xl border border-custom bg-surface p-8 shadow-sm">
              <p className="text-lg font-medium text-primary">
                N’hésitez pas à me contacter pour un premier échange.
              </p>

              <p className="mt-6 text-lg text-foreground/85">
                <span className="font-semibold text-primary">Les tarifs :</span>{" "}
                le coût des prestations représente environ{" "}
                <span className="font-semibold text-primary">15 %</span> de votre
                budget total.
              </p>

              <div className="mt-8">
                <ButtonLink href="/contact" variant="highlight">
                  Prendre contact
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}