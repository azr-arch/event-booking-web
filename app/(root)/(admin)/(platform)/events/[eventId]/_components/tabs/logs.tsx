import React from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody } from "@/components/ui/table";

const LogsTab = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Action</TableHead>
                    <TableHead>Timestamp</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {/* {logs.map((log, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{log.action}</TableCell>
            <TableCell>{format(log.timestamp, "PPP p")}</TableCell>
          </TableRow>
        ))} */}
            </TableBody>
        </Table>
    );
};

export default LogsTab;
