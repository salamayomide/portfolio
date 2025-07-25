import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profilePhoto from '@/assets/salamimage.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-shadow">
                <span className="block text-foreground">Salam</span>
                <span className="block gradient-text">Ayomide Jamiu</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Software Developer | Finance & Tech Enthusiast
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Building innovative web solutions that bridge finance and technology. 
                Transforming ideas into powerful digital experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('#portfolio')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg hover-lift hover-glow group"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8 py-3 rounded-lg hover-lift"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              <a
                href="https://github.com/salamayomide"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover-lift"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/jamiu-ayomide-salam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover-lift"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:salamayomide63@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover-lift"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse-glow"></div>
              <div className="relative glass-card rounded-full p-2 hover-lift">
                <img
                  src={profilePhoto}
                  alt="Salam Ayomide Jamiu"
                  className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;