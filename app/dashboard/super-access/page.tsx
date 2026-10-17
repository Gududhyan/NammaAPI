import { buildMetadata } from "@/lib/metadata";
import { AdminOnly } from "@/components/dashboard/AdminOnly";
import { ApiBalanceView } from "@/components/dashboard/ApiBalanceView";

export const metadata = buildMetadata({
  title: "Super Access",
  description: "BUL account balances in your NammaAPI dashboard.",
  path: "/dashboard/super-access",
  noIndex: true,
});

export default function Page() {
  return (
    <AdminOnly role="superAccess">
      <ApiBalanceView bulOnly />
    </AdminOnly>
  );
}
