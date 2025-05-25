import { ReactNode } from "react";
import { AdminSidebar } from "./_components/admin-sidebar";
import { DashboardHeader } from "./_components/dashboard-header";
import { Separator } from "@/components/ui/separator";
import { DashboardProvider } from "@/context/dashboard-context";
import { getAllVenues } from "@/lib/db-queries";
import { ModalProvider } from "@/components/providers/modal-provider";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const initialVenues = await getAllVenues();

  return (
    <DashboardProvider initialVenues={initialVenues || []}>
      <ModalProvider />
      <div className=" w-full mx-auto h-full flex items-center self-stretch">
        <AdminSidebar />
        <div className="p-3 bg-muted self-stretch grow min-h-screen overflow-y-auto">
          <div className="min-h-full bg-background shadow-outline rounded-lg">
            <DashboardHeader />
            <Separator className="mb-5" />
            <div className="px-6 py-2 w-full">{children}</div>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}
