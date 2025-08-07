import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 60 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Python", level: 85 },
        { name: "Spring Boot", level: 80 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 80 },
        { name: "Java", level: 88 }

      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 78 },
        { name: "AWS", level: 82 },
        { name: "Figma", level: 75 }
      ]
    }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js",
    "Python", "MySQL", "MongoDB", "Redis", "Docker", "AWS",
    "Git", "Figma", "Tailwind CSS", "Maven", "REST APIs", "Java"
  ];

  return (
    <section id="skills" className="section-padding bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 hero-text">
            Skills & Technologies
          </h2>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title}
              className="glass-card hover-glow transition-all duration-300 animate-on-scroll"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-center text-primary">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="animate-on-scroll"
                      style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">
                          {skill.name}
                        </span>
                        <span className="text-primary text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="animate-on-scroll">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span 
                key={tech}
                className="glass-button px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover-glow animate-on-scroll"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20 animate-on-scroll">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Experience Journey
          </h3>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                period: "2024 - Present",
                title: "Technical Analyst",
                company: "citi Bank",
                description: "Analyze system requirements, software bugs, and technical issues to determine root causes and solutions."
              }
            ].map((experience, index) => (
              <div 
                key={experience.title}
                className="flex items-start space-x-6 mb-8 animate-on-scroll"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-primary font-semibold text-sm">
                    {experience.period}
                  </span>
                </div>
                
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2 shadow-lg shadow-primary/50"></div>
                
                <div className="flex-grow">
                  <h4 className="text-xl font-bold text-foreground mb-1">
                    {experience.title}
                  </h4>
                  <p className="text-primary font-medium mb-2">
                    {experience.company}
                  </p>
                  <p className="text-foreground/70">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;