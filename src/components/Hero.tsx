import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const Hero = () => {
  const [email, setEmail] = useState("");

  const scrollToSignup = () => {
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Email submitted:", email);
      toast.success("Thanks for signing up! We'll be in touch soon.");
      setEmail("");
    }
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
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-secondary border-muted text-foreground text-lg py-6"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                  Start now →
                </Button>
              </form>
              <Button
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                className="border-2 border-foreground/20 hover:border-foreground/40 text-foreground px-8 py-6 text-lg rounded-full"
              >
                Contact sales
              </Button>
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