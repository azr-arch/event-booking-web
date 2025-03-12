import { User, Calendar, Star, Clipboard, CheckCircle, Zap } from "lucide-react";

const StepIllustrations = [
    // User account creation
    <svg
        key="signup"
        className="w-full h-full"
        viewBox="0 0 200 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="100"
            cy="50"
            r="25"
            fill="currentColor"
            fillOpacity="0.1"
            className="animate-pulse"
        />
        <circle cx="100" cy="50" r="20" stroke="currentColor" strokeWidth="2" />
        <circle cx="100" cy="45" r="6" fill="currentColor" />
        <path
            d="M115 70C115 61.716 108.284 55 100 55C91.7157 55 85 61.716 85 70"
            stroke="currentColor"
            strokeWidth="2"
        />
        <rect x="70" y="90" width="60" height="10" rx="2" fill="currentColor" fillOpacity="0.1" />
        <rect x="70" y="105" width="60" height="10" rx="2" fill="currentColor" fillOpacity="0.1" />
        <rect
            x="85"
            y="120"
            width="30"
            height="10"
            rx="2"
            fill="currentColor"
            fillOpacity="0.2"
            className="animate-pulse"
        />
    </svg>,

    // Event setup
    <svg
        key="setup"
        className="w-full h-full"
        viewBox="0 0 200 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect x="50" y="30" width="100" height="90" rx="4" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="50" x2="150" y2="50" stroke="currentColor" strokeWidth="2" />
        <rect x="60" y="35" width="6" height="10" rx="1" fill="currentColor" />
        <rect x="134" y="35" width="6" height="10" rx="1" fill="currentColor" />
        <rect x="60" y="60" width="12" height="12" rx="2" fill="currentColor" fillOpacity="0.2" />
        <rect x="80" y="60" width="12" height="12" rx="2" fill="currentColor" fillOpacity="0.2" />
        <rect
            x="100"
            y="60"
            width="12"
            height="12"
            rx="2"
            fill="currentColor"
            fillOpacity="0.2"
            className="animate-pulse"
        />
        <rect x="120" y="60" width="12" height="12" rx="2" fill="currentColor" fillOpacity="0.2" />
        <rect x="60" y="80" width="12" height="12" rx="2" fill="currentColor" fillOpacity="0.2" />
        <rect x="80" y="80" width="12" height="12" rx="2" fill="currentColor" fillOpacity="0.2" />
        <rect x="100" y="80" width="12" height="12" rx="2" fill="currentColor" fillOpacity="0.2" />
        <rect x="120" y="80" width="12" height="12" rx="2" fill="currentColor" fillOpacity="0.2" />
        <rect x="60" y="100" width="72" height="10" rx="2" fill="currentColor" fillOpacity="0.1" />
    </svg>,

    // Personalize experience
    <svg
        key="personalize"
        className="w-full h-full"
        viewBox="0 0 200 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect x="40" y="30" width="120" height="80" rx="4" stroke="currentColor" strokeWidth="2" />
        <rect x="50" y="45" width="100" height="50" rx="2" fill="currentColor" fillOpacity="0.05" />
        <circle cx="100" cy="70" r="18" fill="currentColor" fillOpacity="0.1" />
        <path
            d="M92 70L98 76L108 66"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-pulse"
        />
        <path
            d="M160 90L180 110M180 90L160 110"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        >
            <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 170 100"
                to="360 170 100"
                dur="5s"
                repeatCount="indefinite"
            />
        </path>
        <rect x="50" y="110" width="100" height="10" rx="2" fill="currentColor" fillOpacity="0.1" />
    </svg>,

    // Manage registrations
    <svg
        key="manage"
        className="w-full h-full"
        viewBox="0 0 200 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect x="40" y="30" width="120" height="90" rx="4" stroke="currentColor" strokeWidth="2" />
        <line x1="40" y1="50" x2="160" y2="50" stroke="currentColor" strokeWidth="2" />
        <rect x="50" y="60" width="100" height="8" rx="2" fill="currentColor" fillOpacity="0.1" />
        <rect x="50" y="75" width="100" height="8" rx="2" fill="currentColor" fillOpacity="0.1" />
        <rect x="50" y="90" width="100" height="8" rx="2" fill="currentColor" fillOpacity="0.1" />
        <rect x="50" y="105" width="100" height="8" rx="2" fill="currentColor" fillOpacity="0.1" />
        <circle cx="170" cy="40" r="16" fill="currentColor" fillOpacity="0.1">
            <animate
                attributeName="opacity"
                values="0.1;0.3;0.1"
                dur="2s"
                repeatCount="indefinite"
            />
        </circle>
        <text x="166" y="45" fontSize="14" fontWeight="bold" fill="currentColor">
            +
        </text>
    </svg>,

    // Host event
    <svg
        key="host"
        className="w-full h-full"
        viewBox="0 0 200 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect x="30" y="30" width="140" height="90" rx="4" stroke="currentColor" strokeWidth="2" />
        <rect x="40" y="45" width="60" height="60" rx="2" fill="currentColor" fillOpacity="0.05" />
        <path
            d="M60 65L70 75L80 55"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-pulse"
        />
        <rect x="110" y="45" width="50" height="10" rx="2" fill="currentColor" fillOpacity="0.1" />
        <rect x="110" y="60" width="50" height="10" rx="2" fill="currentColor" fillOpacity="0.1" />
        <rect x="110" y="75" width="50" height="10" rx="2" fill="currentColor" fillOpacity="0.1" />
        <rect x="110" y="90" width="30" height="10" rx="2" fill="currentColor" fillOpacity="0.2" />
    </svg>,

    // Analyze & Improve
    <svg
        key="analyze"
        className="w-full h-full"
        viewBox="0 0 200 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect x="40" y="40" width="120" height="70" rx="4" stroke="currentColor" strokeWidth="2" />
        <line x1="60" y1="110" x2="60" y2="50" stroke="currentColor" strokeWidth="2" />
        <line x1="40" y1="90" x2="160" y2="90" stroke="currentColor" strokeWidth="2" />
        <rect x="70" y="70" width="10" height="20" fill="currentColor" fillOpacity="0.2" />
        <rect
            x="90"
            y="60"
            width="10"
            height="30"
            fill="currentColor"
            fillOpacity="0.4"
            className="animate-pulse"
        />
        <rect x="110" y="75" width="10" height="15" fill="currentColor" fillOpacity="0.2" />
        <rect x="130" y="65" width="10" height="25" fill="currentColor" fillOpacity="0.3" />
        <path
            d="M65 55C65 55 75 40 95 50C115 60 135 45 135 45"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="2 2"
        >
            <animate
                attributeName="stroke-dashoffset"
                from="4"
                to="0"
                dur="1.5s"
                repeatCount="indefinite"
            />
        </path>
    </svg>,
];

const steps = [
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
    {
        icon: <CheckCircle />,
        title: "Host Your Event",
        description: "Use our mobile check-in tools and manage the event in real-time.",
    },
    {
        icon: <Zap />,
        title: "Analyze & Improve",
        description: "Review detailed analytics and gather feedback for your next event.",
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-70"></div>

            <div className="container px-4 md:px-6 relative">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        How Eventique <span className="text-gradient">Works</span>
                    </h2>

                    <p className="text-muted-foreground text-lg">
                        Follow these simple steps to create and manage your perfect event in minutes
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                            <div className="glass-card h-full p-6 rounded-2xl relative bg-white dark:bg-gray-900 overflow-hidden group-hover:shadow-md transition-all duration-300">
                                <span className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-semibold">
                                    {index + 1}
                                </span>

                                <div className="h-28 mb-6 flex items-center justify-center text-primary">
                                    {StepIllustrations[index]}
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
