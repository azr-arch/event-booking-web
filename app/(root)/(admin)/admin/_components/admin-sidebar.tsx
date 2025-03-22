import { Logo } from "@/components/shared/logo";
import { AdminNav } from "./admin-nav";
import { Separator } from "@/components/ui/separator";
import UserNav from "./user-nav";
import { auth } from "@/auth";

export const AdminSidebar = async () => {
  const session = await auth();

  return (
    <aside className="w-[260px] shrink-0 h-screen bg-muted pl-4 py-6 pr-1">
      <div className="mb-7 px-2 flex items-center justify-between">
        <Logo
          url="/admin"
          iconClassName="w-5 h-5 "
          iconTextClassName="text-lg"
        />

        <UserNav session={session} />
      </div>
      <AdminNav />
      <Separator />
    </aside>
  );
};
