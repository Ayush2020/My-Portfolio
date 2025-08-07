import { Code, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and methodologies to solve complex problems"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams to deliver exceptional products"
    }
  ];

  return (
    <section id="about" className="section-padding bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 hero-text">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-on-scroll">
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
              I'm a passionate full-stack developer with a strong foundation in Java, Spring Boot, Angular, and Python, 
              dedicated to crafting real-world solutions that are both functional and impactful.
              My journey began with a curiosity for how technology powers everyday life, which
               quickly turned into a drive to build applications that solve real problems.
              </p>
              
              <p>
              I specialize in developing scalable web applications using Java Spring Boot (backend) and Angular (frontend),
              and have experience with microservices architecture, MongoDB, MySQL, RabbitMQ, and cloud fundamentals.
              I’ve worked on diverse projects—from a JARVIS-like voice assistant to smart booking platforms and 
              hospital management systems.
              </p>

              <p>
              When I’m not coding, I enjoy playing competitive cricket, exploring the latest in AI/ML, and mentoring fellow
              students. I’m a strong believer in clean code, continuous learning, and building systems that offer great 
              user experience.
              </p>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title} 
                className="glass-card hover-glow transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="glass-button p-3 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-foreground/70">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "5+", label: "Projects Completed" },
            { number: "2+", label: "Years Experience" },
            { number: "100+", label: "Coding Questions" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-foreground/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;