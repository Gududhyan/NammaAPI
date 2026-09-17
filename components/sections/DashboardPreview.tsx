import { SectionHeading } from "@/components/ui/SectionHeading";
import { DashboardPreviewIllustration } from "@/components/illustrations/DashboardPreviewIllustration";

export function DashboardPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Dashboard"
          title="Visibility Into Every Transaction"
          description="A single dashboard for payments, payouts, salary batches and reconciliation. Preview shown with sample data."
        />

        <div className="mx-auto mt-14 max-w-5xl">
          <DashboardPreviewIllustration />
        </div>
      </div>
    </section>
  );
}
