import type { Metadata } from "next";
import { Syne, Space_Mono } from "next/font/google";
import "./globals.css";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Harsh Dhoriyani | Full Stack & AI/ML Developer",
  description: "Portfolio of Harsh Dhoriyani - Full Stack Developer & AI/ML Engineer building immersive digital experiences with clean architecture.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceMono.variable}`}>
      <body>
        <CursorGlow />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}