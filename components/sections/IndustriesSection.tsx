import { SectionHeading } from "@/components/ui/SectionHeading";
import { IndustryCard } from "@/components/sections/IndustryCard";
import { industries } from "@/lib/data/industries";

export function IndustriesSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industry Solutions"
          title="Built Around Your Business"
          description="The same reliable payment infrastructure, configured for how your industry actually operates."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
}
