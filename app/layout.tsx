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
    default: "Ladda Studio | Beşiktaş'ta Afrika Esintisi",
    template: "%s | Ladda Studio",
  },
  description:
    "Beşiktaş'ta Afrika örgüsü, mısır örgüsü, burgu örgü ve saç uzatma. Profesyonel ekibimizle randevu alın.",
  keywords: [
    "afrika örgüsü",
    "mısır örgüsü",
    "burgu örgü",
    "afro dalgası",
    "örgü kaynak",
    "iğne kaynak",
    "Beşiktaş kuaför",
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
