"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export async function signInAction({ email, password }: { email: string; password: string }) {
    console.log("In signin action");
    try {
        await signIn("credentials", { email, password, redirectTo: "/dashboard" });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return {
            error: error?.message || "Login failed, try again later.",
        };
    } finally {
        redirect("/dashboard");
    }
}
