import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

export default function Services() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    {
      title: "Gestión de Facebook Ads",
      description: "Creamos y optimizamos campañas de publicidad en Facebook para maximizar tu ROI",
      price: "Desde $500/mes",
      features: [
        "Estrategia personalizada",
        "Creación de anuncios",
        "Optimización diaria",
        "Reportes semanales",
      ],
    },
    {
      title: "SEO Profesional",
      description: "Posiciona tu sitio en Google con nuestra estrategia SEO integral",
      price: "Desde $800/mes",
      features: [
        "Audit SEO completo",
        "Optimización on-page",
        "Estrategia de backlinks",
        "Monitoreo mensual",
      ],
    },
    {
      title: "Email Marketing",
      description: "Crea campañas de email que conviertan y generen ingresos",
      price: "Desde $400/mes",
      features: [
        "Estrategia de email",
        "Diseño de templates",
        "Automatización",
        "Análisis de resultados",
      ],
    },
    {
      title: "Gestión de Redes Sociales",
      description: "Crece tu presencia en redes sociales con contenido estratégico",
      price: "Desde $600/mes",
      features: [
        "Estrategia de contenido",
        "Creación de posts",
        "Community management",
        "Reportes mensuales",
      ],
    },
    {
      title: "Implementación de CRM",
      description: "Configura e implementa el CRM perfecto para tu negocio",
      price: "Desde $1500",
      features: [
        "Consultoría",
        "Configuración",
        "Integración",
        "Capacitación del equipo",
      ],
    },
    {
      title: "Diseño de Landing Pages",
      description: "Landing pages optimizadas que convierten visitantes en clientes",
      price: "Desde $800",
      features: [
        "Diseño profesional",
        "Optimización de conversión",
        "Pruebas A/B",
        "Integración con CRM",
      ],
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      // Aquí iría la llamada a tu API para enviar el formulario
      // Por ahora, solo mostramos un toast de éxito
      toast.success("¡Solicitud enviada! Nos contactaremos pronto");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      toast.error("Error al enviar la solicitud. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Servicios Profesionales</h1>
          <p className="text-xl text-blue-100">
            Potencia tu negocio con nuestros servicios de marketing digital
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-2xl font-bold text-blue-600 mb-4">{service.price}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant="outline">
                Solicitar Información
              </Button>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Solicita una Consultoría Gratuita</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Teléfono</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Servicio de Interés</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Mensaje</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu negocio y tus objetivos..."
                rows={5}
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
            >
              {isSubmitting ? "Enviando..." : "Solicitar Consultoría Gratuita"}
            </Button>
          </form>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Transformar tu Negocio?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Nuestros expertos están listos para ayudarte a alcanzar tus objetivos
          </p>
          <Button size="lg" variant="secondary">
            Agendar Llamada Gratuita
          </Button>
        </div>
      </div>
    </div>
  );
}
