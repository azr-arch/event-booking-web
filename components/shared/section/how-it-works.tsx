import { OrganizerStepIllustrations, ParticipantStepIllustrations } from "@/lib/constants";
import { User, Calendar, Star, Clipboard, Search, Settings, Ticket, Users } from "lucide-react";

const oragnizerSteps = [
    {
        icon: <User />,
        title: "Create Your Account",
        description: "Sign up in seconds and get immediate access to all features.",
    },
    {
        icon: <Calendar />,
        title: "Set Up Your Event",
        description: "Add event details, create tickets, and customize registration forms.",
    },
    {
        icon: <Star />,
        title: "Personalize Experience",
        description: "Brand your event page, send custom emails, and set up reminders.",
    },
    {
        icon: <Clipboard />,
        title: "Manage Registrations",
        description: "Track sign-ups, process payments, and organize attendee information.",
    },
];

const participantSteps = [
    {
        icon: <Search />,
        title: "Browse Events",
        description: "Find events that match your interests, location, and schedule.",
    },
    {
        icon: <Settings />,
        title: "Personalize Experience",
        description: "Create your profile and set preferences for event recommendations.",
    },
    {
        icon: <Ticket />,
        title: "Secure Your Spot",
        description: "Register with ease and manage all your tickets in one place.",
    },
    {
        icon: <Users />,
        title: "Enjoy & Connect",
        description: "Attend events, network with like-minded people, and share experiences.",
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-70"></div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">
                How Eventique <span className="text-gradient">Works</span>
            </h2>

            <div className="container px-4 md:px-6 relative mt-10">
                <div className="text-start max-w-3xl mx-auto mb-16">
                    <h3 className="text-blue-400 font-semibold text-2xl text-gradient-b">
                        For Organizers
                    </h3>
                    <p className="text-muted-foreground text-lg">
                        Follow these simple steps to create and manage your perfect event in minutes
                    </p>
                </div>

                {/* For organizers */}
                <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                    {oragnizerSteps.map((step, index) => (
                        <div key={index} className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                            <div className="glass-card h-full p-6 rounded-2xl relative bg-white dark:bg-gray-900 overflow-hidden group-hover:shadow-md transition-all duration-300">
                                <span className="absolute top-4 right-4 w-12 h-12 rounded-full  text-primary/30  flex items-center justify-center text-lg font-semibold">
                                    {index + 1}
                                </span>

                                <div className="h-28 mb-6 flex items-center justify-center text-primary">
                                    {OrganizerStepIllustrations[index]}
                                </div>

                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container px-4 md:px-6 relative mt-14">
                <div className="text-start max-w-3xl mx-auto mb-16">
                    <h3 className="text-gradient-b font-semibold text-2xl">For Participants</h3>
                    <p className="text-muted-foreground text-lg">
                        Discover and join amazing events with just a few simple steps
                    </p>
                </div>

                {/* For organizers */}
                <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                    {participantSteps.map((step, index) => (
                        <div key={index} className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                            <div className="glass-card h-full p-6 rounded-2xl relative bg-white dark:bg-gray-900 overflow-hidden group-hover:shadow-md transition-all duration-300">
                                <span className="absolute top-4 right-4 w-12 h-12 rounded-full  text-primary/30  flex items-center justify-center text-lg font-semibold">
                                    {index + 1}
                                </span>

                                <div className="h-28 mb-6 flex items-center justify-center text-primary">
                                    {ParticipantStepIllustrations[index]}
                                </div>

                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
