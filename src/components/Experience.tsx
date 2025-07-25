import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Rasak & Co",
      position: "Senior Associate / Project Lead",
      duration: "2019 - Present",
      location: "Nigeria",
      type: "Full-time",
      description: "Leading digital transformation initiatives and managing cross-functional teams to deliver innovative solutions in the insurance and financial services sector.",
      responsibilities: [
        "Spearheaded digital transformation projects, improving operational efficiency by 40%",
        "Led a team of 5 developers in building custom financial management tools",
        "Implemented automated reporting systems reducing manual work by 60%",
        "Collaborated with stakeholders to align technology solutions with business objectives",
        "Mentored junior team members in software development best practices"
      ],
      skills: ["Project Management", "Team Leadership", "Financial Analysis", "Process Optimization"],
      achievements: [
        "Successfully delivered 10+ projects on time and within budget",
        "Improved client satisfaction scores by 35%",
        "Implemented new workflow processes adopted company-wide"
      ]
    },
    {
      id: 2,
      company: "TV Communication",
      position: "Media Specialist / Administrative Support",
      duration: "2018 - 2019",
      location: "Nigeria",
      type: "Full-time",
      description: "Managed media operations and provided comprehensive administrative support in a fast-paced broadcast environment.",
      responsibilities: [
        "Coordinated live broadcast schedules and technical operations",
        "Managed content creation workflows and quality assurance processes",
        "Provided administrative support for executive team and production staff",
        "Developed internal communication systems improving team coordination",
        "Assisted in video editing and post-production activities"
      ],
      skills: ["Media Production", "Video Editing", "Administrative Management", "Communication"],
      achievements: [
        "Streamlined production workflows reducing turnaround time by 25%",
        "Maintained 99% broadcast uptime through proactive scheduling",
        "Trained 3 new team members in media production processes"
      ]
    }
  ];

  const certifications = [
    {
      title: "Software Development Certification",
      issuer: "Sail Innovation Lab",
      year: "2023",
      type: "Professional Development"
    },
    {
      title: "Bachelor of Science in Finance",
      issuer: "Kwara State University",
      year: "2019",
      type: "Academic"
    },
    {
      title: "Project Management Professional (PMP)",
      issuer: "Project Management Institute",
      year: "2022",
      type: "Professional Certification"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey through diverse industries and challenging projects
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12 mb-16">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.id} 
              className="glass-card hover-glow group transition-all duration-300 animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Company Info */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Building className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{exp.company}</h3>
                        <p className="text-primary font-semibold">{exp.position}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {exp.type}
                    </Badge>
                  </div>

                  {/* Experience Details */}
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start text-muted-foreground">
                            <span className="text-primary mr-2 mt-1">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Skills Developed:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="outline" 
                            className="border-primary/20 text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground flex items-center">
                        <Award className="w-5 h-5 text-primary mr-2" />
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-muted-foreground">
                            <span className="text-accent mr-2 mt-1">★</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education & Certifications */}
        <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground">
            Education & <span className="gradient-text">Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="glass-card hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-foreground">
                    {cert.title}
                  </h4>
                  <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                  <div className="flex justify-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {cert.year}
                    </Badge>
                    <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                      {cert.type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Career Summary */}
        <div className="mt-16 text-center animate-slide-up" style={{animationDelay: '0.6s'}}>
          <Card className="glass-card inline-block max-w-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Career <span className="gradient-text">Summary</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With over 5 years of experience spanning finance, media, and technology, 
                I bring a unique perspective to digital transformation projects. My journey 
                from financial analysis to software development has equipped me with the 
                skills to bridge business requirements with technical solutions effectively.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;