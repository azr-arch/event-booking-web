import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext, Controller } from "react-hook-form";

interface FormInputProps {
    name: string; // Field name for useForm
    label: string; // Label for the field
    placeholder?: string; // Placeholder for input
    type?: string; // Type of input (text, number, date, etc.)
    isTextarea?: boolean; // Whether it's a textarea field
    disabled?: boolean; // Whether it's a textarea field
}

export const FormInput = ({
    name,
    label,
    placeholder = "",
    type = "text",
    isTextarea = false,
    disabled = false,
}: FormInputProps) => {
    const { control } = useFormContext(); // Get control from the form context

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        {isTextarea ? (
                            <Textarea placeholder={placeholder} disabled={disabled} {...field} />
                        ) : (
                            <Input
                                type={type}
                                placeholder={placeholder}
                                disabled={disabled}
                                {...field}
                                onChange={(e) =>
                                    field.onChange(
                                        type === "number"
                                            ? Number(e.target.value)
                                            : type === "date"
                                            ? new Date(e.target.value)
                                            : e.target.value
                                    )
                                }
                            />
                        )}
                    </FormControl>
                    {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                </FormItem>
            )}
        />
    );
};
