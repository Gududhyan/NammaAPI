import { buildMetadata } from "@/lib/metadata";
import { AdminOnly } from "@/components/dashboard/AdminOnly";
import { SuperAccessOverview } from "@/components/dashboard/SuperAccessOverview";

export const metadata = buildMetadata({
  title: "Super Access",
  description: "BUL balances and the PG tally in your NammaAPI dashboard.",
  path: "/dashboard/super-access",
  noIndex: true,
});

export default function Page() {
  return (
    <AdminOnly role="superAccess">
      <SuperAccessOverview />
    </AdminOnly>
  );
}
