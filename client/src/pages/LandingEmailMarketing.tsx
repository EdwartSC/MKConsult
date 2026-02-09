import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Mail, Zap, TrendingUp, Users, BarChart3 } from "lucide-react";
import { Link } from "wouter";

export default function LandingEmailMarketing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
            💌 Email Marketing que Convierte
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Automatiza tu Email Marketing y Multiplica Ingresos
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Estrategia de email marketing automatizada que genera leads, retiene clientes y aumenta ventas 24/7. ROI promedio de 4200%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?service=email-marketing">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                Solicitar Estrategia Personalizada
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
            <div className="text-4xl font-bold text-purple-600 mb-2">4,200%</div>
            <p className="text-gray-600">ROI promedio en email marketing</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">35%</div>
            <p className="text-gray-600">Tasa de apertura promedio (vs 21% industria)</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">180+</div>
            <p className="text-gray-600">Estrategias implementadas</p>
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
                <Mail className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Secuencias de Email Automáticas</h3>
                  <p className="text-gray-600">Creamos secuencias de bienvenida, nurturing y venta que funcionan 24/7 sin intervención.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Segmentación Avanzada</h3>
                  <p className="text-gray-600">Segmentamos tu lista por comportamiento, intereses y etapa del customer journey para máxima relevancia.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Copywriting Persuasivo</h3>
                  <p className="text-gray-600">Escribimos emails que generan engagement, clics y conversiones. Probado con A/B testing.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <BarChart3 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Análisis y Optimización</h3>
                  <p className="text-gray-600">Monitoreo de métricas clave y optimización continua para mejorar aperturas, clics y conversiones.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Planes de Email Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="p-8 border-2">
              <h3 className="text-2xl font-bold mb-2">Startup</h3>
              <p className="text-gray-600 mb-6">Para emprendedores</p>
              <div className="text-4xl font-bold mb-6">$249<span className="text-lg text-gray-600">/mes</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  <span>Hasta 5,000 suscriptores</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  <span>1 secuencia automática</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  <span>Templates profesionales</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  <span>Reportes básicos</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Seleccionar Plan
              </Button>
            </Card>

            {/* Professional Plan */}
            <Card className="p-8 border-2 border-purple-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Más Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Growth</h3>
              <p className="text-gray-600 mb-6">Para negocios en crecimiento</p>
              <div className="text-4xl font-bold mb-6">$549<span className="text-lg text-gray-600">/mes</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  <span>Hasta 25,000 suscriptores</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  <span>5 secuencias automáticas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  <span>Segmentación avanzada</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  <span>Llamadas mensuales</span>
                </li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Seleccionar Plan
              </Button>
            </Card>

            {/* Enterprise Plan */}
            <Card className="p-8 border-2">
              <h3 className="text-2xl font-bold mb-2">Scale</h3>
              <p className="text-gray-600 mb-6">Para empresas grandes</p>
              <div className="text-4xl font-bold mb-6">$1,099<span className="text-lg text-gray-600">/mes</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  <span>Suscriptores ilimitados</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  <span>Secuencias ilimitadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
                  <span>Integración API completa</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Comienza tu Email Marketing Hoy</h2>
          <p className="text-xl mb-8 opacity-90">
            Crea tu primera secuencia automática en 24 horas. Garantía de satisfacción de 30 días.
          </p>
          <Link href="/contact?service=email-marketing">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8">
              Solicitar Estrategia Personalizada
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
