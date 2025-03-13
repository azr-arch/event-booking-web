/* eslint-disable @typescript-eslint/no-explicit-any */
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

function shallowEqual(obj1: Record<string, any>, obj2: Record<string, any>): boolean {
    return (
        obj1 === obj2 ||
        (typeof obj1 === "object" &&
            typeof obj2 === "object" &&
            Object.keys(obj1).length === Object.keys(obj2).length &&
            Object.keys(obj1).every((key) => obj1[key] === obj2[key]))
    );
}

export function deepEqual(obj1: Record<string, any>, obj2: Record<string, any>): boolean {
    if (shallowEqual(obj1, obj2)) {
        return true;
    }

    if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}
