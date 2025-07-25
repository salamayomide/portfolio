import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Briefcase, Target, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "BSc in Finance from Kwara State University"
    },
    {
      icon: Briefcase,
      title: "Training",
      description: "Software Development at Sail Innovation Lab"
    },
    {
      icon: TrendingUp,
      title: "Experience",
      description: "Cross-industry expertise in insurance, media, and healthcare"
    },
    {
      icon: Target,
      title: "Aspirations",
      description: "Fintech Specialist & Digital Transformation Consultant"
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A dynamic professional bridging finance and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-primary font-semibold">Salam Ayomide Jamiu</span>, 
                a dynamic individual with a BSc in Finance from Kwara State University and 
                comprehensive software development training from Sail Innovation Lab.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My unique blend of financial acumen and technical expertise allows me to 
                understand both the business requirements and technical implementation needed 
                to create meaningful digital solutions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With cross-industry experience spanning insurance, media, and healthcare, 
                I bring a diverse perspective to every project. My career aspirations focus 
                on becoming a <span className="text-accent font-semibold">Fintech Specialist</span> and 
                <span className="text-accent font-semibold"> Digital Transformation Consultant</span>, 
                helping businesses leverage technology to achieve their goals.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4 text-primary">What Drives Me</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Creating innovative solutions that solve real-world problems
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Bridging the gap between finance and technology
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Continuous learning and adapting to new technologies
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Leading teams to deliver exceptional results
                </li>
              </ul>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-up" style={{animationDelay: '0.4s'}}>
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="glass-card hover-lift hover-glow group transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid sm:grid-cols-3 gap-8 text-center animate-slide-up" style={{animationDelay: '0.6s'}}>
          <div className="space-y-2">
            <div className="text-4xl font-bold gradient-text">3+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold gradient-text">5+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold gradient-text">100%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;