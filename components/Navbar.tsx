"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  {
    href: "/services",
    label: "Hizmetler",
    subLinks: services.map((s) => ({ href: `/services/${s.slug}`, label: s.shortTitle })),
  },
  { href: "/team", label: "Ekip" },
  { href: "/gallery", label: "Lookbook" },
  { href: "/contact", label: "Randevu" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="font-serif text-xl font-medium tracking-wide text-accent transition-colors hover:text-accent-muted"
        >
          Ladda
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.subLinks ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesHover(true)}
                onMouseLeave={() => setServicesHover(false)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:text-accent after:hover:w-full",
                    pathname.startsWith(link.href)
                      ? "text-accent after:w-full"
                      : "text-silver"
                  )}
                >
                  {link.label}
                </Link>
                <AnimatePresence>
                  {servicesHover && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full pt-2"
                    >
                      <div className="flex flex-col gap-1 rounded border border-border bg-surface p-2 shadow-xl">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={cn(
                              "whitespace-nowrap rounded px-3 py-2 text-sm transition-colors hover:bg-accent/10 hover:text-accent",
                              pathname === sub.href ? "text-accent" : "text-silver"
                            )}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:text-accent after:hover:w-full",
                  pathname === link.href ? "text-accent after:w-full" : "text-silver"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-silver hover:text-accent"
          aria-label="Menüyü aç/kapat"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-surface"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block py-3 text-base font-medium",
                      pathname === link.href ? "text-accent" : "text-silver"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.subLinks && (
                    <div className="ml-4 flex flex-col gap-1 border-l border-border pl-4">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "py-2 text-sm",
                            pathname === sub.href ? "text-accent" : "text-muted"
                          )}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
