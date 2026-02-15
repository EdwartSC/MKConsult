import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { sendContactEmail, sendAutoReply } from "./services/email";

export const appRouter = router({
  system: systemRouter,

  /* ================== AUTH ================== */
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),

    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  /* ================== ARTICLES ================== */
  articles: router({
    list: publicProcedure.query(async () => {
      const { getPublishedArticles } = await import("./db");
      return getPublishedArticles();
    }),

    bySlug: publicProcedure
      .input(z.string())
      .query(async ({ input, ctx }) => {
        const { getArticleBySlug } = await import("./db");
        return getArticleBySlug(input, ctx.req);
      }),

    create: protectedProcedure
      .input(
        z.object({
          title: z.string(),
          slug: z.string(),
          content: z.string(),
          excerpt: z.string().optional(),
          category: z.string().optional(),
          tags: z.string().optional(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }

        const { createArticle } = await import("./db");

        await createArticle({
          ...input,
          authorId: ctx.user.id,
          published: 0,
        });

        return { success: true };
      }),
  }),

  /* ================== NEWSLETTER ================== */
  newsletter: router({
    subscribe: publicProcedure
      .input(
        z.object({
          email: z.string().email(),
          name: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const { subscribeToNewsletter } = await import("./db");
        await subscribeToNewsletter(input.email, input.name);
        return { success: true };
      }),
  }),

  /* ================== CONTACT ================== */
  contact: router({
    create: publicProcedure
      .input(
        z.object({
          name: z.string(),
          email: z.string().email(),
          phone: z.string().optional(),
          company: z.string().optional(),
          service: z.string(),
          budget: z.string().optional(),
          timeline: z.string().optional(),
          description: z.string().min(50),
        })
      )
      .mutation(async ({ input }) => {
        const { createContactLead } = await import("./db");

        await createContactLead(input);

        try {
          await sendContactEmail(input);

          await sendAutoReply({
            name: input.name,
            email: input.email,
            service: input.service,
            budget: input.budget,
            timeline: input.timeline,
          });
        } catch (error) {
          console.error("Error enviando email:", error);
        }

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
