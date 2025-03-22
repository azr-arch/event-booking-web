"use server";

import { signIn } from "@/auth";

export async function signInAction({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    await signIn("credentials", { email, password });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error) {
    // Handling NEXT_REDIRECT_ERROR
    if ((error as Error).message.includes("NEXT_REDIRECT")) {
      return {
        error: "Please refresh to move forward, working on this issue!",
      };
    }
    return {
      error: (error as Error).message || "Login failed, try again later.",
    };
  }
}
