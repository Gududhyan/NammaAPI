"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/lib/data/nav";
import { cn } from "@/lib/cn";

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo priority />

        <nav aria-label="Primary" className="hidden lg:flex lg:items-center lg:gap-1">
          {primaryNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.items && setOpenMenu(item.label)}
              onMouseLeave={() => item.items && setOpenMenu(null)}
            >
              <Link
                href={item.href ?? "#"}
                className="flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium text-text-primary transition-colors hover:text-brand-primary"
                aria-haspopup={item.items ? "true" : undefined}
                aria-expanded={item.items ? openMenu === item.label : undefined}
              >
                {item.label}
                {item.items && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </Link>

              {item.items && openMenu === item.label && (
                <div className="absolute left-0 top-full w-72 pt-2">
                  <div className="rounded-xl border border-brand-border bg-white p-2 shadow-xl shadow-brand-navy/5">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block rounded-lg px-3.5 py-2.5 transition-colors hover:bg-brand-light"
                      >
                        <span className="block text-sm font-semibold text-text-primary">{sub.label}</span>
                        {sub.description && (
                          <span className="mt-0.5 block text-xs text-text-secondary">{sub.description}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="rounded-lg px-3.5 py-2 text-sm font-semibold text-text-primary transition-colors hover:text-brand-primary"
          >
            Login
          </Link>
          <Button href="/signup" size="sm">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-text-primary lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M3 6H19M3 11H19M3 16H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-brand-border bg-white transition-[max-height] duration-300 lg:hidden",
          mobileOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0",
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 py-4">
          {primaryNav.map((item) => (
            <div key={item.label} className="border-b border-brand-border/70 pb-2 last:border-b-0">
              <Link
                href={item.href ?? "#"}
                onClick={() => setMobileOpen(false)}
                className="block px-1 py-2.5 text-sm font-semibold text-text-primary"
              >
                {item.label}
              </Link>
              {item.items && (
                <div className="mb-2 flex flex-col gap-0.5 pl-3">
                  {item.items.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-md px-1 py-2 text-sm text-text-secondary hover:text-brand-primary"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <Button href="/login" variant="secondary" size="sm">
              Login
            </Button>
            <Button href="/signup" size="sm">
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
