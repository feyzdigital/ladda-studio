"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import { aboutContent } from "@/lib/data";

export default function AboutContent() {
  return (
    <>
      <Hero
        title="Hakkımızda"
        subtitle="Dijital potansiyeli yükleyen ajansın hikayesi ve felsefesi."
        size="small"
      />

      <section className="border-t border-border px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-syne text-2xl font-bold text-accent">
            {aboutContent.story.title}
          </h2>
          <div className="mt-8 space-y-6 text-muted">
            {aboutContent.story.paragraphs.map((paragraph, index) => (
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
            Değerlerimiz
          </motion.h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {aboutContent.values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="font-syne text-lg font-semibold text-accent">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-muted">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-syne text-2xl font-bold text-zinc-100"
          >
            {aboutContent.team.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted"
          >
            {aboutContent.team.subtitle}
          </motion.p>
        </div>
      </section>
    </>
  );
}
