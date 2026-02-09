import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    description: "",
    timeline: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    { value: "facebook-ads", label: "Gestión de Facebook Ads" },
    { value: "seo", label: "SEO Profesional" },
    { value: "email-marketing", label: "Email Marketing" },
    { value: "redes-sociales", label: "Gestión de Redes Sociales" },
    { value: "crm", label: "Implementación de CRM" },
    { value: "landing-pages", label: "Diseño de Landing Pages" },
    { value: "copywriting", label: "Copywriting Profesional" },
    { value: "influencer", label: "Influencer Marketing" },
    { value: "retargeting", label: "Retargeting" },
    { value: "chatbots", label: "Implementación de Chatbots" },
    { value: "otro", label: "Otro Servicio" },
  ];

  const budgets = [
    { value: "500-1000", label: "$500 - $1,000" },
    { value: "1000-5000", label: "$1,000 - $5,000" },
    { value: "5000-10000", label: "$5,000 - $10,000" },
    { value: "10000+", label: "$10,000+" },
  ];

  const timelines = [
    { value: "inmediato", label: "Inmediato" },
    { value: "1-2-semanas", label: "1-2 Semanas" },
    { value: "1-mes", label: "1 Mes" },
    { value: "flexible", label: "Flexible" },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validar que todos los campos requeridos estén completos
      if (
        !formData.name ||
        !formData.email ||
        !formData.service ||
        !formData.description
      ) {
        toast.error("Por favor completa todos los campos requeridos");
        setIsSubmitting(false);
        return;
      }

      // Aquí iría la integración con tu servicio de email
      // Por ahora, simulamos el envío
      const emailBody = `
Nuevo Solicitud de Servicio - MKConsult

INFORMACIÓN DE CONTACTO:
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone || "No proporcionado"}
Empresa: ${formData.company || "No proporcionada"}

DETALLES DEL SERVICIO:
Servicio Solicitado: ${services.find((s) => s.value === formData.service)?.label}
Presupuesto: ${formData.budget || "No especificado"}
Timeline: ${formData.timeline || "No especificado"}

DESCRIPCIÓN DEL PROYECTO:
${formData.description}

---
Este correo fue enviado desde el formulario de contacto de MKConsult
      `;

      console.log("Email a enviar:", emailBody);

      // Mostrar éxito
      toast.success(
        "¡Solicitud enviada exitosamente! Nos contactaremos pronto."
      );

      // Limpiar formulario
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        description: "",
        timeline: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al enviar la solicitud. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Solicita tu Consultoría Gratuita</h1>
          <p className="text-xl text-gray-600">
            Completa el formulario a continuación y nos pondremos en contacto contigo en 24 horas
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 bg-blue-50 border-blue-200">
              <h3 className="font-bold text-lg mb-4">Información de Contacto</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@mkconsult.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Ubicación</p>
                    <p className="text-gray-600">Disponible Globalmente</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-green-50 border-green-200">
              <h3 className="font-bold text-lg mb-4">Tiempo de Respuesta</h3>
              <p className="text-gray-700 mb-2">
                Respondemos a todas las solicitudes dentro de <strong>24 horas</strong>.
              </p>
              <p className="text-sm text-gray-600">
                Si es urgente, por favor llama directamente al número de teléfono.
              </p>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Nombre Completo <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Row 2: Phone and Company */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Teléfono
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Empresa
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Row 3: Service Selection */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Servicio de Interés <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 4: Budget and Timeline */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Presupuesto Aproximado
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Selecciona un rango</option>
                      {budgets.map((budget) => (
                        <option key={budget.value} value={budget.value}>
                          {budget.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Timeline del Proyecto
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Selecciona un timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline.value} value={timeline.value}>
                          {timeline.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Descripción del Proyecto <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto, tus objetivos y lo que esperas lograr..."
                    rows={6}
                    required
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Mínimo 50 caracteres. Sé lo más específico posible.
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Al enviar este formulario, aceptas que nos contactemos por email o teléfono.
                </p>
              </form>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-8">Preguntas Frecuentes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-2">¿Cuál es el costo de una consultoría?</h3>
              <p className="text-gray-700">
                La consultoría inicial es completamente gratuita. Después de evaluar tu proyecto,
                te proporcionaremos una propuesta personalizada con precios.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">¿Cuánto tiempo toma el primer contacto?</h3>
              <p className="text-gray-700">
                Nos ponemos en contacto dentro de 24 horas. Si es urgente, puedes llamar directamente.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">¿Trabajan con empresas pequeñas?</h3>
              <p className="text-gray-700">
                Sí, trabajamos con empresas de todos los tamaños, desde startups hasta corporaciones.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">¿Ofrecen soporte continuo?</h3>
              <p className="text-gray-700">
                Sí, ofrecemos planes de soporte mensual para asegurar el éxito continuo de tu proyecto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
