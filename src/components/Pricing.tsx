import { Button } from "./ui/button";

const plans = [
  {
    name: "Starter",
    price: "€0",
    period: "/mo",
    features: [
      "Unlimited invoices",
      "Basic time tracking",
      "Community support"
    ],
  },
  {
    name: "Pro",
    price: "€19",
    period: "/mo",
    features: [
      "Everything in Starter",
      "Automated VAT calculations",
      "Receipt/file reconciliation",
      "Priority email support"
    ],
  },
  {
    name: "Premium",
    price: "€39",
    period: "/mo",
    features: [
      "Everything in Pro",
      "Full personal tax filing assistance",
      "Advanced analytics & forecasting",
      "1:1 onboarding & chat support"
    ],
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="bg-secondary py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Choose Your Plan</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you're just starting out or scaling up, we have a plan tailored to your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-lg border border-muted flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold text-primary mb-8">
                {plan.price}
                <span className="text-base text-muted-foreground ml-1">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="w-full text-lg py-6"
                variant={index === 1 ? "default" : "outline"}
              >
                Get {plan.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};