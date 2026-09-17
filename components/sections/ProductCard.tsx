import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { Product } from "@/lib/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card hoverable className="flex h-full flex-col">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{product.shortName}</p>
      <h3 className="mt-2 text-xl font-bold text-text-primary">{product.name}</h3>
      <p className="mt-2 text-sm text-text-secondary">{product.description}</p>

      <ul className="mt-5 space-y-2">
        {product.features.slice(0, 4).map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-text-primary">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="mt-0.5 shrink-0 text-brand-primary"
              aria-hidden="true"
            >
              <path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <Link
        href={product.href}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-dark"
      >
        {product.cta}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </Card>
  );
}
