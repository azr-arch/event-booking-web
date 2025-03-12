"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserNav from "./user-nav";

const navItems = [
    {
        label: "Overview",
        href: "/dashboard",
    },
    {
        label: "Events",
        href: "/events",
    },
    {
        label: "Venues",
        href: "/venues",
    },
    {
        label: "Settings",
        href: "/settings",
    },
];

export const Header = () => {
    const pathname = usePathname();

    return (
        <header className="h-16 px-6 flex items-center border-b border-neutral-200 dark:border-neutral-700 mb-6">
            <nav>
                <ul className="flex items-center gap-x-7">
                    {navItems.map((item) => (
                        <li
                            key={item.href}
                            className={cn(
                                "font-medium text-sm hover:text-black dark:hover:text-white",
                                pathname === item.href
                                    ? "text-black dark:text-white"
                                    : "text-neutral-400"
                            )}
                        >
                            <Link href={item.href} className="text-inherit">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <UserNav />
        </header>
    );
};
