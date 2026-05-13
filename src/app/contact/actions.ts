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

  console.log("reCAPTCHA verifyData:", verifyData);

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
  html: `
    <div style="margin:0;padding:0;background:#f5f5dc;font-family:Arial,sans-serif;color:#2d3436;">
      <div style="max-width:680px;margin:0 auto;padding:32px 20px;">
        <div style="background:#1a4d2e;border-radius:24px 24px 0 0;padding:32px 28px;text-align:center;">
  <img
    src="https://evenementiels-en-lumieres.vercel.app/logo2.png"
    alt="Événementiels en Lumières"
    width="120"
    style="display:block;margin:0 auto 18px auto;"
  />

  <p style="margin:0;color:#d4af37;font-size:12px;letter-spacing:3px;text-transform:uppercase;">
    Événementiels en Lumières
  </p>

  <h1 style="margin:12px 0 0;color:#ffffff;font-size:26px;font-weight:600;">
    Nouveau message depuis le site
  </h1>
</div>

        <div style="background:#ffffff;border-radius:0 0 24px 24px;padding:32px;border:1px solid #dfe6e9;">
          <h2 style="margin:0 0 20px;color:#1a4d2e;font-size:20px;">
            Informations du contact
          </h2>

          <table style="width:100%;border-collapse:collapse;margin-bottom:28px;">
            <tr>
              <td style="padding:10px 0;color:#4f7942;font-weight:600;">Nom</td>
              <td style="padding:10px 0;text-align:right;">${lastName}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#4f7942;font-weight:600;">Prénom</td>
              <td style="padding:10px 0;text-align:right;">${firstName}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#4f7942;font-weight:600;">Email</td>
              <td style="padding:10px 0;text-align:right;">
                <a href="mailto:${email}" style="color:#1a4d2e;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#4f7942;font-weight:600;">Téléphone</td>
              <td style="padding:10px 0;text-align:right;">${phone || "Non renseigné"}</td>
            </tr>
          </table>

          <h2 style="margin:0 0 20px;color:#1a4d2e;font-size:20px;">
            Détails de l’événement
          </h2>

          <table style="width:100%;border-collapse:collapse;margin-bottom:28px;">
            <tr>
              <td style="padding:10px 0;color:#4f7942;font-weight:600;">Type</td>
              <td style="padding:10px 0;text-align:right;">${eventType}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#4f7942;font-weight:600;">Invités</td>
              <td style="padding:10px 0;text-align:right;">${guests || "Non renseigné"}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#4f7942;font-weight:600;">Date</td>
              <td style="padding:10px 0;text-align:right;">${eventDate || "Non renseignée"}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#4f7942;font-weight:600;">Lieu</td>
              <td style="padding:10px 0;text-align:right;">${eventLocation || "Non renseigné"}</td>
            </tr>
          </table>

          <h2 style="margin:0 0 14px;color:#1a4d2e;font-size:20px;">
            Message
          </h2>

          <div style="background:#f5f5dc;border-left:4px solid #d4af37;border-radius:14px;padding:18px;line-height:1.6;white-space:pre-wrap;">
            ${message}
          </div>

          <div style="margin-top:28px;text-align:center;">
            <a href="mailto:${email}" style="display:inline-block;background:#d4af37;color:#1a4d2e;text-decoration:none;padding:12px 22px;border-radius:999px;font-weight:600;">
              Répondre à ce contact
            </a>
          </div>
        </div>

        <p style="text-align:center;margin:20px 0 0;color:#2d3436;font-size:12px;opacity:.7;">
          Message envoyé depuis le formulaire de contact du site.
        </p>
      </div>
    </div>
  `,
});

  return { success: true, message: "Votre message a bien été envoyé." };
}