import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Search, Zap, TrendingUp, BarChart3, Clock } from "lucide-react";
import { Link } from "wouter";

export default function LandingSEO() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
            📈 Domina Google con SEO Profesional
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Posiciona tu Sitio en la Primera Página de Google
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Estrategia SEO integral que aumenta tráfico orgánico, leads calificados y ventas. Resultados garantizados en 6 meses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?service=seo">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
                Solicitar Auditoría SEO Gratuita
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8">
              Ver Resultados
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-y">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">250%</div>
            <p className="text-gray-600">Aumento promedio en tráfico orgánico</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">1,200+</div>
            <p className="text-gray-600">Palabras clave en primera página</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
            <p className="text-gray-600">Proyectos SEO exitosos</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestra Estrategia SEO Completa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <Search className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Auditoría SEO Completa</h3>
                  <p className="text-gray-600">Análisis profundo de tu sitio, competencia y oportunidades. Identificamos 100+ factores de ranking.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Optimización On-Page</h3>
                  <p className="text-gray-600">Optimizamos títulos, meta descriptions, encabezados, contenido y estructura interna para máxima relevancia.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Estrategia de Backlinks</h3>
                  <p className="text-gray-600">Construcción de enlaces de calidad desde sitios de autoridad. Aumentamos Domain Authority y Trust Flow.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <BarChart3 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Reportes y Análisis</h3>
                  <p className="text-gray-600">Reportes mensuales detallados con rankings, tráfico, conversiones y recomendaciones accionables.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Planes de SEO</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="p-8 border-2">
              <h3 className="text-2xl font-bold mb-2">Local</h3>
              <p className="text-gray-600 mb-6">Para negocios locales</p>
              <div className="text-4xl font-bold mb-6">$399<span className="text-lg text-gray-600">/mes</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Auditoría SEO inicial</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Optimización on-page</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>5 palabras clave objetivo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Reportes mensuales</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Seleccionar Plan
              </Button>
            </Card>

            {/* Professional Plan */}
            <Card className="p-8 border-2 border-green-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Recomendado
              </div>
              <h3 className="text-2xl font-bold mb-2">Regional</h3>
              <p className="text-gray-600 mb-6">Para empresas en crecimiento</p>
              <div className="text-4xl font-bold mb-6">$799<span className="text-lg text-gray-600">/mes</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Auditoría SEO completa</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Estrategia de backlinks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>15 palabras clave objetivo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Llamadas mensuales</span>
                </li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Seleccionar Plan
              </Button>
            </Card>

            {/* Enterprise Plan */}
            <Card className="p-8 border-2">
              <h3 className="text-2xl font-bold mb-2">Nacional</h3>
              <p className="text-gray-600 mb-6">Para grandes empresas</p>
              <div className="text-4xl font-bold mb-6">$1,499<span className="text-lg text-gray-600">/mes</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Estrategia SEO integral</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Palabras clave ilimitadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Content marketing incluido</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Obtén tu Auditoría SEO Gratuita</h2>
          <p className="text-xl mb-8 opacity-90">
            Descubre qué está frenando tu posicionamiento y cómo podemos ayudarte a dominar Google.
          </p>
          <Link href="/contact?service=seo">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8">
              Solicitar Auditoría Gratuita
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
