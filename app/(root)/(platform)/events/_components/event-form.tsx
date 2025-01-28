"use client";

import { useForm } from "react-hook-form";
import { EventFormSchema } from "@/lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { eventFormDefaultValues } from "@/lib/constant";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Loader, MapPin, Users } from "lucide-react";
import { useVenues } from "@/hooks/use-venues";
import { Venue } from "@prisma/client";
import { FormInput } from "@/components/form/form-input";
import { TicketManager } from "./ticket-manager";
import { Input } from "@/components/ui/input";
import { useAction } from "@/hooks/use-action";
import { createEventAction } from "@/actions/create-event";
import { toast } from "@/hooks/use-toast";

export const EventForm = () => {
    const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);

    // const { data: venues, isLoading } = useVenues();

    const form = useForm<z.infer<typeof EventFormSchema>>({
        resolver: zodResolver(EventFormSchema),
        defaultValues: eventFormDefaultValues,
    });

    // const { execute, isLoading: isFormSubmitting } = useAction(createEventAction, {
    //     onSuccess: (data) => {
    //         const { name, date, venue } = data;
    //         const formattedDate = new Date(date).toLocaleDateString(); // Format the date as needed

    //         toast({
    //             title: `Organized: ${name}`,
    //             description: `${formattedDate} at ${venue.name}, ${venue.location}`,
    //         });
    //     },
    //     onError: () => {
    //         toast({ description: "Failed to create." });
    //     },
    //     onComplete: () => {
    //         console.log("Event create done!");
    //     },
    // });

    // const { watch } = form;
    // const tickets = watch("tickets", []);

    // function onSubmit(values: z.infer<typeof EventFormSchema>) {
    //     execute({
    //         ...values,
    //     });
    // }

    // TODO add venue's capacity cross check with ticket's quantity

    return (
        <Form {...form}>
            <form className="space-y-8 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput
                        name="name"
                        label="Event Name"
                        placeholder="Enter event name"
                        // disabled={isFormSubmitting}
                    />

                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Date</FormLabel>
                                <FormControl>
                                    <Input
                                        type="date"
                                        onChange={(e) => field.onChange(new Date(e.target.value))}
                                        // disabled={isFormSubmitting}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="venueId"
                        render={({ field }) => (
                            <FormItem className="space-y-2">
                                <FormLabel>Venue</FormLabel>
                                <FormControl></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormInput
                    name="description"
                    label="Description"
                    placeholder="Enter event description"
                    isTextarea={true} // Textarea field
                    // disabled={isFormSubmitting}
                />
                <TicketManager />
                {/* <Button type="submit" disabled={tickets.length === 0 || isFormSubmitting}> */}
                Create
                {/* </Button> */}
            </form>
        </Form>
    );
};
