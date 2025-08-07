import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-white/10 py-8">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2 text-foreground/70">
            <span>© {currentYear} Ayush Giri. Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and lots of ☕</span>
          </div>
          
          <div className="flex space-x-6 text-sm text-foreground/70">
            <a 
              href="#about" 
              className="hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="hover:text-primary transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;