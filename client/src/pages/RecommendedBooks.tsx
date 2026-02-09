import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function RecommendedBooks() {
  const books: Array<{
    id: number;
    title: string;
    author: string;
    category: string;
    rating: number;
    price: string;
    image: string;
    description: string;
    amazonUrl: string;
    affiliateCode: string;
  }> = [
    {
      id: 1,
      title: "Traction: Get a Grip on Your Business",
      author: "Gino Wickman",
      category: "Negocios",
      rating: 4.7,
      price: "$24.99",
      image: "📚",
      description: "Una guía práctica para implementar sistemas en tu negocio y lograr crecimiento sostenible.",
      amazonUrl: "https://amazon.com/Traction-Get-Grip-Your-Business/dp/1491949481?tag=mkconsult-20",
      affiliateCode: "mkconsult-20",
    },
    {
      id: 2,
      title: "DotCom Secrets",
      author: "Russell Brunson",
      category: "Marketing Digital",
      rating: 4.8,
      price: "$29.99",
      image: "📖",
      description: "Descubre los secretos del marketing digital y cómo crear funnels que conviertan.",
      amazonUrl: "https://amazon.com/DotCom-Secrets-Russell-Brunson/dp/1401949177?tag=mkconsult-20",
      affiliateCode: "mkconsult-20",
    },
    {
      id: 3,
      title: "The Lean Startup",
      author: "Eric Ries",
      category: "Emprendimiento",
      rating: 4.6,
      price: "$18.99",
      image: "📕",
      description: "Aprende cómo construir startups exitosas con metodologías ágiles y validación rápida.",
      amazonUrl: "https://amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898?tag=mkconsult-20",
      affiliateCode: "mkconsult-20",
    },
    {
      id: 4,
      title: "Predictable Revenue",
      author: "Aaron Ross",
      category: "Ventas",
      rating: 4.5,
      price: "$22.99",
      image: "📗",
      description: "Cómo crear un proceso de ventas predecible y escalable para tu negocio.",
      amazonUrl: "https://amazon.com/Predictable-Revenue-Build-Forecast-Pipeline/dp/0615373321?tag=mkconsult-20",
      affiliateCode: "mkconsult-20",
    },
    {
      id: 5,
      title: "Contagious: Why Things Catch On",
      author: "Jonah Berger",
      category: "Marketing",
      rating: 4.6,
      price: "$20.99",
      image: "📘",
      description: "Descubre por qué algunos productos se vuelven virales y cómo crear contenido contagioso.",
      amazonUrl: "https://amazon.com/Contagious-Why-Things-Catch-On/dp/1451686579?tag=mkconsult-20",
      affiliateCode: "mkconsult-20",
    },
    {
      id: 6,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Productividad",
      rating: 4.9,
      price: "$19.99",
      image: "📙",
      description: "Cómo construir hábitos efectivos que te ayuden a alcanzar tus objetivos empresariales.",
      amazonUrl: "https://amazon.com/Atomic-Habits-Tiny-Changes-Remarkable-Results/dp/0735211299?tag=mkconsult-20",
      affiliateCode: "mkconsult-20",
    },
    {
      id: 7,
      title: "The Art of SEO",
      author: "Eric Enge, Stephan Spencer, Jessie Stricchiola",
      category: "SEO",
      rating: 4.4,
      price: "$59.99",
      image: "📓",
      description: "La guía completa y definitiva para dominar el SEO y posicionar en Google.",
      amazonUrl: "https://amazon.com/Art-SEO-Mastering-Search-Engines/dp/1491948965?tag=mkconsult-20",
      affiliateCode: "mkconsult-20",
    },
    {
      id: 8,
      title: "Email Marketing Rules",
      author: "Chad S. White",
      category: "Email Marketing",
      rating: 4.5,
      price: "$24.99",
      image: "📔",
      description: "Las mejores prácticas y estrategias para crear campañas de email que conviertan.",
      amazonUrl: "https://amazon.com/Email-Marketing-Rules-Checklists-Deliverability/dp/1118415825?tag=mkconsult-20",
      affiliateCode: "mkconsult-20",
    },
    {
      id: 9,
      title: "Jab, Jab, Jab, Right Hook",
      author: "Gary Vaynerchuk",
      category: "Redes Sociales",
      rating: 4.5,
      price: "$21.99",
      image: "📕",
      description: "Cómo crear contenido efectivo para cada plataforma de redes sociales.",
      amazonUrl: "https://amazon.com/Jab-Jab-Right-Hook-Story/dp/0062273228?tag=mkconsult-20",
      affiliateCode: "mkconsult-20",
    },
    {
      id: 10,
      title: "The 4-Hour Workweek",
      author: "Tim Ferriss",
      category: "Productividad",
      rating: 4.6,
      price: "$18.99",
      image: "📖",
      description: "Automatiza tu negocio y trabaja menos mientras ganas más.",
      amazonUrl: "https://amazon.com/4-Hour-Workweek-Escape-Live-Anywhere/dp/0307465357?tag=mkconsult-20",
      affiliateCode: "mkconsult-20",
    },
  ];

  const categories = ["Todos", ...Array.from(new Set(books.map((b) => b.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Libros Recomendados</h1>
          <p className="text-xl text-amber-100">
            Los mejores libros sobre marketing, negocios y emprendimiento
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-16">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Nuestras Recomendaciones</h2>
          <p className="text-gray-700 mb-8">
            Hemos seleccionado cuidadosamente los mejores libros sobre marketing digital, negocios y
            emprendimiento. Estos libros te ayudarán a crecer tu negocio y alcanzar tus objetivos.
            Todos los enlaces son enlaces de afiliados de Amazon, lo que significa que si compras a
            través de nuestros enlaces, recibimos una pequeña comisión sin costo adicional para ti.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <Card key={book.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 flex items-center justify-center h-48">
                <span className="text-6xl">{book.image}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                    {book.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-semibold">{book.rating}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{book.author}</p>
                <p className="text-sm text-gray-700 mb-4">{book.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600">{book.price}</span>
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Ver en Amazon
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 border border-blue-200">
          <h3 className="text-2xl font-bold mb-4">¿Por Qué Estos Libros?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-2">📚 Contenido Probado</h4>
              <p className="text-gray-700">
                Cada libro ha sido seleccionado por su valor práctico y aplicabilidad directa a tu
                negocio.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">✨ Autores Expertos</h4>
              <p className="text-gray-700">
                Escritos por líderes de la industria con años de experiencia y resultados comprobados.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">🚀 Transformación</h4>
              <p className="text-gray-700">
                Estos libros pueden transformar la forma en que haces negocios y tus resultados.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center text-sm text-gray-600 bg-gray-50 p-6 rounded-lg">
          <p>
            <strong>Nota de Transparencia:</strong> MKConsult es participante del Programa de
            Asociados de Amazon Services LLC, un programa de publicidad de afiliados diseñado para
            proporcionar un medio para que los sitios ganen honorarios de publicidad mediante
            publicidad y enlaces a Amazon.com.
          </p>
        </div>
      </div>
    </div>
  );
}
