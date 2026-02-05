import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} RHINNO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
