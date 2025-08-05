import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Akshitha Kolanupaka",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`} data-theme="light">
      <body className="bg-white">{children}</body>
    </html>
  );
}
