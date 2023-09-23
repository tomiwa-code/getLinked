import Footer from "@/components/general/Footer";
import "./global.css";
import Navbar from "@/components/general/Navbar";
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
        <div className={`bg-dark ${clashDisplay.variable}`}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
