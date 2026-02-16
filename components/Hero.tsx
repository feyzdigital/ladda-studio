"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  titleAccent?: string;
  subtitle?: string;
  cta?: string;
  ctaLink?: string;
  size?: "default" | "small";
  className?: string;
  backgroundImage?: string;
}

export default function Hero({
  title,
  titleAccent,
  subtitle,
  cta,
  ctaLink = "/contact",
  size = "default",
  className,
  backgroundImage = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&h=1080&fit=crop",
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        size === "default" ? "min-h-[90vh] lg:min-h-[95vh]" : "py-24",
        className
      )}
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-center px-6 py-24 text-center lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={cn(
            "font-serif font-medium tracking-wide text-white",
            size === "default"
              ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              : "text-3xl sm:text-4xl md:text-5xl"
          )}
        >
          {title}{" "}
          {titleAccent && (
            <span className="text-accent gold-glow">{titleAccent}</span>
          )}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-2xl text-lg text-silver sm:text-xl"
          >
            {subtitle}
          </motion.p>
        )}

        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-10"
          >
            <Link
              href={ctaLink}
              className="group inline-flex items-center gap-2 border border-accent bg-accent/10 px-8 py-3 font-medium text-accent transition-all hover:bg-accent hover:text-background"
            >
              {cta}
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
