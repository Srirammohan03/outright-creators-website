import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "../components/providers/lenis-provider";
import Header from "../components/layout/Header";
import IntroProvider from "../components/providers/IntroProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Outright Creators",
  description: "Creative Digital Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col overflow-x-hidden bg-white text-black dark:bg-black dark:text-white">
        <LenisProvider>
          <IntroProvider>
            <Header />
            {children}
          </IntroProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
