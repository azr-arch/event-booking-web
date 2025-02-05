import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { hash, compare } from "bcryptjs";

const SALT_ROUNDS = 12;

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
};

export const hashPassword = (password: string) => {
    return hash(password, SALT_ROUNDS);
};

export const comparePassword = (plainPassword: string, hashPassword: string) => {
    return compare(plainPassword, hashPassword);
};
