import { cn } from "@/lib/utils";
import { CalendarDays } from "lucide-react";
import Link from "next/link";

export const Logo = ({
  iconClassName,
  iconTextClassName,
  url = "/",
}: {
  iconClassName?: string;
  iconTextClassName?: string;
  url?: string;
}) => {
  return (
    <div className="flex items-center">
      <Link href={url} className="flex items-center space-x-2">
        <CalendarDays className={cn("h-8 w-8 text-primary", iconClassName)} />
        <span
          className={cn(
            "text-xl font-semibold tracking-tight",
            iconTextClassName
          )}
        >
          Eventique
        </span>
      </Link>
    </div>
  );
};
