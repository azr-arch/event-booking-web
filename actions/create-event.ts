"use server";

import { getCurrentUser } from "@/lib/auth";
import { prismaDb } from "@/lib/db";
import { EventFormSchema } from "@/lib/validator";
import { z } from "zod";

export const createEventAction = async ({
    name,
    startDate,
    endDate,
    description,
    tickets,
    locationId,
}: z.infer<typeof EventFormSchema>) => {
    let newEvent;
    try {
        const user = await getCurrentUser();
        if (!user) {
            return { error: "Unauthorized action" };
        }

        const formattedTickets = tickets.map((ticket) => ({
            type: ticket.type,
            price: ticket.price,
            quantityAvailable: ticket.quantity,
            startSaleDate: ticket.startSale,
            endSaleDate: ticket.endSale,
        }));

        newEvent = await prismaDb.event.create({
            data: {
                title: name,
                startDate,
                endDate,
                description,
                tickets: {
                    createMany: {
                        data: formattedTickets,
                    },
                },
                locationId,
                creatorId: user.id,
            },
            include: {
                tickets: true,
            },
        });
    } catch (error) {
        console.log("error in createEventAction: ", error);
        return { error: "Internal error" };
    }

    // revalidatePath("/Events");
    return { data: newEvent };
};
