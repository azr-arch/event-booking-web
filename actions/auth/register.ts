"use server";

import { prismaDb } from "@/lib/db";
import { hashPassword } from "@/lib/utils";
import { signUpSchema } from "@/lib/validator";
import { z } from "zod";
import { getExistingUser } from ".";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function register(values: z.infer<typeof signUpSchema>) {
    const { email, name, password } = values;
    try {
        const existingUser = await getExistingUser({ email });

        if (existingUser) {
            return {
                error: "Email already in use",
            };
        }

        const hashedPassword = await hashPassword(password);

        // Create user
        await prismaDb.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: "ORGANIZER",
            },
        });

        // Sign in user

        await signIn("credentials", {
            email,
            password,
            redirectTo: "/",
        });
    } catch (e) {
        console.log("[REGISTER_ERR]: ", e);
        if (e instanceof AuthError) {
            switch (e.type) {
                case "CredentialsSignin":
                    return {
                        message: "Invalid credentials",
                    };
                default:
                    return {
                        message: "Something went wrong.",
                    };
            }
        }
        throw e;
    }
}
