import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: 1,
    category: "General",
    question: "¿Qué es MKConsult?",
    answer:
      "MKConsult es una plataforma de consultoría y educación en marketing digital que ofrece guías, estrategias y servicios profesionales para ayudar a PYMES y emprendedores a escalar sus negocios digitalmente.",
  },
  {
    id: 2,
    category: "General",
    question: "¿Cuál es el costo de los servicios?",
    answer:
      "Ofrecemos diferentes planes según tus necesidades, desde $349/mes para servicios básicos hasta $2,999/mes para estrategias empresariales completas. Cada plan incluye diferentes niveles de soporte y servicios.",
  },
  {
    id: 3,
    category: "Servicios",
    question: "¿Cuánto tiempo tarda en ver resultados?",
    answer:
      "Los resultados varían según el servicio. Con Google Ads puedes ver resultados en 7 días. Con SEO y Content Marketing, los primeros resultados visibles suelen aparecer en 30-60 días, con crecimiento exponencial después de 3-6 meses.",
  },
  {
    id: 4,
    category: "Servicios",
    question: "¿Incluyen garantía de resultados?",
    answer:
      "Ofrecemos garantía de satisfacción del cliente. Si no estás satisfecho con los resultados en los primeros 30 días, ofrecemos reembolso total. Nuestro objetivo es tu crecimiento.",
  },
  {
    id: 5,
    category: "Blog",
    question: "¿Puedo usar los artículos del blog para mi negocio?",
    answer:
      "Sí, todos nuestros artículos son de acceso público y puedes usarlos como referencia. Sin embargo, no puedes copiar el contenido completo. Te recomendamos leerlos, aprender las estrategias y aplicarlas a tu negocio.",
  },
  {
    id: 6,
    category: "Blog",
    question: "¿Con qué frecuencia publican nuevos artículos?",
    answer:
      "Publicamos nuevos artículos cada semana. Puedes suscribirte a nuestro newsletter para recibir notificaciones de nuevos contenidos directamente en tu correo.",
  },
  {
    id: 7,
    category: "Afiliados",
    question: "¿Cuáles son los enlaces de afiliados en los artículos?",
    answer:
      "Recomendamos herramientas SaaS de calidad en nuestros artículos. Si compras a través de nuestros enlaces de afiliados, recibimos una pequeña comisión sin costo adicional para ti. Esto nos ayuda a mantener el blog gratuito.",
  },
  {
    id: 8,
    category: "Contacto",
    question: "¿Cómo contacto para contratar servicios?",
    answer:
      "Puedes usar el formulario de contacto en la página de servicios o enviar un email directamente. Nos pondremos en contacto en 24 horas para discutir tus necesidades y proponer una solución personalizada.",
  },
  {
    id: 9,
    category: "Contacto",
    question: "¿Ofrecen consulta gratuita?",
    answer:
      "Sí, ofrecemos una consulta estratégica gratuita de 1 hora para nuevos clientes. En esta sesión analizamos tu negocio, identificamos oportunidades y proponemos un plan de acción personalizado.",
  },
  {
    id: 10,
    category: "Métodos de Pago",
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos tarjetas de crédito (Visa, Mastercard, American Express), transferencia bancaria y PayPal. Todos los pagos son procesados de forma segura.",
  },
];

const CATEGORIES = ["General", "Servicios", "Blog", "Afiliados", "Contacto", "Métodos de Pago"];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("General");

  const filteredFAQ = FAQ_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl text-gray-600">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios y blog
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b sticky top-0 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category ? "bg-blue-600 text-white" : ""
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {filteredFAQ.map((item) => (
              <Card
                key={item.id}
                className="cursor-pointer hover:shadow-md transition"
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 flex-grow">
                      {item.question}
                    </h3>
                    {expandedId === item.id ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </div>

                  {expandedId === item.id && (
                    <div className="mt-4 pt-4 border-t text-gray-600">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 p-8 bg-blue-50 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">¿Aún tienes preguntas?</h3>
            <p className="text-gray-600 mb-6">
              No encontraste la respuesta que buscabas. Contáctanos directamente.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              Contactar Soporte
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
