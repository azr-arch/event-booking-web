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

export async function getEvent({ id }: { id: string }) {
    try {
        const currUser = await auth();
        if (!currUser) {
            return null;
        }
        const event = await prismaDb.event.findUnique({
            where: {
                id,
            },
            include: {
                tickets: true,
                attendees: true,
                location: true,
                orders: true,
            },
        });

        return event;
    } catch (e) {
        console.log("[QUERY_GET_EVENT]: ", e);
        return null;
    }
}
