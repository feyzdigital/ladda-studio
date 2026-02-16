import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Afrika örgüsü, mısır örgüsü, burgu örgü, örgü kaynak ve iğne kaynak. Ladda Studio Beşiktaş'ta saçınıza özel hizmetler.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Hizmetlerimiz"
        subtitle="Afrika örgüsünden saç uzatmaya. Saçınıza özel, uzman ellerde."
        size="small"
      />

      <section className="border-t border-border px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
                variant="bento"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
