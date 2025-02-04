import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[60vh] flex items-center bg-secondary">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hassle-Free Freelancer Finances
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Finally, a solution that automates your cashflow tracking, VAT returns, and benefit claims—so you can focus on the work you love.
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