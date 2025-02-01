"use server";

import { signOut } from "@/auth";
import { redirect } from "next/navigation";

export async function signOutFn() {
    try {
        await signOut({
            redirectTo: "/sign-in",
        });
    } catch (error) {
        console.log("Error signing out...", error);
    } finally {
        redirect("/");
    }
}
