"use server";

import { signIn } from "@/auth";
import { prismaDb } from "@/lib/db";

export async function signInAction({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    // this is workaround for redirect
    const currentUser = await prismaDb.user.findUnique({
      where: {
        email,
      },
      select: {
        role: true,
      },
    });

    if (!currentUser) {
      return {
        error: "No account is registered with given email",
      };
    }

    let redirectUrl = "/";

    if (currentUser.role === "ADMIN" || currentUser.role === "ORGANIZER") {
      redirectUrl = "/admin/dashboard";
    } else if (currentUser.role === "ATTENDEE") {
      redirectUrl = "/app";
    }

    await signIn("credentials", {
      email,
      password,
      redirectTo: redirectUrl,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error) {
    // Handling NEXT_REDIRECT_ERROR
    if ((error as Error).message.includes("NEXT_REDIRECT")) {
      throw error;
    }
    return {
      error: (error as Error).message || "Login failed, try again later.",
    };
  }
}
