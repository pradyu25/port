import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />

      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="py-8 border-t border-border bg-card">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Musunuri Pradyumna Ravi Chandra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
