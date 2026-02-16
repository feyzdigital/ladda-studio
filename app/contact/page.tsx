import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { contactContent } from "@/lib/data";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Ladda Studio ile iletişime geçin. Projenizi konuşmak, teklif almak veya sorularınızı iletmek için bize ulaşın.",
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
            {/* Form */}
            <div>
              <h2 className="font-syne text-xl font-semibold text-zinc-100">
                Bize Yazın
              </h2>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* İletişim Bilgileri & Harita placeholder */}
            <div>
              <h2 className="font-syne text-xl font-semibold text-zinc-100">
                İletişim Bilgileri
              </h2>
              <div className="mt-8 space-y-6">
                <a
                  href={`mailto:${contactContent.info.email}`}
                  className="flex items-center gap-3 text-muted transition-colors hover:text-accent"
                >
                  <Mail size={20} />
                  {contactContent.info.email}
                </a>
                <div className="flex items-center gap-3 text-muted">
                  <MapPin size={20} />
                  {contactContent.info.address}
                </div>
              </div>

              {/* Harita placeholder */}
              <div className="mt-12 aspect-video overflow-hidden rounded-xl border border-border bg-surface">
                <div className="flex h-full items-center justify-center">
                  <p className="text-sm text-muted">
                    Harita entegrasyonu (Google Maps API key ile)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
