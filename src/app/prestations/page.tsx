import Image from "next/image";
import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";

export const metadata = {
  title: "Nos prestations – Evénementiels en Lumières",
  description:
    "Découvrez nos prestations événementielles : Wedding Planner et Event Planner, pour des événements sur mesure.",
};

const categories = [
  {
    title: "Wedding Planner",
    description:
      "Un accompagnement complet pour faire de votre cérémonie de mariage une réussite fluide, sereine et magique.",
    href: "/prestations/wedding-planner",
    image: "/prestations-hero2.jpg",
    label: "Mariage",
  },
  {
    title: "Event Planner",
    description:
      "Organisation d’événements privés : anniversaires, soirées, baptêmes et moments sur mesure.",
    href: "/prestations/event-planner",
    image: "/event-planner2.jpg",
    label: "Privé",
  },
];

export default function PrestationsPage() {
  return (
    <main>
      <section className="relative h-[75vh] w-full overflow-hidden">
        <Image
          src="/prestations-hero2.jpg"
          alt="Nos prestations"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />

        <div className="relative z-10 flex h-full items-end pb-20">
          <div className="w-full px-8 sm:px-16 lg:px-24">
            <div className="max-w-2xl animate-fadeUp">
              <p className="text-sm text-white/70 tracking-[0.2em] uppercase">
                Nos prestations
              </p>

              <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
                Des accompagnements pensés pour chaque moment de vie
              </h1>

              <p className="mt-6 text-lg text-white/85">
                Mariage ou événement privé : découvrez les différentes façons
                dont nous pouvons vous accompagner avec élégance et sérénité.
              </p>

              <div className="mt-8">
                <ButtonLink href="/contact" variant="highlight">
                  Nous contacter
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm text-secondary tracking-[0.2em] uppercase">
              Choisir une prestation
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              Un accompagnement adapté à votre événement
            </h2>

            <div className="mx-auto mt-5 h-[2px] w-16 rounded-full bg-[var(--highlight)]" />

            <p className="mt-6 text-lg text-foreground/80">
              Explorez nos univers et découvrez le détail de chaque
              accompagnement.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {categories.map((category) => (
              <a
                key={category.title}
                href={category.href}
                className="group overflow-hidden rounded-3xl border border-custom bg-surface shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <p className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary">
                    {category.label}
                  </p>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-foreground/80">
                    {category.description}
                  </p>

                  <div className="mt-6">
                    <span className="inline-flex items-center rounded-full bg-[var(--highlight)] px-4 py-2 text-sm font-medium text-[var(--primary)] transition">
                      Découvrir
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}