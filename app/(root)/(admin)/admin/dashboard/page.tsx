import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, DollarSign, Users } from "lucide-react";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <section className="space-y-6 px-2">
      {/* <h2 className="text-3xl font-bold">Dashboard</h2> */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="dark:bg-black dark:border-white/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Events</CardTitle>
            <CalendarDays className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card className="dark:bg-black dark:border-white/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Total Bookings
            </CardTitle>
            <Users className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">243</div>
            <p className="text-xs text-muted-foreground">
              +30% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="dark:bg-black dark:border-white/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$5,231</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/events/new"
            className="p-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Create New Event
          </Link>
          <Link
            href="/events"
            className="p-4 bg-secondary dark:bg-black dark:border dark:border-white/20 dark:hover:border-white text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
          >
            View All Events
          </Link>
          <Link
            href="/events"
            className="p-4 bg-secondary dark:bg-black dark:border dark:border-white/20 dark:hover:border-white text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Manage Bookings
          </Link>
        </div>
      </div>
    </section>
  );
};
export default DashboardPage;
