"use client";

import { useLocationModal } from "@/hooks/use-location-modal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { LocationForm } from "../form/location-form";

export const LocationModal = () => {
    // I only need to refetch the
    const isOpen = useLocationModal((state) => state.isOpen);
    const onClose = useLocationModal((state) => state.onClose);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New Location</DialogTitle>
                </DialogHeader>
                {/* Form */}
                <LocationForm />
            </DialogContent>
        </Dialog>
    );
};
