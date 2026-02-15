export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

/**
 * Auth está desactivado por ahora.
 * Cuando el proyecto crezca, se activa poniendo VITE_AUTH_ENABLED=true
 */
const AUTH_ENABLED = import.meta.env.VITE_AUTH_ENABLED === "true";

export const getLoginUrl = () => {
  if (!AUTH_ENABLED) return "#"; // evita romper la app

  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;

  if (!oauthPortalUrl || !appId) return "#";

  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`/app-auth`, oauthPortalUrl);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
