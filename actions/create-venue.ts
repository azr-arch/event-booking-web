"use server";

import { prismaDb } from "@/lib/db";

export const createVenueAction = async ({
    name,
    location,
    capacity,
}: {
    name: string;
    location: string;
    capacity: number;
}) => {
    let newVenue;
    try {
        // const user = await currentUser();
        // if (!user) {
        //     return { error: "Unauthorized0" };
        // }
        // newVenue = await prismaDb.venue.create({
        //     data: {
        //         name,
        //         location,
        //         capacity,
        //     },
        // });
    } catch (error) {
        console.log("error in createVenueAction: ", error);
        return { error: "Internal error" };
    }

    // revalidatePath("/venues");
    return { data: newVenue };
};
