"use client";

import { useEffect, useState } from "react";
// import { VenueModLocaioal } from "../modals/venue-modal";
import { Toaster } from "../ui/toaster";
import { LocationModal } from "../modals/location-modal";
import { EditEventModal } from "../modals/edit-event-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <Toaster />
            <LocationModal />
            <EditEventModal />
        </>
    );
};
