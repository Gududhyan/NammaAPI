import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth/session";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

export const metadata: Metadata = {
  title: { default: "Dashboard", template: "%s | NammaAPI Dashboard" },
  robots: { index: false },
};

export default async function DashboardLayout({ children }: LayoutProps<"/dashboard">) {
  const user = await getCurrentUser();
  // The cookie exists (proxy checked) but the API rejected it: clear it and go to login.
  if (!user) redirect("/auth/signout");

  return (
    <DashboardShell
      user={{
        companyName: user.companyName,
        email: user.email,
        nammaPayments: user.nammaPayments,
      }}
    >
      {children}
    </DashboardShell>
  );
}
