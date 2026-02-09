import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  result: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Carlos Mendez",
    role: "CEO",
    company: "TechStart Solutions",
    image: "👨‍💼",
    content:
      "Los servicios de SEO de MKConsult transformaron completamente nuestra presencia online. Pasamos de 0 a 5,000 visitantes mensuales en 6 meses. El equipo es profesional, atento y siempre disponible.",
    rating: 5,
    result: "+450% en tráfico orgánico",
  },
  {
    name: "María García",
    role: "Directora de Marketing",
    company: "E-commerce Boutique",
    image: "👩‍💼",
    content:
      "La estrategia de Email Marketing que implementaron generó un ROI de 320%. Sus guías son claras, prácticas y fáciles de implementar. Recomiendo MKConsult a todos mis colegas.",
    rating: 5,
    result: "320% ROI en email marketing",
  },
  {
    name: "Juan López",
    role: "Emprendedor",
    company: "Marketing Consultancy",
    image: "👨‍💻",
    content:
      "Contratar a MKConsult para gestionar nuestras campañas de Facebook Ads fue la mejor decisión. Redujimos el costo por lead en 60% y aumentamos conversiones significativamente.",
    rating: 5,
    result: "-60% en costo por lead",
  },
  {
    name: "Sofia Ruiz",
    role: "Gerente de Ventas",
    company: "B2B Software Company",
    image: "👩‍🔬",
    content:
      "El contenido de MKConsult es excepcional. Usamos sus guías para entrenar a nuestro equipo de ventas y el resultado fue inmediato. Nuestras conversiones aumentaron 85% en 3 meses.",
    rating: 5,
    result: "+85% en conversiones",
  },
  {
    name: "Roberto Fernández",
    role: "Dueño",
    company: "Local Digital Agency",
    image: "👨‍🎓",
    content:
      "MKConsult no solo proporciona servicios, sino educación. Aprendí más en sus artículos que en cursos pagos de $500. Ahora puedo gestionar mis propias campañas con confianza.",
    rating: 5,
    result: "Independencia digital",
  },
  {
    name: "Laura Martínez",
    role: "Especialista en Marketing",
    company: "Startup Tech",
    image: "👩‍💻",
    content:
      "La consultoría estratégica de MKConsult fue transformadora. Identificaron oportunidades que no veíamos y nos ayudaron a crecer 200% en un año. Excelente relación costo-beneficio.",
    rating: 5,
    result: "+200% crecimiento anual",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600">
            Resultados reales de empresas que han transformado su marketing digital con MKConsult
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>

              {/* Result Badge */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
                <p className="text-blue-700 font-semibold text-sm">
                  {testimonial.result}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">500+</p>
              <p className="text-gray-700">Clientes Satisfechos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">$2.5M</p>
              <p className="text-gray-700">Ingresos Generados</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">98%</p>
              <p className="text-gray-700">Tasa de Satisfacción</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">4.9★</p>
              <p className="text-gray-700">Calificación Promedio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
