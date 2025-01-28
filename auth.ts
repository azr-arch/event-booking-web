import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
// Your own logic for dealing with plaintext password strings; be careful!
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prismaDb } from "./lib/db";
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

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prismaDb),
    session: { strategy: "jwt" },
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "Password" },
            },

            async authorize(credentials) {
                let user: User | null = null;

                try {
                    user = await getExistingUser({
                        email: credentials.email as string,
                    });

                    if (!user) {
                        throw new CustomError("No account is registered with given email");
                    }
                    if (await comparePassword(credentials.password as string, user.password)) {
                        throw new CustomError("Password not match");
                    }

                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (error: any) {
                    throw new CustomError(error.message);
                }

                return user;
            },
        }),
    ],
    callbacks: {
        authorized({ request: { nextUrl }, auth }) {
            const isLoggedIn = !!auth?.user;
            const { pathname } = nextUrl;

            console.log({ auth });
            console.log(!!auth);
            if (pathname.startsWith("/auth/signin") && isLoggedIn) {
                return Response.redirect(new URL("/", nextUrl));
            }
            // if (pathname.startsWith("/page2") && role !== "admin") {
            //     return Response.redirect(new URL("/", nextUrl));
            // }
            return !!auth;
        },
        async jwt({ token, user }) {
            console.log({ token, user });

            if (user) {
                token.role = user.role; // Add user role to the token
            }
            return token;
        },
        async session({ session, token }) {
            console.log({ session, token });
            if (token) {
                session.user.role = token.role; // Add role to the session
            }
            return session;
        },
    },
    pages: {
        signIn: "/sign-in",
    },
});
