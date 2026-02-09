import { drizzle } from "drizzle-orm/mysql2";
import { articles } from "./drizzle/schema";
import { eq } from "drizzle-orm";
import mysql from "mysql2/promise";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error("DATABASE_URL no está configurada");
  process.exit(1);
}

const connection = await mysql.createConnection(DATABASE_URL);
const db = drizzle(connection);

const servicesSections: Record<string, string> = {
  "guia-completa-activecampaign-principiantes": `## Necesitas Ayuda con ActiveCampaign?

¿Quieres implementar ActiveCampaign pero no sabes por dónde empezar? Nuestros expertos en automatización de marketing pueden ayudarte a:

- Configurar tu cuenta de ActiveCampaign correctamente
- Crear flujos de automatización personalizados
- Integrar ActiveCampaign con tus herramientas existentes
- Optimizar tus campañas para máximas conversiones
- Entrenar a tu equipo en las mejores prácticas

**Contrata nuestros servicios de implementación de ActiveCampaign** y transforma tu marketing en 30 días. [Solicitar Consultoría Gratuita](#contact-form)`,

  "hubspot-vs-activecampaign-comparativa-2025": `## Necesitas Ayuda Eligiendo tu CRM?

¿Indeciso entre HubSpot y ActiveCampaign? Nuestros consultores pueden ayudarte a:

- Evaluar cuál es la mejor opción para tu negocio
- Implementar la plataforma elegida
- Migrar datos desde tu sistema actual
- Configurar integraciones personalizadas
- Optimizar tu flujo de ventas

**Contrata una consultoría personalizada** para tomar la decisión correcta. [Agendar Consulta](#contact-form)`,

  "semrush-vs-ahrefs-mejor-herramienta-seo": `## Necesitas Ayuda con SEO?

¿Quieres mejorar tu posicionamiento en Google pero no sabes cómo? Nuestro equipo de especialistas en SEO puede:

- Realizar un audit completo de tu sitio
- Identificar oportunidades de palabras clave
- Crear una estrategia SEO personalizada
- Implementar cambios técnicos y de contenido
- Monitorear y reportar resultados

**Contrata nuestros servicios de SEO profesional** y duplica tu tráfico orgánico. [Solicitar Audit Gratuito](#contact-form)`,

  "como-elegir-mejor-crm-pyme-2025": `## Necesitas Ayuda Implementando un CRM?

¿Tienes un CRM pero no lo estás usando al máximo? Podemos ayudarte a:

- Configurar correctamente tu CRM
- Entrenar a tu equipo
- Automatizar procesos de ventas
- Crear reportes personalizados
- Optimizar tu pipeline de ventas

**Contrata nuestros servicios de implementación CRM** y mejora tus ventas. [Contactar Ahora](#contact-form)`,

  "guia-seo-principiantes-posiciona-blog-google": `## Necesitas Ayuda Posicionando tu Blog?

¿Tu blog no aparece en Google? Nuestros expertos en SEO pueden ayudarte a:

- Optimizar tus artículos para palabras clave rentables
- Mejorar la estructura técnica de tu blog
- Crear una estrategia de backlinks
- Implementar mejores prácticas de SEO
- Monitorear tu progreso

**Contrata nuestros servicios de SEO para blogs** y aumenta tu tráfico. [Solicitar Estrategia](#contact-form)`,

  "mejores-herramientas-email-marketing-comparadas": `## Necesitas Ayuda con Email Marketing?

¿Quieres crear campañas de email que realmente conviertan? Nuestro equipo puede:

- Elegir la mejor plataforma para ti
- Configurar tu estrategia de email marketing
- Crear templates profesionales
- Segmentar tu audiencia
- Optimizar tus tasas de apertura y clics

**Contrata nuestros servicios de email marketing** y aumenta tus conversiones. [Agendar Consulta](#contact-form)`,

  "mailchimp-vs-brevo-mejor-opcion": `## Necesitas Ayuda Migrando tu Email Marketing?

¿Quieres cambiar de plataforma de email? Podemos ayudarte con:

- Migración segura de tus contactos
- Configuración de la nueva plataforma
- Recreación de tus campañas
- Optimización de tu estrategia
- Capacitación de tu equipo

**Contrata nuestros servicios de migración y optimización** de email marketing. [Contactar](#contact-form)`,

  "herramientas-seo-gratuitas-vs-pagadas-analisis": `## Necesitas Ayuda Optimizando tu SEO?

¿No sabes qué herramientas SEO usar? Nuestros expertos pueden:

- Recomendar las mejores herramientas para tu presupuesto
- Implementar un sistema de monitoreo SEO
- Crear reportes automatizados
- Optimizar tus palabras clave
- Mejorar tu ranking

**Contrata nuestros servicios de consultoría SEO** y maximiza tu ROI. [Solicitar Consulta](#contact-form)`,

  "como-crear-primera-campana-email-marketing": `## Necesitas Ayuda Creando tu Primera Campaña?

¿Nunca has hecho email marketing? No te preocupes, podemos:

- Crear tu primera campaña profesional
- Segmentar tu audiencia correctamente
- Diseñar templates atractivos
- Optimizar tu estrategia
- Entrenar a tu equipo

**Contrata nuestros servicios de email marketing** para principiantes. [Agendar Sesión](#contact-form)`,

  "facebook-ads-pymes-guia-paso-paso": `## Necesitas Ayuda con Facebook Ads?

¿Quieres que tus anuncios de Facebook generen resultados? Nuestro equipo especializado puede:

- Crear estrategias de publicidad efectivas
- Diseñar anuncios que conviertan
- Gestionar tu presupuesto publicitario
- Optimizar tus campañas
- Reportar resultados detallados

**Contrata nuestros servicios de gestión de Facebook Ads** y multiplica tu ROI. [Solicitar Propuesta](#contact-form)`,

  "automatizacion-marketing-mejores-herramientas-2025": `## Necesitas Ayuda Automatizando tu Marketing?

¿Quieres ahorrar tiempo automatizando tareas? Podemos:

- Diseñar tu estrategia de automatización
- Implementar flujos de trabajo complejos
- Integrar tus herramientas
- Optimizar tus procesos
- Entrenar a tu equipo

**Contrata nuestros servicios de automatización de marketing** y ahorra 20 horas semanales. [Contactar](#contact-form)`,

  "shopify-vs-woocommerce-ecommerce-comparada": `## Necesitas Ayuda Creando tu Tienda Online?

¿Quieres lanzar una tienda online pero no sabes cómo? Nuestro equipo puede:

- Elegir la plataforma correcta para ti
- Configurar tu tienda
- Integrar métodos de pago
- Optimizar para conversiones
- Entrenar a tu equipo

**Contrata nuestros servicios de desarrollo de tienda online** y comienza a vender. [Agendar Consulta](#contact-form)`,

  "como-hacer-seo-tecnico-guia-avanzada-blogs": `## Necesitas Ayuda con SEO Técnico?

¿Tu blog tiene problemas técnicos de SEO? Podemos:

- Auditar tu sitio técnicamente
- Identificar y corregir problemas
- Mejorar la velocidad de tu sitio
- Optimizar la estructura técnica
- Implementar mejores prácticas

**Contrata nuestros servicios de SEO técnico** y mejora tu ranking. [Solicitar Audit](#contact-form)`,

  "gestion-redes-sociales-herramientas-estrategia": `## Necesitas Ayuda Gestionando tus Redes Sociales?

¿Quieres que tus redes sociales generen resultados? Nuestro equipo puede:

- Crear una estrategia de redes sociales
- Producir contenido de calidad
- Gestionar tus comunidades
- Crear campañas pagadas
- Reportar resultados

**Contrata nuestros servicios de gestión de redes sociales** y crece tu audiencia. [Contactar](#contact-form)`,

  "analitica-web-medir-exito-blog": `## Necesitas Ayuda Midiendo tu Éxito?

¿No sabes qué métricas monitorear? Podemos:

- Configurar Google Analytics correctamente
- Crear dashboards personalizados
- Identificar oportunidades de mejora
- Generar reportes automatizados
- Entrenar a tu equipo

**Contrata nuestros servicios de analítica web** y toma decisiones basadas en datos. [Agendar Consulta](#contact-form)`,

  "stripe-vs-paypal-plataformas-pago-comparadas": `## Necesitas Ayuda Implementando Pagos Online?

¿Quieres aceptar pagos en tu sitio? Nuestro equipo puede:

- Elegir la plataforma correcta
- Integrar métodos de pago
- Configurar seguridad
- Optimizar el checkout
- Resolver problemas técnicos

**Contrata nuestros servicios de integración de pagos** y comienza a vender. [Contactar](#contact-form)`,

  "notion-vs-asana-herramientas-productividad": `## Necesitas Ayuda Organizando tu Equipo?

¿Quieres mejorar la productividad de tu equipo? Podemos:

- Elegir la herramienta correcta
- Implementar sistemas de organización
- Entrenar a tu equipo
- Crear flujos de trabajo
- Optimizar procesos

**Contrata nuestros servicios de implementación de productividad** y mejora tu eficiencia. [Agendar Sesión](#contact-form)`,

  "canva-vs-adobe-express-diseño-grafico": `## Necesitas Ayuda con Diseño Gráfico?

¿Necesitas diseños profesionales? Nuestro equipo de diseñadores puede:

- Crear diseños personalizados
- Entrenar a tu equipo en herramientas
- Desarrollar guías de marca
- Producir contenido visual
- Optimizar para diferentes plataformas

**Contrata nuestros servicios de diseño gráfico** y destaca tu marca. [Solicitar Propuesta](#contact-form)`,

  "como-crear-funnel-ventas-efectivo": `## Necesitas Ayuda Creando tu Funnel?

¿Quieres optimizar tu proceso de ventas? Podemos:

- Diseñar tu funnel de ventas
- Crear landing pages que conviertan
- Implementar automatización
- Optimizar cada etapa
- Reportar resultados

**Contrata nuestros servicios de diseño de funnel de ventas** y aumenta conversiones. [Contactar](#contact-form)`,

  "copywriting-marketing-textos-que-venden": `## Necesitas Ayuda con Copywriting?

¿Quieres textos que realmente vendan? Nuestro equipo de copywriters puede:

- Escribir copy persuasivo
- Crear titulares que capten atención
- Optimizar tus textos
- Entrenar a tu equipo
- Aumentar conversiones

**Contrata nuestros servicios de copywriting profesional** y vende más. [Agendar Consulta](#contact-form)`,

  "influencer-marketing-colaborar-influencers": `## Necesitas Ayuda con Influencer Marketing?

¿Quieres colaborar con influencers? Podemos:

- Encontrar influencers relevantes
- Negociar colaboraciones
- Gestionar campañas
- Medir resultados
- Escalar estrategia

**Contrata nuestros servicios de influencer marketing** y amplifica tu marca. [Contactar](#contact-form)`,

  "retargeting-recuperar-clientes-perdidos": `## Necesitas Ayuda con Retargeting?

¿Quieres recuperar clientes perdidos? Nuestro equipo puede:

- Implementar píxeles de seguimiento
- Crear campañas de retargeting
- Diseñar anuncios efectivos
- Optimizar presupuesto
- Reportar resultados

**Contrata nuestros servicios de retargeting** y aumenta conversiones. [Solicitar Propuesta](#contact-form)`,

  "landing-pages-crear-paginas-que-convierten": `## Necesitas Ayuda Creando Landing Pages?

¿Quieres landing pages que conviertan? Podemos:

- Diseñar landing pages profesionales
- Optimizar para conversiones
- Realizar pruebas A/B
- Integrar con tu CRM
- Reportar resultados

**Contrata nuestros servicios de landing pages** y aumenta tus conversiones. [Agendar Consulta](#contact-form)`,

  "chatbots-atencion-cliente-guia-completa": `## Necesitas Ayuda Implementando Chatbots?

¿Quieres automatizar tu atención al cliente? Nuestro equipo puede:

- Implementar chatbots inteligentes
- Entrenar el chatbot con tu información
- Integrar con tu sistema
- Optimizar respuestas
- Reportar métricas

**Contrata nuestros servicios de implementación de chatbots** y mejora tu servicio. [Contactar](#contact-form)`,

  "growth-hacking-estrategias-crecer-rapido": `## Necesitas Ayuda Creciendo Rápido?

¿Quieres crecer exponencialmente? Nuestro equipo de growth hackers puede:

- Identificar oportunidades de crecimiento
- Implementar estrategias probadas
- Experimentar y optimizar
- Escalar lo que funciona
- Reportar resultados

**Contrata nuestros servicios de growth hacking** y crece 10x. [Solicitar Estrategia](#contact-form)`,
};

async function updateArticles() {
  try {
    console.log("Actualizando artículos con secciones de servicios...\n");

    for (const [slug, servicesSection] of Object.entries(servicesSections)) {
      const existingArticles = await db
        .select()
        .from(articles)
        .where(eq(articles.slug, slug));

      if (existingArticles.length > 0) {
        const article = existingArticles[0];
        const updatedContent = article.content + "\n\n" + servicesSection;

        await db
          .update(articles)
          .set({ content: updatedContent })
          .where(eq(articles.slug, slug));

        console.log(`✓ Actualizado: ${article.title}`);
      }
    }

    console.log("\n✓ Todos los artículos han sido actualizados con secciones de servicios");
    process.exit(0);
  } catch (error) {
    console.error("Error al actualizar artículos:", error);
    process.exit(1);
  }
}

updateArticles();
