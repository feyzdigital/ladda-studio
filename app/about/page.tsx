import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Ladda Studio hikayesi, değerlerimiz ve dijital dönüşüm yolculuğunda neden bizi seçmeniz gerektiği.",
};

export default function AboutPage() {
  return <AboutContent />;
}
