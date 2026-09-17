import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const pillars = [
  {
    title: "API Authentication",
    description: "Every request is authenticated with scoped API keys managed from your dashboard.",
  },
  {
    title: "Role-Based Access Control",
    description: "Control what each team member can view and action within your business account.",
  },
  {
    title: "Audit Logs",
    description: "Key account and transaction actions are recorded for traceability.",
  },
  {
    title: "Webhook Verification",
    description: "Webhook payloads are signed so you can verify they originated from our platform.",
  },
];

export function SecuritySection() {
  return (
    <section className="bg-brand-light py-20 sm:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Security & Compliance"
          title="Security Built Into Every Transaction"
          description="Capabilities designed into the platform's architecture. See the full Security & Compliance page for details."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <Card key={p.title}>
              <h3 className="text-sm font-semibold text-text-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{p.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/security" className="text-sm font-semibold text-brand-primary hover:text-brand-dark">
            Read the full Security &amp; Compliance page →
          </Link>
        </div>
      </div>
    </section>
  );
}
