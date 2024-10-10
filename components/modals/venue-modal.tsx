"use client";

import { useVenueModal } from "@/hooks/use-venue-modal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { VenueForm } from "../form/venue-form";

export const VenueModal = () => {
    const isOpen = useVenueModal((state) => state.isOpen);
    const onClose = useVenueModal((state) => state.onClose);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New Venue</DialogTitle>
                </DialogHeader>
                {/* Form */}
                <VenueForm />
            </DialogContent>
        </Dialog>
    );
};
