"use server";

import { getCurrentUser } from "@/lib/auth";
import { prismaDb } from "@/lib/db";
import { UpdateEventFormSchema } from "@/lib/validator";
import { z } from "zod";

export const updateEventAction = async ({
    id,
    creatorId,
    ...values
}: z.infer<typeof UpdateEventFormSchema>) => {
    let newEvent;
    try {
        const user = await getCurrentUser();
        if (!user) {
            return { error: "Unauthorized action" };
        }

        // const formattedTickets = tickets.map((ticket) => ({
        //     type: ticket.type,
        //     price: ticket.price,
        //     quantityAvailable: ticket.quantity,
        //     startSaleDate: ticket.startSale,
        //     endSaleDate: ticket.endSale,
        // }));
    } catch (error) {
        console.log("error in updateEventAction: ", error);
        return { error: "Internal error" };
    }

    // revalidatePath("/Events");
    return { data: newEvent };
};
