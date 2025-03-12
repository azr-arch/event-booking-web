import { Header } from "./_components/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-screen-xl mx-auto h-full dark:bg-black">
            <Header />
            <div className="px-8">{children}</div>
        </div>
    );
};

export default MainLayout;
