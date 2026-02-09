import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  articles: router({
    list: publicProcedure.query(async () => {
      const { getPublishedArticles } = await import("./db");
      return getPublishedArticles();
    }),
    bySlug: publicProcedure.input(z.string()).query(async ({ input }) => {
      const { getArticleBySlug } = await import("./db");
      return getArticleBySlug(input);
    }),
    create: protectedProcedure
      .input(z.object({
        title: z.string(),
        slug: z.string(),
        content: z.string(),
        excerpt: z.string().optional(),
        category: z.string().optional(),
        tags: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== 'admin') throw new TRPCError({ code: 'FORBIDDEN' });
        const { createArticle } = await import("./db");
        await createArticle({
          ...input,
          authorId: ctx.user.id,
          published: 0,
        });
      }),
  }),
  newsletter: router({
    subscribe: publicProcedure
      .input(z.object({
        email: z.string().email(),
        name: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const { subscribeToNewsletter } = await import("./db");
        await subscribeToNewsletter(input.email, input.name);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
