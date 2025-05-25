"use client";

import { useLocation } from "@/hooks/use-location";
import { Location } from "@prisma/client";
import { createContext, ReactNode, useContext } from "react";

interface DashboardContextValue {
  venues: Location[];
  isLoading: boolean;
  error: Error | null;
}

const DashboardContext = createContext<DashboardContextValue | null>(null);

export const DashboardProvider = ({
  children,
  initialVenues,
}: {
  children: ReactNode;
  initialVenues: Location[];
}) => {
  const { data: venues, isLoading, error } = useLocation(initialVenues);

  return (
    <DashboardContext.Provider value={{ venues, isLoading, error }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within DashboardProvider");
  }
  return context;
};
