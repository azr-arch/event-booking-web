import { ReactNode } from "react";
import { AdminSidebar } from "./_components/admin-sidebar";
import { DashboardHeader } from "./_components/dashboard-header";
import { Separator } from "@/components/ui/separator";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className=" w-full mx-auto h-full flex items-center self-stretch">
      <AdminSidebar />
      <div className="p-3 bg-muted self-stretch grow min-h-screen overflow-y-auto">
        <div className="bg-background h-full shadow-outline rounded-lg">
          <DashboardHeader />
          <Separator className=" mb-5" />
          <div className="px-6 w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
