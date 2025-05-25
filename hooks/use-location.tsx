import { Location } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

const fetchLocations = async () => {
  const response = await fetch("/api/locations");
  if (!response.ok) {
    throw new Error("Failed to fetch venues");
  }
  return response.json();
};

// a custom hook to fetch venues
export const useLocation = (initialData: Location[]) => {
  return useQuery<Location[]>({
    queryKey: ["locations"],
    queryFn: fetchLocations,
    initialData,
    staleTime: 5 * 60 * 1000, // 5 hours
    refetchOnWindowFocus: false,
  });
};
