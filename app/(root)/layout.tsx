import { ModalProvider } from "@/components/providers/modal-provider";
import { QueryProvider } from "@/components/providers/query-provider";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <QueryProvider>
            <ModalProvider />
            {children}
        </QueryProvider>
    );
};

export default RootLayout;
