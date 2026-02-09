import { trpc } from "@/lib/trpc";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Loader2 } from "lucide-react";

export default function Blog() {
  const { data: articles, isLoading, error } = trpc.articles.list.useQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin w-8 h-8" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error al cargar artículos</h1>
          <p className="text-muted-foreground">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog de Marketing Digital</h1>
          <p className="text-xl text-muted-foreground">
            Guías, tutoriales y análisis de las mejores herramientas SaaS para tu negocio
          </p>
        </div>

        {articles && articles.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link key={article.id} href={`/article/${article.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                        {article.category && (
                          <CardDescription className="mt-2">{article.category}</CardDescription>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {article.excerpt || article.content.substring(0, 150)}...
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {new Date(article.publishedAt || article.createdAt).toLocaleDateString('es-ES')}
                      </span>
                      <span className="text-xs text-muted-foreground">{article.views} vistas</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No hay artículos publicados aún</p>
          </div>
        )}
      </div>
    </div>
  );
}
