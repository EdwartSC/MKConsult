import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/const";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Zap, TrendingUp, CheckCircle, Users, Award, Rocket } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const { user, isAuthenticated } = useAuth();

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Estrategias Probadas",
      description: "Acceso a estrategias de marketing digital que han generado resultados reales para PYMES",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Contenido Detallado",
      description: "Más de 60 guías completas, comparativas y tutoriales paso a paso",
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Implementación Rápida",
      description: "Aprende a implementar estrategias en horas, no en meses",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Expertos en Marketing",
      description: "Contenido creado por profesionales con años de experiencia",
    },
  ];

  const stats = [
    { number: "60+", label: "Artículos Publicados" },
    { number: "15K+", label: "Lectores Mensuales" },
    { number: "6", label: "Servicios Profesionales" },
    { number: "100%", label: "Satisfacción Garantizada" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Escala tu Negocio con <span className="text-blue-600">Marketing Digital</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Guías completas, estrategias probadas y servicios profesionales para ayudarte a crecer digitalmente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/blog-mejorado">
                  <a>
                    <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                      Explorar Blog <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </Link>
                <Link href="/servicios">
                  <a>
                    <Button size="lg" variant="outline" className="gap-2">
                      Ver Servicios <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-12 flex items-center justify-center h-96">
              <div className="text-center">
                <Rocket className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-600 font-semibold">Listo para Crecer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Por qué MKConsult?</h2>
            <p className="text-xl text-gray-600">
              Tenemos todo lo que necesitas para dominar el marketing digital
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Artículos Destacados</h2>
            <p className="text-xl text-gray-600">
              Aprende de nuestras guías más populares
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Guía Completa: ActiveCampaign para Principiantes",
                category: "Email Marketing",
                readTime: "12 min",
              },
              {
                title: "HubSpot vs. ActiveCampaign: Comparativa Detallada 2025",
                category: "CRM",
                readTime: "15 min",
              },
              {
                title: "Semrush vs. Ahrefs: ¿Cuál es la Mejor Herramienta SEO?",
                category: "SEO",
                readTime: "14 min",
              },
            ].map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition"
              >
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-sm text-gray-500">{article.readTime} de lectura</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog-mejorado">
              <Button size="lg" className="gap-2">
                Ver Todos los Artículos <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Servicios Profesionales</h2>
            <p className="text-xl text-gray-600">
              Déjanos ayudarte a implementar las estrategias
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Facebook Ads", href: "/services/facebook-ads", icon: "📱" },
              { name: "SEO", href: "/services/seo", icon: "🔍" },
              { name: "Email Marketing", href: "/services/email-marketing", icon: "📧" },
              { name: "Content Marketing", href: "/services/content-marketing", icon: "📝" },
              { name: "Google Ads", href: "/services/google-ads", icon: "🎯" },
              { name: "Estrategia Digital", href: "/services/digital-strategy", icon: "🚀" },
            ].map((service, index) => (
              <Link key={index} href={service.href}>
                <div className="p-8 bg-white rounded-lg border border-gray-200 hover:shadow-lg hover:border-blue-600 transition text-center cursor-pointer">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para Escalar tu Negocio?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Únete a 500+ empresas que ya están transformando su marketing digital con MKConsult
          </p>
          <Link href="/contacto">
            <a>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 gap-2">
                Solicitar Consulta Gratuita <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
