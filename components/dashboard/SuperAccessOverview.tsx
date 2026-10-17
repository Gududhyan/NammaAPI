import { ApiBalanceView } from "@/components/dashboard/ApiBalanceView";
import { PgTallyView } from "@/components/dashboard/PgTallyView";

/**
 * The Super Access page: the BUL total card, then the PG tally at full width. On desktop the tally
 * fills the rest of the screen (its rows scroll inside); on phones and tablets the page scrolls.
 */
export function SuperAccessOverview() {
  return (
    <div className="space-y-4">
      <ApiBalanceView bulOnly />
      <div className="min-w-0 xl:h-[max(26rem,calc(100dvh-17.5rem))]">
        <PgTallyView />
      </div>
    </div>
  );
}
