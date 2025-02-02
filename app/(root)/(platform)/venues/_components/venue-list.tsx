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

import { Search } from "lucide-react";

import { useLocation } from "@/hooks/use-location";
import { useLocationModal } from "@/hooks/use-location-modal";

export const LocationList = () => {
    const { data: locations } = useLocation();
    const locationModal = useLocationModal();

    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <h1 className="text-3xl font-bold">Venues</h1>
                <Button onClick={locationModal.onOpen}>Add New Event</Button>
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
                                {locations &&
                                    locations.map((location) => (
                                        <TableRow key={location.id}>
                                            <TableCell className="font-medium ">
                                                {location.name}
                                            </TableCell>
                                            <TableCell className="truncate ">
                                                {location.address}
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
