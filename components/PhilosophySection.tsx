"use client";

import { motion } from "framer-motion";
import { Shield, Award, Gem } from "lucide-react";
import { homeContent } from "@/lib/data";

const iconMap = {
  Shield,
  Award,
  Gem,
};

export default function PhilosophySection() {
  return (
    <section className="border-t border-zinc-800 bg-surface px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl font-medium text-zinc-900 sm:text-4xl">
            {homeContent.philosophy.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
            {homeContent.philosophy.subtitle}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {homeContent.philosophy.pillars.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon as keyof typeof iconMap] || Shield;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center border border-accent/30 text-accent">
                  <IconComponent size={24} strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-medium text-zinc-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
