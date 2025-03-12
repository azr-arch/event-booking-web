import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { CalendarDays, Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";

const footerLinks = [
    {
        title: "Product",
        links: [
            { name: "Features", href: "#features" },
            { name: "FAQ", href: "#faq" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Blog", href: "#" },
            { name: "Event Planning Guide", href: "#" },
            { name: "Case Studies", href: "#" },
            { name: "Help Center", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About Us", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Contact Us", href: "#" },
            { name: "Privacy Policy", href: "#" },
        ],
    },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted/50 border-t border-border">
            <div className="container px-4 md:px-6 pt-10 pb-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <CalendarDays className="h-8 w-8 text-primary" />
                            <span className="text-xl font-semibold tracking-tight">Eventique</span>
                        </div>

                        <p className="text-muted-foreground mb-4 max-w-md">
                            The all-in-one platform for creating, managing, and hosting exceptional
                            events that leave lasting impressions.
                        </p>

                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-primary/10 transition-colors"
                                aria-label="Twitter"
                            >
                                <TwitterLogoIcon className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-primary/10 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-primary/10 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary hover:bg-primary/10 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {footerLinks.map((group, i) => (
                        <div key={i}>
                            <h3 className="font-semibold mb-4">{group.title}</h3>
                            <ul className="space-y-3">
                                {group.links.map((link, j) => (
                                    <li key={j}>
                                        <a
                                            href={link.href}
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-muted-foreground text-sm mb-4 md:mb-0">
                        &copy; {currentYear} Eventique. All rights reserved.
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <a href="#" className="hover:text-primary transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-primary transition-colors">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
