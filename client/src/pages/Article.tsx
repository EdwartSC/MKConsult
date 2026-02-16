import { trpc } from "@/lib/trpc";
import { useRoute, Link } from "wouter";
import { Loader2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { parseArticleContent } from "@/lib/articleContent";

export default function Article() {
  const [match, params] = useRoute("/article/:slug");
  const slug = params?.slug as string;

  const { data: article, isLoading, error } = trpc.articles.bySlug.useQuery(slug, {
    enabled: !!slug,
  });

  if (!match) return null;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin w-8 h-8" />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artículo no encontrado</h1>
          <Link href="/blog">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const parsedContent = parseArticleContent(article.content);

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <Link href="/blog">
          <Button variant="ghost" className="gap-2 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </Button>
        </Link>

        <article className="max-w-[800px] mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{new Date(article.publishedAt || article.createdAt).toLocaleDateString("es-ES")}</span>
              {article.category && <span className="px-3 py-1 bg-secondary rounded-full">{article.category}</span>}
              <span>{article.views} vistas</span>
            </div>
          </div>

          {parsedContent.coverImage && (
            <div className="mb-14">
              <img
                src={parsedContent.coverImage}
                alt={article.title}
                className="w-full h-[360px] sm:h-[420px] object-cover rounded-2xl shadow-lg border border-slate-200"
              />
            </div>
          )}

          <div className="space-y-7 mb-12 text-[17px] leading-8 text-slate-700">
            {parsedContent.blocks.map((block, index) => {
              if (block.type === "heading") {
                const Tag = block.level === 3 ? "h3" : "h2";
                return (
                  <Tag key={`${block.type}-${index}`} className="text-2xl font-semibold text-slate-900 tracking-tight">
                    {block.text}
                  </Tag>
                );
              }

              if (block.type === "paragraph") {
                return (
                  <p key={`${block.type}-${index}`} className="text-slate-700 leading-8">
                    {block.text}
                  </p>
                );
              }

              if (block.type === "list") {
                return (
                  <ul key={`${block.type}-${index}`} className="space-y-2.5 list-disc pl-6 text-slate-700">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }

              return (
                <figure key={`${block.type}-${index}`} className="space-y-3 max-w-[680px] mx-auto">
                  <img
                    src={block.src}
                    alt={block.alt}
                    className="w-full rounded-xl border border-slate-200 shadow-sm object-cover"
                  />
                  {block.caption && (
                    <figcaption className="text-sm text-slate-500 text-center italic">{block.caption}</figcaption>
                  )}
                </figure>
              );
            })}
          </div>

          {article.tags && (
            <div className="flex flex-wrap gap-2 mb-12">
              {article.tags.split(",").map((tag) => (
                <span key={tag.trim()} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  {tag.trim()}
                </span>
              ))}
            </div>
          )}

          <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 mb-8">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900 dark:text-blue-100">¿Necesitas Acompañamiento Estratégico?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                Te ayudamos a traducir este contenido en decisiones ejecutables para tu operación.
              </p>
              <Link href="/contacto">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Solicitar Diagnóstico Estratégico
                </Button>
              </Link>
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  );
}
