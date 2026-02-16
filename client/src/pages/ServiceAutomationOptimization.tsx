import ServiceDetailPage from "@/components/ServiceDetailPage";

export default function ServiceAutomationOptimization() {
  return (
    <ServiceDetailPage
      category="Servicio Estratégico · MKConsult"
      title="Automatización y Optimización de Procesos"
      subtitle="Diseñamos e implementamos automatizaciones para reducir fricción operativa, aumentar productividad y mejorar la trazabilidad del negocio."
      problem="Cuando la operación depende de tareas manuales, hojas dispersas y coordinación informal, el negocio pierde velocidad y margen. Los errores se vuelven recurrentes, los equipos se saturan y la dirección no cuenta con información confiable a tiempo. Este servicio transforma esa dinámica en flujos claros, medibles y sostenibles."
      approach={[
        "Auditoría de procesos críticos con foco en cuellos de botella y retrabajo.",
        "Diseño de flujos optimizados con criterios de simplicidad y control.",
        "Implementación de automatizaciones e integraciones entre herramientas clave.",
        "Estandarización operativa y documentación para continuidad del equipo.",
      ]}
      benefits={[
        "Reducción de costos operativos por eliminación de tareas repetitivas.",
        "Mejora de tiempos de respuesta y cumplimiento interno.",
        "Escalabilidad de la operación sin incrementar complejidad innecesaria.",
        "Mayor calidad de datos para decisiones tácticas y estratégicas.",
      ]}
      audience={[
        "PYMEs con procesos administrativos intensivos.",
        "Startups que necesitan operar con equipos compactos.",
        "Empresas en crecimiento con operaciones desalineadas.",
        "Organizaciones con procesos manuales y baja trazabilidad.",
      ]}
      serviceParam="automatizacion"
      serviceCaseKey="automatizacion"
    />
  );
}
