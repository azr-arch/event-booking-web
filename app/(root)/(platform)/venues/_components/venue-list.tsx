"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Edit, Loader2Icon, MapPin, Search } from "lucide-react";

import { useLocation } from "@/hooks/use-location";
import { useLocationModal } from "@/hooks/use-location-modal";
import { useAction } from "@/hooks/use-action";
import { deleteLocationAction } from "@/actions/delete-location";
import { toast } from "@/hooks/use-toast";
import { useFormStatus } from "react-dom";

export const LocationList = () => {
    const { data: locations, isLoading: isLocationsLoading, refetch } = useLocation();
    const locationModal = useLocationModal();
    const { pending } = useFormStatus();

    const { execute, isLoading } = useAction(deleteLocationAction, {
        // Bug not triggering
        onSuccess: () => {
            console.log("success");
            toast({ title: "Deleted successfully!" });
        },
        onError: (err) => {
            if (typeof err === "string") {
                toast({ description: err });
            } else if (err && err.title && err.description) {
                toast({ title: err.title, description: err.description });
            }
        },
        onComplete: () => {
            refetch(); // Refresh location list
        },
    });

    const onDelete = async (formData: FormData) => {
        const locationId = formData.get("locationId") as string;

        await execute({
            locationId,
        });
    };

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLocationsLoading ? (
                    <Loader2Icon className="mx-auto animate-spin w-5 h-5" />
                ) : !locations ? (
                    <p className="text-sm text-muted-foreground">No locations founds</p>
                ) : null}

                {locations &&
                    locations.map((location) => (
                        <Card
                            key={location.id}
                            className="flex flex-col dark:bg-black dark:border-white/20"
                        >
                            <CardHeader>
                                <CardTitle className="flex items-center capitalize">
                                    <MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
                                    {location.name}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-muted-foreground mb-2">
                                    {location.address}
                                </p>
                                {location.latitude && (
                                    <p className="text-sm mb-4">
                                        Lat: {location.latitude}, Long: {location.longitude}
                                    </p>
                                )}
                            </CardContent>
                            <CardFooter className="flex justify-between mt-auto">
                                <Button variant="outline" size="sm">
                                    <Edit className="mr-2 h-4 w-4" /> Edit
                                </Button>
                                {/* Restrict deleting locations that have upcoming events */}
                                <form action={onDelete}>
                                    <input type="hidden" name="locationId" value={location.id} />
                                    <Button
                                        type="submit"
                                        disabled={pending || isLoading}
                                        variant="destructive"
                                        size="sm"
                                    >
                                        Delete
                                    </Button>
                                </form>
                            </CardFooter>
                        </Card>
                    ))}
            </div>

            <div className="mt-12">
                {/* TODO: Implement Map view*/}
                <h2 className="text-2xl font-semibold mb-4">Map View</h2>
                <div className="bg-muted h-[400px] rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">
                        Map placeholder - Integrate your preferred map service here
                    </p>
                </div>
            </div>
        </>
    );
};
