import ScrollNavigation from "@/components/ScrollNavigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  const sections = ["hero", "about", "projects", "certifications", "contact"];

  return (
    <div className="relative">
      <ScrollNavigation sections={sections} />
      
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
