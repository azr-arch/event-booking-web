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

            async authorize({ email, password }) {
                console.log({ CREDENTIAL: { email, password } });

                let user: User | null = null;

                try {
                    user = await getExistingUser({
                        email: email as string,
                    });

                    if (!user) {
                        throw new CustomError("No account is registered with given email");
                    }

                    const isPasswordSame = await comparePassword(password as string, user.password);
                    if (!isPasswordSame) {
                        throw new CustomError("Password not match");
                    }

                    // For organizer check, if organization is verified or not

                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (error: any) {
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
        authorized({ request, auth }) {
            console.log("============================================");
            const isLoggedIn = auth?.user;
            const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false;
            } else if (isLoggedIn) {
                return Response.redirect(new URL("/", request.nextUrl));
            }
            return true;
        },
        // how do i typecast this user to have my object
        async jwt({ token, user }) {
            console.log({ token, user });

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
                console.log({ session, token });
            }
            return session;
        },
    },
    pages: {
        signIn: "/sign-in",
    },
});
