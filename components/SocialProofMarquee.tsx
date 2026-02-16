"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { homeContent, galleryItems } from "@/lib/data";

export default function SocialProofMarquee() {
  const duplicatedItems = [...galleryItems, ...galleryItems];

  return (
    <section className="border-t border-zinc-800 bg-zinc-950 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl font-medium text-zinc-100 sm:text-4xl">
            {homeContent.socialProof.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            {homeContent.socialProof.subtitle}
          </p>
        </motion.div>

        <div className="mt-16 overflow-hidden">
          <motion.div
            animate={{ x: [0, -2016] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            className="flex gap-6"
          >
            {duplicatedItems.map((item) => (
              <div
                key={`${item.slug}-${item.image}`}
                className="relative h-80 w-80 shrink-0 overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
