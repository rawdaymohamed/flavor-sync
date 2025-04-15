import type { Session, User, NextAuthConfig, JWT } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

const authConfig: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: "user", // Default role
        };
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // JWT callback: Add the role to the JWT token when the user logs in
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role ?? "user"; // Add the role to the JWT token
      }
      return token;
    },

    // Session callback: Attach the role from the JWT token to the session
    session({ session, token }: { session: Session; token: JWT }) {
      session.user.role = token.role as string; // Attach role from token to session
      return session;
    },
  },
};

export default authConfig satisfies NextAuthConfig;
