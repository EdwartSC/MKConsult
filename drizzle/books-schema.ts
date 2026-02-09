import { mysqlTable, varchar, text, decimal, int, timestamp } from "drizzle-orm/mysql-core";

export const recommendedBooks = mysqlTable("recommended_books", {
  id: int().primaryKey().autoincrement(),
  title: varchar({ length: 255 }).notNull(),
  author: varchar({ length: 255 }).notNull(),
  description: text(),
  amazonUrl: varchar({ length: 500 }).notNull(),
  affiliateCode: varchar({ length: 100 }).notNull(),
  category: varchar({ length: 100 }).notNull(),
  price: decimal({ precision: 10, scale: 2 }),
  imageUrl: varchar({ length: 500 }),
  rating: decimal({ precision: 3, scale: 1 }),
  featured: int().default(0),
  active: int().default(1),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow().onUpdateNow(),
});

export type RecommendedBook = typeof recommendedBooks.$inferSelect;
export type NewRecommendedBook = typeof recommendedBooks.$inferInsert;
