"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/lib/data";

interface GalleryProps {
  items: GalleryItem[];
}

export default function Gallery({ items }: GalleryProps) {
  return (
    <div
      className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
      style={{
        gridAutoRows: "minmax(200px, auto)",
      }}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className={cn(
            "group relative overflow-hidden",
            item.aspect === "portrait" && "row-span-2",
            item.aspect === "landscape" && "col-span-2",
            item.aspect === "square" && "row-span-1 col-span-1"
          )}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform group-hover:translate-y-0">
            <p className="font-serif text-lg font-medium text-zinc-100">
              {item.title}
            </p>
            <p className="text-sm text-silver">{item.category}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
