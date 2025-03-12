import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const TicketManager = ({ disabled = false }: { disabled?: boolean }) => {
    const { control, watch } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control, // Attach to form control
        name: "tickets", // Ticket data
    });
    watch("tickets", []);

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Tickets</h3>
                <Button
                    type="button"
                    onClick={() => append({ type: "", price: 0 })}
                    variant="outline"
                    disabled={disabled}
                >
                    Add Ticket Type
                </Button>
            </div>
            {fields.length === 0 ? (
                <div className="text-center text-sm py-8 border border-dashed rounded-md">
                    <p className="text-gray-500">No ticket types added yet.</p>
                    <p className="text-gray-500">
                        Click &apos;Add Ticket Type&apos; to create your first ticket.
                    </p>
                </div>
            ) : (
                fields.map((field, index) => (
                    <div
                        key={field.id}
                        className="grid relative grid-cols-1 md:grid-cols-3 gap-4 p-4 border rounded-md"
                    >
                        <Button
                            size={"icon"}
                            variant={"outline"}
                            className="absolute top-4 right-4 w-5 h-5"
                            type="button"
                            onClick={() => remove(index)} // Remove ticket
                        >
                            <X className="size-3" />
                        </Button>

                        {/* Use FormInput for Ticket fields */}
                        <FormField
                            control={control}
                            name="type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ticket Type</FormLabel>
                                    <FormControl>
                                        <Input type="text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Price</FormLabel>
                                    <FormControl>
                                        <Input type="text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex items-center">
                            <FormField
                                control={control}
                                name="startSaleDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Ticket sale starts on</FormLabel>
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
                                control={control}
                                name="endSaleDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Ticket sale ends on</FormLabel>
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
                    </div>
                ))
            )}
        </div>
    );
};
