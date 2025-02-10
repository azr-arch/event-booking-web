import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import EventDetailsTab from "./details";
import AttendeesTab from "./attendees";
import TicketsTab from "./tickets";
import LogsTab from "./logs";
import { EventWithOrder } from "@/lib/types";
// import EventDetailsTab from "./EventDetailsTab";
// import AttendeesTab from "./AttendeesTab";
// import TicketsTab from "./TicketsTab";
// import LogsTab from "./LogsTab";

const EventTabs = ({ event }: { event: EventWithOrder }) => {
    return (
        <Tabs defaultValue="details" className="space-y-4">
            <TabsList>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="attendees">Attendees</TabsTrigger>
                <TabsTrigger value="tickets">Tickets & Sales</TabsTrigger>
                <TabsTrigger value="logs">Event Logs</TabsTrigger>
            </TabsList>
            <TabsContent value="details">
                <EventDetailsTab event={event} />
            </TabsContent>
            <TabsContent value="attendees">
                <AttendeesTab attendees={event.attendees} />
            </TabsContent>
            <TabsContent value="tickets">
                <TicketsTab
                // tickets={event.tickets}
                //  totalSales={event.totalSales}
                />
            </TabsContent>
            <TabsContent value="logs">
                <LogsTab
                // logs={event.logs}
                />
            </TabsContent>
        </Tabs>
    );
};

export default EventTabs;
