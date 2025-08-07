import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectsClick = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground/80">Hi, I'm</span>
            <span className="block hero-text text-6xl sm:text-7xl lg:text-8xl font-extrabold">
              Ayush Giri
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer crafting
            <span className="text-primary font-semibold"> exceptional digital experiences</span> 
            with modern technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleProjectsClick}
              className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-3 text-lg hover-glow transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              onClick={handleContactClick}
              variant="outline" 
              className="glass-button border-primary/30 text-foreground px-8 py-3 text-lg hover:border-primary/50"
            >
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/Ayush2020" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-button p-3 rounded-full hover-glow transition-all duration-300 transform hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ayush-giri1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-button p-3 rounded-full hover-glow transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:ayush1804giri@gmail.com"
              className="glass-button p-3 rounded-full hover-glow transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-8 w-8 mx-auto text-primary/70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;