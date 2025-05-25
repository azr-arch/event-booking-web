"use client";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { XCircle } from "lucide-react";
import { signInAction } from "@/actions/auth/sign-in";
import { useState, useTransition } from "react";
import Link from "next/link";

export const LoginForm = () => {
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    try {
      startTransition(async () => {
        const res = await signInAction(values);

        if (res?.error) {
          setError(res.error);
          return;
        }
      });
    } catch (error) {
      console.error({ error });
      throw error;
    }
  }

  const { isSubmitting } = form.formState;

  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card className="border-none shadow-none">
        <CardHeader className="text-start">
          <CardTitle className="text-2xl">Sign in to your account</CardTitle>
          <CardDescription>
            Access your bookings and upcoming events
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onChange={() => {
                if (error) setError("");
              }}
              // Making onsubmit call to validate field values
              // then passing validated results to server actions
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="email"
                disabled={isSubmitting || pending}
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
                disabled={isSubmitting || pending}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="⦁⦁⦁⦁⦁⦁⦁⦁"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {error && (
                <div className="p-2 rounded-sm space-x-2 flex items-start bg-red-100 dark:bg-red-900 text-red-500 dark:text-white fade-in-50 ">
                  <XCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">{error}</span>
                </div>
              )}

              <Button
                disabled={isSubmitting || pending}
                type="submit"
                className="w-full rounded-sm"
              >
                Login
              </Button>

              <div className="mt-4 text-center text-sm text-neutral-600">
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
