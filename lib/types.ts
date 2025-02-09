import { Event, Location, Order, Ticket, UserEvent } from "@prisma/client";

export type FullEvent = Event & {
    location: Location;
    tickets: Ticket[];
    attendees: UserEvent[];
};

export type EventWithOrder = Event & {
    location: Location;
    tickets: Ticket[];
    attendees: UserEvent[];
    orders: Order[];
};
