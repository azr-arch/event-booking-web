"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sidebar } from "lucide-react";
import { usePathname } from "next/navigation";

export const DashboardHeader = () => {
  const pathname = usePathname();

  const breadcrumbs = pathname.split("/");
  const lastItem = breadcrumbs[breadcrumbs.length - 1];

  return (
    <header className="h-12 w-full px-6 flex items-center">
      {/* Tihs will be sidebar trigger */}
      <Button size={"icon"} variant={"ghost"} className=" -ml-2">
        <Sidebar className="w-4 h-4" />
      </Button>

      <Separator orientation="vertical" className="h-5 mx-3" />

      {/* TODO extract this out to a separate function */}
      <div>
        {/* Implement this */}
        {/* {breadcrumbs.map((crumb, idx) => {
          if (idx !== crumb.length - 1) {
            return (
              <>
                <Button variant={"ghost"}>{crumb}</Button>
                <Separator orientation="vertical" />
              </>
            );
          }
        })} */}

        <Button
          className="font-normal text-xs px-2 capitalize"
          variant={"ghost"}
        >
          {lastItem}
        </Button>
      </div>
    </header>
  );
};
