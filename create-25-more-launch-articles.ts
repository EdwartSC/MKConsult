import { getDb } from "./server/db";
import { articles } from "./drizzle/schema";

const moreArticles = [
  {
    title: "Herramientas de Copywriting: Cómo Escribir Textos que Venden",
    slug: "herramientas-copywriting-textos-venden",
    category: "Copywriting",
    excerpt: "Aprende a usar herramientas de copywriting para escribir textos persuasivos que aumentan conversiones.",
    content: `# Herramientas de Copywriting: Cómo Escribir Textos que Venden

El copywriting es el arte de escribir textos que persuaden a las personas a tomar acción. Ya sea comprar un producto, suscribirse a un newsletter o hacer clic en un botón, el copywriting es fundamental.

## Herramientas de Copywriting Populares

### Copy.ai
Copy.ai es una herramienta de IA que genera textos de marketing automáticamente. Simplemente describe lo que quieres y la IA genera múltiples opciones.

**Características:**
- Generación automática de textos
- Múltiples formatos (emails, ads, landing pages)
- Interfaz intuitiva
- Precios asequibles

**Precios:** $49/mes

### Jasper
Jasper es similar a Copy.ai pero con más funcionalidades y mejor calidad de contenido.

**Características:**
- Generación de contenido largo
- Templates profesionales
- Integración con herramientas
- Soporte dedicado

**Precios:** $39/mes

### Writesonic
Writesonic es una herramienta de IA para copywriting y content marketing.

**Características:**
- Generación de textos
- Herramientas SEO
- Análisis de competencia
- Precios competitivos

**Precios:** $25/mes

## Mejores Prácticas en Copywriting

**1. Conoce tu Audiencia:** Escribe para tu audiencia específica, no para todos.

**2. Beneficios sobre Características:** Enfatiza los beneficios, no solo las características.

**3. Urgencia y Escasez:** Crea un sentido de urgencia o escasez.

**4. Prueba Social:** Incluye testimonios y reseñas.

**5. CTA Claro:** Incluye un llamado a la acción claro.

## Conclusión

El copywriting es una habilidad valiosa. Usa estas herramientas para mejorar tu copywriting y aumentar tus conversiones.

---

**Palabras clave:** copywriting, herramientas, textos persuasivos, marketing`,
    tags: "Copywriting,Marketing,Textos,Persuasión",
    views: 600,
  },
  {
    title: "Plataformas de Podcasting: Spotify for Podcasters vs Buzzsprout vs Anchor",
    slug: "plataformas-podcasting-spotify-buzzsprout-anchor",
    category: "Audio Marketing",
    excerpt: "Compara las mejores plataformas de podcasting para crear y distribuir tu podcast profesionalmente.",
    content: `# Plataformas de Podcasting: Spotify for Podcasters vs Buzzsprout vs Anchor

El podcasting es uno de los medios que más rápido crece. Si quieres crear un podcast, necesitas una plataforma que te permita crear, editar y distribuir tu contenido.

## Spotify for Podcasters

Spotify for Podcasters (anteriormente Anchor) es la plataforma de podcasting de Spotify.

**Características:**
- Creación y edición de podcasts
- Distribución automática
- Monetización integrada
- Estadísticas detalladas

**Precios:** Gratuito

## Buzzsprout

Buzzsprout es una plataforma de podcasting muy popular entre principiantes.

**Características:**
- Interfaz fácil de usar
- Distribución automática
- Estadísticas detalladas
- Planes gratuitos y pagos

**Precios:** Gratuito a $24/mes

## Anchor

Anchor es otra plataforma de podcasting popular.

**Características:**
- Creación de podcasts
- Distribución automática
- Monetización
- Integración con Spotify

**Precios:** Gratuito

## Conclusión

Elige la plataforma que mejor se adapte a tus necesidades. Todas ofrecen opciones gratuitas para comenzar.

---

**Palabras clave:** podcasting, audio, Spotify, distribución`,
    tags: "Podcasting,Audio,Distribución,Spotify",
    views: 550,
  },
  {
    title: "Plataformas de Webinar: Zoom Webinars vs Hopin vs WebinarJam",
    slug: "plataformas-webinar-zoom-hopin-webinarjam",
    category: "Lead Generation",
    excerpt: "Compara las mejores plataformas de webinar para generar leads y educar a tu audiencia.",
    content: `# Plataformas de Webinar: Zoom Webinars vs Hopin vs WebinarJam

Los webinars son una excelente forma de generar leads y educar a tu audiencia. Necesitas una plataforma que sea fácil de usar pero potente.

## Zoom Webinars

Zoom Webinars es la solución de webinar de Zoom.

**Características:**
- Integración con Zoom
- Hasta 10,000 participantes
- Grabación automática
- Interactividad

**Precios:** $15.99/mes

## Hopin

Hopin es una plataforma de eventos virtuales todo en uno.

**Características:**
- Eventos virtuales completos
- Networking
- Exhibiciones
- Grabación

**Precios:** $99/mes

## WebinarJam

WebinarJam es una plataforma especializada en webinars.

**Características:**
- Webinars profesionales
- Automatización
- Integración con email
- Precios asequibles

**Precios:** $99/mes

## Conclusión

Elige la plataforma según tus necesidades. Zoom es la más simple, Hopin es la más completa, y WebinarJam es la más especializada.

---

**Palabras clave:** webinar, lead generation, eventos virtuales`,
    tags: "Webinar,Lead Generation,Eventos,Educación",
    views: 500,
  },
  {
    title: "Plataformas de Afiliados: CJ Affiliate vs Impact vs ShareASale",
    slug: "plataformas-afiliados-cj-impact-shareasale",
    category: "Monetización",
    excerpt: "Descubre las mejores plataformas de afiliados para monetizar tu tráfico y generar ingresos pasivos.",
    content: `# Plataformas de Afiliados: CJ Affiliate vs Impact vs ShareASale

Las plataformas de afiliados son el corazón del marketing de afiliados. Necesitas una plataforma que conecte a publishers (como tú) con merchants (vendedores).

## CJ Affiliate

CJ Affiliate es una de las plataformas de afiliados más grandes del mundo.

**Características:**
- Miles de merchants
- Comisiones competitivas
- Herramientas de marketing
- Soporte dedicado

**Comisión:** Varía por merchant (típicamente 5-30%)

## Impact

Impact es una plataforma de afiliados moderna y profesional.

**Características:**
- Plataforma moderna
- Análisis avanzado
- Automatización
- Soporte empresarial

**Comisión:** Varía por merchant

## ShareASale

ShareASale es otra plataforma de afiliados muy popular.

**Características:**
- Miles de merchants
- Interfaz fácil de usar
- Herramientas de marketing
- Pagos confiables

**Comisión:** Varía por merchant

## Conclusión

Registrate en múltiples plataformas para maximizar tus oportunidades de afiliados.

---

**Palabras clave:** afiliados, monetización, ingresos pasivos`,
    tags: "Afiliados,Monetización,Ingresos Pasivos",
    views: 450,
  },
  {
    title: "Herramientas de Chatbot: ManyChat vs Drift vs Intercom",
    slug: "herramientas-chatbot-manychat-drift-intercom",
    category: "Automatización",
    excerpt: "Compara las mejores herramientas de chatbot para automatizar el servicio al cliente y generar leads.",
    content: `# Herramientas de Chatbot: ManyChat vs Drift vs Intercom

Los chatbots son una forma excelente de automatizar el servicio al cliente y generar leads 24/7.

## ManyChat

ManyChat es una plataforma de chatbot para redes sociales.

**Características:**
- Chatbots para Facebook, Instagram, WhatsApp
- Automatización de mensajes
- Integración con email
- Precios asequibles

**Precios:** $15/mes

## Drift

Drift es una plataforma de conversational marketing.

**Características:**
- Chatbot en vivo
- Conversational marketing
- Integración con CRM
- Análisis avanzado

**Precios:** $500/mes

## Intercom

Intercom es una plataforma de customer communication.

**Características:**
- Chatbot + live chat
- Customer support
- Marketing automation
- Análisis avanzado

**Precios:** $39/mes

## Conclusión

Elige la plataforma según tus necesidades. ManyChat es la más asequible, Drift es la más avanzada para marketing, e Intercom es la más completa.

---

**Palabras clave:** chatbot, automatización, servicio al cliente`,
    tags: "Chatbot,Automatización,Servicio Cliente,IA",
    views: 400,
  },
  {
    title: "Herramientas de Email: Brevo vs Klaviyo vs Convertkit",
    slug: "herramientas-email-brevo-klaviyo-convertkit",
    category: "Email Marketing",
    excerpt: "Compara las mejores plataformas de email marketing para crear campañas efectivas.",
    content: `# Herramientas de Email: Brevo vs Klaviyo vs Convertkit

El email marketing sigue siendo uno de los canales más efectivos. Necesitas una plataforma que sea fácil de usar pero potente.

## Brevo

Brevo (anteriormente Sendinblue) es una plataforma de email marketing asequible.

**Características:**
- Email marketing
- SMS marketing
- Automatización
- Precios competitivos

**Precios:** Gratuito a $300/mes

## Klaviyo

Klaviyo es especializada en email marketing para e-commerce.

**Características:**
- Email marketing avanzado
- Segmentación
- Integración con e-commerce
- Precios basados en contactos

**Precios:** $20/mes

## Convertkit

Convertkit es especializada en email marketing para creators.

**Características:**
- Email marketing para creators
- Interfaz simple
- Integración con redes sociales
- Comunidad activa

**Precios:** $25/mes

## Conclusión

Elige la plataforma según tu caso de uso. Brevo es la más asequible, Klaviyo es la mejor para e-commerce, y Convertkit es la mejor para creators.

---

**Palabras clave:** email marketing, automatización, newsletters`,
    tags: "Email Marketing,Automatización,Newsletters",
    views: 350,
  },
  {
    title: "Herramientas de SEO: Semrush vs Ahrefs vs Moz - Análisis Profundo",
    slug: "herramientas-seo-semrush-ahrefs-moz-analisis",
    category: "SEO Avanzado",
    excerpt: "Análisis profundo de las mejores herramientas de SEO para dominar la búsqueda orgánica.",
    content: `# Herramientas de SEO: Semrush vs Ahrefs vs Moz - Análisis Profundo

Las herramientas de SEO son esenciales para cualquiera que quiera dominar la búsqueda orgánica.

## Semrush

Semrush es una herramienta de SEO muy completa.

**Características:**
- Investigación de palabras clave
- Análisis de competencia
- Auditoría de sitio
- Herramientas de contenido

**Precios:** $120/mes

## Ahrefs

Ahrefs es especializada en análisis de backlinks.

**Características:**
- Análisis de backlinks
- Investigación de palabras clave
- Análisis de competencia
- Rastreador de rankings

**Precios:** $99/mes

## Moz

Moz es una herramienta de SEO completa.

**Características:**
- Investigación de palabras clave
- Análisis de sitio
- Rastreador de rankings
- Comunidad activa

**Precios:** $99/mes

## Conclusión

Las tres son excelentes herramientas. Semrush es la más completa, Ahrefs es la mejor para backlinks, y Moz es la mejor para principiantes.

---

**Palabras clave:** SEO, herramientas, posicionamiento`,
    tags: "SEO,Herramientas,Posicionamiento,Búsqueda Orgánica",
    views: 300,
  },
  {
    title: "Plataformas de Membresía: Circle vs Mighty Networks vs Kajabi",
    slug: "plataformas-membresia-circle-mighty-networks-kajabi",
    category: "Monetización",
    excerpt: "Crea comunidades de membresía rentables con las mejores plataformas disponibles.",
    content: `# Plataformas de Membresía: Circle vs Mighty Networks vs Kajabi

Las plataformas de membresía permiten crear comunidades rentables alrededor de tu contenido.

## Circle

Circle es una plataforma moderna de membresía.

**Características:**
- Comunidad privada
- Contenido exclusivo
- Eventos
- Integración con Stripe

**Precios:** $39/mes

## Mighty Networks

Mighty Networks es especializada en comunidades.

**Características:**
- Comunidad social
- Eventos
- Contenido exclusivo
- Monetización integrada

**Precios:** $39/mes

## Kajabi

Kajabi es una plataforma todo en uno para creators.

**Características:**
- Membresía
- Cursos
- Email marketing
- Comunidad

**Precios:** $119/mes

## Conclusión

Elige la plataforma según tus necesidades. Circle es la más simple, Mighty Networks es la mejor para comunidades, y Kajabi es la más completa.

---

**Palabras clave:** membresía, comunidad, monetización`,
    tags: "Membresía,Comunidad,Monetización,Creators",
    views: 250,
  },
];

async function createMoreLaunchArticles() {
  const db = await getDb();
  if (!db) {
    console.error("No database connection");
    return;
  }

  console.log("Creando 8 artículos adicionales de lanzamiento...");

  for (const article of moreArticles) {
    try {
      await db.insert(articles).values({
        title: article.title,
        slug: article.slug,
        category: article.category,
        excerpt: article.excerpt,
        content: article.content,
        tags: article.tags,
        views: article.views,
        authorId: 1,
        published: 1,
        publishedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      console.log(`✓ Creado: ${article.slug}`);
    } catch (error) {
      console.error(`✗ Error creando ${article.slug}:`, error);
    }
  }

  console.log("✓ Artículos adicionales creados exitosamente");
}

createMoreLaunchArticles().catch(console.error);
