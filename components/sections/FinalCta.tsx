import { Button } from "@/components/ui/Button";

export function FinalCta() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-6 py-16 shadow-xl shadow-brand-primary/20 sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid-light" aria-hidden="true" />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Automate Your Business Payments?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Talk to our team or start integrating with the sandbox — no commitment required to explore the APIs.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/signup" variant="secondary" size="lg">
                Get Started
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
