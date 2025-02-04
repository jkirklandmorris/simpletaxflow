import { Calculator, LineChart, Bell, Layout } from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Automated VAT Calculations",
    description: "Quarterly VAT calculations handled automatically with precision",
  },
  {
    icon: LineChart,
    title: "Real-time Cashflow",
    description: "Monitor your business finances with live updates and insights",
  },
  {
    icon: Bell,
    title: "Benefits Alerts",
    description: "Never miss out on tax benefits you're eligible for",
  },
  {
    icon: Layout,
    title: "Simple Dashboard",
    description: "Everything you need in one intuitive interface",
  },
];

export const Features = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};