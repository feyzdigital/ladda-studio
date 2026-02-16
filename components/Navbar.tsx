"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/about", label: "Hakkımızda" },
  {
    href: "/services",
    label: "Hizmetler",
    subLinks: [
      { href: "/services/web-design", label: "Web Tasarım" },
      { href: "/services/seo-marketing", label: "SEO & Pazarlama" },
      { href: "/services/brand-identity", label: "Marka Kimliği" },
      { href: "/services/ui-ux-design", label: "UI/UX Tasarım" },
    ],
  },
  { href: "/work", label: "Projeler" },
  { href: "/contact", label: "İletişim" },
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
          className="font-syne text-xl font-bold tracking-tight text-accent transition-colors hover:text-accent-muted"
        >
          Ladda
        </Link>

        {/* Desktop Navigation */}
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
                      : "text-zinc-300"
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
                      <div className="flex flex-col gap-1 rounded-lg border border-border bg-surface p-2 shadow-xl">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={cn(
                              "whitespace-nowrap rounded px-3 py-2 text-sm transition-colors hover:bg-accent/10 hover:text-accent",
                              pathname === sub.href ? "text-accent" : "text-zinc-300"
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
                  pathname === link.href ? "text-accent after:w-full" : "text-zinc-300"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-accent"
          aria-label="Menüyü aç/kapat"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
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
                      pathname === link.href ? "text-accent" : "text-zinc-300"
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
                            pathname === sub.href ? "text-accent" : "text-zinc-400"
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
