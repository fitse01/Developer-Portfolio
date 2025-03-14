import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fitsum Tafese | Full-Stack Web Developer",
  description:
    "Portfolio of Fitsum Tafese, a Full-Stack Web Developer specializing in React, Next.js, Node.js, and more.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fitsum.net",
    title: "Fitsum Tafese | Full-Stack Web Developer",
    description:
      "Portfolio of Fitsum Tafese, a Full-Stack Web Developer specializing in React, Next.js, Node.js,React Native more.",
    siteName: "Fitsum Tafese Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitsum Tafese | Full-Stack Web Developer",
    description:
      "Portfolio of Fitsum Tafese, a Full-Stack Web Developer specializing in React, Next.js, Node.js,React Native more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
