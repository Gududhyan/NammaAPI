import { redirect } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { PhoneLoginForm } from "@/app/login/PhoneLoginForm";
import { AuthCard, Notice } from "@/components/auth/AuthCard";
import { getCurrentUser } from "@/lib/auth/session";

export const metadata = buildMetadata({
  title: "Login",
  description: "Login to your NammaAPI business dashboard.",
  path: "/login",
});

const notices = {
  loggedOut: "You've been logged out.",
  expired: "Your session has expired. Please log in again.",
} as const;

export default async function LoginPage({ searchParams }: PageProps<"/login">) {
  if (await getCurrentUser()) redirect("/dashboard");

  const params = await searchParams;
  const notice = (Object.keys(notices) as (keyof typeof notices)[]).find((k) => params[k] === "1");

  return (
    <AuthCard title="Log in to your account" subtitle="Access your payments dashboard, API keys and transaction reports.">
      {notice && (
        <div className="mb-5">
          <Notice tone={notice === "expired" ? "info" : "success"}>{notices[notice]}</Notice>
        </div>
      )}
      <PhoneLoginForm />
    </AuthCard>
  );
}
