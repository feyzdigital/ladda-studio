"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Scissors, Palette, Sparkles, Heart, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/data";

const iconMap = {
  Scissors,
  Palette,
  Sparkles,
  Heart,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
  variant?: "default" | "bento" | "compact";
}

export default function ServiceCard({
  service,
  index = 0,
  variant = "default",
}: ServiceCardProps) {
  const IconComponent =
    iconMap[service.icon as keyof typeof iconMap] || Scissors;

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded border border-border bg-surface p-6 transition-all",
        "bento-card hover:border-accent/30",
        variant === "bento" && "flex flex-col",
        variant === "compact" && "p-4"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center border border-accent/30 text-accent",
            variant === "compact" && "h-10 w-10"
          )}
        >
          <IconComponent size={variant === "compact" ? 20 : 24} strokeWidth={1.5} />
        </div>
        {variant !== "compact" && (
          <ArrowRight
            size={18}
            className="shrink-0 text-muted transition-all group-hover:translate-x-1 group-hover:text-accent"
          />
        )}
      </div>

      <h3
        className={cn(
          "mt-4 font-serif font-medium text-white",
          variant === "compact" ? "text-base" : "text-lg"
        )}
      >
        {service.shortTitle}
      </h3>
      <p
        className={cn(
          "mt-2 text-muted",
          variant === "compact" ? "text-sm" : "text-base"
        )}
      >
        {service.description}
      </p>
      {service.priceRange && variant === "bento" && (
        <p className="mt-2 text-sm text-accent">{service.priceRange}</p>
      )}

      {variant === "bento" && (
        <Link
          href={`/services/${service.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-muted"
        >
          Detayları İncele
          <ArrowRight size={14} />
        </Link>
      )}
    </motion.div>
  );

  if (variant === "default" || variant === "compact") {
    return (
      <Link href={`/services/${service.slug}`} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
