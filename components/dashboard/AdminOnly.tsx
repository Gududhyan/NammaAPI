"use client";

import { useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { parseDemoSession, readDemoSessionRaw, subscribeDemoSession } from "@/lib/auth/demoSession";
import { hasPageRole, type PageRole } from "@/lib/auth/adminAccess";
import { DEFAULT_DASHBOARD_PATH } from "@/lib/data/dashboardNav";

/**
 * Renders a role-only page (Admin, Accountant, Super Access) only for accounts with that role's
 * flag and sends everyone else back to the dashboard. This hides the UI only: every admin API route
 * checks the flags in the session cookie (getSessionCredentials) on the server.
 */
export function AdminOnly({ role = "admin", children }: { role?: PageRole; children: ReactNode }) {
  const router = useRouter();
  const raw = useSyncExternalStore(subscribeDemoSession, readDemoSessionRaw, () => undefined);
  const allowed = useMemo(() => hasPageRole(parseDemoSession(raw), role), [raw, role]);

  useEffect(() => {
    if (raw !== undefined && !allowed) router.replace(DEFAULT_DASHBOARD_PATH);
  }, [raw, allowed, router]);

  return allowed ? children : null;
}
