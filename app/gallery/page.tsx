import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import { homeContent, galleryItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Lookbook",
  description:
    "Ladda Studio çalışmaları. Kesim, renklendirme ve özel gün saç modellerinden ilham alın.",
};

export default function GalleryPage() {
  return (
    <>
      <Hero
        title={homeContent.galleryPreview.title}
        subtitle={homeContent.galleryPreview.subtitle}
        size="small"
      />

      <section className="border-t border-border px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Gallery items={galleryItems} />
        </div>
      </section>
    </>
  );
}
