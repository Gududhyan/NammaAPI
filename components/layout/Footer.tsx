import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { footerNav } from "@/lib/data/nav";

const columns = [
  { title: "Products", links: footerNav.products },
  { title: "Solutions", links: footerNav.solutions },
  { title: "Developers", links: footerNav.developers },
  { title: "Company", links: footerNav.company },
  { title: "Legal", links: footerNav.legal },
];

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white/70">
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(5,1fr)]">
          <div>
            <Logo variant="white" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Payment infrastructure for modern businesses — payouts, collections, salary
              processing and automation, built on APIs.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} NammaAPI Technologies Pvt. Ltd. — placeholder legal entity name and
            registered address to be added here.
          </p>
          <p>Payment infrastructure for businesses. Not a bank. Not a wallet.</p>
        </div>
      </div>
    </footer>
  );
}
