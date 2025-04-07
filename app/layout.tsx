import type { Metadata } from "next";
import "./globals.css";
// import { ThemeProvider } from "@/components/providers/theme-provider";

import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
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
      <body className={`${inter.className} antialiased`}>
        {/* <ThemeProvider
          attribute={"class"}
          defaultTheme="light"
          disableTransitionOnChange
        > */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
