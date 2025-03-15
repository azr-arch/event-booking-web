import { ReactNode } from "react";
import { Header } from "./_components/header";

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className="max-w-screen-xl mx-auto h-full dark:bg-black">
            <Header />
            <div className="px-8">{children}</div>
        </div>
    );
}
