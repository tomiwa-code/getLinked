import NavbarToggle from "@/components/general/NavbarToggle";
import "./global.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

const clashDisplay = localFont({
  src: "../utils/ClashDisplay-Bold.otf",
  variable: "--clash-display",
});

export const metadata: Metadata = {
  title: "GetLinked",
  description: "getlinked tech hackathon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={`bg-dark ${clashDisplay.variable} min-h-screen`}>
          <NavbarToggle />
          {children}
        </div>
      </body>
    </html>
  );
}
