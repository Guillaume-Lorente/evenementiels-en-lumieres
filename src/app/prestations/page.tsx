import Container from "@/components/Container";
import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";

export const metadata = {
  title: "Nos prestations – Evénementiels en Lumières",
  description:
    "Mariages, corporate, soirées privées : découvrez nos prestations événementielles sur mesure, de la conception à la coordination.",
};

const prestations = [
  {
    title: "Mariages",
    desc: "Une organisation fluide et une scénographie élégante, pour profiter pleinement de votre journée.",
    points: ["Coordination", "Planning & timing", "Prestataires", "Décoration & ambiance"],
  },
  {
    title: "Événements corporate",
    desc: "Séminaires, lancements, soirées d’entreprise : une exécution maîtrisée et une image irréprochable.",
    points: ["Logistique", "Scénographie", "Animation", "Expérience invités"],
  },
  {
    title: "Soirées privées",
    desc: "Anniversaires, dîners, soirées à thème : une expérience sur mesure, du concept à la réalisation.",
    points: ["Concept", "Décor", "Ambiance", "Coordination"],
  },
  {
    title: "Scénographie & ambiance",
    desc: "Direction artistique, lumière, mise en scène : une identité visuelle cohérente, raffinée, mémorable.",
    points: ["DA", "Lumière", "Décoration", "Détails"],
  },
  {
    title: "Coordination jour J",
    desc: "Vous vivez le moment, nous gérons le rythme, les prestataires et les imprévus.",
    points: ["Gestion timing", "Coordination", "Imprévus", "Sérénité"],
  },
  {
    title: "Conseil & conception",
    desc: "Un regard expert pour cadrer le projet : budget, planning, concept, et recommandations.",
    points: ["Brief", "Budget", "Rétroplanning", "Recommandations"],
  },
];

const method = [
  { k: "01", t: "Échange", d: "On comprend votre besoin, votre style, vos contraintes et votre budget." },
  { k: "02", t: "Proposition", d: "Un plan clair : concept, déroulé, options, prestataires et timing." },
  { k: "03", t: "Préparation", d: "Coordination, confirmations, ajustements, rétroplanning et checklists." },
  { k: "04", t: "Jour J", d: "Pilotage sur place : déroulé, prestataires, rythme et imprévus." },
];

const inclus = [
  "Un interlocuteur dédié",
  "Une organisation claire (planning + rétroplanning)",
  "Une coordination fluide des prestataires",
  "Une attention aux détails et à l’esthétique",
  "Une présence et une gestion sur place le jour J (si inclus)",
];

export default function PrestationsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden">
  {/* Image */}
  <Image
    src="/prestations-hero-2.jpg"
    alt="Organisation événementielle élégante"
    fill
    priority
    className="object-cover"
  />

  {/* Dégradé premium */}
  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/40 to-transparent" />

  {/* Contenu bas gauche */}
  <div className="relative z-10 flex h-full items-end pb-20">
    <div className="w-full px-8 sm:px-16 lg:px-24">
      <div className="max-w-2xl animate-fadeUp">
        <p className="text-sm text-white/70 tracking-[0.2em] uppercase">
          Nos prestations
        </p>

        <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-white">
          Une organisation sur mesure,
          <br /> une esthétique irréprochable
        </h1>

        <p className="mt-6 text-lg text-white/85">
          Mariages, corporate, soirées privées : nous concevons
          des événements élégants, fluides et mémorables.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Prestations grid */}
      <section className="border-t border-custom bg-background">
        <Container className="py-18">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
            Ce que nous proposons
          </h2>
          <p className="mt-3 max-w-2xl text-foreground/80">
            Choisissez l’accompagnement qui vous correspond. Chaque projet est
            adapté à vos besoins.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {prestations.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl border border-custom bg-surface p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-primary">{p.title}</h3>
                <p className="mt-3 text-sm text-foreground/80">{p.desc}</p>

                <ul className="mt-5 space-y-2 text-sm">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-(--highlight)" />
                      <span className="text-foreground/80">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Méthode */}
      <section className="border-t border-custom bg-background">
        <Container className="py-18">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
            Notre méthode
          </h2>
          <p className="mt-3 max-w-2xl text-foreground/80">
            Un process simple et rassurant, pour une exécution impeccable.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {method.map((m) => (
              <div
                key={m.k}
                className="rounded-3xl border border-custom bg-surface p-6"
              >
                <p className="text-sm text-secondary tracking-[0.2em]">
                  {m.k}
                </p>
                <h3 className="mt-3 font-semibold text-primary">{m.t}</h3>
                <p className="mt-3 text-sm text-foreground/80">{m.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Inclus + CTA */}
      <section className="border-t border-custom bg-background">
        <Container className="py-18">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
                Ce qui est inclus
              </h2>
              <p className="mt-3 max-w-2xl text-foreground/80">
                Des bases solides pour avancer sereinement, avec une attention
                particulière aux détails.
              </p>

              <ul className="mt-8 space-y-3">
                {inclus.map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-(--highlight)" />
                    <span className="text-foreground/80">{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-custom bg-(--primary) p-7 text-white">
              <p className="text-sm text-white/70 tracking-[0.2em] uppercase">
                Prêt·e à avancer ?
              </p>
              <h3 className="mt-3 text-xl font-semibold">
                Parlez-nous de votre événement
              </h3>
              <p className="mt-3 text-sm text-white/80">
                Date, lieu, type d’événement, nombre d’invités : on revient vers
                vous rapidement.
              </p>

              <div className="mt-6">
                <ButtonLink href="/contact" variant="highlight">
                  Contactez-nous !
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}