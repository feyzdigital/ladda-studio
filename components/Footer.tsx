"use client";

import Link from "next/link";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const footerLinks = {
  hizmetler: [
    { href: "/services/web-design", label: "Web Tasarım" },
    { href: "/services/seo-marketing", label: "SEO & Pazarlama" },
    { href: "/services/brand-identity", label: "Marka Kimliği" },
    { href: "/services/ui-ux-design", label: "UI/UX Tasarım" },
  ],
  kurumsal: [
    { href: "/", label: "Ana Sayfa" },
    { href: "/about", label: "Hakkımızda" },
    { href: "/work", label: "Projeler" },
    { href: "/contact", label: "İletişim" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-syne text-2xl font-bold text-accent"
            >
              Ladda
            </Link>
            <p className="mt-4 text-sm text-muted">
              We Load Your Digital Potential.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="mailto:info@ladda.studio"
                className="text-muted transition-colors hover:text-accent"
                aria-label="E-posta"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="text-muted transition-colors hover:text-accent"
                aria-label="Konum"
              >
                <MapPin size={20} />
              </a>
            </div>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="font-syne text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Hizmetler
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.hizmetler.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h3 className="font-syne text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Kurumsal
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.kurumsal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* E-bülten */}
          <div>
            <h3 className="font-syne text-sm font-semibold uppercase tracking-wider text-zinc-400">
              E-bülten
            </h3>
            <p className="mt-4 text-sm text-muted">
              Dijital dünyadaki gelişmelerden haberdar olun.
            </p>
            {subscribed ? (
              <p className="mt-4 text-sm text-accent">
                ✓ Aboneliğiniz alındı!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-posta adresiniz"
                  className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-sm text-zinc-100 placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  required
                />
                <button
                  type="submit"
                  className="rounded-lg bg-accent px-4 py-2 text-background transition-colors hover:bg-accent-muted"
                >
                  <Send size={18} />
                </button>
              </form>
            )}
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
