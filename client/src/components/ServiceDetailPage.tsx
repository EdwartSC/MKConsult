import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import CaseStudyCard from "@/components/CaseStudyCard";
import { getCaseStudiesByService, type CaseStudy } from "@/lib/caseStudies";

type ServiceDetailPageProps = {
  category: string;
  title: string;
  subtitle: string;
  problem: string;
  approach: string[];
  benefits: string[];
  audience: string[];
  serviceParam: string;
  serviceCaseKey: CaseStudy["service"];
};

export default function ServiceDetailPage({
  category,
  title,
  subtitle,
  problem,
  approach,
  benefits,
  audience,
  serviceParam,
  serviceCaseKey,
}: ServiceDetailPageProps) {
  const ctaHref = `/contacto?service=${serviceParam}`;
  const caseStudies = getCaseStudiesByService(serviceCaseKey);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100/70">
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.14em] uppercase text-slate-600 mb-4">
                {category}
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                {title}
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl">{subtitle}</p>
              <Link href={ctaHref}>
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
                  Agendar Diagnóstico Estratégico
                </Button>
              </Link>
            </div>

            <div className="h-[360px] rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-100 shadow-sm flex items-center justify-center">
              <div className="text-center px-8">
                <p className="text-sm uppercase tracking-[0.12em] text-slate-500 mb-2">Espacio visual</p>
                <p className="text-slate-700 font-medium">Placeholder para imagen ilustrativa del servicio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8 lg:pb-12">
        <div className="container">
          <Card className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm">
            <h2 className="text-2xl lg:text-3xl font-semibold text-slate-900 mb-4">Problema que resolvemos</h2>
            <p className="text-slate-700 leading-relaxed">{problem}</p>
          </Card>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container grid gap-8 lg:grid-cols-2">
          <Card className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-5">Enfoque MKConsult</h2>
            <ul className="space-y-3">
              {approach.map((item) => (
                <li key={item} className="flex text-slate-700 leading-relaxed">
                  <span className="mr-2 text-slate-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-5">Beneficios concretos</h2>
            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex text-slate-700 leading-relaxed">
                  <span className="mr-2 text-slate-500">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container">
          <Card className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-5">¿Para quién es este servicio?</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {audience.map((segment) => (
                <div key={segment} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
                  {segment}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>



      {caseStudies.length > 0 && (
        <section className="py-8 lg:py-12">
          <div className="container">
            <div className="mb-8">
              <p className="text-sm font-semibold tracking-[0.12em] uppercase text-slate-600 mb-3">
                Casos de Éxito
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 mb-3">
                Resultados reales en contextos similares al tuyo
              </h2>
              <p className="text-slate-600 max-w-3xl">
                Cada caso combina enfoque consultivo, ejecución técnica y mejora medible en operación.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pt-8 pb-20 lg:pb-24">
        <div className="container">
          <div className="rounded-2xl bg-slate-900 text-white p-10 lg:p-14 text-center shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Convirtamos tu operación en una ventaja competitiva</h2>
            <p className="text-slate-200 max-w-3xl mx-auto mb-8">
              Solicita una evaluación ejecutiva para priorizar iniciativas, eliminar fricción operativa y
              construir una hoja de ruta realista para tu negocio.
            </p>
            <Link href={ctaHref}>
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Solicitar Diagnóstico Estratégico
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
