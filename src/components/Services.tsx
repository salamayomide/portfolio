import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Smartphone, Database, Zap, Download, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: [
        "Responsive Design",
        "Frontend Development (React, Vue, Angular)",
        "Backend Integration",
        "Performance Optimization",
        "SEO Optimization"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Creating seamless experiences across all devices and screen sizes",
      features: [
        "Progressive Web Apps",
        "Cross-platform Compatibility",
        "Touch-optimized Interfaces",
        "Offline Functionality",
        "App Store Deployment"
      ],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Database,
      title: "Full-Stack Development",
      description: "End-to-end development from database to user interface",
      features: [
        "Database Design & Management",
        "API Development & Integration",
        "Authentication & Security",
        "Cloud Deployment",
        "Real-time Applications"
      ],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Helping businesses leverage technology for growth and efficiency",
      features: [
        "Process Automation",
        "Legacy System Modernization",
        "Cloud Migration",
        "Analytics & Reporting",
        "Technology Consulting"
      ],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary/20">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-card hover-lift hover-glow group transition-all duration-300 animate-slide-up"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <CardHeader className="text-center pb-4">
                <div className="mb-4 flex justify-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="text-center mb-12 animate-slide-up" style={{animationDelay: '0.6s'}}>
          <h3 className="text-3xl font-bold mb-8 text-foreground">
            My <span className="gradient-text">Process</span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and requirements" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and timeline" },
              { step: "03", title: "Development", description: "Building your solution with regular updates" },
              { step: "04", title: "Launch", description: "Deployment and ongoing support" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 border-2 border-primary/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-primary/50 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-slide-up" style={{animationDelay: '0.8s'}}>
          <Card className="glass-card inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Let's discuss how I can help bring your ideas to life with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 hover-lift hover-glow"
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/30 text-primary hover:bg-primary/10 hover-lift"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;