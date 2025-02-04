import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[80vh] flex items-center bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Stress free by midday
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              Invoicing, time tracking, file reconciliation, and financial oversight—all in one smart platform built for Dutch freelancers.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                onClick={scrollToSignup}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              >
                Get Started
              </Button>
              <Button
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative w-full h-full min-h-[300px] bg-secondary/20 rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Platform Preview" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};