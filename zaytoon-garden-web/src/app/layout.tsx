import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Zaytoon Garden Restaurant | Premium Family Dining in Multan",
  description: "Experience authentic Desi, Afghani cuisine, and premium outdoor family dining at Zaytoon Garden Restaurant Multan.",
  keywords: ["Best restaurant in Multan", "Family restaurant Multan", "Afghani restaurant Multan", "Desi food Multan", "Outdoor dining Multan", "Mutton karahi Multan"],
  openGraph: {
    title: "Zaytoon Garden Restaurant | Premium Family Dining in Multan",
    description: "Experience authentic Desi, Afghani cuisine, and premium outdoor family dining at Zaytoon Garden Restaurant Multan.",
    type: "website",
    locale: "en_PK",
    siteName: "Zaytoon Garden Restaurant",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-brand-beige text-brand-charcoal antialiased overflow-x-hidden`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
