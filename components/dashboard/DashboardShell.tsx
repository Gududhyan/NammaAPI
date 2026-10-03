"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { logout } from "@/app/actions/auth";
import type { NammaPaymentsAccount } from "@/lib/auth/session";
import { cn } from "@/lib/cn";

type ShellUser = {
  companyName: string;
  email: string;
  nammaPayments: NammaPaymentsAccount | null;
};

const icons = {
  home: "M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-9.5Z",
  projects: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z",
  transactions: "M7 7h13m0 0-3-3m3 3-3 3M17 17H4m0 0 3-3m-3 3 3 3",
  keys: "M15 7a4 4 0 1 1-3.87 5H9v2H7v2H4v-3l6.13-6.13A4 4 0 0 1 15 7Zm1 2h.01",
  settings:
    "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.4-3a7.4 7.4 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7.5 7.5 0 0 0-2-1.2L14.5 3h-5l-.4 2.6a7.5 7.5 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6a7.4 7.4 0 0 0 0 2.4l-2 1.6 2 3.4 2.4-1a7.5 7.5 0 0 0 2 1.2l.4 2.6h5l.4-2.6a7.5 7.5 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6c.07-.4.1-.8.1-1.2Z",
  docs: "M6 3h9l5 5v13H6V3Zm9 0v5h5M9 13h8M9 17h6",
  logout: "M15 17l5-5-5-5m5 5H9m3 9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "M6 6l12 12M18 6 6 18",
};

function Icon({ d }: { d: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <path d={d} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const nav = [
  { label: "Home", href: "/dashboard", icon: icons.home },
  { label: "Projects", href: "/dashboard/projects", icon: icons.projects },
  { label: "Transactions", href: "/dashboard/transactions", icon: icons.transactions },
  { label: "API Keys", href: "/dashboard/api-keys", icon: icons.keys },
  { label: "Settings", href: "/dashboard/settings", icon: icons.settings },
];

const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 2 });

/** Top-right wallet balance from the last login. */
function WalletBalance({ account }: { account: NammaPaymentsAccount | null }) {
  const amount = account?.walletBalance ?? account?.balance ?? null;
  return (
    <div className="text-right">
      <p className="text-[11px] font-medium uppercase tracking-wide text-text-secondary">Wallet balance</p>
      {amount === null ? (
        <p className="text-sm font-semibold text-text-secondary">Not available</p>
      ) : (
        <p className="font-mono text-base font-bold text-text-primary sm:text-lg">{inr.format(amount)}</p>
      )}
    </div>
  );
}

function SidebarContent({ user, pathname, onNavigate }: { user: ShellUser; pathname: string; onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-16 shrink-0 items-center border-b border-brand-border px-5">
        <Logo />
      </div>

      <nav aria-label="Dashboard" className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {nav.map((item) => {
            const active = item.href === "/dashboard" ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-brand-light text-brand-primary"
                      : "text-text-secondary hover:bg-brand-light/60 hover:text-text-primary",
                  )}
                >
                  <Icon d={item.icon} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="space-y-1 border-t border-brand-border px-3 py-4">
        <Link
          href="/developers"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-brand-light/60 hover:text-text-primary"
        >
          <Icon d={icons.docs} />
          API Docs
        </Link>
        <form action={logout}>
          <button
            type="submit"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-red-50 hover:text-red-600"
          >
            <Icon d={icons.logout} />
            Log out
          </button>
        </form>
        <div className="mt-3 rounded-lg bg-brand-light px-3 py-2.5">
          <p className="truncate text-sm font-semibold text-text-primary">{user.companyName}</p>
          <p className="truncate text-xs text-text-secondary">{user.email}</p>
        </div>
      </div>
    </div>
  );
}

export function DashboardShell({ user, children }: { user: ShellUser; children: ReactNode }) {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDrawerOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  return (
    <div className="flex min-h-screen bg-brand-light/40">
      {/* Desktop: sticky sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-brand-border bg-white lg:block">
        <SidebarContent user={user} pathname={pathname} />
      </aside>

      {/* Mobile: slide-in drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-brand-navy/40"
            onClick={() => setDrawerOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 w-72 max-w-[85vw] bg-white shadow-xl">
            <SidebarContent user={user} pathname={pathname} onNavigate={() => setDrawerOpen(false)} />
          </aside>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-brand-border bg-white/95 px-4 backdrop-blur sm:px-6">
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-text-primary hover:bg-brand-light"
            >
              <Icon d={icons.menu} />
            </button>
            <Logo />
          </div>
          <div className="ml-auto">
            <WalletBalance account={user.nammaPayments} />
          </div>
        </header>

        <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</div>
      </div>
    </div>
  );
}
