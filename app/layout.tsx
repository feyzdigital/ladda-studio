import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    default: "Ladda Studio | Your Hair, Your Signature",
    template: "%s | Ladda Studio",
  },
  description:
    "İstanbul'un en prestijli kuaför stüdyosu. Modern kesimler, kişiye özel renklendirme ve profesyonel saç bakımı. Randevu alın.",
  keywords: [
    "kuaför",
    "saç kesimi",
    "balayage",
    "keratin bakım",
    "gelin başı",
    "Nişantaşı kuaför",
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
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
