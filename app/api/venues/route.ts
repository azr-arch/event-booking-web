import { prismaDb } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const user = await currentUser();

        if (!user) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const venues = await prismaDb.venue.findMany({
            include: {
                events: true,
            },
        });

        return NextResponse.json(venues);
    } catch (error) {
        console.log("[API_VENUES]: ", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
