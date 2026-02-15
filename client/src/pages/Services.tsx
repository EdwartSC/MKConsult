import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Services() {

  const services = [
    {
      title: "Consultoría Estratégica Tecnológica",
      description: "Diagnóstico y planificación tecnológica para modernizar y escalar tu negocio.",
      features: [
        "Auditoría de procesos",
        "Roadmap tecnológico",
        "Optimización de sistemas",
        "Plan de transformación digital",
      ],
    },
    {
      title: "Automatización y Optimización de Procesos",
      description: "Implementamos sistemas que reducen tareas manuales y aumentan eficiencia.",
      features: [
        "Implementación de CRM",
        "Automatización de workflows",
        "Integraciones API",
        "Chatbots y sistemas automatizados",
      ],
    },
    {
      title: "Desarrollo y Soluciones Tecnológicas",
      description: "Construcción de herramientas digitales a medida para tu negocio.",
      features: [
        "Sistemas internos",
        "MVPs",
        "Plataformas web",
        "Integraciones personalizadas",
      ],
    },
    {
      title: "Estrategia de Crecimiento Digital",
      description: "Diseñamos sistemas digitales sostenibles para escalar tu negocio.",
      features: [
        "Estrategia digital integral",
        "Optimización de conversión",
        "Automatización de marketing",
        "Análisis de métricas",
      ],
    },
    {
      title: "Equipos Tecnológicos Dedicados",
      description: "Modelo de software factory (Próximamente).",
      features: [
        "Desarrolladores dedicados",
        "QA y Testing",
        "DevOps",
        "Gestión y supervisión completa",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="bg-blue-700 text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">
            Servicios Estratégicos
          </h1>
          <p className="text-xl text-blue-100">
            Transformamos procesos, optimizamos sistemas y escalamos negocios con tecnología.
          </p>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <Card key={index} className="p-8 shadow-sm hover:shadow-lg transition">

              <h3 className="text-xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <span className="text-blue-600 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className="w-full">
                Solicitar Información
              </Button>

            </Card>
          ))}

        </div>

        <div className="mt-20 bg-blue-700 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para optimizar tu negocio?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Agenda una consultoría estratégica y diseñemos tu plan de crecimiento.
          </p>
          <Button size="lg" variant="secondary">
            Solicitar Consultoría
          </Button>
        </div>

      </div>
    </div>
  );
}
