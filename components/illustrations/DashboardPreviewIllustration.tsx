import { StatusBadge } from "@/components/ui/Badge";

const rows: { id: string; beneficiary: string; amount: string; status: "SUCCESS" | "PROCESSING" | "PENDING" }[] = [
  { id: "TXN-8841", beneficiary: "Vendor — Acme Supplies", amount: "₹48,000", status: "SUCCESS" },
  { id: "TXN-8842", beneficiary: "Salary — Batch #114", amount: "₹12,40,000", status: "PROCESSING" },
  { id: "TXN-8843", beneficiary: "Refund — Order 22190", amount: "₹2,500", status: "PENDING" },
];

const bars = [38, 62, 45, 78, 55, 90, 70];

export function DashboardPreviewIllustration() {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-xl shadow-brand-navy/5">
      <div className="flex items-center gap-2 border-b border-brand-border bg-brand-light px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-status-failed/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-status-pending/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-status-success/40" />
        <span className="ml-3 text-xs font-medium text-text-secondary">Dashboard — Preview / Sample Data</span>
      </div>

      <div className="grid gap-4 p-5 sm:grid-cols-3">
        {[
          { label: "Today's Volume", value: "₹18.6L" },
          { label: "Successful", value: "412" },
          { label: "Processing", value: "23" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-brand-border bg-brand-light/60 p-4">
            <p className="text-xs font-medium text-text-secondary">{stat.label}</p>
            <p className="mt-1 text-xl font-bold text-text-primary">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="px-5">
        <div className="flex h-24 items-end gap-2 rounded-xl border border-brand-border bg-white p-4">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-brand-primary/70"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 px-5 pb-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-secondary">
          Recent Transactions
        </p>
        <div className="overflow-hidden rounded-xl border border-brand-border">
          <table className="w-full text-left text-xs">
            <tbody className="divide-y divide-brand-border">
              {rows.map((row) => (
                <tr key={row.id}>
                  <td className="px-3 py-2.5 font-mono text-text-secondary">{row.id}</td>
                  <td className="px-3 py-2.5 text-text-primary">{row.beneficiary}</td>
                  <td className="px-3 py-2.5 font-medium text-text-primary">{row.amount}</td>
                  <td className="px-3 py-2.5">
                    <StatusBadge status={row.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
