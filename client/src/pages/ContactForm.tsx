import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";
import { trpc } from "@/lib/trpc";

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

  const contactMutation = trpc.contact.create.useMutation({
    onSuccess: () => {
      toast.success("Solicitud enviada correctamente. Te contactaremos en menos de 24h.");
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
    },
    onError: () => {
      toast.error("Error al enviar la solicitud. Intenta nuevamente.");
    },
  });

  const services = [
    { value: "consultoria", label: "Consultoría Estratégica Tecnológica" },
    { value: "automatizacion", label: "Automatización y Optimización de Procesos" },
    { value: "desarrollo", label: "Desarrollo y Soluciones Tecnológicas" },
    { value: "crecimiento-digital", label: "Estrategia de Crecimiento Digital" },
    { value: "equipos-dedicados", label: "Equipos Tecnológicos Dedicados (Próximamente)" },
    { value: "otro", label: "Necesito asesoría personalizada" },
  ];

  const budgets = [
    { value: "1000-3000", label: "$1,000 - $3,000" },
    { value: "3000-10000", label: "$3,000 - $10,000" },
    { value: "10000-50000", label: "$10,000 - $50,000" },
    { value: "50000+", label: "$50,000+" },
  ];

  const timelines = [
    { value: "inmediato", label: "Inmediato" },
    { value: "1-mes", label: "1 Mes" },
    { value: "2-3-meses", label: "2 - 3 Meses" },
    { value: "flexible", label: "Flexible / A definir" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.service || !formData.description) {
      toast.error("Completa los campos requeridos");
      return;
    }

    if (formData.description.length < 50) {
      toast.error("La descripción debe tener al menos 50 caracteres");
      return;
    }

    contactMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Solicita una Consultoría Estratégica
          </h1>
          <p className="text-xl text-gray-600">
            Cuéntanos sobre tu negocio y diseñaremos una solución tecnológica a medida.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Info lateral */}
          <div className="space-y-6">
            <Card className="p-6 border shadow-sm">
              <h3 className="font-bold text-lg mb-4">Información</h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">contacto@mkconsult.tech</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Atención</p>
                    <p className="text-gray-600">Disponible globalmente</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Modalidad</p>
                    <p className="text-gray-600">Remoto / Híbrido</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-md">

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid md:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Nombre completo *" value={formData.name} onChange={handleChange} required />
                  <Input type="email" name="email" placeholder="Email corporativo *" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleChange} />
                  <Input name="company" placeholder="Empresa / Proyecto" value={formData.company} onChange={handleChange} />
                </div>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full border p-3 rounded-lg"
                >
                  <option value="">Servicio de interés *</option>
                  {services.map(s => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>

                <div className="grid md:grid-cols-2 gap-4">
                  <select name="budget" value={formData.budget} onChange={handleChange} className="w-full border p-3 rounded-lg">
                    <option value="">Rango de inversión estimado</option>
                    {budgets.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
                  </select>

                  <select name="timeline" value={formData.timeline} onChange={handleChange} className="w-full border p-3 rounded-lg">
                    <option value="">Timeline estimado</option>
                    {timelines.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                  </select>
                </div>

                <Textarea
                  name="description"
                  rows={6}
                  placeholder="Describe tu situación actual, objetivos y desafíos (mínimo 50 caracteres) *"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />

                <Button type="submit" disabled={contactMutation.isPending} className="w-full py-3">
                  {contactMutation.isPending ? "Enviando..." : "Solicitar Consultoría"}
                </Button>

              </form>

            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
