import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type TransactionStatus = "SUCCESS" | "PENDING" | "PROCESSING" | "FAILED" | "CANCELLED";

const statusStyles: Record<TransactionStatus, string> = {
  SUCCESS: "bg-status-success-bg text-status-success",
  PENDING: "bg-status-pending-bg text-status-pending",
  PROCESSING: "bg-status-processing-bg text-status-processing",
  FAILED: "bg-status-failed-bg text-status-failed",
  CANCELLED: "bg-status-cancelled-bg text-status-cancelled",
};

export function StatusBadge({ status, className }: { status: TransactionStatus; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
        statusStyles[status],
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {status}
    </span>
  );
}

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-brand-border bg-brand-light px-3 py-1 text-xs font-semibold text-brand-dark",
        className,
      )}
    >
      {children}
    </span>
  );
}
