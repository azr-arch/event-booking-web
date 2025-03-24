import { prismaDb } from "@/lib/db";
import { User } from "@prisma/client";

export const getUser = async ({ email }: { email: string }) => {
  const user = await prismaDb.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw Error("User not found");
  }

  return user;
};

export const getExistingUser = async ({
  email,
}: {
  email: string;
}): Promise<User | null> => {
  const existingUser = await prismaDb.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return existingUser;
  }

  return null;
};
