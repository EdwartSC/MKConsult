import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, BookOpen, Zap, TrendingUp, Users, BarChart3 } from "lucide-react";
import { Link } from "wouter";

export default function LandingContentMarketing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
            📝 Content Marketing que Vende
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Contenido Estratégico que Atrae, Educa y Convierte
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Estrategia de content marketing integral que posiciona tu marca como autoridad, atrae leads calificados y genera ventas recurrentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?service=content-marketing">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8">
                Solicitar Estrategia de Contenido
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8">
              Ver Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-y">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">67%</div>
            <p className="text-gray-600">Aumento en leads con content marketing</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">3x</div>
            <p className="text-gray-600">Más engagement que publicidad tradicional</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">200+</div>
            <p className="text-gray-600">Estrategias de contenido implementadas</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestros Servicios de Content Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Blog Estratégico</h3>
                  <p className="text-gray-600">Creamos y gestionamos blogs con 50+ artículos anuales optimizados para SEO y conversión.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Guías y Ebooks</h3>
                  <p className="text-gray-600">Producimos guías descargables y ebooks que generan leads calificados y posicionan autoridad.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Estrategia de Redes Sociales</h3>
                  <p className="text-gray-600">Calendarios editoriales, copywriting y gestión de redes para máxima visibilidad y engagement.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <BarChart3 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Análisis de Rendimiento</h3>
                  <p className="text-gray-600">Reportes mensuales con métricas de engagement, conversiones y ROI del contenido.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Planes de Content Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="p-8 border-2">
              <h3 className="text-2xl font-bold mb-2">Esencial</h3>
              <p className="text-gray-600 mb-6">Para emprendedores</p>
              <div className="text-4xl font-bold mb-6">$349<span className="text-lg text-gray-600">/mes</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600" />
                  <span>4 artículos de blog/mes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600" />
                  <span>Optimización SEO básica</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600" />
                  <span>Calendario editorial</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600" />
                  <span>Reportes mensuales</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Seleccionar Plan
              </Button>
            </Card>

            {/* Professional Plan */}
            <Card className="p-8 border-2 border-orange-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Recomendado
              </div>
              <h3 className="text-2xl font-bold mb-2">Profesional</h3>
              <p className="text-gray-600 mb-6">Para empresas en crecimiento</p>
              <div className="text-4xl font-bold mb-6">$699<span className="text-lg text-gray-600">/mes</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600" />
                  <span>8 artículos de blog/mes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600" />
                  <span>1 ebook trimestral</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600" />
                  <span>Gestión de redes sociales</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600" />
                  <span>Llamadas mensuales</span>
                </li>
              </ul>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                Seleccionar Plan
              </Button>
            </Card>

            {/* Enterprise Plan */}
            <Card className="p-8 border-2">
              <h3 className="text-2xl font-bold mb-2">Empresarial</h3>
              <p className="text-gray-600 mb-6">Para grandes empresas</p>
              <div className="text-4xl font-bold mb-6">$1,399<span className="text-lg text-gray-600">/mes</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600" />
                  <span>16 artículos de blog/mes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600" />
                  <span>2 ebooks mensuales</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600" />
                  <span>Gestión completa de redes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-600" />
                  <span>Soporte dedicado</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Contactar Ventas
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-orange-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Comienza tu Estrategia de Contenido Hoy</h2>
          <p className="text-xl mb-8 opacity-90">
            Crea tu plan editorial en 1 semana. Primeros resultados en 30 días.
          </p>
          <Link href="/contact?service=content-marketing">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8">
              Solicitar Estrategia de Contenido
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
