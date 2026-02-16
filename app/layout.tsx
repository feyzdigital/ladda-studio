import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ladda Studio | We Load Your Digital Potential",
    template: "%s | Ladda Studio",
  },
  description:
    "Ladda Studio olarak dijital potansiyelinizi yüklüyoruz. Web tasarım, SEO, marka kimliği ve UI/UX çözümleriyle markanızı bir üst seviyeye taşıyoruz.",
  keywords: [
    "web tasarım",
    "SEO",
    "dijital ajans",
    "marka kimliği",
    "UI/UX tasarım",
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
        className={`${syne.variable} ${inter.variable} min-h-screen font-inter antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
