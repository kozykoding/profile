import "~/styles/globals.css";
import "@workos-inc/widgets/styles.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { AuthKitProvider } from "@workos-inc/authkit-nextjs/components";
import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "next-themes";
import { NavMenu } from "@/components/NavMenu";

export const metadata: Metadata = {
  title: "Hire Me",
  description: "Sammy Profile",
  icons: [{ rel: "logo", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AuthKitProvider>
            <TRPCReactProvider>
              <header className="bg-blur sticky top-0 z-50">
                <NavMenu />
              </header>
              {children}
            </TRPCReactProvider>
          </AuthKitProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
