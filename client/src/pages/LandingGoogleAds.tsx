import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Search, Zap, TrendingUp, Users, BarChart3 } from "lucide-react";
import { Link } from "wouter";

export default function LandingGoogleAds() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
            🔍 Google Ads Profesional
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Google Ads que Genera Ventas Inmediatas
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Campañas de Google Ads optimizadas para máxima conversión. Llega a clientes que buscan exactamente lo que vendes. Resultados comprobados en 7 días.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?service=google-ads">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
                Solicitar Auditoría Google Ads
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
            <div className="text-4xl font-bold text-red-600 mb-2">8x</div>
            <p className="text-gray-600">Aumento en conversiones optimizadas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">60%</div>
            <p className="text-gray-600">Reducción en costo por conversión</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
            <p className="text-gray-600">Campañas gestionadas exitosamente</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Servicios de Google Ads Completos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <Search className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Google Search Ads</h3>
                  <p className="text-gray-600">Anuncios de búsqueda que aparecen cuando tus clientes buscan exactamente lo que vendes.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Google Display Ads</h3>
                  <p className="text-gray-600">Anuncios visuales en millones de sitios web para retargeting y branding.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Google Shopping</h3>
                  <p className="text-gray-600">Campañas de e-commerce que muestran tus productos directamente en resultados de búsqueda.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <BarChart3 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">YouTube Ads</h3>
                  <p className="text-gray-600">Anuncios en video para alcanzar a tu audiencia mientras ven contenido relevante.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Planes de Google Ads</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="p-8 border-2">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">Para pequeños negocios</p>
              <div className="text-4xl font-bold mb-6">$399<span className="text-lg text-gray-600">/mes</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                  <span>1 campaña de búsqueda</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                  <span>Presupuesto: $500-$2000/mes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                  <span>Optimización básica</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                  <span>Reportes semanales</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Seleccionar Plan
              </Button>
            </Card>

            {/* Professional Plan */}
            <Card className="p-8 border-2 border-red-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Más Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-gray-600 mb-6">Para negocios en crecimiento</p>
              <div className="text-4xl font-bold mb-6">$699<span className="text-lg text-gray-600">/mes</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                  <span>3 campañas múltiples</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                  <span>Presupuesto: $2000-$10000/mes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                  <span>A/B testing continuo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                  <span>Llamadas mensuales</span>
                </li>
              </ul>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Seleccionar Plan
              </Button>
            </Card>

            {/* Enterprise Plan */}
            <Card className="p-8 border-2">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">Para grandes empresas</p>
              <div className="text-4xl font-bold mb-6">$1,499<span className="text-lg text-gray-600">/mes</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                  <span>Campañas ilimitadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                  <span>Presupuesto: $10000+/mes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                  <span>Optimización avanzada</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                  <span>Soporte dedicado 24/7</span>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Obtén tu Auditoría Google Ads Gratuita</h2>
          <p className="text-xl mb-8 opacity-90">
            Descubre cuánto dinero estás perdiendo en Google Ads y cómo optimizar tus campañas.
          </p>
          <Link href="/contact?service=google-ads">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8">
              Solicitar Auditoría Gratuita
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
