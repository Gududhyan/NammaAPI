import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-brand-light px-4 py-16">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-primary">404</p>
        <h1 className="mt-2 text-3xl font-bold text-text-primary">We couldn&apos;t find that page</h1>
        <p className="mt-3 text-text-secondary">The link may be broken or the page may have moved.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Go to homepage</Button>
          <Button href="/contact" variant="secondary">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
