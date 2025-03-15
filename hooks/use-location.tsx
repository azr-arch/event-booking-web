import { Location } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useLocationModal } from "./use-location-modal";

// Define the fetchVenues function
const fetchLocations = async () => {
    const response = await fetch("/api/locations"); // Replace with your actual API endpoint
    if (!response.ok) {
        throw new Error("Failed to fetch venues");
    }
    return response.json(); // Assuming the response is in JSON format
};

// Create a custom hook to fetch venues
export const useLocation = () => {
    const { isOpen } = useLocationModal();

    return useQuery<Location[]>({
        queryKey: ["locations"],
        queryFn: fetchLocations,
        staleTime: 5 * 60 * 1000, // 5 hours
        retry: 2,
        enabled: isOpen,
    });
};
