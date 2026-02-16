"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Instagram } from "lucide-react";
import { siteConfig, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl font-medium text-accent"
            >
              Ladda
            </Link>
            <p className="mt-4 text-sm text-muted">
              Beşiktaş'ta Afrika Esintisi
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-muted transition-colors hover:text-accent"
                aria-label="E-posta"
              >
                <Mail size={20} />
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-muted transition-colors hover:text-accent"
                aria-label="Telefon"
              >
                <Phone size={20} />
              </a>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-accent"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-sm font-medium uppercase tracking-wider text-zinc-400">
              Hizmetler
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm font-medium uppercase tracking-wider text-zinc-400">
              Keşfet
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/team" className="text-sm text-muted transition-colors hover:text-accent">
                  Ekip
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-muted transition-colors hover:text-accent">
                  Çalışmalarımız
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted transition-colors hover:text-accent">
                  Randevu
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm font-medium uppercase tracking-wider text-zinc-400">
              Çalışma Saatleri
            </h3>
            <div className="mt-4 space-y-2 text-sm text-muted">
              <p>Pzt - Cuma: {siteConfig.hours.weekdays}</p>
              <p>Cumartesi: {siteConfig.hours.saturday}</p>
              <p>Pazar: {siteConfig.hours.sunday}</p>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted">
              <MapPin size={16} />
              {siteConfig.address}
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="text-center text-sm text-muted">
            © {new Date().getFullYear()} Ladda Studio. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
