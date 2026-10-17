"use client";

import { AdminOnly } from "@/components/dashboard/AdminOnly";
import { AdminPanels } from "@/components/dashboard/AdminPanels";
import { ApiBalanceView } from "@/components/dashboard/ApiBalanceView";
import { DaySummaryView } from "@/components/dashboard/DaySummaryView";

/**
 * The Admin page. Admins and accountants get everything; super access gets only the BUL total card
 * (the API also returns just the BUL accounts to them).
 */
export function AdminDashboard() {
  return (
    <AdminOnly>
      {(access) =>
        access === "full" ? (
          <div className="space-y-4">
            <ApiBalanceView />
            <DaySummaryView />
            <AdminPanels />
          </div>
        ) : (
          <ApiBalanceView bulOnly />
        )
      }
    </AdminOnly>
  );
}
