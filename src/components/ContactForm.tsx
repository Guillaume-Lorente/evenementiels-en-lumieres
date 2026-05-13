"use client";

import { useRef, useState, useTransition } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { sendContactForm } from "@/app/contact/actions";

export default function ContactForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [status, setStatus] = useState<null | {
    type: "success" | "error";
    message: string;
  }>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    const token = recaptchaRef.current?.getValue();

    if (!token) {
      setStatus({
        type: "error",
        message: "Veuillez valider le reCAPTCHA avant d’envoyer.",
      });
      return;
    }

    formData.set("recaptchaToken", token);

    startTransition(async () => {
      const result = await sendContactForm(formData);

      setStatus({
        type: result.success ? "success" : "error",
        message: result.message,
      });

        recaptchaRef.current?.reset();

    });
  }

  return (
    <form className="grid gap-6" action={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm text-foreground/80" htmlFor="lastName">
            Nom *
          </label>
          <input
            id="lastName"
            name="lastName"
            required
            className="h-12 rounded-2xl border border-custom bg-white px-4 outline-none focus:ring-2 focus:ring-[var(--accent)]"
            placeholder="Votre nom"
            autoComplete="family-name"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm text-foreground/80" htmlFor="firstName">
            Prénom *
          </label>
          <input
            id="firstName"
            name="firstName"
            required
            className="h-12 rounded-2xl border border-custom bg-white px-4 outline-none focus:ring-2 focus:ring-[var(--accent)]"
            placeholder="Votre prénom"
            autoComplete="given-name"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm text-foreground/80" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="h-12 rounded-2xl border border-custom bg-white px-4 outline-none focus:ring-2 focus:ring-[var(--accent)]"
            placeholder="vous@exemple.com"
            autoComplete="email"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm text-foreground/80" htmlFor="phone">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            className="h-12 rounded-2xl border border-custom bg-white px-4 outline-none focus:ring-2 focus:ring-[var(--accent)]"
            placeholder="06 00 00 00 00"
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm text-foreground/80" htmlFor="eventType">
            Type d’événement *
          </label>
          <select
            id="eventType"
            name="eventType"
            required
            className="h-12 rounded-2xl border border-custom bg-white px-4 outline-none focus:ring-2 focus:ring-[var(--accent)]"
            defaultValue=""
          >
            <option value="" disabled>
              Sélectionnez un type d’événement
            </option>
            <option value="mariage">Mariage</option>
            <option value="anniversaire">Anniversaire</option>
            <option value="soiree-privee">Soirée privée</option>
            <option value="bapteme">Baptême</option>
            <option value="autre">Autre événement</option>
          </select>
        </div>

        <div className="grid gap-2">
          <label className="text-sm text-foreground/80" htmlFor="guests">
            Nombre d’invités
          </label>
          <input
            id="guests"
            name="guests"
            type="number"
            min="1"
            className="h-12 rounded-2xl border border-custom bg-white px-4 outline-none focus:ring-2 focus:ring-[var(--accent)]"
            placeholder="Ex : 80"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm text-foreground/80" htmlFor="eventDate">
            Date de l’événement
          </label>
          <input
            id="eventDate"
            name="eventDate"
            type="date"
            className="h-12 rounded-2xl border border-custom bg-white px-4 outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm text-foreground/80" htmlFor="eventLocation">
            Lieu de l’événement
          </label>
          <input
            id="eventLocation"
            name="eventLocation"
            className="h-12 rounded-2xl border border-custom bg-white px-4 outline-none focus:ring-2 focus:ring-[var(--accent)]"
            placeholder="Ville, région ou lieu prévu"
            autoComplete="address-level2"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label className="text-sm text-foreground/80" htmlFor="message">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="min-h-45 rounded-2xl border border-custom bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--accent)]"
          placeholder="Votre message…"
        />
      </div>

      <div className="overflow-hidden rounded-2xl">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
        />
      </div>

      {status && (
        <p
          className={`rounded-2xl px-4 py-3 text-sm ${
            status.type === "success"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="mt-1 inline-flex h-12 items-center justify-center rounded-full bg-[var(--highlight)] px-7 text-sm font-medium text-[var(--primary)] shadow-lg transition hover:shadow-xl hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Envoi en cours..." : "Envoyer"}
      </button>
    </form>
  );
}