import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/salamayomide",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/jamiu-ayomide-salam",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:salamayomide63@gmail.com",
      label: "Email"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary/20 border-t border-border/50">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand & Bio */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold gradient-text">SAJ</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Building innovative web solutions that bridge finance and technology. 
                Transforming ideas into powerful digital experiences.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-200"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Portfolio', href: '#portfolio' },
                  { name: 'Services', href: '#services' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Contact', href: '#contact' }
                ].map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Web Development</li>
                <li>Full-Stack Development</li>
                <li>Digital Transformation</li>
                <li>Project Leadership</li>
                <li>Technical Consulting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Salam Ayomide Jamiu. All rights reserved.
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              Built with <Heart className="w-4 h-4 text-red-500 mx-1" /> using React & TypeScript
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;