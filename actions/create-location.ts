"use server";

import { getCurrentUser } from "@/lib/auth";
import { prismaDb } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const createLocationAction = async ({
    name,
    address,
}: {
    name: string;
    address: string;
}) => {
    let newVenue;
    try {
        const user = await getCurrentUser();

        if (!user) {
            return { error: "Unauthorized access" };
        }

        newVenue = await prismaDb.location.create({
            data: {
                name,
                address,
            },
        });
    } catch (error) {
        console.log("[ACTION_LOCATION]: ", error);
        return { error: "Internal error" };
    }

    revalidatePath("/events");
    return { data: newVenue };
};
