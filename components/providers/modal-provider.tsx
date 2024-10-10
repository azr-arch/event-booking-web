"use client";

import { useEffect, useState } from "react";
import { VenueModal } from "../modals/venue-modal";
import { Toaster } from "../ui/toaster";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <Toaster />
            <VenueModal />
        </>
    );
};
