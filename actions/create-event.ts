"use server";

import { prismaDb } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export const createEventAction = async ({
    name,
    date,
    description,
    tickets,
    venueId,
}: {
    name: string;
    date: Date;
    description: string;
    tickets: { name: string; price: number; quantity: number }[];
    venueId: string;
}) => {
    let newEvent;
    try {
        const user = await currentUser();

        if (!user) {
            return { error: "Unauthorized" };
        }

        const formattedTickets = tickets.map((ticket) => ({
            type: ticket.name,
            price: ticket.price,
            numberOfTickets: ticket.quantity,
        }));

        newEvent = await prismaDb.event.create({
            data: {
                name,
                date,
                description,
                tickets: {
                    createMany: {
                        data: formattedTickets,
                    },
                },
                venue: {
                    connect: { id: venueId },
                },
            },
            include: {
                tickets: true,
                venue: true,
            },
        });
    } catch (error) {
        console.log("error in createEventAction: ", error);
        return { error: "Internal error" };
    }

    // revalidatePath("/Events");
    return { data: newEvent };
};
