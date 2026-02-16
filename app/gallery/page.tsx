import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import { homeContent, galleryItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Çalışmalarımız",
  description:
    "Ladda Studio çalışmaları. Afrika örgüsü, mısır örgüsü, burgu örgü ve saç uzatma modellerinden ilham alın.",
};

export default function GalleryPage() {
  return (
    <>
      <Hero
        title={homeContent.galleryPreview.title}
        subtitle={homeContent.galleryPreview.subtitle}
        size="small"
      />

      <section className="border-t border-zinc-800 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Gallery items={galleryItems} />
        </div>
      </section>
    </>
  );
}
