// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

// Suppress harmless Three.js warnings (add this before any imports)
if (typeof window !== 'undefined') {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    const message = args[0]?.toString() || '';
    if (
      message.includes('THREE.Clock') ||
      message.includes('warning X4122') ||
      message.includes('double precision')
    ) {
      return;
    }
    originalWarn(...args);
  };
}

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({ weight: ["300", "400", "700"], subsets: ["latin"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "Harsh Dhoriyani | Full Stack & AI/ML Developer",
  description: "3D portfolio showcasing projects, skills, and experience in React, Java, Spring Boot, and LLM fine-tuning.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}