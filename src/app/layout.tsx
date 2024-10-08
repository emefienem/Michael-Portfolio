import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael - Home",
  description:
    "This portfolio showcases Michael's skills and experience as a software Engineer. It includes a range of projects he has completed, demonstrating proficiency in languages such as JavaScript, TypeScript, as well as proficiency in frameworks such as React, Next.js. Projects range from web applications to command-line tools, showcasing Michael's versatility and expertise in various software development fields",
  creator: "Michael Emefienem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>

      <body className={`${montserrat.className} flex flex-col lg:flex-row`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
