// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email: string;
      image?: string | null;
      role?: string;  // Explicitly add role here
    };
  }

  interface User {
    role?: string;  // Explicitly add role here
  }
}
