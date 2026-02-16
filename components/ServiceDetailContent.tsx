"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Droplet, Moon, Sparkles, Waves } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import type { Service } from "@/lib/data";

const maintenanceIconMap = {
  Droplet,
  Moon,
  Sparkles,
  Waves,
};

interface ServiceDetailContentProps {
  service: Service;
}

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const [styleIndex, setStyleIndex] = useState(0);
  const variation = service.variations[styleIndex];

  return (
    <article>
      {/* Editorial Header - Split screen */}
      <section className="grid min-h-[70vh] grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-24 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-serif text-4xl font-medium text-zinc-100 sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-4 text-lg text-accent">{service.focus}</p>
            <p className="mt-6 text-zinc-400">{service.description}</p>
            <Link href="/contact" className="mt-10 inline-block">
              <Button className="border-accent bg-accent px-8 py-6 text-base text-zinc-950 hover:bg-accent-hover hover:border-accent-hover">
                Randevu Oluştur
                <ArrowRight size={18} strokeWidth={1.5} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
        <div className="relative min-h-[50vh] lg:min-h-[70vh]">
          <Image
            src={service.image || "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=1067&fit=crop"}
            alt={service.title}
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
        </div>
      </section>

      {/* Nedir? Section */}
      <section className="border-t border-zinc-800 bg-zinc-950 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-2xl font-medium text-zinc-100"
          >
            Nedir?
          </motion.h2>
          <div className="mt-6 space-y-6 text-zinc-400">
            {service.intro.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Style Gallery */}
      {service.variations.length > 0 && (
        <section className="border-t border-zinc-800 px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-2xl font-medium text-zinc-100"
            >
              Stil Varyasyonları
            </motion.h2>
            <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
              {service.variations.map((v, index) => (
                <button
                  key={v.name}
                  onClick={() => setStyleIndex(index)}
                  className={`relative h-64 w-48 shrink-0 overflow-hidden transition-all ${
                    styleIndex === index
                      ? "ring-2 ring-accent"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
                  <span className="absolute bottom-2 left-2 font-serif text-sm font-medium text-zinc-100">
                    {v.name}
                  </span>
                </button>
              ))}
            </div>
            {variation && (
              <motion.div
                key={variation.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6"
              >
                <h3 className="font-serif text-lg font-medium text-accent">
                  {variation.name}
                </h3>
                <p className="mt-2 text-zinc-400">{variation.description}</p>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Hizmet Kapsamı */}
      <section className="border-t border-zinc-800 bg-surface px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-2xl font-medium text-zinc-900"
          >
            Hizmet Kapsamı
          </motion.h2>
          <ul className="mt-8 space-y-4">
            {service.details.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <Check size={20} strokeWidth={1.5} className="shrink-0 text-accent" />
                <span className="text-zinc-600">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Maintenance (Bakım) */}
      {service.maintenance.length > 0 && (
        <section className="border-t border-zinc-800 px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-2xl font-medium text-zinc-100"
            >
              Bakım
            </motion.h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {service.maintenance.map((item, index) => {
                const IconComponent =
                  maintenanceIconMap[item.icon as keyof typeof maintenanceIconMap] || Droplet;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="flex h-12 w-12 items-center justify-center border border-accent/30 text-accent">
                      <IconComponent size={22} strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-4 font-serif font-medium text-zinc-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Accordion */}
      <section className="border-t border-zinc-800 bg-zinc-950 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-2xl font-medium text-zinc-100"
          >
            Sık Sorulan Sorular
          </motion.h2>
          <Accordion type="single" collapsible className="mt-8">
            {service.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-zinc-800"
                itemScope
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger className="text-left font-serif font-medium text-zinc-100 hover:no-underline hover:text-accent">
                  <span itemProp="name">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-zinc-400">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800 bg-surface px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-zinc-600">
            Bu hizmet için randevu almak için bizimle iletişime geçin.
          </p>
          <Link href="/contact" className="mt-6 inline-block">
            <Button className="border-accent bg-accent px-8 py-6 text-base text-zinc-950 hover:bg-accent-hover hover:border-accent-hover">
              Randevu Oluştur
              <ArrowRight size={18} strokeWidth={1.5} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </article>
  );
}
