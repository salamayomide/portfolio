import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
