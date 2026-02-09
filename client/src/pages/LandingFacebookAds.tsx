import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap, TrendingUp, Users, BarChart3, Clock } from "lucide-react";
import { Link } from "wouter";

export default function LandingFacebookAds() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            🚀 Aumenta tus Ventas con Facebook Ads
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Campañas de Facebook Ads que Generan Resultados
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Gestión profesional de publicidad en Facebook e Instagram. Aumenta tu ROI, reduce costos y escala tu negocio con estrategias probadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?service=facebook-ads">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Solicitar Consulta Gratuita
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8">
              Ver Casos de Éxito
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-y">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">3.5x</div>
            <p className="text-gray-600">Aumento promedio en ROI</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50%</div>
            <p className="text-gray-600">Reducción en costo por lead</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
            <p className="text-gray-600">Campañas gestionadas exitosamente</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">¿Qué Incluye Nuestro Servicio?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Estrategia Personalizada</h3>
                  <p className="text-gray-600">Análisis profundo de tu negocio, competencia y audiencia para crear una estrategia única.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <BarChart3 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Optimización Continua</h3>
                  <p className="text-gray-600">Monitoreo diario, A/B testing y ajustes para maximizar resultados y reducir gastos.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Segmentación Avanzada</h3>
                  <p className="text-gray-600">Audiencias personalizadas basadas en datos, comportamiento y psicografía para máxima relevancia.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Reportes Detallados</h3>
                  <p className="text-gray-600">Informes semanales con métricas clave, insights y recomendaciones accionables.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Planes de Servicio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="p-8 border-2">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">Para pequeños negocios</p>
              <div className="text-4xl font-bold mb-6">$299<span className="text-lg text-gray-600">/mes</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Hasta 1 campaña activa</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Presupuesto: $500-$2000/mes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Reportes semanales</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Soporte por email</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Seleccionar Plan
              </Button>
            </Card>

            {/* Professional Plan */}
            <Card className="p-8 border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Más Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-gray-600 mb-6">Para negocios en crecimiento</p>
              <div className="text-4xl font-bold mb-6">$599<span className="text-lg text-gray-600">/mes</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Hasta 3 campañas activas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Presupuesto: $2000-$10000/mes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Reportes semanales + análisis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Llamadas mensuales</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Seleccionar Plan
              </Button>
            </Card>

            {/* Enterprise Plan */}
            <Card className="p-8 border-2">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">Para grandes empresas</p>
              <div className="text-4xl font-bold mb-6">$1,299<span className="text-lg text-gray-600">/mes</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Campañas ilimitadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Presupuesto: $10000+/mes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Reportes personalizados</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
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

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3">¿Cuánto tiempo tarda en ver resultados?</h3>
              <p className="text-gray-600">Generalmente, los primeros resultados se ven en 1-2 semanas. Sin embargo, la optimización continua toma 4-8 semanas para máximos resultados.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3">¿Puedo cambiar de plan en cualquier momento?</h3>
              <p className="text-gray-600">Sí, puedes cambiar de plan en cualquier momento. Si cambias a un plan superior, se prorratea el costo. Si cambias a uno inferior, se aplica al siguiente ciclo de facturación.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3">¿Qué incluye el presupuesto publicitario?</h3>
              <p className="text-gray-600">El presupuesto publicitario es separado de nuestros honorarios. Tú estableces el presupuesto que deseas gastar en anuncios, y nosotros lo optimizamos.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3">¿Hay contrato de larga duración?</h3>
              <p className="text-gray-600">No. Puedes cancelar en cualquier momento sin penalización. Ofrecemos un período de prueba de 30 días con garantía de satisfacción.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">¿Listo para Escalar tu Negocio?</h2>
          <p className="text-xl mb-8 opacity-90">
            Comienza hoy con una consulta gratuita de 30 minutos. Sin compromiso, sin tarjeta de crédito requerida.
          </p>
          <Link href="/contact?service=facebook-ads">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              Solicitar Consulta Gratuita
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
