"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
        <header className="h-14 flex items-center border-b border-neutral-200 mb-6">
            <nav>
                <ul className="flex items-center gap-x-4">
                    {navItems.map((item) => (
                        <li
                            key={item.href}
                            className={cn(
                                "font-medium text-sm hover:text-black",
                                pathname === item.href ? "text-black" : "text-neutral-500"
                            )}
                        >
                            <Link href={item.href} className="text-inherit">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
