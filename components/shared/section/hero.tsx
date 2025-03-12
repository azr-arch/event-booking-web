import { Button } from "@/components/ui/button";
import { Calendar, Search, Ticket, Users } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden">
            <div className="hero-glow"></div>
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-block py-1 px-3 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
                            Your all-in-one event platform
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight md:leading-tight lg:leading-tight">
                            Discover & create <span className="text-gradient">amazing</span> events
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                            Find and book tickets to exciting events around you, or create and
                            manage your own events with our powerful platform.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Button size="lg" className="rounded-full">
                                <Search className="mr-2 h-5 w-5" />
                                Find Events
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full">
                                <Calendar className="mr-2 h-5 w-5" />
                                Host an Event
                            </Button>
                        </div>

                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <div className="flex -space-x-2">
                                {[...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-8 h-8 rounded-full border-2 border-background flex items-center justify-center bg-muted"
                                    >
                                        <Users size={14} />
                                    </div>
                                ))}
                            </div>
                            <span>Trusted by 10,000+ attendees & organizers</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -top-8 -left-8 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

                        <div className="relative bg-white dark:bg-gray-900 p-1 rounded-2xl shadow-elevated overflow-hidden border border-gray-200/50 dark:border-gray-800/50">
                            <div className="p-4 bg-gradient-to-b from-primary/5 to-transparent rounded-t-xl border-b border-gray-200/50 dark:border-gray-800/50">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="h-6 w-6 text-primary" />
                                        <h3 className="font-medium">Popular Events</h3>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                                        <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                                        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 space-y-4">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-medium">November 2023</h4>
                                    <div className="flex space-x-2">
                                        <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-chevron-left"
                                            >
                                                <path d="m15 18-6-6 6-6" />
                                            </svg>
                                        </button>
                                        <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-chevron-right"
                                            >
                                                <path d="m9 18 6-6-6-6" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-7 gap-2">
                                    {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                                        <div
                                            key={i}
                                            className="text-center text-xs font-medium text-muted-foreground"
                                        >
                                            {day}
                                        </div>
                                    ))}

                                    {Array.from({ length: 31 }, (_, i) => {
                                        const hasEvent = [5, 12, 18, 24, 29].includes(i);
                                        const isToday = i === 14;
                                        return (
                                            <div
                                                key={i}
                                                className={`
                            aspect-square flex items-center justify-center text-sm rounded-full relative
                            ${isToday ? "bg-primary text-white font-medium" : ""}
                            ${hasEvent && !isToday ? "font-medium" : ""}
                            hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer
                          `}
                                            >
                                                {i + 1}
                                                {hasEvent && (
                                                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="px-5 pb-5 space-y-3">
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                        <Ticket size={16} className="text-primary" />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="text-sm font-medium">
                                            Tech Conference 2023
                                        </h4>
                                        <p className="text-xs text-muted-foreground">
                                            Nov 18 • San Francisco
                                        </p>
                                    </div>
                                    <Button size="sm" className="shrink-0">
                                        Book
                                    </Button>
                                </div>

                                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                        <Calendar size={16} className="text-primary" />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="text-sm font-medium">Music Festival</h4>
                                        <p className="text-xs text-muted-foreground">
                                            Nov 24-26 • Austin
                                        </p>
                                    </div>
                                    <Button size="sm" className="shrink-0">
                                        Book
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
