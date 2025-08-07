import { useState } from "react";
import { Send, MapPin, Phone, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: "Pune, Maharastra",
      link: "https://maps.google.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+917987961395",
      link: "tel:+91"
    },
    {
      icon: Mail,
      title: "Email",
      details: "ayush1804giri@gmail.com",
      link: "mailto:ayush1804giri@gmail.com"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/Ayush2020",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ayush-giri1/",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 hero-text">
            Get In Touch
          </h2>
          
          <p className="text-xl text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card hover-glow transition-all duration-300 animate-on-scroll">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="glass-button border-white/10 focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="glass-button border-white/10 focus:border-primary/50"
                    />
                  </div>
                </div>
                
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="glass-button border-white/10 focus:border-primary/50"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="glass-button border-white/10 focus:border-primary/50 resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/80 text-primary-foreground py-3 hover-glow transition-all duration-300"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6 animate-on-scroll">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="glass-card hover-glow transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 group"
                    >
                      <div className="glass-button p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-foreground/70 group-hover:text-foreground transition-colors">
                          {info.details}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="glass-card hover-glow transition-all duration-300 animate-on-scroll">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`glass-button p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover-glow ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="glass-card hover-glow transition-all duration-300 animate-on-scroll">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">Availability</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-foreground/80">Available for freelance projects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-foreground/80">Open to full-time opportunities</span>
                  </div>
                  <p className="text-foreground/60 mt-3">
                    Response time: Usually within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;