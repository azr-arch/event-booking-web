"use server";

import { getCurrentUser } from "@/lib/auth";
import { prismaDb } from "@/lib/db";
import { UpdateEventFormSchema } from "@/lib/validator";
import { revalidatePath } from "next/cache";
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

        if (creatorId !== user.id) {
            return { error: "You are not authorized to update this event." };
        }

        // Fetch existing tickets for the event
        const existingTickets = await prismaDb.ticket.findMany({
            where: { eventId: id },
            select: { id: true },
        });
        const existingTicketIds = existingTickets.map((ticket) => ticket.id);

        // Separate the input tickets into categories
        const ticketsToUpdate = [];
        const ticketsToCreate = [];

        for (const ticket of values.tickets) {
            if (ticket.id) {
                // Ticket has an ID, so it exists and needs to be updated
                ticketsToUpdate.push(ticket);
            } else {
                // New ticket to be created
                ticketsToCreate.push(ticket);
            }
        }

        // Determine which tickets to delete
        const inputTicketIds = ticketsToUpdate.map((ticket) => ticket.id);
        const ticketsToDelete = existingTicketIds.filter((id) => !inputTicketIds.includes(id));

        // Prepare update operations
        const updateOperations = ticketsToUpdate.map((ticket) => ({
            where: { id: ticket.id },
            data: {
                type: ticket.type,
                price: ticket.price,
                quantityAvailable: ticket.quantity,
                startSaleDate: ticket.startSale,
                endSaleDate: ticket.endSale,
            },
        }));

        // Prepare create operations
        const createOperations = ticketsToCreate.map((ticket) => ({
            type: ticket.type,
            price: ticket.price,
            quantityAvailable: ticket.quantity,
            startSaleDate: ticket.startSale,
            endSaleDate: ticket.endSale,
        }));

        // Perform the update
        newEvent = await prismaDb.event.update({
            where: { id },
            data: {
                // Update event fields
                title: values.name,
                startDate: values.startDate,
                endDate: values.endDate,
                locationId: values.locationId,
                description: values.description,

                // Handle nested tickets
                tickets: {
                    // Delete tickets that are no longer present
                    deleteMany: {
                        id: { in: ticketsToDelete },
                    },
                    // Update existing tickets
                    // update: updateOperations,
                    // // Create new tickets
                    // createMany: {
                    //     data: createOperations,
                    // },
                    // Update existing tickets
                    update: updateOperations.length > 0 ? updateOperations : undefined,
                    // Create new tickets
                    createMany:
                        createOperations.length > 0
                            ? {
                                  data: createOperations,
                              }
                            : undefined,
                },
            },
        });
    } catch (error) {
        console.log("error in updateEventAction: ", error);
        return { error: "Could`nt update event, please try again later" };
    }

    revalidatePath("/events");
    return { data: newEvent };
};
