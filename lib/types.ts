import { Event, Location, Ticket, UserEvent } from "@prisma/client";

export type FullEvent = Event & {
    location: Location;
    tickets: Ticket[];
    attendees: UserEvent[];
};
