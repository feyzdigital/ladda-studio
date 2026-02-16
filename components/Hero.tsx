"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        size === "default" ? "min-h-screen" : "py-24",
        className
      )}
    >
      <div className="absolute inset-0 -z-10">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover scale-110"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-zinc-950/85 via-zinc-950/70 to-zinc-950"
          aria-hidden
        />
      </div>

      <motion.div
        style={{ opacity: size === "default" ? opacity : 1 }}
        className="relative mx-auto flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center lg:px-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={cn(
            "font-serif font-medium tracking-wide text-zinc-100",
            size === "default"
              ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              : "text-3xl sm:text-4xl md:text-5xl"
          )}
        >
          {title}
          {titleAccent && (
            <span className="text-accent gold-glow"> {titleAccent}</span>
          )}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl"
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
              className="group inline-flex items-center gap-2 border border-accent bg-accent/10 px-8 py-3 font-medium text-accent transition-all hover:border-accent-hover hover:bg-accent-hover/10 hover:text-accent-hover"
            >
              {cta}
              <ArrowRight
                size={18}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
