import { Header } from "./_components/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 h-full">
            <Header />
            {children}
        </div>
    );
};

export default MainLayout;
