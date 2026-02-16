"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Hero from "@/components/Hero";
import type { Service } from "@/lib/data";

interface ServiceDetailContentProps {
  service: Service;
}

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  return (
    <>
      <Hero
        title={service.title}
        subtitle={service.description}
        size="small"
      />

      <section className="border-t border-border px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 text-muted">
            {service.intro.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-syne text-2xl font-bold text-zinc-100"
          >
            Nasıl Çalışıyoruz?
          </motion.h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <span className="text-4xl font-bold text-accent/30">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-syne font-semibold text-zinc-100">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-syne text-2xl font-bold text-zinc-100"
          >
            Kullandığımız Teknolojiler
          </motion.h2>
          <div className="mt-8 flex flex-wrap gap-4">
            {service.technologies.map((tech, index) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm text-zinc-300"
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-syne text-2xl font-bold text-zinc-100"
          >
            Neden Bizi Seçmelisiniz?
          </motion.h2>
          <ul className="mt-8 space-y-4">
            {service.whyUs.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <Check size={20} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-muted">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-syne text-2xl font-bold text-zinc-100"
          >
            Sık Sorulan Sorular
          </motion.h2>
          <div className="mt-8 space-y-6">
            {service.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                itemScope
                itemType="https://schema.org/Question"
                className="rounded-lg border border-border bg-surface p-6"
              >
                <h3
                  itemProp="name"
                  className="font-syne font-semibold text-zinc-100"
                >
                  {faq.question}
                </h3>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                  className="mt-3 text-muted"
                >
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/50 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-muted">
            Bu hizmet hakkında detaylı bilgi almak veya teklif istemek için
            bizimle iletişime geçin.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-background transition-colors hover:bg-accent-muted"
          >
            İletişime Geçin
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
