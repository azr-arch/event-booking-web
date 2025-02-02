"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LocationFormSchema } from "@/lib/validator";
import { venueFormDefaultValues } from "@/lib/constant";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useAction } from "@/hooks/use-action";
import { toast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { DialogFooter } from "../ui/dialog";
import { useLocationModal } from "@/hooks/use-location-modal";
import { createLocationAction } from "@/actions/create-location";

export const LocationForm = () => {
    const queryClient = useQueryClient();
    const { onClose } = useLocationModal();

    const { execute, isLoading, errors } = useAction(createLocationAction, {
        onSuccess: (data) => {
            toast({ description: `'${data.name}' venue created succesfully.` });
            // Remove the cache
            queryClient.invalidateQueries({ queryKey: ["locations"] });
            onClose();
        },
        onError: (error) => {
            toast({ title: error });
            console.log("Venue creating error");
        },
    });

    const form = useForm<z.infer<typeof LocationFormSchema>>({
        resolver: zodResolver(LocationFormSchema),
        defaultValues: venueFormDefaultValues,
    });

    function onSubmit(values: z.infer<typeof LocationFormSchema>) {
        const { name, address } = values;
        execute({ name, address });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
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
                    name="address"
                    render={({ field }) => (
                        <FormItem className="grid grid-cols-4 items-center gap-4">
                            <FormLabel className="text-right">Address</FormLabel>
                            <FormControl>
                                <Input disabled={isLoading} {...field} className="col-span-3" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

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
                        Create
                    </Button>
                </DialogFooter>
            </form>
        </Form>
    );
};
