import React from "react";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { UserEvent } from "@prisma/client";

const AttendeesTab = ({ attendees }: { attendees: UserEvent[] }) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Ticket Type</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {attendees.length <= 0 && <p className="p-4 text-neutral-400">No Attendees yet!</p>}
                {attendees.map((attendee) => (
                    <TableRow key={attendee.id}>
                        {/* <TableCell className="font-medium">{attendee.name}</TableCell>
            <TableCell>{attendee.email}</TableCell>
            <TableCell>{attendee.ticketType}</TableCell> */}
                        <TableCell>
                            <Button variant="ghost" size="sm">
                                <Edit className="w-4 h-4 mr-2" />
                                Edit
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default AttendeesTab;
