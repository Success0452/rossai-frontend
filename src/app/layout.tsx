import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import {Toaster} from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RossAI",
  description: "🎨 Bob Ross - Paint beautiful scenes with AI-guided Bob Ross style instructions",
  referrer: "origin-when-cross-origin",
  openGraph: {
    images: [
      {
        url: '/BR.png',
        width: 800,
        height: 600,
        alt: 'RossAI Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <main className="bg-[#0d1117]">{children}</main>
    <Toaster />
    </body>
    </html>
  );
}
