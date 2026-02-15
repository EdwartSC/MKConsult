export function useAuth() {
  return {
    isAuthenticated: false,
    logout: () => {},
    user: null,
  };
}
