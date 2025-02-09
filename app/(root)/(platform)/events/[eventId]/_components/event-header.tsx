import { Button } from "@/components/ui/button";
// import { FullEvent } from "@/lib/types";
import { Edit, Trash2, Eye } from "lucide-react";

const EventHeader = ({ title, eventId }: { eventId: string; title }) => {
    return (
        <div className="flex justify-between items-start md:items-center mb-6">
            <h1 className="text-3xl font-bold">{title}</h1>
            <div className=" flex flex-col items-end md:flex-row gap-2 ">
                <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-.5" />
                    Edit
                </Button>
                <Button variant="destructive" size="sm">
                    <Trash2 className="w-4 h-4 mr-.5" />
                    Delete
                </Button>
                <Button variant="default" size="sm">
                    <Eye className="w-4 h-4 mr-.5" />
                    View Public Page
                </Button>
            </div>
        </div>
    );
};

export default EventHeader;
