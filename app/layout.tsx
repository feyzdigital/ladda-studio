import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ladda Studio | İstanbul'un Premium Afro Saç Stüdyosu",
    template: "%s | Ladda Studio",
  },
  description:
    "İstanbul'un Premium Afro Saç Stüdyosu. Afrika örgüsü, Afro dalgası, Cornrows, Twist. Urban Hair Artistry.",
  keywords: [
    "afrika örgüsü",
    "afro dalgası",
    "cornrows",
    "twist",
    "mısır örgüsü",
    "burgu örgü",
    "İstanbul kuaför",
    "Ladda Studio",
  ],
  authors: [{ name: "Ladda Studio" }],
  openGraph: {
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body
        className={`${playfair.variable} ${inter.variable} min-h-screen font-sans antialiased`}
      >
        <SchemaMarkup />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
