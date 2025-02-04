import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { SignupForm } from "@/components/SignupForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-gray-900">FREETAX NL</div>
            <button
              onClick={() => document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" })}
              className="text-primary hover:text-primary/90 font-medium"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>
      <main className="pt-16">
        <Hero />
        <Features />
        <SignupForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;