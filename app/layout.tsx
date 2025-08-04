import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Dock } from "@/components/magicui/dock";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import FlickeringGridBg from "../components/ui/FlickeringGridBg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aarush Gupta Portfolio",
  description: "Portfolio of Aarush Gupta - Final-year CSE Student & Software Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground relative`}
      >
        <FlickeringGridBg />
        <div className="relative z-10">
          <Dock 
            items={[
              { label: "Home", href: "#hero" },
              { label: "Skills", href: "#skills" },
              { label: "Experience", href: "#experience" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" }
            ]}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
          />
          <ScrollProgress className="top" />
          {children}
        </div>
      </body>
    </html>
  );
}
