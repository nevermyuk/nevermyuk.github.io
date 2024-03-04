import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "quan",
    template: "%s | quan",
  },
  description: "⊙▂⊙",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body className="antialiased max-w-4xl mb-20 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <div className="z-30 relative">
            <Navbar />
          </div>
          <ParticlesBackground />
          <div className="z-10">{children}</div>
        </main>
      </body>
    </html>
  );
}
