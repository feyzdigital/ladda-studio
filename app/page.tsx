"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TeamSection from "@/components/TeamSection";
import Gallery from "@/components/Gallery";
import { homeContent, services, teamMembers, galleryItems } from "@/lib/data";

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

      {/* Hizmetler */}
      <section className="border-t border-border bg-surface/30 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-3xl font-medium text-white sm:text-4xl">
              {homeContent.servicesPreview.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              {homeContent.servicesPreview.subtitle}
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
                variant="bento"
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center text-accent hover:text-accent-muted"
            >
              Tüm Hizmetleri Görüntüle
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Ekip */}
      <section className="border-t border-border px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-3xl font-medium text-white sm:text-4xl">
              {homeContent.teamPreview.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              {homeContent.teamPreview.subtitle}
            </p>
          </motion.div>

          <div className="mt-16">
            <TeamSection showAll={false} />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/team"
              className="inline-flex items-center text-accent hover:text-accent-muted"
            >
              Tüm Ekibi Görüntüle
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lookbook */}
      <section className="border-t border-border bg-surface/30 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-3xl font-medium text-white sm:text-4xl">
              {homeContent.galleryPreview.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              {homeContent.galleryPreview.subtitle}
            </p>
          </motion.div>

          <div className="mt-16">
            <Gallery items={galleryItems.slice(0, 6)} />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/gallery"
              className="inline-flex items-center text-accent hover:text-accent-muted"
            >
              Tüm Çalışmalarımız
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-serif text-3xl font-medium text-white sm:text-4xl">
            Randevu Alın
          </h2>
          <p className="mt-4 text-muted">
            Hayalinizdeki saç için bizimle iletişime geçin.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 border border-accent bg-accent px-8 py-3 font-medium text-background transition-colors hover:bg-accent-muted"
          >
            Randevu Al
          </Link>
        </motion.div>
      </section>
    </>
  );
}
