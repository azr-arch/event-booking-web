"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

// fix next redirect erorr when successfully logged in
export async function signInAction({ email, password }: { email: string; password: string }) {
    let redirectPath: string | null = "/";

    try {
        await signIn("credentials", { email, password, redirectTo: "/dashboard" });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        redirectPath = "/dashboard";
    } catch (error: any) {
        redirectPath = null;
        return {
            error: error?.message || "Login failed, try again later.",
        };
    } finally {
        if (redirectPath) {
            redirect(redirectPath);
        }
    }
}
