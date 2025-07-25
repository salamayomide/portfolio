import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code2, Palette, Users, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Technical Skills",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "React/Next.js", level: 85 },
        { name: "Node.js/Express", level: 80 },
        { name: "Python", level: 75 },
        { name: "Database Management", level: 80 },
        { name: "API Development", level: 85 }
      ]
    },
    {
      icon: Palette,
      title: "Design & Frontend",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "UI/UX Design", level: 80 },
        { name: "Responsive Design", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Video Editing", level: 70 },
        { name: "Adobe Creative Suite", level: 65 },
        { name: "Figma/Sketch", level: 75 }
      ]
    },
    {
      icon: Users,
      title: "Business & Soft Skills",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Project Leadership", level: 90 },
        { name: "Financial Analysis", level: 85 },
        { name: "Client Communication", level: 95 },
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 90 },
        { name: "Strategic Planning", level: 80 }
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Docker", level: 70 },
        { name: "AWS/Cloud Services", level: 75 },
        { name: "Virtual Assistance Tools", level: 80 },
        { name: "Financial Software", level: 85 },
        { name: "Project Management", level: 90 }
      ]
    }
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "MongoDB", "PostgreSQL",
    "Express.js", "Next.js", "Tailwind CSS", "Docker", "AWS", "Git",
    "Redux", "GraphQL", "REST APIs", "Jest", "Cypress", "Figma"
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set spanning technology, business, and creative domains
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="glass-card hover-lift hover-glow group transition-all duration-300 animate-slide-up"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-secondary/50"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies */}
        <div className="text-center animate-slide-up" style={{animationDelay: '0.6s'}}>
          <h3 className="text-3xl font-bold mb-8 text-foreground">
            Technologies & <span className="gradient-text">Tools</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="px-4 py-2 text-sm font-medium border-primary/30 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-200 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-slide-up" style={{animationDelay: '0.8s'}}>
          <Card className="glass-card text-center hover-lift">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-foreground">Full-Stack Development</h4>
              <p className="text-muted-foreground text-sm">
                End-to-end web application development with modern frameworks and best practices
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card text-center hover-lift">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-foreground">Project Leadership</h4>
              <p className="text-muted-foreground text-sm">
                Leading cross-functional teams to deliver successful projects on time and within budget
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card text-center hover-lift">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-foreground">Digital Solutions</h4>
              <p className="text-muted-foreground text-sm">
                Creating innovative digital solutions that bridge finance and technology
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;