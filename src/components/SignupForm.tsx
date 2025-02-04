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
    <div id="signup" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-4">Ready to Simplify Your Finances?</h2>
          <p className="text-gray-600 text-center mb-8">
            Join our early access list to be the first to enjoy automated tax and benefit claims. Get updates on our launch and exclusive beta invites.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 max-w-md"
            />
            <Button type="submit" className="bg-accent hover:bg-accent/90">
              Sign Up Now
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};