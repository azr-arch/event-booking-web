const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted dark:bg-black p-6 md:p-10">
            {children}
        </div>
    );
};

export default AuthLayout;
