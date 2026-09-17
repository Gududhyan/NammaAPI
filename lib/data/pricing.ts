export type PricingPlan = {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    tagline: "For businesses getting started with API payments",
    price: "Contact Sales",
    priceNote: "Pricing depends on transaction volume and services required",
    features: [
      "Sandbox access",
      "Payout API access",
      "Payment collection API access",
      "Standard webhooks",
      "Email support",
      "Standard reporting",
    ],
    cta: "Contact Sales",
  },
  {
    name: "Growth",
    tagline: "For scaling businesses with higher transaction volumes",
    price: "Contact Sales",
    priceNote: "Custom pricing based on usage and integration scope",
    features: [
      "Everything in Starter",
      "Salary & bulk payment processing",
      "Priority webhooks",
      "Reconciliation tools",
      "Priority support",
      "Advanced reporting & exports",
    ],
    cta: "Contact Sales",
    highlighted: true,
  },
  {
    name: "Enterprise",
    tagline: "For large organizations with custom requirements",
    price: "Contact Sales",
    priceNote: "Tailored pricing, SLAs and onboarding",
    features: [
      "Everything in Growth",
      "Dedicated account management",
      "Custom integration support",
      "Role-based access controls",
      "Audit logs",
      "Custom SLAs",
    ],
    cta: "Contact Sales",
  },
];

export const pricingFactors = [
  "Monthly transaction volume",
  "API usage and number of calls",
  "Payment methods required",
  "Business requirements and use case",
  "Integration scope and support needs",
];
