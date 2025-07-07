import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Card from "@/components/Card";
import ContactInfo, { ContactInfoProps } from "@/components/ContactInfo";

const montserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "rhenwinch - Portfolio",
  description: "A curation of personal/side projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserratSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
