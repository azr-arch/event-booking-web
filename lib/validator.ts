import * as z from "zod";

export const TicketFormSchema = z.object({
    type: z.string().min(1, "Ticket type name is required."),
    price: z
        .number({
            invalid_type_error: "Price must be Number",
            required_error: "Price is required",
        })
        .min(1, { message: "Price must be more than 1$" })
        .transform((n) => parseFloat(n.toFixed(2))),

    quantity: z
        .number({
            required_error: "Quantity is required.",
        })
        .min(1, { message: "Quantity must be greater than 0." }),
    startSale: z
        .date({
            required_error: "Date is required.",
        })
        .refine((date) => date >= new Date(), {
            message: "Date must be in the future.",
        }),

    endSale: z
        .date({
            required_error: "Date is required.",
        })
        .refine((date) => date >= new Date(), {
            message: "Date must be in the future.",
        }),
});

export const EventFormSchema = z.object({
    name: z.string().min(3, { message: "Event name must be at least 3 characters." }),
    description: z
        .string()
        .min(3, { message: "Event description must be at least 3 characters." })
        .max(400, "Event description must be less than 400 characters."),
    startDate: z
        .date({
            required_error: "Date is required.",
        })
        .refine((date) => date >= new Date(), {
            message: "Date must be in the future.",
        }),

    endDate: z
        .date({
            required_error: "Date is required.",
        })
        .refine((date) => date >= new Date(), {
            message: "Date must be in the future.",
        }),

    locationId: z.string({
        required_error: "Please select event's location",
    }),
    image: z.string().optional(),
    // Tickets array must have at least one ticket
    tickets: z.array(TicketFormSchema).min(1, { message: "There must be at least one ticket." }),
});

export const LocationFormSchema = z.object({
    name: z
        .string({ required_error: "Location name should not be empty." })
        .min(3, { message: "Location name must be atleast 3 characters." }),
    address: z
        .string({ required_error: "Location  should not be empty." })
        .min(3, { message: "Location must be atleast 3 characters." }),
    // capacity: zl
    //     .number({ required_error: "Capacity should not be empty." })
    //     .min(100, { message: "Location capacity must be more than 100." }),
});

export const signInSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .min(1, "Email is required")
        .email("Invalid email"),
    password: z
        .string({ required_error: "Password is required" })
        .min(1, "Password is required")
        .min(8, "Password must be more than 8 characters")
        .max(32, "Password must be less than 32 characters"),
});

export const signUpSchema = z.object({
    name: z
        .string({ required_error: "Name is required" })
        .min(3, "Name must be more than 3 characters"),
    email: z
        .string({ required_error: "Email is required" })
        .min(1, "Email is required")
        .email("Invalid email"),
    password: z
        .string({ required_error: "Password is required" })
        .min(1, "Password is required")
        .min(8, "Password must be more than 8 characters")
        .max(32, "Password must be less than 32 characters"),
});
