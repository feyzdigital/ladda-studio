"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { services, siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  {
    href: "/services",
    label: "Hizmetler",
    subLinks: services.map((s) => ({ href: `/services/${s.slug}`, label: s.shortTitle })),
  },
  { href: "/contact", label: "İletişim" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="font-serif text-xl font-medium tracking-[0.2em] text-zinc-100 transition-colors hover:text-accent"
        >
          LADDA
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
                      : "text-zinc-400"
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
                      <div className="flex flex-col gap-1 rounded border border-zinc-800 bg-zinc-950/95 p-2 shadow-xl backdrop-blur-xl">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={cn(
                              "whitespace-nowrap rounded px-3 py-2 text-sm transition-colors hover:bg-accent/10 hover:text-accent",
                              pathname === sub.href ? "text-accent" : "text-zinc-400"
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
                  pathname === link.href ? "text-accent after:w-full" : "text-zinc-400"
                )}
              >
                {link.label}
              </Link>
            )
          )}
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-accent bg-transparent text-accent hover:border-accent-hover hover:bg-accent-hover/10 hover:text-accent-hover"
            >
              Randevu Al
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link href="/contact">
            <Button
              variant="outline"
              size="sm"
              className="border-accent bg-transparent text-accent"
            >
              Randevu Al
            </Button>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-accent"
            aria-label="Menüyü aç/kapat"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block py-3 text-base font-medium",
                      pathname === link.href ? "text-accent" : "text-zinc-400"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.subLinks && (
                    <div className="ml-4 flex flex-col gap-1 border-l border-zinc-800 pl-4">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "py-2 text-sm",
                            pathname === sub.href ? "text-accent" : "text-zinc-500"
                          )}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-base font-medium text-zinc-400 hover:text-accent"
              >
                Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
