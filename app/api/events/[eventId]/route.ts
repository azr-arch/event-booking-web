import { getCurrentUser } from "@/lib/auth";
import { prismaDb } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { eventId: string } }) {
    try {
        const user = await getCurrentUser();

        if (!user) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const event = await prismaDb.event.findUnique({
            where: {
                id: params.eventId,
            },
            include: {
                location: {
                    select: {
                        name: true,
                    },
                },
                tickets: {
                    select: {
                        id: true,
                        type: true,
                        price: true,
                        quantityAvailable: true,
                        startSaleDate: true,
                        endSaleDate: true,
                    },
                },
            },
        });

        if (!event) {
            return new NextResponse("Event not found!", { status: 404 });
        }

        const data = {
            id: event.id,
            creatorId: event.creatorId,
            name: event.title,
            description: event.description,
            startDate: event.startDate,
            endDate: event.endDate,
            locationId: event.locationId,
            locationName: event.location.name,
            tickets: event.tickets.map((ticket) => ({
                ...ticket,
                quantity: ticket.quantityAvailable,
                endSale: ticket.endSaleDate,
                startSale: ticket.startSaleDate,
            })),
        };

        return NextResponse.json(data);
    } catch (error) {
        console.log("[API_EVENT_ID]: ", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
