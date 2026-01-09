import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/**
 * Inter - Primary sans-serif font for body text
 * Clean, geometric, highly readable at all sizes
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/**
 * JetBrains Mono - Monospace font for code-like text
 * Technical feel, clean ligatures
 */
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayush Jangid | Independent Systems Builder",
  description:
    "I build and stress-test AI systems under real-world constraints. Focused on systems, reasoning, and coordination.",
  keywords: [
    "AI systems",
    "systems engineering",
    "machine learning",
    "reasoning systems",
    "Ayush Jangid",
  ],
  authors: [{ name: "Ayush Jangid" }],
  openGraph: {
    title: "Ayush Jangid | Independent Systems Builder",
    description: "I build and stress-test AI systems under real-world constraints.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
