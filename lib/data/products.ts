export type Product = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
};

export const products: Product[] = [
  {
    slug: "payout-api",
    name: "Payout API",
    shortName: "Payouts",
    tagline: "Automate outgoing business payments",
    description:
      "Automate payments to employees, vendors, customers and business partners through a single, reliable API.",
    features: [
      "Single payouts",
      "Bulk payouts",
      "Beneficiary management",
      "Transaction status",
      "Webhooks",
      "Reports",
      "Reconciliation",
    ],
    cta: "Explore Payout API",
    href: "/products/payout-api",
  },
  {
    slug: "payment-gateway",
    name: "Payment Gateway / Collection API",
    shortName: "Collections",
    tagline: "Collect payments across every workflow",
    description: "Integrate payment collection into your business workflows.",
    features: [
      "Payment collection",
      "Payment status",
      "Multiple payment methods",
      "Refund workflows",
      "Webhooks",
      "Reports",
      "Reconciliation",
    ],
    cta: "Explore Payment API",
    href: "/products/payment-gateway",
  },
  {
    slug: "salary-bulk-payments",
    name: "Salary & Bulk Payments",
    shortName: "Salary & Bulk",
    tagline: "Process payroll and bulk transfers at scale",
    description: "Automate corporate salary and bulk payment processing.",
    features: [
      "Employee salary batches",
      "Bulk payments",
      "Scheduled processing",
      "Payment tracking",
      "Reports",
      "Reconciliation",
    ],
    cta: "Explore Salary Payments",
    href: "/products/salary-bulk-payments",
  },
  {
    slug: "automation",
    name: "Payment Automation",
    shortName: "Automation",
    tagline: "Build automated financial workflows",
    description: "Build automated financial workflows using APIs and webhooks.",
    features: [
      "API-driven workflows",
      "Webhooks",
      "Scheduled transactions",
      "Transaction tracking",
      "Reconciliation",
      "Audit logs",
    ],
    cta: "Explore Automation",
    href: "/products/automation",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
