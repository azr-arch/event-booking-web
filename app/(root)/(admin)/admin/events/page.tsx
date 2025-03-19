import { Events } from "./_components/events";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/db-queries";

// Causing build error during deployment
// Had to add this line ( might fix later )
export const dynamic = "force-dynamic";

const EventsPage = async () => {
  const events = await getAllEvents();

  return (
    <section className=" mx-auto space-y-6 px-2">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <h1 className="text-3xl font-bold">Event Management</h1>
        <Link href={"/admin/events/new"}>
          <Button>Add New Event</Button>
        </Link>
      </div>
      <Events data={events} />
    </section>
  );
};

export default EventsPage;
