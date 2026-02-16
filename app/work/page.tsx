import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProjectGallery from "@/components/ProjectGallery";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "Ladda Studio portfolyosu. Web tasarım, marka kimliği, SEO ve UI/UX projelerimizi keşfedin.",
};

export default function WorkPage() {
  return (
    <>
      <Hero
        title="Projelerimiz"
        subtitle="Farklı sektörlerden markalarla gerçekleştirdiğimiz dijital dönüşüm projeleri."
        size="small"
      />

      <section className="border-t border-border px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ProjectGallery projects={projects} showAll={true} />
        </div>
      </section>
    </>
  );
}
