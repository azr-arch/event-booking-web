"use server";

import { getCurrentUser } from "@/lib/auth";
import { prismaDb } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteLocationAction = async ({ locationId }: { locationId: string }) => {
    try {
        const user = await getCurrentUser();

        if (!user) {
            return { error: "Unauthorized access" };
        }

        // Check for associated events
        const hasEvents = await prismaDb.event.count({
            where: { locationId },
        });

        // Check if lcation has any upcoming events
        if (hasEvents) {
            return {
                error: {
                    title: "Failed to delete",
                    description:
                        "Upcoming events are scheduled at this location. Please cancel or reschedule them before deleting the location.",
                },
            };
        }

        // Delete location
        await prismaDb.location.delete({
            where: {
                id: locationId,
            },
        });
    } catch (error) {
        console.log("[ACTION_LOCATION_DEL]: ", error);
        return { error: "Internal error" };
    }

    revalidatePath("/venues");

    return {
        success: true,
    };
};
