import { Calculator, LineChart, Bell, Shield } from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Auto VAT Filings",
    description: "No more confusing tax portals. We calculate and submit your quarterly VAT in just a few clicks.",
  },
  {
    icon: LineChart,
    title: "Real-Time Insights",
    description: "Track your income and expenses with a smart dashboard that updates automatically.",
  },
  {
    icon: Bell,
    title: "Benefit Checks",
    description: "We'll let you know if you qualify for any Dutch allowances or tax credits before you miss out.",
  },
  {
    icon: Shield,
    title: "Compliance Made Easy",
    description: "Never miss a deadline or deduction. Our proactive notifications keep you on track.",
  },
];

export const Features = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why SimpleTaxFlow?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};