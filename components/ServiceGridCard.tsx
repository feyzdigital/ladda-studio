"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/data";

interface ServiceGridCardProps {
  service: Service;
  index?: number;
}

export default function ServiceGridCard({ service, index = 0 }: ServiceGridCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative aspect-[3/4] overflow-hidden"
    >
      <Link href={`/services/${service.slug}`} className="block h-full">
        <div className="relative h-full w-full">
          <Image
            src={service.image || "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop"}
            alt={service.shortTitle}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h3 className="font-serif text-2xl font-medium text-zinc-100 sm:text-3xl">
              {service.shortTitle}
            </h3>
            <p className="mt-1 text-sm text-accent">{service.focus}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
              Randevu Oluştur
              <ArrowRight size={16} strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
