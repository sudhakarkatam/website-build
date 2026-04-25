import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RouteLoader from "@/components/RouteLoader";
import { Suspense } from "react";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rheo Pharma Pvt. Ltd. | HealthTech Innovations",
  description: "Global pharmaceutical and healthcare technology firm leveraging AI for diagnostics, pharmaceuticals, and digital health.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${publicSans.variable} min-h-screen antialiased scroll-smooth`} data-scroll-behavior="smooth">
      <body className="flex flex-col min-h-screen bg-white text-zinc-900">
        <Suspense fallback={null}>
           <RouteLoader />
        </Suspense>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
