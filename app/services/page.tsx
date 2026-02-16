import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Web tasarım, SEO, marka kimliği ve UI/UX tasarım hizmetleri. Dijital dönüşüm yolculuğunuzda Ladda Studio yanınızda.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Hizmetlerimiz"
        subtitle="Dijital varlığınızı güçlendiren kapsamlı çözümler. Stratejiden tasarıma, geliştirmeden pazarlamaya tek çatı altında."
        size="small"
      />

      <section className="border-t border-border px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
