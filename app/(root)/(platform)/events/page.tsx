import { prismaDb } from "@/lib/db";
import { Events } from "./_components/events";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const EventsPage = async () => {
    // const data = await prismaDb.event.findMany({
    //     include: {
    //         venue: true,
    //         tickets: true,
    //     },
    // });

    return (
        <section className="container mx-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <h1 className="text-3xl font-bold">Event Management</h1>
                <Link href={"/events/new"}>
                    <Button>Add New Event</Button>
                </Link>
            </div>
            <Events />
        </section>
    );
};

export default EventsPage;
