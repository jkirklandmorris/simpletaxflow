import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 -z-10" />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-float">
            Simplify Your Freelance Taxes in the Netherlands
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            We automate your cashflow tracking, VAT filings, and benefit claims so you can focus on your business.
          </p>
          <Button
            onClick={scrollToSignup}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
          >
            Get Early Access
          </Button>
        </div>
      </div>
    </div>
  );
};