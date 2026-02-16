"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  titleAccent?: string;
  subtitle?: string;
  cta?: string;
  ctaLink?: string;
  ctaSecondary?: string;
  ctaSecondaryLink?: string;
  size?: "default" | "small";
  className?: string;
}

export default function Hero({
  title,
  titleAccent,
  subtitle,
  cta,
  ctaLink = "/contact",
  ctaSecondary,
  ctaSecondaryLink = "/work",
  size = "default",
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden px-6 py-24 lg:px-8",
        size === "default" ? "min-h-[80vh] lg:min-h-[85vh]" : "py-20",
        className
      )}
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={cn(
            "font-syne font-bold tracking-tight text-zinc-100",
            size === "default"
              ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              : "text-3xl sm:text-4xl md:text-5xl"
          )}
        >
          {title}{" "}
          {titleAccent && (
            <span className="text-accent neon-glow">{titleAccent}</span>
          )}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl"
          >
            {subtitle}
          </motion.p>
        )}

        {(cta || ctaSecondary) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {cta && (
              <Link
                href={ctaLink}
                className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-background transition-all hover:bg-accent-muted hover:shadow-lg hover:shadow-accent/20"
              >
                {cta}
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            )}
            {ctaSecondary && (
              <Link
                href={ctaSecondaryLink}
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium text-zinc-300 transition-colors hover:border-accent hover:text-accent"
              >
                {ctaSecondary}
              </Link>
            )}
          </motion.div>
        )}
      </div>

      {/* Gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(204, 255, 0, 0.08) 0%, transparent 50%)",
        }}
      />
    </section>
  );
}
