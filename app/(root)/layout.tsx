import { QueryProvider } from "@/components/providers/query-provider";
import { SessionProvider } from "next-auth/react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <QueryProvider>
        {/* <div className="w-full min-h-screen flex items-center justify-center"> */}
        {children}
        {/* </div> */}
      </QueryProvider>
    </SessionProvider>
  );
};

export default RootLayout;
