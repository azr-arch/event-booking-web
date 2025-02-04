import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

import { Fira_Sans } from "next/font/google";

const fontFira = Fira_Sans({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "EventBook",
    description: "event booking web app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${fontFira.className} antialiased`}>
                <ThemeProvider attribute={"class"} defaultTheme="dark" disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
