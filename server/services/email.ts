import sgMail from "@sendgrid/mail";

if (!process.env.SENDGRID_API_KEY) {
  console.warn("⚠ SENDGRID_API_KEY no está definida");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const EMAIL_FROM = process.env.EMAIL_FROM as string;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL as string;

if (!EMAIL_FROM) {
  throw new Error("EMAIL_FROM no está definido en .env");
}

if (!CONTACT_EMAIL) {
  throw new Error("CONTACT_EMAIL no está definido en .env");
}

/* ======================================================
   📩 1️⃣ Email que TÚ recibes (Lead Notification)
====================================================== */
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
  await sgMail.send({
    to: CONTACT_EMAIL,
    from: EMAIL_FROM,
    subject: `🔥 Nuevo Lead - ${data.service}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
        <h2 style="color:#2563eb;">Nuevo formulario recibido</h2>
        <hr/>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Teléfono:</strong> ${data.phone || "No especificado"}</p>
        <p><strong>Empresa:</strong> ${data.company || "No especificado"}</p>
        <p><strong>Servicio:</strong> ${data.service}</p>
        <p><strong>Presupuesto:</strong> ${data.budget || "No especificado"}</p>
        <p><strong>Timeline:</strong> ${data.timeline || "No especificado"}</p>
        <hr/>
        <p><strong>Descripción:</strong></p>
        <p style="background:#f3f4f6;padding:12px;border-radius:6px;">
          ${data.description}
        </p>
      </div>
    `,
  });
}

/* ======================================================
   🤖 2️⃣ Auto Respuesta Profesional para el Cliente
====================================================== */
export async function sendAutoReply(data: {
  name: string;
  email: string;
  service: string;
  budget?: string;
  timeline?: string;
}) {
  if (!data.email) return;

  await sgMail.send({
    to: data.email,
    from: EMAIL_FROM,
    subject: "Hemos recibido tu solicitud - MKConsult",
    html: `
      <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto;">
        
        <div style="background:#2563eb;padding:20px;color:white;text-align:center;">
          <h2>MKConsult</h2>
          <p>Confirmación de Solicitud</p>
        </div>

        <div style="padding:20px;">
          <h3>Hola ${data.name},</h3>

          <p>Gracias por confiar en nosotros. Hemos recibido tu solicitud correctamente.</p>

          <p><strong>Resumen de tu solicitud:</strong></p>

          <div style="background:#f3f4f6;padding:15px;border-radius:8px;">
            <p><strong>Servicio:</strong> ${data.service}</p>
            <p><strong>Presupuesto:</strong> ${data.budget || "No especificado"}</p>
            <p><strong>Timeline:</strong> ${data.timeline || "Flexible"}</p>
          </div>

          <p style="margin-top:20px;">
            Nuestro equipo revisará la información y te contactaremos en menos de <strong>24 horas</strong>.
          </p>

          <hr style="margin:30px 0;"/>

          <p style="font-size:14px;color:#555;">
            Si tú no enviaste este formulario, haz clic en el botón inferior:
          </p>

          <div style="text-align:center;margin:20px 0;">
            <a href="http://localhost:3000/api/report-mistake?email=${encodeURIComponent(
              data.email
            )}&name=${encodeURIComponent(data.name)}"
              style="background:#dc2626;color:white;padding:10px 18px;
              text-decoration:none;border-radius:6px;font-size:14px;">
              Yo no envié este formulario
            </a>
          </div>

          <p style="font-size:13px;color:#777;">
            Este mensaje fue generado automáticamente.
          </p>
        </div>

        <div style="background:#f9fafb;padding:15px;text-align:center;font-size:12px;color:#888;">
          © ${new Date().getFullYear()} MKConsult - Todos los derechos reservados
        </div>

      </div>
    `,
  });
}

/* ======================================================
   🚨 3️⃣ Reporte de Error / Spam
====================================================== */
export async function reportMistake(email: string, name: string) {
  await sgMail.send({
    to: CONTACT_EMAIL,
    from: EMAIL_FROM,
    subject: "⚠️ Posible error o spam detectado",
    html: `
      <div style="font-family: Arial, sans-serif; max-width:600px;margin:auto;">
        <h2 style="color:#dc2626;">Alerta de posible envío incorrecto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>La persona indicó que NO envió el formulario.</p>
      </div>
    `,
  });
}
  