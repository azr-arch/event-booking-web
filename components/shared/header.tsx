"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Menu, Search, Ticket, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const navLinks = [
    { name: "Discover Events", href: "#events", icon: <Search className="h-4 w-4 mr-1" /> },
    { name: "Features", href: "#features", icon: null },
    { name: "How it Works", href: "#how-it-works", icon: null },
    { name: "Pricing", href: "#pricing", icon: null },
    { name: "For Organizers", href: "#organizers", icon: <Ticket className="h-4 w-4 mr-1" /> },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10",
                scrolled
                    ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center">
                        <a href="#" className="flex items-center space-x-2">
                            <CalendarDays className="h-8 w-8 text-primary" />
                            <span className="text-xl font-semibold tracking-tight">Eventique</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        <ul className="flex space-x-1">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="px-3 py-2 text-sm rounded-md transition-colors hover:text-primary flex items-center"
                                    >
                                        {link.icon}
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost" size="sm">
                            Log In
                        </Button>
                        <Button>Sign Up</Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div
                    className={cn(
                        "fixed inset-0 top-[72px] z-50 bg-white dark:bg-gray-950 md:hidden transform transition-transform duration-300 ease-in-out",
                        mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    )}
                >
                    <div className="p-6 space-y-6">
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="block py-2 text-lg transition-colors hover:text-primary flex items-center"
                                        onClick={toggleMobileMenu}
                                    >
                                        {link.icon}
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                            <Button variant="ghost" className="w-full justify-start" size="lg">
                                Log In
                            </Button>
                            <Button className="w-full" size="lg">
                                Sign Up
                            </Button>
                            <div className="pt-4">
                                <Button variant="outline" className="w-full" size="lg">
                                    <CalendarDays className="mr-2 h-5 w-5" />
                                    Organizer Login
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
