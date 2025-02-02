import { auth } from "@/auth";
import { prismaDb } from "./db";

export async function getCurrentUser() {
    try {
        const user = await auth();

        if (!user) return null;

        const currentUser = await prismaDb.user.findUnique({
            where: {
                email: user.user?.email as string,
            },
        });

        return currentUser;
    } catch {
        return null;
    }
}
