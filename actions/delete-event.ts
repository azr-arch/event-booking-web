"use server";

import { getCurrentUser } from "@/lib/auth";
import { prismaDb } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteEventAction = async ({ eventId }: { eventId: string }) => {
    try {
        const user = await getCurrentUser();

        if (!user) {
            return { error: "Unauthorized access" };
        }

        // Check if event exists
        const eventExists = await prismaDb.event.findUnique({
            where: {
                id: eventId,
            },
        });

        if (!eventExists) {
            return {
                error: "Event not found",
            };
        }

        // TODO Check if user not a normal one
        // TODO Notify users and refund if there has been any sales.

        // Delete event
        await prismaDb.event.delete({
            where: {
                id: eventId,
            },
        });
    } catch (error) {
        console.log("[ACTION_EVENT_DEL]: ", error);
        return { error: "Internal error" };
    }

    revalidatePath("/events");

    return {
        success: true,
    };
};
