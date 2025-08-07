import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Voice Assistant JARVIS",
      description: "An intelligent AI-powered voice assistant with natural language processing, voice recognition, and smart home integration capabilities.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop",
      technologies: ["Python", "Pyttsx3", "Wikipedia API"],
      liveUrl:"",
      githubUrl: "https://github.com/Ayush2020/JARVIS"
    },
    {
      title: "Student Management System",
      description: "A comprehensive educational platform for managing students, courses, grades, attendance, and academic records with role-based access control.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
      technologies: ["Java", "Spring Boot", "MySQL", "SpringData JPA"],
      liveUrl:"",
      githubUrl: "https://github.com/Ayush2020/Student-Management-System/tree/master"
    },
    {
      title: "Hotel Management System",
      description: "A full-featured hotel management solution with booking system, room management, guest services, billing, and staff administration.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      technologies: ["Java", "Angular","Spring Boot", "MongoDB", "Spring Security"],
      liveUrl:"",
      githubUrl: "https://github.com/Ayush2020/Hotel-Management-System"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 hero-text">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass-card overflow-hidden hover-glow transition-all duration-500 transform hover:scale-105 animate-on-scroll"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {project.title}
                </h3>
                
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    asChild
                    variant="outline"
                    className="glass-button border-primary/30 hover:border-primary/50 flex-1"
                  >
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline"
                    className="glass-button border-primary/30 hover:border-primary/50 flex-1"
                  >
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;