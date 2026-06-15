import Image from "next/image";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlons de votre projet : contactez Événementiels en Lumières via notre formulaire pour organiser votre mariage ou votre événement privé.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Événementiels en Lumières",
    description:
      "Une question, une idée, un projet d’événement ? Contactez Événementiels en Lumières.",
    url: "/contact",
  },
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
                <ContactForm />
              </div>
            </Container>
          </div>
        </div>
      </section>
    </main>
  );
}