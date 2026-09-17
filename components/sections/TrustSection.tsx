import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const capabilities = [
  {
    title: "Fast API Integration",
    description: "Integrate payouts and payment collection into your systems with clear, well-documented REST APIs.",
  },
  {
    title: "Automated Processing",
    description: "Reduce manual work by automating recurring and scheduled payment operations.",
  },
  {
    title: "Bulk Transactions",
    description: "Submit and track large batches of payments and payouts through a single workflow.",
  },
  {
    title: "Real-Time Status Updates",
    description: "Track transaction status through webhooks and status APIs as payments move through the system.",
  },
  {
    title: "Reconciliation",
    description: "Match transactions against your internal records to keep your books accurate.",
  },
  {
    title: "Developer-Friendly APIs",
    description: "Sandbox environments, clear documentation and SDK-ready patterns for engineering teams.",
  },
];

const icons = [
  <path key="1" d="M4 12L10 6L14 10L20 4M20 4H14M20 4V10" strokeLinecap="round" strokeLinejoin="round" />,
  <path key="2" d="M4 6H20M4 12H20M4 18H14" strokeLinecap="round" />,
  <path key="3" d="M4 8H20M4 14H14M4 8V18H20V8M4 8L7 4H17L20 8" strokeLinecap="round" strokeLinejoin="round" />,
  <path key="4" d="M12 4V12L17 15" strokeLinecap="round" strokeLinejoin="round" />,
  <path key="5" d="M6 8L4 12L6 16M18 8L20 12L18 16M14 4L10 20" strokeLinecap="round" strokeLinejoin="round" />,
  <path key="6" d="M4 18L10 10L14 13L20 5M20 5H15M20 5V10" strokeLinecap="round" strokeLinejoin="round" />,
];

export function TrustSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Businesses Choose Us"
          title="Built for Businesses That Move Money"
          description="A consistent set of capabilities across every product, designed for finance teams and engineering teams alike."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => (
            <Card key={item.title} hoverable>
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-light text-brand-primary">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {icons[i]}
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-text-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
