import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  ArrowRight,
  BookOpen,
  Zap,
  TrendingUp,
  Award,
  Rocket,
} from "lucide-react";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const { user, isAuthenticated } = useAuth();

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Estrategias Probadas",
      description:
        "Acceso a estrategias de marketing digital que han generado resultados reales para PYMES",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Contenido Detallado",
      description:
        "Más de 60 guías completas, comparativas y tutoriales paso a paso",
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Implementación Rápida",
      description: "Aprende a implementar estrategias en horas, no en meses",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Expertos en Marketing",
      description:
        "Contenido creado por profesionales con años de experiencia",
    },
  ];

  const stats = [
    { number: "60+", label: "Artículos Publicados" },
    { number: "15K+", label: "Lectores Mensuales" },
    { number: "6", label: "Servicios Profesionales" },
    { number: "100%", label: "Satisfacción Garantizada" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Escala tu Negocio con{" "}
              <span className="text-blue-600">Marketing Digital</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Guías completas, estrategias probadas y servicios profesionales
              para ayudarte a crecer digitalmente.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/blog">
                <Button size="lg" className="gap-2 bg-blue-600 text-white">
                  Explorar Blog <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/servicios">
                <Button size="lg" variant="outline">
                  Ver Servicios
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-blue-100 rounded-lg p-12 flex items-center justify-center h-96">
            <Rocket className="w-24 h-24 text-blue-600" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 border rounded-lg">
              {f.icon}
              <h3 className="font-bold mt-4">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />
    </>
  );
}
