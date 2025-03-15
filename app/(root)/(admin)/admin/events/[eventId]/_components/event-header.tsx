import { Button } from "@/components/ui/button";
// import { FullEvent } from "@/lib/types";
import { Edit, Trash2, Eye, MoveLeft } from "lucide-react";
import Link from "next/link";

const EventHeader = ({ title }: { eventId: string; title: string }) => {
    return (
        <div className="flex relative justify-between items-start md:items-center mb-6">
            <Link
                href={"/events"}
                className="absolute top-.5  -left-16 hover:-translate-x-1 transition-transform duration-300 px-5 py-1"
            >
                <MoveLeft className="w-6 h-6" />
                {/* Back */}
            </Link>
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
