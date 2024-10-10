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

import { useVenueModal } from "@/hooks/use-venue-modal";
import { useVenues } from "@/hooks/use-venues";
import { MoreHorizontal, Search } from "lucide-react";

export const VenueList = () => {
    const { data: venues } = useVenues();
    const venueModal = useVenueModal();

    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <h1 className="text-3xl font-bold">Venues</h1>
                <Button onClick={venueModal.onOpen}>Add New Event</Button>
            </div>
            <div className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-gray-500" />
                <Input placeholder="Search venues..." className="max-w-sm" />
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Venues Overview</CardTitle>
                    <CardDescription>
                        Manage and monitor all your venues from this dashboard.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative w-full overflow-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">Venue Name</TableHead>
                                    <TableHead className="">Location</TableHead>
                                    <TableHead className=" text-right">Capacity</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {venues &&
                                    venues.map((venue) => (
                                        <TableRow key={venue.id}>
                                            <TableCell className="font-medium ">
                                                {venue.name}
                                            </TableCell>
                                            <TableCell>{venue.location}</TableCell>
                                            <TableCell className="text-right">
                                                {venue.capacity.toLocaleString()}
                                            </TableCell>
                                            <TableCell className="justify-end">
                                                <Button variant={"ghost"} className="">
                                                    <MoreHorizontal className="w-4 h-4" />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </>
    );
};
