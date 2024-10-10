import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { FormInput } from "@/components/form/form-input";

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
                    onClick={() => append({ name: "", price: 0, quantity: 0 })}
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
                        <FormInput
                            name={`tickets.${index}.name`}
                            label="Type"
                            placeholder="e.g., VIP, Regular"
                            // disabled={disabled}
                        />

                        <FormInput
                            name={`tickets.${index}.price`}
                            label="Price"
                            type="number"
                            // disabled={disabled}
                        />

                        <FormInput
                            name={`tickets.${index}.quantity`}
                            label="Quantity"
                            type="number"
                            // disabled={disabled}
                        />
                    </div>
                ))
            )}
        </div>
    );
};
