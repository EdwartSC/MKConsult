import ServiceDetailPage from "@/components/ServiceDetailPage";

export default function ServiceTechnicalSolutions() {
  return (
    <ServiceDetailPage
      category="Servicio Estratégico · MKConsult"
      title="Desarrollo y Soluciones Técnicas"
      subtitle="Construcción técnica a medida para resolver necesidades concretas de negocio con visión operativa y criterio estratégico."
      problem="No todas las empresas necesitan una fábrica de software, pero sí soluciones técnicas específicas que funcionen en su realidad actual. Sin una implementación adecuada, aparecen sistemas inconexos, dependencias frágiles y proyectos que no llegan a producción con impacto real. Este servicio entrega soluciones enfocadas, robustas y alineadas al negocio."
      approach={[
        "Levantamiento técnico-funcional sobre procesos y objetivos prioritarios.",
        "Diseño de solución a medida con alcance realista y etapas claras.",
        "Implementación técnica iterativa con foco en adopción y continuidad operativa.",
        "Optimización posterior para estabilidad, rendimiento y evolución futura.",
      ]}
      benefits={[
        "Disminución de costos por retrabajo técnico y soluciones improvisadas.",
        "Mejora operativa mediante herramientas adaptadas a tus flujos reales.",
        "Base escalable para nuevas iniciativas digitales.",
        "Mayor capacidad de decisión con sistemas conectados y confiables.",
      ]}
      audience={[
        "PYMEs con necesidades técnicas específicas no cubiertas por herramientas estándar.",
        "Startups que requieren velocidad con una base sólida.",
        "Empresas en crecimiento que necesitan consolidar su capa tecnológica.",
        "Negocios con procesos manuales que requieren soporte técnico a medida.",
      ]}
      serviceParam="desarrollo-tecnico"
      serviceCaseKey="desarrollo-tecnico"
    />
  );
}
