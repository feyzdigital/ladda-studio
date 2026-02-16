import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import { homeContent } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ekip",
  description:
    "Ladda Studio stilistleri. Örgü uzmanı, afro stilisti ve kaynak uzmanı ekibimizle tanışın.",
};

export default function TeamPage() {
  return (
    <>
      <Hero
        title={homeContent.teamPreview.title}
        subtitle={homeContent.teamPreview.subtitle}
        size="small"
      />

      <section className="border-t border-border px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <TeamSection showAll={true} />
        </div>
      </section>
    </>
  );
}
