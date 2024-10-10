import * as z from "zod";

export const TicketFormSchema = z.object({
    name: z.string().min(1, "Ticket type name is required."),
    price: z
        .number({
            required_error: "Price is required.",
        })
        .min(1, { message: "Price must be greater than 0." }),
    quantity: z
        .number({
            required_error: "Quantity is required.",
        })
        .min(1, { message: "Quantity must be greater than 0." }),
});

export const EventFormSchema = z.object({
    name: z.string().min(3, { message: "Event name must be at least 3 characters." }),
    description: z
        .string()
        .min(3, { message: "Event description must be at least 3 characters." })
        .max(400, "Event description must be less than 400 characters."),
    date: z
        .date({
            required_error: "Date is required.",
        })
        .refine((date) => date >= new Date(), {
            message: "Date must be in the future.",
        }),
    venueId: z.string().min(1, { message: "Venue must be selected." }),
    // Tickets array must have at least one ticket
    tickets: z.array(TicketFormSchema).min(1, { message: "There must be at least one ticket." }),
});

export const VenueFormSchema = z.object({
    name: z
        .string({ required_error: "Venue name should not be empty." })
        .min(3, { message: "Venue name must be atleast 3 characters." }),
    location: z
        .string({ required_error: "Venue location should not be empty." })
        .min(3, { message: "Venue location must be atleast 3 characters." }),
    capacity: z
        .number({ required_error: "Capacity should not be empty." })
        .min(100, { message: "Venue capacity must be more than 100." }),
});
