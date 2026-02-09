import { trpc } from "@/lib/trpc";
import { useRoute, Link } from "wouter";
import { Loader2, ArrowLeft, Phone, Mail, CheckCircle } from "lucide-react";
import { Streamdown } from "streamdown";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <Link href="/blog">
          <Button variant="ghost" className="gap-2 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </Button>
        </Link>

        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{new Date(article.publishedAt || article.createdAt).toLocaleDateString('es-ES')}</span>
              {article.category && <span className="px-3 py-1 bg-secondary rounded-full">{article.category}</span>}
              <span>{article.views} vistas</span>
            </div>
          </div>

          <div className="prose prose-sm dark:prose-invert max-w-none mb-12">
            <Streamdown>{article.content}</Streamdown>
          </div>

          {article.tags && (
            <div className="flex flex-wrap gap-2 mb-12">
              {article.tags.split(',').map((tag) => (
                <span key={tag.trim()} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  {tag.trim()}
                </span>
              ))}
            </div>
          )}

          {/* CTA de Servicios */}
          <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 mb-8">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900 dark:text-blue-100">¿Necesitas Ayuda Profesional?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                Nuestros expertos pueden ayudarte a implementar las estrategias descritas en este artículo y llevar tu negocio al siguiente nivel.
              </p>
              <Link href="/contacto">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Solicitar Consultoría Gratuita
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Newsletter */}
          <Card className="bg-accent/50 border-accent">
            <CardHeader>
              <CardTitle className="text-lg">Newsletter de Marketing Digital</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Recibe los mejores artículos sobre herramientas SaaS, SEO y marketing digital directamente en tu bandeja de entrada.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-3 py-2 rounded-md border border-input bg-background text-sm"
                  required
                />
                <Button type="submit">Suscribirse</Button>
              </form>
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  );
}
