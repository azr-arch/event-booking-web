"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Sidebar } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const DashboardHeader = () => {
  return (
    <header className="h-12 w-full px-6 flex items-center">
      {/* Tihs will be sidebar trigger */}
      <Button size={"icon"} variant={"ghost"} className=" -ml-2">
        <Sidebar className="w-4 h-4" />
      </Button>
      <Separator orientation="vertical" className="h-5 mx-3" />
      <div>
        <Breadcrumb />
      </div>
    </header>
  );
};

const Breadcrumb = () => {
  const pathname = usePathname();

  // Removing "admin" and null strings after doing split
  const breadcrumbs = pathname
    .split("/")
    .filter((item) => item && item !== "admin");

  return (
    <ul className="flex items-center">
      {breadcrumbs.map((breadcrumb, idx) => (
        <li key={breadcrumb} className="h-full flex items-center ">
          <Link
            className={cn(
              "text-xs px-2 capitalize ",
              // If is active breadcrum i.e which will be last item
              idx === breadcrumbs.length - 1 ? "text-black" : "text-black/50"
            )}
            href={`/admin/${breadcrumb}`}
          >
            {breadcrumb}
          </Link>

          {/* Display the slash after each breadcrumb except last one */}
          {idx !== breadcrumbs.length - 1 && (
            <Separator
              orientation="vertical"
              className="h-4 mx-2 rotate-[25deg] text-black bg-black"
            />
          )}
        </li>
      ))}
    </ul>
  );
};
