"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import { siteConfig, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl font-medium tracking-[0.2em] text-zinc-900"
            >
              LADDA
            </Link>
            <p className="mt-4 text-sm text-zinc-600">
              {siteConfig.slogan}
            </p>
          </div>

          <div>
            <h3 className="font-serif text-sm font-medium uppercase tracking-wider text-zinc-600">
              Hizmetler
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-zinc-600 transition-colors hover:text-accent"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm font-medium uppercase tracking-wider text-zinc-600">
              İletişim
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-zinc-600 transition-colors hover:text-accent"
                >
                  Randevu Al
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-accent"
                  aria-label="Instagram"
                >
                  <Instagram size={16} strokeWidth={1.5} />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm font-medium uppercase tracking-wider text-zinc-600">
              Yasal
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/gizlilik"
                  className="text-sm text-zinc-600 transition-colors hover:text-accent"
                >
                  Gizlilik
                </Link>
              </li>
              <li>
                <Link
                  href="/kullanim-kosullari"
                  className="text-sm text-zinc-600 transition-colors hover:text-accent"
                >
                  Kullanım Koşulları
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-zinc-200 pt-8">
          <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Ladda Studio. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
