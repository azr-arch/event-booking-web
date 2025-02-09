import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const SalesOverviewCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400">Total Revenue</span>
                        {/* <span className="font-semibold text-green-400">${totalSales.toLocaleString()}</span> */}
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400">Tickets Sold</span>
                        {/* <span className="font-semibold">{totalSold}</span> */}
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400">Available Tickets</span>
                        {/* <span className="font-semibold">{totalAvailable}</span> */}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default SalesOverviewCard;
