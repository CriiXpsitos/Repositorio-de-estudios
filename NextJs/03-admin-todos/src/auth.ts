import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { CredentialsSignin } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import prisma from "./lib/prisma";
import Credentials from "next-auth/providers/credentials";
import { signInEmailPassword } from "./auth/actions/auth-actions";

class InvalidLoginError extends CredentialsSignin {
  code = "Correo o contraseña incorrectos";
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub,
    Google,
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "TuCorreo@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "TuContraseña",
        },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user = await signInEmailPassword(email, password);

        if (!user) {
          throw new InvalidLoginError("Correo o contraseña incorrectos");
        }

        // const isValidPassword = await prisma.user.verifyPassword(user, password);

        // if (!isValidPassword) {
        //   throw new InvalidLoginError("Correo o contraseña incorrectos");
        // }

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },

    async jwt({ token, user, account, profile }) {
      const dbUser = await prisma.user.findUnique({
        where: {
          email: token.email ?? ("N/A" as string),
        },
      });

      token.roles = dbUser?.roles ?? ["no-roles"];
      token.id = dbUser?.id ?? ("N/A" as string);
      return token;
    },
    async session({ session, token, user }) {
      if (session && session.user) {
        session.user.id = token.id as string;
        session.user.roles = token.roles as string[];
      }

      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
});
