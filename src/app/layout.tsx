import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saurabh Gupta | Software Developer",
  description:
    "Portfolio of Saurabh Gupta — a passionate Software Developer specializing in full-stack web development with React, Node.js, and modern web technologies.",
  keywords: [
    "Saurabh Gupta",
    "Software Developer",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Saurabh Gupta" }],
  openGraph: {
    title: "Saurabh Gupta | Software Developer",
    description:
      "Full-stack developer passionate about building scalable web applications. Explore my projects, skills, and experience.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Gupta | Software Developer",
    description:
      "Full-stack developer passionate about building scalable web applications.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
