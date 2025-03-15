import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import { format } from "date-fns";
import QuickStatsCard from "./stats";
import { EventWithOrder } from "@/lib/types";

const EventDetailsTab = ({ event }: { event: EventWithOrder }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
                <CardHeader>
                    <CardTitle>Event Information</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold">Description</h3>
                            <p className="text-gray-400">{event.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Badge variant="secondary" className="flex items-center gap-2 py-1">
                                <CalendarDays className="w-4 h-4" />
                                {format(event.startDate, "PPP")} - {format(event.endDate, "PPP")}
                            </Badge>
                            <Badge variant="secondary" className="flex items-center gap-2 py-1">
                                <MapPin className="w-4 h-4" />
                                {event.location.name}
                            </Badge>
                        </div>
                        {event.images.length > 0 ? (
                            <div>
                                <h3 className="font-semibold mb-2">Event Images</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    {event.images.map((image, index) => (
                                        <Image
                                            key={index}
                                            src={image || "/placeholder.svg"}
                                            alt={`Event image ${index + 1}`}
                                            width={300}
                                            height={200}
                                            className="rounded-lg object-cover w-full h-32"
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : null}
                    </div>
                </CardContent>
            </Card>
            <QuickStatsCard />
        </div>
    );
};

export default EventDetailsTab;
