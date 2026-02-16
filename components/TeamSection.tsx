"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { teamMembers } from "@/lib/data";

interface TeamSectionProps {
  showAll?: boolean;
}

export default function TeamSection({ showAll = false }: TeamSectionProps) {
  const members = showAll ? teamMembers : teamMembers.slice(0, 4);

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {members.map((member, index) => (
        <motion.article
          key={member.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-serif text-xl font-medium text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {member.role}
              </p>
              <p className="text-sm text-silver">{member.specialty}</p>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
