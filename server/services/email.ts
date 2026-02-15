import sgMail from "@sendgrid/mail";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function safeText(value?: string, fallback = "No especificado") {
  if (!value || !value.trim()) return fallback;
  return escapeHtml(value.trim());
}

if (!process.env.SENDGRID_API_KEY) {
  console.warn("⚠ SENDGRID_API_KEY no está definida");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const EMAIL_FROM = process.env.EMAIL_FROM as string;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL as string;
const APP_BASE_URL = process.env.APP_BASE_URL || "http://localhost:3000";

if (!EMAIL_FROM) {
  throw new Error("EMAIL_FROM no está definido en .env");
}

if (!CONTACT_EMAIL) {
  throw new Error("CONTACT_EMAIL no está definido en .env");
}

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  timeline?: string;
  description: string;
}) {
  const escapedDescription = safeText(data.description, "Sin mensaje").replace(/\n/g, "<br />");

  await sgMail.send({
    to: CONTACT_EMAIL,
    from: EMAIL_FROM,
    subject: `Nuevo lead MKConsult | ${safeText(data.service)}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 620px; margin: auto; color: #111827;">
        <h2 style="color:#1d4ed8; margin-bottom: 8px;">Nuevo formulario de contacto</h2>
        <p style="color:#4b5563; margin-top: 0;">Se registró una nueva solicitud desde MKConsult.</p>

        <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:16px; margin-top:16px;">
          <p style="margin:0 0 10px;"><strong>Nombre:</strong> ${safeText(data.name)}</p>
          <p style="margin:0 0 10px;"><strong>Email:</strong> ${safeText(data.email)}</p>
          <p style="margin:0 0 10px;"><strong>Empresa:</strong> ${safeText(data.company)}</p>
          <p style="margin:0 0 10px;"><strong>Servicio:</strong> ${safeText(data.service)}</p>
          <p style="margin:0;"><strong>Teléfono:</strong> ${safeText(data.phone)}</p>
        </div>

        <h3 style="margin:20px 0 8px; font-size:16px;">Mensaje</h3>
        <p style="background:#f3f4f6; padding:12px; border-radius:6px; margin:0; line-height:1.5;">
          ${escapedDescription}
        </p>
      </div>
    `,
  });
}

export async function sendAutoReply(data: {
  name: string;
  email: string;
  company?: string;
  service: string;
  description: string;
}) {
  if (!data.email) return;

  const safeName = safeText(data.name, "cliente");
  const escapedDescription = safeText(data.description, "Sin mensaje").replace(/\n/g, "<br />");
  const reportUrl = `${APP_BASE_URL}/api/report-mistake?email=${encodeURIComponent(
    data.email
  )}&name=${encodeURIComponent(data.name)}`;

  await sgMail.send({
    to: data.email,
    from: EMAIL_FROM,
    subject: "Confirmación de solicitud | MKConsult",
    html: `
      <div style="font-family: Arial, sans-serif; max-width:620px; margin:auto; color:#111827;">
        <div style="background:#1d4ed8; padding:18px; color:white; border-radius:8px 8px 0 0; text-align:center;">
          <h2 style="margin:0;">MKConsult</h2>
          <p style="margin:6px 0 0;">Confirmación de solicitud</p>
        </div>

        <div style="border:1px solid #e5e7eb; border-top:0; border-radius:0 0 8px 8px; padding:20px;">
          <p style="margin-top:0;">Hola ${safeName},</p>
          <p>Gracias por contactarnos. Hemos recibido tu solicitud y la revisaremos para proponerte el siguiente paso estratégico.</p>

          <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:16px; margin:16px 0;">
            <p style="margin:0 0 10px;"><strong>Nombre:</strong> ${safeText(data.name)}</p>
            <p style="margin:0 0 10px;"><strong>Email:</strong> ${safeText(data.email)}</p>
            <p style="margin:0 0 10px;"><strong>Empresa:</strong> ${safeText(data.company)}</p>
            <p style="margin:0;"><strong>Servicio:</strong> ${safeText(data.service)}</p>
          </div>

          <h3 style="margin:20px 0 8px; font-size:16px;">Mensaje</h3>
          <p style="background:#f3f4f6; padding:12px; border-radius:6px; margin:0; line-height:1.5;">
            ${escapedDescription}
          </p>

          <p style="margin-top:20px;">Te responderemos en un plazo estimado de <strong>24 horas hábiles</strong>.</p>

          <hr style="margin:24px 0;"/>
          <p style="font-size:14px; color:#4b5563;">Si no realizaste esta solicitud, puedes reportarlo aquí:</p>
          <p><a href="${reportUrl}" style="color:#dc2626; font-weight:600;">Yo no envié este formulario</a></p>
        </div>
      </div>
    `,
  });
}

export async function reportMistake(email: string, name: string) {
  await sgMail.send({
    to: CONTACT_EMAIL,
    from: EMAIL_FROM,
    subject: "⚠️ Posible error o spam detectado",
    html: `
      <div style="font-family: Arial, sans-serif; max-width:600px;margin:auto;">
        <h2 style="color:#dc2626;">Alerta de posible envío incorrecto</h2>
        <p><strong>Nombre:</strong> ${safeText(name)}</p>
        <p><strong>Email:</strong> ${safeText(email)}</p>
        <p>La persona indicó que NO envió el formulario.</p>
      </div>
    `,
  });
}
