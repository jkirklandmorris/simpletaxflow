export const Footer = () => {
  return (
    <footer className="py-8 text-gray-600 text-sm">
      <div className="container mx-auto px-4 text-center">
        <p>
          © {new Date().getFullYear()} SimpleTaxFlow. All rights reserved.{" "}
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-gray-900 transition-colors">
            Privacy Policy
          </a>{" "}
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-gray-900 transition-colors">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};