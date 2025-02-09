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
import { useEditEventModal } from "@/hooks/use-edit-event-modal";
import { FullEvent } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { ChevronRight, Edit, Search } from "lucide-react";
import Link from "next/link";

interface EventsProps {
    data: FullEvent[];
}

export const Events = ({ data }: EventsProps) => {
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

            <Card className="dark:bg-black dark:border-white/20">
                <CardHeader>
                    <CardTitle>Events Overview</CardTitle>
                    <CardDescription>
                        Manage and monitor all your events from this dashboard.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="dark:border-white/20">
                                <TableHead>Event Name</TableHead>
                                <TableHead>Start Date</TableHead>
                                <TableHead>End Date</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Tickets Sold</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((event) => (
                                <EventRow key={event.id} event={event} />
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    );
};

const EventRow = ({ event }: { event: FullEvent }) => {
    const { onOpen } = useEditEventModal();

    return (
        <TableRow key={event.id} className="dark:border-white/20">
            <TableCell className="font-medium">
                <Link href={`events/${event.id}`} className="hover:underline">
                    {event.title}
                </Link>
            </TableCell>
            <TableCell>{formatDate(event.startDate)}</TableCell>
            <TableCell>{formatDate(event.endDate)}</TableCell>

            <TableCell>{event.location.name}</TableCell>
            <TableCell>
                {/* TODO Fix this */}
                {event.attendees.length} / 100
            </TableCell>
            <TableCell>
                <Button onClick={() => onOpen(event.id)} variant="ghost" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                </Button>
                <Button variant="ghost" size="sm">
                    <ChevronRight className="w-4 h-4" />
                </Button>
            </TableCell>
        </TableRow>
    );
};
