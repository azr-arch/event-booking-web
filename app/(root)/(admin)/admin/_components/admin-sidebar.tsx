import { Logo } from "@/components/shared/logo";
import { AdminNav } from "./admin-nav";
import { Separator } from "@/components/ui/separator";
import UserNav from "./user-nav";

export const AdminSidebar = () => {
  return (
    <aside className="w-[260px] h-screen bg-muted pl-4 py-6 pr-1">
      <div className="mb-7 px-2 flex items-center justify-between">
        <Logo iconClassName="w-5 h-5 " iconTextClassName="text-lg" />

        <UserNav />
      </div>
      <AdminNav />
      <Separator />
    </aside>
  );
};
