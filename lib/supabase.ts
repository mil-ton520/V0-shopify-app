// Mock Supabase client para demonstração
export const supabase = {
  auth: {
    getUser: async () => ({
      data: {
        user: {
          email: "demo@cartsaver.com",
          id: "demo-user-123",
        },
      },
    }),
    signUp: async (credentials: any) => ({
      data: { user: { email: credentials.email, id: "new-user" } },
      error: null,
    }),
    signInWithPassword: async (credentials: any) => ({
      data: { user: { email: credentials.email, id: "user-123" } },
      error: null,
    }),
    signOut: async () => ({ error: null }),
  },
}
