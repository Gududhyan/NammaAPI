import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Create Business Account",
    description: "Sign up and provide your business details to get started.",
  },
  {
    step: "02",
    title: "Integrate API",
    description: "Use our sandbox and documentation to connect the relevant APIs to your systems.",
  },
  {
    step: "03",
    title: "Initiate Payments / Payouts",
    description: "Start sending payouts, collecting payments, or processing salary batches.",
  },
  {
    step: "04",
    title: "Track, Reconcile & Report",
    description: "Monitor transaction status, reconcile against your records, and generate reports.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-brand-light py-20 sm:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="How It Works" title="From Signup to Your First Transaction" />

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-6 left-0 right-0 hidden h-px bg-brand-border lg:block" aria-hidden="true" />
          {steps.map((s) => (
            <div key={s.step} className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-primary bg-white font-mono text-sm font-bold text-brand-primary">
                {s.step}
              </div>
              <h3 className="mt-5 text-base font-semibold text-text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
