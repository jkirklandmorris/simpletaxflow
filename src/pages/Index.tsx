import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { SignupForm } from "@/components/SignupForm";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { SocialProof } from "@/components/SocialProof";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 bg-secondary/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-primary">SimpleTaxFlow</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-foreground hover:text-primary/90">Features</a>
              <a href="#pricing" className="text-foreground hover:text-primary/90">Pricing</a>
              <a href="#testimonials" className="text-foreground hover:text-primary/90">Testimonials</a>
            </nav>
            <button
              onClick={() => document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" })}
              className="text-primary hover:text-primary/90 font-medium"
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>
      <main className="pt-16">
        <Hero />
        <SocialProof />
        <Features />
        <Pricing />
        <Testimonials />
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;