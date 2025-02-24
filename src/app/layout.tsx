"use client";
import "./globals.css";
import "./reset.css";
import "./normalize.css";
import VideoComponent from "@/components/common/Animation";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.className} ${geistSans.className}`}>
        <VideoComponent />
        {children}
      </body>
    </html>
  );
}
