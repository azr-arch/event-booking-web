import { useState, useCallback } from "react";

type Action<TInput, TOutput> = (data: TInput) => Promise<{ data?: TOutput; error?: string }>;

interface UseActionOptions<TOutput> {
    onSuccess?: (data: TOutput) => void;
    onError?: (error: string) => void;
    onComplete?: () => void;
}

export const useAction = <TInput, TOutput>(
    action: Action<TInput, TOutput>,
    options: UseActionOptions<TOutput> = {}
) => {
    const [errors, setErrors] = useState<string | undefined>();
    const [data, setData] = useState<TOutput | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const execute = useCallback(
        async (input: TInput) => {
            setIsLoading(true);
            setErrors(undefined); // Reset errors
            try {
                const result = await action(input); // Execute the action
                if (result?.error) {
                    setErrors(result.error);
                    options.onError?.(result.error); // Trigger onError callback
                } else if (result?.data) {
                    setData(result.data);
                    options.onSuccess?.(result.data); // Trigger onSuccess callback
                }
            } catch (error) {
                setErrors(String(error));
                options.onError?.(String(error)); // Handle unexpected errors
            } finally {
                setIsLoading(false);
                options.onComplete?.(); // Trigger onComplete callback
            }
        },
        [action, options]
    );

    return {
        execute, // Function to trigger the action
        errors, // Any errors encountered
        data, // Data from the action
        isLoading, // Loading state
    };
};
