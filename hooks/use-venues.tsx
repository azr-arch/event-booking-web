import { Venue } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

// Define the fetchVenues function
const fetchVenues = async () => {
    const response = await fetch("/api/venues"); // Replace with your actual API endpoint
    if (!response.ok) {
        throw new Error("Failed to fetch venues");
    }
    return response.json(); // Assuming the response is in JSON format
};

// Create a custom hook to fetch venues
export const useVenues = () => {
    return useQuery<Venue[]>({
        queryKey: ["venues"],
        queryFn: fetchVenues,
        staleTime: 5 * 60 * 1000,
        retry: 2,
    });
};
