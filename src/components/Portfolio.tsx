import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Users, Calculator } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Nigerian Bill Splitter & Expense Tracker",
      description: "A comprehensive web application that helps users track and divide group expenses efficiently. Features include expense categorization, automatic splitting calculations, payment tracking, and detailed reporting.",
      role: "Team Lead & Full-Stack Developer",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      features: [
        "Real-time expense tracking",
        "Automatic bill splitting algorithms",
        "Multi-currency support",
        "Group management system",
        "Payment history tracking"
      ],
      icon: Calculator,
      status: "Completed",
      image: "/placeholder-project.jpg"
    },
    {
      id: 2,
      title: "FinTech Dashboard",
      description: "A modern financial dashboard for personal finance management with real-time data visualization and analytics.",
      role: "Frontend Developer",
      technologies: ["React", "TypeScript", "Chart.js", "Firebase", "Material-UI"],
      features: [
        "Interactive charts and graphs",
        "Budget planning tools",
        "Investment tracking",
        "Financial goal setting"
      ],
      icon: Users,
      status: "In Progress",
      image: "/placeholder-project-2.jpg"
    }
  ];

  const comingSoonProjects = [
    "E-commerce Platform with Payment Integration",
    "Healthcare Management System",
    "Real Estate Investment Tracker",
    "Cryptocurrency Portfolio Manager"
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions that blend finance and technology
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`glass-card hover-glow group animate-slide-up transition-all duration-500 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                  {/* Project Image/Visual */}
                  <div className="relative overflow-hidden rounded-t-lg lg:rounded-l-lg lg:rounded-t-none bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center min-h-[300px]">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                        <project.icon className="w-12 h-12 text-primary" />
                      </div>
                      <div className="text-sm text-muted-foreground px-4">
                        Project Screenshot Coming Soon
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant={project.status === 'Completed' ? 'default' : 'secondary'}
                        className={project.status === 'Completed' ? 'bg-green-500/20 text-green-400 border-green-400/30' : ''}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-8 space-y-6">
                    <div>
                      <CardTitle className="text-2xl font-bold mb-3 text-foreground">
                        {project.title}
                      </CardTitle>
                      <p className="text-primary font-semibold mb-4">
                        {project.role}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline" 
                            className="border-primary/30 text-primary hover:bg-primary/10"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-muted-foreground">
                            <span className="text-primary mr-2 mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Button 
                        size="sm" 
                        className="bg-primary hover:bg-primary/90 hover-lift"
                        disabled={project.status !== 'Completed'}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-primary/30 text-primary hover:bg-primary/10 hover-lift"
                        disabled={project.status !== 'Completed'}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-20 animate-slide-up" style={{animationDelay: '0.6s'}}>
          <Card className="glass-card text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Coming <span className="gradient-text">Soon</span>
              </CardTitle>
              <p className="text-muted-foreground">
                Exciting projects currently in development
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {comingSoonProjects.map((project, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-secondary/20 rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <p className="text-muted-foreground">{project}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button 
                  variant="outline" 
                  className="border-primary/30 text-primary hover:bg-primary/10"
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Discuss Your Project
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;