import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const SignupForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Email submitted:", email);
      toast.success("Thanks for signing up! We'll be in touch soon.");
      setEmail("");
    }
  };

  return (
    <div id="signup" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-background rounded-lg p-12">
          <h2 className="text-4xl font-bold text-center mb-6">Ready to Simplify Your Finances?</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 leading-relaxed">
            Join our early access list to be the first to enjoy automated tax and benefit claims. Get updates on our launch and exclusive beta invites.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 max-w-md bg-secondary border-muted text-foreground text-lg py-6"
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 px-8">
              Sign Up Now
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};