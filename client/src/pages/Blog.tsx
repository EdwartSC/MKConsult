import { trpc } from "@/lib/trpc";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Loader2 } from "lucide-react";
import { getArticleCoverImage, parseArticleContent } from "@/lib/articleContent";

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
          <h1 className="text-4xl font-bold mb-4">Insights Estratégicos</h1>
          <p className="text-xl text-muted-foreground">
            Artículos prácticos sobre operación, tecnología y ejecución para empresas en crecimiento
          </p>
        </div>

        {articles && articles.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => {
              const coverImage = getArticleCoverImage(article.content);
              const parsed = parseArticleContent(article.content);
              const firstParagraph = parsed.blocks.find((block) => block.type === "paragraph");

              return (
                <Link key={article.id} href={`/article/${article.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                    {coverImage && (
                      <img src={coverImage} alt={article.title} className="w-full h-44 object-cover border-b" />
                    )}
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
                        {article.excerpt ||
                          (firstParagraph?.type === "paragraph"
                            ? firstParagraph.text
                            : "Artículo estratégico para optimizar decisiones y ejecución.")}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {new Date(article.publishedAt || article.createdAt).toLocaleDateString("es-ES")}
                        </span>
                        <span className="text-xs text-muted-foreground">{article.views} vistas</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
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
