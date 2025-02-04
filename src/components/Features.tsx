import { Calculator, LineChart, Bell, Shield } from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Invoicing",
    description: "Create and send professional invoices in seconds. Get paid faster and track all client payments in one place.",
  },
  {
    icon: LineChart,
    title: "Time Tracking",
    description: "Stay on top of billable hours with a simple timer and automatic timesheet conversion to invoices.",
  },
  {
    icon: Bell,
    title: "File Reconciliation",
    description: "Easily upload and sort receipts, statements, and expense files so you never lose important documents.",
  },
  {
    icon: Shield,
    title: "Financial Overview",
    description: "See your net income, tax liabilities, and benefit eligibility at a glance—no Excel needed.",
  },
];

export const Features = () => {
  return (
    <div id="features" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Everything you need</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform brings everything under one roof—from automated tax calculations to real-time cashflow insights, so you can focus on doing what you love.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-background hover:bg-background/80 transition-colors duration-300"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
              <p className="text-muted-foreground text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};