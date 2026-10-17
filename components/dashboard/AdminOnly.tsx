"use client";

import { useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { parseDemoSession, readDemoSessionRaw, subscribeDemoSession } from "@/lib/auth/demoSession";
import { adminAccess, type AdminAccess } from "@/lib/auth/adminAccess";
import { DEFAULT_DASHBOARD_PATH } from "@/lib/data/dashboardNav";

/**
 * Renders admin pages only for accounts with Admin-page access (admin, accountant or super access)
 * and sends everyone else back to the dashboard. `children` gets the access level, so a page can
 * show less to super access. This hides the UI only: every admin API route checks the flags in the
 * session cookie (getSessionCredentials) on the server.
 */
export function AdminOnly({ children }: { children: ReactNode | ((access: Exclude<AdminAccess, "none">) => ReactNode) }) {
  const router = useRouter();
  const raw = useSyncExternalStore(subscribeDemoSession, readDemoSessionRaw, () => undefined);
  const access = useMemo(() => adminAccess(parseDemoSession(raw)), [raw]);

  useEffect(() => {
    if (raw !== undefined && access === "none") router.replace(DEFAULT_DASHBOARD_PATH);
  }, [raw, access, router]);

  if (access === "none") return null;
  return typeof children === "function" ? children(access) : children;
}
