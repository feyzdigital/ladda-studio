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
          {service.priceRange && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 font-serif text-xl font-medium text-accent"
            >
              Fiyat Aralığı: {service.priceRange}
            </motion.p>
          )}
        </div>
      </section>

      {/* Hizmet Detayları */}
      <section className="border-t border-border bg-surface/50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-2xl font-medium text-white"
          >
            Hizmet Kapsamı
          </motion.h2>
          <ul className="mt-8 space-y-4">
            {service.details.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <Check size={20} className="shrink-0 text-accent" />
                <span className="text-muted">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-2xl font-medium text-white"
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
                className="border border-border bg-surface p-6"
              >
                <h3
                  itemProp="name"
                  className="font-serif font-medium text-white"
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

      {/* CTA */}
      <section className="border-t border-border bg-surface/50 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-muted">
            Bu hizmet için randevu almak için bizimle iletişime geçin.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 border border-accent bg-accent px-6 py-3 font-medium text-background transition-colors hover:bg-accent-muted"
          >
            Randevu Al
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
