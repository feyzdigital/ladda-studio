import type { Metadata } from "next";
import { Mail, MapPin, Phone, Instagram } from "lucide-react";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { contactContent, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Randevu & İletişim",
  description:
    "Ladda Studio randevu alın. Adres, telefon ve çalışma saatleri.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title={contactContent.title}
        subtitle={contactContent.subtitle}
        size="small"
      />

      <section className="border-t border-border px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-xl font-medium text-white">
                Randevu Talebi
              </h2>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div>
              <h2 className="font-serif text-xl font-medium text-white">
                İletişim Bilgileri
              </h2>
              <div className="mt-8 space-y-6">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-muted transition-colors hover:text-accent"
                >
                  <Mail size={20} />
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-muted transition-colors hover:text-accent"
                >
                  <Phone size={20} />
                  {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted transition-colors hover:text-accent"
                >
                  <Instagram size={20} />
                  @laddastudio
                </a>
                <div className="flex items-center gap-3 text-muted">
                  <MapPin size={20} />
                  {siteConfig.address}
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-serif text-sm font-medium uppercase tracking-wider text-zinc-400">
                  Çalışma Saatleri
                </h3>
                <div className="mt-4 space-y-2 text-muted">
                  <p>Pzt - Cuma: {siteConfig.hours.weekdays}</p>
                  <p>Cumartesi: {siteConfig.hours.saturday}</p>
                  <p>Pazar: {siteConfig.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
