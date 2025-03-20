"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as JotaiProvider } from "jotai";
import { ReactNode } from "react";
import { Public_Sans } from "next/font/google";
import { ThemeProvider } from "@/app/components/theme-provider";
import "@/app/styles/globals.css";

const queryClient = new QueryClient();

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  weight: ["400", "100", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JotaiProvider>
          <QueryClientProvider client={queryClient}>
            <div className={`${publicSans} min-h-screen dark:bg-dark-background `}>
              <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
            </div>
          </QueryClientProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}
