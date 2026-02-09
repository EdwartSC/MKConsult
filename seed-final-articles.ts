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

const finalArticles = [
  {
    title: "Stripe vs. PayPal: Plataformas de Pago Comparadas",
    slug: "stripe-vs-paypal-plataformas-pago-comparadas",
    content: `# Stripe vs. PayPal: Plataformas de Pago Comparadas

## Introducción

Si tienes una tienda en línea o aceptas pagos en tu sitio web, necesitas una plataforma de pago confiable. Las dos opciones más populares son Stripe y PayPal. En esta guía, las comparamos en detalle.

## Comparativa General

| Aspecto | Stripe | PayPal |
|---|---|---|
| Comisión | 2.9% + $0.30 | 2.9% + $0.30 |
| Configuración | Técnica | Fácil |
| Documentación | Excelente | Buena |
| Integraciones | Muchas | Muchas |
| Soporte | Bueno | Excelente |
| Tiempo de pago | 2-3 días | 1-2 días |

## Stripe

Stripe es una plataforma de pago moderna y flexible.

### Ventajas

- Documentación excelente
- Muchas integraciones disponibles
- Flexible para desarrolladores
- Buena seguridad
- Soporte técnico responsivo

### Desventajas

- Requiere conocimientos técnicos
- Configuración más compleja
- Comisiones similares a PayPal

## PayPal

PayPal es la plataforma de pago más antigua y confiable.

### Ventajas

- Muy fácil de usar
- Confianza de usuarios
- Excelente soporte
- Muchas opciones de pago
- Rápido acceso a fondos

### Desventajas

- Menos flexible para desarrolladores
- Interfaz menos moderna
- Comisiones similares a Stripe

## Conclusión

Ambas plataformas son excelentes. Stripe es mejor para desarrolladores, mientras que PayPal es mejor para no técnicos. Considera tus necesidades específicas antes de elegir.`,
    excerpt: "Comparativa detallada entre Stripe y PayPal. Descubre cuál es la mejor plataforma de pago para tu negocio.",
    category: "E-commerce",
    tags: "stripe,paypal,pagos,ecommerce",
    published: 1,
    authorId: 1,
    publishedAt: new Date(),
  },
  {
    title: "Notion vs. Asana: Herramientas de Productividad Comparadas",
    slug: "notion-vs-asana-herramientas-productividad",
    content: `# Notion vs. Asana: Herramientas de Productividad Comparadas

## Introducción

La productividad es clave para el éxito empresarial. Notion y Asana son dos herramientas populares para gestionar proyectos y tareas. En esta guía, las comparamos.

## Comparativa General

| Aspecto | Notion | Asana |
|---|---|---|
| Precio | Gratis - $10/mes | Gratis - $24.99/mes |
| Flexibilidad | Muy Alta | Media |
| Curva de Aprendizaje | Pronunciada | Media |
| Integraciones | Muchas | Muchas |
| Colaboración | Excelente | Excelente |

## Notion

Notion es una herramienta muy flexible para organizar información.

### Ventajas

- Muy flexible
- Plan gratuito generoso
- Excelente para documentación
- Comunidad activa
- Muchas plantillas

### Desventajas

- Curva de aprendizaje pronunciada
- Puede ser abrumador
- Rendimiento a veces lento

## Asana

Asana es una herramienta especializada en gestión de proyectos.

### Ventajas

- Interfaz intuitiva
- Excelente para proyectos
- Buen soporte
- Muchas vistas
- Automatización

### Desventajas

- Menos flexible que Notion
- Precio más alto
- Plan gratuito limitado

## Conclusión

Elige Notion si necesitas flexibilidad máxima. Elige Asana si necesitas gestión de proyectos especializada.`,
    excerpt: "Comparativa entre Notion y Asana. Descubre cuál es la mejor herramienta de productividad para tu equipo.",
    category: "Productividad",
    tags: "notion,asana,productividad,herramientas",
    published: 1,
    authorId: 1,
    publishedAt: new Date(),
  },
  {
    title: "Canva vs. Adobe Express: Diseño Gráfico para Principiantes",
    slug: "canva-vs-adobe-express-diseño-grafico",
    content: `# Canva vs. Adobe Express: Diseño Gráfico para Principiantes

## Introducción

No necesitas ser diseñador profesional para crear gráficos hermosos. Canva y Adobe Express son dos herramientas que hacen el diseño accesible para todos.

## Comparativa General

| Aspecto | Canva | Adobe Express |
|---|---|---|
| Precio | Gratis - $13/mes | Gratis - $9.99/mes |
| Facilidad | Muy Fácil | Fácil |
| Plantillas | 500K+ | 10K+ |
| Funcionalidades | Básicas-Avanzadas | Básicas-Intermedias |
| Colaboración | Buena | Buena |

## Canva

Canva es la herramienta de diseño más popular para no diseñadores.

### Ventajas

- Muy fácil de usar
- Millones de plantillas
- Plan gratuito excelente
- Comunidad grande
- Muchas funcionalidades

### Desventajas

- Plantillas a veces genéricas
- Menos control que software profesional
- Precio de Pro puede ser alto

## Adobe Express

Adobe Express es la versión simplificada de Adobe Creative Cloud.

### Ventajas

- Integración con Adobe
- Interfaz limpia
- Precio asequible
- Buena calidad
- Fácil de usar

### Desventajas

- Menos plantillas que Canva
- Menos funcionalidades
- Comunidad más pequeña

## Conclusión

Ambas son excelentes para principiantes. Canva es mejor si necesitas muchas plantillas. Adobe Express es mejor si quieres integración con Adobe.`,
    excerpt: "Comparativa entre Canva y Adobe Express. Descubre cuál es la mejor herramienta de diseño gráfico para ti.",
    category: "Diseño",
    tags: "canva,adobe,diseño,gráficos",
    published: 1,
    authorId: 1,
    publishedAt: new Date(),
  },
  {
    title: "Cómo Crear un Funnel de Ventas Efectivo",
    slug: "como-crear-funnel-ventas-efectivo",
    content: `# Cómo Crear un Funnel de Ventas Efectivo

## Introducción

Un funnel de ventas es el camino que recorre un cliente desde que te conoce hasta que compra. En esta guía, te mostramos cómo crear un funnel efectivo.

## Etapas del Funnel

### 1. Conciencia (Awareness)

En esta etapa, el cliente descubre tu negocio. Puedes llegar a ellos a través de:

- Contenido en blog
- Redes sociales
- Publicidad pagada
- SEO

### 2. Consideración (Consideration)

El cliente está considerando tu solución. Proporciona:

- Comparativas
- Testimonios
- Casos de estudio
- Demos

### 3. Decisión (Decision)

El cliente está listo para comprar. Facilita:

- Proceso de compra simple
- Múltiples opciones de pago
- Garantía de satisfacción
- Soporte

## Optimización del Funnel

### Reducir Fricción

Elimina pasos innecesarios en el proceso de compra. Cada paso reduce conversiones.

### Pruebas A/B

Prueba diferentes versiones de tus páginas para ver cuál convierte mejor.

### Seguimiento

Monitorea dónde se pierden clientes en el funnel y optimiza esas áreas.

## Conclusión

Un funnel de ventas bien diseñado puede aumentar significativamente tus conversiones. Comienza por entender a tu audiencia y luego optimiza cada etapa.`,
    excerpt: "Guía completa para crear un funnel de ventas efectivo. Aumenta tus conversiones con esta estrategia probada.",
    category: "Ventas",
    tags: "funnel,ventas,conversión,estrategia",
    published: 1,
    authorId: 1,
    publishedAt: new Date(),
  },
  {
    title: "Copywriting para Marketing: Cómo Escribir Textos que Venden",
    slug: "copywriting-marketing-textos-que-venden",
    content: `# Copywriting para Marketing: Cómo Escribir Textos que Venden

## Introducción

El copywriting es el arte de escribir textos persuasivos que venden. En esta guía, aprenderás los principios fundamentales del copywriting efectivo.

## Principios del Copywriting

### 1. Conoce a tu Audiencia

Antes de escribir, entiende quién es tu audiencia:

- Sus problemas
- Sus deseos
- Sus miedos
- Sus valores

### 2. Crea un Titular Poderoso

El titular es lo más importante. Debe:

- Captar atención
- Prometer beneficio
- Ser claro
- Ser conciso

### 3. Resuelve un Problema

Tu copy debe resolver un problema específico de tu audiencia. No hables de ti, habla de ellos.

### 4. Crea Urgencia

Motiva a la acción con urgencia:

- Ofertas limitadas
- Plazos
- Escasez

### 5. Incluye una CTA Clara

Tu llamada a la acción debe ser:

- Clara
- Específica
- Orientada a la acción

## Estructura de Copy Efectivo

1. Titular atractivo
2. Apertura que capte atención
3. Problema identificado
4. Solución presentada
5. Beneficios explicados
6. Prueba social (testimonios)
7. CTA clara

## Conclusión

El copywriting es una habilidad que se puede aprender. Practica estos principios y verás mejoras en tus conversiones.`,
    excerpt: "Guía de copywriting para marketing. Aprende a escribir textos persuasivos que venden.",
    category: "Marketing",
    tags: "copywriting,marketing,ventas,escritura",
    published: 1,
    authorId: 1,
    publishedAt: new Date(),
  },
  {
    title: "Influencer Marketing: Cómo Colaborar con Influencers",
    slug: "influencer-marketing-colaborar-influencers",
    content: `# Influencer Marketing: Cómo Colaborar con Influencers

## Introducción

El influencer marketing es una estrategia poderosa para llegar a nuevas audiencias. En esta guía, te mostramos cómo colaborar efectivamente con influencers.

## ¿Por Qué Influencer Marketing?

El influencer marketing ofrece varias ventajas:

- Alcance a nuevas audiencias
- Credibilidad a través de terceros
- Contenido auténtico
- ROI medible

## Tipos de Influencers

### Mega Influencers

Más de 1 millón de seguidores. Muy caros pero gran alcance.

### Macro Influencers

100K a 1M de seguidores. Buen balance de alcance y costo.

### Micro Influencers

10K a 100K de seguidores. Mejor engagement, más asequibles.

### Nano Influencers

Menos de 10K seguidores. Muy alto engagement, muy asequibles.

## Cómo Encontrar Influencers

1. Define tu nicho
2. Busca influencers en tu nicho
3. Analiza su audiencia
4. Verifica su engagement
5. Contacta con ellos

## Negociación

Considera:

- Precio
- Tipo de contenido
- Número de posts
- Derechos de contenido
- Exclusividad

## Conclusión

El influencer marketing puede ser muy efectivo si lo haces correctamente. Comienza con micro influencers para probar y luego escala.`,
    excerpt: "Guía completa de influencer marketing. Aprende a colaborar con influencers para crecer tu negocio.",
    category: "Marketing",
    tags: "influencer,marketing,colaboración,redes sociales",
    published: 1,
    authorId: 1,
    publishedAt: new Date(),
  },
  {
    title: "Retargeting: Cómo Recuperar Clientes Perdidos",
    slug: "retargeting-recuperar-clientes-perdidos",
    content: `# Retargeting: Cómo Recuperar Clientes Perdidos

## Introducción

La mayoría de visitantes no compran en la primera visita. El retargeting es una estrategia para recuperarlos. En esta guía, te mostramos cómo implementar retargeting efectivo.

## ¿Qué es Retargeting?

Retargeting es mostrar anuncios a personas que ya visitaron tu sitio pero no compraron. Es una forma de mantenerlos interesados.

## Tipos de Retargeting

### Retargeting por Píxel

Rastrea a visitantes usando un píxel de seguimiento. Es el más común.

### Retargeting por Lista

Importas una lista de emails de clientes potenciales y les muestras anuncios.

### Retargeting Dinámico

Muestra anuncios del producto específico que vieron.

## Plataformas de Retargeting

### Google Ads

La plataforma más grande para retargeting.

### Facebook Ads

Excelente para retargeting en redes sociales.

### LinkedIn Ads

Ideal para B2B retargeting.

## Mejores Prácticas

- Segmenta tu audiencia
- Crea anuncios relevantes
- Usa ofertas especiales
- No bombardees con anuncios
- Prueba diferentes mensajes

## Conclusión

El retargeting es una estrategia efectiva para aumentar conversiones. Comienza hoy mismo y ve cómo tus ventas mejoran.`,
    excerpt: "Guía de retargeting. Aprende a recuperar clientes perdidos y aumentar tus conversiones.",
    category: "Publicidad",
    tags: "retargeting,publicidad,conversión,google ads",
    published: 1,
    authorId: 1,
    publishedAt: new Date(),
  },
  {
    title: "Landing Pages: Cómo Crear Páginas que Convierten",
    slug: "landing-pages-crear-paginas-que-convierten",
    content: `# Landing Pages: Cómo Crear Páginas que Convierten

## Introducción

Una landing page es una página diseñada específicamente para convertir visitantes en clientes. En esta guía, te mostramos cómo crear landing pages efectivas.

## Elementos Clave de una Landing Page

### Titular Claro

El titular debe comunicar el valor de tu oferta inmediatamente.

### Subtítulo Persuasivo

Amplía el mensaje del titular y crea interés.

### Imagen o Video

Una imagen o video de calidad aumenta la confianza.

### Beneficios Claros

Lista los beneficios principales de tu oferta.

### Testimonios

Los testimonios de clientes satisfechos aumentan la credibilidad.

### CTA Prominente

El botón de CTA debe ser visible y atractivo.

### Formulario Simple

Pide solo la información esencial.

## Mejores Prácticas

- Mantén el enfoque en una oferta
- Elimina distracciones
- Usa colores contrastantes
- Optimiza para móvil
- Prueba diferentes versiones

## Herramientas para Crear Landing Pages

- Unbounce
- Leadpages
- Instapage
- Pagefly
- Landingi

## Conclusión

Una landing page bien diseñada puede aumentar significativamente tus conversiones. Comienza con lo básico y optimiza constantemente.`,
    excerpt: "Guía completa de landing pages. Aprende a crear páginas que convierten visitantes en clientes.",
    category: "Conversión",
    tags: "landing page,conversión,marketing,diseño",
    published: 1,
    authorId: 1,
    publishedAt: new Date(),
  },
  {
    title: "Chatbots para Atención al Cliente: Guía Completa",
    slug: "chatbots-atencion-cliente-guia-completa",
    content: `# Chatbots para Atención al Cliente: Guía Completa

## Introducción

Los chatbots están revolucionando la atención al cliente. En esta guía, te mostramos cómo implementar chatbots para mejorar tu servicio.

## ¿Por Qué Chatbots?

Los chatbots ofrecen varias ventajas:

- Disponibilidad 24/7
- Respuestas instantáneas
- Reducción de costos
- Mejor experiencia del cliente
- Escalabilidad

## Tipos de Chatbots

### Chatbots Basados en Reglas

Responden basándose en palabras clave predefinidas. Simples pero limitados.

### Chatbots con IA

Utilizan machine learning para entender y responder mejor. Más sofisticados.

### Chatbots Híbridos

Combinan reglas e IA para mejor rendimiento.

## Plataformas de Chatbots

- Intercom
- Drift
- Zendesk
- Freshchat
- ManyChat

## Casos de Uso

- Responder preguntas frecuentes
- Calificar leads
- Agendar citas
- Procesar pedidos
- Recopilar feedback

## Conclusión

Los chatbots son una herramienta poderosa para mejorar la atención al cliente. Comienza con un chatbot simple y mejora gradualmente.`,
    excerpt: "Guía completa de chatbots para atención al cliente. Mejora tu servicio con automatización inteligente.",
    category: "Atención al Cliente",
    tags: "chatbots,atención,automatización,ia",
    published: 1,
    authorId: 1,
    publishedAt: new Date(),
  },
  {
    title: "Growth Hacking: Estrategias para Crecer Rápido",
    slug: "growth-hacking-estrategias-crecer-rapido",
    content: `# Growth Hacking: Estrategias para Crecer Rápido

## Introducción

El growth hacking es un conjunto de técnicas para crecer rápido con presupuesto limitado. En esta guía, exploramos las mejores estrategias.

## Principios del Growth Hacking

### 1. Enfoque en Métricas

Mide todo. Solo puedes mejorar lo que mides.

### 2. Experimentación Rápida

Prueba ideas rápidamente y aprende de los resultados.

### 3. Creatividad

Piensa fuera de la caja. Las soluciones obvias ya las conoce todo el mundo.

### 4. Enfoque en Crecimiento

Todo debe estar orientado al crecimiento.

## Estrategias de Growth Hacking

### Viral Marketing

Crea contenido que la gente quiera compartir.

### Referral Programs

Incentiva a tus clientes a referir a otros.

### Partnerships

Colabora con otros negocios para crecer juntos.

### Content Marketing

Crea contenido de valor que atrae tráfico orgánico.

### Optimización de Conversión

Mejora constantemente tu tasa de conversión.

## Conclusión

El growth hacking no es magia, es experimentación sistemática. Comienza hoy mismo y ve cómo tu negocio crece.`,
    excerpt: "Guía de growth hacking. Aprende estrategias para crecer rápido con presupuesto limitado.",
    category: "Crecimiento",
    tags: "growth hacking,crecimiento,estrategia,marketing",
    published: 1,
    authorId: 1,
    publishedAt: new Date(),
  },
];

try {
  console.log("Insertando 10 artículos finales...");
  
  for (const article of finalArticles) {
    await db.insert(articles).values(article);
    console.log(`✓ Artículo creado: ${article.title}`);
  }
  
  console.log("\n✓ Todos los artículos finales han sido insertados exitosamente");
  console.log("Total: 25 artículos en la base de datos");
  process.exit(0);
} catch (error) {
  console.error("Error al insertar artículos:", error);
  process.exit(1);
}
