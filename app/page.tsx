"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ServiceGridCard from "@/components/ServiceGridCard";
import PhilosophySection from "@/components/PhilosophySection";
import SocialProofMarquee from "@/components/SocialProofMarquee";
import { homeContent, services } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <Hero
        title={homeContent.hero.title}
        titleAccent={homeContent.hero.titleAccent}
        subtitle={homeContent.hero.subtitle}
        cta={homeContent.hero.cta}
        ctaLink={homeContent.hero.ctaLink}
      />

      {/* Service Grid - 4 large vertical cards */}
      <section className="border-t border-zinc-800 bg-zinc-950 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-3xl font-medium text-zinc-100 sm:text-4xl">
              {homeContent.servicesPreview.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              {homeContent.servicesPreview.subtitle}
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceGridCard
                key={service.slug}
                service={service}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link href="/services">
              <Button
                variant="outline"
                className="border-accent bg-transparent text-accent hover:border-accent-hover hover:bg-accent-hover/10 hover:text-accent-hover"
              >
                Tüm Hizmetleri Görüntüle
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <PhilosophySection />

      {/* Social Proof - Ladda Kadınları */}
      <SocialProofMarquee />

      {/* CTA */}
      <section className="border-t border-zinc-800 bg-zinc-950 px-6 py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-serif text-3xl font-medium text-zinc-100 sm:text-4xl">
            Randevu Alın
          </h2>
          <p className="mt-4 text-zinc-400">
            Hayalinizdeki saç için bizimle iletişime geçin.
          </p>
          <Link href="/contact" className="mt-8 inline-block">
            <Button className="border-accent bg-accent px-8 py-6 text-base text-zinc-950 hover:bg-accent-hover hover:border-accent-hover transition-colors">
              Randevu Al
            </Button>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
