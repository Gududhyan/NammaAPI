import { buildMetadata } from "@/lib/metadata";
import { AdminOnly } from "@/components/dashboard/AdminOnly";
import { AdminOverview } from "@/components/dashboard/AdminOverview";

export const metadata = buildMetadata({
  title: "Accountant",
  description: "Balances, totals and the PG tally in your NammaAPI dashboard.",
  path: "/dashboard/accountant",
  noIndex: true,
});

export default function Page() {
  return (
    <AdminOnly role="accountant">
      <AdminOverview />
    </AdminOnly>
  );
}
