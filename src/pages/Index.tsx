import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExpeditionMap from "@/components/ExpeditionMap";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Discoveries from "@/components/Discoveries";
import ExpeditionRecord from "@/components/ExpeditionRecord";
import Contact from "@/components/Contact";
import { Compass, MapPin, Terminal, Mountain } from "lucide-react";

const Index = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      {/* Sticky Navigation Bar */}
      <Header />

      {/* Main Exploration Sections */}
      <main className="relative">
        {/* Home → Expedition Base */}
        <Hero />

        {/* Territory Map */}
        <ExpeditionMap />

        {/* About → Explorer Profile */}
        <About />

        {/* Projects → Expeditions */}
        <Projects />

        {/* Skills → Equipment */}
        <Skills />

        {/* Education → Aug 2022 - May 2026 & 87% Result */}
        <Education />

        {/* Achievements → Discoveries */}
        <Discoveries />

        {/* Resume → Expedition Record */}
        <ExpeditionRecord />

        {/* Contact → Set Coordinates */}
        <Contact />
      </main>

      {/* Explorer Basecamp Footer */}
      <footer className="py-12 border-t border-border bg-card/90 font-mono text-xs text-[#6e4632] dark:text-[#c0ad97] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-border/60 pb-6">
            <div className="flex items-center gap-3 text-left">
              <div className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-sm text-[#2d180e] dark:text-[#f5ede2] block">
                  Musunuri Pradyumna Ravi Chandra
                </span>
                <span className="text-[11px] text-[#a33e14] dark:text-[#e86835]">
                  AI/ML Engineer & Systems Explorer • Base Camp Hyderabad
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#523321] dark:text-[#d6c7b2]">
              <button
                onClick={() => scrollToSection("hero")}
                className="hover:text-primary transition-colors"
              >
                Base
              </button>
              <span>•</span>
              <button
                onClick={() => scrollToSection("map")}
                className="hover:text-primary transition-colors"
              >
                Map
              </button>
              <span>•</span>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-primary transition-colors"
              >
                Profile
              </button>
              <span>•</span>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-primary transition-colors"
              >
                Expeditions
              </button>
              <span>•</span>
              <button
                onClick={() => scrollToSection("skills")}
                className="hover:text-primary transition-colors"
              >
                Equipment
              </button>
              <span>•</span>
              <button
                onClick={() => scrollToSection("education")}
                className="hover:text-primary transition-colors"
              >
                Education
              </button>
              <span>•</span>
              <button
                onClick={() => scrollToSection("discoveries")}
                className="hover:text-primary transition-colors"
              >
                Discoveries
              </button>
              <span>•</span>
              <button
                onClick={() => scrollToSection("resume")}
                className="hover:text-primary transition-colors"
              >
                Record
              </button>
              <span>•</span>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary transition-colors"
              >
                Coordinates
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px]">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-secondary" />
              <span>COORDINATES: 17.3850° N, 78.4867° E | ELEV: 542M</span>
            </div>
            <div>
              &ldquo;Don&apos;t just view my portfolio. Explore it.&rdquo; • © {currentYear}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
