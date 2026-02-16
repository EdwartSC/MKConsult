import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart3, Cog, Wrench } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      title: "Consultoría Estratégica Tecnológica",
      href: "/services/consultoria-estrategica-tecnologica",
      description:
        "Diagnóstico integral para definir decisiones tecnológicas con impacto real en objetivos de negocio.",
      icon: BarChart3,
      features: [
        "Diagnóstico de procesos actuales",
        "Auditoría tecnológica",
        "Roadmap digital",
        "Optimización de arquitectura",
        "Evaluación de herramientas",
      ],
    },
    {
      title: "Automatización y Optimización de Procesos",
      href: "/services/automatizacion-optimizacion-procesos",
      description:
        "Mejoramos la operación con automatizaciones e integraciones orientadas a eficiencia y control.",
      icon: Cog,
      features: [
        "Automatización de flujos internos",
        "Integraciones API",
        "Reducción de tareas manuales",
        "Implementación de herramientas digitales",
        "Mejora de eficiencia operativa",
      ],
    },
    {
      title: "Desarrollo y Soluciones Técnicas",
      href: "/services/desarrollo-soluciones-tecnicas",
      description:
        "Desarrollo técnico alineado a estrategia de negocio para resolver necesidades concretas con visión a largo plazo.",
      icon: Wrench,
      features: [
        "MVPs estratégicos",
        "Sistemas internos personalizados",
        "Implementación técnica alineada a negocio",
        "Mejora de plataformas existentes",
        "QA y optimización técnica",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide uppercase text-slate-700 mb-4">
                MKConsult · Servicios
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Consultoría tecnológica estratégica para decisiones de alto impacto
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl">
                Acompañamos a empresas y proyectos a diagnosticar, priorizar e implementar
                tecnología con claridad ejecutiva, rigor técnico y foco en resultados de negocio.
              </p>
            </div>

            <div className="w-full lg:w-1/2 h-[350px] bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 lg:ml-auto">
              Imagen estratégica aquí
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Card
                  key={index}
                  className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-slate-100 text-slate-800 mb-5">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>

                  <div className="h-40 bg-gray-100 rounded-xl mb-6 flex items-center justify-center text-gray-400">
                    Imagen del servicio
                  </div>

                  <p className="text-slate-600 mb-5 leading-relaxed">{service.description}</p>

                  <div className="h-px bg-slate-200 mb-5" />

                  <ul className="space-y-2.5 mb-7">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-700">
                        <span className="text-slate-900 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={service.href} className="block">
                    <Button
                      variant="outline"
                      className="w-full border-slate-300 text-slate-900 hover:bg-slate-900 hover:text-white"
                    >
                      Ver Servicio
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>

          <div className="mt-20 rounded-2xl bg-slate-900 text-white p-10 lg:p-14 text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
              ¿Listo para estructurar tu próxima decisión tecnológica?
            </h2>
            <p className="text-slate-200 text-lg max-w-3xl mx-auto mb-9">
              Agenda una sesión estratégica con MKConsult y construyamos una hoja de ruta clara,
              realista y alineada con tus prioridades de negocio.
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Solicitar Consultoría
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
