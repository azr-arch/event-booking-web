"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  CalendarFoldIcon,
  LayoutDashboardIcon,
  MapPinIcon,
  PlusCircleIcon,
  SettingsIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ICON_STYLES = "w-4 h-4";

const navItems = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: <LayoutDashboardIcon className={ICON_STYLES} />,
  },
  {
    label: "Events",
    href: "/admin/events",
    icon: <CalendarFoldIcon className={ICON_STYLES} />,
  },
  {
    label: "Venues",
    href: "/admin/venues",
    icon: <MapPinIcon className={ICON_STYLES} />,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: <SettingsIcon className={ICON_STYLES} />,
  },
];

export const AdminNav = () => {
  const pathname = usePathname();

  return (
    <nav className="pr-1">
      <Link href="/admin/events/new">
        <Button
          variant={"default"}
          className="w-full mb-3 h-9 px-3 py-0 justify-start font-normal   rounded-lg"
        >
          <PlusCircleIcon />
          New Event
        </Button>
      </Link>

      <ul className=" space-y-1">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "h-9 flex hover:text-accent hover:bg-primary-hover items-center gap-3 text-sm px-3 rounded-lg transition-colors duration-150",
                pathname === item.href
                  ? "bg-primary-active text-accent" // active state
                  : "" // non active
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
