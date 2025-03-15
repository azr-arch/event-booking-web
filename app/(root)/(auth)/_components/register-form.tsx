"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { signUpSchema } from "@/lib/validator";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { LoaderCircleIcon, XCircle } from "lucide-react";
import { register } from "@/actions/auth/register";
import { useState } from "react";
import Link from "next/link";

export const RegisterForm = () => {
    const [error, setError] = useState("");

    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof signUpSchema>) {
        try {
            const res = await register(values);
            if (res?.error) {
                setError(res.error);
                return;
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
            setError(e?.message ?? "Something went wrong");
            console.log(e);
        }
    }

    const { isSubmitting } = form.formState;

    return (
        <div className={cn("flex flex-col gap-6")}>
            <Card className="border-0 shadow-none">
                <CardHeader>
                    <CardTitle className="text-2xl">Create an account</CardTitle>
                    <CardDescription>Join us to discover and book amazing events</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            onChange={() => {
                                // Clearing out error
                                if (error) {
                                    setError("");
                                }
                            }}
                            className="space-y-4"
                        >
                            <FormField
                                control={form.control}
                                name="name"
                                disabled={isSubmitting}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="John doe" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                disabled={isSubmitting}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="johndoe@example.com"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                disabled={isSubmitting}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="••••••••"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {error && (
                                <div className="p-2 rounded-sm space-x-2 flex items-center bg-red-100 text-red-500 fade-in-50 ">
                                    <XCircle className="w-4 h-4" />
                                    <span className="text-sm font-medium">{error}</span>
                                </div>
                            )}

                            <Button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full rounded-sm"
                            >
                                {isSubmitting ? (
                                    <LoaderCircleIcon className="animate-spin" />
                                ) : (
                                    "Create an account"
                                )}
                            </Button>

                            <div className="mt-4 text-center text-sm text-neutral-600">
                                Have an account?{" "}
                                <Link href="/sign-in" className="underline underline-offset-4">
                                    Sign In
                                </Link>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};
