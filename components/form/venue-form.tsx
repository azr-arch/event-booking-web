"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { VenueFormSchema } from "@/lib/validator";
import { venueFormDefaultValues } from "@/lib/constant";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useAction } from "@/hooks/use-action";
import { createVenueAction } from "@/actions/create-venue";
import { toast } from "@/hooks/use-toast";
import { useVenueModal } from "@/hooks/use-venue-modal";
import { useQueryClient } from "@tanstack/react-query";
import { DialogFooter } from "../ui/dialog";

export const VenueForm = () => {
    const queryClient = useQueryClient();
    const { onClose } = useVenueModal();

    const { execute, isLoading, errors } = useAction(createVenueAction, {
        onSuccess: (data) => {
            toast({ description: `'${data.name}' venue created succesfully.` });
            // Remove the cache
            queryClient.invalidateQueries({ queryKey: ["venues"] });
            onClose();
        },
        onError: (error) => {
            toast({ title: error });
            console.log("Venue creating error");
        },
    });

    const form = useForm<z.infer<typeof VenueFormSchema>>({
        resolver: zodResolver(VenueFormSchema),
        defaultValues: venueFormDefaultValues,
    });

    function onSubmit(values: z.infer<typeof VenueFormSchema>) {
        const { name, location, capacity } = values;
        execute({ name, location, capacity });
    }

    return (
        <Form {...form}>
            {/* I am using <Form /> from shadcnui, with zod and react form hook
                usually, form.handleSubmit(onSubmit) should be called from 'form's' onSubmit
             but i want to incorporate form submission using action, but doing so, not triggering
             the zod form validation, how do i implement what i want 
             */}
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
                <div className="">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                                <FormLabel className="text-right">Name</FormLabel>
                                <FormControl>
                                    <Input disabled={isLoading} className="col-span-3" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                                <FormLabel className="text-right">Location</FormLabel>
                                <FormControl>
                                    <Input disabled={isLoading} {...field} className="col-span-3" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="capacity"
                        render={({ field }) => (
                            <FormItem className="grid grid-cols-4 items-center gap-4">
                                <FormLabel className="text-right">Capacity</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        {...field}
                                        // Convert the value to a number
                                        onChange={(e) => field.onChange(Number(e.target.value))}
                                        disabled={isLoading}
                                        className="col-span-3"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                {errors && (
                    <p aria-label="error" className="text-sm font-medium text-red-500 my-4">
                        {errors}
                    </p>
                )}
                <DialogFooter>
                    <Button type="button" variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button disabled={isLoading} type="submit">
                        Create Venue
                    </Button>
                </DialogFooter>
            </form>
        </Form>
    );
};
