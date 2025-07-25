import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Mail, Phone, Linkedin, Github, MapPin, Send, Calendar } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init('6uwQlIvK9uVWSmvFY');
      
      // Send email using EmailJS
      await emailjs.send(
        'service_jp0hou8', // Service ID
        'template_3p24psy', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "salamayomide63@gmail.com",
      href: "mailto:salamayomide63@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 708 327 9077",
      href: "tel:+2347083279077",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "jamiu-ayomide-salam",
      href: "https://linkedin.com/in/jamiu-ayomide-salam",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "salamayomide",
      href: "https://github.com/salamayomide",
      color: "from-gray-600 to-gray-800"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card animate-slide-up" style={{animationDelay: '0.2s'}}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                <Send className="w-6 h-6 text-primary mr-3" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or how I can help..."
                    rows={6}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 hover-lift hover-glow"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors duration-200 group hover-lift"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{info.label}</div>
                      <div className="text-muted-foreground">{info.value}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center">
                  <Calendar className="w-5 h-5 text-primary mr-3" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="text-primary font-semibold">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Timezone</span>
                    <span className="text-primary font-semibold">WAT (UTC+1)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Availability</span>
                    <span className="text-green-400 font-semibold">Available for Projects</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 text-foreground">Quick Actions</h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-primary/30 text-primary hover:bg-primary/10"
                    onClick={() => window.open('https://calendly.com/salamayomide', '_blank')}
                  >
                    <Calendar className="w-4 h-4 mr-3" />
                    Schedule a Call
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-primary/30 text-primary hover:bg-primary/10"
                    onClick={() => window.open('/cv.pdf', '_blank')}
                  >
                    Download CV
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-slide-up" style={{animationDelay: '0.6s'}}>
          <Card className="glass-card inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Let's Build Something <span className="gradient-text">Amazing</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Whether you need a website, web application, or digital transformation consulting, 
                I'm here to help turn your vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 hover-lift hover-glow"
                  onClick={() => {
                    const form = document.querySelector('#contact form');
                    if (form) {
                      form.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Start a Project
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/30 text-primary hover:bg-primary/10 hover-lift"
                  onClick={() => window.open('https://linkedin.com/in/jamiu-ayomide-salam', '_blank')}
                >
                  Connect on LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;