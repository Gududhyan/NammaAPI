import { AdminPanels } from "@/components/dashboard/AdminPanels";
import { ApiBalanceView } from "@/components/dashboard/ApiBalanceView";
import { DaySummaryView } from "@/components/dashboard/DaySummaryView";

/** Everything on the Admin and Accountant pages: API balance, today's summary, PG tally and transfers. */
export function AdminOverview() {
  return (
    <div className="space-y-4">
      <ApiBalanceView />
      <DaySummaryView />
      <AdminPanels />
    </div>
  );
}
