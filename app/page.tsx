"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectGallery from "@/components/ProjectGallery";
import { homeContent, services, projects } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero
        title={homeContent.hero.title}
        titleAccent={homeContent.hero.titleAccent}
        subtitle={homeContent.hero.subtitle}
        cta={homeContent.hero.cta}
        ctaLink="/contact"
        ctaSecondary={homeContent.hero.ctaSecondary}
        ctaSecondaryLink="/work"
      />

      {/* Hizmetler - Bento Grid */}
      <section className="border-t border-border bg-surface/50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-syne text-3xl font-bold text-zinc-100 sm:text-4xl">
              {homeContent.servicesPreview.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              {homeContent.servicesPreview.subtitle}
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
              className="inline-flex items-center gap-2 text-accent hover:text-accent-muted"
            >
              Tüm Hizmetleri Görüntüle
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projeler */}
      <section className="border-t border-border px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-syne text-3xl font-bold text-zinc-100 sm:text-4xl">
              {homeContent.workPreview.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              {homeContent.workPreview.subtitle}
            </p>
          </motion.div>

          <div className="mt-16">
            <ProjectGallery projects={projects} showAll={false} />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-muted"
            >
              Tüm Projeleri Görüntüle
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface/50 px-6 py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-syne text-3xl font-bold text-zinc-100 sm:text-4xl">
            {homeContent.cta.title}
          </h2>
          <p className="mt-4 text-muted">{homeContent.cta.subtitle}</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-background transition-colors hover:bg-accent-muted"
          >
            {homeContent.cta.button}
          </Link>
        </motion.div>
      </section>
    </>
  );
}
