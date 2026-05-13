"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactForm(formData: FormData) {
  const recaptchaToken = formData.get("recaptchaToken");

  if (!recaptchaToken) {
    return { success: false, message: "Veuillez valider le reCAPTCHA." };
  }

  const verifyRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY ?? "",
        response: String(recaptchaToken),
      }),
    }
  );

  const verifyData = await verifyRes.json();

  if (!verifyData.success) {
    return { success: false, message: "Validation reCAPTCHA échouée." };
  }

  const lastName = formData.get("lastName");
  const firstName = formData.get("firstName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const eventType = formData.get("eventType");
  const guests = formData.get("guests");
  const eventDate = formData.get("eventDate");
  const eventLocation = formData.get("eventLocation");
  const message = formData.get("message");

  await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "",
    to: process.env.CONTACT_TO_EMAIL ?? "",
    subject: "Nouveau message depuis le site",
    replyTo: String(email),
    text: `
Nom : ${lastName}
Prénom : ${firstName}
Email : ${email}
Téléphone : ${phone || "Non renseigné"}

Type d’événement : ${eventType}
Nombre d’invités : ${guests || "Non renseigné"}
Date : ${eventDate || "Non renseignée"}
Lieu : ${eventLocation || "Non renseigné"}

Message :
${message}
    `,
  });

  return { success: true, message: "Votre message a bien été envoyé." };
}