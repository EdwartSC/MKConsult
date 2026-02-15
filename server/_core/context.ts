import type { User } from "../../drizzle/schema";
import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";

export async function createContext({ req, res }: CreateExpressContextOptions) {
  // aquí ya tienes tu lógica que lee la cookie y obtiene el user
  const user = (req as any).user ?? null;

  return {
    req,
    res,
    user, // 👈 ESTO ES CLAVE
  };
}

export type TrpcContext = Awaited<ReturnType<typeof createContext>>;
