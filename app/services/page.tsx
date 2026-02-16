import Hero from "@/components/Hero";
import ServiceGridCard from "@/components/ServiceGridCard";
import { services } from "@/lib/data";

export const metadata = {
  title: "Hizmetler",
  description:
    "Afrika örgüsü, Afro dalgası, Cornrows, Twist. İstanbul'un Premium Afro Saç Stüdyosu. Urban Hair Artistry.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Hizmetlerimiz"
        subtitle="Afrika örgüsünden twist'e. Saçınıza özel, uzman ellerde."
        size="small"
      />

      <section className="border-t border-zinc-800 bg-zinc-950 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceGridCard
                key={service.slug}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
