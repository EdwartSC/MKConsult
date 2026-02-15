import { desc, eq, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";

import {
  contactLeads,
  InsertUser,
  users,
  articles,
  InsertArticle,
  newsletterSubscribers,
} from "../drizzle/schema";

/* ================================
   DB INSTANCE
================================ */
let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    _db = drizzle(process.env.DATABASE_URL);
  }
  return _db;
}

/* ================================
   USERS
================================ */
export async function upsertUser(user: InsertUser): Promise<void> {
  const db = await getDb();
  if (!db) return;

  await db
    .insert(users)
    .values(user)
    .onDuplicateKeyUpdate({
      set: {
        name: user.name,
        email: user.email,
        role: user.role,
        lastSignedIn: new Date(),
      },
    });
}

/* ================================
   ARTICLES
================================ */
export async function getPublishedArticles(limit?: number) {
  const db = await getDb();
  if (!db) return [];

  const query = db
    .select()
    .from(articles)
    .where(eq(articles.published, 1))
    .orderBy(desc(articles.publishedAt));

  if (limit) query.limit(limit);

  return query;
}

export async function getArticleBySlug(slug: string, req?: any) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db
    .select()
    .from(articles)
    .where(eq(articles.slug, slug))
    .limit(1);

  if (!result.length) return undefined;

  await db
    .update(articles)
    .set({ views: sql`${articles.views} + 1` })
    .where(eq(articles.slug, slug));

  return result[0];
}

export async function createArticle(article: InsertArticle) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.insert(articles).values({
    ...article,
    views: 0,
  });
}

/* ================================
   NEWSLETTER
================================ */
export async function subscribeToNewsletter(email: string, name?: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db
    .insert(newsletterSubscribers)
    .values({ email, name, subscribed: 1 })
    .onDuplicateKeyUpdate({
      set: { subscribed: 1, updatedAt: new Date() },
    });
}

/* ================================
   CONTACT LEADS
================================ */
export async function createContactLead(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  timeline?: string;
  description: string;
}) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.insert(contactLeads).values({
    ...data,
    createdAt: new Date(),
  });
}
