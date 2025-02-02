// import { getCurrentUser } from "@/lib/auth";
import { prismaDb } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // const user = await getCurrentUser();

        // if (!user) {
        //     return new NextResponse("Unauthorized", { status: 401 });
        // }

        const locations = await prismaDb.location.findMany();

        return NextResponse.json(locations);
    } catch (error) {
        console.log("[API_LOCATIONS]: ", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
