import { drizzle } from "drizzle-orm/mysql2";
import { articles } from "./drizzle/schema";
import mysql from "mysql2/promise";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error("DATABASE_URL no está configurada");
  process.exit(1);
}

const connection = await mysql.createConnection(DATABASE_URL);
const db = drizzle(connection);

const articlesData = [
  {
    title: "Guía Completa: ActiveCampaign para Principiantes",
    slug: "guia-completa-activecampaign-principiantes",
    content: `# Guía Completa: ActiveCampaign para Principiantes

## Introducción

ActiveCampaign es una plataforma integral de automatización de marketing y CRM que ayuda a las pequeñas empresas a crecer. En esta guía completa, te mostraremos cómo comenzar con ActiveCampaign y aprovechar todas sus características para automatizar tu marketing.

## ¿Qué es ActiveCampaign?

ActiveCampaign es una solución todo en uno que combina email marketing, automatización, CRM y ventas. Es perfecta para PYMES que desean automatizar sus procesos de marketing sin necesidad de múltiples herramientas.

### Características Principales

- **Email Marketing:** Crea campañas de email profesionales con plantillas personalizables
- **Automatización:** Automatiza tareas repetitivas y crea flujos de trabajo complejos
- **CRM:** Gestiona tus contactos y relaciones con clientes de forma eficiente
- **Ventas:** Rastrea oportunidades de venta y cierra más negocios
- **Análisis:** Obtén insights detallados sobre el rendimiento de tus campañas

## Primeros Pasos con ActiveCampaign

### 1. Crear una Cuenta

Visita [ActiveCampaign](https://www.activecampaign.com/) y haz clic en "Comenzar Prueba Gratuita". Completa el formulario de registro con tu información.

### 2. Configurar tu Primer Contacto

Una vez que hayas creado tu cuenta, es hora de agregar tus primeros contactos. Puedes hacerlo de varias formas:

- Importar desde un archivo CSV
- Agregar manualmente
- Integrar con tu sitio web

### 3. Crear tu Primera Campaña de Email

Para crear una campaña de email:

1. Ve a "Campañas" en el menú principal
2. Haz clic en "Nueva Campaña"
3. Selecciona "Email"
4. Elige una plantilla o comienza desde cero
5. Personaliza tu email y envía

## Automatización con ActiveCampaign

La automatización es donde ActiveCampaign realmente brilla. Puedes crear flujos de trabajo que:

- Envíen emails automáticos cuando alguien se suscribe
- Asignen contactos a equipos de ventas
- Actualicen información de contactos automáticamente
- Creen tareas para tu equipo

## Precios de ActiveCampaign

ActiveCampaign ofrece varios planes:

- **Lite:** Desde $9/mes (hasta 500 contactos)
- **Plus:** Desde $49/mes (hasta 10,000 contactos)
- **Professional:** Desde $99/mes (contactos ilimitados)
- **Enterprise:** Contacta para cotización

## Conclusión

ActiveCampaign es una herramienta poderosa para automatizar tu marketing y mejorar tus relaciones con clientes. Con esta guía, estás listo para comenzar tu viaje con ActiveCampaign.

**Comienza tu prueba gratuita de ActiveCampaign hoy mismo y automatiza tu marketing.**`,
    excerpt: "Aprende cómo usar ActiveCampaign para automatizar tu marketing y mejorar tus relaciones con clientes. Guía completa para principiantes.",
    category: "Email Marketing",
    tags: "activecampaign,email marketing,automatización,crm",
    published: 1,
    authorId: 1,
    publishedAt: new Date(),
  },
  {
    title: "HubSpot vs. ActiveCampaign: Comparativa Detallada 2025",
    slug: "hubspot-vs-activecampaign-comparativa-2025",
    content: `# HubSpot vs. ActiveCampaign: Comparativa Detallada 2025

## Introducción

Si estás buscando una plataforma de CRM y automatización de marketing, probablemente hayas considerado HubSpot y ActiveCampaign. Ambas son excelentes opciones, pero tienen diferencias importantes. En esta comparativa, analizamos ambas plataformas para ayudarte a elegir la mejor para tu negocio.

## Comparativa de Características

| Característica | HubSpot | ActiveCampaign |
|---|---|---|
| Email Marketing | Sí | Sí |
| CRM | Sí | Sí |
| Automatización | Sí | Sí |
| Ventas | Sí | Sí |
| Servicio al Cliente | Sí | No |
| Precio Inicial | $50/mes | $9/mes |

## HubSpot

HubSpot es una plataforma completa que ofrece todo lo que necesitas para marketing, ventas y servicio al cliente. Es ideal para empresas que desean una solución integral.

### Ventajas de HubSpot

- Interfaz intuitiva y fácil de usar
- Excelente servicio al cliente
- Muchas integraciones disponibles
- Herramientas de análisis avanzadas

### Desventajas de HubSpot

- Precio más alto que la competencia
- Puede ser excesivo para pequeñas empresas
- Curva de aprendizaje más pronunciada

## ActiveCampaign

ActiveCampaign es una plataforma más asequible que ofrece automatización potente y CRM. Es ideal para PYMES que buscan una solución rentable.

### Ventajas de ActiveCampaign

- Precio más asequible
- Automatización muy potente
- Excelente relación precio-rendimiento
- Buena comunidad de usuarios

### Desventajas de ActiveCampaign

- Interfaz menos intuitiva que HubSpot
- Menos integraciones nativas
- Soporte al cliente menos responsivo

## ¿Cuál Elegir?

**Elige HubSpot si:**
- Necesitas una solución completa todo en uno
- Tu presupuesto es flexible
- Quieres el mejor servicio al cliente

**Elige ActiveCampaign si:**
- Buscas la mejor relación precio-rendimiento
- Necesitas automatización potente
- Tienes un presupuesto limitado

## Conclusión

Ambas plataformas son excelentes opciones. La mejor para ti depende de tus necesidades específicas y tu presupuesto. Te recomendamos probar ambas versiones gratuitas antes de tomar una decisión.`,
    excerpt: "Comparativa detallada entre HubSpot y ActiveCampaign. Descubre cuál es la mejor opción para tu PYME en 2025.",
    category: "CRM",
    tags: "hubspot,activecampaign,comparativa,crm",
    published: 1,
    authorId: 1,
    publishedAt: new Date(),
  },
  {
    title: "Semrush vs. Ahrefs: ¿Cuál es la Mejor Herramienta SEO?",
    slug: "semrush-vs-ahrefs-mejor-herramienta-seo",
    content: `# Semrush vs. Ahrefs: ¿Cuál es la Mejor Herramienta SEO?

## Introducción

Semrush y Ahrefs son dos de las herramientas SEO más populares del mercado. Ambas ofrecen análisis de palabras clave, auditoría de sitios y análisis de competencia. Pero, ¿cuál es mejor? En esta guía, comparamos ambas herramientas en detalle.

## Comparativa General

| Aspecto | Semrush | Ahrefs |
|---|---|---|
| Precio | $120/mes | $99/mes |
| Base de Datos | 21+ billones de palabras clave | 13+ billones de palabras clave |
| Análisis de Backlinks | Excelente | Excelente |
| Auditoría SEO | Completa | Completa |
| Interfaz | Intuitiva | Intuitiva |

## Semrush

Semrush es una plataforma integral que ofrece herramientas para SEO, PPC, contenido y análisis de redes sociales.

### Ventajas de Semrush

- Base de datos más grande de palabras clave
- Herramientas de contenido integradas
- Excelente para análisis de competencia
- Interfaz muy intuitiva

### Desventajas de Semrush

- Precio más alto
- Puede ser abrumador para principiantes
- Algunas características requieren planes más caros

## Ahrefs

Ahrefs es conocida por su análisis de backlinks, pero también ofrece herramientas completas de SEO.

### Ventajas de Ahrefs

- Precio más bajo que Semrush
- Análisis de backlinks superior
- Excelente para investigación de palabras clave
- Buena relación precio-rendimiento

### Desventajas de Ahrefs

- Interfaz menos intuitiva
- Menos herramientas de contenido
- Base de datos de palabras clave más pequeña

## ¿Cuál Elegir?

**Elige Semrush si:**
- Necesitas herramientas de contenido integradas
- Quieres la mejor base de datos de palabras clave
- Tu presupuesto es flexible

**Elige Ahrefs si:**
- Te enfocas principalmente en backlinks
- Buscas la mejor relación precio-rendimiento
- Prefieres una herramienta especializada

## Conclusión

Ambas son excelentes herramientas. Semrush es mejor para un análisis integral, mientras que Ahrefs destaca en análisis de backlinks. Te recomendamos probar ambas versiones gratuitas para ver cuál se adapta mejor a tu flujo de trabajo.`,
    excerpt: "Comparativa completa entre Semrush y Ahrefs. Descubre cuál es la mejor herramienta SEO para tu estrategia de posicionamiento.",
    category: "SEO",
    tags: "semrush,ahrefs,seo,herramientas",
    published: 1,
    authorId: 1,
    publishedAt: new Date(),
  },
  {
    title: "Cómo Elegir el Mejor CRM para tu PYME en 2025",
    slug: "como-elegir-mejor-crm-pyme-2025",
    content: `# Cómo Elegir el Mejor CRM para tu PYME en 2025

## Introducción

Un CRM (Customer Relationship Management) es esencial para cualquier PYME que desee crecer. Pero con tantas opciones disponibles, ¿cómo elegir la mejor? En esta guía, te mostramos cómo evaluar y elegir el CRM perfecto para tu negocio.

## ¿Qué es un CRM?

Un CRM es un software que te ayuda a gestionar tus relaciones con clientes. Centraliza toda la información de tus clientes en un solo lugar, lo que facilita el seguimiento de interacciones, oportunidades de venta y más.

## Características Clave a Buscar

### 1. Facilidad de Uso

El CRM debe ser fácil de usar para tu equipo. Busca una interfaz intuitiva que no requiera capacitación extensiva.

### 2. Automatización

La automatización es crucial. Busca un CRM que pueda automatizar tareas repetitivas como envío de emails, asignación de leads y seguimiento.

### 3. Integraciones

Asegúrate de que el CRM se integre con las herramientas que ya utilizas, como email, calendario y redes sociales.

### 4. Escalabilidad

Elige un CRM que pueda crecer con tu negocio. Debe ser capaz de manejar más contactos y usuarios a medida que tu empresa crece.

### 5. Soporte al Cliente

Busca un CRM con buen soporte al cliente. Necesitarás ayuda cuando surjan problemas.

## Mejores CRM para PYMES

### HubSpot CRM

HubSpot ofrece un plan gratuito que es excelente para pequeñas empresas. Es fácil de usar y tiene muchas integraciones.

### ActiveCampaign

ActiveCampaign es más asequible que HubSpot y ofrece automatización potente. Es ideal para empresas que buscan una solución rentable.

### Pipedrive

Pipedrive es un CRM centrado en ventas. Es excelente para equipos de ventas que desean gestionar sus pipelines de forma eficiente.

## Proceso de Selección

1. **Define tus necesidades:** ¿Qué características necesitas?
2. **Establece tu presupuesto:** ¿Cuánto puedes gastar?
3. **Prueba versiones gratuitas:** La mayoría de CRM ofrecen pruebas gratuitas.
4. **Compara opciones:** Compara características, precios y soporte.
5. **Toma una decisión:** Elige el CRM que mejor se adapte a tus necesidades.

## Conclusión

Elegir el CRM correcto es crucial para el éxito de tu PYME. Tómate tiempo para evaluar tus opciones y elige la que mejor se adapte a tus necesidades y presupuesto.`,
    excerpt: "Guía completa para elegir el mejor CRM para tu PYME. Descubre qué características buscar y compara las mejores opciones.",
    category: "CRM",
    tags: "crm,pyme,software,gestión",
    published: 1,
    authorId: 1,
    publishedAt: new Date(),
  },
  {
    title: "Guía de SEO para Principiantes: Posiciona tu Blog en Google",
    slug: "guia-seo-principiantes-posiciona-blog-google",
    content: `# Guía de SEO para Principiantes: Posiciona tu Blog en Google

## Introducción

El SEO (Search Engine Optimization) es crucial para que tu blog sea encontrado en Google. En esta guía, te enseñaremos los fundamentos del SEO y cómo aplicarlos a tu blog para mejorar tu posicionamiento.

## ¿Qué es SEO?

SEO es el proceso de optimizar tu sitio web para que aparezca en los primeros resultados de búsqueda de Google. Hay tres tipos principales de SEO: SEO en la página, SEO técnico y SEO fuera de la página.

## SEO En la Página

El SEO en la página se refiere a las optimizaciones que haces en tu sitio web.

### Palabras Clave

Las palabras clave son los términos que la gente busca en Google. Debes investigar palabras clave relevantes para tu nicho y usarlas en tu contenido.

### Título y Meta Descripción

El título y la meta descripción son lo que la gente ve en los resultados de búsqueda. Asegúrate de que sean atractivos y contengan tu palabra clave principal.

### Contenido de Calidad

Google premia el contenido de calidad. Escribe artículos largos, informativos y bien estructurados que resuelvan los problemas de tu audiencia.

### Encabezados

Usa encabezados (H1, H2, H3) para estructurar tu contenido. Esto ayuda a Google a entender la estructura de tu artículo.

## SEO Técnico

El SEO técnico se refiere a las optimizaciones técnicas de tu sitio web.

### Velocidad del Sitio

Google considera la velocidad del sitio como un factor de ranking. Asegúrate de que tu sitio sea rápido.

### Mobile-Friendly

Más del 50% de las búsquedas se hacen desde dispositivos móviles. Asegúrate de que tu sitio sea responsive.

### Sitemap XML

Un sitemap XML ayuda a Google a indexar tu sitio. Asegúrate de tener uno.

## SEO Fuera de la Página

El SEO fuera de la página se refiere a las optimizaciones fuera de tu sitio web.

### Backlinks

Los backlinks (enlaces desde otros sitios al tuyo) son muy importantes para el SEO. Busca oportunidades para obtener backlinks de sitios de calidad.

### Redes Sociales

Aunque no es un factor de ranking directo, las redes sociales pueden ayudarte a promocionar tu contenido y obtener más tráfico.

## Herramientas SEO Recomendadas

- **Google Search Console:** Herramienta gratuita de Google para monitorear tu sitio
- **Google Analytics:** Herramienta gratuita para analizar el tráfico de tu sitio
- **Semrush:** Herramienta premium para análisis de palabras clave y competencia
- **Ahrefs:** Herramienta premium para análisis de backlinks

## Conclusión

El SEO es un proceso a largo plazo, pero los resultados valen la pena. Comienza por optimizar tu contenido para palabras clave relevantes, asegúrate de que tu sitio sea técnicamente sólido y trabaja en obtener backlinks de calidad. Con paciencia y consistencia, verás cómo tu blog sube en los rankings de Google.`,
    excerpt: "Aprende los fundamentos del SEO y cómo posicionar tu blog en Google. Guía completa para principiantes.",
    category: "SEO",
    tags: "seo,blog,google,posicionamiento",
    published: 1,
    authorId: 1,
    publishedAt: new Date(),
  },
];

try {
  console.log("Insertando artículos...");
  
  for (const article of articlesData) {
    await db.insert(articles).values(article);
    console.log(`✓ Artículo creado: ${article.title}`);
  }
  
  console.log("\n✓ Todos los artículos han sido insertados exitosamente");
  process.exit(0);
} catch (error) {
  console.error("Error al insertar artículos:", error);
  process.exit(1);
}
