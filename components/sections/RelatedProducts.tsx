import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { products } from "@/lib/data/products";

export function RelatedProducts({ currentSlug }: { currentSlug: string }) {
  const others = products.filter((p) => p.slug !== currentSlug);
  return (
    <section className="bg-brand-light py-20 sm:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Explore More" title="Other Products" align="left" />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {others.map((p) => (
            <Link key={p.slug} href={p.href}>
              <Card hoverable className="h-full">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{p.shortName}</p>
                <h3 className="mt-2 text-base font-bold text-text-primary">{p.name}</h3>
                <p className="mt-2 text-sm text-text-secondary">{p.tagline}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
