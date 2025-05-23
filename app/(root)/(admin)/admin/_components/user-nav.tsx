"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LucideArrowUpRightFromSquare, UserIcon } from "lucide-react";
// import { useSession } from "next-auth/react";
import { signOutFn } from "@/actions/auth/sign-out";
import { Skeleton } from "@/components/ui/skeleton";
import { Session } from "next-auth";

const UserNav = ({ session }: { session: Session | null }) => {
  // const { data: session, status } = useSession();

  if (!session) {
    return <UserNavLoading />;
  }

  // if (status === "unauthenticated") {
  //   console.log("unauthenticated person");
  // }

  return (
    <div className="ml-auto">
      <DropdownMenu>
        <DropdownMenuTrigger className=" focus-visible:outline-none" asChild>
          <Button className="rounded-full" size={"icon"}>
            <UserIcon className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="dark:bg-black dark:border-neutral-700 w-fit"
        >
          <DropdownMenuLabel className="flex flex-col items-start">
            {session?.user?.name}
            <span className="text-xs text-muted-foreground">
              {session?.user?.email}
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOut />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserNav;

function SignOut() {
  return (
    <form action={signOutFn}>
      <button type="submit" className="flex items-center gap-x-1.5">
        <LucideArrowUpRightFromSquare className="w-4 h-4" />
        Logout
      </button>
    </form>
  );
}

function UserNavLoading() {
  return <Skeleton className="w-9 h-9 rounded-full" />;
}
