import { buildMetadata } from "@/lib/metadata";
import { AdminOnly } from "@/components/dashboard/AdminOnly";
import { AdminOverview } from "@/components/dashboard/AdminOverview";

export const metadata = buildMetadata({
  title: "Admin",
  description: "Admin tools in your NammaAPI dashboard.",
  path: "/dashboard/admin",
  noIndex: true,
});

export default function Page() {
  return (
    <AdminOnly role="admin">
      <AdminOverview />
    </AdminOnly>
  );
}
