import { getEvent } from "@/lib/db-queries";
import EventHeader from "./_components/event-header";
import EventTabs from "./_components/tabs";

export default async function EventDetailsPage({ params }: { params: { eventId: string } }) {
    const event = await getEvent({ id: params.eventId });

    return (
        <section className="container mx-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
            {!event ? (
                <p>No event found</p>
            ) : (
                <>
                    <EventHeader title={event.title} eventId={event.id} />
                    <EventTabs event={event} />
                </>
            )}
        </section>
    );
}
