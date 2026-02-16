import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, BarChart3, Cog, ShieldCheck, Wrench } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-slate-800" />,
      title: "Diagnóstico estratégico",
      description:
        "Evaluación ejecutiva para identificar cuellos de botella y priorizar decisiones tecnológicas con impacto en negocio.",
    },
    {
      icon: <Cog className="w-8 h-8 text-slate-800" />,
      title: "Optimización operativa",
      description:
        "Diseño e implementación de procesos más eficientes, trazables y sostenibles para escalar con control.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-slate-800" />,
      title: "Soluciones técnicas a medida",
      description:
        "Desarrollo técnico focalizado en resolver necesidades concretas sin sobredimensionar la operación.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-slate-800" />,
      title: "Acompañamiento senior",
      description:
        "Partner técnico-operativo con visión consultiva para avanzar con claridad en cada etapa.",
    },
  ];

  return (
    <>
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 to-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] uppercase text-slate-600 mb-4">
              MKConsult · Consultora Estratégica Tecnológica
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Convierte tecnología y operación en una ventaja competitiva
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Diagnóstico, optimización de procesos e implementación técnica para empresas que
              necesitan decisiones claras y ejecución efectiva.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/servicios">
                <Button size="lg" className="gap-2 bg-slate-900 hover:bg-slate-800 text-white">
                  Ver Servicios <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" variant="outline">
                  Agendar Diagnóstico Estratégico
                </Button>
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-100 p-12 flex items-center justify-center h-96">
            <p className="text-slate-500 text-center">Espacio reservado para imagen institucional</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 border border-slate-200 rounded-xl bg-slate-50/60">
              {f.icon}
              <h3 className="font-semibold text-slate-900 mt-4 mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
