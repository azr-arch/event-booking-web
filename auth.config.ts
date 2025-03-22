import { CredentialsSignin, type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getExistingUser } from "./actions/auth";
import { comparePassword } from "./lib/utils";
import { User } from "@prisma/client";

class CustomError extends CredentialsSignin {
  constructor(code: string) {
    super();
    this.code = code;
    this.message = code;
    this.stack = undefined;
  }
}

export const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },

      async authorize({ email, password }) {
        let user: User | null = null;

        try {
          user = await getExistingUser({
            email: email as string,
          });

          if (!user) {
            throw new CustomError("No account is registered with given email");
          }

          const isPasswordSame = await comparePassword(
            password as string,
            user.password
          );
          if (!isPasswordSame) {
            throw new CustomError("Password not match");
          }

          // TODO: For organizer check, if organization is verified or not

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          console.log(error);
          throw new CustomError(error.message);
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async authorized({ auth }) {
      return !!auth;
    },
    async jwt({ token, user }) {
      if (user) {
        const customUser = user as User;
        token.role = customUser.role;
        token.name = customUser.name;
        token.email = customUser.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role!;
        session.user.name = token.name;
        session.user.email = token.email!;
      }
      return session;
    },
    async redirect(params) {
      console.log("In redirect");
      console.log({ params });
      return params.baseUrl;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
} satisfies NextAuthConfig;
