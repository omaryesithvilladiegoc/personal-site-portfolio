"use client";
import { Montserrat, Rubik } from "next/font/google";
import "./globals.css";
import "./reset.css";
import "./normalize.css";
import VideoComponent from "@/components/common/Animation";

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <VideoComponent />
        {children}
      </body>
    </html>
  );
}
