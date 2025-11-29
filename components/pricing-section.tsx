import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$12",
    period: "per user/month",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 10 team members",
      "Basic AI workflows",
      "50 GB storage",
      "Email support",
      "Core integrations",
      "Mobile apps",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$29",
    period: "per user/month",
    description: "For growing teams that need more power",
    features: [
      "Unlimited team members",
      "Advanced AI workflows",
      "500 GB storage",
      "Priority support",
      "All integrations",
      "Advanced analytics",
      "Custom branding",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact sales",
    description: "For organizations with specific needs",
    features: [
      "Everything in Professional",
      "Unlimited storage",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "Advanced security",
      "Training & onboarding",
      "Custom contracts",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Choose the plan that's right for your team. All plans include a
            14-day free trial.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 bg-card border-border ${
                plan.popular ? "border-primary shadow-lg shadow-primary/10" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </div>

              <Button
                className={`w-full mb-6 transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:bg-blue-600 hover:from-blue-600 hover:to-blue-600"
                    : "border border-border hover:bg-blue-600 hover:text-white hover:border-blue-600"
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Need a custom plan?{" "}
            <a href="#" className="text-primary hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
