import { auth } from "@/auth";
import { prismaDb } from "../db";

export async function getAllEvents() {
    try {
        const currUser = await auth();
        if (!currUser) {
            return [];
        }
        const events = prismaDb.event.findMany({
            where: {
                creatorId: currUser.user?.id,
            },
            include: {
                tickets: true,
                attendees: true,
                location: true,
            },
        });

        return events;
    } catch (e) {
        console.log("[QUERY_GETALLEVENTS]: ", e);
        return [];
    }
}
