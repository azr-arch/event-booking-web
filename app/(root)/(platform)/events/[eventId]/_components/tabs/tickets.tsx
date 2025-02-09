import React from "react";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import SalesOverviewCard from "./overview";

const TicketsTab = () => {
    //   const totalSold = tickets.reduce((acc, ticket) => acc + ticket.sold, 0);
    //   const totalAvailable = tickets.reduce((acc, ticket) => acc + ticket.available, 0);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
                <CardHeader>
                    <CardTitle>Ticket Types</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Type</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Sold</TableHead>
                                <TableHead>Available</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {/* {tickets.map((ticket) => (
                <TableRow key={ticket.type}>
                  <TableCell className="font-medium">{ticket.type}</TableCell>
                  <TableCell>${ticket.price}</TableCell>
                  <TableCell>{ticket.sold}</TableCell>
                  <TableCell>{ticket.available}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))} */}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <SalesOverviewCard
            //   totalSales={totalSales}
            //    totalSold={totalSold}
            //     totalAvailable={totalAvailable}
            />
        </div>
    );
};

export default TicketsTab;
