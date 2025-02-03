"use client";

import { useFieldArray, useForm } from "react-hook-form";
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
import { Textarea } from "@/components/ui/textarea";

export const EventForm = () => {
    const { data: locations, isLoading: isLocationLoading } = useLocation();
    const locationModal = useLocationModal();

    const form = useForm<z.infer<typeof EventFormSchema>>({
        resolver: zodResolver(EventFormSchema),
        defaultValues: eventFormDefaultValues,
    });

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "tickets",
    });

    const { execute, isLoading } = useAction(createEventAction, {
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

    const isSubmitting = form.formState.isSubmitting || isLoading;

    function onSubmit(values: z.infer<typeof EventFormSchema>) {
        execute({
            ...values,
            startDate: new Date(values.startDate),
            endDate: new Date(values.endDate),
            tickets: values.tickets.map((ticket) => ({
                ...ticket,
                startSale: new Date(ticket.startSale),
                endSale: new Date(ticket.endSale),
            })),
        });
    }

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

                    {/* Event dates */}
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

                    {/* Location selection */}
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
                                        {isLocationLoading ? (
                                            <Loader2 className="w-4 h-4 mx-auto animate-spin" />
                                        ) : locations?.length ? (
                                            locations.map((location) => (
                                                <SelectItem key={location.id} value={location.id}>
                                                    {location.name}
                                                </SelectItem>
                                            ))
                                        ) : (
                                            <div className="p-2 text-center text-muted-foreground">
                                                No locations found
                                            </div>
                                        )}
                                        <Button
                                            variant="ghost"
                                            className="w-full mt-2"
                                            onClick={locationModal.onOpen}
                                        >
                                            Create New Location
                                        </Button>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                {/* Event Description */}
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    {...field}
                                    placeholder="Describe your event..."
                                    className="min-h-[100px]"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h3 className="text-sm font-medium">Tickets</h3>
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() =>
                                append({
                                    type: "New Ticket Type",
                                    price: 0,
                                    quantity: 0,
                                    startSale: new Date(),
                                    endSale: new Date(),
                                })
                            }
                        >
                            Add Ticket
                        </Button>
                    </div>

                    {fields.map((field, index) => (
                        <div key={field.id} className="space-y-4 border p-4 rounded-lg">
                            <div className="flex justify-end">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => remove(index)}
                                >
                                    Remove
                                </Button>
                            </div>

                            <FormField
                                control={form.control}
                                name={`tickets.${index}.type`}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Ticket Type</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                {...field}
                                                placeholder="Ticket type"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name={`tickets.${index}.price`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Price</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    {...field}
                                                    onChange={(e) =>
                                                        field.onChange(Number(e.target.value))
                                                    }
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name={`tickets.${index}.quantity`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Quantity</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    {...field}
                                                    onChange={(e) =>
                                                        field.onChange(Number(e.target.value))
                                                    }
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name={`tickets.${index}.startSale`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Sale Start</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="datetime-local"
                                                    {...field}
                                                    value={field.value.toISOString().slice(0, 16)}
                                                    onChange={(e) =>
                                                        field.onChange(new Date(e.target.value))
                                                    }
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name={`tickets.${index}.endSale`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Sale End</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="datetime-local"
                                                    {...field}
                                                    value={field.value.toISOString().slice(0, 16)}
                                                    onChange={(e) =>
                                                        field.onChange(new Date(e.target.value))
                                                    }
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-end">
                    <Button type="submit" disabled={isSubmitting}>
                        Create Event
                    </Button>
                </div>
            </form>
        </Form>
    );
};
