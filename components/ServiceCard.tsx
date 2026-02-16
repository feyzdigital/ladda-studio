"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, TrendingUp, Award, Layout } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/data";

const iconMap = {
  Globe,
  TrendingUp,
  Award,
  Layout,
  Zap: Globe,
  Atom: Globe,
  Code: Globe,
  Palette: Globe,
  Server: Globe,
  BarChart: TrendingUp,
  Search: TrendingUp,
  Target: TrendingUp,
  FileCode: TrendingUp,
  PenTool: Award,
  Layers: Award,
  BookOpen: Award,
  MousePointer: Layout,
  Grid: Layout,
  Users: Layout,
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
    iconMap[service.icon as keyof typeof iconMap] || Globe;

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-surface p-6 transition-all",
        "bento-card hover:border-accent/30",
        variant === "bento" && "flex flex-col",
        variant === "compact" && "p-4"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent",
            variant === "compact" && "h-10 w-10"
          )}
        >
          <IconComponent size={variant === "compact" ? 20 : 24} />
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
          "mt-4 font-syne font-semibold text-zinc-100",
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
