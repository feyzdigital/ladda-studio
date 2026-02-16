"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data";

interface ProjectGalleryProps {
  projects: Project[];
  columns?: 2 | 3;
  showAll?: boolean;
}

export default function ProjectGallery({
  projects,
  columns = 3,
  showAll = false,
}: ProjectGalleryProps) {
  const displayProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div
      className={cn(
        "grid gap-6",
        columns === 2 && "md:grid-cols-2",
        columns === 3 && "md:grid-cols-2 lg:grid-cols-3"
      )}
    >
      {displayProjects.map((project, index) => (
        <motion.article
          key={project.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link
            href={`/work/${project.slug}`}
            className="group block overflow-hidden rounded-xl border border-border bg-surface transition-all hover:border-accent/30"
          >
            {/* Placeholder image - gerçek projede görsel kullanılır */}
            <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
              <span className="font-syne text-4xl font-bold text-zinc-700">
                {project.title.charAt(0)}
              </span>
            </div>

            <div className="p-6">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                {project.category}
              </span>
              <h3 className="mt-2 font-syne text-lg font-semibold text-zinc-100 transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
                Projeyi İncele
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
