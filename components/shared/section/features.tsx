import React from "react";
import { Calendar, CreditCard, Globe, QrCode, Search, Ticket, Users, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const attendeeFeatures = [
    {
        icon: <Search className="h-6 w-6" />,
        title: "Event Discovery",
        description: "Find events based on your interests, location, and availability.",
        color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300",
    },
    {
        icon: <Ticket className="h-6 w-6" />,
        title: "Easy Booking",
        description: "Secure your spot with just a few clicks and multiple payment options.",
        color: "bg-violet-50 text-violet-600 dark:bg-violet-900/20 dark:text-violet-300",
    },
    {
        icon: <Globe className="h-6 w-6" />,
        title: "Virtual Events",
        description: "Join online events from anywhere in the world with integrated video.",
        color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-300",
    },
    {
        icon: <QrCode className="h-6 w-6" />,
        title: "Digital Tickets",
        description: "Access your tickets anytime with mobile QR codes for quick entry.",
        color: "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-300",
    },
];

const organizerFeatures = [
    {
        icon: <Calendar className="h-6 w-6" />,
        title: "Event Creation",
        description: "Create and publish events with customizable registration pages.",
        color: "bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-300",
    },
    {
        icon: <Users className="h-6 w-6" />,
        title: "Attendee Management",
        description: "Track registrations, send updates, and manage your guest list.",
        color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-300",
    },
    {
        icon: <CreditCard className="h-6 w-6" />,
        title: "Ticket Sales",
        description: "Sell tickets with custom pricing tiers and promotional discounts.",
        color: "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-300",
    },
    {
        icon: <Zap className="h-6 w-6" />,
        title: "Analytics Dashboard",
        description: "Gain insights from comprehensive event metrics and attendee data.",
        color: "bg-cyan-50 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-300",
    },
];

const Features = () => {
    return (
        <section id="features" className="py-24 bg-secondary/50">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        A complete platform for <span className="text-gradient">everyone</span>
                    </h2>

                    <p className="text-muted-foreground text-lg">
                        Whether you&apos;re looking to attend amazing events or create your own,
                        we&apos;ve got you covered.
                    </p>
                </div>

                <div className="space-y-20">
                    {/* For Attendees */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-center mb-10">For Event Goers</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {attendeeFeatures.map((feature, index) => (
                                <div key={index} className="h-full">
                                    <div className="relative group h-full">
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-background/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="h-full glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-elevated">
                                            <div
                                                className={cn(
                                                    "p-3 rounded-xl w-fit mb-4",
                                                    feature.color
                                                )}
                                            >
                                                {feature.icon}
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-muted-foreground">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* For Organizers */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-center mb-10">
                            For Event Organizers
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {organizerFeatures.map((feature, index) => (
                                <div key={index} className="h-full">
                                    <div className="relative group h-full">
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-background/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="h-full glass-card p-6 rounded-2xl transition-all duration-300 hover:shadow-elevated">
                                            <div
                                                className={cn(
                                                    "p-3 rounded-xl w-fit mb-4",
                                                    feature.color
                                                )}
                                            >
                                                {feature.icon}
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-muted-foreground">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
