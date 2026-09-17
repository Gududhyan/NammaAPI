import { Card } from "@/components/ui/Card";
import type { Industry } from "@/lib/data/industries";

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Card id={industry.id} hoverable className="scroll-mt-28">
      <h3 className="text-lg font-bold text-text-primary">{industry.name}</h3>
      <p className="mt-1 text-xs font-medium text-brand-primary">{industry.audience}</p>
      <p className="mt-3 text-sm text-text-secondary">{industry.description}</p>

      <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2">
        {industry.useCases.map((uc) => (
          <li key={uc} className="text-sm text-text-primary">
            <span className="mr-1.5 text-brand-primary">•</span>
            {uc}
          </li>
        ))}
      </ul>

      {industry.note && (
        <p className="mt-4 border-t border-brand-border pt-3 text-xs leading-relaxed text-text-secondary">
          {industry.note}
        </p>
      )}
    </Card>
  );
}
