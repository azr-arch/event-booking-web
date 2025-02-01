"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { signInSchema } from "@/lib/validator";
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
import { signInAction } from "@/actions/auth/sign-in";
import { useState } from "react";
import Link from "next/link";

export const LoginForm = () => {
    const [error, setError] = useState("");

    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof signInSchema>) {
        try {
            const res = await signInAction(values);

            if (res?.error) {
                // setError(res.error);
                return;
            }
        } catch (error) {
            console.error({ error });
        }
    }

    const { isSubmitting } = form.formState;

    return (
        <div className={cn("flex flex-col gap-6")}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onChange={() => {
                                if (error) setError("");
                            }}
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4"
                        >
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
                                                placeholder="Enter your email address"
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
                                                placeholder="Enter password"
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

                            <Button disabled={isSubmitting} type="submit" className="w-full">
                                {isSubmitting ? (
                                    <LoaderCircleIcon className="animate-spin" />
                                ) : (
                                    "Login"
                                )}
                            </Button>

                            <div className="mt-4 text-center text-sm text-violet-500">
                                Don&apos;t have an account?{" "}
                                <Link href="/sign-up" className="underline underline-offset-4">
                                    Sign up
                                </Link>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};
