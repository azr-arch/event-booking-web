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

import { FormInput } from "@/components/form/form-input";
import { TicketManager } from "./ticket-manager";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { useAction } from "@/hooks/use-action";
import { createEventAction } from "@/actions/create-event";
import { useLocation } from "@/hooks/use-location";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { useLocationModal } from "@/hooks/use-location-modal";

export const EventForm = () => {
    const { data: locations, isLoading: isLocationLoading } = useLocation();
    const locationModal = useLocationModal();

    const form = useForm<z.infer<typeof EventFormSchema>>({
        resolver: zodResolver(EventFormSchema),
        defaultValues: eventFormDefaultValues,
    });

    const { execute, isLoading, errors } = useAction(createEventAction, {
        onSuccess: (data) => {
            const { title, startDate } = data;
            const formattedDate = new Date(startDate).toLocaleDateString(); // Format the date as needed

            toast({
                title: `Organized: ${title}`,
                description: `Event scheduled at ${formattedDate}`,
            });
        },
        onError: () => {
            toast({ description: "Failed to create." });
        },
        onComplete: () => {
            console.log("Event create done!");
        },
    });

    const { watch } = form;
    const tickets = watch("tickets", []);
    const { isSubmitting } = form.formState;

    function onSubmit(values: z.infer<typeof EventFormSchema>) {
        console.log("submitting....");
        console.log({ values });

        execute({
            ...values,
        });
    }

    console.log({ errors, isLoading });
    console.log(form.formState.errors);
    console.log({ tickets });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pb-6  ">
                <div className="flex flex-col items-start gap-6 ">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Event Name</FormLabel>
                                <FormControl>
                                    <Input type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex items-center gap-8">
                        <FormField
                            control={form.control}
                            name="startDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Event starts on</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="date"
                                            onChange={(e) =>
                                                field.onChange(new Date(e.target.value))
                                            }
                                            // disabled={isFormSubmitting}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="endDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Event ends on</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="date"
                                            onChange={(e) =>
                                                field.onChange(new Date(e.target.value))
                                            }
                                            // disabled={isFormSubmitting}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="locationId"
                        render={({ field }) => (
                            <FormItem className="space-y-2">
                                <FormLabel>Location</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a location" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {isLocationLoading && (
                                            <Loader2 className="w-4 h-4 mx-auto animate-spin py-2" />
                                        )}

                                        {!locations ||
                                            (locations.length <= 0 && (
                                                <span className="text-neutral-400 text-sm pl-2">
                                                    No locations found!
                                                </span>
                                            ))}

                                        {locations &&
                                            locations.map((location) => (
                                                <SelectItem
                                                    key={location.id}
                                                    value={location.id}
                                                    className="capitalize truncate"
                                                >
                                                    {location.name}
                                                </SelectItem>
                                            ))}
                                        <Button
                                            className="block text-sm h-7 py-0 w-full mt-2"
                                            variant={"outline"}
                                            onClick={locationModal.onOpen}
                                        >
                                            Create
                                        </Button>
                                    </SelectContent>
                                </Select>
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
                <Button disabled={isSubmitting || isLoading}>Create</Button>
            </form>
        </Form>
    );
};
