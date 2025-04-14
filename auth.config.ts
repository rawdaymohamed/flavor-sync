import type { NextAuthConfig } from "next-auth";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";

export default { providers: [Google, Facebook] } satisfies NextAuthConfig;
