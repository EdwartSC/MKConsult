import ServiceDetailPage from "@/components/ServiceDetailPage";

export default function ServiceStrategicConsulting() {
  return (
    <ServiceDetailPage
      category="Servicio Estratégico · MKConsult"
      title="Consultoría Estratégica Tecnológica"
      subtitle="Diagnóstico ejecutivo para alinear decisiones tecnológicas con resultados operativos, financieros y de crecimiento sostenible."
      problem="Muchas empresas crecen con tecnología fragmentada, decisiones reactivas y procesos sin trazabilidad. Eso genera sobrecostos, lentitud operativa y falta de claridad para priorizar inversiones. Esta consultoría ordena el contexto completo para definir qué implementar, qué optimizar y qué descartar con criterio de negocio."
      approach={[
        "Diagnóstico estratégico del modelo operativo y del stack tecnológico actual.",
        "Mapa de fricciones críticas que impactan tiempos, costos y calidad de ejecución.",
        "Priorización ejecutiva por impacto vs. esfuerzo para decisiones de corto y mediano plazo.",
        "Definición de hoja de ruta tecnológica con hitos medibles y responsables claros.",
      ]}
      benefits={[
        "Reducción de costos por decisiones tecnológicas mejor fundamentadas.",
        "Mayor control operativo y visibilidad sobre procesos críticos.",
        "Escalabilidad estructurada sin improvisación técnica.",
        "Toma de decisiones basada en datos y métricas de negocio.",
      ]}
      audience={[
        "PYMEs que necesitan ordenar su crecimiento tecnológico.",
        "Startups que deben priorizar con recursos limitados.",
        "Empresas en expansión con deuda operativa acumulada.",
        "Equipos directivos que buscan claridad antes de invertir.",
      ]}
      serviceParam="consultoria"
      serviceCaseKey="consultoria"
    />
  );
}
