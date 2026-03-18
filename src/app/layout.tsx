import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nest n Wings | Hostel Management OS",
  description: "The Operating System for Hostels & Co-Living. Automate allotment, payments, attendance, and daily operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <SmoothScroll>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
      </body>
    </html>
  );
}
