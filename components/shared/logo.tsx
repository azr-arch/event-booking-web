import { CalendarDays } from "lucide-react";
import Link from "next/link";

export const Logo = () => {
    return (
        <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
                <CalendarDays className="h-8 w-8 text-primary" />
                <span className="text-xl font-semibold tracking-tight">Eventique</span>
            </Link>
        </div>
    );
};
