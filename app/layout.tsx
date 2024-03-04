import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Inter, Source_Sans_3 } from "next/font/google";
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

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans-3",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={[inter.variable, sourceSans3.variable].join(" ")}
    >
      <body className="antialiased max-w-4xl mb-20 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <div>
              <Navbar />
            </div>
            <div>{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
