import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAdminContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "admin-user",
    email: "admin@example.com",
    name: "Admin User",
    loginMethod: "manus",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return ctx;
}

function createPublicContext(): TrpcContext {
  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return ctx;
}

describe("articles router", () => {
  it("should list published articles publicly", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.articles.list();
    expect(Array.isArray(result)).toBe(true);
  });

  it("should get article by slug publicly", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.articles.bySlug("non-existent-slug");
    expect(result).toBeUndefined();
  });

  it("should allow admin to create article", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const uniqueSlug = `test-article-${Date.now()}`;
    await expect(
      caller.articles.create({
        title: "Test Article",
        slug: uniqueSlug,
        content: "# Test Content\n\nThis is a test article.",
        excerpt: "Test excerpt",
        category: "Test",
        tags: "test,article",
      })
    ).resolves.not.toThrow();
  });

  it("should reject non-admin users from creating articles", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.articles.create({
        title: "Test Article",
        slug: "test-article",
        content: "# Test Content",
      })
    ).rejects.toThrow();
  });
});

describe("newsletter router", () => {
  it("should allow public newsletter subscription", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.newsletter.subscribe({
      email: `test-${Date.now()}@example.com`,
      name: "Test User",
    });

    expect(result).toEqual({ success: true });
  });

  it("should reject invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.newsletter.subscribe({
        email: "invalid-email",
        name: "Test User",
      })
    ).rejects.toThrow();
  });
});
