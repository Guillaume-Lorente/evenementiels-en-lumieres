import Image from "next/image";
import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";

export const metadata = {
  title: "À propos – Evénementiels en Lumières",
  description:
    "Découvrez l’univers, les valeurs et la vision d’Evénementiels en Lumières.",
};

const values = [
  "Audace",
  "Créativité",
  "Perfection",
  "Plaisir",
  "Partage",
  "Émotion",
  "Respect",
  "Sens du détail",
];

export default function AboutPage() {
  return (
    <main>
      <section className="relative h-[75vh] w-full overflow-hidden">
        <Image
          src="/a-propos2.jpg"
          alt="À propos de Evénementiels en Lumières"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />

        <div className="relative z-10 flex h-full items-end pb-20">
          <div className="w-full px-8 sm:px-16 lg:px-24">
            <div className="max-w-2xl animate-fadeUp">
              <p className="text-sm text-white/70 tracking-[0.2em] uppercase">
                À propos
              </p>

              <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
                Une passion sincère pour l’art de recevoir
              </h1>

              <p className="mt-6 text-lg text-white/85">
                Organisation, émotion, précision et créativité au service de vos
                plus beaux moments.
              </p>

              <div className="mt-8">
                <ButtonLink href="/contact" variant="highlight">
                  Prendre contact
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
              Mon histoire
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
              Une vocation portée par le sens du détail
            </h2>

            <div className="mt-6 h-[2px] w-16 rounded-full bg-[var(--highlight)]" />

            <div className="mt-8 space-y-6 text-lg leading-8 text-foreground/85">
              <p>
                Ce sens de l’organisation d’événements est une deuxième nature
                chez moi.
              </p>

              <p>
                Pointilleuse, à la recherche de la perfection, je prends
                beaucoup de plaisir à imaginer et à réaliser vos projets dans
                les moindres détails.
              </p>

              <p>
                Mes nombreuses expériences sont mes points forts. Programmer des
                rallyes de villages, organiser des concerts, imaginer des
                défilés de mode mémorables, prévoir des repas pour 250 convives
                en extérieur, décorer des églises pour les mariages, sans
                oublier la création de salons et de forums… À l’évidence,
                j’adore mon métier passion.
              </p>

              <p>
                Animée par ces multiples compétences, je suis aussi fleuriste.
                Je mets tout en œuvre afin de donner vie à tous vos rêves, même
                les plus fous.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="rounded-3xl border border-custom bg-surface p-8 shadow-sm">
                <p className="text-sm text-secondary tracking-[0.2em] uppercase">
                  Ma vision
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-primary">
                  Créer ensemble des moments vrais
                </h3>

                <p className="mt-5 text-lg leading-8 text-foreground/85">
                  Audace, créativité, perfection, plaisir, partage, émotion,
                  respect et sens du détail : nous allons créer ensemble de
                  vrais moments de complicité jusqu’au jour J.
                </p>

                <p className="mt-6 text-lg leading-8 text-foreground/85">
                  Mon seul désir est que votre cérémonie soit exactement telle
                  que vous l’avez imaginée, avec beaucoup d’humanité et de joie.
                </p>
              </div>

              <div className="rounded-3xl border border-custom bg-surface p-8 shadow-sm">
                <p className="text-sm text-secondary tracking-[0.2em] uppercase">
                  Valeurs
                </p>

                <ul className="mt-6 space-y-4">
                  {values.map((value) => (
                    <li key={value} className="flex items-center gap-3">
                      <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--highlight)]" />
                      <span className="text-base font-medium text-foreground/85">
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-14 rounded-3xl bg-[var(--primary)] p-8 text-white shadow-sm">
              <p className="text-sm tracking-[0.2em] uppercase text-white/70">
                Un premier échange
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Parlons de votre événement
              </h3>

              <p className="mt-4 max-w-2xl text-white/85">
                Chaque projet mérite une écoute attentive, une vision claire et
                une exécution sur mesure. Je serais ravie d’échanger avec vous.
              </p>

              <div className="mt-8">
                <ButtonLink href="/contact" variant="highlight">
                  Me contacter
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}