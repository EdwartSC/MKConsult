import { useState, useMemo } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Search, Filter, ChevronRight } from "lucide-react";

const CATEGORIES = [
  { id: "all", name: "Todos los Artículos", color: "bg-gray-100" },
  { id: "saas", name: "SaaS & Herramientas", color: "bg-blue-100" },
  { id: "seo", name: "SEO & Posicionamiento", color: "bg-green-100" },
  { id: "email", name: "Email Marketing", color: "bg-purple-100" },
  { id: "publicidad", name: "Publicidad Digital", color: "bg-red-100" },
  { id: "content", name: "Content Marketing", color: "bg-orange-100" },
];

const ITEMS_PER_PAGE = 12;

export default function BlogImproved() {
  const { data: articles, isLoading } = trpc.articles.list.useQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Filtrar y buscar artículos
  const filteredArticles = useMemo(() => {
    if (!articles) return [];

    return articles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (article.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);

      const matchesCategory =
        selectedCategory === "all" || article.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [articles, searchTerm, selectedCategory]);

  // Paginación
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Resetear página cuando cambia búsqueda o categoría
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Blog de Marketing Digital
          </h1>
          <p className="text-xl text-gray-600">
            Guías, estrategias y tutoriales para escalar tu negocio con marketing digital
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b sticky top-0 z-40">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <Filter className="w-5 h-5 text-gray-600 mt-2" />
            {CATEGORIES.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => handleCategoryChange(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-sm text-gray-600 mt-4">
            Mostrando {paginatedArticles.length} de {filteredArticles.length} artículos
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Cargando artículos...</p>
            </div>
          ) : paginatedArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No se encontraron artículos que coincidan con tu búsqueda.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="mt-4"
              >
                Limpiar filtros
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedArticles.map((article) => (
                <Link key={article.id} href={`/article/${article.slug}`}>
                  <Card className="h-full hover:shadow-lg transition cursor-pointer overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                      <span className="text-blue-400 text-4xl">📄</span>
                    </div>
                    <div className="p-6 flex flex-col h-full">
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                          {article.category || "General"}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                        {article.excerpt || "Artículo de marketing digital con estrategias y tips prácticos."}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-xs text-gray-500">
                          {new Date(article.createdAt).toLocaleDateString("es-ES")}
                        </span>
                        <ChevronRight className="w-4 h-4 text-blue-600" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto flex justify-center items-center gap-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Anterior
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? "bg-blue-600" : ""}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              Siguiente
            </Button>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Recibe nuevos artículos en tu correo
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Suscríbete a nuestro newsletter y recibe estrategias de marketing digital cada semana.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Input
              type="email"
              placeholder="tu@email.com"
              className="bg-white text-gray-900 px-4 py-3"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              Suscribirse
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
