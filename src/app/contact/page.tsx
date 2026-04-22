import Image from "next/image";
import Container from "@/components/Container";

export const metadata = {
  title: "Contact – Evénementiels en Lumières",
  description: "Contactez Evénementiels en Lumières via notre formulaire.",
};

export default function ContactPage() {
  return (
    <main className="bg-transparent">
      <section className="relative w-full overflow-hidden">
        {/* Background image */}
        <div className="relative min-h-[calc(100vh-80px)] w-full">
          <Image
            src="/contact-hero2.jpg"
            alt="Ambiance événementielle"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />

          {/* Center card */}
          <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center py-12">
            <Container>
              <div className="mx-auto w-full max-w-2xl rounded-3xl border border-white/15 bg-white/95 p-8 shadow-2xl backdrop-blur">
                {/* Title + intro */}
                <div className="mb-8 text-center">
                  <p className="text-sm tracking-[0.2em] uppercase text-secondary">
                    Contact
                  </p>

                  <h1 className="mt-3 text-3xl sm:text-4xl font-semibold text-primary">
                    Parlons de votre projet
                  </h1>

                  <div className="mx-auto mt-4 h-0.5 w-14 rounded-full bg-(--highlight)" />

                  <p className="mt-4 text-sm sm:text-base text-foreground/80">
                    Une question, une idée ou une demande particulière ?
                    Laissez-nous un message et nous reviendrons vers vous
                    rapidement.
                  </p>
                </div>

                {/* Form */}
                <form className="grid gap-6" action="#" method="post">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <label
                        className="text-sm text-foreground/80"
                        htmlFor="lastName"
                      >
                        Nom *
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        required
                        className="h-12 rounded-2xl border border-custom bg-white px-4 outline-none focus:ring-2 focus:ring-(--accent)"
                        placeholder="Votre nom"
                        autoComplete="family-name"
                      />
                    </div>

                    <div className="grid gap-2">
                      <label
                        className="text-sm text-foreground/80"
                        htmlFor="firstName"
                      >
                        Prénom *
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        required
                        className="h-12 rounded-2xl border border-custom bg-white px-4 outline-none focus:ring-2 focus:ring-(--accent)"
                        placeholder="Votre prénom"
                        autoComplete="given-name"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <label
                        className="text-sm text-foreground/80"
                        htmlFor="email"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="h-12 rounded-2xl border border-custom bg-white px-4 outline-none focus:ring-2 focus:ring-(--accent)"
                        placeholder="vous@exemple.com"
                        autoComplete="email"
                      />
                    </div>

                    <div className="grid gap-2">
                      <label
                        className="text-sm text-foreground/80"
                        htmlFor="phone"
                      >
                        Téléphone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        className="h-12 rounded-2xl border border-custom bg-white px-4 outline-none focus:ring-2 focus:ring-(--accent)"
                        placeholder="06 00 00 00 00"
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
  {/* Type d'événement */}
  <div className="grid gap-2">
    <label
      className="text-sm text-foreground/80"
      htmlFor="eventType"
    >
      Type d’événement *
    </label>
    <select
      id="eventType"
      name="eventType"
      required
      className="h-12 rounded-2xl border border-custom bg-white px-4 outline-none focus:ring-2 focus:ring-(--accent)"
      defaultValue=""
    >
      <option value="" disabled>
        Sélectionnez un type d'événement
      </option>
      <option value="mariage">Mariage</option>
      <option value="anniversaire">Anniversaire</option>
      <option value="soiree">Soirée privée</option>
      <option value="bapteme">Baptême</option>
      <option value="evenement">Autre événement</option>
    </select>
  </div>

  {/* Nombre d'invités */}
  <div className="grid gap-2">
    <label
      className="text-sm text-foreground/80"
      htmlFor="guests"
    >
      Nombre d’invités
    </label>
    <input
      id="guests"
      name="guests"
      type="number"
      min="1"
      className="h-12 rounded-2xl border border-custom bg-white px-4 outline-none focus:ring-2 focus:ring-(--accent)"
      placeholder="Ex : 80"
    />
  </div>
</div>

<div className="grid gap-5 sm:grid-cols-2">
  {/* Date de l'événement */}
  <div className="grid gap-2">
    <label
      className="text-sm text-foreground/80"
      htmlFor="eventDate"
    >
      Date de l’événement
    </label>
    <input
      id="eventDate"
      name="eventDate"
      type="date"
      className="h-12 rounded-2xl border border-custom bg-white px-4 outline-none focus:ring-2 focus:ring-(--accent)"
    />
  </div>

  {/* Lieu de l'événement */}
  <div className="grid gap-2">
    <label
      className="text-sm text-foreground/80"
      htmlFor="eventLocation"
    >
      Lieu de l’événement
    </label>
    <input
      id="eventLocation"
      name="eventLocation"
      className="h-12 rounded-2xl border border-custom bg-white px-4 outline-none focus:ring-2 focus:ring-(--accent)"
      placeholder="Ville, région ou lieu prévu"
      autoComplete="address-level2"
    />
  </div>
</div>

                  <div className="grid gap-2">
                    <label
                      className="text-sm text-foreground/80"
                      htmlFor="message"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="min-h-45 rounded-2xl border border-custom bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-(--accent)"
                      placeholder="Votre message…"
                    />
                  </div>

                  {/* Anti-spam placeholder (sans reCAPTCHA réel pour éviter l’hydration mismatch) */}
                  <div className="rounded-2xl border border-custom bg-white px-4 py-3 text-sm text-foreground/70">
                    🔒 Protection anti-spam (reCAPTCHA) — sera activée à l’envoi
                  </div>

                  <button
                    type="submit"
                    className="mt-1 inline-flex h-12 items-center justify-center rounded-full bg-(--highlight) px-7 text-sm font-medium text-(--primary) shadow-lg transition hover:shadow-xl hover:opacity-90"
                  >
                    Envoyer
                  </button>
                </form>
              </div>
            </Container>
          </div>
        </div>
      </section>
    </main>
  );
}