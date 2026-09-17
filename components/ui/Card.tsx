import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  hoverable?: boolean;
};

export function Card({ children, className, hoverable = false, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-brand-border bg-white p-6 sm:p-7",
        hoverable &&
          "transition-all duration-200 hover:border-brand-primary/40 hover:shadow-lg hover:shadow-brand-primary/5",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
