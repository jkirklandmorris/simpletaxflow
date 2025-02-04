export const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SimpleTaxFlow</h3>
            <p className="text-muted-foreground">
              Invoicing, time tracking, file reconciliation & tax oversight built for Dutch freelancers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary">Pricing</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-primary">Features</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-muted-foreground text-sm pt-8 border-t border-muted">
          © {new Date().getFullYear()} SimpleTaxFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};