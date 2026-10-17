import { buildMetadata } from "@/lib/metadata";
import { AdminDashboard } from "@/components/dashboard/AdminDashboard";

export const metadata = buildMetadata({
  title: "Admin",
  description: "Admin tools in your NammaAPI dashboard.",
  path: "/dashboard/admin",
  noIndex: true,
});

export default function AdminPage() {
  return <AdminDashboard />;
}
