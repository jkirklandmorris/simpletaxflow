export const Footer = () => {
  return (
    <footer className="py-24 bg-background border-t border-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">SimpleTaxFlow</h3>
            <p className="text-muted-foreground leading-relaxed">
              Invoicing, time tracking, file reconciliation & tax oversight built for Dutch freelancers.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Links</h3>
            <ul className="space-y-4">
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-muted-foreground text-sm pt-12 border-t border-muted">
          © {new Date().getFullYear()} SimpleTaxFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};