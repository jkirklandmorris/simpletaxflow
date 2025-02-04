import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-radial opacity-10" />
      
      <div className="relative min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left max-w-2xl">
              <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight">
                Financial infrastructure for your revenue
              </h1>
              <p className="text-xl md:text-2xl text-muted leading-relaxed mb-12">
                Invoicing, time tracking, file reconciliation, and financial oversight—all in one smart platform built for Dutch freelancers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToSignup}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full"
                >
                  Start now →
                </Button>
                <Button
                  onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                  size="lg"
                  variant="outline"
                  className="border-2 border-foreground/20 hover:border-foreground/40 text-foreground px-8 py-6 text-lg rounded-full"
                >
                  Contact sales
                </Button>
              </div>
            </div>
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-radial opacity-20 rounded-2xl" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <img 
                  src="/lovable-uploads/7fb6a1d0-2dce-4d3b-acba-3343d9d49f47.png" 
                  alt="Platform Preview" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};