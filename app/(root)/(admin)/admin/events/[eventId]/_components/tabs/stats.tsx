import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

const QuickStatsCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400">Status</span>
                        {/* <Badge variant={event.status === "Published" ? "default" : "secondary"}>
              {event.status}
            </Badge> */}
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400">Total Attendees</span>
                        {/* <span className="font-semibold">{event.attendees.length}</span> */}
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400">Total Sales</span>
                        {/* <span className="font-semibold">${event.totalSales.toLocaleString()}</span> */}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default QuickStatsCard;
