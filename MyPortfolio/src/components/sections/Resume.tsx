import { Download, Award, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      college: "Technocrats Institute of Technology",
      period: "2021 - 2025",
      description: "Graduated with focus on Artificial Intelligence and Machine Learning"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      name: "Fundamentals of Business Intelligence",
      issuer: "Lumenore",
      year: "2022"
    },
    {
      name: "Journey to Cloud, Envisioning Data Science",
      issuer: "IBM",
      year: "2022"
    }
  ];

  const achievements = [
    "Led the team in multiple inter-district tournaments",
    "showcasing leadership, teamwork, and decision-making under pressure.",
    
  ];

  return (
    <section id="resume" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 hero-text">
            Resume
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <Card className="glass-card hover-glow transition-all duration-300 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="glass-button p-2 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Education</h3>
                </div>
                
                {education.map((edu) => (
                  <div key={edu.degree} className="space-y-2">
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-primary font-medium">{edu.college}</p>
                    <p className="text-sm text-foreground/70">{edu.period}</p>
                    <p className="text-sm text-foreground/80">{edu.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="glass-card hover-glow transition-all duration-300 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="glass-button p-2 rounded-lg">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Certifications</h3>
                </div>
                
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="border-l-2 border-primary/30 pl-4">
                      <h4 className="font-semibold text-foreground">{cert.name}</h4>
                      <p className="text-sm text-primary">{cert.issuer}</p>
                      <p className="text-sm text-foreground/70">{cert.year}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Experience */}
          <div className="lg:col-span-2">
            <Card className="glass-card hover-glow transition-all duration-300 animate-on-scroll">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="glass-button p-2 rounded-lg">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Experience</h3>
                </div>

                <div className="space-y-8">
                  {[
                    {
                      title: "Technical Analyst",
                      company: "citi Bank",
                      period: "",
                      location: "On-site",
                      responsibilities: [
                        "Analyze system requirements,",
                        "software bugs, and technical issues to determine root causes and solutions."
                      ]
                    }
                  ].map((job, index) => (
                    <div 
                      key={job.title}
                      className="border-l-2 border-primary/30 pl-6 animate-on-scroll"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <h4 className="text-lg font-bold text-foreground">{job.title}</h4>
                      <p className="text-primary font-medium">{job.company}</p>
                      <p className="text-sm text-foreground/70 mb-3">
                        {job.period} • {job.location}
                      </p>
                      
                      <ul className="space-y-2">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-sm text-foreground/80 flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Achievements */}
            <Card className="glass-card hover-glow transition-all duration-300 mt-8 animate-on-scroll">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Key Achievements</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 animate-on-scroll"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-foreground/80">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="text-center mt-12 animate-on-scroll">
          <Button 
            className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-3 text-lg hover-glow transition-all duration-300 transform hover:scale-105"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Full Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume;