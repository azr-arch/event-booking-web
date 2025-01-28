"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { formatDate } from "@/lib/utils";
import { Event, Venue } from "@prisma/client";
import { ChevronRight, Edit, Search } from "lucide-react";

interface EventsProps {
    data: (Event & {
        venue: Venue;
    })[];
}

export const Events = () => {
    return (
        <>
            <div className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-gray-500" />
                <Input
                    placeholder="Search events..."
                    //   value={searchTerm}
                    //   onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                />
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Events Overview</CardTitle>
                    <CardDescription>
                        Manage and monitor all your events from this dashboard.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Event Name</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Venue</TableHead>
                                <TableHead>Tickets Sold</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {/* {data.map((event) => (
                                <TableRow key={event.id}>
                                    <TableCell className="font-medium">{event.name}</TableCell>
                                    <TableCell>{formatDate(event.date)}</TableCell>
                                    <TableCell>{event.venue.name}</TableCell>
                                    <TableCell>0 / {event.venue.capacity}</TableCell>
                                    <TableCell>
                                        <Button variant="ghost" size="sm">
                                            <Edit className="w-4 h-4 mr-2" />
                                            Edit
                                        </Button>
                                        <Button variant="ghost" size="sm">
                                            <ChevronRight className="w-4 h-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))} */}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    );
};
