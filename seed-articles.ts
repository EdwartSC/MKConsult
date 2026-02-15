import "dotenv/config";
import fs from "fs";
import path from "path";
import { getDb } from "./server/db";
import { articles, users } from "./drizzle/schema";

async function seedArticles() {
  const db = await getDb();
  if (!db) throw new Error("DB not available");

  const articlesDir = path.join(process.cwd(), "data/articles");
  const files = fs.readdirSync(articlesDir);

  let allArticles: any[] = [];

  for (const file of files) {
    const filePath = path.join(articlesDir, file);
    const json = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    allArticles = allArticles.concat(json);
  }

  console.log(`📂 Archivos leídos: ${files.length}`);
  console.log(`📰 Artículos totales: ${allArticles.length}`);

  /* ================================
     LIMPIAR TABLAS (solo para seed)
  ================================= */
  await db.delete(articles);
  await db.delete(users);

  /* ================================
     CREAR AUTOR BASE MKCONSULT
  ================================= */
  await db.insert(users).values({
    openId: "mkconsult-author",
    name: "MKConsult",
    email: "admin@mkconsult.com",
    loginMethod: "seed",
    role: "admin",
  });

  const [author] = await db.select().from(users).limit(1);

  if (!author) throw new Error("No se pudo crear el autor base");

  /* ================================
     INSERTAR ARTÍCULOS
  ================================= */
  await db.insert(articles).values(
    allArticles.map((a, index) => ({
      title: a.title,
      slug: `${a.slug}-${index}`, // 🔥 evita duplicados
      content: a.content,
      excerpt: a.excerpt ?? null,
      category: a.category ?? null,
      tags: a.tags ?? null,
      featured: a.featured ?? 0,
      published: 1,
      views: 0, // 👈 TODAS LAS VISTAS INICIAN EN 0
      authorId: author.id,
      publishedAt: new Date(),
    }))
  );

  console.log("✅ Seed completado con autor MKConsult");
}

seedArticles().then(() => process.exit(0));
