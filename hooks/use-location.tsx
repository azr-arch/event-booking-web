import { Location } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

// Define the fetchVenues function
const fetchLocations = async () => {
  const response = await fetch("/api/locations"); // Replace with your actual API endpoint
  if (!response.ok) {
    throw new Error("Failed to fetch venues");
  }
  return response.json(); // Assuming the response is in JSON format
};

// Create a custom hook to fetch venues
export const useLocation = (initialData: Location[]) => {
  return useQuery<Location[]>({
    queryKey: ["locations"],
    queryFn: fetchLocations,
    initialData,
    staleTime: 5 * 60 * 1000, // 5 hours
    refetchOnWindowFocus: false,
  });
};
